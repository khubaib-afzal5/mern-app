import React, { useState } from "react";
import Cross from '../../assets/images/cross.png'
import Tick from '../../assets/images/tick.png'
import './Monthly.css'
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Data = [
  {
    id: 1,
    name: 'Personal',
    price: '28',
    list: 'Rapid Follower Gains',
    list1: 'Premier Customer Service',
    list2: 'Advace Email Support',
    list3: 'IG Specific platforming',
    list4: 'Secong Tier IG Control',
    list5: '1vl Support',
    list6: 'Independent Growth'
  },
  {
    id: 2,
    name: 'Accelerated',
    price: '52',
    list: '+36% more rapid follower Gains',
    list1: 'Premier Customer Service',
    list2: 'Advace Email Support',
    list3: 'IG Specific platforming',
    list4: 'Secong Tier IG Control',
    list5: '1vl Support',
    list6: 'Independent Growth'

  },
  {
    id: 3,
    name: 'Business Premium',
    price: '69',
    list: 'Rapid Follower Gains',
    list1: 'Premier Customer Service',
    list2: 'Advace Email Support',
    list3: 'IG Specific platforming',
    list4: 'Secong Tier IG Control',
    list5: 'Chat Support',
    list6: 'Independent Growth'

  }
]
const Monthly = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [loading, setLoading] = useState(0);
  const [url, setUrl] = useState();
  const [email , setEmail] = useState("")

  const sendMail = async () => {
    const result = await axios.post(
      "https://emailtestproject.herokuapp.com/email",{
        to:email
      }
    );
    setUrl(result.data.message);
    console.log(result.data.message);
    setLoading(2);
  };
  return (
    <div>

      <div style={{ marginTop: 20 }}>
        <div className="position">

          {Data.map((data) => {
            return (
              <div className='pricecard'>
                <div>
                  <h3 className="head">{data.name}</h3>
                  <h1 className="price">${data.price}</h1>
                  <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000',
                    marginTop: 20
                  }} />
                  <h4 className="headd">TODAY ONLY ${data.price}/WEEK</h4>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Tick} className="icon" />
                      <h3 className="list">{data.list}</h3>
                    </div>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Tick} className="icon" />
                      <h3 className="list">{data.list1}</h3>
                    </div>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Tick} className="icon" />
                      <h3 className="list">{data.list2}</h3>
                    </div>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Tick} className="icon" />
                      <h3 className="list">{data.list3}</h3>
                    </div>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Cross} className="icon" />
                      <h3 className="list">{data.list4}</h3>
                    </div>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Cross} className="icon" />
                      <h3 className="list">{data.list5}</h3>
                    </div>


                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <img src={Cross} className="icon" />
                      <h3 className="list">{data.list6}</h3>
                    </div>

                  </div>
                  <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000',
                    marginTop: 20
                  }} />

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                  <button className='backbttn' onClick={onOpenModal}>


                    <div style={{ flexDirection: 'row', justifyContent: 'space-around', display: 'flex' }}>
                      <p className='text'>Get Started</p>
                    </div>
                  </button>
                  <Modal
                    animationDuration={1000}
                    open={open}
                    onClose={onCloseModal}
                    reserveScrollBarGap
                    center
                  >
                    <div className="modalholder">
                      {loading === 0 ? (
                        <div>
                          <h2>Contact Information</h2>
                          <div></div>
                          <p>Email Information</p>
                          <input placeholder="Enter Email " onChange={(e)=> setEmail(e.target.value)} className="Emailinput" />
                          <p>Instagram Information</p>
                          <input
                            placeholder="Enter Instagram Information "
                            className="Emailinput"
                          />
                          <br />
                          <button
                            className="Buttonstyle"
                            onClick={() => {
                              sendMail();
                              setLoading(1);
                            }}
                          >
                            Send
                          </button>
                        </div>
                      ) : loading === 1 ? (
                        <p>Sending email. Please be patient</p>
                      ) : (
                        <p target="_blank">
                          See the{" "}
                          <a href={url} style={{ color: "red" }}>
                            link
                          </a>{" "}
                          to view your test email
                        </p>
                      )}
                    </div>
                  </Modal>
                </div>
              </div>


            )
          })}
        </div>


      </div>

    </div>
  )
}
export default Monthly;