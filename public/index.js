var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "shite bags!"
    };
  },
}

var router = new VueRouter({
  routes: [ 
            { path: "/", component: HomePage}, 
   ],
   scrollBehavior: function(to, from, savedPosition) {
     return { x: 0, y: 0 };
   }
});


var app = new Vue({
  el: "#vue-app",
  router: router,
  watch: {
    '$route': function() {
      window.location.reload();
    }
  }
});