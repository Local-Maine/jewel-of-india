const menuGrid = document.querySelector("#menu-grid");
const categoryList = document.querySelector("#category-list");
const searchBox = document.querySelector("#menu-search");
const menuCount = document.querySelector("#menu-results-meta");
const locationGrid = document.querySelector("#location-grid");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

let selectedCategory = "All";

function getMenuItems() {
  return MENU_DATA.flatMap(section => section.items.map(([name, price, description]) => ({
    category: section.category,
    subtitle: section.subtitle,
    name,
    price,
    description
  })));
}

function showCategories() {
  const categories = ["All", ...MENU_DATA.map(section => section.category)];

  categoryList.innerHTML = categories.map(category => `
    <button class="category-button${category === "All" ? " active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function showMenu() {
  const query = searchBox.value.trim().toLowerCase();
  const items = getMenuItems().filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const text = `${item.name} ${item.description} ${item.category} ${item.subtitle}`.toLowerCase();
    return matchesCategory && (!query || text.includes(query));
  });

  menuCount.textContent = `${items.length} menu item${items.length === 1 ? "" : "s"} shown`;

  if (!items.length) {
    menuGrid.innerHTML = '<div class="empty-state">No dishes matched that search. Try another category or keyword.</div>';
    return;
  }

  menuGrid.innerHTML = items.map(item => `
    <article class="menu-card">
      <span class="menu-card-category">${item.category}</span>
      <div class="menu-card-top">
        <h3>${item.name}</h3>
        <span class="menu-price">$${item.price}</span>
      </div>
      ${item.description ? `<p>${item.description}</p>` : ""}
    </article>
  `).join("");
}

function showLocations() {
  locationGrid.innerHTML = RESTAURANT_DATA.locations.map(location => `
    <article class="location-card">
      <h3>${location.name}</h3>
      <p class="location-address">${location.address}</p>
      <div class="phone-list">
        ${location.phones.map(phone => `<a href="${phone.href}">${phone.label}</a>`).join("")}
      </div>
      <div class="hours">
        ${location.hours.map(([days, hours]) => `<div><span>${days}</span><strong>${hours}</strong></div>`).join("")}
      </div>
      <div class="location-actions">
        <a class="button button-small" href="${location.phones[0].href}">Call ${location.name}</a>
        <a class="button button-small button-outline" href="${location.map}" target="_blank" rel="noopener">Get Directions</a>
      </div>
    </article>
  `).join("");
}

categoryList.addEventListener("click", event => {
  const button = event.target.closest(".category-button");
  if (!button) return;

  selectedCategory = button.dataset.category;
  document.querySelectorAll(".category-button").forEach(item => {
    item.classList.toggle("active", item === button);
  });
  showMenu();
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
});

navLinks.addEventListener("click", event => {
  if (!event.target.matches("a")) return;
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

searchBox.addEventListener("input", showMenu);
document.querySelector("#download-menu").addEventListener("click", downloadPrintableMenu);

showCategories();
showMenu();
showLocations();
