import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Navigation, Radio, Battery, Boxes } from "lucide-react"

export default function TechnologyPage() {
  const technologies = [
    {
      icon: Brain,
      title: "Autonomy",
      description: "Adaptive mission planner; safe modes; health monitoring.",
      details:
        "Our autonomy stack v2.0 features real-time mission adaptation, intelligent fault detection and recovery, energy-aware planning, and comprehensive system health monitoring to ensure safe autonomous operations.",
    },
    {
      icon: Navigation,
      title: "Navigation",
      description: "DVL, INS, depth, and visual odometry fusion.",
      details:
        "Multi-sensor fusion combining Doppler Velocity Log, Inertial Navigation System, pressure sensors, and visual odometry for centimeter-level positioning accuracy in GPS-denied underwater environments.",
    },
    {
      icon: Radio,
      title: "Comms",
      description: "Tethered Ethernet, acoustic links, and surface radios.",
      details:
        "Flexible communication architecture supporting high-bandwidth tethered operations, long-range acoustic modems for AUV command and control, and surface RF links for deployment and recovery.",
    },
    {
      icon: Battery,
      title: "Power",
      description: "High-density packs with smart BMS.",
      details:
        "Custom lithium battery systems with intelligent Battery Management Systems (BMS) for optimal power delivery, safety monitoring, predictive remaining runtime, and hot-swappable modules for extended operations.",
    },
    {
      icon: Boxes,
      title: "Materials",
      description: "Corrosion-resistant alloys and polymers.",
      details:
        "Marine-grade aluminum alloys, titanium components for deep-rated sections, advanced polymer seals, and conformal coatings to withstand harsh saltwater environments and extreme pressures.",
    },
  ]

  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Technology Stack</h1>
          <p className="mt-4 text-lg text-muted-foreground">Advanced systems engineering for underwater robotics</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {technologies.map((tech, idx) => (
            <Card
              key={idx}
              className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <tech.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{tech.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{tech.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-24 rounded-2xl border border-border bg-secondary/20 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-foreground">System Architecture</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our platform architecture is built on modular, field-proven components with redundant critical systems. The
            core compute stack runs real-time Linux with deterministic control loops, ROS 2 middleware for sensor
            integration, and custom autonomy software written in modern C++ and Python.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Compute</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Embedded ARM/x86 with GPU acceleration for vision processing
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Interfaces</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ethernet, RS-485, CAN, analog, and digital I/O</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Software</h3>
              <p className="mt-2 text-sm text-muted-foreground">Open architecture with documented APIs</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
