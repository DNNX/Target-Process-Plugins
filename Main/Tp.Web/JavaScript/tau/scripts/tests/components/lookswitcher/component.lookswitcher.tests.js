define(["tau/configurator","tests/common/service.mock","tau/components/component.lookswitcher","tests/components/common/common.setup","tests/components/component.specs","tests/common/applicationContext","tests/common/testData.Generator","tau/components/component.impedimentListPanel","tau/components/component.impedimentList","tau/components/component.label.impedimentsCount"],function(a,b,c,d,e,f,g){var h=function(){var h=new g;h.initDefaultData();var i=h.getData(),j=i.selectByType("userStory")[3];a.setGlobalSettingsService({getGlobalSettings:function(a){a.success.call(a.scope,{IsEmailNotificationsEnabled:!1,loveNewLook:!0})}});var k={manualContext:!0,context:{entityType:{name:j.__type},id:j.id}},l=new f(k.context);i.push(l),l.processes[0].customFields=[];var m=d.create("[component.lookswitcher]",i,c,{}),n=function(){var c=this.service=new b;a.setService(c)},o=[{name:"element should be rendered to provided element",preSetup:n,test:function(){ok(this.$el.find(".ui-lookswitcher-love-link").length>0,"element is rendered")}}];e.create(m,k).viewShouldFollowBasicComponentLifeCycle(n).viewShouldPassTests(o).done()};return{run:h}})