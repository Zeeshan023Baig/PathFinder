import type { RequestHandler } from "express";

// System prompt for OpenAI
const SYS_PROMPT = `You are PathFinder, a career and education advisor for Indian students in classes 10 and 12.
Be concise and practical. When comparing courses, include duration, entry exams if any, and typical roles.
Recommend among Arts, Science, Commerce when relevant.`;

interface OpenAIResponse {
  choices?: { message?: { content?: string } }[];
}

interface AiRequestBody {
  prompt?: string;
}

// Function to call OpenAI API
async function callOpenAI(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OpenAI API key");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYS_PROMPT },
        { role: "user", content: prompt },
      ],
      temperature: Number(process.env.OPENAI_TEMPERATURE ?? 0.2),
      max_tokens: Number(process.env.OPENAI_MAX_TOKENS ?? 400),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("OpenAI API error:", response.status, errorText);
    throw new Error(`OpenAI API error: ${response.status}`);
  }

  const data: OpenAIResponse = await response.json();
  return data.choices?.[0]?.message?.content ?? "I couldn't generate a response.";
}

// Heuristic fallback
function heuristic(prompt: string): string {
  const s = prompt.toLowerCase();

  if (/(b\.sc|bsc).*diploma/.test(s)) {
    return "B.Sc provides deeper theory and opens paths like M.Sc/PhD and research; Diploma is shorter and skill-focused for quick entry. Choose B.Sc for academics/analytics, Diploma for job-oriented skills and lower cost.";
  }

  if (/after\s*(10|10th)/.test(s)) {
    return "After Class 10, choose your stream based on interests: Science (PCM/PCB) for engineering/medical, Commerce for business/finance, Arts for humanities/design/media. Take our Career Test for a personalized pick.";
  }

  if (/mba|salary/.test(s)) {
    return "MBA outcomes vary by institute and profile. Tier-1 averages can be 15–35 LPA; focus on internships, quantitative skills, and networking. Consider B.Com/BBA → MBA if you enjoy management/finance.";
  }

  return "Try asking about specific streams, degrees, exams, or use the Career Test for tailored suggestions. (AI offline mode)";
}

// Express request handler
export const aiRecommend: RequestHandler<{}, {}, AiRequestBody> = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const content = await callOpenAI(prompt);
    return res.json({ content, provider: "openai" });
  } catch (err) {
    console.warn("Falling back to heuristic due to OpenAI error:", err);
    const content = heuristic(prompt);
    return res.json({ content, provider: "heuristic" });
  }
};
