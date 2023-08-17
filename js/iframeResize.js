window.resizeTreesSectionIframe = (object) => {
    setTimeout(() => {
        object.style.height = object.contentWindow.document.documentElement.offsetHeight + "px";
    }, 500);
};

window.addEventListener("resize", () => {
    window.resizeTreesSectionIframe(document.querySelector(".trees-iframe"));
});
