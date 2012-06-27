/*globals Backbone, _, jQuery, console, window, AppModel, AppView */

(function(Backbone, _, $) {
    "use strict";

    window.AppController = function() {
        var _self = this,
            view, view2, view3, model;

        //Initialize
        (function() {
            //Model which is shared between 2 views
            model = new AppModel({name : 'Anthony'});

            //View 1
            view = new AppView({
                el : $('#container'),
                model : model,
                controller : _self
            });
            view.render();

            //View 2
            view2 = new AppView({
                el : $('#container2'),
                model : new AppModel({name : 'Lukasz'}),
                controller : _self
            });
            view2.render();

            //View 3
            view3 = new AppView({
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