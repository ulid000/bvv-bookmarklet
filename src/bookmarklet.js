import css from "./style.css";
const hello = require("./hello.js");

// loop through all forms
[...document.forms].forEach(
    (element, index, array) => {
       console.log(element); 
    }
);
