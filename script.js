const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.animate(
    [{opacity:0,transform:"translateY(22px)"},{opacity:1,transform:"translateY(0)"}],
    {duration:650,easing:"cubic-bezier(.2,.7,.2,1)",fill:"forwards"}
  ); reveal.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll(".section,.service,.timeline-item,.panel").forEach(el=>reveal.observe(el));
