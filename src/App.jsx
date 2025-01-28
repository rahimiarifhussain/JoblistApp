import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Job, {jobLoader} from "./pages/Job";
import Dashbord from "./components/layouts/Dashbord";
import NotFoundPage from './pages/NotFoundPage';
import AddJobs from "./pages/AddJobs";
import EditJob from "./pages/EditJob";



const App = () => {

// add New Jobs
  const addNewJob = async (newJob)=> {
      // console.log(newJob);
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newJob)
      });
      return;
  }

  // Delete JOb
  const deleteJob = async (JobID)=> {
      // console.log(JobID, "Delete ID");
      const res = await fetch(`/api/jobs/${JobID}`,{
        method:'DELETE'
      });
      return;
  }

  const updateJob = async (job)=> {
    // console.log(job);

    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
   <Route path="/" element={<Dashbord />}>
      <Route index element={<Home /> } />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/addJob" element={<AddJobs submitJobForm={addNewJob} />} />
      <Route path="/jobs/:id" element={<Job deleteJob={deleteJob} />} loader={jobLoader}  />
      <Route path="/editjob/:id" element={<EditJob updateJobSubmit={updateJob} /> } loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
   </Route>
  ));
  return <RouterProvider router={router} />
}

export default App