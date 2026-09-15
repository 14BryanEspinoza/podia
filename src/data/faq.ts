interface FaqProps {
  title: string;
  question: {
    summary: string;
    info: string;
  }[];
}

export const faq: FaqProps = {
  title: "Frequently Asked Questions",
  question: [
    {
      summary: "What do I need to start learning web development?",
      info: "All you need is a computer, a text editor, and a web browser. Start with HTML for structure, CSS for styling, and JavaScript for interactivity. No prior experience required.",
    },
    {
      summary: "How long does it take to build a website?",
      info: "A simple one-page site can be built in a few hours once you know the basics. More complex projects like web applications can take weeks or months, depending on the features and your experience level.",
    },
    {
      summary: "What tools do professional developers use?",
      info: "Developers use code editors (VS Code), version control (Git), package managers (npm/pnpm), build tools (Vite), and browser DevTools. Each tool serves a specific purpose in the development workflow.",
    },
    {
      summary: "Do I need to know design to be a developer?",
      info: "Not necessarily. While understanding design principles helps, many developers specialize in frontend or backend logic. CSS frameworks and design systems can help you create good-looking sites without a design background.",
    },
    {
      summary: "How do I stay updated with new web technologies?",
      info: "Follow developer blogs, join online communities, attend webinars, and practice regularly. The web evolves fast, but the fundamentals — HTML, CSS, and JavaScript — remain essential.",
    },
  ],
};
