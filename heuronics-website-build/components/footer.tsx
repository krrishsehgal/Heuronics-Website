import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-foreground">
              Heuronics
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              ROVs & AUVs built for serious underwater work.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                CE <span className="text-[10px]">(design target)</span>
              </div>
              <div className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                IP68
              </div>
              <div className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                MIL-STD <span className="text-[10px]">(concept)</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Products</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/products/rov"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  ROV
                </Link>
              </li>
              <li>
                <Link
                  href="/products/auv"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  AUV
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Compare
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Industries</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Aquaculture
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Defense
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 Heuronics — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
