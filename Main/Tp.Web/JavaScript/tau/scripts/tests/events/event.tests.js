define(["Underscore","tau/core/bus","tests/components/utils/dispatcher"],function(_,a,b){var c=function(){module("[event]",{setup:function(){},teardown:function(){}}),test("pair of events",function(){var c=new a,d=b.createDispatcher(c,["e1","e2","e1+e2"]);c.fire("e1",{}),c.fire("e2",{}),c.fire("e1",{}),ok(d.args.e1),ok(d.args.e2),ok(d.args["e1+e2"]),equals(d.counts["e1+e2"],1),equals(d.counts.e1,2),equals(d.counts.e2,1)}),test("pair of events last one handled by default",function(){var c=new a,d=b.createDispatcher(c,["e1","e2","e1+e2"]);c.fire("e1",{a:1}),c.fire("e1",{a:2}),c.fire("e2",{}),ok(d.args.e1),equals(d.args.e1.a,2),ok(d.args.e2),ok(d.args["e1+e2"])}),test("pair of events:last",function(){var c=new a,d=b.createDispatcher(c,["e1","e2","e1:last+e2"]);c.fire("e1",{f:1}),c.fire("e2",{a:1}),equals(d.args["e1:last+e2"].e2.data.a,1),equals(d.counts["e1:last+e2"],1),c.fire("e2",{a:2}),equals(d.counts.e1,1),equals(d.counts.e2,2),equals(d.counts["e1:last+e2"],2),equals(d.args["e1:last+e2"].e2.data.a,2)})};return{run:c}})