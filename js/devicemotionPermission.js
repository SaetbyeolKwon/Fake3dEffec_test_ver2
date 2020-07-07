if ( location.protocol != "https:" ) {
    location.href = "https:" + window.location.href.substring( window.location.protocol.length );
    }

function permission () {
    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
            .then( response => {
            // (optional) Do something after API prompt dismissed.
            if ( response == "granted" ) {
                window.addEventListener( "devicemotion", (e) => {
                    console.log("Mpermission granted");
                })
            }
        })
            .catch( console.error )
    } else {
        alert( "DeviceMotionEvent is not defined" );
    }
}

function OTpermission () {
    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceOrientationEvent.requestPermission ) === "function" ) {
        // (optional) Do something before API request prompt.
        DeviceOrientationEvent.requestPermission()
            .then( response => {
            // (optional) Do something after API prompt dismissed.
            if ( response == "granted" ) {
                window.addEventListener( "deviceorientation", (e) => {
                    console.log("OTpermission granted");
                })
            }
        })
            .catch( console.error )
    } else {
        alert( "DeviceOrientationEvent is not defined" );
    }
}

const btn = document.getElementById( "request" );
btn.addEventListener( "click", permission );
btn.addEventListener( "click", OTpermission );

// function onClick() {
//     // feature detect
//     if (typeof DeviceMotionEvent.requestPermission === 'function') {
//       DeviceMotionEvent.requestPermission()
//         .then(permissionState => {
//           if (permissionState === 'granted') {
//             console.log("Mpermission granted");
//             window.addEventListener('devicemotion', (e) => {
//             });
//           }
//         })
//         .catch(console.error);
//     } else {
//       // handle regular non iOS 13+ devices
//     }
//   }

// function onClick() {
//     // feature detect
//     if (typeof DeviceOrientationEvent.requestPermission === 'function') {
//       DeviceOrientationEvent.requestPermission()
//         .then(permissionState => {
//           if (permissionState === 'granted') {
//             console.log("OTpermission granted");
//             window.addEventListener('deviceorientation', (e) => {
//             });
//           }
//         })
//         .catch(console.error);
//     } else {
//       // handle regular non iOS 13+ devices
//     }
//   }