'use strict';

import slider from './modules/slider';
import scroll from './modules/scroll';
import navigation from './modules/navigation';


window.addEventListener('DOMContentLoaded', () => {
  
   slider('.slider');
   scroll('.header__inner');
   navigation();
 
});
