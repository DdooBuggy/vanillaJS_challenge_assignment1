const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseOn: function () {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },
  handleMouseGone: function () {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },
  handleResize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },
  handleMouseClicked: function () {
    title.style.color = colors[4];
    title.innerText = "That was a right click!";
  }
};
document.addEventListener("contextmenu", superEventHandler.handleMouseClicked);
title.addEventListener("mouseenter", superEventHandler.handleMouseOn);
title.addEventListener("mouseleave", superEventHandler.handleMouseGone);
window.addEventListener("resize", superEventHandler.handleResize);
