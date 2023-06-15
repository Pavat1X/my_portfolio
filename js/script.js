import AOS from "aos";
import "aos/dist/aos.css";


document.addEventListener('DOMContentLoaded',(e)=>{
    AOS.init({
        duration: 1000,
        offset: 100,
    })
});