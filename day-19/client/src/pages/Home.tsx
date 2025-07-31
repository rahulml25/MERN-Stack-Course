import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center bg-blue-50 px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-blue-700">
          Welcome to JobPortal
        </h2>
        <p className="max-w-xl text-lg text-gray-700">
          Find your dream job or post opportunities for others. Whether you're a
          job seeker or a job poster, our platform connects talent with
          opportunity.
        </p>
        <div className="mt-6">
          <button className="rounded-xl bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700">
            Explore Jobs
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
