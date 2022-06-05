import React, { useState } from "react";
import './Dropdown.css'
import { Link } from 'react-router-dom';

function Dropdown() {
    const CategoryItems = [
        {   title: 'Smart Speakers & Displays',
            path: '/SmartSpeakers&Displays',
            cName: 'dropdown-link' },
        {   title: 'Smart Lighting',
            path: '/SmartLighting',
            cName: 'dropdown-link' },
        {   title: 'Smart Plugs & Outlets',
            path: '/SmartPlugs&Outlets',
            cName: 'dropdown-link'},
        {  title: 'Smart & Wi-Fi Thermostats',
            path: '/Smart&Wi-FiThermostats',
            cName: 'dropdown-link' },
        {   title: 'Sprinkler & Irrigation Controls',
            path: '/Sprinkler&Irrigation',
            cName: 'dropdown-link' },
        {   title: 'Pet Supplies & Technology',
            path: '/PetSupplies',
            cName: 'dropdown-link'},
        {  title: 'Home Security & Surveillance',
            path: '/HomeSecurity&Surveillance',
            cName: 'dropdown-link' },
        {
            title: 'Security Cameras & Surveillance',
            path: '/SecurityCameras&Surveillance',
            cName: 'dropdown-link'
        },
        {
            title: 'Smart Door Locks',
            path: '/SmartDoorLocks',
            cName: 'dropdown-link'
        },
        {
            title: 'Door & Window Security',
            path: '/Door&WindowSecurity',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Security Systems',
            path: '/HomeSecuritySystems',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Alarms & Sensors',
            path: '/HomeAlarms&Sensors',
            cName: 'dropdown-link'
        },
        {
            title: 'Smoke & Carbon Monoxide Detectors',
            path: '/Smoke&CarbonMonoxideDetectors',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Security Accessories',
            path: '/HomeSecurityAccessories',
            cName: 'dropdown-link'
        },
        {
            title: 'All Home Security & Monitoring',
            path: '/AllHomeSecurity&Monitoring',
            cName: 'dropdown-link'
        }
      ];
      
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return( 
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> 
                {CategoryItems.map((item, index) =>{
                    return(
                        <li>
                            <Link key={index} className={item.cName} to={item.path} 
                            onClick={()=> setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );   
}


export default Dropdown;
