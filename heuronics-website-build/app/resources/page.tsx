import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, Wrench } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      icon: FileText,
      title: "Overview Brochure",
      description: "Company & platform overview.",
      details:
        "Comprehensive introduction to Heuronics, our ROV and AUV product lines, key specifications, and application examples across industries.",
      size: "2.4 MB PDF",
    },
    {
      icon: FileCheck,
      title: "Autonomy 2.0 Whitepaper",
      description: "A deep dive into our stack.",
      details:
        "Technical whitepaper detailing our autonomy architecture, planning algorithms, safety systems, and real-world performance data.",
      size: "1.8 MB PDF",
    },
    {
      icon: Wrench,
      title: "Interface Guide",
      description: "Power, data, and mounts.",
      details:
        "Engineering reference for mechanical interfaces, electrical connections, communication protocols, and payload integration options.",
      size: "3.2 MB PDF",
    },
  ]

  return (
    <main className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Resources</h1>
          <p className="mt-4 text-lg text-muted-foreground">Technical documentation and product information</p>
        </div>

        <div className="mt-16 space-y-6">
          {resources.map((resource, idx) => (
            <Card
              key={idx}
              className="group cursor-pointer border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 rounded-xl bg-primary/10 p-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary">{resource.title}</CardTitle>
                        <CardDescription className="mt-1 text-base text-muted-foreground">
                          {resource.description}
                        </CardDescription>
                      </div>
                      <span className="text-xs text-muted-foreground">{resource.size}</span>
                    </div>
                    <CardContent className="p-0 pt-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{resource.details}</p>
                      <div className="mt-4 text-sm font-medium text-primary">Download PDF →</div>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 rounded-2xl border border-border bg-secondary/20 p-8">
          <h2 className="text-xl font-bold text-foreground">Need more information?</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            For technical support, custom integration guides, or detailed specifications for your specific application,
            please contact our engineering team.
          </p>
          <div className="mt-6">
            <a
              href="/request-demo"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Contact Engineering Team →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
