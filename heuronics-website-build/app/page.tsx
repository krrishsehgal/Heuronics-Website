import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
                Advanced Underwater Robotics for Mission-Critical Operations
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Heuronics designs and develops Remotely Operated Vehicles (ROVs)
                and Autonomous Underwater Vehicles (AUVs) for underwater
                inspection, surveillance, research, and industrial subsea
                operations.
              </p>
              <p className="mt-4 text-sm font-medium text-primary/80">
                Engineered for reliability, precision, and real-world
                deployment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/request-demo">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
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
            <div className="relative h-[400px] lg:h-[550px]">
              <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5" />
              <img
                src="/CoverPage.jpg"
                alt="Heuronics ROV underwater vehicle operating in a real environment"
                className="relative h-full w-full rounded-2xl object-top object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <section className="border-y border-border bg-secondary/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
            “Heuronics works closely with engineers, researchers, and industry
            partners to develop underwater robotic systems suited for real-world
            deployment.”
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Core Value Highlights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Engineering-driven design for subsea excellence
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Reliability",
                desc: "Designed to operate in harsh underwater conditions with pressure-rated enclosures, corrosion-resistant materials, and stable control systems. Our platforms ensure consistent performance across long missions and challenging environments, minimizing equipment failure risks.",
              },
              {
                title: "Precision",
                desc: "High-resolution imaging, accurate navigation, and controlled maneuvering ensure reliable data capture even in low-visibility environments. We leverage advanced sensing and control accuracy to provide actionable intelligence for complex subsea tasks.",
              },
              {
                title: "Operational Efficiency",
                desc: "Reduces risk and operational cost by replacing diver-based and manual underwater inspections with robotic missions. This approach improves safety, repeatability, and significantly reduces operational downtime.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
