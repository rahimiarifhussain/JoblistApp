import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs";


function App() {
  const title = "Become a React Dev" ;
  const subtitle = "Find the React Job that fits your skills and needs";
  return (
   <>
   
    <Navbar />
    <Hero title={title} subtitle={subtitle}  />

    <HomeCard />

    <JobListings />
  
    <ViewAllJobs />
   
   </>
  )
}

export default App