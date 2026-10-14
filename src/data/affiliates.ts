interface FeaturesProps {
  title: string;
  description: string;
  feat: {
    title: string;
    description: string;
  }[];
}

export const features: FeaturesProps = {
  title: "Aprende, crea y crece como desarrollador",
  description:
    "La mejor manera de aprender desarrollo web es construyendo proyectos reales. Ya sea que estés empezando o quieras dar un paso más, siempre hay algo nuevo por descubrir.",
  feat: [
    {
      title: "Aprende a tu propio ritmo",
      description:
        "Comienza con los fundamentos y avanza hacia temas más avanzados. HTML, CSS, JavaScript: construye una base sólida paso a paso.",
    },
    {
      title: "Crea proyectos reales",
      description:
        "Aplica lo que aprendes creando sitios web y aplicaciones reales. Proyectos listos para tu portafolio que demuestran tus habilidades a futuros empleadores.",
    },
    {
      title: "Únete a una comunidad de apoyo",
      description:
        "Conecta con otros desarrolladores, comparte conocimiento y recibe comentarios sobre tu código. Aprende más rápido creciendo junto a los demás.",
    },
  ],
};
