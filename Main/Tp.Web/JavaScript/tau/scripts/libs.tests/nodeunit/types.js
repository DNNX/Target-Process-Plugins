/*!
     * Nodeunit
     * Copyright (c) 2010 Caolan McMahon
     * MIT Licensed
     *
     * THIS FILE SHOULD BE BROWSER-COMPATIBLE JS!
     * You can use @REMOVE_LINE_FOR_BROWSER to remove code from the browser build.
     * Only code on that line will be removed, it's mostly to avoid requiring code
     * that is node specific
     */

define(["libs/async/async","./assert"],function(async,assert){var exports={};exports.assertion=function(obj){return{method:obj.method||"",message:obj.message||obj.error&&obj.error.message||"",error:obj.error,passed:function(){return!this.error},failed:function(){return Boolean(this.error)}}},exports.assertionList=function(arr,duration){var that=arr||[];return that.failures=function(){var failures=0;for(var i=0;i<this.length;i+=1)this[i].failed()&&(failures+=1);return failures},that.passes=function(){return that.length-that.failures()},that.duration=duration||0,that};var assertWrapper=function(callback){return function(new_method,assert_method,arity){return function(){var message=arguments[arity-1],a=exports.assertion({method:new_method,message:message});try{assert[assert_method].apply(null,arguments)}catch(e){a.error=e}callback(a)}}};return exports.test=function(name,start,options,callback){var expecting,a_list=[],wrapAssert=assertWrapper(function(a){a_list.push(a),options.log&&async.nextTick(function(){options.log(a)})}),test={done:function(err){if(expecting!==undefined&&expecting!==a_list.length){var e=new Error("Expected "+expecting+" assertions, "+a_list.length+" ran"),a1=exports.assertion({method:"expect",error:e});a_list.push(a1),options.log&&async.nextTick(function(){options.log(a1)})}if(err){var a2=exports.assertion({error:err});a_list.push(a2),options.log&&async.nextTick(function(){options.log(a2)})}var end=(new Date).getTime();async.nextTick(function(){var assertion_list=exports.assertionList(a_list,end-start);options.testDone(name,assertion_list,options.moduleId),callback(null,a_list)})},ok:wrapAssert("ok","ok",2),same:wrapAssert("same","deepEqual",3),equals:wrapAssert("equals","equal",3),expect:function(num){expecting=num},_assertion_list:a_list,_data:{},set:function(name,val){this._data[name]=val},get:function(name,defVal){return this._data[name]},has:function(name){return!_.isUndefined(this._data[name])}};for(var k in assert)assert.hasOwnProperty(k)&&(test[k]=wrapAssert(k,k,assert[k].length));return test},exports.options=function(opt){var optionalCallback=function(name){opt[name]=opt[name]||function(){}};return optionalCallback("moduleStart"),optionalCallback("moduleDone"),optionalCallback("testStart"),optionalCallback("testDone"),opt},exports})