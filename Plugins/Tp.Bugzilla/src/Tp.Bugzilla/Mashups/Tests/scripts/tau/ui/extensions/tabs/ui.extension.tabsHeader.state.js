define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/configurator"],function(a,b,c,d){var e=c.extend({"bus initialize":function(a){this.config=a.data},"bus afterRender":function(a){var b=this;b.$el=a.data.element,b.bus.getGlobalBus().on("routing.stateChanged",this.stateChangedListener,this)},stateChangedListener:function(a){var b=a.data;b.name=="tab"&&this._findAndSelect(b.value)},"bus tabSelected":function(a){var b=this.config.children[a.data.index];this.bus.getGlobalBus().fire("routing.setState",{tab:b.label})},_findAndSelect:function(c){if(!!this.$el){var d=this,e=this.$el.find(".tab-item:not(.tab-item-additional)"),f=0;a.forEach(e,function(a){var d=b(a);d.data("label")==c&&(f=d.data().index)}),e.filter(".selected").removeClass("selected"),e.eq(f).addClass("selected"),d.bus.fire("tabSelected",{index:f})}},destroy:function(){this.bus.getGlobalBus().removeListener("routing.stateChanged",this.stateChangedListener,this),this._super()}});return e})