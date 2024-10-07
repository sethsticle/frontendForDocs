import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation for the Next.js framework",
}

interface DocsLayoutProps {
  children: React.ReactNode
}

const sidebarItems = [
  { href: "/docs", label: "Introduction" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/routing", label: "Routing" },
  { href: "/docs/data-fetching", label: "Data Fetching" },
  { href: "/docs", label: "Introduction" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/routing", label: "Routing" },
  { href: "/docs/data-fetching", label: "Data Fetching" },
  { href: "/docs", label: "Introduction" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/routing", label: "Routing" },
  { href: "/docs/data-fetching", label: "Data Fetching" },
]

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (


    <div className="flex min-h-screen flex-col  w-screen">
      <div className="container flex-1 w-screen items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6  lg:gap-10 ">

        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          
          
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <h4 className="mb-4 text-sm font-semibold">On this page</h4>
            <nav className="flex flex-col space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>


          </ScrollArea>
        </aside>

        <main className="relative w-full py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px] ">

          <div className="mx-auto w-full min-w-0 ">
            {children}
          </div>

          <div className="hidden text-sm xl:block  ">
            <div className="sticky top-16 right-12 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10 ">
              <ScrollArea className="pb-10">
                <div className="space-y-2">
                  <p className="font-medium">On this page</p>
                  <ul className="m-0 list-none">
                    <li>
                      <a href="#introduction" className="inline-block py-1 text-muted-foreground hover:text-foreground">
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#main-features" className="inline-block py-1 text-muted-foreground hover:text-foreground">
                        Main Features
                      </a>
                    </li>
                    <li>
                      <a href="#main-features" className="inline-block py-1 text-muted-foreground hover:text-foreground">
                        Other Features
                      </a>
                    </li>
                  </ul>
                </div>
              </ScrollArea>
            </div>
          </div>


        </main>
      </div>
    </div>
  )
}