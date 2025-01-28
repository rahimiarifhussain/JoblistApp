import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Dashbord = () => {
    return<>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
    </>
}

export default Dashbord;