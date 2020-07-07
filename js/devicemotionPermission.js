DeviceMotionEvent.requestPermission()
    .then(permissionSatete => {
        if(permissionState === 'granted') {
            (t.addEventListener("devicemotion",o,!1),u.motion.active=!0)
        }
    })

DeviceMotionEvent.requestPermission()
.then(response => {
  if (response == 'granted') {
    window.addEventListener('devicemotion', (e) => {
        console.log("permission granted");
    })
  }
})
.catch(console.error)

DeviceOrientationEvent.requestPermission()
.then(response => {
  if (response == 'granted') {
    window.addEventListener('deviceorientation', (e) => {
        console.log("permission granted")
    })
  }
})
.catch(console.error)