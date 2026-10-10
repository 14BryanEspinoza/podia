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
  title: "Proyectos reales creados por desarrolladores reales.",
  description:
    "Desde portafolios personales hasta aplicaciones web complejas, descubre lo que desarrolladores como tú crean cada día con tecnologías web modernas.",
  image: [
    {
      src: card1,
      alt: "Editor de código que muestra una estructura HTML5 semántica con encabezados y landmarks adecuados",
    },
    {
      src: card2,
      alt: "Vista previa de un diseño con CSS Grid y breakpoints responsivos en distintos dispositivos",
    },
    {
      src: card3,
      alt: "Consola de JavaScript que muestra manipulación del DOM y manejo de eventos",
    },
    {
      src: card4,
      alt: "Diseño web responsivo que se adapta desde el viewport de escritorio hasta el de móvil",
    },
    {
      src: card5,
      alt: "Diagrama de flujo de trabajo con Git que muestra ramificación, fusión y despliegue",
    },
    {
      src: card6,
      alt: "Panel de DevTools del navegador que inspecciona los estilos CSS y el diseño",
    },
    {
      src: card7,
      alt: "Archivo package.json que muestra las dependencias y los scripts del proyecto",
    },
    {
      src: card8,
      alt: "Auditoría de rendimiento de Lighthouse que evalúa los Core Web Vitals",
    },
  ],
};
