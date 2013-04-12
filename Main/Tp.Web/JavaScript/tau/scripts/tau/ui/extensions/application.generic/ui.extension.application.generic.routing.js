define(["Underscore","tau/core/extension.base"],function(_,ExtensionBase){return ExtensionBase.extend({"bus configurator.ready + beforeInit":function(evt,configurator,initConfig){var routesConfig=initConfig.config.routes,routes=_.map(routesConfig,_.bind(function(route){return this.processRoute(route,configurator)},this));this.currentValue=!0,this.fire("routes.ready",routes)},"bus configurator.ready + options.ready + routes.ready + afterRender":function(evt,configurator,options,routes){this.bindToRoutes(configurator,options,routes),options.routing.executeOnStart&&configurator.getHashService().triggerChange(),this.fire("routes.bound",routes)},"bus configurator.ready + destroy":function(evt,configurator){this.currentValue=null,configurator.getHashService().removeAllListeners(this)},"bus application.exit":function(){this.currentValue=null},bindToRoutes:function(configurator,options,routes){var applicationId=options.applicationId,hashService=configurator.getHashService(),onHashChangeHandler=_.bind(function(){var value=applicationId?hashService.getHashParam(applicationId):hashService.getHash().split("&")[0];if(this.currentValue===value)return;this.currentValue=value;var matched=_.find(routes,function(route){return route.pattern.test(value)});if(matched){var args=matched.pattern.exec(value).slice(1);matched.callback.apply(null,args),configurator.getRouting().setReferer(configurator.service("navigator").getCurrent())}else this.fire("error","URL is not found")},this);hashService.on("changed",_.bind(onHashChangeHandler,this),this)},processRoute:function(routeConfig,configurator){return{pattern:_.isString(routeConfig.pattern)?new RegExp(routeConfig.pattern):routeConfig.pattern,callback:this.createPatternCallback(routeConfig,configurator)}},createPatternCallback:function(routeConfig,configurator){var fnResolve=_.bind(function(requestArgs){this.fire("application.navigate",{host:routeConfig.host,type:routeConfig.type,requestArgs:requestArgs})},this),fire=_.bind(this.fire,this);return function(){routeConfig.adapter?routeConfig.adapter.apply({fire:fire,configurator:configurator,resolve:fnResolve},arguments):fnResolve()}}})})