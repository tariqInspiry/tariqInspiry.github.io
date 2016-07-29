
//
if ('serviceWorker' in navigator) {
    //navigator.serviceWorker.register('/sw.js').then(function(registration) {
    //    // Registration was successful
    //    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
    //}).catch(function(err) {
    //    // registration failed :(
    //    console.log('ServiceWorker registration failed: ', err);
    //});


    // scope defaults to the path the script sits in
// "/" in this example
    navigator.serviceWorker.register("/sw.js").then(
        function(registration) {
            console.log("success!");
            if (registration.installing) {
                registration.installing.postMessage("Howdy from your installing page.");
            }
        },
        function(why) {
            console.error("Installing the worker failed!:", why);
        });
}