define(["tau/core/templates-factory"],function(t){return t.register({name:"relations.filter.project.option",engine:"jqote2",markup:['<div class="drop-down-option i-role-option" data-option-id="<%! this.value.id %>">','<i class="tau-icon tau-icon_type_color" style="background-color: <%! this.value.color || "transparent" %>"></i>','<span class="tau-bubble-txt"><%! this.value.name %></span>',"</div>"]})});