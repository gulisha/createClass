define(function(){function a(a,b){var c;if("object"==typeof b){for(var d in b)"prototype"!==d&&(a[d]=b[d]);c=a}else if("object"==typeof a)if(a.constructor===Array)c=a.slice();else{c={};for(var e in a)"prototype"!==e&&(c[e]=a[e])}else c=a;return c}function b(b){function c(){function c(a,b){var c=this,d={};if(g&&"object"==typeof g||(g={}),"object"==typeof a?d=a:"string"==typeof a&&(d[a]=b),d)for(var e in d)d.hasOwnProperty(e)&&("function"==typeof c.trigger&&c.trigger("setAttrBefore",e,d[e]),g[e]=d[e],"function"==typeof c.trigger&&c.trigger("setAttr",e,d[e]));return c}function d(b){var c;if(0===arguments.length)c=a(g);else{if("string"!=typeof b)throw new Error("方法 getAttr() 的参数 attrName 必须为字符串类型");"object"==typeof g&&(c=g[b])}return c}var f=this,g={},h=[];if(e&&e.constructor===Array)for(var i,j=0,k=e.length;k>j;j++)i=e[j],"function"==typeof i&&(i.apply(f,arguments),h.push(i));"function"==typeof f.getAttr&&(g=a(g,f.getAttr()||{})),g=a(g,b.attrs||{}),f.setAttr=c,f.getAttr=d,f.setAttr("__superClasses",h),"function"==typeof b.init&&b.init.apply(f,arguments)}b=b||{};var d=b.methods,e=b.superClass;if("function"==typeof e&&(e=[e]),e&&e.constructor===Array){for(var f,g,h,i=0,j=e.length;j>i;i++)if(f=e[i],"function"==typeof f)if(g=function(){},g.prototype=f.prototype,h=new g,0===i)c.prototype=h;else for(var k in h)c.prototype[k]=h[k];"function"==typeof e[0]&&(c.prototype._superClass=e[0])}else c.prototype._superClass=Object;if("undefined"==typeof c.prototype.instanceOf&&(c.prototype.instanceOf=function(a){var b=this,c=b instanceof a,d=this.getAttr("__superClasses");if(!c&&d)for(var e=0,f=d.length;f>e;e++)if(a===d[e])return!0;return c}),d&&"object"==typeof d)for(var l in d)"function"==typeof d[l]&&d.hasOwnProperty(l)&&(c.prototype[l]=d[l]);return c}return b});