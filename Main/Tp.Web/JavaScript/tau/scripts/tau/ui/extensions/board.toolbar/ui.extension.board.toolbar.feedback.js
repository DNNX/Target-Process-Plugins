define(["jQuery","Underscore","tau/components/extensions/component.extension.base","tau/utils/utils.serverErrorTranslator","tau/ui/templates/board.toolbar/ui.template.board.toolbar.feedback"],function(e,t,n,i,a){return n.extend({TEXT_TEMPLATE:["Like","----------------------","","","Miss","----------------------","","","Improve (your ideas)","----------------------","",""],FEATURE_TITLE:{timeline:"timelines",newlist:"new lists","default":"this feature"},"bus configurator.ready:last + dataBind + afterRender":function(e,t,n,i){var r=i.element.find(".i-role-feedback-btn");if(r.length){var s=this._getFeatureTitle(n.viewMode),o=a.render({title:s,text:this.TEXT_TEMPLATE.join("\n")}).on("click",".i-role-actionok",function(){var e=o.find("textarea");r.tauBubble("hide"),t.getActionsService().sendFeedback(s,e.val()).then(function(t){return e.val(""),t}).done(this._handleSuccess.bind(this)).fail(this._handleError.bind(this))}.bind(this));r.tauBubble({content:o,zIndex:2,onShow:function(){r.addClass("tau-checked"),o.find("textarea").focus()},onHide:function(){r.removeClass("tau-checked")}})}},_handleSuccess:function(){this.fire("notification",{message:"Feedback sent.",delay:500})},_handleError:function(e){var t=JSON.parse(e.responseText)||{Message:"Server is not available"},n=i.translateServerError.call(this,t);this.fire("error",n)},_getFeatureTitle:function(e){return this.FEATURE_TITLE[e]||this.FEATURE_TITLE["default"]}})});