var $script = require("scriptjs");

// let remoteURL = "https://code.jquery.com/jquery-3.6.0.slim.js";

// loads the console.log
// let remoteURL = "https://storytest.azureedge.net/$web/edittool/1.1.19/__dist/app.js";

// SRC ERRORS
let remoteURL =
  "https://storytest.azureedge.net/$web/edittool/1.1.20/__dist/app.js";

$script.get(remoteURL, function (app) {
  // console.log("jquery loaded at runtime");
  // $("body").addClass("this-works");
  console.log("test");
});

export const example = () => `Testing federation`;

console.log("above SRC call in example.js");
console.log("SRC: ", window.SRC);
console.log("testing");``
