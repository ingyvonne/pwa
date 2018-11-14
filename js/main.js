// var inputEscogeViaje = document.getElementById('inputEscogeViaje');
// var desplegableOculto = document.getElementById('desplegableOculto');
// var cajaDeBusqueda = document.getElementById('cajaDeBusqueda');
// inputEscogeViaje.addEventListener("click",crearDesplegable);
//
//if (clic == 1) {
  // function crearDesplegable() {

  //   if (clic = 1) {

  //     var divDesplegable = document.createElement('div');
  //     cajaDeBusqueda.appendChild(divDesplegable);
  //     divDesplegable.setAttribute("class","desplegableVisible");
  //     clic += 1;

  //   }else{

  //     cajaDeBusqueda.appendChild(divDesplegable);
  //     divDesplegable.setAttribute("class","desplegableOculto");
  //     clic += 1;

  //   }

  // }

// }else if (clic != 1) {
//   var divDesplegable = document.createElement('div');
//   cajaDeBusqueda.appendChild(divDesplegable);
//   divDesplegable.setAttribute("class","desplegableOculto");
// }

// var botonGeo = document.getElementById('geo');
// botonGeo.addEventListener("click", crearDesplegable);
  
var lat = null;
var lng = null;

// Referencias de jQuery
var googleMapKey = 'AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY';

//Crear mapa en el modal
function mostrarMapa (lat, lng){
  //$('.modal-mapa').remove();

  // var botonGeo = document.getElementById('geo');
  var modalMapa = document.getElementById('modal-mapa');
  // botonGeo.addEventListener("click",crearModalMapa);
  var frame = document.createElement('iframe');
  modalMapa.appendChild(frame);
  frame.width = "100%";
  frame.height = "250";
  frame.frameBorder = "0";
  frame.src = "https://www.google.com/maps/embed/v1/view?key=AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY&center=-33.8569,151.2152&zoom=18";
  // https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=-33.8569,151.2152&zoom=18&maptype=satellite
  // frame.href = "'https://www.google.com/maps/embed/v1/view?key=AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY&center=${ lat },${ lng }&zoom=17' allowfullscreen";
}



//Recursos nativos
//Obtener la geolocalizacion

$('#geo').on('click', () =>{

  // var divDesplegable = document.createElement('div');
  // modalMapa.append(divDesplegable);
  // divDesplegable.setAttribute("class","desplegableVisible");

if (navigator.geolocation) {
  console.log('La Geolocalizacion esta soportada en este navegador');
  navigator.geolocation.getCurrentPosition( pos => {
    alert('Para completar la accion esta aplicacion necesita acceder a su ubicación');
    console.log(pos);
    mostrarMapa(pos.coords.latitude, pos.coords.longitude);
    
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
  });
  
}
else{
  console.log('La Geolocalizacion no esta soportada en este navegador');

};

});


// $("#geo").click(function() { 
//   window.open('http://www.google.com', '_self');
// });


//Service Worker
if ('serviceWorker' in navigator) {
  console.log('Puedes usar los serviceWorker en tu navegador;')

  navigator.serviceWorker.register('./sw.js')
                         .then(res => console.log('serviceWorker cargado correctamente', res))
                         .catch(err => console.log('serviceWorker no se ha podido registrar', err));

}else{
  console.log('NO PUEDES usar los serviceWorker en tu navegador');
}


//Creando la Caja desplegable con los Destinos Top
$(document).ready(function(){
    $("#inputEscogeViaje").click(function(){
        $("#desplegable").removeClass("desplegableOculto");
        //$("#desplegable").addClass("desplegableVisible");
    });
});




//Aqui va lo de las push notificaciones

// if ('serviceWorker' in navigator && 'PushManager' in window) {
//   console.log('Service Worker and Push is supported');

//   navigator.serviceWorker.register('sw.js')
//   .then(function(swReg) {
//     console.log('Service Worker is registered', swReg);

//     swRegistration = swReg;
//   })
//   .catch(function(error) {
//     console.error('Service Worker Error', error);
//   });
// } else {
//   console.warn('Push messaging is not supported');
//   pushButton.textContent = 'Push Not Supported';
// }



// const applicationServerPublicKey = 'BLO9bqA47krGrXM5_9sqCf3T5-BjL7gB8q-O_Eupw_ukRRMhQIiyYg4R83cWDDAtEkwJl8fzmXfIwlvgOuIW0tI';



// function initialiseUI() {
//   pushButton.addEventListener('click', function() {
//     pushButton.disabled = true;
//     if (isSubscribed) {
//       // TODO: Unsubscribe user
//     } else {
//       subscribeUser();
//     }
//   });
//   // Set the initial subscription value
//   swRegistration.pushManager.getSubscription()
//   .then(function(subscription) {
//     isSubscribed = !(subscription === null);

//     if (isSubscribed) {
//       console.log('User IS subscribed.');
//     } else {
//       console.log('User is NOT subscribed.');
//     }

//     updateBtn();
//   });
// }



// function updateBtn() {
//   if (isSubscribed) {
//     pushButton.textContent = 'Disable Push Messaging';
//   } else {
//     pushButton.textContent = 'Enable Push Messaging';
//   }

//   pushButton.disabled = false;
// }



// navigator.serviceWorker.register('sw.js')
// .then(function(swReg) {
//   console.log('Service Worker is registered', swReg);

//   swRegistration = swReg;
//   initialiseUI();
// })


// function subscribeUser() {
//   const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//   swRegistration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: applicationServerKey
//   })
//   .then(function(subscription) {
//     console.log('User is subscribed:', subscription);

//     updateSubscriptionOnServer(subscription);

//     isSubscribed = true;

//     updateBtn();
//   })
//   .catch(function(err) {
//     console.log('Failed to subscribe the user: ', err);
//     updateBtn();
//   });
// }



// swRegistration.pushManager.subscribe({
//   userVisibleOnly: true,
//   applicationServerKey: applicationServerKey
// })
// .then(function(subscription) {
//   console.log('User is subscribed:', subscription);

//   updateSubscriptionOnServer(subscription);

//   isSubscribed = true;

//   updateBtn();

// })
// .catch(function(err) {
//   console.log('Failed to subscribe the user: ', err);
//   updateBtn();
// });



// function updateSubscriptionOnServer(subscription) {
//   // TODO: Send subscription to application server

//   const subscriptionJson = document.querySelector('.js-subscription-json');
//   const subscriptionDetails =
//     document.querySelector('.js-subscription-details');

//   if (subscription) {
//     subscriptionJson.textContent = JSON.stringify(subscription);
//     subscriptionDetails.classList.remove('is-invisible');
//   } else {
//     subscriptionDetails.classList.add('is-invisible');
//   }
// }



// function updateBtn() {
//   if (Notification.permission === 'denied') {
//     pushButton.textContent = 'Push Messaging Blocked.';
//     pushButton.disabled = true;
//     updateSubscriptionOnServer(null);
//     return;
//   }

//   if (isSubscribed) {
//     pushButton.textContent = 'Disable Push Messaging';
//   } else {
//     pushButton.textContent = 'Enable Push Messaging';
//   }

//   pushButton.disabled = false;
// }
