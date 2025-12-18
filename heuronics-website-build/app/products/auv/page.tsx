import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Navigation, Battery, Brain, Anchor } from "lucide-react"

export default function AUVPage() {
  const capabilities = [
    { icon: Brain, title: "True Autonomy", desc: "Adaptive mission planning and execution" },
    { icon: Navigation, title: "Precision Navigation", desc: "DVL, INS, and visual odometry fusion" },
    { icon: Battery, title: "Extended Endurance", desc: "Up to 72 hours of continuous operation" },
    { icon: Anchor, title: "Modular Payloads", desc: "Flexible sensor and tool integration" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Autonomous Underwater Vehicles (AUVs)
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Untethered platforms with advanced autonomy for long-range missions, ocean mapping, survey operations,
                and persistent underwater presence.
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
              <img src="/autonomous-underwater-vehicle-torpedo-shaped.jpg" alt="AUV underwater" className="rounded-xl" />
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
              <h2 className="text-3xl font-bold text-foreground">Advanced Autonomy</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our AUV autonomy stack enables safe, reliable operations without constant human oversight. The system
                adapts to changing conditions, manages energy efficiently, and makes intelligent decisions to ensure
                mission success.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Mission planning and re-planning",
                  "Obstacle detection and avoidance",
                  "Health monitoring and fault management",
                  "Energy-aware path optimization",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={`/auv-underwater-autonomous-.jpg?height=300&width=300&query=AUV+underwater+autonomous+${i}`}
                    alt={`AUV operation ${i}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
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
