/*globals Backbone, _, jQuery, console, window */

(function(Backbone, _, $) {
    "use strict";

    window.AppViewExample2 = Backbone.View.extend({
        events : {
            'click .add' : 'handleAddEvent'
        },

        initialize : function() {
            this.template = $('#tpl_example2').html();
            this.controller = this.options.controller;

            this.model.on('add:user', this.render, this);
        },

        render : function() {
            this.$el.html(_.template(this.template, {users : this.model.collection_users.toJSON()}));
        },

        handleAddEvent : function() {
            this.controller.handleEvent('add:user', this.model);
        }
    });
}(Backbone, _, jQuery));