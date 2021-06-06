// Test import of a JavaScript module
import { example } from "@/js/example";

const heading = document.createElement("h1");
heading.textContent = example();

const app = document.querySelector("#root");
app.append(heading);
