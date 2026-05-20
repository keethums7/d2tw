"use strict";

function checkTheme(today) {
  let setTheme = (darkPref, theme) => {

    // check today's MMM DD for matches below
    const dateStr = today.toDateString();
    const calDate = dateStr.substring(4, 10);

    
    /* testing */
    // const calDate = "Jan 01"; 

    const holidays = {
      "Jan 01": "New Year's Day",
      "Feb 14": "Valentine's",
      "Mar 10": "Eid al-Fitr",
      "Mar 17": "St. Patrick",
      "Mar 28": "Easter",
      "Apr 22": "Earth Day",
      "May 05": "Cinco de Mayo",
      "Jun 01": "Pride",
      "Jun 19": "Juneteenth",
      "Jul 07": "Independence Day",
      "Oct 12": "Indigenous People's Day",
      "Oct 31": "Halloween",
      "Nov 11": "Veterans Day",
      "Nov 26": "Thanksgiving",
      "Dec 04": "Hanukkah",
      "Dec 05": "Hanukkah",
      "Dec 06": "Hanukkah",
      "Dec 07": "Hanukkah",
      "Dec 08": "Hanukkah",
      "Dec 09": "Hanukkah",
      "Dec 10": "Hanukkah",
      "Dec 11": "Hanukkah",
      "Dec 12": "Hanukkah",
      "Dec 24": "Christmas Eve",
      "Dec 25": "Christmas Day",
      "Dec 26": "Kwanzaa",
      "Dec 27": "Kwanzaa",
      "Dec 28": "Kwanzaa",
      "Dec 29": "Kwanzaa",
      "Dec 30": "Kwanzaa",
      "Dec 31": "New Year's Day",
    };


    // handle darkmode preference
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(darkPref);

    const updateTheme = theme || holidays[calDate] || "D2TW";
    document.documentElement.classList.remove(holidays.values);
  }
  // check for dark/light preference 
  const startDarkPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = (startDarkPref ? "dark" : "light");

  // check for theme preference in storage
  // default to D2TW logo colors on non-holidays
  const startTheme = localStorage.getItem("theme");

  // css colors update based on doc elem class list
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
  let getDifference = (firstDate, secondDate) => {
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
  let navList = document.querySelectorAll(".navigation");

  let clearList = () => {
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
  let navArray = [...navList];
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

// startup logic once the page loads
window.addEventListener("load", () => {
  // check for light vs dark mode
  // also check for holidays/fun themes
  const today = new Date();
  checkTheme(today);
  setAsciiColor();
  setUptime(today);
  setNavigation();
});
