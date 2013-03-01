define(["libs/d3/d3","tp/date.utils"],function(d3,du){function Scales(){}return Scales.prototype={get:function(data,settings,size){function rangeofx(){return d3.extent(data,function(d){return d.x})}function rangeofy(){return[0,d3.max(data,function(d){return d.y})]}function extendDateRange(range,minRangeSize){return[du.addDays(range[0],-minRangeSize/2),du.addDays(range[1],minRangeSize/2)]}function extendNumRange(range,minRangeSize){var delta=d3.max([range[1]*1.1-range[0],minRangeSize]);return[range[0],range[0]+delta]}function getLabel(label,units){return label?units?label+", "+units:label:units}var xAxis=d3.time.scale().domain(extendDateRange(rangeofx(),2)).range([size.margin,size.width-size.margin]);xAxis.label=getLabel(settings.mapping.x.label,settings.mapping.x.units);var yAxis=d3.scale.linear().domain(extendNumRange(rangeofy(),2)).range([size.height-size.margin,size.margin]).nice();yAxis.label=getLabel(settings.mapping.y.label,settings.mapping.y.units);var strokeAxis=d3.scale.ordinal().domain(["UserStory","Bug","Task","Feature","Request"]).range(["userStory","bug","task","feature","request"]);return{x:xAxis,y:yAxis,stroke:strokeAxis,axisMargin:20}}},Scales})