var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',

    },
    {
      path: '/food/',
      url: 'food.html',
    },
    {
      path: '/food2/',
      componentUrl: 'food2.html',
    },

  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');  
var $$=Dom7;
if (window.localStorage.getItem("jwt") === null) {
  $$("#signin").removeClass("hidden");
  $$("signup").removeClass("hidden");
}
else {
  $$("#fav").removeClass("hidden");
  $$("logout").removeClass("hidden");
}


//app.request.get('https://fr.openfoodfacts.org/api/vo/produit/3029330003533.json', function (data) {
  //console.log(data);
//});