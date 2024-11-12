const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", () => {
	if (button.textContent === "SHOW") {
		button.textContent = "HIDE";
		p.textContent = "Welcome, to the Web World!";
	} else {
		button.textContent = "SHOW";
		p.textContent = "";
	}
});
