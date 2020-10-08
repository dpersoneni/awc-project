
function mostraProdotti() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonObject = JSON.parse(xhr.responseText);
        
        txt = "";
        txt += "<div class='row'>"
        for (x in jsonObject) {
            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='images/Amburger.jpg' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>"+jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>"+jsonObject[x].price + "€ </p>"
            txt += "</div> <div class='flip-card-back'> <ul>"
            for (i in jsonObject[x].ingredients) {
                txt += "<li>" + jsonObject[x].ingredients[i] + "</li>"
            }
            txt += "</ul> </div> </div> </div>"
        }
        txt += "</div>"
        document.getElementById("ciao").innerHTML = txt;
    }
}
xhr.open('GET', 'https://raw.githubusercontent.com/dpersoneni/awc-project/master/prodotti1.json', true);
xhr.send(null);
}

function filtraTipo() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonObject = JSON.parse(xhr.responseText);
        txt = "";
        txt += "<div class='row'>"
        for (x in jsonObject) {           
            if (jsonObject[x].type == document.getElementById("type").value )   {
            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='images/Amburger.jpg' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>"+jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>"+jsonObject[x].price + "€ </p>"
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
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonObject = JSON.parse(xhr.responseText);
            txt = "";
            txt += "<div class='row'>"
            for (x in jsonObject) {           
                if (jsonObject[x].price <= document.getElementById("price").value )   {
                txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
                txt += "<img src='images/Amburger.jpg' style='width:100%'>";
                txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>"+jsonObject[x].name + "</p>"
                txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>"+jsonObject[x].price + "€ </p>"
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
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonObject = JSON.parse(xhr.responseText);
            txt = "";
            txt += "<div class='row'>"
            for (x in jsonObject) {           
                if (jsonObject[x].price <= document.getElementById("price").value && jsonObject[x].type == document.getElementById("type").value )   {
                txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
                txt += "<img src='images/Amburger.jpg' style='width:100%'>";
                txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>"+jsonObject[x].name + "</p>"
                txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>"+jsonObject[x].price + "€ </p>"
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
    if( document.getElementById("price").value === "") {
        filtraTipo();
        return;
    }      
}

function cercaNome() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonObject = JSON.parse(xhr.responseText);
        txt = "";
        txt += "<div class='row'>"
        for (x in jsonObject) {    
            if (jsonObject[x].name.toLowerCase() == document.getElementById("cerca").value.toLowerCase() )   {
            console.log("ciao");
            txt += " <div class='flip-card'> <div class='flip-card-inner'> <div class='flip-card-front'>"
            txt += "<img src='images/Amburger.jpg' style='width:100%'>";
            txt += "<p style='float: left; display: inline; margin-left: 10px; margin-top: 3px;'>"+jsonObject[x].name + "</p>"
            txt += "<p style='float: right; display: inline; margin-right: 10px; margin-top: 3px;'>"+jsonObject[x].price + "€ </p>"
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