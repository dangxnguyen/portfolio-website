const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let tablinks = document.getElementsByClassName("link");
let tabcontents = document.getElementsByClassName("detail");

function opentab(tab) {
	for(const tablink of tablinks) {
		tablink.classList.remove("active-link");
	}
	for(const tabcontent of tabcontents) {
		tabcontent.classList.remove("active-tab");
	}

	event.currentTarget.classList.add("active-link");
	document.getElementById(tab).classList.add("active-tab");
}
