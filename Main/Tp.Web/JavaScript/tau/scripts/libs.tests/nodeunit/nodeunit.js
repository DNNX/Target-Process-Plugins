define(["libs/async/async","./core","./assert","./types","./reporters/browser","./extensions/assert-expressions"],function(async,core,assert,types,reporter,assertExpressions){var nodeunit=core;return nodeunit.assert=assert,nodeunit.reporter=reporter,nodeunit.run=reporter(nodeunit).run,nodeunit.assert.equalByExpression=function(actual,expected,message){assertExpressions.assert(actual,expected)||nodeunit.assert._fail(actual,expected,message,"==")},nodeunit})