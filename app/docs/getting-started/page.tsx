export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <h1 id="getting-started" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Getting Started with Next.js
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To start a new Next.js project, you can use the following command:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>npx create-next-app@latest</code>
      </pre>
      <h2 id="project-setup" className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Project Setup
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This will prompt you with a series of questions to set up your project. Once completed, navigate to your project directory and start the development server:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>
          cd your-project-name
          npm run dev
        </code>
      </pre>
      <h2 id="viewing-your-app" className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Viewing Your App
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Open <code>http://localhost:3000</code> in your browser to see your new Next.js application!
      </p>
    </div>
  )
}