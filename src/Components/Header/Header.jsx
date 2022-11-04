import React, { useState } from "react";
import "../Header/Header.css";
import fl from "../../assets/images/fl.png";
import AnimatedText from "react-animated-text-content";
import ReactPlayer from "react-player";
import ModalVideo from "react-modal-video";
import { StarRatings } from "react-star-ratings";
import { HoverButtonDiagonal } from "react-hover-button";
import ReactStars from "react-stars";
import Wave from "react-wavify";

import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Data = [
  {
    id: 1,
    title: "The Best Service For Instagram Growth",
    subtitle: "Get 35,000 Instagram Followers For $9/Week",
  },
];
function Header() {
  const [isOpen, setOpen] = useState(false);
  const [loading, switchLoading] = useState(false);
  return (
    <div className="Header">
      <div className="Headerrow">
        <img src={fl} />
        <p className="Signintext">Sign in</p>
      </div>

      <div className="Headertitleholder">
        {Data.map((data) => {
          return (
            <div>
              <h2 className="Title">{data.title}</h2>
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="h1"
                className="Subtitle"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                {data.subtitle}
              </AnimatedText>
              ;
              <div className="Playerholder">
                {/* <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  className="Player"
                 
                /> */}
              </div>
              <div className="subholder">
                <h2 className="Bottomtext">Sign Up in 60 Seconds</h2>
                <h2 className="Bottomtext">
                  Start Getting Followers in 60 Seconds
                </h2>
              </div>
              <h3 className="Lowertext">Easy To Cancel - Cancel Anytime</h3>
              <h3 className="Lowertext">Money Back Guarantee</h3>
              <div className="but">
                <div className="Buttonholder">
                <Link
                      activeClass="active"
                      to="Mapcomp"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <HoverButtonDiagonal
                    width={300}
                    loading={loading}
                    height={50}
                  > 
                   Start Now
                  </HoverButtonDiagonal>
                    </Link>
                 
                </div>
              </div>
              <ReactStars
                count={5}
                size={24}
                color2={"yellow"}
                className="stars"
                edit={false}
              />
              <p className="Reviewtext"> (based on 1256 reviews)</p>
              {/* <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
		</React.Fragment> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
