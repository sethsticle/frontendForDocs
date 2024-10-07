import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js Documentation</h1>
      <p className="text-xl mb-8">Learn how to build fast and scalable web applications with Next.js</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/docs/getting-started">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs">Browse Docs</Link>
        </Button>
      </div>
    </div>
  );
}