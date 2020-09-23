
let url =
    "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";


/**
 * Configuraciones iniciales
 */
var numCarItems = 0;
var carItems = [];
updateNumCarItems(numCarItems);
car = document.getElementById("btn-car");
car.addEventListener("click", () => viewCarItems())
ordDetail = document.getElementById("carDetail");
ordDetail.style.visibility = "hidden";

btnCfO = document.getElementById("btn-cofirm");
console.log(btnCfO);
btnCfO.addEventListener("click",()  =>confirmOrder());

btnCnO=document.getElementById("btn-cancel-order");
btnCnO.addEventListener("click",()=> cancerlOrder());



let data;

fetch(url)
    .then((response) => response.json())
    .then((answer) => {
        data = answer;
        data.forEach(type => {
            createCards(type);
        });
    });


function createCards(list) {

    //Creamso el gruo de cards
    let cardgroup = document.getElementById(list["name"]);
    contador = 0;
    list['products'].forEach(product => {
        card = document.createElement("div");
        card.setAttribute("class", "card card-row");

        img = document.createElement("img");
        img.setAttribute("src", product["image"]);
        img.setAttribute("class", "card-img-top mx-auto");
        img.setAttribute("alt", "Burguer")
        card.appendChild(img)


        body = document.createElement("div");
        body.setAttribute("class", "card-body");

        title = document.createElement("h3");
        title.innerHTML = product["name"];
        body.appendChild(title);

        text = document.createElement("p");
        text.innerHTML = product["description"];
        body.appendChild(text);

        price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerHTML = "$" + product["price"];
        body.appendChild(price);

        buttom = document.createElement("a");
        buttom.setAttribute("class", "btn btn-dark");
        buttom.innerHTML = "Add to car";
        buttom.addEventListener("click", () => {
            carItems.push(product);
            numCarItems++;
            updateNumCarItems(numCarItems)
            console.log(carItems);
        });
        body.appendChild(buttom);


        card.appendChild(body);
        cardgroup.appendChild(card)

    });
}

function updateNumCarItems(number) {
    let pItems = document.getElementById("car-items");
    if (number === 0) {
        pItems.innerHTML = "";
    }
    else if (number == 1) {
        pItems.innerHTML = number + " item";
    }
    else {
        pItems.innerHTML = number + " items";

    }
}

function viewCarItems() {
    totalPrice = 0;
    contador = 1;
    names = [];
    ordDetail = document.getElementById("carDetail");
    ordDetail.style.visibility = "visible";

    table = document.getElementById("itemsTable");

    thead = document.createElement("thead");

    row = document.createElement("tr");
    item = document.createElement("th");
    item.setAttribute("scope", "col");
    textCell = document.createTextNode("item");
    item.appendChild(textCell);
    row.appendChild(item);

    qty = document.createElement("th");
    qty.setAttribute("scope", "col");
    textCell = document.createTextNode("Qty");
    qty.appendChild(textCell);
    row.appendChild(qty);

    des = document.createElement("th");
    des.setAttribute("scope", "col");
    textCell = document.createTextNode("Description");
    des.appendChild(textCell);
    row.appendChild(des);

    up = document.createElement("th");
    up.setAttribute("scope", "col");
    textCell = document.createTextNode("Unitary Price ($)");
    up.appendChild(textCell);
    row.appendChild(up);

    amt = document.createElement("th");
    amt.setAttribute("scope", "col");
    textCell = document.createTextNode("Amount ($)");
    amt.appendChild(textCell);
    row.appendChild(amt);

    thead.appendChild(row);
    table.appendChild(thead);


    body = document.createElement("tbody");
    carItems.forEach(product => {

        /* if (names.includes(product["name"])) {
  
              amt= document.getElementById(product["name"]);
              console.log(product["name"]);
              textCell = document.createTextNode(parseFloat(amt.value) + product["price"]);
              qty.appendChild(textCell);
              
  
          }
          else {*/
        row = document.createElement("tr");

        item = document.createElement("td");
        item.setAttribute("scope", "col");
        textCell = document.createTextNode(contador);
        item.appendChild(textCell);
        row.appendChild(item);

        qty = document.createElement("td");
        qty.setAttribute("scope", "col");
        textCell = document.createTextNode(1);
        qty.appendChild(textCell);
        row.appendChild(qty);

        des = document.createElement("td");
        des.setAttribute("scope", "col");
        textCell = document.createTextNode(product["name"]);
        names.push(product["name"]);
        des.appendChild(textCell);
        row.appendChild(des);

        up = document.createElement("td");
        up.setAttribute("scope", "col");
        textCell = document.createTextNode(product["price"]);
        up.appendChild(textCell);
        row.appendChild(up);

        amt = document.createElement("td");
        amt.setAttribute("scope", "col");
        amt.setAttribute("id", product["name"]);
        textCell = document.createTextNode(product["price"]);
        amt.appendChild(textCell);
        row.appendChild(amt);

        body.appendChild(row);

        contador++;
        totalPrice += product["price"];
        //  }
    });


    table.appendChild(body);

    totalrow = document.createElement("row")
    total = document.createElement("r")
}

function confirmOrder() {
    console.log(carItems);
}

function cancerlOrder()
 {
    numCarItems=0;
    carItems=[];   
 }