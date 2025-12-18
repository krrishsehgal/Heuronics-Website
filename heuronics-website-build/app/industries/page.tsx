import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, FlaskConical, Fish, Shield, HardHat } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Zap,
      title: "Offshore Energy",
      description: "Inspection & intervention in harsh seas.",
      details:
        "Pipeline monitoring, platform inspection, subsea infrastructure maintenance, and cable surveys for oil & gas and renewable energy sectors.",
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Flexible payloads for ocean science.",
      details:
        "Marine biology studies, oceanographic surveys, habitat mapping, climate research, and scientific sample collection.",
    },
    {
      icon: Fish,
      title: "Aquaculture",
      description: "Routine net checks & stock monitoring.",
      details:
        "Net integrity inspection, fish health monitoring, feeding optimization, site selection surveys, and environmental impact assessment.",
    },
    {
      icon: Shield,
      title: "Defense",
      description: "MCM, harbor security, training.",
      details:
        "Mine countermeasures, harbor protection, underwater surveillance, search and recovery operations, and military training exercises.",
    },
    {
      icon: HardHat,
      title: "Inspection",
      description: "Hull, pipeline, and infrastructure surveys.",
      details:
        "Ship hull inspection, dam surveys, bridge pier assessment, underwater structure monitoring, and coastal infrastructure maintenance.",
    },
  ]

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Industries We Serve</h1>
          <p className="mt-4 text-lg text-muted-foreground">Proven solutions across multiple sectors</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, idx) => (
            <Card
              key={idx}
              className="group border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <industry.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
