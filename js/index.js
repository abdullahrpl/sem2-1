

const btnhp = document.getElementById("btnhp");
const nvhp = document.getElementById("nvhp");
const btnclose = document.getElementById("btnclose");

btnclose.addEventListener("click", function closeNvhp(){
    nvhp.classList.add("hidden");
})
btnhp.addEventListener("click", function openNvhp(){
    nvhp.classList.remove("hidden");
})

document.querySelectorAll('[data-carousel-slide-to]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('[aria-current="true"]').removeAttribute('aria-current');
      button.setAttribute('aria-current', 'true');
    });
  });