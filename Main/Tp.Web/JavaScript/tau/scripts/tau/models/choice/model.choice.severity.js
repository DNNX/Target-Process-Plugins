define(["Underscore","./model.choice.base"],function(e,t){return t.extend({propertyType:"severity",onInit:function(){this.store.get("bug",{id:this.config.context.entity.id,fields:[{severity:["id"]}]}).get(this.propertyType,{fields:["id","name","importance"]}).done({success:e.bind(this.onDataRetrieved,this)})},processData:function(t,i){var n=this.getCurrentEntityId(),r=[];e.each(i,function(e){e.id!==n&&r.push({id:e.id,name:e.name,importance:e.importance})}),r.sort(function(e,t){return e.importance-t.importance}),this.fire("dataBind",{states:r,completed:!0})}})});