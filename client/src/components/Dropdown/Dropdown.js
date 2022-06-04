import React, { useState } from "react";
import './Dropdown.css'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return( 
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> 
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index.id} className={item.cName}>
                            <Link to={item.path} 
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