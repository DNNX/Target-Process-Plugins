function d3_formatPrefix(a,b){return{scale:Math.pow(10,(8-b)*3),symbol:a}}var d3_formatPrefixes=["y","z","a","f","p","n","μ","m","","k","M","G","T","P","E","Z","Y"].map(d3_formatPrefix);d3.formatPrefix=function(a,b){var c=0;return a&&(a<0&&(a*=-1),b&&(a=d3.round(a,d3_format_precision(a,b))),c=1+Math.floor(1e-12+Math.log(a)/Math.LN10),c=Math.max(-24,Math.min(24,Math.floor((c<=0?c+1:c-1)/3)*3))),d3_formatPrefixes[8+c/3]}