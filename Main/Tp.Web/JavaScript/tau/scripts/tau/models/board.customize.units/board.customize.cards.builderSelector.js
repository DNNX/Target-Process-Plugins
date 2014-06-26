define(["Underscore","tau/core/class","tau/models/board.customize.units/const.entity.types","tau/models/board.customize.units/const.entity.types.names"],function(t,e,a,r){return e.extend({defaultSettings:{entity:"id",general:"name, type:entityType.name, projectId:project.id",user:'fullName as name,type:"user",avatarUri',assigneduser:'fullName as name,type:"user",avatarUri',project:"color",assignable:"entityState.isFinal, teamId:team.id",team:"icon",testcaserun:'name,type:"testcaserun"',impediment:"entityState.isFinal",projectmember:['type:"projectmember"',"name:user.fullName","avatarUri:user.avatarUri","color:project.color","project:{project.abbreviation,project.name}","projectId:project.id"].join(",")},createItemData:function(t,e){var a=e.unit.getModelByTypeAndSize(t);return e.unit.id+":{"+a+"}"},build:function(e,a){var r=this.createItemData.bind(this,e),n=t.flatten([this.cardsSettings[e]||'cardData:""',t.chain(a).flatten().map(r).compact().value()],!1);return"{"+t.compact(n).join(",")+"}"},init:function(){this.cardsSettings=this.generateCardsData()},generateCardsData:function(){return t.chain(r).map(function(e){var r=a.getParents(e),n=t.reduce(r,function(e,a){var r=this.defaultSettings[a];return r?t.compact([e,r]).join(","):e}.bind(this),"");return n?(n="cardData:{"+n+"}",n=t.extend(n,{type:e})):n='cardData:""',[e,n]}.bind(this)).object().value()},parseSelector:function(t){var e,a=0,r=t.indexOf("cardData:"),n="";if(-1!==r){for(var i=r,c=t.length;c>i;i++)if("{"==t[i])a+=1;else if("}"==t[i]&&(a-=1,0===a)){e=i+1;break}n=t.substring(r,e)}return t=t.replace(n,""),t=t.replace("{,","{"),{cardData:n,withoutCardData:t}},buildSelectorWithoutCardData:function(t){return this.parseSelector(t).withoutCardData}})});