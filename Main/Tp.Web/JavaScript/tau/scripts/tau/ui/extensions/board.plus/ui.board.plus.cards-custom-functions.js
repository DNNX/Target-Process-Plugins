define(["Underscore","tau/ui/extensions/board.plus/ui.board.plus.utils"],function(t,e){function a(t){return function(e,a){return t==e?void 0:a}}return{_:t,generateDataAttributes:function(t){var n=t.data.cardData,i={id:t.id,"entity-type":n.type.toLowerCase(),"ordering-value":t.orderingValue,"entity-id":n.id,"card-data":JSON.stringify(n),"data-item":JSON.stringify(t,a("data"))};return t._id&&(i._id=t._id),e.generateElementData(i)},generateCardId:t.bind(e.generateCardId,e),generateFinalStateClass:function(t){return t.isFinal?"tau-card-v2_final-state":""}}});