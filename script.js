let sensor = new Accelerometer();
sensor.start();

sensor.onreading = () => {
    console.log("Acceleration along X-axis: " + sensor.x);
    console.log("Acceleration along Y-axis: " + sensor.y);
    console.log("Acceleration along Z-axis: " + sensor.z);
    document.getElementById("textarea").innerHTML = "Acceleration along X-axis: " + sensor.x;
     document.getElementById("textarea2").innerHTML = "Acceleration along Y-axis: " + sensor.y;
     document.getElementById("textarea3").innerHTML = "Acceleration along Z-axis: " + sensor.z;
}

sensor.onerror = event => console.log(event.error.name, event.error.message);