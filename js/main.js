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
  
// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;

      $("#geo").on( "click", function() {	 
        $('#map').toggle();
         });
      
      function initMap() {
        
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 17
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Estás aquí');
            infoWindow.open(map);
            map.setCenter(pos);
            $('#map').hide();
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }













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
