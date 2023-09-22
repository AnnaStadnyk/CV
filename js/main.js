document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("year").innerHTML = (new Date().getFullYear());

    document.querySelector('.icon__menu').addEventListener('click', () => {
        openMenu();
    })
    document.querySelectorAll('.menu-link').forEach(item => {
        item.onclick = () => { openMenu(); }
    })
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && document.querySelector('body').classList.contains('lock')) {
            openMenu();
        }
    });

    document.querySelectorAll('.expirience__content-tab').forEach(item => {
        item.onclick = () => {
            document.querySelector('.expirience__content-tab.active').classList.remove('active');
            item.classList.add('active');

            const active = item.dataset['firm'];
            document.querySelectorAll('.expirience__content-item').forEach(block => {
                if (block.classList.contains(`firm__${active}`)) {
                    block.classList.add('active');
                }
                else {
                    block.classList.remove('active');
                }
            })
        }
    })

    expirienceChangeView();
    window.addEventListener('resize', expirienceChangeView);

    const swiper = new Swiper('.portfolios__content', {
        slidesPerView: 3,
        spaceBetween: 56,
        grabCursor: true,

        navigation: {
            nextEl: '.portfolios__arrows-right',
            prevEl: '.portfolios__arrows-left',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 56
            }
        }
    });

    const swiper__testimonials = new Swiper('.testimonials__content', {
        slidesPerView: 3,
        spaceBetween: 56,
        grabCursor: true,
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // autoHeight: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 56
            }
        }
    });

})


function openMenu() {
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('.icon__menu').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
}

function expirienceChangeView() {

    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelectorAll('.expirience__content-tab').forEach(item => {
            document.querySelector(`.firm__${item.dataset['firm']}`).insertAdjacentElement('beforebegin', item);
        })
        const menuList = document.querySelector('.menu-list');
        document.querySelectorAll('.dropdown-link').forEach(item => {
            menuList.insertAdjacentElement('beforeend', item);
        })
    }
    else {
        const firmBlock = document.querySelector('.expirience__content-tabs');
        document.querySelectorAll('.expirience__content-tab').forEach(item => {
            firmBlock.insertAdjacentElement('beforeend', item);
        })
        const menuDropdown = document.querySelector('.menu-dropdown');
        document.querySelectorAll('.dropdown-link').forEach(item => {
            menuDropdown.insertAdjacentElement('beforeend', item);
        })
    }
}


