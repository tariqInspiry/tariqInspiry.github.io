if (navigator.serviceWorker) {
    //navigator.serviceWorker.register('/sw.js');
    //console.log(typeof navigator);
    //console.log(navigator);
    //console.log('Hello There!');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ',    registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}