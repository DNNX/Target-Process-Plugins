define(["tau/core/templates-factory","tau/ui/templates/finder/ui.template.finder.resultList.row"],function(templates){var config={name:"resultList",markup:['<div role="list" class="ui-resultList i-filter-list">','<div class="tau-no-results">${emptyMessage}</div>','<table cellspacing="0" cellpadding="4" class="tau-result-list">',"<tbody>",'{{tmpl(items) "resultList-row"}}',"</tbody>","</table>",'<div class="tau-resultList-load-more">loading items...</div>',"</div>"],dependencies:["resultList-row"]};return templates.register(config)})