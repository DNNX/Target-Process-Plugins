define(["Underscore","tp/mashups"],function(r,n){var o=n.extend({init:function(){this._super(),this._prepareErrorHandling()},loadMashup:function(n,o,e){return require([n],r.bind(function(){o&&this.onMashupsLoaded(function(){return!0}).done(r.bind(o,e||this))},this)),this},unloadMashup:function(r){return require.undef(r),this},loadModule:function(n,o,e){return require([n],function(n){o&&r.bind(o,e||this,n)()}),this},unloadModule:function(r){return require.undef(r),this},stubModule:function(r,n){return require.undef(r),define(r,n),this},_prepareErrorHandling:function(){window.jsErrors=[],window.onerror=function(r){window.jsErrors.push(r)};var r=console.error;console.error=function(n){window&&window.onerror&&window.onerror(n),r.apply(console,Array.prototype.slice.apply(arguments))},require.onError=function(r){console.error(r)}}});return o});