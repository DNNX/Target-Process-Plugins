define(["tau/components/extensions/component.extension.base"],function(a){return a.extend({"bus afterRender":function(a){var b=a.data.element;b.find(".tau-list__table__cell:has(.tau-property_editable_true)").addClass("tau-list__table__cell_editable_true"),b.delegate(".tau-list__table__cell:has(.tau-property_editable_true)","click",function(a){$(a.currentTarget).hasClass("tau-property__value")==0&&(a.stopPropagation(),$(this).find(".tau-property__value").click())})}})})