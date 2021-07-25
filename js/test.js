const sectionCenter = document.querySelector(".menu-list");
const filterBtn = document.querySelector(".filter-btn");

const menu = [
  {
    id: 1,
    title: "Butteril Cake",
    category: "breakfast",
    description:
      "an online system for taking and processing orders in restaurants, with strong sales and marketing support. With direct integration with POS systems (such as Micros 3700 and others) and food ordering applications (such as Uber Eats, Glovo, Wolt, ",
    image:
      "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: 1,
    title: "Butteril Cake",
    category: "lunch",
    description:
      "an online system for taking and processing orders in restaurants, with strong sales and marketing support. With direct integration with POS systems (such as Micros 3700 and others) and food ordering applications (such as Uber Eats, Glovo, Wolt, ",
    image:
      "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: 1,
    title: "Butteril Cake",
    category: "dinner",
    description:
      "an online system for taking and processing orders in restaurants, with strong sales and marketing support. With direct integration with POS systems (such as Micros 3700 and others) and food ordering applications (such as Uber Eats, Glovo, Wolt, ",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: 1,
    title: "Butteril Cake",
    category: "breakfast",
    description:
      "an online system for taking and processing orders in restaurants, with strong sales and marketing support. With direct integration with POS systems (such as Micros 3700 and others) and food ordering applications (such as Uber Eats, Glovo, Wolt, ",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  console.log("This is the data");
  getAllMenu();
  // displayMenuItems(menu);
  //loop between the array to return the individual item(s)
});
let getAllMenu = () => {
  var settings = {
    url: "https://foodbukka.herokuapp.com/api/v1/menu",
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings).done(function (response) {
    let data = response;
    const values = Object.values(data);
    let finalMenu = values[1];
    console.log(finalMenu);
    let displayMenu = finalMenu.forEach((menu) => {
      console.log(menu);
      return `<div class="w-full md:w-1/4 xl:w-1/4 p-6 flex flex-col">
      <img class="hover:grow hover:shadow-lg"
          src=${menu.image} />
      <div class="pt-3 flex items-center justify-between">
          <p class="">${menu.title}</p>
          <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                  d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
          </svg>
      </div>
      <p class="pt-8 text-sm text-center">${menu.description}</p>
      <p class="pt-1 text-gray-900">${menu.category}</p>
  </div>`;
    });
    // displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  });
};


const sectionCenter = document.querySelector(".restaurants");

const filterBtn = document.querySelectorAll(".filter-btn");

// load all the items
window.addEventListener("DOMContentLoaded", () => {
  getRestaurants();
});

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
