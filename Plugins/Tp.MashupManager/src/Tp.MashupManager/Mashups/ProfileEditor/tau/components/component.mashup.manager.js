define([
    'tau/components/component.page.base'
    , 'tau/mashup.manager/views/view.mashup.manager'
], function (ComponentPageBase, ViewType) {
    return {
        create: function(componentContext) {
            var componentConfig = {
                name: "mashup manager page component",
                extensions: [],
                ViewType: ViewType
            };
            return ComponentPageBase.create(componentConfig, componentContext);
        }
    };
});
