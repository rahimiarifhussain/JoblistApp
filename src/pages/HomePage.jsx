import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import HomeCard from './../components/HomeCard';
import JobListings from './../components/JobListings';
import ViewAllJobs from './../components/ViewAllJobs';


const HomePage = () => {
  return (
   <>
          <Hero />
          <HomeCard />
          <JobListings />
          <ViewAllJobs />
   </>
  )
}

export default HomePage