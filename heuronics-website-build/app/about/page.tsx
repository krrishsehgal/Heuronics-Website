import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const timeline = [
    {
      year: "2019",
      title: "Foundation",
      description: "Founded with a focus on robust small ROVs.",
      details:
        "Heuronics was established by a team of marine robotics engineers with backgrounds in defense, research, and commercial diving. Our mission from day one: make reliable underwater robots accessible for real operations.",
    },
    {
      year: "2022",
      title: "Autonomy v1.0",
      description: "Autonomy stack reaches v1.0.",
      details:
        "After three years of development and testing, we released our first production autonomy stack, enabling semi-autonomous missions for ROV operations and laying the groundwork for fully autonomous AUV capabilities.",
    },
    {
      year: "2025",
      title: "AUV Platform",
      description: "AUV concept platform in pilot testing.",
      details:
        "Our fully autonomous AUV platform enters pilot testing with select customers in research and energy sectors, featuring extended endurance, advanced navigation, and Autonomy 2.0 stack.",
    },
  ]

  return (
    <main className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Heuronics</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Our mission is to make reliable underwater robots accessible for real operations.
          </p>
        </div>

        {/* Story */}
        <div className="mt-16 rounded-2xl border border-border bg-secondary/20 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Underwater robotics has traditionally been expensive, complex, and limited to well-funded organizations. We
            believe that high-quality ROVs and AUVs should be within reach for research institutions, commercial
            operators, and government agencies who need reliable tools for underwater work.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            By focusing on modular design, proven components, and open interfaces, we create platforms that can be
            deployed, maintained, and upgraded by our customers without requiring specialized expertise or vendor
            lock-in.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-foreground">Timeline</h2>
          <div className="mt-12 space-y-8">
            {timeline.map((milestone, idx) => (
              <div key={idx} className="relative">
                {idx !== timeline.length - 1 && (
                  <div className="absolute left-[60px] top-[80px] h-full w-px bg-border" />
                )}
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-primary/10">
                          <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-4">
                        <CardTitle className="text-2xl">{milestone.title}</CardTitle>
                        <p className="mt-2 text-base text-muted-foreground">{milestone.description}</p>
                        <CardContent className="p-0 pt-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.details}</p>
                        </CardContent>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Reliability", desc: "Systems that work when you need them, in demanding conditions." },
              { title: "Accessibility", desc: "Making advanced underwater robotics available to more operators." },
              { title: "Openness", desc: "Documented interfaces and support for customer integration." },
            ].map((value, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
