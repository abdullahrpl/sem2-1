const btnhp = document.getElementById("btnhp");
const nvhp = document.getElementById("nvhp");
const btnclose = document.getElementById("btnclose");

const btnsemua = document.getElementById("kategori-semua");
const btnstore = document.getElementById("kategori-store");
const btnmonthly = document.getElementById("kategori-monthly");
const btnhemat = document.getElementById("kategori-hemat");
const store = document.querySelectorAll("store");
const monthly = document.querySelectorAll("monthly");
const hemat = document.querySelectorAll("hemat");

btnclose.addEventListener("click", function closeNvhp() {
  nvhp.classList.add("hidden");
});
btnhp.addEventListener("click", function openNvhp() {
  nvhp.classList.remove("hidden");
});

function filterCards(category) {
  const cards = document.querySelectorAll('#card');
  cards.forEach(card => {
    if (category === 'semua' || card.getAttribute('data-category') === category) {
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none';
    }
  });

  const buttons = document.querySelectorAll('.kategori-item');
  buttons.forEach(button => {
    button.classList.remove('active');
    if (button.getAttribute('onclick').includes(category)) {
      button.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  filterCards('semua');
});

window.onload = () => setActive("kategori-semua");