/*globals Backbone, _, jQuery, console */

(function(Backbone, _, $) {
    "use strict";

    //Base model
    window.AppModelExample2 = Backbone.Model.extend({
        defaults : {

        },

        collection_users : null,

        initialize : function() {
            this.collection_users = new AppCollectionUsers();

            this.collection_users.on('add', this.triggerAddUser, this);
        },

        triggerAddUser : function(model, collection) {
            this.trigger('add:user', model, collection);
        }
    });

}(Backbone, _, jQuery));