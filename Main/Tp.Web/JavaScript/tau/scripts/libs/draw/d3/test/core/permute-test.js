require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.permute");suite.addBatch({permute:{topic:function(){return d3.permute},"permutes according to the specified index":function(a){assert.deepEqual(a([3,4,5],[2,1,0]),[5,4,3]),assert.deepEqual(a([3,4,5],[2,0,1]),[5,3,4]),assert.deepEqual(a([3,4,5],[0,1,2]),[3,4,5])},"does not modify the input array":function(a){var b=[3,4,5];a(b,[2,1,0]),assert.deepEqual(b,[3,4,5])},"can duplicate input values":function(a){assert.deepEqual(a([3,4,5],[0,1,0]),[3,4,3]),assert.deepEqual(a([3,4,5],[2,2,2]),[5,5,5]),assert.deepEqual(a([3,4,5],[0,1,1]),[3,4,4])},"can return more elements":function(a){assert.deepEqual(a([3,4,5],[0,0,1,2]),[3,3,4,5]),assert.deepEqual(a([3,4,5],[0,1,1,1]),[3,4,4,4])},"can return fewer elements":function(a){assert.deepEqual(a([3,4,5],[0]),[3]),assert.deepEqual(a([3,4,5],[1,2]),[4,5]),assert.deepEqual(a([3,4,5],[]),[])},"can return undefined elements":function(a){var b=a([3,4,5],[10]);assert.equal(b.length,1),assert.isUndefined(b[0]);var c=a([3,4,5],[-1]);assert.equal(c.length,1),assert.isUndefined(c[0]);var d=a([3,4,5],[0,-1]);assert.equal(d.length,2),assert.equal(d[0],3),assert.isUndefined(d[1])}}}),suite.export(module)