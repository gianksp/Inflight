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
.controller('NavController', ['$scope','$http','$state','$rootScope',
  function($scope,$http,$state,$rootScope) {

    //Default layout tablet
    $rootScope.layoutTablet = true;
    $scope.tablet = $rootScope.layoutTablet;

    $scope.layoutTitle = "Load Mobile";
    $scope.moduleTitle = "Load Cityhook";

    /**
     * Ticketmaster - Cityhook
     * @return {[type]} [description]
     */
    $scope.switchModule = function() {
      if ($state.current.name == 'list') {
        $state.go('welcome');
        $scope.moduleTitle = "Load Ticketmaster";
      } else if ($state.current.name == 'welcome') {
        $state.go('list');
        $scope.moduleTitle = "Load Cityhook";
      }
    }

    /**
     * Switch between tablet - mobile
     * @return {[type]} [description]
     */
    $scope.switchLayout = function() {
      $rootScope.layoutTablet = !$rootScope.layoutTablet;
      $scope.tablet = $rootScope.layoutTablet;
      $scope.layoutTitle = $scope.tablet ? "Load Mobile" : "Load Tablet";
    }

}])

/**
 * Master view controller. Handles behavior of list of events, featured events, etc
 * @param  {[type]} $scope [description]
 * @param  {[type]} $http  [description]
 * @param  {Array}  Event) {                   $scope.events [description]
 * @return {[type]}        [description]
 */
.controller('WelcomeController', ['$scope','$compile','$http','$state','$ionicModal','$ionicPopup','Event','City','$state','$stateParams','$ionicPopover',
  function($scope,$compile,$http,$state,$ionicModal,$ionicPopup, Event, City,$state,$stateParams,$ionicPopover) {

    //Popover content info
    $scope.popoverTitle = null;
    $scope.currentSelection = null;
    $scope.popoverContent = [
      { id : 1, name: "Paddington"},
      { id : 1, name: "Victoria Station"},
      { id : 1, name: "West End"},
      { id : 1, name: "Westminster"},
      { id : 1, name: "Chelsea"}
    ];


$scope.statusCode = $stateParams.statusCode;
console.log($scope.statusCode);

 $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }


  $scope.alert = function(){
  alert('alerted!');
};
  //google.maps.event.addDomListener(window, 'load', initialize);


  $scope.selectItem = function(item) {
    $scope.currentSelection = item;
    $scope.closePopover();
  }

  $scope.customState = function(){
    $state.go('route');
  }


  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    console.log($scope.popover);
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
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
.controller('RouteController', ['$scope','$http','$state','$stateParams','Event','$ionicPopover',
  function($scope,$http,$state,$stateParams, Event,$ionicPopover) {

 $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-detail"),
        mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }

    $scope.routeType = $stateParams.type;


  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  $scope.findRoutes = function(){
    console.log("gg");
    $state.go('routeDetail');
  }

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
.controller('RouteDetailController', ['$scope','$http','$ionicPopup','$state','$stateParams','Event',
  function($scope,$http,$ionicPopup,$state,$stateParams, Event) {


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
.controller('PurchaseController', ['$scope','$http','$state','$stateParams','Event',
  function($scope,$http,$state,$stateParams, Event) {

  $scope.pay = function(){
    $state.go('welcome',{ statusCode: true });
  }


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
})


.directive("dropdown", function($rootScope) {
  return {
    restrict: "E",
    templateUrl: "templates/dropdown.html",
    scope: {
      placeholder: "@",
      list: "=",
      selected: "=",
      property: "@"
    },
    link: function(scope) {
      scope.listVisible = false;
      scope.isPlaceholder = true;

      scope.select = function(item) {
        scope.isPlaceholder = false;
        scope.selected = item;
      };

      scope.isSelected = function(item) {
        return item[scope.property] === scope.selected[scope.property];
      };

      scope.show = function() {
        scope.listVisible = true;
      };

      $rootScope.$on("documentClicked", function(inner, target) {
        console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
        if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
          scope.$apply(function() {
            scope.listVisible = false;
          });
      });

      scope.$watch("selected", function(value) {
        scope.isPlaceholder = scope.selected[scope.property] === undefined;
        scope.display = scope.selected[scope.property];
      });
    }
  }
});