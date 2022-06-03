function loader() {
    document.getElementById("preloader").style.display = "none";
}


// show main menu
var element = document.querySelector(".main_menu");

function myFunction() {
    element.classList.toggle("show");
}

window.onscroll = () => {
    element.classList.remove("show");
};


// menu ul container class add
let btn = document.querySelector(".menu_btn");
let menu = document.querySelector(".main_menu ul");
btn.addEventListener("click", () => {
    menu.classList.toggle("container");
});

// main active
const menu_link = document.querySelectorAll(".menu_link");

menu_link.forEach((element) => {
    element.addEventListener("click", function() {
        menu_link.forEach((link) => link.classList.remove("active"));

        this.classList.add("active");
    });
});


// portfolio menu
const p_cats = document.querySelector(".p_cats");
const p_cat_li = document.querySelectorAll(".p_cats li");
const p_cat = document.querySelectorAll(".p_cat");
const p_single = document.querySelectorAll(".port_items div");

p_cat_li.forEach((port_menu_li) => {
    port_menu_li.addEventListener("click", function() {
        p_cat_li.forEach((mb) => mb.classList.remove("bottom_space"));

        this.classList.add("bottom_space");
    });
});

p_cat.forEach((port_menu) => {
    port_menu.addEventListener("click", function() {
        p_cat.forEach((active) => active.classList.remove("active"));

        this.classList.add("active");
    });
});

p_cats.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("p_cat")) {
        const filterValue = event.target.getAttribute("data-filter");
        p_single.forEach((category) => {
            if (category.classList.contains(filterValue) || filterValue === "all") {
                category.classList.remove("hide");
                category.classList.add("display");
            } else {
                category.classList.remove("display");
                category.classList.add("hide");
            }
        });
    }
});

// Achivements counter

function myCounter() {
    setTimeout(function() {
        let counters = document.querySelectorAll(".counter");
        let time = 300;

        counters.forEach((counter) => {
            let updateCount = () => {
                let target = counter.getAttribute("data-target");
                let count = +counter.innerText;

                let increament = target / time;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increament);
                    setTimeout(updateCount, 70);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }, 6000);
}


//testimonial swiper
var swiper = new Swiper(".testimonial_slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        992: {
            slidesPerView: 1.3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});