import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar"
import jobs from './jobs.json'

function App() {
  const title = "Become a React Dev" ;
  const subtitle = "Find the React Job that fits your skills and needs";
  return (
   <>
   
    <Navbar />
    <Hero title={title} subtitle={subtitle}  />

    <HomeCard />

    <JobListing />
  

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
   </>
  )
}

export default App