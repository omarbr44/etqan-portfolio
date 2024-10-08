// tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors:{
            "site-shapes": "#014c7d",
            "site-text-primary": "#014c7d",
            "site-text-secondary": "#596373",
            }
        },
        fontFamily:{
            Roboto: ["Roboto, sans-serif"],
        },
        container: {
            padding: "0.5rem",
            center: true,
        },
        screens:{
            sm: {'max': '640px'},
            md: {'max': '1024px',
                'min': '640px'} ,
            lg: '1024px',
        }
},
}
    function showHideNav() {
        let mobileNav = document.querySelector('#mobile-nav')
        if(mobileNav.className != 'hidden') {
            mobileNav.className = 'hidden'
        }
        else {
            mobileNav.className = 'block'
        }
    }
    // To initiate gsap
    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.stepper-section',
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      start: "center center",
      end: "+=600"
    }
  });
  tl.add('start')
    .to('.stepper-circle', {opacity:1,borderWidth: '5px', stagger:1.5 })
    .to('.text-stepper-container-1 h1',{
        textContent: document.documentElement.lang === 'en' ? 'Secure' : 'امن'
    },1.5)
    .to('.text-stepper-container-1 p',{
        textContent: document.documentElement.lang === 'en' ? 
                    'Guarantees the protection of your money and banking data' :
                    'يضمن حماية أموالك وبياناتك المصرفية'
    },1.5)
    .to('.img-stepper-container-1',{display: 'none'},1)
    .to('.img-stepper-container-2',{display: 'block'},1.5)
    .to('.text-stepper-container-1 h1',{
        textContent: document.documentElement.lang === 'en' ? 'Transparenjt' : 'شفاف'
    },3)
    .to('.text-stepper-container-1 p',{
        textContent: document.documentElement.lang === 'en' ? 
        'Clarity across all banking services ensures you won’t be hit with unexpected charges or hidden fees' :
        'يضمن الوضوح في جميع الخدمات المصرفية عدم تعرضك لرسوم غير متوقعة أو رسوم مخفية'
    },3)
    .to('.img-stepper-container-2',{display: 'none'},2.5)
    .to('.img-stepper-container-3',{display: 'block'},3)
    .to('.stepper-section-container',{
        backgroundColor: '#014c7d',
    },4.5)
    .to('.stepper-circle', {borderColor: 'white',})
    .to('.text-stepper-container-1 h1',{
        color: 'white',
        textContent: document.documentElement.lang === 'en' ? 'Fast' : 'سريع'
    },4.5)
    .to('.text-stepper-container-1 p',{
        color: 'white',
        textContent: document.documentElement.lang === 'en' ?
                     'Our commitment to promptness and efficiency means that every D banking service is completed in seconds' :
                     'إن التزامنا بالسرعة والكفاءة يعني أن كل خدمة مصرفية ثلاثية الأبعاد يتم إنجازها في ثوانٍ' 
                     
    },4.5)
    .to('.img-stepper-container-3',{display: 'none'},4)
    .to('.img-stepper-container-4',{display: 'block'},4.5)
    });