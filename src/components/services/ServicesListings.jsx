import { useState, useEffect } from "react";

const ServicesListings = () => {
          const [services, setServices] = useState([]);
           
          
            useEffect(() => {
              const fetchJobs = async () => {
               
                try {
                  const res = await fetch("/api/services");
                  const data = await res.json();
                  setServices(data);
                } catch (error) {
                  console.log("Error fetching data", error);
                } finally {
          //         setLoading(false);
                }
          
              }
          
              fetchJobs();
            }, []);
  return (
    <div>{services.map((service)=>(
                    <h1 key={service.id}>{service.title}</h1>
    ))}</div>
  )
}

export default ServicesListings