/*globals Backbone, _, jQuery, console, AppControllerExample1, AppControllerExample2 */

(function(Backbone, _, $) {
    "use strict";

       var controller = new AppControllerExample1();

       var controller2 = new AppControllerExample2();

       /**
        * View
        * - have to be initialized with 'model' to be able to listen on some changes to rerender itself
        * - render(model) is not possible, because you have to listen on changes, you shouldn't set events every time you cal render()
        *
        * Controller
        * - All actions triggered by user goes trough controller which updates models
        *
        */

}(Backbone, _, jQuery));