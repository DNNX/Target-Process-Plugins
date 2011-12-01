define(["Underscore","tau/configurations/converters/converter.print"],function(a,b){var c=function(){module("[converter.print] tests",{setup:function(){this.config={children:[{type:"tabs"},{type:"tabs",tabs:[{type:"description"}]},{type:"tabs",tabs:[{header:[{type:"label",text:"Test tab"}],items:[{type:"description"}]},{header:[{type:"label",text:"Test tab 2"}],items:[{type:"description"}]}]},{type:"collapsible"},{type:"collapsible",items:[]},{type:"collapsible",header:[{type:"label",text:"Test collapsible"}],items:[{type:"description"}]},{type:"label",items:[]}]}},teardown:function(){delete this.config}}),test("should disable extensions",function(){var c=b.convert(this.config),d=c.children;ok(a.indexOf(d[0].disabledExtensionCategories,"edit")>=0,"edit extensions are disabled")}),test("should convert type tabs to container",function(){var a=b.convert(this.config),c=a.children,d=c[0].children;equals(c[0].type,"container","Tabs type converts to container"),equals(d.length,0,"Tab has children"),d=c[1].children,equals(d.length,1,"Tab has children"),d=c[2].children,equals(d.length,2,"Tab has children"),equals(d[0].children[0].text,"Test tab","Tab header converts to label"),equals(d[0].children[1].type,"description","Tab items convert to children")}),test("should convert type collapsible to container",function(){var a=b.convert(this.config),c=a.children;equals(c[3].type,"container","Collapsible type converts to container"),equals(c[4].children.length,0,"Collapsible type has children"),equals(c[5].children.length,2,"Collapsible type has children"),equals(c[5].children[0].text,"Test collapsible","Collapsible header converts to label")}),test("should save other types",function(){var a=b.convert(this.config),c=a.children;equals(c[6].type,"label","Save other types")})};return{run:c}})