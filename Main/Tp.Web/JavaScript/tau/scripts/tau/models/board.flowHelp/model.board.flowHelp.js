define(["Underscore","tau/core/extension.base"],function(_,BaseModel){return BaseModel.extend({"bus beforeInit":function(evt,initData){var configurator=initData.config.context.configurator;this.fire("configurator.ready",configurator),this.fire("dataBind",{})},"bus configurator.ready":function(evt,configurator){var boardName="Story Map Backlog";if($('.tau-boardselector__list .tau-boardselector__link:contains("'+boardName+'")').size()>0){console.log('Board "'+boardName+'" already exists');return}var request={$where:'publicData.name=="\\"'+boardName+'\\""',$fields:["key","publicData.name","publicData.definition"],$limit:{start:0,max:50}};configurator.getRestStorage().select("boardTemplates",request).done(_.bind(function(response){var boardTemplate=response.data[0];this.fire("boardTemplate.ready",boardTemplate)},this))},"bus configurator.ready:last + boardTemplate.ready":function(evt,configurator,boardTemplate){var factory=configurator.getBoardDefinitionFactory(),definition=_.extend(factory.createForLoggedUser(),boardTemplate.definition,{name:boardTemplate.name,isDraft:!1});factory.createBoard(definition).done(_.bind(function(definition){console.log("definition.saved",definition),this.fire("add.board",{board:{id:definition.id}})},this))}})})