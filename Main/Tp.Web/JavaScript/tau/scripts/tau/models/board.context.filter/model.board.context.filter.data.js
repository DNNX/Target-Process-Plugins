define(["Underscore","tau/core/extension.base","tau/configurations/factory.container.config"],function(_,BaseModel,configFactory){var list={};return BaseModel.extend({"bus beforeInit":function(evt){var configurator=evt.data.config.context.configurator;this.fire("configurator.ready",configurator),this.fire("acidStore.ready",configurator.getAppStateStore()),this.fire("store.ready",configurator.getStore()),this.fire("contextStore.ready",configurator.getApplicationContextService()),this.fire("fire.ready",_.bind(this.fire,this))},"bus configurator.ready:last + acid.ready":function(evt,configurator,acid){configurator.getStateManager().unbind(list);var self=this;configurator.getStateManager().bind({paramId:"appConfig",fieldName:"acid",listener:list,callback:function(res){var newAcid=res.value;acid!=newAcid&&self.fire("refresh")}})},"bus fire.ready:last + acidStore.ready":function(evt,fire,acidStore){acidStore.get({fields:["acid"],callback:function(result){fire("acid.ready",result.acid)}}),acidStore.unbind({listener:this}),acidStore.bind({fields:["acid"],listener:this,callback:function(result){fire("refresh")}})},"bus fire.ready:last + store.ready":function(evt,fire,store){store.get("project",{fields:["id","name","color","isActive"]}).done(function(result){var projects=_.filter(result[0].data,function(v){return v.isActive});fire("projects.ready",projects)}),store.get("team",{fields:["id","name","icon"]}).done(function(result){var teams=result[0].data;fire("teams.ready",teams)}),store.get("process",{fields:["id","name","isDefault"]}).done(function(result){fire("processes.ready",_.sortBy(result[0].data,function(v){return v.name.toLowerCase()}))})},"bus fire.ready:last + contextStore.ready":function(evt,fire,contextStore){contextStore.removeAllListeners(this),contextStore.on("refreshChoice.after",function(){fire("refresh")},this)},"bus fire.ready:last + contextStore.ready:last + acid.ready":function(evt,fire,contextStore,acid){contextStore.getApplicationContext({acid:acid},{success:function(context){fire("context.ready",context)},failure:function(){fire("context.ready",{appContext:{teamContext:{},projectContext:{}}})}})},"bus fire.ready:last + contextStore.ready:last + model.setFilter":function(evt,fire,contextStore,state){var selectedProjectsIds=state.selectedProjectsIds,selectedTeamsIds=state.selectedTeamsIds;if(this._selectedCache&&_.isEqual(this._selectedCache.teams,selectedTeamsIds)&&_.isEqual(this._selectedCache.projects,selectedProjectsIds))return;var config={projectIds:selectedProjectsIds.length?_.map(selectedProjectsIds,function(id){return id==-1?"null":id}):"*",teamIds:selectedTeamsIds.length?_.map(selectedTeamsIds,function(id){return id==-1?"null":id}):"*"};contextStore.getApplicationContext(config,{success:function(context){fire("context.changed",context),fire("application.context.data.changed",{teams:selectedTeamsIds,projects:selectedProjectsIds})}})},"bus acidStore.ready:last + context.changed":function(evt,acidStore,context){acidStore.set({set:{acid:context.acid}})},"bus fire.ready:last + processes.ready + teams.ready + projects.ready + context.ready":function(evt,fire,processes,teams,projects,context){var teamContext=context.appContext.teamContext;teamContext.items=context.selectedTeams;var processedTeams=this._process(teams,teamContext,"No team","Any Team"),projectContext=context.appContext.projectContext;projectContext.items=context.selectedProjects;var processedProjects=this._process(projects,projectContext,"No project","Any Project"),data={acid:context.acid,teams:processedTeams.list,selectedTeams:processedTeams.selection,selectedTeamsCount:processedTeams.selectionLength,projects:processedProjects.list,selectedProjects:processedProjects.selection,selectedProjectsCount:processedProjects.selectionLength,icons:configFactory.getConfigByType("team").prototype.icons,colors:configFactory.getConfigByType("project").prototype.colors,processes:processes};this._selectedCache={projects:_.pluck(processedProjects.selection,"id"),teams:_.pluck(processedTeams.selection,"id")},fire("dataBind",data),fire("application.context.data",data)},_process:function(items,data,noItemLabel,anyItemLabel){var sortBySelectionAndName=function(item){return(item.id==-1?"0":"1")+(item.selected?"0_":"1_")+item.name.toUpperCase()},noItem={id:-1,name:noItemLabel||"No item"},anyItem={id:-2,name:anyItemLabel||"Any item"},list=items;list.unshift(noItem);var selected=data.items||[];data.no&&selected.unshift(noItem);var selection=[],hasAny=!1;if(selected.length==0)selection=[anyItem],hasAny=!0;else if(selected.length==list.length&&list.length==1)selection=[noItem];else if(selected.length>=list.length)selection=[anyItem],hasAny=!0;else{var intersection=_.filter(list,function(item){return _.indexOf(_.pluck(selected,"id"),item.id)>=0});intersection.length==0?selection=[noItem]:selection=intersection}selection=_.sortBy(selection,sortBySelectionAndName);var selectionIds=_.pluck(selection,"id");list=_.chain(list).map(function(item){return{id:item.id,name:item.name,icon:item.icon,color:item.color,selected:!hasAny&&_.indexOf(selectionIds,item.id)>=0,isSupportView:item.id>0}}).sortBy(sortBySelectionAndName).value();var selectionLength=selection.length,selectionShow=selection.slice(0,2);return{list:list,selection:selection,selectionLength:selectionLength,selectionShow:selectionShow}}})})