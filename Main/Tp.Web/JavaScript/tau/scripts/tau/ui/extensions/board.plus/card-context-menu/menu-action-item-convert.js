define(["jQuery","Underscore","tau/components/component.finder.entity","tau/utils/utils.boardCard","tau/models/page.entity/entity.context.factory","tau/core/termProcessor","tau/ui/extensions/board.plus/card-context-menu/menu-action-item-base","tau/utils/utils.serverErrorTranslator"],function(e,t,n,o,i,r,a,u){var c=!1,s="entityTypesToConvertInto",d="i-role-card-context-menu-convert",l={entityTypes:["request","feature","bug","userstory","task"],allowedFor:function(e){return t.contains(this.entityTypes,e)}},f=function(e){return"Do you really want to convert "+e.srcEntityType.term+" to "+e.dstEntityType.term+"?"},b=function(e){var t=27===e.keyCode;return t},m={setup:function(n,o,i,r,a,u){var c=e("<div/>").append(o.element),s=e.Deferred(),d=c.append(['<div class="i-role-confirmation-content" style="display: none">',"<h3>"+f(u)+"</h3>",'<div class="tau-buttons">','<button type="button" class="tau-btn tau-primary i-role-actionok">Yes, I\'m sure</button>','<button type="button" class="tau-btn i-role-actioncancel">No</button>',"</div>","</div>"].join("")),l="hideSubmenu",m=r.tauBubble({alignTo:r,template:['<div class="tau-bubble">','<div class="tau-bubble__arrow" role="arrow"></div>','<div class="tau-bubble__inner tau-container" role="content"></div>',"</div>"].join(""),content:d,onPositionConfig:function(e){return e.my="center top",e.at="center bottom",e.collision="fit flip",e},onArrowPositionConfig:function(e,t){return"bottom"===t?(e.my="center bottom",e.at="center top"):(e.my="center top",e.at="center bottom"),e},onHide:function(){u.configurator.getKeyBoardManager().popHandler(),y(n,l)},onShow:function(){e.contextMenu.op.registerKeyHandlerFilter(b),u.configurator.getKeyBoardManager().pushHandler({});var t=m.tauBubble("widget");t.find(".tau-lookup-block").show(),t.find(".i-role-confirmation-content").hide(),t.removeClass("tau-warning-bubble"),t.find(".filter-field").focus(),t.unbind("click"),r.tauBubble("adjustPosition"),t.one("click",".i-role-actioncancel",function(){m.tauBubble("hide"),s.reject()}),t.one("click",".i-role-actionok",function(){m.tauBubble("hide");var e=a.data();s.resolve(e.entityId)})},zIndex:99999});return m.tauBubble("show"),i.fire("$outerBubbled.shown",m),n.push({hide:t.bind(m.tauBubble,m,"hide"),name:l}),s},run:function(t,o,i,r,a,u,c,d){var l=n.create({entityType:"userstory"}),f=this,b=e.Deferred();l.on("afterRender",function(n,m){var y=f.setup(t,m,l,i,o,a);e.when(b,y).done(function(e,t){a.configurator.getActionsService().convertGeneralToTask(t,e).done(function(e){r.$menu.trigger("contextmenu:hide"),c.notifyAboutSuccess(a.srcEntityType,a.dstEntityType,e.d);var t=o.data();delete t[s],u(t)}).fail(d)})}),l.on("entitySelected",function(e,t){var n=i.tauBubble("widget");n.find(".tau-lookup-block").hide(),n.find(".i-role-confirmation-content").show(),n.addClass("tau-warning-bubble"),i.tauBubble("adjustPosition"),b.resolve(t.entity.id)}),l.on("result.ready",function(){i.tauBubble("adjustPosition")}),l.initialize({context:a.appContext})}},y=function(e,n){if(null!==n){var o=t.findWhere(e,{name:n});if(o){var i=e.indexOf(o);e.splice(i,1)}}};return{createMenuItem:function(n){var b=new a(n),p=function(){var o="board.cell.convert.success",i=n.configurator,r=n.bus,a=e.Deferred();return n.configurator.getComponentBusRegistry().getByName("entityViewer").done(a.resolve),i.getTemplateFactory().register({name:o,engine:"jqote2",markup:["<h3>","Success!","</h3>","<p>","<%! this.srcType %> ","<%! this.name %> "," has been converted to ","<%! this.dstType %> ",'<a class="ui-quick-add-notification-link i-role-card-view tau-entity-name" href="<%= this.url %>">',"<%! this.name %>","</a>",". ","</p>"]}),{createNodeMessage:function(e,t,n){var r=i.getUrlBuilder().getNewViewUrl(n.ID,t.name,!0),a=i.getTemplateFactory().get(o).bind({},{srcType:e.term,dstType:t.term,name:n.Name,url:r});return a},notifyAboutSuccess:function(e,n,o){var i=this.createNodeMessage(e,n,o);a.then(function(e){i.on("click",".i-role-card-view",t.bind(function(t){t.preventDefault(),e.fire("cardDataToShow.ready",{entityId:o.ID,entityType:n.name.toLowerCase()}),this.fire("close")},r)),r.fire("notification",{$node:i})})}}}(),v=function(e){b.deleteCard(e,n.bus)},h=function(e){var t=JSON.parse(e.responseText)||{Message:"Server is not available"},o=u.translateServerError.call(this,t);n.bus.fire("error",o)},g=function(e,o,i,r){var a=i.$trigger.data(),u=a.entityId,c=r.$node,d="confirm";c.tauConfirm({showEvent:null,content:["<h3>"+f(o)+"</h3>"].join(""),className:"context-menu-do-not-hide i-role-taububble-ignore",callbacks:{success:t.bind(function(e){e.$menu.trigger("contextmenu:hide");var t=o.dstEntityType.id;o.configurator.getActionsService().convertGeneralToType(u,t).done(function(e){p.notifyAboutSuccess(o.srcEntityType,o.dstEntityType,e.d),delete a[s],v(a)}).fail(h)},n.bus,i)},onHide:function(){y(e,d)}}),t.defer(t.bind(c.tauConfirm,c),"show"),e.push({hide:t.bind(c.tauConfirm,c,"hide"),name:d})},T=function(e,t,n,o){m.run(e,n.$trigger,o.$node,n,t,v,p,h)},w=function(t){var o=t.data();return o.hasOwnProperty(s)?e.Deferred().resolve(o[s]):c?e.Deferred().resolve([]):n.configurator.getActionsService().getEntityTypesToConvert(o.entityId).done(function(e){t.data(s,e)}).fail(h)},C=[],k=function(){t.each(C,function(e){e.hide()}),C=[]},B=function(e){return"task"===e.name.toLowerCase()},x=function(a,u){var c=e("<div>Loading&hellip;</div>"),s="submenu",d={template:['<div class="tau-bubble-board">','<div class="tau-bubble-board__inner tau-container convert-menu-items" role="content" ></div>',"</div>"].join(""),showEvent:"",hideEvent:"",stackName:"context-menu-convert-action",content:c,onPositionConfig:function(e){return e.my="left center",e.at="right center",e.collision="flipfit",e},onHide:function(){y(C,s)}},l=u.$node.tauBubble(d);l.tauBubble("show"),C.push({hide:t.bind(l.tauBubble,l,"hide"),name:s});var f=a.$trigger,b=o.convertToEntity(f.data()),m=i.create(b,n.configurator),p=w(f);e.when(m,p).then(function(o,i){var u=f.data("entityType"),s=new r(o.getTerms()),d=s.getTerms(u),l={name:u,term:d.name};c.empty();var b=e("<div></div>");t.chain(i).sortBy(function(e){return B(e)?1:0}).each(function(i){var r=B(i)?i.term+"...":i.term,u=s.getTerms(i.name),c={srcEntityType:l,dstEntityType:i,appContext:o,configurator:n.configurator},d=B(i)?t.partial(T,C,c):t.partial(g,C,c),f=e('<div class="custom-context-menu-item" data='+i.term.toLowerCase()+"></div>"),m=e('<span><i class="tau-entity-icon tau-'+i.name.toLowerCase()+'">'+u.iconSmall+"</i>"+r+"</span>");f.append(m),f.click(function(t){d(a,{$node:e(this)}),t.stopPropagation()}),f.mouseenter(function(t){e(t.currentTarget).addClass("hover")}),f.mouseleave(function(t){e(t.currentTarget).removeClass("hover")}),b.append(f)}),c.append(b)})};return{name:"Convert to...",className:d,isDisabled:c,onHide:function(){k()},disabled:function(){var e=this,t=e.data("entityType");return!l.allowedFor(t)},itemClickCallback:function(e,t){return x(e,t),!1}}}}});