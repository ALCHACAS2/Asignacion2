
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-4xl font-extrabold text-gray-900">Welcome to My Landing Page</h1>
            <p className="mt-4 text-xl text-gray-500">This is a basic landing page built with TailwindCSS and Next.js.</p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
