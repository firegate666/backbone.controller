/*globals Backbone, _, jQuery, console, window, AppModelExample2, AppViewExample2, AppCollectionUsers, AppModelRanking */

(function(Backbone, _, $) {
    "use strict";

    window.AppControllerExample2 = function() {
        var _self = this,
            view;

        //Initialize
        (function() {
            //View 1
            view = new AppViewExample2({
                el : $('#container4'),
                model : new AppModelExample2(),
                controller : _self
            });
            view.render();
        }());

        //Function which handles events triggered in the view
        this.handleEvent = function(event_name, model, data) {
            model.collection_users.add({name : 'Lukasz'});
        };
    };

}(Backbone, _, jQuery));