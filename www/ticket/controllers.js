/**
 * Event List Controller.
 * This Controller takes care of the main Ticket module view where all the events
 * are listed by date and popular events are shown.
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {[type]} Event) {}]         [description]
 * @return {[type]}        [description]
 */
angular.module('inflightApp.ticket').controller('EventListController', ['$scope','$http','Event',
  function($scope,$http,Event) {

    //Initialise 
    $scope.events = [];

    //Load events from model
    Event.findAll().then(function (events) {
      $scope.events = events;
      console.log(events);
    });

}])

/**
 * Event Detail Controller.
 * This Controller takes care of the detail Ticket module view where a specific event
 * is focused and information about the tickets and venue is displayed.
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {[type]} Event) {}]         [description]
 * @return {[type]}        [description]
 */
.controller('EventDetailController', ['$scope','$http','Event',
  function($scope,$http,Event) {


}])

/**
 * Directive for setting an image as background for a div
 * @param  {[type]} ){                 return function(scope, element, attrs){        var url [description]
 * @return {[type]}     [description]
 */
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        console.log(url);
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});;