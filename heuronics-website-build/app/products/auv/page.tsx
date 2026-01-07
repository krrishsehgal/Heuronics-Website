import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Navigation, Battery, Brain, Shield } from "lucide-react"

export default function AUVPage() {
  const capabilities = [
    {
      icon: Navigation,
      title: "Autonomous Navigation",
      desc: "Advanced mission planning and path optimization",
    },
    {
      icon: Shield,
      title: "Obstacle Avoidance",
      desc: "Real-time sensing to ensure vehicle and infrastructure safety",
    },
    { icon: Brain, title: "Environmental Logging", desc: "Comprehensive data collection throughout the mission" },
    { icon: Battery, title: "Long Endurance", desc: "Extended operation times with minimal surface support" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                AUV – Autonomous Underwater Vehicle
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Heuronics’ AUVs are untethered platforms capable of executing pre-programmed missions autonomously,
                making them suitable for long-duration surveys and data collection. Our systems enable repeatable
                mission execution with significantly reduced surface intervention.
              </p>
              <div className="mt-8">
                <Link href="/request-demo">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/autonomous-underwater-vehicle-torpedo-shaped.jpg"
                alt="AUV underwater"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">Key Capabilities</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, idx) => (
              <Card key={idx} className="border-border bg-card transition-all hover:border-primary/50">
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy Section */}
      <section className="border-y border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Typical Applications</h2>
              <ul className="mt-8 space-y-4">
                {["Seabed mapping", "Environmental monitoring", "Large-area underwater surveys"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Technical Specifications</h2>
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-secondary/50">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-foreground">Parameter</th>
                      <th className="px-6 py-3 font-semibold text-foreground">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { p: "Operating Depth", s: "300–1000 m (model dependent)" },
                      { p: "Navigation", s: "IMU, DVL, INS, GPS (surface)" },
                      { p: "Endurance", s: "4–10 hours" },
                      { p: "Control Mode", s: "Autonomous / Pre-programmed" },
                      { p: "Payload", s: "Side-scan sonar, cameras, CTD" },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 font-medium text-foreground">{row.p}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">Experience true underwater autonomy</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn how our AUV platforms can transform your underwater operations.
          </p>
          <div className="mt-8">
            <Link href="/request-demo">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
