import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Globe, Shield } from "lucide-react"

export default function ResourcesPage() {
  const externalResources = [
    {
      icon: Globe,
      title: "NOAA – Underwater Robotics Overview",
      description: "Exploration technology and methods.",
      details:
        "Comprehensive overview of robotics in ocean exploration, covering the fundamental roles of ROVs and AUVs in marine science.",
      link: "https://oceanexplorer.noaa.gov/technology/robotics/robotics.html",
    },
    {
      icon: BookOpen,
      title: "Woods Hole Oceanographic Institution",
      description: "ROVs & AUVs in depth.",
      details:
        "Detailed research on underwater vehicle design, operational capabilities, and the history of subsea exploration platforms.",
      link: "https://www.whoi.edu/what-we-do/explore/underwater-vehicles/",
    },
    {
      icon: Shield,
      title: "IEEE – Autonomous Underwater Vehicles Research",
      description: "Peer-reviewed technical research.",
      details:
        "Technical papers and research developments in AUV navigation, control systems, and autonomous mission planning.",
      link: "https://ieeexplore.ieee.org",
    },
    {
      icon: Globe,
      title: "National Institute of Ocean Technology",
      description: "Marine technology development.",
      details:
        "Research and development initiatives in deep-sea technology and underwater robotics for industrial and research applications.",
      link: "https://www.niot.res.in",
    },
  ]

  return (
    <main className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Resources & References</h1>
          <p className="mt-4 text-lg text-muted-foreground">Credible research and technical documentation</p>
        </div>

        <div className="mt-16 space-y-6">
          {externalResources.map((resource, idx) => (
            <a key={idx} href={resource.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 rounded-xl bg-primary/10 p-4">
                      <resource.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary flex items-center gap-2">
                            {resource.title}
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="mt-1 text-base text-muted-foreground">
                            {resource.description}
                          </CardDescription>
                        </div>
                      </div>
                      <CardContent className="p-0 pt-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{resource.details}</p>
                        <div className="mt-4 text-sm font-medium text-primary">View Resource →</div>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/20 p-8">
          <h2 className="text-xl font-bold text-foreground">Technical Support</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            For custom integration guides, detailed specifications, or technical inquiries regarding Heuronics’ systems,
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
