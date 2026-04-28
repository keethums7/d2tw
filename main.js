"use strict";


window.addEventListener("load", () => {
	// calculate total uptime first
	const startDate = new Date(2026, 3, 22);
	const timeDiff = Date.now() - startDate;

	// build the timestring 
	// const yyyy = 

	let uptime = document.querySelector("#uptime");
	
	uptime.innerHTML = (timeDiff);
});
