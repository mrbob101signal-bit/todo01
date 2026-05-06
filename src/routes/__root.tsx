import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ToDo - Premium Tech Gadgets" },
      { name: "description", content: "Discover the latest smartphones, laptops, and accessories at ToDo." },
      { name: "author", content: "ToDo" },
      { property: "og:title", content: "ToDo - Premium Tech Gadgets" },
      { property: "og:description", content: "Discover the latest smartphones, laptops, and accessories at ToDo." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ToDo" },
      { property: "og:image", content: "https://tanstack-start-app.mrbob101signal.workers.dev/mp-logo.svg" },
      { property: "og:image:alt", content: "MP logo" },
      { name: "twitter:title", content: "ToDo - Premium Tech Gadgets" },
      { name: "twitter:description", content: "Discover the latest smartphones, laptops, and accessories at ToDo." },
      { name: "twitter:image", content: "https://tanstack-start-app.mrbob101signal.workers.dev/mp-logo.svg" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "icon",
        href: "/mp-logo.svg",
        type: "image/svg+xml",
      },
      {
        rel: "apple-touch-icon",
        href: "/mp-logo.svg",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster theme="dark" position="top-center" richColors />
    </>
  );
}
