angular.module('inflightApp.cityhook',['angular-datepicker','ti-segmented-control'])

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
      { id:"1",  time:"6:30 PM", group:"Today", name:"Spring Party",      date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true },
      { id:"2",  time:"6:30 PM", group:"Today", name:"Poker Tournament",  date:new Date(), image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:new Date(), image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"4",  time:"6:30 PM", group:"Tomorrow", name:"Women Tech Makers",  date:new Date(), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"5",  time:"6:30 PM", group:"Tomorrow", name:"Irish Cheffs",  date:new Date(), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"6",  time:"6:30 PM", group:"Tomorrow", name:"Artits 4 Life",  date:new Date(), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"7",  time:"6:30 PM", group:"Sat, March 28th", name:"Disney Princess",  date:new Date(), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"8",  time:"6:30 PM", group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"9",  time:"6:30 PM", group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel"  },
      { id:"10", time:"6:30 PM", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"11", time:"6:30 PM", group:"Sun, March 29th", name:"Meet Conor", date:new Date(), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false   },
      { id:"12", time:"6:30 PM", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      { id:"13", time:"6:30 PM", group:"Sun, March 29th", name:"Grand Prix", date:new Date(), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:false },
      { id:"14", time:"6:30 PM", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  }
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
    Event.findAll = function(filter,location,isFavorite) {
      var deferred = $q.defer();
      var filteredEvents = [];
      console.log(location);
      for (e in events) {
        eventTarget = events[e];
        //Add to filtered array to return either if there are no filters or if the filter is contained within the name of the event
        if ((filter == null || filter == '' || eventTarget.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) &&
           (location == null || location == '' || location === undefined || eventTarget.city == location.name) &&
           (eventTarget.nearby != isFavorite)) {
          filteredEvents.push(eventTarget);
        }
      }
      deferred.resolve(filteredEvents);
      return deferred.promise;
    }

    return Event;
})


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
      { id:"11",  name:"London", country:"UK" },
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