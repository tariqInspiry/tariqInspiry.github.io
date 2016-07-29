//if (navigator) {
//
//    // Adding New Custom Object to Navigator
//    navigator.tarqkhan = {
//        name: function () {
//            console.log('My name is Tariq Khan');
//        },
//        doing: function () {
//            console.log('I am working :)');
//        }
//    };
//
//    console.log( navigator.tarqkhan );
//}
//

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ',    registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}