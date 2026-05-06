import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { useState } from "react";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetailPageComponent,
});

function ProductDetailPageComponent() {
  const { productId } = Route.useParams();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(String(productId)));

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
        <p className="mt-2 text-muted-foreground">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild variant="hero" size="lg" className="mt-6">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAdd = () => {
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
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <Button asChild variant="ghost" className="mb-8">
        <Link to="/products" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image section */}
        <div className="flex items-center justify-center">
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Details section */}
        <div>
          {/* Category badge */}
          <span className="mb-4 inline-block rounded-md bg-badge px-3 py-1 text-sm font-medium capitalize text-badge-foreground">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold text-foreground">{product.name}</h1>

          {/* Stock status */}
          <div className="mt-4 flex items-center gap-2">
            {product.inStock ? (
              <>
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-green-600">In Stock</span>
              </>
            ) : (
              <>
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-sm text-red-600">Out of Stock</span>
              </>
            )}
          </div>

          {/* Price */}
          <div className="mt-6 border-t border-border/50 border-b py-6">
            <span className="text-5xl font-bold text-foreground">${product.price}</span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">About this product</h2>
            <p className="mt-3 text-lg text-muted-foreground">{product.fullDescription}</p>
          </div>

          {/* Specs */}
          <div className="mt-8 mb-8">
            <h2 className="text-lg font-semibold text-foreground">Specifications</h2>
            <div className="mt-4 space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between border-b border-border/30 pb-3">
                  <span className="text-sm text-muted-foreground">{key}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <Button
            variant={added ? "secondary" : "hero"}
            size="lg"
            onClick={handleAdd}
            disabled={!product.inStock}
            className="w-full gap-2"
          >
            {added ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
            {added ? "Added to Cart" : "Add to Cart"}
          </Button>

          {/* Continue shopping */}
          <Button asChild variant="hero-outline" size="lg" className="mt-4 w-full">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}