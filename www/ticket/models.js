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
        name:"Adema",      
        date:today, 
        image_url:"img/1.jpeg", 
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
        image_url:"img/2.jpeg", 
        popular:true, 
        artist:"God Damn", 
        ticket:true, 
        venue:"Bi Nuu, Berlin", 
        city:"Berlin", 
        nearby:true   
      },














              //Today
      { id:"11",  
        time:"6:30 PM", 
        group:"Today", 
        name:"The Airborne Toxic Event",      
        date:today, 
        image_url:"img/11.jpeg", 
        popular:true, 
        artist:"The Airborne Toxic Event", 
        ticket:true, 
        venue:"C-Club, Berlin", 
        city:"London", 
        nearby:true 
      },

      { id:"12",  
        time:"6:30 PM", 
        group:"Today", 
        name:"Therapy?",  
        date:today, 
        image_url:"img/12.jpeg", 
        popular:true, 
        artist:"God Damn", 
        ticket:true, 
        venue:"Bi Nuu, Berlin", 
        city:"London", 
        nearby:true   
      },

      { id:"13",  
        time:"6:30 PM", 
        group:"Today", 
        name:"Festival Days Berlin",  
        date:today, 
        image_url:"img/13.jpeg", 
        popular:true, 
        artist:"John Williams", 
        ticket:true, 
        venue:"The West County Hotel", 
        city:"London", 
        nearby:true   
      },
      


      //Tomorrow
      { id:"14",  
        time:"6:30 PM", 
        group:"Tomorrow", 
        name:"The Wall",  
        date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
        image_url:"img/14.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:true  },
      


      { id:"15",  
        time:"6:30 PM", 
        group:"Tomorrow", 
        name:"Gallery Weekend Berlin 2015",  
        date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
        image_url:"http://www.visitberlin.de/sites/default/files/imagecache/high_l_slideshow_580_237/jh_ghallery_weekend_neugerriemschneider-crop_c_marco_funke.jpg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },





    {
    id:"21",  
    time:"6:30 PM", 
    group:"Tomorrow", 
    name:"Arduino Starter Workshop",      
    date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
    image_url:"img/21.jpeg", 
    popular:true, 
    ticket:true,
    description:"Build your own interactive thing! With sensors and motors and light and sound... This workshop is geared towards complete beginners. You will learn the basics of programming and different analysis options. We´ll also give you an overview of the range of applications for the arduino plattform.  ",
    artist:"", 
    venue:"Fab Lab Berlin, Berlin", 
    city:"Berlin"
},

{
    id:"22",  
    time:"8:00 PM", 
    group:"Tomorrow", 
    name:"The Fish Bowl English Comedy Showcase",      
    date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
    image_url:"img/22.jpeg", 
    popular:true, 
    ticket:true,
    description:"Each event showcases the best English-Language Comedians in Berlin alongside some brilliant international guests. ",
    artist:"Georg Kammerer", 
    venue:"Bar 1820, 41 Rosa-Luxemburg-Straße , Berlin", 
    city:"Berlin"
},



{
    id:"24",  
    time:"6:30 PM", 
    group:"Tomorrow", 
    name:"Startup Funding 101: How to Raise Capital for Your Idea",      
    date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
    image_url:"img/23.jpeg", 
    popular:true, 
    ticket:true,
    description:"Do you have a business idea or product that needs funding? Do you want to learn how startup funding works, what you need to do before trying to raise funding, and where you can go to get it? Then join us for this beginner fundraising workshop, which will provide practical, step by step advice, and feature talks from entrepreneurs who have successfully raised money for their businesses",
    artist:"", 
    venue:"Startup Incubator, Berlin", 
    city:"Berlin"
},


      { id:"3",  
        time:"6:30 PM", 
        group:"Tomorrow", 
        name:"Festival Days Berlin",  
        date:today, 
        image_url:"img/3.jpeg", 
        popular:true, 
        artist:"John Williams", 
        ticket:true, 
        venue:"The West County Hotel", 
        city:"Berlin", 
        nearby:true   
      },
      


      //Tomorrow
      { id:"4",  
        time:"6:30 PM", 
        group:"Tomorrow", 
        name:"The Wall",  
        date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
        image_url:"img/4.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:true  },
      


      { id:"5",  
        time:"6:30 PM", 
        group:"Tomorrow", 
        name:"Gallery Weekend Berlin 2015",  
        date:new Date(today.getTime() + (24 * 60 * 60 * 1000)), 
        image_url:"img/5.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:true   },



              //Today
      { id:"6",  
        time:"6:30 PM", 
        group:"2 days from now", 
        name:"The Airborne Toxic Event",      
        date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
        image_url:"img/6.jpeg", 
        popular:true, 
        artist:"The Airborne Toxic Event", 
        ticket:true, 
        venue:"C-Club, Berlin", 
        city:"Berlin", 
        nearby:true 
      },

      { id:"7",  
        time:"6:30 PM", 
        group:"2 days from now", 
        name:"Therapy?",  
        date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
        image_url:"img/7.jpeg", 
        popular:true, 
        artist:"God Damn", 
        ticket:true, 
        venue:"Bi Nuu, Berlin", 
        city:"Berlin", 
        nearby:true   
      },

      {
    id:"23",  
    time:"9:30 PM", 
    group:"2 days from now", 
    name:"BETABREAKFAST",      
    date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
    image_url:"img/24.jpeg", 
    popular:true, 
    description:"Get to know creative minds and start ups in Berlin. Enjoy breakfast at betahaus| Berlin at our weekly networking event - freelancers, start ups, creatives and friends are welcome to join! Brötchen and fresh coffee will be served. Plus we always have an interesting input from 1-3 startups/ freelancers.",
    artist:"", 
    venue:"Betahaus, Berlin", 
    city:"Berlin"
},

{
    id:"25",  
    time:"4:00 PM", 
    group:"2 days from now", 
    name:"Closing Concert",      
    date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
    image_url:"img/25.jpeg", 
    popular:true, 
    description:"Closing Concert of the Specs On! Festival. We'll end the festival with our largest chamber ensemble of the festival, and a mighty giant in the world of composing; the string quartet. To that we serve lieder from the 1900s, that choose their own very special way into the new century.Entry to the gallery and all the exhibitions is included in the price.",
    artist:"", 
    venue:"Collectors Room, Auguststraße 68, Berlin", 
    city:"Berlin"
},

              //Today
      { id:"16",  
        time:"6:30 PM", 
        group:"2 days from now", 
        name:"The Airborne Toxic Event",      
        date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
        image_url:"img/15.jpeg", 
        popular:true, 
        artist:"The Airborne Toxic Event", 
        ticket:true, 
        venue:"C-Club, Berlin", 
        city:"London", 
        nearby:true 
      },

      { id:"17",  
        time:"6:30 PM", 
        group:"2 days from now", 
        name:"Therapy?",  
        date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
        image_url:"img/16.jpeg", 
        popular:true, 
        artist:"God Damn", 
        ticket:true, 
        venue:"Bi Nuu, Berlin", 
        city:"London", 
        nearby:true   
      },

      { id:"18",  
        time:"6:30 PM", 
        group:"2 days from now", 
        name:"Festival Days Berlin",  
        date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
        image_url:"img/17.jpeg", 
        popular:true, 
        artist:"John Williams", 
        ticket:true, 
        venue:"The West County Hotel", 
        city:"London", 
        nearby:true   
      },
      

      { id:"8",  
        time:"6:30 PM", 
        group:"2 days from now", 
        name:"Festival Days Berlin",  
        date:new Date(today.getTime() + 2*(24 * 60 * 60 * 1000)), 
        image_url:"img/8.jpeg", 
        popular:true, 
        artist:"John Williams", 
        ticket:true, 
        venue:"The West County Hotel", 
        city:"Berlin", 
        nearby:true   
      },
      


      //Tomorrow
      { id:"9",  
        time:"6:30 PM", 
        group:"3 days from now", 
        name:"The Wall",  
        date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
        image_url:"img/9.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"Berlin", nearby:true  },
      


      { id:"10",  
        time:"6:30 PM", 
        group:"3 days from now", 
        name:"Gallery Weekend Berlin 2015",  
        date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
        image_url:"img/10.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"Berlin", nearby:true   },




      //Tomorrow
      { id:"19",  
        time:"6:30 PM", 
        group:"3 days from now", 
        name:"The Wall",  
        date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
        image_url:"img/18.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel" , city:"London", nearby:true  },
      


      { id:"20",  
        time:"6:30 PM", 
        group:"3 days from now", 
        name:"Gallery Weekend Berlin 2015",  
        date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
        image_url:"img/20.jpeg", 
        popular:true, artist:"John Williams", ticket:true, venue:"The West County Hotel", city:"London", nearby:true   },


{
    id:"26",  
    time:"2:00 PM", 
    group:"3 days from now", 
    name:"Baroque Perspectives",      
    date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
    image_url:"img/26.jpeg", 
    popular:true, 
    description:"Buy a ticket to the Baroque Perspecitves. See the Specs On! Website for more info on the concert programme. Entry to the gallery and all the exhibitions is included in the price.",
  artist:"", 
    venue:"Collectors Room, Auguststraße 68, Berlin", 
    city:"Berlin"
},

{
    id:"27",  
    time:"4:00 PM", 
    group:"3 days from now", 
    name:"Surround Perspectives",      
    date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
    image_url:"img/27.jpeg", 
    popular:true, 
    description:"Two musicians from Sweden. Two very different acts. Marta Forsberg explores and expands microscopical musical phenomenons related to social structures. Kajsa Magnarsson will join us for a concert with her organ built from personal attack alarms. Entry to the gallery and all the exhibitions is included in the price.",    
  artist:"Marta Forsberg and Kajsa Magnarsson", 
    venue:"Collectors Room, Auguststraße 68, Berlin", 
    city:"Berlin"
},

{
    id:"28",  
    time:"1:00 PM", 
    group:"3 days from now", 
    name:"Control the world with Grasshopper",      
    date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
    image_url:"img/28.jpeg", 
    popular:true, 
    description:"These three 2+ hours workshops with Simon Lullin should give you the best Grasshopper overview and experiment possible, from the absolute basics up being able to control your geometries by the way you dance. Since the software is especially vast, we’ll focus on some key features", 
  artist:"Simon Lullin",
    venue:"Fab Lab Berlin, Berlin", 
    city:"Berlin"
},

{
    id:"29",  
    time:"8:00 PM", 
    group:"3 days from now", 
    name:"Up In Joke - Free Comedy Show",      
    date:new Date(today.getTime() + 3*(24 * 60 * 60 * 1000)), 
    image_url:"http://cdn.evbuc.com/images/12856914/106583992637/1/logo.jpg", 
    popular:true, 
    description:"This is a free stand-up comedy show, all performers will be performing in English",    
  artist:"Daniel Louis Vezza, Toby Arsalan and Alex Upatov", 
    venue:"Café Maggie, Berlin", 
    city:"Berlin"
},

{
    id:"30",  
    time:"6:30 PM", 
    group:"4 days from now", 
    name:"Learn it Make it Eat it #2 Frühlings Special",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/29.jpeg", 
    popular:true, 
    description:"Bring a small jar and a curious appetite- learn the secrets behind vegan-cheeZe - how to's and what NOT to do's. Discover how accessible probiotics are and how they can positively change the way you eat and live by creating your very own vegan seed/nut cheeZe ferment.",   
  artist:"Alexis from Edible Alchemy and Vero (VerRaw in Berlin)", 
    venue:"Trial & Error, Berlin", 
    city:"Berlin"
},

{
    id:"31",  
    time:"7:30 PM", 
    group:"4 days from now", 
    name:"Agora Pop Up Series - Cyrus Smith",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/30.jpeg", 
    popular:true, 
    description:"6th Edition of Agora Pop Up Dinner features Cyrus Smith - Cyrus Smith is a visual artist and chef from Canada. Over a number of years he has collected shopping lists, and will now proceed to make a series of dinners out of his collection. For Agora Collective, Smith proposes to create a 3 course tasting menu based on a list found here in Berlin with 3 items on it. Each item will be the theme ingredient for the respective course.",   
  artist:"Cyrus Smith", 
    venue:"Agora Collective, Berlin", 
    city:"Berlin"
},

{
    id:"32",  
    time:"3:00 PM", 
    group:"4 days from now", 
    name:"OM Basics: How to OM in Berlin",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/31.jpeg", 
    popular:true, 
    description:"Orgasmic Meditation, or OM for short, is a 15-minute timed practice where a partner strokes the upper left hand quadrant of the clitoris, very lightly. There is no goal, except to feel the sensation in Both partners' bodies. OM is a simple way to deepen intimacy, know your body, and connect to yourself and others.",    
  artist:"", 
    venue:"Spirit Berlin, Berlin", 
    city:"Berlin"
},

{
    id:"33",  
    time:"9:00 AM", 
    group:"4 days from now", 
    name:"Wonder Woman Workshop",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/32.jpeg",
    popular:true, 
    description:"Wonder Woman Workshops are designed to improve your metabolism, strength, agility, balance and flexibility.",    
  artist:"", 
    venue:"Greenwich Park, London", 
    city:"London"
},

{
    id:"34",  
    time:"9:00 AM", 
    group:"4 days from now", 
    name:"Business Coaching and Mentoring -1:2:1",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/33.jpeg", 
    popular:true, 
    description:"Your Small Business Coach works with business owners and their key Managers and Business Partners to build profitable businesses for professional service firms around the world.",    
  artist:"", 
    venue:"City center, London", 
    city:"London"
},

{
    id:"35",  
    time:"10:00 AM", 
    group:"4 days from now", 
    name:"Promotional Reps X2",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/34.jpeg", 
    popular:true, 
    description:"Our promotional reps are experts in meeting and greeting members of the public and divulging information about your business in a friendly and professional way in order to sign members up for various occassions. ",   
  artist:"", 
    venue:"Your Business Premesis , London", 
    city:"London"
},

{
    id:"36",  
    time:"10:00 AM", 
    group:"4 days from now", 
    name:"Web Content Updaters X2",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/35.jpeg", 
    popular:true, 
    description:"Our web content staff are ideal if your aiming to create a brighter online presence, they are highly skilled in blogging, article writing and web design, and can intergrate various promotional tools in to your current existing webpage. Web content staff work directly from our offices or even from home.",    
  artist:"", 
    venue:"Your Business Premesis , London", 
    city:"London"
},

{
    id:"37",  
    time:"3:00 PM", 
    group:"4 days from now", 
    name:"London Auditions and Interviews for NYFA Summer 2015",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/36.jpeg", 
    popular:true, 
    description:"The National Youth Film Academy meets with 1000’s of young 16-25 year old filmmakers and actors each year at our audition days which are held around the UK. What happens on the day and what you need to prepare will depend on the role you are applying for.",    
  artist:"", 
    venue:"City center, London", 
    city:"London"
},

{
    id:"38",  
    time:"10:00 AM", 
    group:"4 days from now", 
    name:"Get the Guy: Understand the Male Mind in Just 1 Day: Secrets of Attraction",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/37.jpeg", 
    popular:true, 
    description:"Having trouble meeting the right guys? Discover How Over 15,000 Women Finally Had The Aha Moment With Their Love Lives And Now Understand What They've Been Doing Wrong With Men... If you’re single and wondering why you never meet guys that you’re attracted to OR you seem to always attract the wrong guys then you’re not alone. You’re probably feeling frustrated if not angry knowing that each day that passes you by you’re wasting time, when you should be finding guys that you ACTUALLY want to meet and date. It’s incredibly annoying.",    
  artist:"Matthew Hussey", 
    venue:"Holiday Inn Kings Cross, London", 
    city:"London"
},

{
    id:"39",  
    time:"7:00 PM", 
    group:"4 days from now", 
    name:"One Time For Ya Mind",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/38.jpeg", 
    popular:true, 
    description:"One Time For YA Mind [#OTFYM] is East London Hip-Hop duo PBGR’s first headline show. Fuelled by the release of their free album in 2014, PBGR are steadily becoming a name and a sound to look out for. This live production is not only catered to the duo's supporters, but also those yet to witness the PBGR experience.",   
  artist:"Ralph Hardy, P Montana & Chris SMG with support from other artists", 
    venue:"Birthdays, London", 
    city:"London"
},

{
    id:"40",  
    time:"10:00 AM", 
    group:"4 days from now", 
    name:"Red's Botanical Masterclass",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/39.jpeg", 
    popular:true, 
    description:"Join the Red Living team and The Joy of Plants for an expert-led event showcasing the latest trends in houseplant design. We’ll be workshopping creative and practical skills such as which houseplants to choose, how to arrange them, the art of colour matching and blending, and the details that will make your green displays totally, beautifully unique. Fun, creative and inspiring, the DIY sessions will be all about taking objects already at your disposal, and seeing them through an innovative new prism. The aim? To help you create a wonderful home environment by incorporating the houseplant trends bespoke to you and your family.",   
  artist:"", 
    venue:"The Town House, London", 
    city:"London"
},

{
    id:"41",  
    time:"7:00 PM", 
    group:"4 days from now", 
    name:"Caribbean Knights: Caribbean Food and Drink Expo 2015 Pre-Launch",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"http://cdn.evbuc.com/images/12505365/66187406205/1/logo.jpg", 
    popular:true, 
    description:"Welcome to a CaribDirect and Fairweather Productions Extravaganza!  This is your Invitation to CARIBBEAN KNIGHTS - A glitzy and glamorous dinner and dance at the newly refurbished Kensington Close Hotel in the heart of Kensington, London Are you celebrating a birthday, anniversary, or just fancy having a great night out in London in style? Then this is the place to be",    
  artist:"", 
    venue:"Kensington Close Hotel, London", 
    city:"London"
},

{
    id:"42",  
    time:"6:30 PM", 
    group:"4 days from now", 
    name:"An Audience with Ben Aaronovitch, supported by E17 Puppet Project",      
    date:new Date(today.getTime() + 4*(24 * 60 * 60 * 1000)), 
    image_url:"img/40.jpeg", 
    popular:true, 
    description:"Join in the conversation with author Ben Aaronovitch as we discuss Rivers of London, the first novel in his series.  Selected as this year's Cityread London title, this is a murder investigation with a difference, where realms of magic and mystery collide.  This genre-bending tale merges historic and modern London, Punch and Judy and police procedural, fact and fantasy; all set to a backdrop of the capital's landmarks and rivers.",    
  artist:"Ben Aaronovitch", 
    venue:"Walthamstow Library, London", 
    city:"London"
},

{
    id:"43",  
    time:"12:00 AM", 
    group:"5 days from now", 
    name:"The Black Market & Film Festival",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/41.jpeg", 
    popular:true, 
    description:"The sixth Black Market & Film Festival is an event to showcase, expose and connect Black cultural and creative entrepreneurs to the community and to provide a platform to sell their products, promote their skills and engage with the local and surrounding community.",    
  artist:"", 
    venue:"Platanos College, London", 
    city:"London"
},

{
    id:"44",  
    time:"11:00 AM", 
    group:"5 days from now", 
    name:"Natural Hair & Lifestyle Expo 2015",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/42.jpeg", 
    popular:true, 
    description:"Throughout the day there will be interactive workshops and seminars for consumers and stylists to learn more about products and services related to natural hair, business, health and wellness. ",    
  artist:"", 
    venue:"City of Westminster College, London", 
    city:"London"
},
{
    id:"45",  
    time:"9:30 AM", 
    group:"5 days from now", 
    name:"Change Your Financial Life Event",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/43.jpeg", 
    popular:true, 
    description:"A joint Event with some of the top Executive Vice Presidents from Genistar Ltd, the fastest growing company in the financial sector. Both Steve Owbridge & Barbara Anderson have recieved national recognition for their work in this field and continue to break records and help families change their financial landscapes.",   
  artist:"", 
    venue:"The Rooms - Browns Restaurant & Brasserie, Covent Garden, London", 
    city:"London"
},
{
    id:"46",  
    time:"9:00 AM", 
    group:"5 days from now", 
    name:"A one-day seminar on the mental aspects of competitive sport",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/44.jpeg", 
    popular:true, 
    description:"Ever since the late seventies, psychologists have grappled with the difficulties of controlling and enhancing the inner skills of the sporting mind and now, at last, we have answers! For you who are really serious about improving your performance the NSRA (National Small-bore Rifle Association), with the support of the ISSF (International Shooting Sport Federation), have put together a one day seminar on mental training which covers all of the elements necessary for the mental aspects of the athlete’s training programme, to be held on April 11th, 2015. British experts in their field, who have worked with many different athletes from many different sports, will be presenting the results of their research. Topics will include techniques to deal with all of the problems listed above – and more! Every talk will be followed by a short section on how you can apply this to your own training and performance.",    
  artist:"", 
    venue:"The Royal Society of Medicine, London", 
    city:"London"
},
{
    id:"47",  
    time:"5:00 PM", 
    group:"5 days from now", 
    name:"Pop-up Opera present Mozart's Die Entführung at the Asylum Peckham",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/45.jpeg", 
    popular:true, 
    description:"Mozart's comedy about two young men, Belmonte and Pedrillo, attempting to rescue their lovers Konstanze and Blonde from an Ottoman harem. All kinds of high jinks and mishaps occur as they don disguises, make merry with the servants and sing an ode to Bacchus god of wine, in an attempt to save their beloveds. The music contains some of Mozart's most spectacular and virtuoso arias, and is richly embroidered with his interpretation of Turkish music. An opulent and highly entertaining treat.",   
  artist:"Pop-up Opera", 
    venue:"Asylum, London", 
    city:"London"
},
{
    id:"48",  
    time:"5:30 PM", 
    group:"5 days from now", 
    name:"Free Sponsorship Licence Training",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/46.jpeg", 
    popular:true, 
    description:"Bringing together employers and companies who employ or wish to employ overseas specialist skilled workers. About this briefing: Employers often wonder whether it is necessary to have a Sponsorship Licence in place. Those who have already obtained a Sponsorship Licence tend to fall behind with their compliance duties. In this briefing, we will discuss the ins and outs of Tier 2 Licences, as well as the work permits and compliance duties which follow from there onwards. We will first consider how the current rules affect employers directly and the correct procedures of employing Non EU/British migrants. We will then move on to examine requirements of employers to ensure that they are complying with their duties as a trusted sponsor. Additionally we will discuss what the impact of not complying with duties could be - including civil penalties and revocation of licences. We will provide a full examining of the compliance duties, the effects of non-compliance, and the consequences of not following the correct regulations. We know that every individual and every company have separate circumstances, which is why we are here to explain all aspects and possible complications of the full procedure.  In addition to this briefing, attendees will receive free sponsorship licence, compliance and management training. We can also provide onsite assistance to all attendees.",    
  artist:"Vaibhav Tanwar, Zohra Fatima and Agron Bicaku", 
    venue:"City center, London", 
    city:"London"
},
{
    id:"49",  
    time:"12:00 AM", 
    group:"5 days from now", 
    name:"The Lord Mayor's Big Curry Lunch 2015",      
    date:new Date(today.getTime() + 5*(24 * 60 * 60 * 1000)), 
    image_url:"img/47.jpeg", 
    popular:true, 
    description:"The Lord Mayor of The City of London will host this year’s Lunch, which over the last seven years has raised over £1,147,000 for ABF The Soldiers’ Charity’s, helping soldiers and former Soldiers who have served in Afghanistan and Iraq and risked so much. The Lunch, on Thursday 16th April 2015, might see you sitting with senior officers of the British Army, members of both Houses of Parliament, the Ministry of Defence ministerial team, members of the Defence Select Committee; recently-returned Soldiers from Afghanistan and Iraq and a wide cross-section of City professionals and business leaders. Attendees of the Lunch will be able to bid on money can’t buy prizes in the Silent Auction and Draw as well as have the opportunity to speak with some of our beneficiaries and meet a number of serving soldiers who have recently returned from tours of duty. Tickets are £95, which includes unlimited fabulous curries, as well as beer, wine and mineral water.",    
  artist:"", 
    venue:"Guildhall, Gresham Street , London", 
    city:"London"
},
{
    id:"50",  
    time:"9:00 AM", 
    group:"6 days from now", 
    name:"Employee Engagement Summit",      
    date:new Date(today.getTime() + 6*(24 * 60 * 60 * 1000)), 
    image_url:"img/48.jpeg", 
    popular:true, 
    description:"The links between employee engagement, customer engagement, performance and profitability are clear and will be examined in detail at our first Employee Engagement Summit. Human capital and customer relationships are the leading concerns of CEOs and taking an holistic approach to our employee and customer engagement strategies is of paramount importance.",   
  artist:"", 
    venue:"Victoria Park Plaza, London", 
    city:"London"
},
{
    id:"51",  
    time:"9:30 AM", 
    group:"6 days from now", 
    name:"Herbal Medicine Consultation - Healing with Herbs for your Health",      
    date:new Date(today.getTime() + 6*(24 * 60 * 60 * 1000)), 
    image_url:"img/49.jpeg", 
    popular:true, 
    description:"Our qualified medical herbalist, Mrs Varsha Soneji BSc (Hons) MNIMH, has over 20 years of experience in the field of complementary health.  She will see you in person, take a detailed case history and carry out any examination, if necessary, before formulating your unique prescription. Your medicines will be hand made and dispensed by Varsha herself along with dietary and lifestyle recommendations. If you are unsure of whether herbal medicine can help you, get in touch with Varsha before booking your appointment by clicking on the contact link on the right or below.",    
  artist:"", 
    venue:"Stanmore, London", 
    city:"London"
},
{
    id:"52",  
    time:"9:030 AM", 
    group:"7 days from now", 
    name:"Private Cookery Lessons - 'Food from the Tropics'",      
    date:new Date(today.getTime() + 7*(24 * 60 * 60 * 1000)), 
    image_url:"img/50.jpeg", 
    popular:true, 
    description:"In Your  Kitchen or In Our Kitchen, you choose the date and time. Conducted by a chef who ran an 'Award Winning' Sri Lankan / South Indian restuarant in London for seven years. Its fun and at the end of the lesson you would have gained the confidence to make these dishes on your own. Entertain your family and friends showing off your culinary talents. Introduction to all the spices used and a story behind the dishes will be told. Demonstartion of some basic knife skills. Lesson will last for approximately 3.0 to 3.5 Hrs.  Cusines to choose from are: Kerala, Goa, Sri Lanka, Malaysia and Thailand What you will learn hands-on are a three course menu of a chosen region. Once booking is made menues will be sent across to you well in time prior to the lesson for you to choose the dishes from. Starters - A popular starter, choose one from three. Main - Chicken or Fish dish, choose one from four  Sides - 2 vegetable dishes, choose two from five Dessert - To choose one from three. Vegan / Vegetarians are catered for and allergies considered. What is included in the fee: All ingredients, recipe cards and enough spices for you to try the dishes later on.   GIFT - Buy this as a gift and get in touch with us to arrange date and time.",    
  artist:"", 
    venue:"Your Kitchen - Within M25 + 70 Miles, Our Kitchen - London NW9", 
    city:"London"
},
{
    id:"53",  
    time:"10:00 AM", 
    group:"7 days from now", 
    name:"Vision Day - A Walk in The Park",      
    date:new Date(today.getTime() + 7*(24 * 60 * 60 * 1000)), 
    image_url:"img/51.jpeg", 
    popular:true, 
    description:"Standing still can provide the perfect perspective for seeing greater possibility and choice. During the Vision Day you have quality time and space to pause, providing a deep dive coaching experience to clarify what is vital for you to thrive. After a Vision Day clients are amazed how fast they move to action. It is easy to lead when your vision is clear and compelling. It is easy to follow a leader who has a vision. It becomes contagious. If you are a leader who wishes to create a vision for yourself, your team or your organization then this is for you. ",   
  artist:"", 
    venue:"T B C, London", 
    city:"London"
},
{
    id:"54",  
    time:"1:00 PM", 
    group:"7 days from now", 
    name:"The Beatles London Walking Tour",      
    date:new Date(today.getTime() + 7*(24 * 60 * 60 * 1000)), 
    image_url:"img/52.jpeg", 
    popular:true, 
    description:"A must for any music fan, a stroll back in time, taking in the places where the Fab Four worked and played in London. Come and see where John, Paul, George and Ringo met the Rolling Stones and where they recorded “Hey Jude”, as well as the rooftop where they played “Get Back”. Includes visits to Denmark Street – the street of guitars – and Carnaby Street – the heart of Swinging Sixties London. A stroll back in time, taking in the places where the Fab Four worked and played in London Includes visits to Denmark Street – the street of guitars – and Carnaby Street – the heart of Swinging Sixties London",   
  artist:"", 
    venue:"Visitor Centre Leicester Square, London", 
    city:"London"
},

{
    id:"55",  
    time:"6:00 PM", 
    group:"7 days from now", 
    name:"Unicorns in tech Get-Together, hosted by Outfittery",      
    date:new Date(today.getTime() + 7*(24 * 60 * 60 * 1000)), 
    image_url:"img/55.jpeg", 
    popular:true, 
    description:"UNICORNS IN TECH first formed in July 28th, 2014 as Germany's first tech community for gay, lesbian and straight individuals, or however you may identify. It is the ideal place for everyone who has an interest in tech, whether you are an industry professional or a more causal enthusiast.",   
  artist:"", 
    venue:"OUTFITTERY, Berlin", 
    city:"Berlin"
},
{
    id:"56",  
    time:"6:00 PM", 
    group:"8 days from now", 
    name:"GTEC Open Lecture: Martin Varsavsky, European super-entrepreneur and investor",      
    date:new Date(today.getTime() + 8*(24 * 60 * 60 * 1000)), 
    image_url:"img/56.jpeg", 
    popular:true, 
    description:"'Martín Varsavsky (born in Buenos Aires in 1960) is an Argentine entrepreneur based in Spain. Since the late 1980s he has founded seven telecommunications and new media companies, including Viatel, Jazztel, EINSTEINet and Ya.com.' That's what Wikipedia has to say. Most consumers, however, will know Martin's company Fon, the world's largest shared WiFi access network, and maybe his recently crowdfunded spin-off Gramofon, a device connecting Spotify with your stereo set (and acting as a WiFi repeater on the side). Without doubt, Martin is an embodiment of entrepreneurship - and, at the same time, a father of six.  No wonder he is a celebrity speaker at conferences around the world. Not to be missed!",    
  artist:"Martín Varsavsky", 
    venue:"GTEC, Schlossplatz 1 , Berlin", 
    city:"Berlin"
},

{
    id:"57",  
    time:"7:30 PM", 
    group:"8 days from now", 
    name:"Design think, think design",      
    date:new Date(today.getTime() + 8*(24 * 60 * 60 * 1000)), 
    image_url:"img/57.jpeg", 
    popular:true, 
    description:"A Graphic Design Course. To learn design you have to design. The connecting threat of the course is the execution of different graphic design projects and the subsequent collective analysis. Thus, the student will develop their creative and analytical capacities. And at the end of the course will have a portfolio much more worthy than a résumé. This does not mean that the theory is shelved. On the contrary, it will deepen in the history of art and thought, and, of course, in the disciplines of graphic design.  Talk about concept, composition, typography, identity, editorial design, signage.  There will be a final project in which each student will design their own corporate identity.",   
  artist:"Jorge Chamorro", 
    venue:"ESDIP, 48 Gruenberger St, Berlin", 
    city:"Berlin"
},

{
    id:"58",  
    time:"6:30 AM", 
    group:"8 days from now", 
    name:"3D Printing Introduction Workshop",      
    date:new Date(today.getTime() + 8*(24 * 60 * 60 * 1000)), 
    image_url:"img/58.jpeg", 
    popular:true, 
    description:"The workshop is open to all the people curious about 3D printing, people from all backgrounds are welcome.  We will walk you through the process of printing a 3D Modell on one of our I3 Berlin Printers. Furthermore you will get an overview of the 3d printing technology, the latest 3d printers and the way the new 3d printing technology is going.  You will also get insights into the very lively and exciting world of commercial and non-commercial 3d printing artists, makers and communities.  At the end of the workshop you will send an object, that you choose from our “Great Short Prints-Collection”, to print on one of our printers.",    
  artist:"", 
    venue:"Fab Lab Berlin, Berlin", 
    city:"Berlin"
}




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
    // Event.generate = function() {
    //     console.log("Generating events...");
    //     var today = new Date();

    //     //Generate events for the next 5 days
    //     for (var i=0; i<30; i++) {
    //       var day = new Date(today.getTime() + i*(24 * 60 * 60 * 1000));
    //       var date = new Date(day.setHours(0,0,0,0));
          
    //       var group = null;
    //       //call setHours to take the time out of the comparison
    //       if(new Date().setHours(0,0,0,0) == date.setHours(0,0,0,0))
    //       {
    //           group = "Today";
    //       } else {
    //           group = date.getDate()+"/"+date.getMonth();
    //       }

    //       //Generate random from 3 to 12 events per day using the date above
    //       //This day
    //       var nEvents = Math.floor(Math.random() * 14) + 2;
    //       for (var j = 0; j < nEvents ; j ++) {
    //         console.log(date);
    //         var identifier = i+""+j;
    //         events.push({ id:identifier,  
    //                       time:"6:30 PM", 
    //                       group:group, 
    //                       name:"Event "+identifier,      
    //                       date:date, 
    //                       image_url:templates[Math.floor(Math.random() * templates.length) + 0], 
    //                       popular:true, 
    //                       artist:"John Williams", 
    //                       ticket:true, 
    //                       venue:"The West County Hotel", 
    //                       city:"London", 
    //                       nearby:true });
    // //   )
    //       }
    //     }
    // }

    /**
     * Find all Events
     * @return {[type]} [description]
     */
    Event.findAll = function(filter,location,isFavorite,filterDate) {
      var deferred = $q.defer();
      var filteredEvents = [];
      console.log(location);

      //Generate if they dont exist
      // if (events.length == 0) {
      //   Event.generate();
      // }



      for (e in events) {
        eventTarget = events[e];
        if (filterDate != null && filterDate != undefined)
        console.log(eventTarget.date.getTime()-filterDate.getTime());
        //Add to filtered array to return either if there are no filters or if the filter is contained within the name of the event
        if ((filter == null || filter == '' || eventTarget.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) &&
           (location == null || location == '' || location === undefined || eventTarget.city == location.name)  && (filterDate == null || filterDate == undefined || eventTarget.date.getTime()- filterDate.getTime() >= -1)) {
          console.log("passed ");
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

    prototype.getPic = function () {

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