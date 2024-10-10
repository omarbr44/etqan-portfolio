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
    function showWaitlistModal() {
        let waitlistModal = document.querySelector('#wait-list-section')
        if(waitlistModal.className != 'hide-wait-list-section') {
            waitlistModal.className = 'hide-wait-list-section'
        }
        else {
            waitlistModal.className = 'show-wait-list-section'
        }
    }
    function showJoinWaitlistModal() {
        let waitlistModal = document.querySelector('#join-wait-list-section')
        if(waitlistModal.className != 'hide-wait-list-section') {
            waitlistModal.className = 'hide-wait-list-section'
        }
        else {
            waitlistModal.className = 'show-wait-list-section'
        }
    }
    