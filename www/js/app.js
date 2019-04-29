// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


var example = angular.module('app', ['ionic.native','ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])

.config(function($stateProvider, $ionicConfigProvider, $sceDelegateProvider){
  $ionicConfigProvider.tabs.position('bottom'); 
 
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
/*
.run(['$ionicPlatform', '$cordovaDeeplinks', '$state', '$timeout', function($ionicPlatform, $cordovaDeeplinks, $state, $timeout) {
  $ionicPlatform.ready(function() {
    $cordovaDeeplinks.route({
      '/page1/tab3/page107': {
        target: 'page107',
        parent: 'home'
      }
    }).subscribe(function(match) {
      $timeout(function() {
        $state.go(match.$route.parent, match.$args);
        $timeout(function() {
          $state.go(match.$route.target, match.$args);
        }, 800);
      }, 100);
    }, function(nomatch) {
      console.warn('No match', nomatch);
    });
  });
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController.fluSymptoms', {
    url: '/page107',
    templateUrl: 'templates/fluSymptoms.html',
    controller: 'fluSymptomsCtrl'
  })
  .state('tabController.fluSymptoms', {
    url: '#/page1/tab3/page107',
    views: {
      'tab3': {
        templateUrl: 'templates/fluSymptoms.html',
        controller: 'fluSymptomsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('page1/home');

})

*/


/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});



example.controller("ExampleController", function($scope, $cordovaSocialSharing) {
// Message, title, image, and url
    $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("", "", null, "https://www.boironusa.com");
    }
});

angular.module('starter', ['ionic'])
.run(function(previewData, localStorage, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (typeof analytics !== 'undefined') {
      analytics.startTrackerWithId('UA-49563724-4');
      analytics.trackView('$state.current.name');
      console.log("starting analytics");
  }
  else
  {
    console.log("Google analytics could not be loaded")
  }


    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
/* deep linking extra stuff
.run(['$ionicPlatform', '$cordovaDeeplinks', '$state', '$timeout', function($ionicPlatform, $cordovaDeeplinks, $state, $timeout) {
  $ionicPlatform.ready(function() {
    $cordovaDeeplinks.route({
      '/product/:productId': {
        target: 'product',
        parent: 'products'
      }
    }).subscribe(function(match) {
      $timeout(function() {
        $state.go(match.$route.parent, match.$args);
        $timeout(function() {
          $state.go(match.$route.target, match.$args);
        }, 800);
      }, 100);
    }, function(nomatch) {
      console.warn('No match', nomatch);
    });
  });
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('product', {
    url: '/product/:productId',
    templateUrl: 'templates/product.html',
    controller: 'ProductCtrl'
  })
  .state('products', {
    url: '/product',
    templateUrl: 'templates/products.html',
    controller: 'ProductsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/product');

});
*/

/*cordova.plugins.diagnostic.isLocationAuthorized(function(enabled){
  console.log("Location is " + (enabled ? "enabled" : "disabled"));
  if(!enabled){
    cordova.plugins.diagnostic.requestLocationAuthorization(function(status){
        console.log("Authorization status is now: "+status);
    }, function(error){
        console.error(error);
    });
  }
}, function(error){
  console.error("The following error occurred: "+error);
});
*/


