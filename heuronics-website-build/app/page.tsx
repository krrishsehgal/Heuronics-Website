import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Underwater drones for real-world missions.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Modular ROVs & AUVs with long endurance, precise navigation, and real autonomy—ready for research,
                inspection, and defense.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-demo">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary bg-transparent"
                  >
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5" />
              <img
                src="/underwater-rov-drone-render.jpg"
                alt="Heuronics ROV underwater vehicle"
                className="relative h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <section className="border-y border-border bg-secondary/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
            Trusted by teams in energy, research, and defense.
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for demanding environments
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Precision engineering meets operational reliability</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Long Endurance", desc: "Extended mission duration with smart power management" },
              { title: "Precise Navigation", desc: "Multi-sensor fusion for accurate positioning" },
              { title: "Real Autonomy", desc: "Adaptive mission planning and safe modes" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
