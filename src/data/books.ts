import type { CardsProps } from "@data/products";

export const books: CardsProps = {
  title: "Master the Tools and Practices of Modern Development",
  description:
    "Professional developers rely on a set of essential tools and workflows that boost productivity, ensure quality, and make collaboration seamless.",
  card: [
    {
      title: "Version Control",
      description:
        "Track changes, collaborate with others, and manage your codebase with Git. Branch, merge, and deploy with confidence.",
    },
    {
      title: "Build Tools",
      description:
        "Automate your workflow with bundlers and task runners. Compile, minify, and optimize your code for production in one command.",
    },
    {
      title: "Package Managers",
      description:
        "Manage dependencies effortlessly with npm or pnpm. Install, update, and share libraries across your projects with ease.",
    },
    {
      title: "CSS Frameworks",
      description:
        "Accelerate your styling with utility-first frameworks. Build consistent, responsive designs without writing repetitive CSS.",
    },
    {
      title: "Testing & Debugging",
      description:
        "  Catch bugs early with automated tests and browser DevTools. Write unit tests, integration tests, and debug with confidence.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize Core Web Vitals, lazy load assets, and reduce bundle sizes. Deliver fast, smooth experiences that users love.",
    },
  ],
};
