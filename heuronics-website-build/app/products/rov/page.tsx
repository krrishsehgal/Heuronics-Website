import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, Wrench, Gauge, Shield } from "lucide-react";

export default function ROVPage() {
  const capabilities = [
    {
      icon: Camera,
      title: "Live HD / 4K Video Feed",
      desc: "Real-time visual feedback for precise operator control",
    },
    {
      icon: Gauge,
      title: "Six-Degree-of-Freedom",
      desc: "Unmatched maneuverability for complex intervention tasks",
    },
    {
      icon: Wrench,
      title: "Modular Payload Support",
      desc: "Flexible integration for specialized sensors and tools",
    },
    {
      icon: Shield,
      title: "Depth-Rated Housing",
      desc: "Pressure-rated enclosures for deep-sea operations",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                ROV – Remotely Operated Vehicle
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Heuronics’ ROVs are tethered underwater vehicles operated in
                real time from the surface. They are designed for inspection,
                monitoring, and intervention tasks where human access is unsafe
                or impractical, providing continuous surface control and
                high-bandwidth operator feedback.
              </p>
              <div className="mt-8">
                <Link href="/request-demo">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/varuna.jpg"
                alt="ROV underwater"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">
            Key Capabilities
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, idx) => (
              <Card
                key={idx}
                className="border-border bg-card transition-all hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
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
            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src="/rov1.png"
                alt="ROV underwater operation 1"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>

            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src="/rov2.jpg"
                alt="ROV underwater operation 2"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>

            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src="/rov3.png"
                alt="ROV underwater operation 3"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typical Applications and Specifications Table */}
      <section className="border-y border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Typical Applications
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Pipeline and structure inspection",
                  "Hull and harbor inspection",
                  "Offshore infrastructure monitoring",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Technical Specifications
              </h2>
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-secondary/50">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-foreground">
                        Parameter
                      </th>
                      <th className="px-6 py-3 font-semibold text-foreground">
                        Specification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        p: "Operating Depth",
                        s: "300–1000 m (model dependent)",
                      },
                      { p: "Camera System", s: "HD / 4K low-light camera" },
                      { p: "Navigation", s: "IMU, depth sensor, sonar" },
                      { p: "Control Mode", s: "Tethered / Real-time" },
                      { p: "Payload", s: "Camera, sonar, manipulators" },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 font-medium text-foreground">
                          {row.p}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {row.s}
                        </td>
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
          <h2 className="text-3xl font-bold text-foreground">
            Ready to deploy?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch to discuss your requirements and see our ROV systems in
            action.
          </p>
          <div className="mt-8">
            <Link href="/request-demo">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
