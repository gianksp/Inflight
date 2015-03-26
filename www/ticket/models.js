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
      { id:"1",  group:"Today", name:"Spring Party",      date:new Date(), image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true },
      { id:"2",  group:"Today", name:"Poker Tournament",  date:new Date(), image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true },
      { id:"3",  group:"Tomorrow", name:"Expats in Dublin",  date:new Date(), image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true },
      { id:"4",  group:"Tomorrow", name:"Women Tech Makers",  date:new Date(), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true },
      { id:"5",  group:"Tomorrow", name:"Irish Cheffs",  date:new Date(), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true },
      { id:"6",  group:"Tomorrow", name:"Artits 4 Life",  date:new Date(), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true },
      { id:"7",  group:"Sat, March 28th", name:"Disney Princess",  date:new Date(), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true },
      { id:"8",  group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true },
      { id:"9",  group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true },
      { id:"10", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true },
      { id:"11", group:"Sun, March 29th", name:"Meet Conor", date:new Date(), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true },
      { id:"12", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true },
      { id:"13", group:"Sun, March 29th", name:"Grand Prix", date:new Date(), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true },
      { id:"14", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true }
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