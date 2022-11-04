import React, { useState,  useEffect } from 'react'
import './Sale.css'; 
import Left from '../../assets/images/fq-shape2.png'
import BingMapsReact from "bingmaps-react";
import Switch from '../../assets/images/switch.png'
import axios from 'axios'
import {publicIpv4} from 'public-ip'
// import { sendMail } from '../../constants/Email';
const API_URL = "https://ipwho.is/"
const Sale = () => {
    const [country, setCountry] = useState('Pakistan')
    const [info , setInfo] = useState([])
    const [load , setload] = useState(true)
    const [price, setPrice] = useState('9');
    const [img, setimg] = useState('https://cdn.pixabay.com/photo/2022/09/20/05/05/pakistan-7467000__340.png')
    const hoursMinSecs = { hours: 10, minutes: 20, seconds: 40 }

    const getIP = async ()=>{
        const result = await publicIpv4()
        console.log(result)
        getIPInfo(result)
    }
    const getIPInfo = async (val)=>{
        const result = await axios.get(API_URL+val)
        setInfo(result.data)
        console.log(result.data)
        setload(false)
    }
useEffect(()=>{
    getIP()
    console.log(info.ip)

},[])
    return (
        <>
      {load? "":  <div>
            <div className="direction">
                <img className='left' src={Left} />

                <h3 className="featured">Featured Services</h3>
            </div>
            <div style={{ marginTop: 4 }}>

                <p className="love">For {info.country} only</p>
            </div>
            <div style={{ marginTop: -10 }}>

                <p className="desc">We specialize in obtaining key followers for users in and around <br /> {info.country}.Our {info.country}-based support team works with you to<br /> network with the most popular influencers of {info.country}  </p>
            </div>
            <div className='Background'>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div className='card'>
                        <BingMapsReact
                                        bingMapsKey="Ar0GIAYJ0zP4lI1CjCpEDW3SW6iSpc4WxiArBm6POKsiyaCFe3D0hROj4qGii9D9"
                                        height="400px"
                                        mapOptions={{
                                            navigationBarMode: "square",
                                        }}
                                        width="350px"
                                        viewOptions={{
                                            center: { latitude: 42.360081, longitude: -71.058884 },
                                        }}
                                    />
                        </div>
                        <div className='card1'>
                        <div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className='backcard'>
                                            <img src={info.flag.img} className="flag" />
                                        </div>
                                    </div>
                                        <p className="local">Local to {info.country}</p>
                                    <p className="desc1">We work with influencers<br />local to {info.country} to get you the<br />best regional exposure.</p>
                                </div>
                        </div>

                    </div>
                </div>
               
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:30}}>
            <button className='backbtn'>
                <div style={{flexDirection:'row',justifyContent:'space-around',display:'flex'}}>
                    <img src={Switch} className='switch'/>
                    <p className='start'
                    onClick={()=>{}}
                    >Start Now</p>
                </div>
            </button>
            </div>

            </div>
           

           

        </div>}
        </>



    )
}
export default Sale;