define(["Underscore","tau/core/model-base","tau/core/event"],function(a,b){var c=b.extend({category:"store operations","bus commitTransaction":function(a){var b=this.transaction||this.store;delete this.transaction,b.done(a.data)},"bus get":function(a){var b=this.transaction=this.transaction||this.store,c=a.data||{};this.transaction=b.get(c.type,c.query,c.callback)},destroy:function(){this._super.apply(this,arguments),this.destroy=function(){}}});return c})