const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak delight",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `
    A succulent and savory delight, steak is a premium cut of beef celebrated for its rich flavor, tender texture, and mouthwatering juiciness.`,
  },
];

const menuSection = document.querySelector(".menu-section");
const topBtns = document.querySelector(".top-btns");

// Extract unique categories from the menu
const categories = ["all", ...new Set(menu.map((item) => item.category))];


// Dynamically generate buttons
const buttons = categories.map((category) => {
  return `<button class="filter-btn" data-id="${category}">${
    category.charAt(0).toUpperCase() + category.slice(1)
  }</button>`;
});

// Add buttons to the topBtns element
topBtns.innerHTML = buttons.join("");

// Load Items
displayMenuItems(menu);

// Filter Items
topBtns.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const category = e.target.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  }
});

function displayMenuItems(menuItems) {
  let displayItems = menuItems.map(function (item) {
    return `<div class="menu-content">
            <div class="img">
              <img src="${item.img}" alt="${item.title}" />
            </div>
            <div class="menu-right-data">
              <div class="menu-top">
                <div class="dish-title">
                  <h3 id="title">${item.title.toUpperCase()}</h3>
                </div>
                <div class="dish-price" id="price">$${item.price}</div>
                <div class="base-line"></div>
              </div>
              <div class="dish-context">
                <p>
                ${item.desc}
                </p>
              </div>
            </div>
          </div>`;
  });

  displayItems = displayItems.join("");
  menuSection.innerHTML = displayItems;
}
