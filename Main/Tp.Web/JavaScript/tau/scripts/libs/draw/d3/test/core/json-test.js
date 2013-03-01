require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.json");suite.addBatch({json:{topic:function(){var a=this.callback;return d3.json("examples/data/sample.json",function(b){a(null,b)})},"invokes the callback with the loaded JSON":function(a){assert.deepEqual(a,[{Hello:42,World:'"fish"'}])},"overrides the mime type to application/json":function(a){assert.equal(XMLHttpRequest._last._info.mimeType,"application/json")},"":{topic:function(){var a=this.callback;return d3.json("//does/not/exist.json",function(b){a(null,b)})},"invokes the callback with null when an error occurs":function(a){assert.isNull(a)}}}}),suite.export(module)