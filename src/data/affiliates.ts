interface FeaturesProps {
  title: string;
  description: string;
  feat: {
    title: string;
    description: string;
  }[];
}

export const features: FeaturesProps = {
  title: "Learn, Build, and Grow as a Developer",
  description:
    "The best way to learn web development is by building real projects. Whether you're just starting or leveling up, there's always something new to discover.",
  feat: [
    {
      title: "Learn at Your Own Pace",
      description:
        "Start with the fundamentals and progress to advanced topics. HTML, CSS, JavaScript — build a solid foundation one step at a time.",
    },
    {
      title: "Build Real-World Projects",
      description:
        "Apply what you learn by building actual websites and applications. Portfolio-ready projects that demonstrate your skills to future employers.",
    },
    {
      title: "Join a Supportive Community",
      description:
        "Connect with fellow developers, share knowledge, and get feedback on your code. Learn faster by growing together.",
    },
  ],
};
