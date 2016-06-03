angular.module("miniRouting", ['ui.router']) //Found as 'ui-router', corrected the syntax to 'ui.router'.

.config(function($stateProvider){

    $stateProvider
        .state('home', { //found a SyntaxError with the closing parenthesis on this line. Moved it below this 'home' state's properties after the closing curly bracket.
            url: '/',
            templateUrl: './home/homeTmpl.html', //templateUrl path was wrong. removed the first path of js, since this app.js file is already inside the js folder.
            controller: 'homeCtrl'
        })
        .state('settings', { //found a SyntaxError with the closing parenthesis on this line. Moved it below this 'settings' state's properties after the closing curly bracket.
            url: '/settings',
            templateUrl: './settings/settingsTmpl.html', //templateUrl path was wrong. removed the first path of js, since this app.js file is already inside the js folder.
            controller: 'settingsCtrl' //mispelling here the c on Ctrl was lowercase before, made it uppercase to fix.
        })
         .state('products', { //found a SyntaxError with the closing parenthesis on this line. Moved it below this 'products' state's properties after the closing curly bracket.
            url: '/products/:id',
            templateUrl: './products/productTmpl.html', //templateUrl path was wrong. removed the first path of js, since this app.js file is already inside the js folder.
            controller: 'productsCtrl'
        })
}) //Found the 'config' closing parenthesis and curly bracket, located in the wrong spot on line 16, below the closing bracket and paretnhis for the 'settings' state. Moved it below all states to encompass them.
