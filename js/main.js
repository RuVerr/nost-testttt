// main.js
import * as headerModules from "./header/index.js";
import * as headerPopUpFormModules from "./header/index.js";
import * as globalFunction from "./function/globalFunction.js";
import * as introCarousel from "./carousel/index.js"
import FormHandler from "./form/FormHandler.js";

document.addEventListener("DOMContentLoaded", () => {
    new FormHandler()
    new headerModules.headerBurgerMenu()
    new headerPopUpFormModules.headerPopUpForm()
    new introCarousel.introCarousel()
    
    globalFunction.lineAnimBurgerMenu(document.querySelectorAll(".line_burger"));
});