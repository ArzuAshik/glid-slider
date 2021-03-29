import './App.css';
import './css/glide.core.css';
import './css/glide.theme.css';

import Glide from '@glidejs/glide'
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
  const options = {
    type: 'carousel',
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
  }
  const test = new Glide('.customGlide', options);
  useEffect(() =>{
    test.mount();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div class="customGlide">
          <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide"><img src={img1} alt="slider image"/></li>
            <li class="glide__slide"><img src={img2} alt="slider image"/></li>
            <li class="glide__slide"><img src={img3} alt="slider image"/></li>
            <li class="glide__slide"><img src={img4} alt="slider image"/></li>
            <li class="glide__slide"><img src={img5} alt="slider image"/></li>
            <li class="glide__slide"><img src={img6} alt="slider image"/></li>
            <li class="glide__slide"><img src={img7} alt="slider image"/></li>
            <li class="glide__slide"><img src={img8} alt="slider image"/></li>
          </ul>
          </div>

          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
            <button class="glide__bullet" data-glide-dir="=4"></button>
            <button class="glide__bullet" data-glide-dir="=5"></button>
            <button class="glide__bullet" data-glide-dir="=6"></button>
            <button class="glide__bullet" data-glide-dir="=7"></button>
          </div>

          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
