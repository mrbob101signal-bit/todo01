import { Plus, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import type { Product } from "@/lib/products";
import { useState, type MouseEvent } from "react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const detailsHref = `/products/${product.id}`;

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="glow-card group overflow-hidden rounded-xl bg-card transition-all hover:shadow-lg">
      <a href={detailsHref} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
            <span className="inline-block rounded-md bg-badge px-2 py-0.5 text-xs font-medium capitalize text-badge-foreground">
              {product.category}
            </span>
          </div>
          <h3 className="font-semibold text-card-foreground mb-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
      </a>
      <div className="px-4 pb-4">
        <div className="flex justify-between gap-2">
          <Button asChild size="sm" variant="outline" className="gap-1">
            <a href={detailsHref}>
              More Info
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="sm"
            variant={added ? "secondary" : "default"}
            onClick={handleAdd}
            className="gap-1"
          >
            {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {added ? "Added" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
}
