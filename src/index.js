if("serviceWorker" in navigator) {
navigator.serviceWorker.register("/sw.js").then(registration =>{
    console.log("Service Worker Registered");
    console.log(registration);
})
.catch(error=>{
    console.log("SW Registration Failed!");
    console.log(error);
});
}