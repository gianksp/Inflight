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
})

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