define(["Underscore","jQuery","./widget.select","./template.widget.project.output","./template.widget.project.option"],function(t,e,i,o,r){return i.extend({init:function(t,e,i){this._super(t,e,i),this.options.collectionName="project",this.options.templates.output=o,this.options.templates.option=r,this.options.fields=["id","name","color","abbreviation","isActive"],this.options.query={isActive:1},this.options.orderBy="name",this.zero={id:-1,color:"",abbreviation:"No project",name:"No project"}},getCurrentOption:function(t){return{value:t.id,label:t}},getCurrentData:function(){var i=t.bind(this._super,this);if(this.value==this.zero.id){var o=e.Deferred();return o.resolve(this.zero).promise()}return i()},getEditOptions:function(e){return t.map([this.zero].concat(e),function(t){return{value:t.id,label:t}})}})});