
let url =
    "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

var numCarItems = 0;
var carItems=[];
updateNumCarItems(numCarItems);


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
            numCarItems ++;
            updateNumCarItems(numCarItems)
            console.log(carItems);
        } );
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
    else if (number==1)
    {
        pItems.innerHTML = number +" item";
    }
    else{
        pItems.innerHTML = number +" items";

    }
}

function viewCarItems()
{
    
}
