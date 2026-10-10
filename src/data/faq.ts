interface FaqProps {
  title: string;
  question: {
    summary: string;
    info: string;
  }[];
}

export const faq: FaqProps = {
  title: "Preguntas frecuentes",
  question: [
    {
      summary: "¿Qué necesito para empezar a aprender desarrollo web?",
      info: "Solo necesitas una computadora, un editor de texto y un navegador web. Comienza con HTML para la estructura, CSS para los estilos y JavaScript para la interactividad. No se requiere experiencia previa.",
    },
    {
      summary: "¿Cuánto tiempo se tarda en crear un sitio web?",
      info: "Un sitio sencillo de una página se puede crear en unas pocas horas cuando ya conoces lo básico. Proyectos más complejos, como aplicaciones web, pueden llevar semanas o meses, según las características y tu nivel de experiencia.",
    },
    {
      summary: "¿Qué herramientas usan los desarrolladores profesionales?",
      info: "Los desarrolladores usan editores de código (VS Code), control de versiones (Git), gestores de paquetes (npm/pnpm), herramientas de build (Vite) y los DevTools del navegador. Cada herramienta cumple una función específica en el flujo de trabajo de desarrollo.",
    },
    {
      summary: "¿Necesito saber de diseño para ser desarrollador?",
      info: "No necesariamente. Aunque entender principios de diseño ayuda, muchos desarrolladores se especializan en la lógica de frontend o backend. Los frameworks de CSS y los design systems pueden ayudarte a crear sitios atractivos sin tener experiencia en diseño.",
    },
    {
      summary: "¿Cómo me mantengo al día con las nuevas tecnologías web?",
      info: "Sigue blogs de desarrolladores, únete a comunidades en línea, asiste a webinars y practica regularmente. La web evoluciona rápido, pero los fundamentos — HTML, CSS y JavaScript — siguen siendo esenciales.",
    },
  ],
};
