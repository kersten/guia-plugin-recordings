var RecordingsView = Backbone.View.extend({
    template: "RecordingsTemplate",

    events: {
        'click .tabs > li': 'switchSection',
        'shown a[data-toggle="tab"]': 'switchSection'
    },

    initialize: function () {
        "use strict";

        $(this.el).html(_.template($('#' + this.template).html(), {}));

        if (this.options.section === undefined) {
            this.options.section = 'Recordings';
        }

        this.loadSection();
    },

    switchSection: function (e) {
        "use strict";

        this.options.section = $(e.target).data('view');

        $('#' + $(e.relatedTarget).data('view')).removeClass('active');

        this.loadSection();
    },

    loadSection: function () {
        "use strict";

        $('a[data-view="' + this.options.section + '"]', this.el).parent().addClass('active');
        $('#' + this.options.section, this.el).addClass('active');

        if (this.subView !== undefined) {
            this.subView.remove();
        }

        this.subView = new window['Recordings' + this.options.section + 'View']({});
        $('#' + this.options.section, this.el).html(this.subView.render().el);

        Backbone.history.navigate('!/Recordings/' + this.options.section);
    },

    render: function () {
        "use strict";

        return this;
    }
});