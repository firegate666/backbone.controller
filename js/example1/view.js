/*globals Backbone, _, jQuery, console, window */

(function(Backbone, _, $) {
    "use strict";

    window.AppViewExample1 = Backbone.View.extend({
        events : {
            'click .red' : 'handleRedClick',
            'click .blue' : 'handleBlueClick'
        },

        initialize : function() {
            this.template = $('#tpl_example').html();
            this.controller = this.options.controller;

            this.model.on('change:name', this.render, this);
            this.model.on('change:surname', this.render, this);
        },

        render : function() {
            this.$el.html(_.template(this.template, {user : this.model}));
        },

        handleRedClick : function() {
            this.controller.handleEvent('click:red', this.model);
        },

        handleBlueClick : function(e) {
            var $target = $(e.currentTarget);

            this.controller.handleEvent('click:blue', this.model, {surname : $target.attr('data-details')});
        }
    });
}(Backbone, _, jQuery));