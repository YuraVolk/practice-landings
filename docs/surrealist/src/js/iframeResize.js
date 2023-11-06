window.resizeTreesSectionIframe = (object) => {
	setInterval(() => {
		const newHeight = object.contentWindow.document.documentElement.offsetHeight + "px";
		if (object.style.height !== newHeight) object.style.height = newHeight;
	}, 750);
};

window.addEventListener("resize", () => {
	[...document.querySelectorAll(".section-iframe")].forEach((object) =>
		window.resizeTreesSectionIframe(object),
	);
});
