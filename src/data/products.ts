export interface CardsProps {
  title: string;
  description: string;
  card: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export const products: CardsProps = {
  title: "Build With the Core Technologies of the Web",
  description:
    "From semantic structure to fluid layouts and interactive experiences, every modern website is powered by the same trio of technologies. Master them and you can build anything.",
  card: [
    {
      title: "Semantic HTML5",
      description:
        "Structure your content with semantic elements, accessible forms, and SEO-friendly markup. Build pages that are meaningful to both humans and machines.",
      icon: "lucide:activity",
    },
    {
      title: "Modern CSS3",
      description:
        "Build responsive layouts with Flexbox, Grid, and Container Queries. Bring designs to life with animations, transitions, and CSS custom properties.",
      icon: "lucide:file-text",
    },
    {
      title: "JavaScript ES6+",
      description:
        "Add interactivity with vanilla JavaScript. From DOM manipulation to async fetch, write clean, maintainable code that runs everywhere.",
      icon: "lucide:message-square",
    },
    {
      title: "Responsive Design",
      description:
        "Create experiences that adapt to any screen. Mobile-first, progressive enhancement, and performance optimization for every device and connection speed.",
      icon: "lucide:circle-play",
    },
  ],
};
