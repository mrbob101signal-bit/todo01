import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToDo — Premium Tech Gadgets" },
      { name: "description", content: "Discover the latest smartphones, laptops, and accessories at ToDo." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="mb-4 inline-block rounded-full bg-badge px-4 py-1.5 text-sm font-medium text-badge-foreground">
                Latest Innovations 2026
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Cutting-Edge Tech</span>
                <br />
                Right at Your Doorstep
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Explore cutting-edge smartphones, powerful laptops, and premium accessories. Handpicked for tech enthusiasts seeking excellence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/products">
                    Explore Collection <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/cart">Check Cart</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 rounded-2xl bg-hero-glow blur-3xl" />
              <img
                src={heroImage}
                alt="Premium tech gadgets including laptop, phone, watch and earbuds"
                width={1920}
                height={1024}
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/50 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Truck, title: "Swift Shipping", desc: "Fast delivery straight to your location" },
            { icon: Shield, title: "Trusted Security", desc: "Protected and secure purchase process" },
            { icon: Zap, title: "Top Performance", desc: "High-quality products from leading brands" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-badge">
                <f.icon className="h-5 w-5 text-badge-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-surface-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
