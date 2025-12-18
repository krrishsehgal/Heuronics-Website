import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Products</h1>
          <p className="mt-4 text-lg text-muted-foreground">Choose the right platform for your mission</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* ROV Card */}
          <Link href="/products/rov" className="group">
            <Card className="h-full overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/rov-remotely-operated-underwater-vehicle.jpg"
                  alt="ROV"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl">
                  ROV
                  <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Remotely Operated Vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Tethered, high-power systems for inspection and intervention.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* AUV Card */}
          <Link href="/products/auv" className="group">
            <Card className="h-full overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/auv-autonomous-underwater-vehicle-torpedo.jpg"
                  alt="AUV"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl">
                  AUV
                  <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Autonomous Underwater Vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Autonomous platforms for long-range underwater missions.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}
