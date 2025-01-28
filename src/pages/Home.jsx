import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ViewAllJobs from "../components/ViewAllJobs";
import HomeCard from './../components/HomeCard';
import JobListings from './../components/JobListings';

const Home = () => {
    return (
        <>
            <Hero />
            <HomeCard />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    )

}

export default Home;