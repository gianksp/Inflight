/**
 * Event List Controller.
 * This Controller takes care of the main Ticket module view where all the events
 * are listed by date and popular events are shown.
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {[type]} Event) {}]         [description]
 * @return {[type]}        [description]
 */
angular.module('inflightApp.cityhook')

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
.controller('WelcomeController', ['$scope','$compile','$http','$state','$ionicModal','$ionicPopup','Event','City',
  function($scope,$compile,$http,$state,$ionicModal,$ionicPopup, Event, City) {

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };

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
})






.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});