import React, { useState } from "react";
import './Dropdown.css'
import { Link } from 'react-router-dom';

function Dropdown() {
    const CategoryItems = [
        {   id:1,
            title: 'Smart Speakers & Displays',
            path: '/SmartSpeakers&Displays',
            cName: 'dropdown-link' },
        {   id:2,
            title: 'Smart Lighting',
            path: '/SmartLighting',
            cName: 'dropdown-link' },
        {   id:3,
            title: 'Smart Plugs & Outlets',
            path: '/SmartPlugs&Outlets',
            cName: 'dropdown-link'},
        {   id:4,
            title: 'Smart & Wi-Fi Thermostats',
            path: '/Smart&Wi-FiThermostats',
            cName: 'dropdown-link' },
        {   
            id:5,
            title: 'Sprinkler & Irrigation Controls',
            path: '/Sprinkler&Irrigation',
            cName: 'dropdown-link' },
        {   
            id:6,
            title: 'Pet Supplies & Technology',
            path: '/PetSupplies',
            cName: 'dropdown-link'},
        {  
            id:7,
            title: 'Home Security & Surveillance',
            path: '/HomeSecurity&Surveillance',
            cName: 'dropdown-link' },
        {   id:8,
            title: 'Security Cameras & Surveillance',
            path: '/SecurityCameras&Surveillance',
            cName: 'dropdown-link'
        },
        {   id:9,
            title: 'Smart Door Locks',
            path: '/SmartDoorLocks',
            cName: 'dropdown-link'
        },
        {   id:10,
            title: 'Door & Window Security',
            path: '/Door&WindowSecurity',
            cName: 'dropdown-link'
        },
        {   id:11,
            title: 'Home Security Systems',
            path: '/HomeSecuritySystems',
            cName: 'dropdown-link'
        },
        {   id:12,
            title: 'Home Alarms & Sensors',
            path: '/HomeAlarms&Sensors',
            cName: 'dropdown-link'
        },
        {   id:13,
            title: 'Smoke & Carbon Monoxide Detectors',
            path: '/Smoke&CarbonMonoxideDetectors',
            cName: 'dropdown-link'
        },
        {   id:14,
            title: 'Home Security Accessories',
            path: '/HomeSecurityAccessories',
            cName: 'dropdown-link'
        },
        {   id:15,
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
                {CategoryItems.map((item) =>{
                    return(
                        <li>
                            <Link key={item.id} className={item.cName} to={item.path} 
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