const groups = [
  {
    name: "Integration",
    className: "integration",
    color: "#3988c3",
    cards: [
      ["Substitution", "math-cards/01-substitution.png"],
      ["Integration by parts", "math-cards/02-integration-by-parts.png"],
      ["Multiple integrals", "math-cards/03-multiple-integrals.png"],
      ["Polar and Spherical coords", "math-cards/04-polar-and-spherical-coordinates.png"],
      ["Centroids", "math-cards/05-centroids.png"]
    ]
  },
  {
    name: "Complex numbers",
    className: "complex",
    color: "#851fc5",
    cards: [
      ["Exponential form", "math-cards/06-exponential-form.png"],
      ["Argand Diagrams", "math-cards/07-argand-diagrams.png"],
      ["de Moivre's theorem", "math-cards/08-de-moivres-theorem.png"],
      ["Complex Impedance", "math-cards/09-complex-impedance.png"]
    ]
  }
];

const root = document.getElementById("groups");
for (const group of groups) {
  const row = document.createElement("section");
  row.className = "group-row";
  const label = document.createElement("h3");
  label.className = "group-label";
  label.style.color = group.color;
  label.textContent = group.name;
  const cards = document.createElement("div");
  cards.className = `cards ${group.className}`;
  for (const [title, image] of group.cards) {
    const item = document.createElement("a");
    item.className = "card-link";
    item.href = image;
    item.download = image.split("/").pop();
    item.setAttribute("aria-label", `Download ${title} card`);
    item.innerHTML = `<img class="card-image" src="${image}" alt="${title} learning card"><span class="download">Download individual card</span>`;
    cards.append(item);
  }
  row.append(label, cards);
  root.append(row);
}
