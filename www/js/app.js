// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','inflightApp.ticket','inflightApp.cityhook'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/**
 * Routes configuration
 * @param  {[type]} $stateProvider      [description]
 * @param  {[type]} $urlRouterProvider) {             $stateProvider    .state('list', {      url: "/list",      templateUrl: "ticket/view/list.html"    })    .state('detail', {      url: "/detail",      templateUrl: "ticket/view/detail.html"          })      $urlRouterProvider.otherwise("/list");} [description]
 * @return {[type]}                     [description]
 */
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    //TICKETMASTER
    .state('list', {
      url: "/ticketmaster",
      templateUrl: "ticket/view/list.html"
    })
    .state('detail', {
      url: "/ticketmaster/detail/:event_index",
      templateUrl: "ticket/view/detail.html"
    })
    .state('artist', {
      url: "/ticketmaster/detail/:event_index/artist",
      templateUrl: "ticket/view/artist.html"
    })
    .state('ticket', {
      url: "/ticketmaster/detail/:event_index/ticket",
      templateUrl: "ticket/view/ticket.html"
    })
    .state('venue', {
      url: "/ticketmaster/detail/:event_index/venue",
      templateUrl: "ticket/view/venue.html"
    })

    //CITYHOOK
    .state('welcome', {
      url: "/cityhook",
      templateUrl: "cityhook/view/welcome.html"
    })

    $urlRouterProvider.otherwise("/cityhook");
});