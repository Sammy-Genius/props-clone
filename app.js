const tl = gsap.timeline();
Splitting();


tl.to('.lamp', {top:'50%', duration:1.5, delay:.7, rotate:40, ease:'power3.in'})
  .to('.wing', {top:'52%', duration:1.5, rotate:60, ease:'power3.in'}, '-=1.5')
  .to('.chair', {top:'52%', duration:1.5, rotate:30, ease:'power2.in'}, '<')
  .to('.lamp-stand, .stand', {top:'70%', duration:1.5, rotate:-30, ease:'power3.in'}, '<')
  .to('.first-move div', {y:-200, duration:.8, ease:'power3.in', stagger: {
    amount:-0.07
  }}, '<0.7')
  .to('.second-move', {top:'-8%', duration:.8, ease:'power3.in', stagger: {
    amount:0.3
  }}, '<')
  .to('.third-move', {top:'90%', duration:.8, ease:'power3.in', stagger: {
    amount:0.3
  }}, '<.18')
  .to('.wing, .chair, .lamp, .lamp-stand, .stand', {top:'45%', left:'50%', xPercent:-50, rotate:0, yPercent:-50, delay:.4, duration:1.5, ease:'power3.in'})
  .to('.second-move, .third-move, .fourth-move, .fifth-move', {top:'-50%', duration:.8, ease:'power3.in', stagger: {
    amount:0.3
  }}, '<.35')
  .to('.zero', {y:-200, duration:.8, ease:'power3.in'}, '<')
  .to('.one, .sixth-move', {top:'50%', duration:.8, ease:'power3.in', stagger: {
    amount:0.3
  }}, '<')
  .set('.wing, .lamp, .lamp-stand, .stand', {display:'none'})
  .to('.chair', {top:'40%', duration:.5, delay:.5, ease:'power3.in'})
  .to('.chair, .rectangle img', {borderRadius:'50%', duration:.5, ease:'power3.out'})
  .from('.char', {y:'1000', duration:1, ease:'power3.out', stagger: {
    amount:0.5
  }}, '-=.85')
  .to('.hide', {y:-100, duration:.8, ease:'power3.in', stagger: {
    amount:-0.07
  }}, '<')
  .set('.percentage-box', {display:'none'}, '<1')
  .to('header', {y:0, duration:.7, ease:'power3.out'}, '-=1')
  .from('.emerge', {y:200, duration:.8, ease:'power3.out', stagger: {
    amount:0.3
  }}, '<')