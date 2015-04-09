angular.module('inflightApp.cityhook',['ui.bootstrap.datetimepicker'])


/*************************************************************************************************
 *                                         CITY MODEL
 * @param  {Array} 
 * @return {[type]}   [description]
 *************************************************************************************************/
.factory('City', function ($http,$q) {

    /**
     * TO_DO
     * Remove these hard coded events and load them from a REST API
     * @type {Array}
     */
    var items = [
    
      { id:"11",  name:"London", country:"UK" },
    { id:"1",  name:"Berlin", country:"Germany" },
      
      { id:"2",  name:"Munich", country:"Germany" },
      { id:"3",  name:"Frankfurt", country:"Germany" },
      { id:"4",  name:"Hamburg", country:"Germany" },
      { id:"5",  name:"Cologne", country:"Germany" },
      { id:"6",  name:"Dresden", country:"Germany" },
      { id:"7",  name:"Leipzig", country:"Germany" },
      { id:"8",  name:"Heidelberg", country:"Germany" },
      { id:"9",  name:"Weimar", country:"Germany" },
      { id:"10",  name:"Düsseldorf", country:"Germany" },
      { id:"12",  name:"Manchester", country:"UK" },
      { id:"13",  name:"Liverpool", country:"UK" },
      { id:"14",  name:"Oxford", country:"UK" },
      { id:"15",  name:"Durham", country:"UK" },
      { id:"16",  name:"Chester", country:"UK" },
      { id:"17",  name:"Cambridge", country:"UK" },
      { id:"18",  name:"Bath", country:"UK" },
      { id:"19",  name:"York", country:"UK" },
      { id:"20",  name:"Belfast", country:"UK" },
      { id:"21",  name:"Dublin", country:"Republic of Ireland" },
      { id:"22",  name:"Cork", country:"Republic of Ireland" },
      { id:"23",  name:"Athlone", country:"Republic of Ireland" }
    ];

    /**
     * City data
     */
    var City = function(data) {
        for(key in data) { this[key] = data[key]; }
        this.active = true;
    }

    /**
     * Find all City
     * @return {[type]} [description]
     */
    City.findAll = function(filter) {
      var deferred = $q.defer();
      var filteredCities = [];
      for (e in items) {
        itemTarget = items[e];
        //Add to filtered array to return either if there are no filters or if the filter is contained within the name of the event
        if (filter == null || filter == '' || itemTarget.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
          filteredCities.push(itemTarget);
        }
      }
      deferred.resolve(filteredCities);
      return deferred.promise;
    }

    /**
     * Return Berlin as default city
     * @return {[type]} [description]
     */
    City.defaultCity = function() {
      return items[0];
    }

    return City;
});