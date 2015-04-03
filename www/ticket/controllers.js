/**
 * Event List Controller.
 * This Controller takes care of the main Ticket module view where all the events
 * are listed by date and popular events are shown.
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {[type]} Event) {}]         [description]
 * @return {[type]}        [description]
 */
angular.module('inflightApp.ticket')

/**
 * Routes configuration
 * @param  {[type]} $stateProvider      [description]
 * @param  {[type]} $urlRouterProvider) {             $stateProvider    .state('list', {      url: "/list",      templateUrl: "ticket/view/list.html"    })    .state('detail', {      url: "/detail",      templateUrl: "ticket/view/detail.html"          })      $urlRouterProvider.otherwise("/list");} [description]
 * @return {[type]}                     [description]
 */
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('list', {
      url: "/",
      templateUrl: "ticket/view/list.html"
    })
    .state('detail', {
      url: "/detail/:event_index",
      templateUrl: "ticket/view/detail.html"
    })
    .state('artist', {
      url: "/detail/:event_index/artist",
      templateUrl: "ticket/view/artist.html"
    })
    .state('ticket', {
      url: "/detail/:event_index/ticket",
      templateUrl: "ticket/view/ticket.html"
    })
    .state('venue', {
      url: "/detail/:event_index/venue",
      templateUrl: "ticket/view/venue.html"
    })

    $urlRouterProvider.otherwise("/");
})

/*********************************************************    CONTROLLERS    **************************************************************/

/**
 * Master view controller. Handles behavior of list of events, featured events, etc
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {Array}  Event) {                   $scope.events [description]
 * @return {[type]}        [description]
 */
.controller('NavController', ['$scope','$http','$state','Event',
  function($scope,$http,$state,Event) {

    $scope.displayBackButton = function() {
      var show = $state.current.name == 'detail';
      console.log(show);
      return show;
    }

}])

/**
 * Master view controller. Handles behavior of list of events, featured events, etc
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {Array}  Event) {                   $scope.events [description]
 * @return {[type]}        [description]
 */
.controller('EventListController', ['$scope','$http','$state','Event',
  function($scope,$http,$state,Event) {

    //Initialise 
    $scope.events = [];
    $scope.viewModel = {};

    //Watch the search query
    $scope.applySearchFilter = function() {
      Event.findAll($scope.viewModel.search).then(function(events){
        $scope.events = events;
      });
    }

    //Load events from model
    Event.findAll().then(function (events) {
      $scope.events = events;
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
.controller('EventDetailController', ['$scope','$http','$state','$stateParams','Event',
  function($scope,$http,$state,$stateParams, Event) {

    $scope.itemIndex = $stateParams.event_index;
    Event.findAll().then(function (events) {
      $scope.events = events;
      $scope.selectedEvent = events[$scope.itemIndex];
      console.log($scope.selectedEvent);
    });

}])

/**
 * Event Detail Ticket find
 * @param  {[type]} $scope       [description]
 * @param  {[type]} $http        [description]
 * @param  {[type]} $state       [description]
 * @param  {[type]} $stateParams [description]
 * @param  {[type]} Event)       {               $scope.itemIndex [description]
 * @return {[type]}              [description]
 */
.controller('EventTicketController', ['$scope','$http','$ionicPopup','$state','$stateParams','Event',
  function($scope,$http,$ionicPopup,$state,$stateParams, Event) {

    $scope.itemIndex = $stateParams.event_index;
    Event.findAll().then(function (events) {
      $scope.events = events;
      $scope.selectedEvent = events[$scope.itemIndex];
      console.log($scope.selectedEvent);
    });

    /**
     * Purchase tickets
     * @return {[type]} [description]
     */
    $scope.purchase = function() {
      $scope.showConfirm();
    }

    $scope.showConfirm = function() {
       var confirmPopup = $ionicPopup.confirm({
         title: 'Purchase Tickets',
         template: 'Are you sure you want to purchase the selected items'
       });
       confirmPopup.then(function(res) {
         if(res) {
            $scope.showAlert();
         } else {
           console.log('Not sure');
         }
       });
     };

     // An alert dialog
     $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Thank you for purchasing!',
         template: 'You will be receiving an email with the information.'
       });
       alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
       });
     };
}])

/**
 * Event Detail Venue info
 * @param  {[type]} $scope       [description]
 * @param  {[type]} $http        [description]
 * @param  {[type]} $state       [description]
 * @param  {[type]} $stateParams [description]
 * @param  {[type]} Event)       {               $scope.itemIndex [description]
 * @return {[type]}              [description]
 */
.controller('EventVenueController', ['$scope','$http','$state','$stateParams','Event',
  function($scope,$http,$state,$stateParams, Event) {

    $scope.itemIndex = $stateParams.event_index;
    Event.findAll().then(function (events) {
      $scope.events = events;
      $scope.selectedEvent = events[$scope.itemIndex];
      console.log($scope.selectedEvent);
    });

}])

/**
 * Event Detail Artist info
 * @param  {[type]} $scope       [description]
 * @param  {[type]} $http        [description]
 * @param  {[type]} $state       [description]
 * @param  {[type]} $stateParams [description]
 * @param  {[type]} Event)       {               $scope.itemIndex [description]
 * @return {[type]}              [description]
 */
.controller('EventArtistController', ['$scope','$http','$state','$stateParams','Event',
  function($scope,$http,$state,$stateParams, Event) {

    $scope.itemIndex = $stateParams.event_index;
    Event.findAll().then(function (events) {
      $scope.events = events;
      $scope.selectedEvent = events[$scope.itemIndex];
      console.log($scope.selectedEvent);
    });

}])

/*********************************************************    DIRECTIVES    **************************************************************/


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
})

/**
 * Divider between rows in list view
 * @param  {String} $timeout) {               var lastDivideKey [description]
 * @return {[type]}           [description]
 */
.directive('autoListDivider', function($timeout) {  
	var lastDivideKey = "";

	return {
		link: function(scope, element, attrs) {
			var key = attrs.autoListDividerValue;

			var defaultDivideFunction = function(k){
				return k;
			}
      
			var doDivide = function(){
				var divideFunction = scope.$apply(attrs.autoListDividerFunction) || defaultDivideFunction;
				var divideKey = divideFunction(key);
				
				if(divideKey != lastDivideKey) { 
					var contentTr = angular.element("<div class='item item-divider ticket-section'>"+divideKey+"</div>");
					element[0].parentNode.insertBefore(contentTr[0], element[0]);
				}

				lastDivideKey = divideKey;
			}
		  
			$timeout(doDivide,0)
		}
	}
})

/**
 * Fix within contrainer another div so it is sticky
 * @param  {[type]} $document             [description]
 * @param  {[type]} $ionicScrollDelegate) {              var transition [description]
 * @return {[type]}                       [description]
 */
.directive('affixWithinContainer', function($document, $ionicScrollDelegate) {
 
  var transition = function(element, dy, executeImmediately) {
    element.style[ionic.CSS.TRANSFORM] == 'translate3d(0, -' + dy + 'px, 0)' ||
    executeImmediately ?
    element.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + dy + 'px, 0)' :
    ionic.requestAnimationFrame(function() {
      element.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + dy + 'px, 0)';
    });
  };
 
  return {
    restrict: 'A',
    require: '^$ionicScroll',
    link: function($scope, $element, $attr, $ionicScroll) {
      var $affixContainer = $element.closest($attr.affixWithinContainer) || $element.parent();
 
      var top = 0;
      var height = 0;
      var scrollMin = 0;
      var scrollMax = 0;
      var scrollTransition = 0;
      var affixedHeight = 0;
      var updateScrollLimits = _.throttle(function(scrollTop) {
          top = $affixContainer.offset().top;
          height = $affixContainer.outerHeight(false);
          affixedHeight = $element.outerHeight(false);
          scrollMin = scrollTop + top;
          scrollMax = scrollMin + height;
          scrollTransition = scrollMax - affixedHeight;
      }, 500, {
          trailing: false
      });
 
      var affix = null;
      var unaffix = null;
      var $affixedClone = null;
      var setupAffix = function() {
          unaffix = null;
          affix = function() {
              $affixedClone = $element.clone().css({
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0
              });
              $($ionicScroll.element).append($affixedClone);
 
              setupUnaffix();
          };
      };
      var cleanupAffix = function() {
          $affixedClone && $affixedClone.remove();
          $affixedClone = null;
      };
      var setupUnaffix = function() {
          affix = null;
          unaffix = function() {
              cleanupAffix();
              setupAffix();
          };
      };
      $scope.$on('$destroy', cleanupAffix);
      setupAffix();
 
      var affixedJustNow;
      var scrollTop;
      $($ionicScroll.element).on('scroll', function(event) {
        scrollTop = (event.detail || event.originalEvent && event.originalEvent.detail).scrollTop;
        updateScrollLimits(scrollTop);
        if (scrollTop >= scrollMin && scrollTop <= scrollMax) {
            affixedJustNow = affix ? affix() || true : false;
            if (scrollTop > scrollTransition) {
                transition($affixedClone[0], Math.floor(scrollTop-scrollTransition), affixedJustNow);
            } else {
                transition($affixedClone[0], 0, affixedJustNow);
            }
        } else {
            unaffix && unaffix();
        }
      });
    }
  }
});