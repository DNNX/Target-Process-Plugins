define(["tau/nls/translator","tau/core/templates-factory","tau/extensions/extension.underscore"],function(T,templates,_){var config={name:"report.type",engine:"jqote2",markup:_.flatten(['    <span class="tau-chart-entities _entities">',"<% _.forEach(this, function(item){ %>","			<label>",'				<input type="checkbox" name="entities" value="<%= item.id %>" <% if (item.default) { %> checked="checked" <% } %> style="position: absolute; left: -99999px;" />','               <button type="button" class="tau-btn tau-<%= item.id %><% if (item.default) { %> tau-checked<% } %>"><%= item.name %></button>',"            </label>","<% }); %>","    </span>"]),dependencies:[]};return templates.register(config)})