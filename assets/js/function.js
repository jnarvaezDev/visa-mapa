$(function(){
    getCards();
});

const url = 'https://visa-mapa-7beqf.kinsta.page/';

const locations = [
    ['American Trade','Avenida Central, San Felipe, Panama', 8.95231177514636, -79.53666515459591, 'Hotel<br />Abierto siempre', '15% de descuento en hospedaje','american.png'],
    ['Athens','Calle 3a Oeste & Avenida Central, Panama', 8.952148096360157, -79.53329137607489, 'Restaurante <br />Horario: L-D: 11am-6am', '2x1 en media orden de ladopsomo especial','athens.png'], 
    ['Blue Moon','Avenida Central, San Felipe, Panama', 8.951643488975435, -79.53674963863953, 'Bar- restaurante <br />Horario: L-D: 12pm-1am', 'Hot Dog 2x1 a 12usd<br />Cubetazo en Cerveza Balboa por 9.99<br />10% descuento en todas las Burgers','blue.png'],
    ['Café Unido','Calle 9a Oeste, Panama', 8.952436472537507, -79.53648951901401, 'Coffee shop & Bar<br />Horario: L-S 7am-7pm D: 7:30 am- 5pm', '2x1 coctel Rum Swizzle','unido.png'],
    ['Casa Casco','Avenida A, San Felipe, Panama', 8.951587186252423, -79.53680328282057, 'Bar- restaurante <br>Horario: L-D: 12pm-3am', 'Por la compra mínima de $50 tendrá un descuento del 50% en vinos seleccionados<br />Por compra mínima de $100 tendrá descuento del 20% en total de factura<br />Por compra mínima de $200 tendrá descuento del 30% en total de factura<br />Adicional, en segunda visita recibe cocktail o postre de cortesía en restaurante KOBORE','casacasco.png'],
    ['Casco Burger','Avenida Central, San Felipe, Panama', 8.952888241227438, -79.53771665889546, 'Restaurante<br />Horario: L-J 12pm-11pm V-S: 12 pm- 5am D: 12pm-4am', 'Margarita especial de cortesía','burguer.png'],
    ['Chingada Madre','Avenida B, Panama', 8.953166202656194, -79.53538564723868, 'Restaurante <br />Horario: L-J 12pm-11pm V-S: 12 pm- 5am D: 12pm-4am', 'Cerveza o michelada gratis con compra con tarjeta','chingada.png'],
    ['Cinnabon','Calle 3a Oeste & Avenida Central, Panama', 8.976683157021418, -79.51731100764354, 'Restaurante <br />Horario: L-D: 9am-9pm"', '2x1 en Minibon','cinnabon.png'],
    ['El Faro','P.H. Bay View Marañon, Avenida 3 de Noviembre, Panama', 8.960294586082497, -79.53834569102858, 'Bar- restaurante <br />Horario: D-M: 4pm-12am M: 4pm- 1am V-S 4pm-2:30am', 'Por la compra mínima de $50 tendrá un descuento del 10% en total de factura<br />Por compra mínima de $100 tendrá descuento del 20% en total de factura<br />Adicional, en segunda visita recibe cocktail o postre de cortesía en restaurante Faro piso 27','faro.png'],
    ['Goza','Avenida A, Panama', 8.951717514660817, -79.53757430613413, 'Restaurante/Bar<br />Horario: M-S 6pm-2am D: 12pm-10pm', '10% de descuento sobre el total de la cuenta','goza.png'],
    ['Isaki','Edificio Casa de Oro, Avenida A, 2do Piso, Panama', 8.951727668807624, -79.53605487483297, 'Bar- Restaurante <br />Horario: L-M: 4pm-11pm M-D: 12pm- 11pm', 'Coctel de bienvenida con compra con tarjeta','isaki.png'],
    ['Hotel Central','Calle 5a Este, Panama', 8.95236838258862, -79.53424084846175, 'Hotel- Abierto siempre', 'A&B participaremos con 20% de descuento en consumos en nuestros restaurantes:<br />- La Central<br />- Bistró Central<br />- Plaza Bar La Quinta<br />Para los clientes que paguen con su tarjeta Banco General ConnectMiles.<br />Estadía:<br />- 1 noche en Habitación Premium con upgrade a nuestras Jr. Suite<br />- Coctel de bienvenida<br />- Amenidad de Bienvenida: Botella de espumante y fresas cubiertas de chocolate<br />- Early Check in Y Late Check Out sujeto a disponible<br />$295.00+10%<br />20% de descuento en Nomé Chocolate (Casco Antiguo)','central.png'],
    ['La Catrina','Calle B, Panama', 8.953300488850209, -79.53550365029633, 'Bar- restaurante <br />Horario: M-D: 3pm-11pm', '15% de descuento en plato fuerte y mojito especial','catrina.png'],
    ['La Pulperia','Edificio La Isabel, Calle 9a Este, San Felipe, Panama', 8.953017797336674, -79.53630152455548, 'Restaurante/Bar <br />Horario: L-D 12pm-2am', 'Coctel de bienvenida con compra con tarjeta','pulperia.png'],
    ['Madre','Avenida A, Panama', 8.951651485319317, -79.53675078201707, 'Restaurante<br />Horario: L-D 12pm-12am', 'Postre tiramisú','madre.png'],
    ['La Bárbara','Avenida B y Calle 10, Casco Antiguo.', 8.953574422438919, -79.5367023899119, 'Cocktail Bar<br />Horario: M-D: 12PM-12AM | L: 4PM-12AM', '2x1 en cocteles seleccionados del menú (American Trade, Palo Seco, Aperol Spritz y Tommys Margarita).','barbara.png'],
    ['Mahalo','Calle 11 este, Panama, Las Clementinas Hotel', 8.953488835929134, -79.5370448950889, 'Bar- restaurante <br />Horario: D: 7:30am-10pm L-M 7:30am-11pm J-S 7:30am-12am', '2x1 margarita clásica y 10% de descuento en total de la cuenta','mahalo.png'],
    ['Marea','Avenida A, Edificio Casa de Oro, Planta baja', 8.951733630270521, -79.53614334110453, 'Bar- restaurante <br />Horario: L-D: 12pm-11pm', 'Coctel de bienvenida','marea.png'],
    ['Pastissima','Calle 9a Oeste, San Felipe, Panama', 8.951601813748704, -79.53642422453665, 'Restaurante <br />Horario: L-D: 12pm-12am', '15% de descuento del total de la cuenta','p.png'],
    ['Pedro Mandinga','Calle Avenida A, Casco Antiguo', 8.95175273666296, -79.5362976852667, 'Bar <br />Horario: L-J 4pm-11pm V-D: 12 pm-11pm', 'Por compra de 2 cocteles te regalan un plato de torrejitas o empanadas de tasajo','mandinga.png'],
    ['Primitivo','Calle 10B Oeste, Panama', 8.95162295504218, -79.53684150429956, 'Bar- restaurante <br />Horario: L-D: 12pm-11pm', '2x1 coctel','primitivo.png'],
    ['Rana Dorada','Esquina Calle 9na Oeste con Calle Boquete, San Felipe, Panama', 8.952870565993576, -79.53632378712015, 'Bar <br />Horario: D-M 12pm-12:30pm J: 12pm-1:30am V-S: 12 pm-3am"', 'Por compra de pizza recibes una pinta de cortesía','rana.png'],
    ['Santa Rita','Avenida Eloy Alfaro y Calle 11', 8.954294125436164, -79.5366924257597, 'Bar- restaurante <br />Horario: L-S 5pm-11am', 'Coctel especial ConnectMiles','santarita.png'],
    ['Tantalo','Calle 8va Este, Panama', 8.953211360321099, -79.53578989203126, 'Bar-Hotel-rest <br />Horario: M-S 12pm-12am D-L: 12pm-1:30am', '2x1 desayunos lunes a viernes y 2x1 brunch sábado y domingo','tantalo.png'],
    ['Vista Corona','Avenida A, Edificio Casa de Oro, Piso 3', 8.951756151351706, -79.5360816969235, 'Bar- restaurante <br />Horario: D-J: 4pm-12am V-S 1pm-1am"', 'Coctel de bienvenida','vista.png'],
];

function getCards(){
    var cards1 = '';
    var cards2 = '';
    cont =1;
    $.each(locations,function(e,i){
        //
        //card = `<div class="col-6">`;
            card = `<div class="card">`;
                card += `<div class="card-body">`;
                    card += `<div class="content-card">`;
                        card += `<img src="./assets/images/pin.png" alt="Location" class="img-title">`;
                        card += `<h5 class="card-title">${i[0]}</h5>`;
                    card += `</div>`;
                    card += `<div class="sub-drecription sub-1">`;
                        card += `<p>${i[1]}</p>`;
                    card += `</div>`;
                    card += `<div class="sub-drecription sub-2">`;
                        card += `<p>${i[4]}</p>`;
                    card += `</div>`;
                    card += `<div class="sub-drecription b-none sub-3">`;
                        card += `<p>${i[5]}</p>`;
                    card += `</div>`;
                card += `</div>`;
            card += `</div>`;
        //card += `</div>`;

        if(cont % 2 === 0 ){
            cards1 += card;
        }else{
            cards2 += card;
        }

        cont++;
        
    });
    $('.contents-cards-left').html(cards1);
    $('.contents-cards-right').html(cards2);
}

function initialize() {
    
    var myOptions = {
        center: new google.maps.LatLng(8.953166202656194, -79.53538564723868),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

    setMarkers(map, locations)

}

function setMarkers(map, locations) {

    var marker, i

    for (i = 0; i < locations.length; i++) {

        var name = locations[i][0]
        var loan = locations[i][1]
        var lat = locations[i][2]
        var long = locations[i][3]
        var add = locations[i][4]
        var icon = locations[i][6]
        var promo = locations[i][5]

        latlngset = new google.maps.LatLng(lat, long);

        var img = `${url}assets/images/pines/${icon}`;
      
        var marker = new google.maps.Marker({
            map: map, title: loan, position: latlngset, icon:img
        });
      
        map.setCenter(marker.getPosition())

        var content = `<div class="modal-marker"><img src="${url}assets/images/logos/${icon}"><h4 style="display: inline-block;"><b>${name} </b>  </h4></div>${loan} <br /> ${add} <br /><br />${promo}`;

        var infowindow = new google.maps.InfoWindow()

        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
            return function () {
                $('.gm-ui-hover-effect').click();
                infowindow.setContent(content);
                infowindow.open(map, marker);
                findMarker(marker.position.lat(),marker.position.lng());
            };
        })(marker, content, infowindow));
        if(i == 2){
            findMarker(lat,long);
        }
        
    }
}

function findMarker(latitud,longitud){
   
    for (i = 0; i < locations.length; i++) {
        var lat = locations[i][2]
        var long = locations[i][3]

        if(lat == latitud && long ==longitud){
          
            $('.title-marker').html(locations[i][0]);
            $('.address-marker').html(locations[i][1]);
            $('.schedule-marker').html(locations[i][4]);
            $('.promotion-marker p').html(locations[i][5]);
            return false;
        }

    }
}