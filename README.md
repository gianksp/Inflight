# Inflight Ticket Master Module #

This project is developed as a functionality extension for Inflight for Events and Ticket management.

![iOS Simulator Screen Shot 26 Mar 2015 15.13.17.png](https://bitbucket.org/repo/g9x5Ez/images/2915400066-iOS%20Simulator%20Screen%20Shot%2026%20Mar%202015%2015.13.17.png)

### How do I get set up? ###

* Clone the project
* Run ionic serve from terminal

### Extracting the module Ticket Master ###

Include the models, controllers and styles into the container View.

```
#!html
    <!-- TICKET MASTER MODULE FILES -->
    <link  href="ticket/style.css" rel="stylesheet">
    <script src="ticket/models.js"></script>
    <script src="ticket/controllers.js"></script>
```

Include in the main app the ticketMaster module 'inflightApp.ticket'

```
#!javascript

angular.module('starter', ['ionic','inflightApp.ticket'])
```

In the View container where the module needs to be displayed, include the list view

```
#!html
      <ion-content>

        <!-- VISUALS FOR THE TICKET MASTER MODULE -->
        <div ng-include src="'ticket/view/list.html'"></div>

      </ion-content>
```
