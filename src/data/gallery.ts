import type { ImageMetadata } from "astro";
import card1 from "@assets/card1.jpg";
import card2 from "@assets/card2.jpg";
import card3 from "@assets/card3.jpg";
import card4 from "@assets/card4.jpg";
import card5 from "@assets/card5.jpg";
import card6 from "@assets/card6.jpg";
import card7 from "@assets/card7.jpg";
import card8 from "@assets/card8.jpg";

interface GalleryProps {
  title: string;
  description: string;
  image: {
    src: ImageMetadata;
    alt: string;
  }[];
}

export const gallery: GalleryProps = {
  title: "Real Projects Built by Real Developers.",
  description:
    "From personal portfolios to complex web applications, see what developers like you are creating with modern web technologies every day.",
  image: [
    {
      src: card1,
      alt: "Code editor showing semantic HTML5 structure with proper headings and landmarks",
    },
    {
      src: card2,
      alt: "CSS grid layout preview with responsive breakpoints across devices",
    },
    {
      src: card3,
      alt: "JavaScript console showing DOM manipulation and event handling",
    },
    {
      src: card4,
      alt: "Responsive website design adapting from desktop to mobile viewport",
    },
    {
      src: card5,
      alt: "Git workflow diagram showing branching, merging, and deployment",
    },
    {
      src: card6,
      alt: "Browser DevTools panel inspecting CSS styles and layout",
    },
    {
      src: card7,
      alt: "Package.json file showing project dependencies and scripts",
    },
    { src: card8, alt: "Lighthouse performance audit scoring Core Web Vitals" },
  ],
};
