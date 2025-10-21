import type { Stream } from "./courses";

export interface College {
  id: string;
  name: string;
  city: string;
  state: string;
  streams: Stream[];
  degrees: string[];
  rating: number;
  annualFees: string;
  website?: string;
  image: string;
  gallery: string[];
}

export const COLLEGES: College[] = [
  {
    id: "nitsri",
    name: "NIT Srinagar",
    city: "Srinagar",
    state: "J&K",
    streams: ["Science"],
    degrees: ["B.Tech", "M.Tech"],
    rating: 4.4,
    annualFees: "₹1.25L",
    website: "https://nitsri.ac.in",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
    ],
  },
  {
    id: "cusr",
    name: "Cluster University Srinagar",
    city: "Srinagar",
    state: "J&K",
    streams: ["Science", "Arts", "Commerce"],
    degrees: ["B.Sc", "B.A", "B.Com"],
    rating: 4.0,
    annualFees: "₹25k",
    website: "https://www.cusrinagar.edu.in",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
    ],
  },
  {
    id: "jammuuni",
    name: "University of Jammu",
    city: "Jammu",
    state: "J&K",
    streams: ["Science", "Arts", "Commerce"],
    degrees: ["BBA", "BCA", "B.Sc", "B.A"],
    rating: 4.2,
    annualFees: "₹35k",
    website: "https://www.jammuuniversity.ac.in",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1200&q=60&auto=format&fit=crop",
    ],
  },
  {
    id: "gdcana",
    name: "Govt. Degree College Anantnag",
    city: "Anantnag",
    state: "J&K",
    streams: ["Science", "Arts", "Commerce"],
    degrees: ["B.Sc", "B.A", "B.Com"],
    rating: 3.9,
    annualFees: "₹15k",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1200&q=60&auto=format&fit=crop",
    ],
  },
  {
    id: "iust",
    name: "Islamic University of Science & Technology",
    city: "Awantipora",
    state: "J&K",
    streams: ["Science"],
    degrees: ["B.Tech", "B.Sc", "BCA"],
    rating: 4.1,
    annualFees: "₹80k",
    website: "https://www.iust.ac.in",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1200&q=60&auto=format&fit=crop",
    ],
  },
  {
    id: "iitd",
    name: "IIT Delhi",
    city: "New Delhi",
    state: "Delhi",
    streams: ["Science"],
    degrees: ["B.Tech", "M.Tech", "PhD"],
    rating: 4.7,
    annualFees: "₹1–2L",
    website: "https://home.iitd.ac.in",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop"
    ]
  },
  {
    id: "srcc",
    name: "Shri Ram College of Commerce (SRCC)",
    city: "New Delhi",
    state: "Delhi",
    streams: ["Commerce"],
    degrees: ["B.Com", "B.A (Economics)"],
    rating: 4.6,
    annualFees: "₹20–50k",
    website: "https://www.srcc.edu",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop"
    ]
  },
  {
    id: "ftii",
    name: "FTII Pune",
    city: "Pune",
    state: "Maharashtra",
    streams: ["Arts"],
    degrees: ["Film", "TV", "Acting"],
    rating: 4.5,
    annualFees: "₹50–150k",
    website: "https://www.ftii.ac.in",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop"
    ]
  },
  {
    id: "nid",
    name: "National Institute of Design (NID)",
    city: "Ahmedabad",
    state: "Gujarat",
    streams: ["Arts"],
    degrees: ["B.Des", "M.Des"],
    rating: 4.6,
    annualFees: "₹80–200k",
    website: "https://www.nid.edu",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop"
    ]
  },
  {
    id: "aiimsd",
    name: "AIIMS Delhi",
    city: "New Delhi",
    state: "Delhi",
    streams: ["Science"],
    degrees: ["MBBS", "B.Sc Nursing", "Allied Health"],
    rating: 4.8,
    annualFees: "₹1–5k",
    website: "https://www.aiims.edu",
    image: "https://images.unsplash.com/photo-1584982752767-611b1cd3b2d1?w=1200&q=60&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584982752767-611b1cd3b2d1?w=1200&q=60&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop"
    ]
  }
];
