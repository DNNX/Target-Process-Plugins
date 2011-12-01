define(["Underscore","tau/configurations/baseAssignable.container.config","tau/models/model.extensions","tau/components/extensions/requestsList/extensions.requestList.labelRefresher","tau/components/extensions/progressBar/extensions.progressBar.refresher","tau/components/extensions/entity/extension.requestList.remover"],function(a,b,c,d,e,f){var g=b.extend({getAdditionalInfoAliases:function(){return["Owner","Priority","Severity","Release","Iteration","User Story","CreationDate","CompletionDate"]},getActionsAliases:function(){return["Add Time","Add Impediment","Attach to Request","Convert","Find Duplicate","-----","Old View","Old Edit","Print","-----","Delete"]},getPanels:function(a){var e=b.prototype.getPanels.call(this,a);e.push({type:"collapsible",collapsed:!0,header:[{type:"label",text:this.getNames("request"),getBadgeText:c.calculateRequestsCount,badgeFieldName:"count",extensions:[d]}],items:[{type:"requestList"}],extensions:[f]});return e}});return g})