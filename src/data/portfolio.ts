export type Project = {
  id: string;
  /** Display index, e.g. "01" */
  index: string;
  title: string;
  category: string;
  description: string;
  year: string;
  stack: string[];
  /** TODO: point at real repo / case-study links once they exist. */
  href: string;
};

export type Social = {
  label: string;
  href: string;
};

export const profile = {
  name: "Sanika Gopale",
  role: "ECS Engineering · 2nd Year",
  metaTitle: "Sanika Gopale — ECS Engineering Student",
  education: "ECS Engineering",
  yearOfStudy: "2nd Year",
  availability: "Open to internships, collaborations & hackathons",
  /** TODO: replace with a real address — `example.com` is a placeholder domain. */
  email: "sanika.gopale@example.com",
  summary:
    "Second-year ECS engineering student building projects that solve current problems — waste, personal safety, and the livelihoods of artisans.",
  hero:
    "I'm a second-year ECS engineering student turning real-world problems into working prototypes — robotics, AI, and platforms built to reach people. Learning the craft now, with an eye on building something of my own.",
  bio: "I'm Sanika, a second-year ECS engineering student at the start of what I hope is a long, deliberate build. What I care about is problems that are actually felt on the ground — waste that cities can't manage, women who should never feel unsafe alone, artisans whose craft is invisible to the market. Most of what I've learned so far has come from building for those problems, not from textbooks.",
  aim: "To build a successful career in the technology field by developing my technical skills, exploring innovative ideas, and creating technology-based solutions to real-world problems — with the long-term goal of becoming an entrepreneur.",
  socials: [
    { label: "GitHub", href: "https://github.com/sanika03-web" },
    { label: "Instagram", href: "https://www.instagram.com/sanikagopale_?srtk=d29kOGRmb3hudmlu" },
  ] satisfies Social[],
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const capabilities = [
  "Web development",
  "Artificial intelligence & ML",
  "Robotics & IoT prototyping",
  "Problem framing & research",
  "UI/UX design",
  "Pitching & communication",
];

export const projects: Project[] = [
  {
    id: "trashbot-x",
    index: "01",
    title: "Trashbot X",
    category: "Robotics & AI",
    description:
      "An intelligent waste-sorting robot that classifies material on the fly, so segregation stops depending on human effort.",
    year: "2025",
    stack: ["Python", "TensorFlow", "OpenCV", "Arduino"],
    href: "#work",
  },
  {
    id: "saveher-ai",
    index: "02",
    title: "SaveHer AI",
    category: "Safety · AI",
    description:
      "An AI companion that turns live surroundings into live safety signals — context-aware help when it matters, privacy first.",
    year: "2025",
    stack: ["Python", "NLP", "Next.js", "Firebase"],
    href: "#work",
  },
  {
    id: "karigar-setu",
    index: "03",
    title: "Karigar Setu",
    category: "SIH · Platform",
    description:
      "A bridge between artisans and the people who want their craft, giving traditional makers a direct route to a fair market.",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    href: "#work",
  },
];
