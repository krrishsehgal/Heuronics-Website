import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Camera, Wrench, Gauge, Shield } from "lucide-react"

export default function ROVPage() {
  const capabilities = [
    { icon: Camera, title: "High-Resolution Imaging", desc: "4K cameras with powerful LED arrays" },
    { icon: Wrench, title: "Intervention Tools", desc: "Manipulator arms and specialized tools" },
    { icon: Gauge, title: "Deep Depth Rating", desc: "Operate to 1000m+ depths" },
    { icon: Shield, title: "Robust Construction", desc: "Marine-grade materials and sealing" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Remotely Operated Vehicles (ROVs)
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Tethered systems that provide high power, real-time control, and intervention capabilities for
                inspection, maintenance, and complex underwater operations.
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
              <img src="/underwater-rov-with-manipulator-arm.jpg" alt="ROV underwater" className="rounded-xl" />
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

      {/* Image Gallery */}
      <section className="border-y border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">Gallery</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={`/rov-underwater-operation-.jpg?height=400&width=600&query=ROV+underwater+operation+${i}`}
                  alt={`ROV in operation ${i}`}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">Ready to deploy?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch to discuss your requirements and see our ROV systems in action.
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
