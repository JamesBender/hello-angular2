(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<span>hello world</span>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
