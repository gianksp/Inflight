angular.module('inflightApp.ticket',['ui.bootstrap.datetimepicker'])

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
    
    var today = new Date(new Date().setHours(0,0,0,0));

    var events = [

      //Today
      { id:"1",  
        time:"6:30 PM", 
        group:"Today", 
        name:"The Airborne Toxic Event",      
        date:today, 
        image_url:"http://images.sk-static.com/images/media/profile_images/artists/579574/card_avatar", 
        popular:true, 
        artist:"The Airborne Toxic Event", 
        ticket:true, 
        venue:"C-Club, Berlin", 
        city:"Berlin", 
        nearby:true 
      },

      { id:"2",  
        time:"6:30 PM", 
        group:"Today", 
        name:"Therapy?",  
        date:today, 
        image_url:"http://images.sk-static.com/images/media/profile_images/artists/108521/card_avatar", 
        popular:true, 
        artist:"God Damn", 
        ticket:true, 
        venue:"Bi Nuu, Berlin", 
        city:"Berlin", 
        nearby:true   
      },
      





      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:today, image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //Tomorrow
      { id:"4",  time:"6:30 PM", group:"Tomorrow", name:"Women Tech Makers",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"5",  time:"6:30 PM", group:"Tomorrow", name:"Irish Cheffs",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+2
      { id:"6",  time:"6:30 PM", group:"Tomorrow", name:"Artits 4 Life",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"7",  time:"6:30 PM", group:"Sat, March 28th", name:"Disney Princess",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"8",  time:"6:30 PM", group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"9",  time:"6:30 PM", group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel"  },
      { id:"10", time:"6:30 PM", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"11", time:"6:30 PM", group:"Sun, March 29th", name:"Meet Conor", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false   },
      { id:"12", time:"6:30 PM", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+3
      { id:"13", time:"6:30 PM", group:"Sun, March 29th", name:"Grand Prix", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:false },
      { id:"14", time:"6:30 PM", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+4  
      { id:"1",  time:"6:30 PM", group:"Today", name:"Spring Party",      date:today, image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true },
      { id:"2",  time:"6:30 PM", group:"Today", name:"Poker Tournament",  date:today, image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:today, image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+5
      { id:"4",  time:"6:30 PM", group:"Tomorrow", name:"Women Tech Makers",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"5",  time:"6:30 PM", group:"Tomorrow", name:"Irish Cheffs",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+6
      { id:"6",  time:"6:30 PM", group:"Tomorrow", name:"Artits 4 Life",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"7",  time:"6:30 PM", group:"Sat, March 28th", name:"Disney Princess",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"8",  time:"6:30 PM", group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"9",  time:"6:30 PM", group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel"  },
      { id:"10", time:"6:30 PM", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"11", time:"6:30 PM", group:"Sun, March 29th", name:"Meet Conor", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false   },
      { id:"12", time:"6:30 PM", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+7
      { id:"13", time:"6:30 PM", group:"Sun, March 29th", name:"Grand Prix", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:false },
      { id:"14", time:"6:30 PM", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+8
      { id:"1",  time:"6:30 PM", group:"Today", name:"Spring Party",      date:today, image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true },
      { id:"2",  time:"6:30 PM", group:"Today", name:"Poker Tournament",  date:today, image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:today, image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+9
      { id:"4",  time:"6:30 PM", group:"Tomorrow", name:"Women Tech Makers",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"5",  time:"6:30 PM", group:"Tomorrow", name:"Irish Cheffs",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+10
      { id:"6",  time:"6:30 PM", group:"Tomorrow", name:"Artits 4 Life",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"7",  time:"6:30 PM", group:"Sat, March 28th", name:"Disney Princess",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"8",  time:"6:30 PM", group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"9",  time:"6:30 PM", group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel"  },
      { id:"10", time:"6:30 PM", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"11", time:"6:30 PM", group:"Sun, March 29th", name:"Meet Conor", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false   },
      { id:"12", time:"6:30 PM", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+11
      { id:"13", time:"6:30 PM", group:"Sun, March 29th", name:"Grand Prix", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:false },
      { id:"14", time:"6:30 PM", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+12
      { id:"1",  time:"6:30 PM", group:"Today", name:"Spring Party",      date:today, image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true },
      { id:"2",  time:"6:30 PM", group:"Today", name:"Poker Tournament",  date:today, image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:today, image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+13
      { id:"4",  time:"6:30 PM", group:"Tomorrow", name:"Women Tech Makers",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"5",  time:"6:30 PM", group:"Tomorrow", name:"Irish Cheffs",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+14
      { id:"6",  time:"6:30 PM", group:"Tomorrow", name:"Artits 4 Life",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"7",  time:"6:30 PM", group:"Sat, March 28th", name:"Disney Princess",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"8",  time:"6:30 PM", group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"9",  time:"6:30 PM", group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel"  },
      { id:"10", time:"6:30 PM", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"11", time:"6:30 PM", group:"Sun, March 29th", name:"Meet Conor", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false   },
      { id:"12", time:"6:30 PM", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+15
      { id:"13", time:"6:30 PM", group:"Sun, March 29th", name:"Grand Prix", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:false },
      { id:"14", time:"6:30 PM", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+16
      { id:"1",  time:"6:30 PM", group:"Today", name:"Spring Party",      date:today, image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true },
      { id:"2",  time:"6:30 PM", group:"Today", name:"Poker Tournament",  date:today, image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:today, image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+17
      { id:"4",  time:"6:30 PM", group:"Tomorrow", name:"Women Tech Makers",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://www.ryerson.ca/news/news/Research_News/20120120_sleep/jcr:content/center/newsrelease/image.img.jpg/1327004308860.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"5",  time:"6:30 PM", group:"Tomorrow", name:"Irish Cheffs",  date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), image_url:"http://photogallery.indiatimes.com/events/pune/christmas-cake-mixing-/Christmas-cake-mixing/photo/2604083/Christmas-cake-mixing.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      //+18
      { id:"6",  time:"6:30 PM", group:"Tomorrow", name:"Artits 4 Life",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.lifeinkl.com/wp-content/uploads/2010/09/afg-sep2010-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      { id:"7",  time:"6:30 PM", group:"Sat, March 28th", name:"Disney Princess",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://yteevents.com/wp-content/uploads/2014/07/Frozen-Birthday-party-YTE-Events-Tampa-Ice-Queen-Princess-Elsa.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"8",  time:"6:30 PM", group:"Sat, March 28th", name:"Surfers Meetup",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.kawaipurapura.co.nz/wp-content/uploads/2013/11/IMG_7217-paddleboard-festival-2013-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"9",  time:"6:30 PM", group:"Sat, March 28th", name:"Monthly Bakery",  date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://www.pretoria-south-africa.com/images/the-cake-cartel-21521246.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel"  },
      { id:"10", time:"6:30 PM", group:"Sun, March 29th", name:"Rugby Enthusiasts", date:new Date(), image_url:"http://c2.thejournal.ie/media/2014/07/logovii-mulipola-drives-through-luke-marshalls-tackle-2-630x445.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:false   },
      { id:"11", time:"6:30 PM", group:"Sun, March 29th", name:"Meet Conor", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c0.thejournal.ie/media/2013/07/setanta-sports-ufc-announcement-2-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false   },
      { id:"12", time:"6:30 PM", group:"Sun, March 29th", name:"Dublin Marathon", date:new Date(today.getTime() + 1+(24 * 60 * 60 * 1000)), image_url:"http://c2.thejournal.ie/media/2015/01/fionnuala-britton-8-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+19
      { id:"13", time:"6:30 PM", group:"Sun, March 29th", name:"Grand Prix", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c1.thejournal.ie/media/2014/11/f1-us-grand-prix-auto-racing-4-630x360.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:false },
      { id:"14", time:"6:30 PM", group:"Sun, March 29th", name:"Amateur Rugby", date:new Date(today.getTime() + 2+(24 * 60 * 60 * 1000)), image_url:"http://c3.thejournal.ie/media/2015/01/irelands-brian-odriscoll-390x285.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:false  },
      //+20
      { id:"1",  time:"6:30 PM", group:"Today", name:"Spring Party",      date:today, image_url:"http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true },
      { id:"2",  time:"6:30 PM", group:"Today", name:"Poker Tournament",  date:today, image_url:"http://www.aaavegas.com/wp-content/uploads/2011/07/November-Nine-Group-Shot-400px.jpg", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
      { id:"3",  time:"6:30 PM", group:"Tomorrow", name:"Expats in Dublin",  date:today, image_url:"https://worldmovingblog.files.wordpress.com/2013/03/400px-keizersgrachtreguliersgrachtamsterdam.jpg?w=300&h=200", popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },
    ];

    var templates = [ 

            "http://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Classical_spectacular10.jpg/300px-Classical_spectacular10.jpg",
            "http://www.rodeohouston.com/portals/0/Images/Tickets/IndividualTickets.jpg",
            "http://s3.amazonaws.com/chronopics/0027/3965/am-concerts.png",
            "http://www.abccustoms.com/images/industries/concerts-half-fade.jpg",
            "http://www.themost10.com/wp-content/uploads/2012/03/Most-Crowded-Music-Concerts-300x200.jpg?5b7486",
            "http://th04.deviantart.net/fs44/200H/i/2009/102/4/0/Les_Ogres_de_Barback___11_by_lovecraft_concerts.jpg",
            "http://th04.deviantart.net/fs71/200H/f/2010/287/3/6/3658af27e42a36861d6bbd020d7b328b-d30q6t0.jpg",
            "http://www.fowa.org.uk/your_westonbirt/blog/wp-content/uploads/2011/06/webConcert-stage-set-up-300x200.jpg",
            "http://www.greenday-only.com/images/concert1.jpg",
            "http://th04.deviantart.net/fs70/200H/f/2012/027/c/0/20111216___fleshgod_apocalypse___12_by_cbaeriswyl-d4nqrhr.jpg",
            "http://t07.deviantart.net/lhrXHtIYRgRy4_-6MErj3Fa__VE=/300x200/filters:fixed_height(100,100):origin()/pre13/74ca/th/pre/i/2015/086/2/8/sombres_forets_by_morphine_cloud-d8nbzaj.jpg",
            "http://th09.deviantart.net/fs70/200H/f/2014/187/b/a/painting_projected_during_laibach_concerts__12_by_thisnameisclaimedbyi-d7ph4qs.png",
            "http://t07.deviantart.net/H3ukckH6-cik3tujE11pnZfh9Go=/300x200/filters:fixed_height(100,100):origin()/pre03/c475/th/pre/i/2015/090/3/9/selfmachine_34_by_femto_pjd-d8nvaau.jpg",
            "http://th00.deviantart.net/fs71/200H/i/2013/346/7/d/oliver_sykes___bmth_3_by_jimpawa-d6xnptq.jpg",
            "http://blogs-images.forbes.com/zackomalleygreenburg/files/2012/11/300x20011.jpg",

            "http://festival-of-lights.de/wp-content/uploads/2013/09/Show_Cases_Klavierzauber.jpg",
            "http://www.berlin-economics.com/images/events/20131114_3.JPG",
            "http://www.mdc.edu/main/images/berlin-wall-fall_tcm6-94213.jpg",
            "http://www.iondesign.de/content/01_projekte/06_ausstellungsdesign/08_Wall_Unternehmenspraesentation_Hoffest/01_Unternehmenspraesentation_Hoffest_300x200.jpg",
            "http://sneakerness.com/cms/wp-content/uploads/SNKRNSS_events_recap_house_of_vans_pic_130120-300x200.png",
            "http://www.aes.org/events/136/press/downloads/Moses_Address_sm.png",
            "http://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/450/offlinehbpl.hbpl.co.uk/news/OIC/398FB60B-A937-99BB-E7CC1EA05E3632B0.jpg",
            "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fphoto_galleries%252Fufnberlin_01-pesta_magomedov_02%252Fufnberlin_01-pesta_magomedov_001.jpg?mw300-mh600",
            "http://www.laboratories.telekom.com/public/pictures/LNdS_2014_Startups_HSR_2_300.jpg",
            "http://events.germany.travel/media/teaser_COA_DAVIDS_300x200.jpg",
            "http://th07.deviantart.net/fs48/200H/i/2009/202/5/7/U2_Concert_in_Berlin_IV_by_martin1110.jpg",
            "http://www.bluff.com/news/wp-content/uploads/2013/04/aku_joentausta_day3Berlin-300x200.jpg",
            "http://s1.germany.travel/media/content/events_2/volksfeste_1/karneval_der_kulturen/Karneval_der_Kulturen_2012_c_Sarah_Lindemann_4381_RET_300x0.jpg",
            "http://www.re-projects.org/wp-content/uploads/2013/05/CHIAPAS_pic_doku-300x200.jpg",
            "https://www.mdc.edu/main/images/Berlin_AA_1242_tcm6-95112.jpg",
            "http://events.germany.travel/media/teaser_Wintergarten-Saal_von_innen_c_Seidel_300x200.jpg",
            "http://events.germany.travel/media/teaser_Gala_Innenraum2_300dpi_Plamboeck_300x200.jpg",

                    "http://imgsv.imaging.nikon.com/lineup/dslr/d800/img/sample01/img_01.png",
          "http://f.tqn.com/y/gocaribbean/1/L/V/X/-/-/185733709.jpg",
          "http://f.tqn.com/y/testprep/1/L/Z/F/-/-/practice.jpg"  
   
        ]
    

    /**
     * Event data
     */
    var Event = function(data) {
        for(key in data) { this[key] = data[key]; }
        this.active = true;
    }

    /**
     * Generating events
     * @return {[type]} [description]
     */
    Event.generate = function() {
        console.log("Generating events...");
        var today = new Date();

        //Generate events for the next 5 days
        for (var i=0; i<30; i++) {
          var day = new Date(today.getTime() + i*(24 * 60 * 60 * 1000));
          var date = new Date(day.setHours(0,0,0,0));
          
          var group = null;
          //call setHours to take the time out of the comparison
          if(new Date().setHours(0,0,0,0) == date.setHours(0,0,0,0))
          {
              group = "Today";
          } else {
              group = date.getDate()+"/"+date.getMonth();
          }

          //Generate random from 3 to 12 events per day using the date above
          //This day
          var nEvents = Math.floor(Math.random() * 14) + 2;
          for (var j = 0; j < nEvents ; j ++) {
            console.log(date);
            var identifier = i+""+j;
            events.push({ id:identifier,  
                          time:"6:30 PM", 
                          group:group, 
                          name:"Event "+identifier,      
                          date:date, 
                          image_url:templates[Math.floor(Math.random() * templates.length) + 0], 
                          popular:true, 
                          artist:"John Williams", 
                          ticket:true, 
                          venue:"The West County Hotel", 
                          city:"London", 
                          nearby:true });
    //   )
          }
        }
    }

    /**
     * Find all Events
     * @return {[type]} [description]
     */
    Event.findAll = function(filter,location,isFavorite,filterDate) {
      var deferred = $q.defer();
      var filteredEvents = [];
      console.log(location);

      //Generate if they dont exist
      if (events.length == 0) {
        Event.generate();
      }


      for (e in events) {
        eventTarget = events[e];
        //Add to filtered array to return either if there are no filters or if the filter is contained within the name of the event
        if ((filter == null || filter == '' || eventTarget.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) &&
           (location == null || location == '' || location === undefined || eventTarget.city == location.name) &&
           (eventTarget.nearby != isFavorite) && (filterDate == null || filterDate == undefined || filterDate.getTime() <= eventTarget.date.getTime())) {
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