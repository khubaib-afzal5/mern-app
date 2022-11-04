import React, { useState } from 'react'
import './Price.css';
import Left from '../../assets/images/fq-shape2.png'
import Switch from "react-switch"; 

import Monthly from "../Monthly/Monthly"
import Weekly from "../Weekly/Weekly"



const Price = () => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
    return (
        <div id='Mapcomp'>
            <div className="direction">
                <img className='left' src={Left} />

                <h3 className="featured">Pricing</h3>
            </div>
            <div>
                <h2 className='subtext'>Foost pricing has the most affordable pricing <br />  in the industry</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ flexDirection: 'row', display: 'flex' }}>

                    <h4 style={{ color: isToggled === false ? '#373a5b' : '#a1a2ad', alignSelf:'center'}}>Weekly</h4>
                    <Switch onColor={'#ff12d9'} offColor={'#ff12d9'} onChange={onToggle} checked={isToggled} uncheckedIcon={false} checkedIcon={false} className="switch" />
                    <h4 style={{ color: isToggled === true ? '#373a5b' : '#a1a2ad', marginLeft: 20,alignSelf:'center' }}>Monthly</h4>


                </div>
            </div>
            {isToggled === false ?
                <Weekly />
                :
                <Monthly />
            }
        </div>
    )
}

export default Price;