var boid=function(){function a(){function r(b){var e=s(b);c(a),h[0]+=e[0],h[1]+=e[1];if(j){var f=d(j,a,k);h[0]+=f[0],h[1]+=f[1]}return i(h,m),a[0]+=h[0],a[1]+=h[1],a}function s(c){var d=[0,0],g=[0,0],h=[0,0],j=0,m=0,r=0,s=-1,u=c.length;while(++s<u){var v=c[s];if(v===this)continue;var w=v.position(),x=e(a,w);if(x>0){if(x<q){var y=b(f(a.slice(),w));d[0]+=y[0]/x,d[1]+=y[1]/x,j++}if(x<k){var z=v.velocity();g[0]+=z[0],g[1]+=z[1],m++,h[0]+=w[0],h[1]+=w[1],r++}}}return j>0&&(d[0]/=j,d[1]/=j),m>0&&(g[0]/=m,g[1]/=m),i(g,l),r>0?(h[0]/=r,h[1]/=r):h=a.slice(),h=t(h),[d[0]*n+g[0]*o+h[0]*p,d[1]*n+g[1]*o+h[1]*p]}function t(c){var d=f(c,a),e=g(d);if(e>0){b(d);var j=m*(e<100?e/100:1);d[0]*=j,d[1]*=j;var k=f(d,h);i(k,l)}else k=[0,0];return k}var a=[0,0],h=[0,0],j=null,k=50,l=.1,m=1,n=2,o=1,p=1,q=10;return r.position=function(b){return arguments.length?(a=b,r):a},r.velocity=function(a){return arguments.length?(h=a,r):h},r.gravityCenter=function(a){return arguments.length?(j=a,r):j},r.neighborRadius=function(a){return arguments.length?(k=a,r):k},r.maxForce=function(a){return arguments.length?(l=a,r):l},r.maxSpeed=function(a){return arguments.length?(m=a,r):m},r.separationWeight=function(a){return arguments.length?(n=a,r):n},r.alignmentWeight=function(a){return arguments.length?(o=a,r):o},r.cohesionWeight=function(a){return arguments.length?(p=a,r):p},r.desiredSeparation=function(a){return arguments.length?(q=a,r):q},r}function b(a){var b=g(a);return b>0&&(a[0]/=b,a[1]/=b),a}function c(a){a[0]>w?a[0]=0:a[0]<0&&(a[0]=w),a[1]>h?a[1]=0:a[1]<0&&(a[1]=h)}function d(a,c,d){if(a[0]!=null){var e=f(a.slice(),c),h=g(e)-10;if(h>0&&h<d*5)return b(e),e[0]/=h,e[1]/=h,e}return[0,0]}function e(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c>w/2&&(c=w-c),d>h/2&&(d=h-d),Math.sqrt(c*c+d*d)}function f(a,b){return a[0]-=b[0],a[1]-=b[1],a}function g(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])}function i(a,c){return g(a)>c&&(b(a),a[0]*=c,a[1]*=c),a}return a}()