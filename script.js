var mail = sessionStorage.getItem("mailristoratore");

var jsonObject = JSON.parse(sessionStorage.getItem(mail));

function mostraProdotti() {

    txt = "";
    txt += "<div class='row'>"
    for (x in jsonObject) {
        txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
        txt += "<img src='" + jsonObject[x].image + "'style='width:100%'>";
        txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
        txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
        txt += "</div> <div class='flip-card-back'> <ul>"
        for (i in jsonObject[x].ingredients) {
            txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
        }
        txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button></div> </div> </div>"
    }

    txt += "</div>"
    document.getElementById("piatti").innerHTML = txt;

    if ("carrello" in localStorage) {
        localStorage.clear();
        riempiCarrello();
    }



}

function riempiCarrello() {
    qnt = 0;
    tot = 0;
    txt = "<span><table><tr><th>Prodotto</th><th>Prezzo</th><th>Quantità</th></tr>";
    carrello = JSON.parse(localStorage.getItem("carrello"));
    for (c in carrello) {

        qnt += carrello[c].qnt;
        tot += carrello[c].price * carrello[c].qnt;
        txt += "<tr><td>" + carrello[c].name + "</td><td> " + carrello[c].price + "</td><td> " + carrello[c].qnt + "</td></tr>\n";

    }
    document.getElementById("carrello").innerHTML = txt + "</table></span> \n " + "Prezzo totale" + "   " + tot + "<br><button type='button' onclick=window.location.href='logutente.html'>Procedi all'acquisto</button>";
    document.getElementById("numeroelementi").innerHTML = qnt;
}


function aggiungiCarrello(x) {
    var carrello = [];
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
    txt = "";
    txt += "<div class='row'>"
    for (x in jsonObject) {
        if (jsonObject[x].type == document.getElementById("type").value) {
            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='" + jsonObject[x].image + "' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
            txt += "</div> <div class='flip-card-back'> <ul>"
            for (i in jsonObject[x].ingredients) {
                txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
            }
            txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button></div> </div> </div>"

        }
    }
    txt += "</div>"
    document.getElementById("piatti").innerHTML = txt;


}


function filtraPrezzo() {
    txt = "";
    txt += "<div class='row'>"
    for (x in jsonObject) {
        if (jsonObject[x].price <= document.getElementById("price").value) {
            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='" + jsonObject[x].image + "' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
            txt += "</div> <div class='flip-card-back'> <ul>"
            for (i in jsonObject[x].ingredients) {
                txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
            }
            txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button></div> </div> </div>"

        }
    }
    txt += "</div>"
    document.getElementById("piatti").innerHTML = txt;

}


function filtraEntrambi() {

    txt = "";
    txt += "<div class='row'>"
    for (x in jsonObject) {
        if (jsonObject[x].price <= document.getElementById("price").value && jsonObject[x].type == document.getElementById("type").value) {
            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='" + jsonObject[x].image + "' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
            txt += "</div> <div class='flip-card-back'> <ul>"
            for (i in jsonObject[x].ingredients) {
                txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
            }
            txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button></div> </div> </div>"

        }
    }
    txt += "</div>"
    document.getElementById("piatti").innerHTML = txt;


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

    txt = "";
    txt += "<div class='row'>"
    for (x in jsonObject) {
        if (jsonObject[x].name.toLowerCase().includes(document.getElementById("cerca").value.toLowerCase())) {

            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='" + jsonObject[x].image + "' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>" + jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>" + jsonObject[x].price + "€ </p>"
            txt += "</div> <div class='flip-card-back'> <ul>"
            for (i in jsonObject[x].ingredients) {
                txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
            }
            txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button></div> </div> </div>"
        }
    }
    txt += "</div>"
    document.getElementById("piatti").innerHTML = txt;
}







