var RecordingsRecordingsView = Backbone.View.extend({
    template: 'RecordingsRecordingsTemplate',
    className: 'span12',

    initialize: function () {
        "use strict";

        var _this = this;

        $(this.el).html(_.template($('#' + this.template).html(), {}));

        this.collection = new RecordingCollection();

        this.collection.fetch({success: function (collection) {
            collection.forEach(function (model) {
                var view = new RecordingsRecordItemView({
                    model: model
                });

                $('.thumbnails', _this.el).append(view.render().el);
            });
        }});
    },

    render: function () {
        "use strict";

        return this;
    }
});