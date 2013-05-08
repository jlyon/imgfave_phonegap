var ref;
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        //device ready
        document.addEventListener('deviceready', this.deviceReady, false);
        //internet offline
        document.addEventListener('offline', this.deviceOffline, false);
    },
    deviceReady: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        document.addEventListener("online", toggleCon, false);
        document.addEventListener("offline", toggleCon, false);

        if(navigator.network.connection.type == Connection.NONE) {
          navigator.notification.alert("Sorry, you are offline.", function() {}, "Offline!");
          window.location = 'offline.html';
        } else {
          navigator.notification.alert("Woot, you are back online.", function() {}, "Online!");
          ref = window.open('http://staging.imgfave.com', '_blank', 'location=yes');
        }
    },
    report: function(id) {
        /*
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
        */
    }

};

function toggleCon(e) {
  console.log("Called",e.type);
  if(e.type == "offline") {
    navigator.notification.alert("Sorry, you are offline.", function() {}, "Offline!");
    window.location = 'offline.html';
  } else {
    navigator.notification.alert("Woot, you are back online.", function() {}, "Online!");
    ref = window.open('http://staging.imgfave.com', '_blank', 'location=yes');
  }
}

function checkConnection() {
   var networkState = navigator.network.connection.type;
   var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.NONE]     = 'No network connection';

   return networkState;

}

/*$('#aboutPage').live('pagecreate',function(event){
  alert('This page was just enhanced by jQuery Mobile!');
});*/



