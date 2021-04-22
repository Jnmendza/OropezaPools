import React, { useState, useEffect } from 'react';
import './Services.css';
import { serviceData } from "./serviceData";
import ServiceCard from './ServiceCard.js';


function Services() {
    const [services, setServices] = useState([]);


    const getServices = () => {
        let tempServices = [];
        serviceData.forEach(service => {
            const singleService = {...service}
            tempServices = [...tempServices, singleService]
        })
        setServices(tempServices)
    }

    useEffect(() => {
        getServices()
    }, [])

    console.log(services);

    return (
        <div className="flex-display services-container">
            {services.map(service => {
                return(
                    <div id="services">
                        <ServiceCard service={service} key={service.id}/>
                    </div>
                    )
                })}
        </div>
    )
}

export default Services
