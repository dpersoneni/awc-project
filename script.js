
localStorage.setItem('prodotti', JSON.stringify(prodotti));
var jsonObject = JSON.parse(localStorage.getItem('prodotti')) ;

console.log(jsonObject);

function mostraProdotti() {

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
/*

prodotti =  
[
    {
        "id" : 1,   
        "name":"AmBurger",
        "image":"INSERISCI IMMAGINE",
        "type":"panini",
        "price": 8.00,
        "ingredients" : [
            "bread", 
            "hamburger",
            "ketchup",
            "onions",
            "mustard",
            "pickle"
        ]
    },
    {
        "id" : 2,   
        "name":"AmBurDen",
        "image":"INSERISCI IMMAGINE",
        "type":"panini",
        "price": 7.50,
        "ingredients" : [
            "bread", 
            "chicken",
            "caesar sauce"
     ]
    },
    {
        "id" : 3,
        "name":"Ciobber",
        "image":"INSERISCI IMMAGINE",
        "type":"panini",
        "price": 6.50,
        "ingredients" : [
            "bread", 
            "hamburger",
            "ketchup",
            "onions",
            "mustard",
            "cheese"
        ]
    },
    {
        "id": 4,
        "name":"Veggie",
        "image":"INSERISCI IMMAGINE",
        "type":"panini",
        "price": 8.00,
        "ingredients" : [
            "bread", 
            "soy burger",
            "tomato",
            "onions",
            "mayonnaise",
            "pickle",
            "lattuce"
        ]
    },
    {
        "id" : 5,
        "name":"McBEQon",
        "image":"INSERISCI IMMAGINE",
        "type":"panini",
        "price": 5.70,
        "ingredients" : [
            "bread", 
            "hamburger",
            "crispy sauce",
            "bacon",
            "cheese"
        ]
    },
    {
        "id" : 6,
        "name":"AriPizza",
        "image":"INSERISCI IMMAGINE",
        "type":"pizza",
        "price": 6.50,
        "ingredients" : [
            "dough", 
            "tomato sauce",
            "mozzarella",
            "oregano"
            
        ]
    },
    {
        "id": 7,
        "name":"PizzAm",
        "image":"INSERISCI IMMAGINE",
        "type":"pizza",
        "price": 7.00,
        "ingredients" : [
            "dough", 
            "tomato sauce",
            "mozzarella",
            "zucchini",
            "egg plant"
            
            
        ]
    },
    {
        "id":8,
        "name":"AmAtriciana",
        "image":"INSERISCI IMMAGINE",
        "type":"pasta",
        "price": 8.00,
        "ingredients" : [
            "spaghetti", 
            "guanciale",
            "pecorino",
            "tomatoes"  
        ]
    },
    {
        "id":9,
        "name":"Troie al Pesto",
        "image":"INSERISCI IMMAGINE",
        "type":"pasta",
        "price": 7.00,
        "ingredients" : [
            "trofie", 
            "pecorino",
            "basil pesto"
            
            
        ]
    }
 ]
*/