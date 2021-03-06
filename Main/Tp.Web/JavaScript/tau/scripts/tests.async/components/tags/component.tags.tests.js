define(["jQuery","tests.async/testkit/testkit.component","tau/components/component.tags","tests/common/remoteConstants"],function($,TestKit,Component,Constants){var testKit=new TestKit(Component);testKit.registerSetup("fixtures",function(test,next){var entityTypes={us:{id:Constants.EntityTypes.USERSTORY.id,name:"userStory"}},practices={planning:{id:Constants.Practices.PLANNING.id}},customFields={},processes={scrum:{name:"scream"+parseInt(Math.random()*1e11),practices:["planning"]}},projects={p_scrum:{name:"Project Scrum"+parseInt(Math.random()*1e11),process:"scrum"}},userStories={us1:{name:"US1",entityType:"us",project:"p_scrum",tags:"bizarre, porn, sex"},us2:{name:"US2",entityType:"us",project:"p_scrum"}},fixtures={practices:practices,entityTypes:entityTypes,processes:processes,projects:projects,customFields:customFields,userStories:userStories};test.set("fixtures",fixtures),next()}),testKit.registerSetup("component.initialize",function(test,next){var testData=test.get("data"),componentBus=test.get("componentBus");componentBus.initialize({context:{entity:testData.userStory.us1,configurator:test.get("configurator")}}),next()});var testcase={name:"component.tags"},checkTag=function($tag,val,test){test.equals($tag.find("span:first").text(),val,"render tag text"),test.equals($tag.find(".i-role-actiondelete").length,1,"render tag delete")};return testcase["should render valid markup, allow edit and remove"]=testKit.test(function(test){return testKit.flow(test,{"bus afterRender[0]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,3,"render tags"),checkTag($tags.eq(0),"bizarre",test),checkTag($tags.eq(1),"porn",test),checkTag($tags.eq(2),"sex",test);var $editorTrigger=$el.find(".i-role-control_show"),$editor=$el.find("form");test.equals($editorTrigger.length,1,"trigger to editor"),test.equals($editor.length,0,"do not show editor"),$editorTrigger.click();var $editor=$el.find("form");test.equals($editor.length,1,"show editor"),test.equals($editor.find(":text").length,1,"form has text"),test.equals($editor.find(":button").length,2,"form has buttons"),$tags.eq(1).find(".i-role-actiondelete").click()},"bus afterRender[1]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,2,"render tags"),checkTag($tags.eq(0),"bizarre",test),checkTag($tags.eq(1),"sex",test);var $editorTrigger=$el.find(".i-role-control_show"),$editor=$el.find("form");test.equals($editorTrigger.length,1,"trigger to editor"),test.equals($editor.length,0,"do not show editor"),$editorTrigger.click();var $editor=$el.find("form");test.equals($editor.length,1,"show editor");var $text=$editor.find(":text");test.equals($text.length,1,"test input"),$text.val("  amateur,    , sex, young, big boobs ");var $button=$editor.find(":submit");test.equals($button.length,1,"button to submuit"),$editor.submit()},"bus afterRender[2]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,5,"render tags, should append correct, do not duplicate"),test.get("real")?(checkTag($tags.eq(0),"amateur",test),checkTag($tags.eq(1),"big boobs",test),checkTag($tags.eq(2),"bizarre",test),checkTag($tags.eq(3),"sex",test),checkTag($tags.eq(4),"young",test)):(checkTag($tags.eq(0),"bizarre",test),checkTag($tags.eq(1),"sex",test),checkTag($tags.eq(2),"amateur",test),checkTag($tags.eq(3),"young",test),checkTag($tags.eq(4),"big boobs",test)),test.done()}})}),testcase["should process duplicateOf#NUM tag"]=testKit.test(function(test){return testKit.flow(test,{"bus afterRender[0]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,3,"render tags");var $editorTrigger=$el.find(".i-role-control_show"),$editor=$el.find("form");test.equals($editorTrigger.length,1,"trigger to editor"),test.equals($editor.length,0,"do not show editor"),$editorTrigger.click();var $editor=$el.find("form");test.equals($editor.length,1,"show editor");var $text=$editor.find(":text");test.equals($text.length,1,"test input"),$text.val("duplicateOf#666"),$editor.submit()},"bus afterRender[1]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,4,"render tags");var $bugTag=$tags.filter(":has(a)");test.equals($bugTag.length,1,"Duplicate bug tag");var $a=$bugTag.find("a");test.equals($a.length,1,"Duplicate bug tag"),test.equals($a.attr("href"),"#bug/666","Duplicate bug tag"),test.get("real")?test.get("configurator").getGlobalBus().fire("bugWasMarkedAsDuplicate",{bugId:test.get("data").userStory.us1.id}):test.done()},"bus afterRender[2]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,4,"react if global bus fire duplicate"),test.done()}})}),testcase["should allow edit using autocomplete"]=testKit.test(function(test){return testKit.flow(test,{"bus afterRender[0]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,3,"render tags");var $editorTrigger=$el.find(".i-role-control_show"),$editor=$el.find("form");test.equals($editorTrigger.length,1,"trigger to editor"),test.equals($editor.length,0,"do not show editor"),$editorTrigger.click();var $editor=$el.find("form");test.equals($editor.length,1,"show editor"),test.equals($editor.find(":text").length,1,"form has text"),test.equals($editor.find(":button").length,2,"form has buttons");var $text=$editor.find(":text"),$widget=$text.autocomplete("widget");test.equals($widget.length,1,"have autocomplete"),test.equals($widget.is("ul.ui-autocomplete"),!0,"have autocomplete"),test.done()}})}),testcase["should do not allow register duplicted"]=testKit.test(function(test){return testKit.flow(test,{"bus afterRender[0]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,3,"render tags"),checkTag($tags.eq(0),"bizarre",test),checkTag($tags.eq(1),"porn",test),checkTag($tags.eq(2),"sex",test);var $editorTrigger=$el.find(".i-role-control_show"),$editor=$el.find("form");test.equals($editorTrigger.length,1,"trigger to editor"),test.equals($editor.length,0,"do not show editor"),$editorTrigger.click();var $editor=$el.find("form");test.equals($editor.length,1,"show editor"),test.equals($editor.find(":text").length,1,"form has text"),test.equals($editor.find(":button").length,2,"form has buttons");var $text=$editor.find(":text");test.equals($text.length,1,"test input"),$text.val("Sex, HARDCORE, hardcore");var $button=$editor.find(":submit");test.equals($button.length,1,"button to submuit"),$editor.submit()},"bus afterRender[1]":function(evt,renderData){var $el=renderData.element,$tags=$el.find(".i-role-tag");test.equals($tags.length,4,"render tags, should append correct, do not duplicate"),test.get("real")&&(checkTag($tags.eq(0),"bizarre",test),checkTag($tags.eq(1),"HARDCORE",test),checkTag($tags.eq(2),"porn",test),checkTag($tags.eq(3),"sex",test)),test.done()}})}),testcase})