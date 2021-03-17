let slider = document.querySelector(".slider-inner");
let items = document.querySelectorAll(".slider-item");

let index = 0;
let indicators = [];
createIndicators();

function createIndicators() {
    let parent = document.querySelector(".slider-indicators");
    for (let i = 0; i < items.length - (numItems() - 1); i++) {
        let li = document.createElement("li");
        parent.appendChild(li);
        li.addEventListener("click", onIndicator);
        indicators.push(li);
    }
    toogleActive();
}

function onIndicator(e) {
    toogleActive();
    index = indicators.indexOf(e.target);
    gotoItem();
}

function toogleActive() {
    // indicators[index].classList.toggle("active");
}

function numItems() {
    return Math.round(
        100 / parseFloat(window.getComputedStyle(items[index]).flexBasis)
    );
}

function gotoItem() {
    let width = parseFloat(window.getComputedStyle(items[index]).flexBasis);
    slider.style.transform = `translate3d(${-width * index}%, 0, 0)`;
    toogleActive();
}

window.addEventListener("resize", onResize);

function onResize() {
    for (const li of indicators) {
        li.remove();
    }
    indicators = [];
    createIndicators();
    index = Math.max(Math.min(indicators.length - 1, index), 0);
    gotoItem(index);
}

let logo = document.querySelector(".logo");
let nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 167) {
        logo.style.display = "unset";
        nav.style.position = "fixed";
        nav.style.zIndex = "1";
        nav.style.top = "0";
        nav.style.borderBottom = "solid 1px black";
    } else {
        logo.style.display = "none";
        nav.style.position = "static";
        nav.style.borderBottom = "none";
    }
});
