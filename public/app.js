angular.module('meals', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './app/routes/home/home.html',
      controller: 'homeCtrl'
    })
    // WELCOME STATE
    .state('welcome', {
      url: '/welcome',
      templateUrl: './app/routes/welcome/welcome.html',
      controller: 'welcomeCtrl'
    })
    // RECIPE STATE
    .state('recipes', {
      url: '/recipes',
      templateUrl: './app/routes/recipes/recipes.html',
      controller: 'recipesCtrl'
    })
    // GROCERY STATE
    .state('grocery', {
      url: '/grocery',
      templateUrl: './app/routes/grocery/grocery.html',
      controller: 'groceryCtrl'
    });




  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
