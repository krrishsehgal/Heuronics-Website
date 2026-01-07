import { Zap, FlaskConical, Fish, Shield } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Zap,
      title: "Energy & Offshore",
      description:
        "Operational continuity and safety for subsea infrastructure.",
      details:
        "Used for subsea pipeline inspection, offshore wind foundation surveys, and structural integrity assessments without interrupting operations. Our systems ensure continuous monitoring while reducing personnel risk.",
      image: "/energyandoffshore.png",
    },
    {
      icon: Shield,
      title: "Defense & Security",
      description: "Underwater threat detection and infrastructure protection.",
      details:
        "Supports harbor surveillance, hull inspection, and underwater threat detection with minimal risk to personnel. We provide high-resolution data for mission-critical security operations.",
      image: "/security.png",
    },
    {
      icon: FlaskConical,
      title: "Marine Research",
      description: "High-quality oceanographic data for scientific discovery.",
      details:
        "Enables seabed mapping, biodiversity monitoring, and environmental data collection in deep and shallow waters. Our focus on data quality and repeatability supports long-term scientific research.",
      image: "/marine.png",
    },
    {
      icon: Fish,
      title: "Aquaculture",
      description: "Improving operational efficiency in marine farming.",
      details:
        "Assists in net inspection, cage monitoring, and infrastructure health checks to improve operational efficiency and ensure stock health through persistent underwater presence.",
      image: "/aqauculture.png",
    },
  ];

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Industries & Applications
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Engineering-driven solutions for real-world underwater work
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <industry.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {industry.title}
                </h2>
                <p className="text-xl text-primary/80 font-medium">
                  {industry.description}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {industry.details}
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl">
                  <img
                    src={`${
                      industry.image
                    }?height=600&width=800&query=${encodeURIComponent(
                      industry.title
                    )}`}
                    alt={industry.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
