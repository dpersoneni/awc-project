var mail = localStorage.getItem("mailristoratore");

var jsonObject = JSON.parse(localStorage.getItem(mail));

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
        txt += "</ul>  <button type='button' onclick='aggiungiCarrello(" + x + ")'>Aggiungi al carrello</button>"
        txt += "</ul>  <button  type='button' style='width: 2em' onclick='rimuoviCarrello(" + x + ")' > - </button></div> </div> </div>"
    }

    txt += "</div>"
    document.getElementById("piatti").innerHTML = txt;

    if ("carrello" in sessionStorage) {
        sessionStorage.clear();
        riempiCarrello();
    }



}

function riempiCarrello() { // funzione che parte con quantità e totali uguale a zero e mette nel carrello i prodotti che scegliamo 
    qnt = 0;
    tot = 0;
    txt = "<span style= 'min-width: 20em'><table style= 'min-width: 20em'><tr><th>Prodotto</th><th>Prezzo</th><th>Quantità</th></tr>";
    carrello = JSON.parse(sessionStorage.getItem("carrello"));
    for (c in carrello) {

        qnt += carrello[c].qnt;
        tot += carrello[c].price * carrello[c].qnt;
        if (carrello[c].qnt > 0) {
            txt += "<tr><td>" + carrello[c].name + "</td><td> " + carrello[c].price + "</td><td> " + carrello[c].qnt + "</td></tr>\n";
        }
      
    }
    document.getElementById("carrello").innerHTML = txt + "</table></span> \n " + "<br><p style='float: right'><b>Prezzo totale</b>" + "   " + tot + "</p><br><br><button type='button' style='float: right' onclick=window.location.href='logutente.html'>Procedi all'acquisto</button>";
    document.getElementById("numeroelementi").innerHTML = qnt;
}


function aggiungiCarrello(x) {
    var carrello = [];
    if ("carrello" in sessionStorage) {
        carrello = JSON.parse(sessionStorage.getItem('carrello'));
    }

    obj = {
        "id": jsonObject[x].id,
        "name": jsonObject[x].name,
        "price": jsonObject[x].price,
        "qnt": 1
    };

    var index = carrello.findIndex(function (item, i) { // verifica che non ci siano elementi uguali 
        return item.id == obj.id;
    });

    if (index === -1) { // se dovessimo avere solo una card, che non si ripete allora nel carrello pushiamo obj
        carrello.push(obj);
    } else {
        carrello[index].qnt++;  // altrimenti aggiugiamo solo la quantità di quante volte quel prodotto sia stato scelto
    }

    sessionStorage.setItem('carrello', JSON.stringify(carrello)); // aggiugiamo quindi nel local il carrello con i prodotti scelti 

    riempiCarrello();  // funzione che aggiunge i prodotti nella tabella con "nome, prezzo e quantità"
}

// cambiato da qui
function rimuoviCarrello(x) {
    var carrello = [];
    if ("carrello" in sessionStorage) {
        carrello = JSON.parse(sessionStorage.getItem('carrello'));
    }

    obj = {
        "id": jsonObject[x].id,
        "name": jsonObject[x].name,
        "price": jsonObject[x].price,
        "qnt": 1
    };

    var index = carrello.findIndex(function (item, i) { // verifica che non ci siano elementi uguali 
        return item.id == obj.id;
    });

    if (index === -1) { // se dovessimo avere solo una card, che non si ripete allora nel carrello pushiamo obj
        carrello.push(obj);
    } else {
        if (carrello[index].qnt > 0) {
            carrello[index].qnt--; 
        }
    }
        

    sessionStorage.setItem('carrello', JSON.stringify(carrello)); // aggiugiamo quindi nel local il carrello con i prodotti scelti 

    riempiCarrello();  // funzione che aggiunge i prodotti nella tabella con "nome, prezzo e quantità"
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







