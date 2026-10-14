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
  title: "Crea con las tecnologías básicas de la web",
  description:
    "Desde una estructura semántica hasta diseños fluidos y experiencias interactivas, cada sitio web moderno se basa en el mismo trío de tecnologías. Si las dominas, podrás crear cualquier cosa.",
  card: [
    {
      title: "HTML5 semántico",
      description:
        "Estructura tu contenido con elementos semánticos, formularios accesibles y marcado amigable para SEO. Crea páginas con sentido tanto para las personas como para las máquinas.",
      icon: "lucide:activity",
    },
    {
      title: "CSS3 moderno",
      description:
        "Crea diseños responsivos con Flexbox, Grid y Container Queries. Da vida a tus diseños con animaciones, transiciones y propiedades personalizadas de CSS.",
      icon: "lucide:file-text",
    },
    {
      title: "JavaScript ES6+",
      description:
        "Añade interactividad con JavaScript vanilla. Desde la manipulación del DOM hasta el fetch asíncrono, escribe código limpio y mantenible que funcione en cualquier parte.",
      icon: "lucide:message-square",
    },
    {
      title: "Diseño responsivo",
      description:
        "Crea experiencias que se adapten a cualquier pantalla. Mobile-first, mejora progresiva y optimización del rendimiento para cada dispositivo y velocidad de conexión.",
      icon: "lucide:circle-play",
    },
  ],
};
