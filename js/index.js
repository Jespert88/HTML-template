/* 
=============
Leaflet maps
=============
*/

//It don't work?
/* function getMap() {
  console.log("hej från leaflet func");
  let mymap = leaflet.map("#mapID").setView([56.8787183, 14.8094385], 13);

  leaflet
    .tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoib2FrbGFuZGVyIiwiYSI6ImNrMjFpZzQ2MzE5bXkzbW12Z3d0YmE4MHUifQ.seUiXfpT77ZJjCL4Isu-iw",
      }
    )
    .addTo(mymap);
}
getMap(); */


/* 
===============
Back to top
===============
*/
window.onload = function () {
  // Variables
  let arrowUp = document.querySelector("#backToTop");
  let intervalId = 0;

  // Functions
  function toggleArrow(e) {
    if (window.scrollY >= 500) {
      arrowUp.classList.add("is-block");

      setTimeout(function () {
        arrowUp.classList.add("is-opacity");
      }, 10);
    } else {
      arrowUp.classList.remove("is-opacity");
    }
  }
  function scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  function scrollToTop() {
    intervalId = setInterval(scrollStep, 8.36);
  }

  // Event listeners
  arrowUp.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", toggleArrow);
};
