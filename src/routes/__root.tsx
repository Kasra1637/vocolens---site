import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/vocolens/Header";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-text-primary">Page not found</h2>
          <p className="mt-2 text-sm text-text-muted">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:shadow-lg transition-all"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-text-primary">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white px-5 py-2 text-sm font-medium text-text-primary hover:bg-primary/5"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vocolens",
  url: "https://vocolens.com",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Mental Wellness",
  operatingSystem: "iOS, Android, Web",
  screenshot: ["https://vocolens.com/vocolens_app.png", "https://vocolens.com/vocolens_mobile.png"],
  image: "https://vocolens.com/vocolens_-_preview.png",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/PreOrder" },
  description: "Vocolens is an AI voice journal for ADHD, autism, and alexithymia. Speak your mind, track mood patterns, and gain emotional clarity.",
  featureList: [
    "AI emotional analysis",
    "Voice-first journaling",
    "Mood pattern tracking",
    "Body sensation mapping",
    "Emotion labeling with Plutchik's wheel",
    "Personalized AI that learns your emotional dialect",
    "Weekly reflection summaries",
    "Private by design",
  ],
  author: { "@type": "Organization", name: "Vocolens", url: "https://vocolens.com" },
  publisher: { "@type": "Organization", name: "Vocolens", url: "https://vocolens.com" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vocolens",
  url: "https://vocolens.com",
  logo: "https://vocolens.com/vocolens-logo.png",
  description: "Vocolens is an AI voice journal built for neurodivergent minds - ADHD, autism, and alexithymia.",
  sameAs: [
    "https://www.instagram.com/vocolensapp/",
    "https://www.youtube.com/@vocolens",
    "https://www.linkedin.com/company/vocolens/",
    "https://www.tiktok.com/@vocolensapp",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vocolens",
  url: "https://vocolens.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://vocolens.com/resources?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#7c5cbf" },
      { name: "author", content: "Vocolens" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:site_name", content: "Vocolens" },
      { property: "og:locale", content: "en_US" },
      { title: "Vocolens | AI Voice Journal for ADHD, Autism & Alexithymia" },
      { property: "og:title", content: "Vocolens | AI Voice Journal for ADHD, Autism & Alexithymia" },
      { name: "twitter:title", content: "Vocolens | AI Voice Journal for ADHD, Autism & Alexithymia" },
      { name: "description", content: "Vocolens is an AI voice journal built for neurodivergent minds - ADHD, autism, and alexithymia. Speak your mind, see patterns, and gain clarity." },
      { property: "og:description", content: "Vocolens is an AI voice journal built for neurodivergent minds - ADHD, autism, and alexithymia. Speak your mind, see patterns, and gain clarity." },
      { name: "twitter:description", content: "Vocolens is an AI voice journal built for neurodivergent minds - ADHD, autism, and alexithymia. Speak your mind, see patterns, and gain clarity." },
      { property: "og:image", content: "https://vocolens.com/vocolens_-_preview.png" },
      { name: "twitter:image", content: "https://vocolens.com/vocolens_-_preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/vocolens_favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/vocolens_favicon.png" },
      { rel: "shortcut icon", href: "/vocolens_favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/vocolens_favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(softwareApplicationLd) },
      { type: "application/ld+json", children: JSON.stringify(organizationLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-surface">
        <Header />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
