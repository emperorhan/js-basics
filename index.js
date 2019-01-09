const title = document.querySelector("#title");

const CLICKED_CLASS = 'clicked';

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();


// const title = document.querySelector("#title");

// const BASE_COLOR = 'rgb(52, 73, 94)';
// const OTHER_COLOR = "#7f8c8d";

// function handleResize(event) {
//     console.log(event);
// }

// function handleClick(event) {
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
//     console.log(title.style.color);
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
//     title.addEventListener("mouseenter", handleClick);
// }
// init();
// // window.addEventListener("resize", handleResize);

// function handleOffline(){
//     console.log('lalala');
// }

// window.addEventListener("offline", handleOffline);