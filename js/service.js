const btnhp = document.getElementById("btnhp");
const nvhp = document.getElementById("nvhp");
const btnclose = document.getElementById("btnclose");

btnclose.addEventListener("click", function closeNvhp(){
    nvhp.classList.add("hidden");
})
btnhp.addEventListener("click", function openNvhp(){
    nvhp.classList.remove("hidden");
})