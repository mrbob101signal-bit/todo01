import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ToDo" },
      { name: "description", content: "Browse our collection of smartphones, laptops, and accessories." },
    ],
  }),
  component: ProductsPage,
});

const categories = ["all", "phones", "laptops", "accessories"] as const;
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 – $1000", min: 500, max: 1000 },
  { label: "$1000 – $2000", min: 1000, max: 2000 },
  { label: "Over $2000", min: 2000, max: Infinity },
];

function ProductsPage() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [priceRange, setPriceRange] = useState(0);

  const filtered = useMemo(() => {
    const range = priceRanges[priceRange];
    return products.filter((p) => {
      const matchCategory = category === "all" || p.category === category;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchPrice = p.price >= range.min && p.price < range.max;
      return matchCategory && matchSearch && matchPrice;
    });
  }, [search, category, priceRange]);

  if (location.pathname !== "/products") {
    return <Outlet />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Our Collection</h1>
        <p className="mt-2 text-muted-foreground">Discover premium tech gadgets tailored for modern lifestyles</p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:max-w-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="h-9 rounded-lg border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {priceRanges.map((r, i) => (
                <option key={r.label} value={i}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
          <h2 className="text-xl font-semibold">No products found</h2>
          <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  );
}
