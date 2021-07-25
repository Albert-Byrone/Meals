const sectionCenter = document.querySelector(".restaurants");

const filterBtn = document.querySelectorAll(".filter-btn");

// load all the items
window.addEventListener("DOMContentLoaded", () => {
  getRestaurants();
});

let getRestaurants = () => {
  var settings = {
    url: "https://foodbukka.herokuapp.com/api/v1/restaurant",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    let values = Object.values(response);
    let restaurants = values[1];

    // filter items
    filterBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.category;
        console.log(category);
        const menuCategory = restaurants.filter((menuItem) => {
          console.log(menuItem.restauranttype);
          if (menuItem.restauranttype === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          getRestaurants();
        }
      });
    });

    let restaurant = restaurants.map((item) => {
      return `<div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" >
      <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" style="background-color:#BBED9A">
          <div class="relative pb-48 overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover"
                  src=${item.image}
                  alt="">
          </div>
          <div class="p-4">
              <span
                  class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">${item.restauranttype}</span>
              <h2 class="mt-2 mb-2  font-bold" style="color:#EAAB1B; text-transform:capitalize;">${item.businessname}</h2>
              <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  ullamcorper
                  nulla non metus auctor fringilla.</p>
              <div class="mt-3 flex items-center">
                  <span class="text-sm font-semibold">Location </span>&nbsp;<span
                      class="font-bold text-xl">${item.location}</span>&nbsp;<span class="text-sm font-semibold"></span>
              </div>
          </div>
          <div class="p-4 border-t border-b text-xs text-gray-700" style="background-color:#FFD77C;">
              <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
              </span>
              <span class="flex items-center">
                  <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>  ${item.address}
              </span>
          </div>
      </a>
  </div>`;
    });
    restaurant = restaurant.join("");
    sectionCenter.innerHTML = restaurant;
  });
};
