function onClick() {
    // feature detect
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            console.log("Mpermission granted");
            window.addEventListener('devicemotion', (e) => {
            });
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
    }
  }

function onClick() {
    // feature detect
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            console.log("OTpermission granted");
            window.addEventListener('deviceorientation', (e) => {
            });
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
    }
  }