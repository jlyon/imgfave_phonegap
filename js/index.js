var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        //device ready
        document.addEventListener('deviceready', this.deviceready, false);
        //internet offline
        document.addEventListener('offline', this.deviceoffline, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        window.location = 'http://staging.imgfave.com/albatrossdigital';
    },
    deviceoffline: function() {
        window.location = 'offline.html';
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

