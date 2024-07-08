// Import necessary components and libraries
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>College Mastermind</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-white text-gray-800">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-blue-600">College Mastermind</div>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
                <Link href="/countries" className="text-gray-600 hover:text-blue-600">Countries</Link>
                <Link href="/partnership" className="text-gray-600 hover:text-blue-600">Partnership</Link>
                <Link href="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
                <Link href="/contact-us" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
                <Link href="/register" className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">Login</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-600">Strengthen Your Application with High Test Scores</h1>
            <p className="mt-4 text-gray-700">Increase your scores with a test prep program that gets the results that you want!</p>
            <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700">Book Your Strategy Session</button>
            <div className="mt-8">
              <img src="https://source.unsplash.com/random/800x400?education" alt="Students" className="mx-auto rounded-lg shadow-md" />
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="bg-blue-100 py-12">
          <div className="container mx-auto px-6">
            <div className="bg-blue-500 text-white rounded-lg p-8 flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0">
                <img src="https://source.unsplash.com/random/150x150?person" alt="Success Story" className="rounded-full shadow-md" />
              </div>
              <div className="md:ml-6">
                <h2 className="text-2xl font-bold">Learn The Strategy Behind Our Success!</h2>
                <p className="mt-4">College Mastermind had 10 students within the past year score a perfect 36 on the ACT!</p>
                <p className="mt-2">Want to know how we get such great results? Watch our video!</p>
                <button className="mt-4 bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white">Get Registered Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-500 text-white p-8 rounded-lg">
                <h3 className="text-3xl font-bold">100</h3>
                <p className="mt-2">of high achievers preparing for top 50 universities 2024</p>
              </div>
              <div className="bg-blue-500 text-white p-8 rounded-lg">
                <h3 className="text-3xl font-bold">94%</h3>
                <p className="mt-2">of our clients get into their top 3 choices in 2023</p>
              </div>
              <div className="bg-blue-500 text-white p-8 rounded-lg">
                <h3 className="text-3xl font-bold">2</h3>
                <p className="mt-2">Perfect ACT scores in 2022 School Year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-700">Don't Settle for Less than Your FULLEST Potential!</h2>
            <p className="mt-4 text-gray-700">Our test prep curriculum produces results.</p>
          </div>
        </section>
      </body>
    </>
  );
}
