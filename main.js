"use strict";

function checkTheme(today) {
  const holidays = {
    "Jan 01": "newYear",
    "Feb 14": "valentine",
    // "Mar 10": "eidAlFitr",
    "Mar 17": "stPatrick",
    "Mar 28": "easter",
    "Apr 22": "earthDay",
    "May 05": "cincoDeMayo",
    "Jun 01": "pride",
    "Jun 19": "juneteenth",
    "Jul 07": "independence",
    "Oct 12": "indigenousPeoplesDay",
    "Oct 31": "halloween",
    "Nov 11": "veteransDay",
    "Nov 26": "thanksgiving",
    "Dec 04": "hanukkah",
    "Dec 05": "hanukkah",
    "Dec 06": "hanukkah",
    "Dec 07": "hanukkah",
    "Dec 08": "hanukkah",
    "Dec 09": "hanukkah",
    "Dec 10": "hanukkah",
    "Dec 11": "hanukkah",
    "Dec 12": "hanukkah",
    "Dec 24": "christmas",
    "Dec 25": "christmas",
    "Dec 26": "kwanzaa",
    "Dec 27": "kwanzaa",
    "Dec 28": "kwanzaa",
    "Dec 29": "kwanzaa",
    "Dec 30": "kwanzaa",
    "Dec 31": "newYear",
  };

  const setTheme = (darkPref, theme) => {

    // check today's MMM DD for matches below
    const dateStr = today.toDateString();
    const calDate = dateStr.substring(4, 10);

    /* 
      * test line - change to different dates 
      * to test holiday based themes
    */ 
    // const calDate = "Dec 31";

    // handle darkmode preference
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(darkPref);

    const updateTheme = theme || holidays[calDate] || "d2tw";
    localStorage.setItem("theme", updateTheme);

    // clear previous theme classes and update
    document.documentElement.classList.remove(holidays.values);
    document.documentElement.classList.add(updateTheme);

    // 
    document.querySelector("#theme").innerHTML = updateTheme;
    document.querySelector("#darkPref").innerHTML = `(${darkPref})`;
  }

  // check for dark/light preference 
  const startDarkPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = (startDarkPref ? "dark" : "light");

  // check for saved theme
  const startTheme = localStorage.getItem("theme");
  setTheme(startDark, startTheme);

  // event listener to check for dark/light mode changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        const eDark = e.matches ? "dark" : "light";
        const eTheme = localStorage.getItem("theme");
        setTheme(eDark, eTheme);
    })
}


// colorizes the logo based on colorscheme
// outlined within the function
function setAsciiColor() {
  // grab ascii logo and create slices
  const d2tw = `
    ::########:.  .:######:..
   .%%%%%%%%%%%%=+%%%%%%%%%%+
   :=%%%#====#%%#%%%*====#%%%             .:-=:.
    :%%%-    #%%#%%%:    #%%+          .:---:   %:
    +%%%.   :%%%-     .:+%%%:       .:----.      .%
   .#%%+    +%%#.  .-*%%%#+:      .:----.         :.
   -%%%-   .%%%#:+#%%%#+:.     .:-----.            :
   +%%#.   -%%%#%%%*- .......:-----:......  .....  ......
  .%%%+    *%%#%%%=   -%%%%%%%%%%%%%+*%%%+  *%%%*: =*%%%*.
 +*%%%**+*+%%%#%%%***=#+***+**** =**+-****. *****+ .+***=.
:%%%%%%%%%%#*-*%%%%%%%#*+** +***.=**+ =***. +*****- :***.
                   +=---:.  :***:     .***= +******.:***:
                 .*###=:    .***=      :***:+**++**+:***:
               .%%%%#=       =***.      =***+**+.***=***:
             :%=+%%#:        :***-      .******+ -******:
             .+:-:%           ***+       :******  +*****-
           .+*               +=***+:      =*****  .*****-
         .+*                 :*****+      .*****   -****-`;

  /*
   * will try to rework at some point
   * but since it's building a string in sequence
   * may be difficult to fit into an object or other
   * less verbose structure
   */
  const ascii = [
    { type: "d2", text: d2tw.substring(0, 90) },
    { type: "handle", text: d2tw.substring(90, 105) },
    { type: "cable", text: d2tw.substring(105, 110) },
    { type: "d2", text: d2tw.substring(110, 139) },
    { type: "handle", text: d2tw.substring(139, 155) },
    { type: "cable", text: d2tw.substring(155, 160) },
    { type: "d2", text: d2tw.substring(160, 190) },
    { type: "handle", text: d2tw.substring(190, 204) },
    { type: "cable", text: d2tw.substring(204, 212) },
    { type: "d2", text: d2tw.substring(212, 241) },
    { type: "handle", text: d2tw.substring(241, 254) },
    { type: "cable", text: d2tw.substring(254, 265) },
    { type: "d2", text: d2tw.substring(265, 292) },
    { type: "handle", text: d2tw.substring(292, 305) },
    { type: "cable", text: d2tw.substring(305, 318) },
    { type: "d2", text: d2tw.substring(318, 341) },
    { type: "space", text: d2tw.substring(341, 348) },
    { type: "handle", text: d2tw.substring(348, 355) },
    { type: "space", text: d2tw.substring(355, 376) },
    { type: "d2", text: d2tw.substring(376, 398) },
    { type: "tw", text: d2tw.substring(398, 435) },
    { type: "d2", text: d2tw.substring(435, 459) },
    { type: "tw", text: d2tw.substring(459, 463) },
    { type: "handle", text: d2tw.substring(463, 464) },
    { type: "tw", text: d2tw.substring(464, 494) },
    { type: "d2", text: d2tw.substring(494, 518) },
    { type: "tw", text: d2tw.substring(518, 552) },
    { type: "handle", text: d2tw.substring(552, 579) },
    { type: "tw", text: d2tw.substring(579, 610) },
    { type: "lead", text: d2tw.substring(610, 630) },
    { type: "handle", text: d2tw.substring(630, 635) },
    { type: "tw", text: d2tw.substring(635, 668) },
    { type: "lead", text: d2tw.substring(668, 691) },
    { type: "tw", text: d2tw.substring(691, 727) },
    { type: "lead", text: d2tw.substring(727, 748) },
    { type: "tw", text: d2tw.substring(748, 784) },
    { type: "tip", text: d2tw.substring(784, 801) },
    { type: "lead", text: d2tw.substring(801, 804) },
    { type: "tw", text: d2tw.substring(804, 842) },
    { type: "tip", text: d2tw.substring(842, 857) },
    { type: "tw", text: d2tw.substring(857, 900) },
    { type: "tip", text: d2tw.substring(900, 913) },
    { type: "tw", text: d2tw.substring(913, 958) },
  ];

  // prep to replace the <pre/> element with colorized text
  let logo = document.querySelector(".logo");
  let spans = [];

  // iterate through "sections"
  for (let i of ascii) {
    // iterate through each substring of the section
    let span = document.createElement("span");
    span.innerHTML = i.text;
    span.className = i.type;
    spans.push(span);
  }

  logo.replaceChildren(...spans);
}

// test lines below
// let asciiLogoElem = document.querySelector(".asciiLogo");
// let pre = document.createElement("pre");
// pre.innerHTML = asciiLogoTxt;
// asciiLogoElem.replaceWith(pre);

// populates uptime line on "fastfetch" style printout
function setUptime(today) {
  const getDifference = (firstDate, secondDate) => {
    const timeUnits = [
      ["years", 12 * 4 * 7 * 24 * 60 * 60 * 1000],
      ["months", 4 * 7 * 24 * 60 * 60 * 1000],
      ["weeks", 7 * 24 * 60 * 60 * 1000],
      ["days", 24 * 60 * 60 * 1000],
    ];

    let difference = secondDate - firstDate;
    const results = [];
    timeUnits.some((unit) => {
      // compares each unit above in milliseconds
      // with the time difference between the two dates
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
  };
  // start date should represent D2TW opening day
  // or other significant date
  const start = new Date(2026, 2, 22);

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
  // pull the array of navigation elements
  // start with the first element highlighted
  const navList = document.querySelectorAll(".navigation");

  const clearList = () => {
    navList.forEach((elem) => {
      // ensure other navigation elements stop being highlighted
      elem.classList.remove("highlighted");
    });
  };

  // set the terminal effect on the first nav on pageload
  navList[0].classList.add("highlighted");

  // cast to array from the nodeList
  // and begin tracking the index
  // of the higlighted element
  const navArray = [...navList];
  let index = 0;

  // add events to keep terminal cursor effect
  // in place even when user focuses elsewhere
  navList.forEach((nav) => {
    // highlight onclick
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      index = navArray.indexOf(nav);
      clearList();
      // now add the highlighted class to the target element
      nav.classList.add("highlighted");
    });
  });

  // add arrow, WASD, and Vim keybinding navigation
  // as an easter-egg for the nerds
  // also - using window instead of nav elem as root due to
  // keydown requiring focus
  window.addEventListener("keydown", (e) => {
    // handle index updating intelligently
    switch (e.key) {
      case "k":
      case "K":
      case "w":
      case "W":
      case "ArrowUp":
        e.preventDefault();

        // upper boundary
        if (index > 0) {
          clearList();
          index--;
          navList[index].classList.add("highlighted");
        }
        break;
      case "j":
      case "J":
      case "s":
      case "S":
      case "ArrowDown":
        e.preventDefault();

        // lower boundary
        if (index < navArray.length - 1) {
          clearList();
          index++;
          navList[index].classList.add("highlighted");
        }
        break;
      default:
        break;
    }
  });
}

/* 
 * startup 
 */
window.addEventListener("load", () => {
  // check for light vs dark mode
  // also check for holidays/fun themes
  const today = new Date();
  checkTheme(today);
  setAsciiColor();
  setUptime(today);
  setNavigation();
});
