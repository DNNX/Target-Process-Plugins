define(["tau/core/extension.base"],function(e){return e.extend({"bus beforeInit":function(e,n){n.config.context.configurator.getStore().get("relationTypes",{relationType:["id","name"]}).done({success:_.bind(function(e){this.fire("dataBind",{mainEntity:n.config.context.entity,dependencyType:n.config.dependencyType,relationTypes:e[0].data,relationTypeId:e[0].data[0].id})},this)})}})});