'use strict';

app.models.home = (function() {
    return {};
})();
app.models.home.list = (function() {

    var dataProvider = app.data.defaultprovider;

    var source = new kendo.data.DataSource({

        type: 'everlive',
        transport: {

            // Required by Backend Services
            typeName: 'Orders',
            dataProvider: dataProvider

        },

        schema: {
            model: {
                fields: {

                    Text: {
                        field: 'Text',
                        defaultValue: ''
                    },
                }

            }
        },

    });

    var viewModel = kendo.observable({
        dataSource: source,

        itemClick: function(e) {

        }
    });

    return {
        viewModel: viewModel
    };
})();