define(["require","Underscore","react","tau/core/injector"],function(e){var r=e("Underscore"),t=e("react"),n=e("tau/core/injector");return Object.create(t,{defineClass:{value:function(e,a){return n.defineModule(e,function(){var e=a.apply(null,r.toArray(arguments));return t.createClass(e)})},writable:!1},resolveClass:{value:function(e,r,t){return e.createModule(r)(t)},writable:!1}})});