function htmlSafe(value) {
  const replacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };

  return String(value).replace(/[&<>"']/g, character => replacements[character]);
}

function downloadPrintableMenu() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow pop-ups to open the printable menu.");
    return;
  }

  const menuSections = MENU_DATA.map(section => `
    <section>
      <h2>${htmlSafe(section.category)}</h2>
      <p class="subtitle">${htmlSafe(section.subtitle)}</p>
      ${section.items.map(([name, price, description]) => `
        <article>
          <div><strong>${htmlSafe(name)}</strong><span>$${htmlSafe(price)}</span></div>
          ${description ? `<p>${htmlSafe(description)}</p>` : ""}
        </article>
      `).join("")}
    </section>
  `).join("");

  const locations = RESTAURANT_DATA.locations.map(location => `
    <div>
      <strong>${htmlSafe(location.name)}</strong><br>
      ${htmlSafe(location.address)}<br>
      ${location.phones.map(phone => htmlSafe(phone.label)).join(" • ")}
    </div>
  `).join("");

  printWindow.document.write(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>The Jewel of India Menu</title>
      <style>
        @page { size: letter; margin: .45in; }
        body { color: #21120d; font-family: Arial, sans-serif; font-size: 11px; line-height: 1.35; }
        header { border-bottom: 2px solid #8d2034; margin-bottom: 18px; padding-bottom: 12px; text-align: center; }
        h1 { color: #5e1021; font-family: Georgia, serif; font-size: 34px; margin: 0; }
        header p { margin: 4px 0 0; }
        .locations { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 10px; }
        main { columns: 2; column-gap: 24px; }
        section { break-inside: avoid; margin-bottom: 16px; }
        h2 { border-bottom: 1px solid #d9b16a; color: #8d2034; font-family: Georgia, serif; font-size: 20px; margin: 0 0 4px; padding-bottom: 2px; }
        .subtitle { color: #6f5e55; font-size: 9px; font-weight: bold; letter-spacing: .08em; margin: 0 0 7px; text-transform: uppercase; }
        article { margin: 0 0 7px; }
        article div { display: flex; gap: 8px; justify-content: space-between; }
        article span { color: #a45c11; font-weight: bold; white-space: nowrap; }
        article p { color: #65564f; font-size: 9px; margin: 1px 0 0; }
        footer { border-top: 1px solid #ddd; color: #777; font-size: 9px; margin-top: 14px; padding-top: 8px; text-align: center; }
        @media print { .screen-only { display: none; } }
      </style>
    </head>
    <body>
      <header>
        <h1>The Jewel of India</h1>
        <p>Exotic Indian Cuisine • Cooked mild, medium, hot, or very hot</p>
        <div class="locations">${locations}</div>
      </header>
      <div class="screen-only" style="text-align:center;margin:0 0 16px">
        <button onclick="window.print()" style="padding:10px 16px;border:0;border-radius:999px;background:#8d2034;color:#fff;font-weight:bold;cursor:pointer">
          Save or Print PDF
        </button>
      </div>
      <main>${menuSections}</main>
      <footer>Menu prices and availability should be confirmed with the restaurant.</footer>
    </body>
  </html>`);

  printWindow.document.close();
}
