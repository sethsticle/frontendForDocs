export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 id="introduction" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Introduction to Next.js
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
      </p>
      <h2 id="main-features" className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Main Features
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Routing: File-system based routing</li>
        <li>Rendering: Client-side and Server-side Rendering with optimizations</li>
        <li>Data Fetching: Simplified data fetching with Server Components</li>
        <li>Styling: Support for your preferred styling methods</li>
        <li>Optimizations: Automatic optimizations for performance</li>
        <li>TypeScript: Improved TypeScript support</li>
      </ul>
    </div>
  )
}