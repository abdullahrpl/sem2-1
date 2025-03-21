const btnhp = document.getElementById("btnhp");
const nvhp = document.getElementById("nvhp");
const btnclose = document.getElementById("btnclose");

btnclose.addEventListener("click", function closeNvhp() {
  nvhp.classList.add("hidden");
});
btnhp.addEventListener("click", function openNvhp() {
  nvhp.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      items.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main");
  const navLinks = document.querySelectorAll(".kategori-item");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

const userLogin = document.getElementById("login-txt");
const userGet = localStorage.getItem("username");
const username = document.getElementById("username");
const profile = document.getElementById("prdiv")
const overlay = document.getElementById('overlay')

if (userGet) {
  userLogin.href = "#";
  userLogin.textContent = userGet;
  username.textContent = userGet;

  userLogin.addEventListener("click", () =>{
    profile.classList.remove("hidden");
    overlay.classList.remove("hidden");
  })

  profile.addEventListener("click", () =>{
    profile.classList.remove("hidden");
    overlay.classList.remove("hidden");
  })
}

function close() {
    profile.classList.add("hidden");
    overlay.classList.add("hidden");
}