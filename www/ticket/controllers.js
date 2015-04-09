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
    $rootScope.layoutTablet = false;
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
.controller('EventListController', ['$rootScope','$scope','$http','$state','$ionicModal','$ionicPopup','Event','City','$ionicPopover','$filter',
  function($rootScope, $scope,$http,$state,$ionicModal,$ionicPopup, Event, City,$ionicPopover,$filter) {

    $scope.allDates = [];

    $scope.generateDates = function () {
      for (var i=0 ; i< 10 ; i++) {
        var day = new Date(new Date().getTime() + i*(24 * 60 * 60 * 1000));
        var date = new Date(day.setHours(0,0,0,0));
            
        if ($scope.filterDate == null || date.getTime() >= $scope.filterDate) {
          if (i==0) {
            $scope.allDates.push ({ date:date, label:"Today"});
          } else if (i==1) {
            $scope.allDates.push ({ date:date, label:"Tomorrow"});
          } else {
            $scope.allDates.push ({ date:date, label:date.getDate()+"/"+date.getMonth()});
          }
        }
      }
    }

    $scope.generateDates();

    //Initialise 
    $scope.tablet = $rootScope.layoutTablet;
    $scope.events = [];
    $scope.cities = [];
    $scope.viewModel = {};
    $scope.selectedLocation = City.defaultCity();
    $scope.filterFavorite = false;
    $scope.filterDate = null;

    $scope.popoverContent = [
      { id : 1, name: "London"},
      { id : 2, name: "Berlin"}
    ];

    $scope.newUser = {};

    // somewhere in your controller
    $scope.options = {
      format: 'yyyy-mm-dd', // ISO formatted date
      onClose: function(e) {
        // do something when the picker closes   
        console.log("this is it");
        console.log($scope.filterDate);
      }
    }

    $scope.selectItem = function(item) {
      $scope.selectedLocation = item;
      $scope.closePopover();
      $scope.applySearchFilter();
    }

    $scope.toggleFavorite = function(index) {
      $scope.filterFavorite = index == 0 ? true : false;
      $scope.applySearchFilter();
    }

    $scope.openDatePicker = function() {
      $scope.tmp = {};
      $scope.tmp.newDate = $scope.newUser.birthDate;
      $scope.modal.show();
    }

    //Watch the search query
    $scope.applySearchFilter = function() {
      Event.findAll($scope.viewModel.search, $scope.selectedLocation, $scope.filterFavorite, $scope.filterDate ).then(function(events){
          
        //Set events to display
        $scope.events = events;
      });
    }

    //Clear search
    $scope.clearSearch = function() {
      console.log("cleared");
      $scope.viewModel = {};
    };

    //Select new city to filter by
    $scope.selectCity = function(city) {
      $scope.selectedLocation = city;
      $scope.closeModal();
    };

    //Load events from model
    Event.findAll().then(function (events) {
      $scope.events = events;
    });

    //Load all cities
    City.findAll().then(function (cities) {
      $scope.cities = cities;
    }); 

    $ionicModal.fromTemplateUrl('ticket/view/date.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.dateModal = modal;
    });

    $ionicModal.fromTemplateUrl('ticket/view/location.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.changeLocation = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.applySearchFilter();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

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


  $scope.$watch('date', function(newValue, oldValue) {
    console.log(newValue+" "+oldValue);
  });










  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];
  /*$ionicModal.fromTemplateUrl('modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });*/
    
    
     $scope.newUser = {};

  $scope.$watch('newUser.birthDate', function(unformattedDate){
    $scope.newUser.formattedBirthDate = $filter('date')(unformattedDate, 'dd/MM/yyyy HH:mm');
  });

  $scope.createContact = function() {
    console.log('Create Contact', $scope.newUser);
    $scope.modal.hide();
  };
    
  $scope.openDatePicker = function() {
    $scope.tmp = {};
    $scope.tmp.newDate = $scope.newUser.birthDate;
    
    var birthDatePopup = $ionicPopup.show({
     template: '<datetimepicker data-datetimepicker-config="{ startView:\'day\', minView:\'day\' }" ng-model="tmp.newDate"></datetimepicker>',
     title: "Select",
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Filter</b>',
         type: 'button-positive',
         onTap: function(e) {
           $scope.filterDate = $scope.tmp.newDate;
           console.log($scope.filterDate);
           $scope.applySearchFilter();
         }
       }
     ]
    });
  }
    




}])






.controller('ModalCtrl', function($scope, $ionicPopup, $filter) {
  
  $scope.newUser = {};

  $scope.$watch('newUser.birthDate', function(unformattedDate){
    $scope.newUser.formattedBirthDate = $filter('date')(unformattedDate, 'dd/MM/yyyy HH:mm');
  });

  $scope.createContact = function() {
    console.log('Create Contact', $scope.newUser);
    $scope.modal.hide();
  };
    
  $scope.openDatePicker = function() {
    $scope.tmp = {};
    $scope.tmp.newDate = $scope.newUser.birthDate;
    
    var birthDatePopup = $ionicPopup.show({
     template: '<datetimepicker ng-model="tmp.newDate"></datetimepicker>',
     title: "Birth date",
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           $scope.newUser.birthDate = $scope.tmp.newDate;
         }
       }
     ]
    });
  }
})



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
      //$scope.events = events;
      console.log(events);
      console.log("----");
      console.log($scope.itemIndex);
      for (e in events) {
        console.log(events[e].id);
        if (events[e].id == $scope.itemIndex) {
          $scope.selectedEvent = events[e];
        }
      }
      // $scope.selectedEvent = events[$scope.itemIndex];
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
      console.log("----");
      console.log($scope.itemIndex);
      for (e in events) {
        console.log(events[e].id);
        if (events[e].id == $scope.itemIndex) {
          $scope.selectedEvent = events[e];
        }
      }
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
      console.log("----");
      console.log($scope.itemIndex);
      for (e in events) {
        console.log(events[e].id);
        if (events[e].id == $scope.itemIndex) {
          $scope.selectedEvent = events[e];
        }
      }
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
      console.log("----");
      console.log($scope.itemIndex);
      for (e in events) {
        console.log(events[e].id);
        if (events[e].id == $scope.itemIndex) {
          console.log(events[e]);
          $scope.selectedEvent = events[e];
        }
      }
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
// .directive('autoListDivider', function($timeout) {  
// 	var lastDivideKey = "";

// 	return {
// 		link: function(scope, element, attrs) {
// 			var key = attrs.autoListDividerValue;

// 			var defaultDivideFunction = function(k){
// 				return k;
// 			}
      
// 			var doDivide = function(){
// 				var divideFunction = scope.$apply(attrs.autoListDividerFunction) || defaultDivideFunction;
// 				var divideKey = divideFunction(key);
				
// 				if(divideKey != lastDivideKey) { 
// 					var contentTr = angular.element("<div class='item item-divider ticket-section'>"+divideKey+"</div>");
// 					element[0].parentNode.insertBefore(contentTr[0], element[0]);
// 				}

// 				lastDivideKey = divideKey;
// 			}
		  
// 			$timeout(doDivide,0)
// 		}
// 	}
// })

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