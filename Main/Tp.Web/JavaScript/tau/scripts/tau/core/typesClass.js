define(["Underscore","tau/core/class"],function(a,b){return b.extend({init:function(){this._dictionary={}},registerType:function(b,c){c[b.name]=b,b.aliases=b.aliases||[],b.refs=b.refs||{},a.each(b.aliases,function(a){c[a]=c[a.toLowerCase()]=b})},register:function(a){var b=this,c=b._dictionary;this.registerType(a,c)},findByKeyword:function(a){return this._dictionary[a]||null},getDictionary:function(){return this._dictionary}})})