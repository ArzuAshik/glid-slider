import './App.css';
import './css/glide.core.css';
import './css/glide.theme.css';

import Glide from '@glidejs/glide';
import { Images } from '@glidejs/glide/dist/glide.modular.esm'
import { useEffect } from 'react';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';


function App() {
  useEffect(() =>{
    const options = {
      type: 'carousel',
      autoplay: 2000,
      hoverpause: false,
      perView: 3,
      focusAt: 1,
      classes: {
        direction: {
          ltr: 'glide--ltr',
          rtl: 'glide--rtl'
        },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glideBulletActive',
        activeSlide: 'glideSlideActive',
        disabledArrow: 'glide__arrow--disabled'
      },
    };

    const glide = new Glide('.customGlide', options);
    glide.mount({Images});
    const rightArrow = document.querySelector(".glide__arrow--right");
    const leftArrow = document.querySelector(".glide__arrow--left");
    glide.on('run', (movement) =>{
      if(glide.index === 7){
        rightArrow.setAttribute("disabled", "true");
      }else{
        rightArrow.setAttribute("disabled", "false");
        rightArrow.removeAttribute("disabled");

      }
      if(glide.index === 0){
        leftArrow.setAttribute("disabled", "true");
      }else{
        leftArrow.removeAttribute("disabled");

      }
      console.log("end", glide.index);
    })
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="customGlide">
          <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide"><img src={img1} alt="slider"/></li>
            <li className="glide__slide"><img src={img2} alt="slider"/></li>
            <li className="glide__slide"><img src={img3} alt="slider"/></li>
            <li className="glide__slide"><img src={img4} alt="slider"/></li>
            <li className="glide__slide"><img src={img5} alt="slider"/></li>
            <li className="glide__slide"><img src={img6} alt="slider"/></li>
            <li className="glide__slide"><img src={img7} alt="slider"/></li>
            <li className="glide__slide"><img src={img8} alt="slider"/></li>
          </ul>
          </div>

          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
            <button className="glide__bullet" data-glide-dir="=3"></button>
            <button className="glide__bullet" data-glide-dir="=4"></button>
            <button className="glide__bullet" data-glide-dir="=5"></button>
            <button className="glide__bullet" data-glide-dir="=6"></button>
            <button className="glide__bullet" data-glide-dir="=7"></button>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
