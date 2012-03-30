var RecordingsScheduledView = Backbone.View.extend({
    template: 'RecordingsScheduledTemplate',
    className: 'span12 columns',

    initialize: function () {
        "use strict";

        var _this = this;

        $(this.el).html(_.template($('#' + this.template).html(), {}));

        this.collection = new TimerCollection();
        this.collection.fetch({success: function (collection) {
            collection.forEach(function (model) {
                try {
                    var view = new RecordingsScheduledItemView({
                        model: model
                    });


                    $('table > tbody', _this.el).append(view.render().el);
                } catch (e) {}
            });
        }})
    },

    render: function () {
        return this;
    }
});