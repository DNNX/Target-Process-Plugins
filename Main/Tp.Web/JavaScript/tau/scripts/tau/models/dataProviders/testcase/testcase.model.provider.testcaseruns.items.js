define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/utils/utils.date","tau/configurator"],function(_,a,b,c){return a.extend({fetch:function(a){this._fetch("testCaseRuns","testCaseRun","priority",a)},_createDetailCommand:function(a){var b={};return b[a]=["id","passed","executed","comment","runDate",{testPlanRun:["id","name","tags","numericPriority",{testPlan:["id","name"]},{priority:["id","name","importance"]},{release:["id","name"]},{iteration:["id","name"]},{build:["id","name"]}]}],b},_convertData:function(a){return a=this._super(a),a=_.compact(a),_.sortBy(a,function(a){return a.runDate}).reverse()},_convertItem:function(a){var c=this;if(a.runDate==null)return null;if(a.passed===null)return null;var d=a.testPlanRun,e=d.testPlan,f={id:a.id,__type:a.__type,name:e.name,testplan:e,comment:a.comment,testplanrun:{id:d.id,__type:d.__type,name:d.name},release:d.release,iteration:d.iteration,build:d.build,passed:a.passed,runDate:b.format.datetime.short(b.convertToTimezone(a.runDate)),executed:a.executed,status:a.passed===!0?"Passed":a.passed===!1?"Failed":"Skipped"};return f}})})