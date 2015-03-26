angular.module('inflightApp.ticket',[])

/*************************************************************************************************
 *                                         EVENT MODEL
 * @param  {Array} 
 * @return {[type]}   [description]
 *************************************************************************************************/
.factory('Event', function ($http,$q) {

    /**
     * TO_DO
     * Remove these hard coded events and load them from a REST API
     * @type {Array}
     */
    var events = [
      { id:"1",  name:"Event Name",    date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"2",  name:"Event Name 2",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"3",  name:"Event Name 3",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"4",  name:"Event Name 4",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"5",  name:"Event Name 5",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"6",  name:"Event Name 6",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"7",  name:"Event Name 7",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"8",  name:"Event Name 8",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"9",  name:"Event Name 9",  date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"10", name:"Event Name 10", date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"11", name:"Event Name 11", date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"12", name:"Event Name 12", date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"13", name:"Event Name 13", date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"14", name:"Event Name 14", date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true }
    ];

    /**
     * Event data
     */
    var Event = function(data) {
        for(key in data) { this[key] = data[key]; }
        this.active = true;
    }

    /**
     * Find all Events
     * @return {[type]} [description]
     */
    Event.findAll = function() {
      var deferred = $q.defer();
      deferred.resolve(events);
      return deferred.promise;
    }

    return Event;
});