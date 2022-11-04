import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Contactinfo.css";

import axios from "axios";
function Contactinfo() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [loading, setLoading] = useState(0);
  const [url, setUrl] = useState();

  const sendMail = async () => {
    const result = await axios.get(
      "https://emailtestproject.herokuapp.com/email"
    );
    setUrl(result.data.message);
    console.log(result.data.message);
    setLoading(2);
  };
  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
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
              <input placeholder="Enter Email " className="Emailinput" />
              <p>Instagram Information</p>
              <input placeholder="Enter Instagram Information " className="Emailinput" />
<br/>
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
  );
}

export default Contactinfo;
