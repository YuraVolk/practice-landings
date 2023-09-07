window.resizeTreesSectionIframe = (object) => {
    setTimeout(() => {
        object.style.height = object.contentWindow.document.documentElement.offsetHeight + "px";
    }, 500);
};

window.addEventListener("resize", () => {
    [...document.querySelectorAll(".section-iframe")].forEach(object => window.resizeTreesSectionIframe(object));
});
