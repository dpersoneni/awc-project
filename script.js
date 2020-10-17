
localStorage.setItem('prodotti', JSON.stringify(prodotti));
var jsonObject = JSON.parse(localStorage.getItem('prodotti'));


function mostraProdotti() {

    txt = "";
    txt += "<div class='row'>"
    for (x in jsonObject) {
        txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
        txt += "<img src='images/Amburger.jpg' style='width:100%'>";
        txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
        txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
        txt += "</div> <div class='flip-card-back'> <ul>"
        for (i in jsonObject[x].ingredients) {
            txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
        }
        txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button></div> </div> </div>"
    }
    txt += "</div>"
    document.getElementById("ciao").innerHTML = txt;

    if ("carrello" in localStorage) {
        localStorage.clear();
        riempiCarrello();
    }
<<<<<<< HEAD
    
=======
  

>>>>>>> 5b55a8bb1e36a7ef03752fdf0b5902c037567fe4
}

function riempiCarrello() {
    qnt = 0;
    tot = 0;
    txt = "<span><table><tr><th>Prodotto</th><th>Prezzo</th><th>Quantità</th></tr>";
    carrello = JSON.parse(localStorage.getItem("carrello"));
    for (c in carrello) {

        qnt += carrello[c].qnt;
        tot += carrello[c].price * carrello[c].qnt;
        txt += "<tr><td>"+carrello[c].name + "</td><td> " + carrello[c].price + "</td><td> " + carrello[c].qnt + "</td></tr>\n";

    }
    document.getElementById("carrello").innerHTML = txt + "</table></span> \n " +"Prezzo totale"+"   "+tot;
    document.getElementById("numeroelementi").innerHTML = qnt;
}


function aggiungiCarrello(x) {
    var carrello = [];
    console.log(localStorage.length);
    if ("carrello" in localStorage) {
        carrello = JSON.parse(localStorage.getItem('carrello'));

       
    }
    
    obj = {
        "id": jsonObject[x].id,
        "name": jsonObject[x].name,
        "price": jsonObject[x].price,
        "qnt": 1
    };

    var index = carrello.findIndex(function (item, i) {
        return item.id == obj.id;
    });

    if (index === -1) {
        carrello.push(obj);
    } else {
        carrello[index].qnt++;
    }

    localStorage.setItem('carrello', JSON.stringify(carrello));

    riempiCarrello();

}


function filtraTipo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonObject = JSON.parse(xhr.responseText);
            txt = "";
            txt += "<div class='row'>"
            for (x in jsonObject) {
                if (jsonObject[x].type == document.getElementById("type").value) {
                    txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
                    txt += "<img src='images/Amburger.jpg' style='width:100%'>";
                    txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
                    txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
                    txt += "</div> <div class='flip-card-back'> <ul>"
                    for (i in jsonObject[x].ingredients) {
                        txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
                    }
                    txt += "</ul> </div> </div> </div>"
                }
            }
            txt += "</div>"
            document.getElementById("ciao").innerHTML = txt;
        }
    }
    xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
    xhr.send(null);
}


function filtraPrezzo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonObject = JSON.parse(xhr.responseText);
            txt = "";
            txt += "<div class='row'>"
            for (x in jsonObject) {
                if (jsonObject[x].price <= document.getElementById("price").value) {
                    txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
                    txt += "<img src='images/Amburger.jpg' style='width:100%'>";
                    txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
                    txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
                    txt += "</div> <div class='flip-card-back'> <ul>"
                    for (i in jsonObject[x].ingredients) {
                        txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
                    }
                    txt += "</ul> </div> </div> </div>"
                }
            }
            txt += "</div>"
            document.getElementById("ciao").innerHTML = txt;
        }
    }
    xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
    xhr.send(null);
}


function filtraEntrambi() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonObject = JSON.parse(xhr.responseText);
            txt = "";
            txt += "<div class='row'>"
            for (x in jsonObject) {
                if (jsonObject[x].price <= document.getElementById("price").value && jsonObject[x].type == document.getElementById("type").value) {
                    txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
                    txt += "<img src='images/Amburger.jpg' style='width:100%'>";
                    txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
                    txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
                    txt += "</div> <div class='flip-card-back'> <ul>"
                    for (i in jsonObject[x].ingredients) {
                        txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
                    }
                    txt += "</ul> </div> </div> </div>"
                }
            }
            txt += "</div>"
            document.getElementById("ciao").innerHTML = txt;
        }
    }
    xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
    xhr.send(null);
}


function filtraGenerale() {
    if (document.getElementById("price").value === "" && document.getElementById("type").value === "") {
        mostraProdotti();
        return;
    }
    if (document.getElementById("price").value != "" && document.getElementById("type").value != "") {
        filtraEntrambi();
        return;
    }
    if (document.getElementById("type").value === "") {
        filtraPrezzo();
        return;
    }
    if (document.getElementById("price").value === "") {
        filtraTipo();
        return;
    }
}

function cercaNome() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonObject = JSON.parse(xhr.responseText);
            txt = "";
            txt += "<div class='row'>"
            for (x in jsonObject) {
                if (jsonObject[x].name.toLowerCase() == document.getElementById("cerca").value.toLowerCase()) {
                    console.log("ciao");
                    txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
                    txt += "<img src='images/Amburger.jpg' style='width:100%'>";
                    txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
                    txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
                    txt += "</div> <div class='flip-card-back'> <ul>"
                    for (i in jsonObject[x].ingredients) {
                        txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
                    }
                    txt += "</ul> </div> </div> </div>"
                }
            }
            txt += "</div>"
            document.getElementById("ciao").innerHTML = txt;
        }

    }
    xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
    xhr.send(null);
}



<<<<<<< HEAD




=======
>>>>>>> 5b55a8bb1e36a7ef03752fdf0b5902c037567fe4
