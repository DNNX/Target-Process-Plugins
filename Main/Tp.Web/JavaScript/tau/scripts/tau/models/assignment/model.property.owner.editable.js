define(["Underscore","tau/models/assignment/model.property.assignUser.editable.base"],function(a,b){return b.extend({assignTo:function(a){var b={type:this.config.context.entity.entityType.name,$set:{owner:{id:a}},$include:[{owner:["id","firstName","lastName"]}]};this.fire("save",b)}})})