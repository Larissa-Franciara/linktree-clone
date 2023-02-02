const footer = document.querySelector('#footer')
let date = new Date().getFullYear()
footer.innerHTML = `@larissafranciara - ${date}`

window.addEventListener("DOMContentLoaded", ()=>{
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    wingSpan: 40.00,
    speedLimit: 8.00,
    separation: 100.00,
    alignment: 43.00,
    quantity: 2.00,
    backgroundAlpha:0.0,
  })
  setTimeout(()=>{
  document.querySelector('main').style.opacity='1';
  document.querySelector('main').style.filter='none';
  },1000)
})