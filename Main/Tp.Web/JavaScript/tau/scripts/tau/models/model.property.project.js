define(["Underscore","tau/models/model.property"],function(_,ModelBase){return ModelBase.extend({getPropertyData:function(propertyField){this.store.get(this.getEntityTypeName(),{id:this.getEntityId(),fields:["id",{project:["id","name","color"]}]}).done({success:this.onEntityRetrieved,scope:this})},processProperty:function(property){var data={id:property[this.valueField],name:property[this.displayField]||"No Project",type:"project",color:property.color,url:"#project/"+property[this.valueField],isEditable:this.config.editable};this.fire("dataBind",data)}})})