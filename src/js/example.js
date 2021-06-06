var $script = require("scriptjs");

$script.get("https://code.jquery.com/jquery-3.6.0.slim.js", function (app) {
  console.log("jquery loaded at runtime");
  $("body").addClass("this-worked");
});

export const example = () => `Testing federation`;

console.log("above SRC call in example.js");
console.log("SRC: ", window.SRC);
console.log("testing");
