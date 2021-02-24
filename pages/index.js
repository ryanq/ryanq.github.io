import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Quattlebaum</title>
      </Head>

      <div className="p-4 text-gray-900 md:mt-8 md:ml-8">
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-4">
            <img
              src="/images/profile-sunglasses.jpg"
              alt="Ryan's profile picture"
              className="object-cover w-12 h-12 rounded-full"
            />
            <h1 className="text-lg lg:text-xl font-display">
              Ryan Quattlebaum
            </h1>
          </a>
        </header>
        <main className="flex mt-4 prose prose-lg lg:prose-xl sm:ml-16 font-text">
          <p>
            Hi, I'm Ryan! I'm a dad, church production lead, and software
            developer in Holly Springs, NC. I'm just getting this site off the
            ground, so more will be up soon.
          </p>
        </main>
      </div>
    </>
  )
}
