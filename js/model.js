/*globals Backbone, _, jQuery, console */

(function(Backbone, _, $) {
    "use strict";

    window.AppModel = Backbone.Model.extend({
        defaults : {
            name : '',
            surname : 'Doe'
        },

        setName : function(value) {
            this.set('name', value);
        },

        getName : function() {
            return this.get('name');
        },

        setSurname : function(value) {
            this.set('surname', value);
        },

        getSurname : function() {
            return this.get('surname');
        }
    });

}(Backbone, _, jQuery));