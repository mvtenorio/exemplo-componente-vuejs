var Vue = require('vue');
var alert = require('./alert.vue');

new Vue({

  el: '#app',

  components: {
    myAlert: alert
  }
});
