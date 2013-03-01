function elements(a){var b=[],c=-1,d=a.length;while(++c<d)b.push(a[c]);return b}function metadata(a){var b={};return"x"in a&&(b.x=a.x),"y"in a&&(b.y=a.y),"dx"in a&&(b.dx=a.dx),b}require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.layout.histogram");suite.addBatch({histogram:{topic:function(){return d3.layout.histogram},"defaults to frequencies":function(a){var b=a();assert.deepEqual(b([0,0,0,1,2,2]).map(elements),[[0,0,0],[],[1],[2,2]])},"each bin contains the matching source elements":function(a){var b=a();assert.deepEqual(b([0,0,0,1,2,2]).map(elements),[[0,0,0],[],[1],[2,2]])},"each bin also has defined x, y and dx properties":function(a){var b=a();assert.deepEqual(b([0,0,0,1,2,2]).map(metadata),[{x:0,y:3,dx:.5},{x:.5,y:0,dx:.5},{x:1,y:1,dx:.5},{x:1.5,y:2,dx:.5}])},"can output frequencies":function(a){var b=a().frequency(!0);assert.deepEqual(b([0,0,0,1,2,2]).map(metadata),[{x:0,y:3,dx:.5},{x:.5,y:0,dx:.5},{x:1,y:1,dx:.5},{x:1.5,y:2,dx:.5}])},"can output probabilities":function(a){var b=a().frequency(!1);assert.deepEqual(b([0,0,0,1,2,2]).map(metadata),[{x:0,y:.5,dx:.5},{x:.5,y:0,dx:.5},{x:1,y:1/6,dx:.5},{x:1.5,y:2/6,dx:.5}])},"can specify number of bins":function(a){var b=a().bins(2);assert.deepEqual(b([0,0,0,1,2,2]).map(elements),[[0,0,0],[1,2,2]]),assert.deepEqual(b([0,0,0,1,2,2]).map(metadata),[{x:0,y:3,dx:1},{x:1,y:3,dx:1}])},"can specify bin thresholds":function(a){var b=a().bins([0,1,2,3]);assert.deepEqual(b([0,0,0,1,2,2]).map(elements),[[0,0,0],[1],[2,2]]),assert.deepEqual(b([0,0,0,1,2,2]).map(metadata),[{x:0,y:3,dx:1},{x:1,y:1,dx:1},{x:2,y:2,dx:1}])}}}),suite.export(module)