define(["jQuery","tau/core/extension.base"],function($,ExtensionBase){return ExtensionBase.extend({"bus $el.ready":function(evt,$el){var self=this,$dndItems=$el.find(".i-role-item"),$dndGroups=$el.find(".i-role-list"),$groups=$el.find(".tau-boardselector__group"),$moreItems=$el.find(".i-role-moreitems").detach(),$showMore=$el.find(".i-role-action-showmore");$dndGroups.delegate(".i-role-item a","click",function(e){$(this).closest(".tau-boardselector__group_mode_configure").length&&e.preventDefault()}),$showMore.bind("click",function(e){$(this).closest(".tau-boardselector__group_mode_configure").length&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())});var _setLayout=_.bind(this._setLayout,this,$moreItems);_setLayout(),$showMore.tauBubble({alignTo:$el,content:$moreItems,showEvent:"click",onShow:function(){_setLayout(),$el.addClass("tau-boardselector_expanded_true"),$(window).bind("resize.boardselector",_.throttle(_setLayout,200))},onHide:function(){$el.removeClass("tau-boardselector_expanded_true"),$(window).unbind("resize.boardselector")},onPositionConfig:function(config){config.my="left top",config.at="right top",config.offset="0 0"},template:['<div class="tau-bubble-board tau-boardselector__bubble ">','<div class="tau-bubble-board__inner tau-container"  role="content"></div>',"</div>"].join("")}),this.fire("$bubbled.ready",$showMore);var oldDocument,oldEsc;$("body").find(".tau-boardselector__overlay").remove(),$moreItems.delegate(".i-role-action-configure","click",_.bind(function(){$groups.addClass("tau-boardselector__group_mode_configure"),$("body").append('<div class="ui-popup-overlay tau-boardselector__overlay"></div>'),$el.addClass("tau-boardselector_mode_configure"),this._setHeight($groups,"edit"),$el.tauSortable({groups:$dndGroups,items:$dndItems,zIndex:300,distance:5,appendTo:$el.parent(),processToGroup:function($item,$fromGroup,$toGroup){$item.appendTo($toGroup)},stop:_setLayout}),oldDocument=$showMore.data("tauBubble")._onDocumentClick,oldEsc=$showMore.data("tauBubble")._onKeyDown,$showMore.data("tauBubble")._onDocumentClick=function(){},$showMore.data("tauBubble")._onKeyDown=function(){}},this)),$moreItems.delegate(".i-role-action-done, .i-role-action-collapse","click",_.bind(function(){$el.hasClass("tau-boardselector_mode_configure")&&($groups.removeClass("tau-boardselector__group_mode_configure"),$("body").find(".tau-boardselector__overlay").remove(),$el.removeClass("tau-boardselector_mode_configure"),$showMore.data("tauBubble")._onDocumentClick=oldDocument,$showMore.data("tauBubble")._onKeyDown=oldEsc,self.fire("edit.done"),$el.tauSortable("destroy"),this._setHeight($groups,"redraw")),$showMore.tauBubble("hide")},this)),$el.bind("tausortablestop",function(event,ui){self.fire("sort.stopped",[event,ui]),self.fire("dragndrop.completed")})},"bus configurator.ready:last + $groups.ready:last + storageConfig.ready:last + edit.done":function(e,configurator,$groups,storageConfig){var self=this,storage=configurator.getRestStorage(),requests=[],pr=1,$visibleGroup=$groups.eq(0);$visibleGroup.find(".i-role-item").each(function(){var $item=$(this),data={id:$item.attr("data-id"),menuIsVisible:1,menuNumericPriority:pr++};requests.push(_.bind(function(data,next){storage.data(storageConfig.groupName,data.id,{scope:"Public",userData:{menuIsVisible:data.menuIsVisible,menuNumericPriority:data.menuNumericPriority}}).done(function(){next(!1)})},this,data))});var $moreGroup=$groups.eq(1);$moreGroup.find(".i-role-item").each(function(){var $item=$(this),data={id:$item.attr("data-id"),menuIsVisible:0,menuNumericPriority:pr++};requests.push(_.bind(function(data,next){storage.data(storageConfig.groupName,data.id,{scope:"Public",userData:{menuIsVisible:data.menuIsVisible,menuNumericPriority:data.menuNumericPriority}}).done(function(){next(!1)})},this,data))}),_.series(requests,function(){self.fire("edit.completed")})},_setLayout:function($group){var cols=0,rows=0,len=$group.find(".i-role-item").length;if(len){var h=$(window).height(),w=$(window).width();rows=Math.round(h/47/3),cols=Math.floor(len/rows);var maxCols=Math.floor(w/220)-1,maxColsByRows=Math.floor(len/5);$group.find(".i-role-list").parent().css("maxWidth",(Math.min(maxColsByRows,maxCols,cols)||1)*13.75+"rem")}},_setHeight:function($groups,action){var OFFSET_BOTTOM=99,strategy={redraw:{"max-height":$(window).height()-$groups[0].getBoundingClientRect().top-OFFSET_BOTTOM,height:""},edit:{height:$(window).height()-$groups[0].getBoundingClientRect().top,"max-height":""}};$groups.eq(0).find(".i-role-list").css(strategy[action]||{})},"bus $el.ready + view.dom.ready:last":function(e,$el){this._setHeight($el,"redraw"),$(window).off("resize.boardadd"),$(window).on("resize.boardadd",_.bind(function(){this._setHeight($el,"redraw")},this))}})})