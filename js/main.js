if (navigator) {

    // Adding New Custom Object to Navigator
    navigator.tarqkhan = {
        name: function () {
            console.log('My name is Tariq Khan');
        },
        doing: function () {
            console.log('I am working :)');
        }
    };

    console.log( navigator.tarqkhan );
}
