let names = [];
let prices = [];
let amounts = [];

function addToBasket(name, price) {
  if (names.includes(name)) {
    let postionNames = names.indexOf(name);
    amounts[postionNames]++;
  } else {
    names.push(name);
    prices.push(price);
    amounts.push(1);
  }

  showitems();
}

function infoPopUp() {
  let overlay = document.getElementById("overlay");
  let locationContainer = document.getElementById("locationContainer");
  overlay.classList.add("overlaystyle");
  locationContainer.classList.add("locationContainer");
  locationContainer.classList.remove("d-none");
}

function closeCont() {
  let overlay = document.getElementById("overlay");
  let locationContainer = document.getElementById("locationContainer");
  locationContainer.classList.add("d-none");
  overlay.classList.remove("overlaystyle");
}

function showitems() {
  let invoice = document.getElementById("basketItems");
  invoice.innerHTML = "";
  let integer = 0;
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = prices[i];
    invoice.innerHTML += `
         <p>${amounts[i]} x <span>${name}</span><span>${price} €<img class="trashbin" src="img/trash-9-xxl.png" onclick='deleteItem(${i})'></span></p>
         `;
    integer += parseFloat(prices[i] * amounts[i]);
  }
  sum = integer;
  if (sum > 0) {
    invoice.innerHTML += `
        <div class="summation">
        <p span class=""><span>Zwischensumme:</span><span>${sum.toFixed(
          2
        )}€</span></p>
        <p span class=""><span>Lieferkosten:</span><span>3 €</span></p>
        <p span class="finalSum"><span>Gesamt:</span><span>${(sum + 3).toFixed(
          2
        )} €</span></p>
        </div>
        `;
  } else {
    invoice.innerHTML += `<div class="default-text">
        <h3>Fülle deinen Warenkorb</h3>
        <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    </div>`;
  }
  invoice.classList.add("basketItems");
}

function deleteItem(i) {
  names.splice(i, 1);
  prices.splice(i, 1);
  sum = 0;
  showitems();
}
