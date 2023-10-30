
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
        document.querySelector("body").classList.toggle("lock")
    })
})

const menu = document.querySelector(".nav")

menu.querySelectorAll(".navlink").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".header").classList.remove("open")
        document.querySelector("body").classList.remove("lock")
    })
});