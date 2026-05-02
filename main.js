"use strict";

function getDifference(firstDate, secondDate) {
  const timeUnits = [
    ["years", 12 * 4 * 7 * 24 * 60 * 60 * 1000],
    ["months", 4 * 7 * 24 * 60 * 60 * 1000],
    ["weeks", 7 * 24 * 60 * 60 * 1000],
    ["days", 24 * 60 * 60 * 1000],
  ];

  let difference = secondDate - firstDate;
  const results = [];
  timeUnits.some(function (unit) {
    const name = unit[0];
    const divider = unit[1];
    const value = Math.floor(difference / divider);
    difference -= value * divider;

    results.push([name, value]);
    if (difference <= 0) {
      // Breaking the loop.
      return true;
    }
  });
  return results;
}

// populates
function setUptime() {
  // start date should represent D2TW opening day
  // or other significant date
  const start = new Date(2026, 2, 22);
  const today = new Date();

  // builds string to display on Uptime line on homepage
  let delta = "";
  let results = getDifference(start, today);
  for (let i = 0; i < results.length; i++) {
    if (results[i][1] > 0) {
      if (i == results.length - 1) {
        delta += `${results[i][1]} ${results[i][0]}`;
      } else {
        delta += `${results[i][1]} ${results[i][0]}, `;
      }
    }
  }
  // update the uptime span elem
  let uptimeText = document.querySelector("#uptime");
  uptimeText.innerHTML = delta;
}

// add highlighting toggle for terminal cursor effect
// this also expands the hidden block for the highlighted
// navigation element
function setNavigation() {
  let clearList = () => {
    navList.forEach((elem) => {
      // ensure other navigation elements stop being highlighted
      elem.classList.remove("highlighted");
    });
  };
  // pull the array of navigation elements
  // start with the first element highlighted
  let navList = document.querySelectorAll(".navigation");
  navList[0].classList.toggle("highlighted");

  // cast to array from the nodeList
  // and begin tracking the index
  // of the higlighted element
  let navArray = [...navList];
  let i = 0;
  console.log(navArray);

  // add events to keep terminal cursor effect
  // in place even when user focuses elsewhere
  navList.forEach((nav) => {
    // highlight onclick
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      i = navArray.indexOf(nav);
      clearList();
      // now add the highlighted class to the target element
      nav.classList.add("highlighted");
    });

    // repeat for navigating with the keyboard
    // as an easter egg for the user
    nav.addEventListener("keydown", (e) => {
      // and find the index of the current highlight
      e.preventDefault();

      // handle index updating intelligently
      switch (e.key) {
        case "k":
        case "K":
        case "ArrowUp":
          if (i > 0) {
            clearList();
            i--;
            navList[i].classList.add("highlighted");
          }
          break;
        case "j":
        case "J":
        case "ArrowDown":
          if (i < navArray.length - 1) {
            clearList();
            i++;
            navList[i].classList.add("highlighted");
          }
          break;
        default:
          break;
      }
    });
  });
}

// startup logic once the page loads
window.addEventListener("load", () => {
  setUptime();
  setNavigation();
});
