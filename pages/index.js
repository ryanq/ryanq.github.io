import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2">
      <Head>
        <title>Clone Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 py-20">
        <h1 className="text-6xl text-center">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-blue-500 hover:underline focus:underline active:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-2xl text-center">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg rounded bg-gray-50">
            pages/index.js
          </code>
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:max-w-3xl sm:grid-cols-2">
          <a
            href="https://nextjs.org/docs"
            className="p-6 transition duration-150 ease-in-out border rounded-lg hover:border-blue-500 hover:text-blue-500"
          >
            <h3 className="text-2xl">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 transition duration-150 ease-in-out border rounded-lg hover:border-blue-500 hover:text-blue-500"
          >
            <h3 className="text-2xl">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 transition duration-150 ease-in-out border rounded-lg hover:border-blue-500 hover:text-blue-500"
          >
            <h3 className="text-2xl">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 transition duration-150 ease-in-out border rounded-lg hover:border-blue-500 hover:text-blue-500"
          >
            <h3 className="text-2xl">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex flex-row items-center justify-center w-full h-24 border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
