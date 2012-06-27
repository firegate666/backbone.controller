/*globals Backbone, _, jQuery, console, window, AppModelExample1, AppViewExample1 */

(function(Backbone, _, $) {
    "use strict";

    window.AppControllerExample1 = function() {
        var _self = this,
            view, view2, view3, model;

        //Initialize
        (function() {
            //Model which is shared between 2 views
            model = new AppModelExample1({name : 'Anthony'});

            //View 1
            view = new AppViewExample1({
                el : $('#container'),
                model : model,
                controller : _self
            });
            view.render();

            //View 2
            view2 = new AppViewExample1({
                el : $('#container2'),
                model : new AppModelExample1({name : 'Lukasz'}),
                controller : _self
            });
            view2.render();

            //View 3
            view3 = new AppViewExample1({
                el : $('#container3'),
                model : model,
                controller : _self
            });
            view3.render();
        }());

        //Function which handles events triggered in the view
        this.handleEvent = function(event_name, model, data) {
            if (event_name === 'click:red') {
                model.setName('Red');
            }
            else if (event_name === 'click:blue') {
                model.setSurname(data.surname);
            }
        };
    };

}(Backbone, _, jQuery));