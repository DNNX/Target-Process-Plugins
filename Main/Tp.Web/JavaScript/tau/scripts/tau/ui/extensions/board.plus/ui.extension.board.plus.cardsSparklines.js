define(["tau/core/extension.base","tau/libs/sparklines/sparklines"],function(ExtensionBase,Sparklines){return ExtensionBase.extend({"bus overview.board.ready":function(evt,renderData){var $el=renderData.element,$sp=$el.find(".i-role-sparkline");this._draw($sp)},"bus overview.board.ready:last + operation.execute.done":function(evt,renderData,operation){var $el=renderData.element;this._drawToEmpty($el)},"bus overview.board.ready:last + view.card.batch.move.finished":function(evt,renderData,operation){var $el=renderData.element;this._drawToEmpty($el)},_drawToEmpty:function($el){var $sp=$el.find(".i-role-card .i-role-sparkline:empty");this._draw($sp)},_draw:function($placeholders){var conf={width:100,height:50,letterWidth:9,letterHeight:9},r=function(max){return 0|Math.random()*(max+1)};$placeholders.each(function(){var sparklines=new Sparklines(conf);sparklines.draw(null,this)})}})})