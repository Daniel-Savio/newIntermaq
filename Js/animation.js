const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

console.log(faders)
const appearOptions = {
    threshold:1,
    rootMargin: "0px 0px -200px 0px"

}
const slideOptions = {
    threshold:0,
    rootMargin: "0px 0px -250px 0px"

}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions);


const slideOnScroll = new IntersectionObserver((entries, slideOnScroll)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('slided')
            slideOnScroll.unobserve(entry.target)
        }
    })
}, slideOptions);

faders.forEach( (fader)=>{
    appearOnScroll.observe(fader);
})
sliders.forEach( (slider)=>{
    slideOnScroll.observe(slider);
})