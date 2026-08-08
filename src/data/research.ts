export type ResearchArea = {
  title: string;
  description: string;
  icon: "circuit" | "layers" | "waves" | "cpu" | "atom" | "zap";
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Organic Electronics",
    description:
      "Electronic devices built from organic semiconducting materials, with emphasis on charge transport and device stability.",
    icon: "atom",
  },
  {
    title: "Flexible Electronics",
    description:
      "Devices and circuits fabricated on bendable substrates for conformable and large-area electronic systems.",
    icon: "layers",
  },
  {
    title: "Organic Field-Effect Transistors",
    description:
      "Design, fabrication and characterisation of OFETs, including dielectric and interface engineering.",
    icon: "circuit",
  },
  {
    title: "Thin-Film Electronics",
    description:
      "Thin-film device architectures and processing routes for transistors and related components.",
    icon: "waves",
  },
  {
    title: "Semiconductor Device Modelling",
    description:
      "Analytical and numerical modelling of semiconductor devices to relate physical structure to electrical behaviour.",
    icon: "cpu",
  },
  {
    title: "Low-Power CMOS VLSI",
    description:
      "Circuit and device level approaches to reducing power consumption in digital integrated systems.",
    icon: "zap",
  },
];

export type FeaturedResearch = {
  title: string;
  area: string;
  description: string;
  related: string;
};

export const featuredResearch: FeaturedResearch[] = [
  {
    title: "Charge Transport in Organic Semiconductor Devices",
    area: "Organic Electronics",
    description:
      "Investigation of carrier transport mechanisms and interface behaviour in organic semiconductor layers and their influence on device performance.",
    related: "Related publications to be updated",
  },
  {
    title: "Flexible Thin-Film Transistor Architectures",
    area: "Flexible Electronics",
    description:
      "Development of thin-film transistor structures suited to flexible substrates, with attention to processing constraints and mechanical stability.",
    related: "Related publications to be updated",
  },
  {
    title: "Device Modelling for Emerging Transistors",
    area: "Semiconductor Device Modelling",
    description:
      "Modelling frameworks that link device geometry and material parameters to measured electrical characteristics.",
    related: "Related publications to be updated",
  },
  {
    title: "Low-Power Digital Circuit Design",
    area: "Low-Power VLSI",
    description:
      "Study of low-power design techniques at circuit and device level for energy-constrained electronic systems.",
    related: "Related publications to be updated",
  },
];
