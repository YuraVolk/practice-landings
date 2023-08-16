window.resizeTreesSectionIframe = (object) => {
    setInterval(() => {
        object.style.height = object.contentWindow.document.documentElement.offsetHeight + "px";
    }, 500);
};
