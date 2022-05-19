const navigation = () => {
   const parent = document.querySelector('.menu__list');

   parent.addEventListener('click', (e) => {
         switch(e.target.getAttribute('id')) {
            case 'start':
               window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
               });
               break;
            case 'about':
               window.scrollTo({
                  top: 660,
                  left: 0,
                  behavior: "smooth"
               });
               break;
            case 'projects':
               window.scrollTo({
                  top: 1690,
                  left: 0,
                  behavior: "smooth"
               });
               break;
         }

      console.log(e.target.getAttribute('id'));
   });
}

export default navigation;