const scroll = (headerrr) => {
   const header = document.querySelector(headerrr),
         width = window.getComputedStyle(header).height;

   let prevScroll = window.pageYOffset;
   let currentScroll;

   window.addEventListener('scroll', () => {
      currentScroll = scrollY;

      if (currentScroll > prevScroll) {
         header.style.cssText = `
            top: -${width};
         `;
      } else {
         header.style.cssText = `
         top: ${0};
      `;
      }
      prevScroll = currentScroll;

   });
}

export default scroll;