define(["Underscore","tau/components/component.container","tau/ui/extensions/board.container/ui.extension.board.container.events","tau/ui/extensions/board.plus.container/ui.extension.board.plus.container.view"],function(e,n,t,o){return{create:function(a){a.queuedBus=!1;var r={extensions:[t],ViewType:o,template:{engine:"jqote2",name:"board.plus.container",markup:'<div class="tau-board-body-wrapper"></div>'}};return n.create(e.extend(a,r))}}});