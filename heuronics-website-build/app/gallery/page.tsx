import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Heuronics",
  description:
    "Explore Heuronics team, events, and underwater robotics demonstrations.",
};

export default function GalleryPage() {
  const images = [
    {
      src: "/image.png",
      alt: "Heuronics team demonstrating ROV capabilities",
    },
    {
      src: "Screenshot 2025-09-08 212125.png",
      alt: "Displaying Water Drone to Vice Chancellor DTU and ministers",
    },
    {
      src: "Ashvini Vaishnaw handshake.jpeg",
      alt: "Displaying Water Drone to Mr. Ashvini Vaishnaw",
    },
    {
      src: "Ashvini Vaishnaw bot holding.jpeg",
      alt: "Displaying Water Drone to Mr. Ashvini Vaishnaw",
    },
    {
      src: "WhatsApp Image 2025-10-08 at 12.15.28.jpeg",
      alt: "Our First Prototype",
    },
    {
      src: "news.jpeg",
      alt: "Giving interview from exhibition",
    },
    {
      src: "dubki.jpeg",
      alt: "Testing our devices",
    },
    {
      src: "1234.jpeg",
      alt: "Got mentioned in news article",
    },
    {
      src: "rjf.jpeg",
      alt: "Presenting in front of Mr.Raj Soin",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative overflow-hidden border-b border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Gallery</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Explore Heuronics in action—from team collaborations to industry
              demonstrations and technological innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm text-foreground">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
