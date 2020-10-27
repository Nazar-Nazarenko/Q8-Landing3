document.querySelector('.button-cta').addEventListener('click',()=>{
    scrollToElement(document.querySelector('#regform'));
});
console.log("click");
document.querySelector('#bottom-button').addEventListener('click',()=>{
    scrollToElement(document.querySelector('#regform'));
});
console.log("click");

/**
 * this function will scroll to the center of passed element
 * @param element
 */
function scrollToElement(element) {
    element.scrollIntoView({block: "center", behavior: "smooth"});
}

