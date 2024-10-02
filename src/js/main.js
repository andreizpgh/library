const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 25,
  breakpoints: {
      1370: {
          slidesPerView: 3,
      },
      1024: {
          slidesPerView: 2,
      },
      0: {
          slidesPerView: 1,
      }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const burger = document.querySelector(".header__burger");
const menuList = document.querySelector(".header__menu-list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuList.classList.toggle("active");
})

document.querySelectorAll(".header__link").forEach(n => n. 
    addEventListener("click", () => {
        burger.classList.remove("active");
        menuList.classList.remove("active");
    }))

document.addEventListener("click", function handleClickOutside(event) {
  if (!burger.contains(event.target)) {
        burger.classList.remove("active");
        menuList.classList.remove("active");
  }
});



const icon = document.querySelector(".header__icon");
const dropMenu = document.querySelector(".header__drop-menu");

document.addEventListener("click", function handleClickOutside(event) {
  if (!dropMenu.contains(event.target) && !icon.contains(event.target) 
      && !dlcSignUp.contains(event.target) && !dlcLogin.contains(event.target)) {
    dropMenu.style.display = "none";
  } else if (icon.contains(event.target) && dropMenu.style.display === "block") {
    dropMenu.style.display = "none";
  } else if (icon.contains(event.target) && dropMenu.style.display === "none") {
    dropMenu.style.display = "block";
  }
});

const registerButton = document.querySelector(".register-button");
const loginButton = document.querySelector(".login-button");
const dropWrapper = document.querySelector(".drop-wrapper");
const registerWrapper = document.querySelector(".register-wrapper");
const loginWrapper = document.querySelector(".login-wrapper");

registerButton.addEventListener("click", () => {
    dropWrapper.style.opacity = "0";
    dropWrapper.style.position = "absolute";
    registerWrapper.style.opacity = "1";
    registerWrapper.style.position = "static";
})

loginButton.addEventListener("click", () => {
    dropWrapper.style.opacity = "0";
    dropWrapper.style.position = "absolute";
    loginWrapper.style.opacity = "1";
    loginWrapper.style.position = "static";
})

const closeButtons = document.querySelectorAll(".close-button");

closeButtons.forEach(button => 
    button.addEventListener("click", () => {
        dropWrapper.style.opacity = "1";
        dropWrapper.style.position = "static";
        registerWrapper.style.opacity = "0";
        registerWrapper.style.position = "absolute";
        loginWrapper.style.opacity = "0";
        loginWrapper.style.position = "absolute";
    })
)

const dlcSignUp = document.querySelector(".dlc-sign-up");
const dlcLogin = document.querySelector(".dlc-login");
const psRegister = document.querySelector(".ps-register-button");
const psLogin = document.querySelector(".ps-login-button");

dlcSignUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
    dropMenu.style.display = "block";
    dropWrapper.style.opacity = "0";
    dropWrapper.style.position = "absolute";
    loginWrapper.style.opacity = "0";
    loginWrapper.style.position = "absolute";
    registerWrapper.style.opacity = "1";
    registerWrapper.style.position = "static";
})

dlcLogin.addEventListener("click", () => {
    window.scrollTo(0, 0);
    dropMenu.style.display = "block";
    dropWrapper.style.opacity = "0";
    dropWrapper.style.position = "absolute";
    registerWrapper.style.opacity = "0";
    registerWrapper.style.position = "absolute";
    loginWrapper.style.opacity = "1";
    loginWrapper.style.position = "static";
})

psLogin.addEventListener("click", () => {
    registerWrapper.style.opacity = "0";
    registerWrapper.style.position = "absolute";
    loginWrapper.style.opacity = "1";
    loginWrapper.style.position = "static";
})

psRegister.addEventListener("click", () => {
    loginWrapper.style.opacity = "0";
    loginWrapper.style.position = "absolute";
    registerWrapper.style.opacity = "1";
    registerWrapper.style.position = "static";
})

let email = document.getElementById("email").value;
let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let pass = document.getElementById("password").value;

let iconImage = document.querySelector(".icon-image");
let iconLogged = document.querySelector(".icon-logged");
let profileWrapper = document.querySelector(".profile-wrapper");

function signUp() {
    let user = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: pass,
    };
    
    let json = JSON.stringify(user);
    localStorage.setItem("account", json);
    location.reload();
}


function checkLogged() {
    if (localStorage.account) {
        let user = JSON.parse(localStorage.account);
        const initials = `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName.slice(0, 1).toUpperCase()}`;

        dropWrapper.style.opacity = "0";
        dropWrapper.style.position = "absolute";
        registerWrapper.style.opacity = "0";
        registerWrapper.style.position = "absolute";
        loginWrapper.style.opacity = "0";
        loginWrapper.style.position = "absolute";
        profileWrapper.style.display = "flex";

        iconImage.style.display = "none";
        iconLogged.style.display = "flex";
        iconLogged.innerHTML = initials;
        document.getElementById("profile-icon").innerHTML = initials;
        document.getElementById("profile-name").innerHTML = user.firstName + ' ' + user.lastName;

        dlcSignUp.addEventListener("click", () => {
            window.scrollTo(0, 0);
            dropMenu.style.display = "block";
            dropWrapper.style.opacity = "0";
            dropWrapper.style.position = "absolute";
            loginWrapper.style.opacity = "0";
            loginWrapper.style.position = "absolute";
            registerWrapper.style.opacity = "0";
            registerWrapper.style.position = "absolute";
        })
        
        dlcLogin.addEventListener("click", () => {
            window.scrollTo(0, 0);
            dropMenu.style.display = "block";
            dropWrapper.style.opacity = "0";
            dropWrapper.style.position = "absolute";
            registerWrapper.style.opacity = "0";
            registerWrapper.style.position = "absolute";
            loginWrapper.style.opacity = "0";
            loginWrapper.style.position = "absolute";
        })
    }
}


