define(["Underscore"],function(e){return{createDeleteAjaxCommandConfig:function(n){return n=n||{},e.extend({},n,{type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",beforeSend:e.wrap(n.beforeSend,function(e,n){n.setRequestHeader("X-HTTP-Method-Override","DELETE"),e&&e(n)})})},convertJsonNode:function(n){n=n||{};var t={};return e.each(n,function(e,n){t[n]=JSON.stringify(e)}),t}}});