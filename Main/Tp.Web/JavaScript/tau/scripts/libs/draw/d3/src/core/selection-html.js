d3_selectionPrototype.html=function(a){return arguments.length<1?this.node().innerHTML:this.each(typeof a=="function"?function(){var b=a.apply(this,arguments);this.innerHTML=b==null?"":b}:a==null?function(){this.innerHTML=""}:function(){this.innerHTML=a})}