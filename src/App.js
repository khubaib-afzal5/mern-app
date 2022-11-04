import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Wave from 'react-wavify'
import Mapcomp from './Components/Mapcomp/Mapcomp';
import Contactinfo from './Components/Contactinfo/Contactinfo';
import Sale from './Components/Sale/Sale';
import Price from './Components/Price/Price';
function App() {
  return (
    <div className="App">
      <Header />

      <Sale />
      <Price />

      {/* <Contactinfo/> */}

      <div className='wavify'>

        <Wave paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.25,
            points: 5
          }} fill="url(#gradient)">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#b638d6" />
              <stop offset="90%" stopColor="#7681f4" />
            </linearGradient>
          </defs>
        </Wave>
      </div>

    </div>
  );
}

export default App;
