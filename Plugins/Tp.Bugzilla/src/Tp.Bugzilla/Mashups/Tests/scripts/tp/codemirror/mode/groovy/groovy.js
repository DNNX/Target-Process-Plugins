CodeMirror.defineMode("groovy",function(a,b){function o(a){var b=a.context.type;if(b==")"||b=="]"||b=="}")a.indented=a.context.indented;return a.context=a.context.prev}function n(a,b,c){return a.context=new m(a.indented,b,c,null,a.context)}function m(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function l(a){return!a||a=="operator"||a=="->"||/[\.\[\{\(,;:]/.test(a)||a=="newstatement"||a=="keyword"||a=="proplabel"}function k(a,b){var c=!1,d;while(d=a.next()){if(d=="/"&&c){b.tokenize.pop();break}c=d=="*"}return"comment"}function j(){function b(b,c){if(b.peek()=="}"){a--;if(a==0){c.tokenize.pop();return c.tokenize[c.tokenize.length-1](b,c)}}else b.peek()=="{"&&a++;return h(b,c)}var a=1;b.isBase=!0;return b}function i(a,b,c){function e(b,c){var e=!1,f,g=!d;while((f=b.next())!=null){if(f==a&&!e){if(!d)break;if(b.match(a+a)){g=!0;break}}if(a=='"'&&f=="$"&&!e&&b.eat("{")){c.tokenize.push(j());return"string"}e=!e&&f=="\\"}g&&c.tokenize.pop();return"string"}var d=!1;if(a!="/"&&b.eat(a))if(b.eat(a))d=!0;else return"string";c.tokenize.push(e);return e(b,c)}function h(a,b){var c=a.next();if(c=='"'||c=="'")return i(c,a,b);if(/[\[\]{}\(\),;\:\.]/.test(c)){g=c;return null}if(/\d/.test(c)){a.eatWhile(/[\w\.]/),a.eat(/eE/)&&(a.eat(/+\-/),a.eatWhile(/\d/));return"number"}if(c=="/"){if(a.eat("*")){b.tokenize.push(k);return k(a,b)}if(a.eat("/")){a.skipToEnd();return"comment"}if(l(b.lastToken))return i(c,a,b)}if(c=="-"&&a.eat(">")){g="->";return null}if(/[+\-*&%=<>!?|\/~]/.test(c)){a.eatWhile(/[+\-*&%=<>|~]/);return"operator"}a.eatWhile(/[\w\$_]/);if(c=="@")return"meta";if(b.lastToken==".")return"property";if(a.eat(":")){g="proplabel";return"property"}var h=a.current();if(f.propertyIsEnumerable(h))return"atom";if(d.propertyIsEnumerable(h)){e.propertyIsEnumerable(h)&&(g="newstatement");return"keyword"}return"word"}function c(a){var b={},c=a.split(" ");for(var d=0;d<c.length;++d)b[c[d]]=!0;return b}var d=c("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws transient try void volatile while"),e=c("catch class do else finally for if switch try while enum interface def"),f=c("null true false this"),g;h.isBase=!0;return{startState:function(b){return{tokenize:[h],context:new m((b||0)-a.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(a,b){var c=b.context;a.sol()&&(c.align==null&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0,c.type=="statement"&&!l(b.lastToken)&&(o(b),c=b.context));if(a.eatSpace())return null;g=null;var d=b.tokenize[b.tokenize.length-1](a,b);if(d=="comment")return d;c.align==null&&(c.align=!0);if(g!=";"&&g!=":"||c.type!="statement")if(g=="->"&&c.type=="statement"&&c.prev.type=="}")o(b),b.context.align=!1;else if(g=="{")n(b,a.column(),"}");else if(g=="[")n(b,a.column(),"]");else if(g=="(")n(b,a.column(),")");else if(g=="}"){while(c.type=="statement")c=o(b);c.type=="}"&&(c=o(b));while(c.type=="statement")c=o(b)}else g==c.type?o(b):(c.type=="}"||c.type=="top"||c.type=="statement"&&g=="newstatement")&&n(b,a.column(),"statement");else o(b);b.startOfLine=!1,b.lastToken=g||d;return d},indent:function(b,c){if(!b.tokenize[b.tokenize.length-1].isBase)return 0;var d=c&&c.charAt(0),e=b.context;e.type=="statement"&&!l(b.lastToken)&&(e=e.prev);var f=d==e.type;return e.type=="statement"?e.indented+(d=="{"?0:a.indentUnit):e.align?e.column+(f?0:1):e.indented+(f?0:a.indentUnit)},electricChars:"{}"}}),CodeMirror.defineMIME("text/x-groovy","groovy")