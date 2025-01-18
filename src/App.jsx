import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
    </Route>
  ));
function App() {
  return <RouterProvider router={router} />
}

export default App