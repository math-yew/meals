angular.module('meals', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
}]);

angular.module('meals')
.controller('ctrl', ["$scope", "mainService", function ($scope, mainService) {

  mainService.test().then(function (res) {
    $scope.test = res.data[0].value;
  })

}])

angular.module('meals')
.service('mainService', ["$http", function ($http) {

  this.test = function () {
    return $http.get('/api/test');
  }

  this.getRecipes = function () {
    return $http.get('/api/recipes');
  }

  this.certainRecipe = "starting";
  this.getRecipe = function (id) {
    // var recId = {};
    // recId.id = id;
    console.log('get the recipe: ', id);
    return $http.get('/api/recipe/' + id)
    .then(function(response) {
      this.certainRecipe = response;
      // console.log('this.certainRecipe: ', this.certainRecipe);
      return response.data[0];
    });
  }

console.log('this.certainRecipe: ', this.certainRecipe);

  var ingredients = [];
  this.addIngredient = function (ingredient) {
    var ingredientArr = [];
    ingredientArr.push(ingredient.qty);
    ingredientArr.push(ingredient.measurement);
    ingredientArr.push(ingredient.name);
    ingredients.push(ingredientArr);
    console.log('ingredients: ', ingredients);
  }
  this.ingredients = ingredients;

  this.submitRecipe = function (newRecipe) {
    var ingr = {};
    ingr.ingredients = ingredients;
    newRecipe.ingredients = ingredients;
    console.log('newRecipe: ', newRecipe);
    return $http.post('/api/recipes', newRecipe)
    .then(function (res) {
      ingr.recipeId = res.data[0].recipe_id;
      console.log('res: ', ingr);
      if(ingr.recipeId > 0){
        $http.post('/api/ingredients', ingr);
      }
      else {
        return res;
      }
    });
  }


}])

angular.module('meals')
.component('allRecipes', {
    bindings: {
        eachRecipe: '=',
        certainRecipe: '='
    },
    templateUrl:'./app/components/recipesTemp.html',
    controller: ["mainService", function (mainService){

      // this.getRecipe = function (id) {
      //   this.message = "id is: " + id;
      // }

      this.getRecipe = function(id) {
        mainService.getRecipe(id)
        .then(function(response) {
          console.log('the response is: ', response);
          // this.certainRecipe = response.data;
        });
      }

    }]
});

angular.module('meals')
.controller('groceryCtrl', ["$scope", function ($scope) {

}])

angular.module('meals')
.controller('homeCtrl', ["$scope", function ($scope) {

$scope.home = "home"

}])

angular.module('meals')
.controller('recipesCtrl', ["$scope", "mainService", function ($scope, mainService) {

  $scope.submitRecipe = function(newRecipe) {
        console.log("ctrl working - recipe");
    mainService.submitRecipe(newRecipe).then(function (res) {
      $scope.rec = res;
    })
  }

  $scope.addIngredient = function (ingredient) {
    mainService.addIngredient(ingredient);
  }

  $scope.ingredientsList = mainService.ingredients;

  $scope.getRecipes = function () {
    mainService.getRecipes()
    .then(function(response) {
      $scope.allRecipes = response.data;
    });
  }

  $scope.rec = "recipe working";
  $scope.certainRecipe = mainService.certainRecipe;
}])

angular.module('meals')
.controller('welcomeCtrl', ["$scope", function ($scope) {

}])
