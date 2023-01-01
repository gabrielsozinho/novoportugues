twemoji.parse(document.body);
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anim-active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('anim-active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
const visits = document.getElementById('visits');

//check if use has visited the page
if (localStorage.getItem('visited') === null) {
    localStorage.setItem('visited', 'true');
    fetch('https://api.countapi.xyz/hit/novoportugues.ga/visits')
       .then(res => res.json())
       .then(res => {
           visits.innerHTML = res.value;
       });
} else {
    fetch('https://api.countapi.xyz/get/novoportugues.ga/visits')
       .then(res => res.json())
       .then(res => {
           visits.innerHTML = res.value;
       });
}
