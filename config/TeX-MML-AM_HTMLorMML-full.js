/*
 *  /MathJax/config/TeX-MML-AM_HTMLorMML-full.js
 *  
 *  Copyright (c) 2010-2013 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Config({delayJaxRegistration: true});

MathJax.Ajax.Preloading(
  "[MathJax]/jax/input/TeX/config.js",
  "[MathJax]/jax/input/MathML/config.js",
  "[MathJax]/jax/input/AsciiMath/config.js",
  "[MathJax]/jax/output/HTML-CSS/config.js",
  "[MathJax]/jax/output/NativeMML/config.js",
  "[MathJax]/config/MMLorHTML.js",
  "[MathJax]/extensions/tex2jax.js",
  "[MathJax]/extensions/mml2jax.js",
  "[MathJax]/extensions/asciimath2jax.js",
  "[MathJax]/extensions/MathEvents.js",
  "[MathJax]/extensions/MathZoom.js",
  "[MathJax]/extensions/MathMenu.js",
  "[MathJax]/jax/element/mml/jax.js",
  "[MathJax]/extensions/toMathML.js",
  "[MathJax]/extensions/TeX/noErrors.js",
  "[MathJax]/extensions/TeX/noUndefined.js",
  "[MathJax]/jax/input/TeX/jax.js",
  "[MathJax]/extensions/TeX/AMSmath.js",
  "[MathJax]/extensions/TeX/AMSsymbols.js",
  "[MathJax]/jax/input/MathML/jax.js",
  "[MathJax]/jax/input/AsciiMath/jax.js",
  "[MathJax]/jax/output/NativeMML/jax.js",
  "[MathJax]/jax/output/HTML-CSS/jax.js",
  "[MathJax]/jax/output/HTML-CSS/autoload/mtable.js"
);

MathJax.Hub.Config({"v1.0-compatible":false});

MathJax.InputJax.TeX=MathJax.InputJax({id:"TeX",version:"2.2.1",directory:MathJax.InputJax.directory+"/TeX",extensionDir:MathJax.InputJax.extensionDir+"/TeX",config:{TagSide:"right",TagIndent:"0.8em",MultLineWidth:"85%",equationNumbers:{autoNumber:"none",formatNumber:function(a){return a},formatTag:function(a){return"("+a+")"},formatID:function(a){return"mjx-eqn-"+String(a).replace(/[:"'<>&]/g,"")},formatURL:function(a){return"#"+escape(a)},useLabelIds:true}}});MathJax.InputJax.TeX.Register("math/tex");MathJax.InputJax.TeX.loadComplete("config.js");

MathJax.InputJax.MathML=MathJax.InputJax({id:"MathML",version:"2.2",directory:MathJax.InputJax.directory+"/MathML",extensionDir:MathJax.InputJax.extensionDir+"/MathML",entityDir:MathJax.InputJax.directory+"/MathML/entities",config:{useMathMLspacing:false}});MathJax.InputJax.MathML.Register("math/mml");MathJax.InputJax.MathML.loadComplete("config.js");

MathJax.InputJax.AsciiMath=MathJax.InputJax({id:"AsciiMath",version:"2.2",directory:MathJax.InputJax.directory+"/AsciiMath",extensionDir:MathJax.InputJax.extensionDir+"/AsciiMath",config:{displaystyle:false,decimalsign:"."}});MathJax.InputJax.AsciiMath.Register("math/asciimath");MathJax.InputJax.AsciiMath.loadComplete("config.js");

MathJax.OutputJax["HTML-CSS"]=MathJax.OutputJax({id:"HTML-CSS",version:"2.2",directory:MathJax.OutputJax.directory+"/HTML-CSS",extensionDir:MathJax.OutputJax.extensionDir+"/HTML-CSS",autoloadDir:MathJax.OutputJax.directory+"/HTML-CSS/autoload",fontDir:MathJax.OutputJax.directory+"/HTML-CSS/fonts",webfontDir:MathJax.OutputJax.fontDir+"/HTML-CSS",config:{scale:100,minScaleAdjust:50,availableFonts:["STIX","TeX"],preferredFont:"TeX",webFont:"TeX",imageFont:"TeX",undefinedFamily:"STIXGeneral,'Arial Unicode MS',serif",mtextFontInherit:false,EqnChunk:(MathJax.Hub.Browser.isMobile?10:50),EqnChunkFactor:1.5,EqnChunkDelay:100,linebreaks:{automatic:false,width:"container"},styles:{".MathJax_Display":{"text-align":"center",margin:"1em 0em"},".MathJax .merror":{"background-color":"#FFFF88",color:"#CC0000",border:"1px solid #CC0000",padding:"1px 3px","font-style":"normal","font-size":"90%"},"#MathJax_Tooltip":{"background-color":"InfoBackground",color:"InfoText",border:"1px solid black","box-shadow":"2px 2px 5px #AAAAAA","-webkit-box-shadow":"2px 2px 5px #AAAAAA","-moz-box-shadow":"2px 2px 5px #AAAAAA","-khtml-box-shadow":"2px 2px 5px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",padding:"3px 4px","z-index":401}}}});if(MathJax.Hub.Browser.isMSIE&&document.documentMode>=9){delete MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter}if(!MathJax.Hub.config.delayJaxRegistration){MathJax.OutputJax["HTML-CSS"].Register("jax/mml")}MathJax.Hub.Register.StartupHook("End Config",[function(b,c){var a=b.Insert({minBrowserVersion:{Firefox:3,Opera:9.52,MSIE:6,Chrome:0.3,Safari:2,Konqueror:4},inlineMathDelimiters:["$","$"],displayMathDelimiters:["$$","$$"],multilineDisplay:true,minBrowserTranslate:function(f){var e=b.getJaxFor(f),k=["[Math]"],j;var h=document.createElement("span",{className:"MathJax_Preview"});if(e.inputJax==="TeX"){if(e.root.Get("displaystyle")){j=a.displayMathDelimiters;k=[j[0]+e.originalText+j[1]];if(a.multilineDisplay){k=k[0].split(/\n/)}}else{j=a.inlineMathDelimiters;k=[j[0]+e.originalText.replace(/^\s+/,"").replace(/\s+$/,"")+j[1]]}}for(var g=0,d=k.length;g<d;g++){h.appendChild(document.createTextNode(k[g]));if(g<d-1){h.appendChild(document.createElement("br"))}}f.parentNode.insertBefore(h,f)}},(b.config["HTML-CSS"]||{}));if(b.Browser.version!=="0.0"&&!b.Browser.versionAtLeast(a.minBrowserVersion[b.Browser]||0)){c.Translate=a.minBrowserTranslate;b.Config({showProcessingMessages:false});MathJax.Message.Set(["MathJaxNotSupported","Your browser does not support MathJax"],null,4000);b.Startup.signal.Post("MathJax not supported")}},MathJax.Hub,MathJax.OutputJax["HTML-CSS"]]);MathJax.OutputJax["HTML-CSS"].loadComplete("config.js");

MathJax.OutputJax.NativeMML=MathJax.OutputJax({id:"NativeMML",version:"2.2",directory:MathJax.OutputJax.directory+"/NativeMML",extensionDir:MathJax.OutputJax.extensionDir+"/NativeMML",config:{scale:100,minScaleAdjust:50,styles:{"DIV.MathJax_MathML":{"text-align":"center",margin:".75em 0px"}}}});if(!MathJax.Hub.config.delayJaxRegistration){MathJax.OutputJax.NativeMML.Register("jax/mml")}MathJax.OutputJax.NativeMML.loadComplete("config.js");

(function(c,g){var f="2.2";var a=MathJax.Hub.CombineConfig("MMLorHTML",{prefer:{MSIE:"MML",Firefox:"HTML",Opera:"HTML",Chrome:"HTML",Safari:"HTML",other:"HTML"}});var e={Firefox:3,Opera:9.52,MSIE:6,Chrome:0.3,Safari:2,Konqueror:4};var b=(g.version==="0.0"||g.versionAtLeast(e[g]||0));var d=(g.isFirefox&&g.versionAtLeast("1.5"))||(g.isMSIE&&g.hasMathPlayer)||(g.isSafari&&g.versionAtLeast("5.0"))||(g.isOpera&&g.versionAtLeast("9.52"));c.Register.StartupHook("End Config",function(){var h=(a.prefer&&typeof(a.prefer)==="object"?a.prefer[MathJax.Hub.Browser]||a.prefer.other||"HTML":a.prefer);if(b||d){if(d&&(h==="MML"||!b)){if(MathJax.OutputJax.NativeMML){MathJax.OutputJax.NativeMML.Register("jax/mml")}else{c.config.jax.unshift("output/NativeMML")}c.Startup.signal.Post("NativeMML output selected")}else{if(MathJax.OutputJax["HTML-CSS"]){MathJax.OutputJax["HTML-CSS"].Register("jax/mml")}else{c.config.jax.unshift("output/HTML-CSS")}c.Startup.signal.Post("HTML-CSS output selected")}}else{c.PreProcess.disabled=true;c.prepareScripts.disabled=true;MathJax.Message.Set(["MathJaxNotSupported","Your browser does not support MathJax"],null,4000);c.Startup.signal.Post("MathJax not supported")}})})(MathJax.Hub,MathJax.Hub.Browser);MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");

MathJax.Extension.tex2jax={version:"2.2",config:{inlineMath:[["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],balanceBraces:true,skipTags:["script","noscript","style","textarea","pre","code"],ignoreClass:"tex2jax_ignore",processClass:"tex2jax_process",processEscapes:false,processEnvironments:true,processRefs:true,preview:"TeX"},PreProcess:function(a){if(!this.configured){this.config=MathJax.Hub.CombineConfig("tex2jax",this.config);if(this.config.Augment){MathJax.Hub.Insert(this,this.config.Augment)}if(typeof(this.config.previewTeX)!=="undefined"&&!this.config.previewTeX){this.config.preview="none"}this.configured=true}if(typeof(a)==="string"){a=document.getElementById(a)}if(!a){a=document.body}if(this.createPatterns()){this.scanElement(a,a.nextSibling)}},createPatterns:function(){var d=[],e=[],c,a,b=this.config;this.match={};for(c=0,a=b.inlineMath.length;c<a;c++){d.push(this.patternQuote(b.inlineMath[c][0]));this.match[b.inlineMath[c][0]]={mode:"",end:b.inlineMath[c][1],pattern:this.endPattern(b.inlineMath[c][1])}}for(c=0,a=b.displayMath.length;c<a;c++){d.push(this.patternQuote(b.displayMath[c][0]));this.match[b.displayMath[c][0]]={mode:"; mode=display",end:b.displayMath[c][1],pattern:this.endPattern(b.displayMath[c][1])}}if(d.length){e.push(d.sort(this.sortLength).join("|"))}if(b.processEnvironments){e.push("\\\\begin\\{([^}]*)\\}")}if(b.processEscapes){e.push("\\\\*\\\\\\$")}if(b.processRefs){e.push("\\\\(eq)?ref\\{[^}]*\\}")}this.start=new RegExp(e.join("|"),"g");this.skipTags=new RegExp("^("+b.skipTags.join("|")+")$","i");var f=[];if(MathJax.Hub.config.preRemoveClass){f.push(MathJax.Hub.config.preRemoveClass)}if(b.ignoreClass){f.push(b.ignoreClass)}this.ignoreClass=(f.length?new RegExp("(^| )("+f.join("|")+")( |$)"):/^$/);this.processClass=new RegExp("(^| )("+b.processClass+")( |$)");return(e.length>0)},patternQuote:function(a){return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(a){return new RegExp(this.patternQuote(a)+"|\\\\.|[{}]","g")},sortLength:function(d,c){if(d.length!==c.length){return c.length-d.length}return(d==c?0:(d<c?-1:1))},scanElement:function(c,b,g){var a,e,d,f;while(c&&c!=b){if(c.nodeName.toLowerCase()==="#text"){if(!g){c=this.scanText(c)}}else{a=(typeof(c.className)==="undefined"?"":c.className);e=(typeof(c.tagName)==="undefined"?"":c.tagName);if(typeof(a)!=="string"){a=String(a)}f=this.processClass.exec(a);if(c.firstChild&&!a.match(/(^| )MathJax/)&&(f||!this.skipTags.exec(e))){d=(g||this.ignoreClass.exec(a))&&!f;this.scanElement(c.firstChild,b,d)}}if(c){c=c.nextSibling}}},scanText:function(b){if(b.nodeValue.replace(/\s+/,"")==""){return b}var a,c;this.search={start:true};this.pattern=this.start;while(b){this.pattern.lastIndex=0;while(b&&b.nodeName.toLowerCase()==="#text"&&(a=this.pattern.exec(b.nodeValue))){if(this.search.start){b=this.startMatch(a,b)}else{b=this.endMatch(a,b)}}if(this.search.matched){b=this.encloseMath(b)}if(b){do{c=b;b=b.nextSibling}while(b&&(b.nodeName.toLowerCase()==="br"||b.nodeName.toLowerCase()==="#comment"));if(!b||b.nodeName!=="#text"){return(this.search.close?this.prevEndMatch():c)}}}return b},startMatch:function(a,b){var f=this.match[a[0]];if(f!=null){this.search={end:f.end,mode:f.mode,pcount:0,open:b,olen:a[0].length,opos:this.pattern.lastIndex-a[0].length};this.switchPattern(f.pattern)}else{if(a[0].substr(0,6)==="\\begin"){this.search={end:"\\end{"+a[1]+"}",mode:"; mode=display",pcount:0,open:b,olen:0,opos:this.pattern.lastIndex-a[0].length,isBeginEnd:true};this.switchPattern(this.endPattern(this.search.end))}else{if(a[0].substr(0,4)==="\\ref"||a[0].substr(0,6)==="\\eqref"){this.search={mode:"",end:"",open:b,pcount:0,olen:0,opos:this.pattern.lastIndex-a[0].length};return this.endMatch([""],b)}else{var d=a[0].substr(0,a[0].length-1),g,c;if(d.length%2===0){c=[d.replace(/\\\\/g,"\\")];g=1}else{c=[d.substr(1).replace(/\\\\/g,"\\"),"$"];g=0}c=MathJax.HTML.Element("span",null,c);var e=MathJax.HTML.TextNode(b.nodeValue.substr(0,a.index));b.nodeValue=b.nodeValue.substr(a.index+a[0].length-g);b.parentNode.insertBefore(c,b);b.parentNode.insertBefore(e,c);this.pattern.lastIndex=g}}}return b},endMatch:function(a,c){var b=this.search;if(a[0]==b.end){if(!b.close||b.pcount===0){b.close=c;b.cpos=this.pattern.lastIndex;b.clen=(b.isBeginEnd?0:a[0].length)}if(b.pcount===0){b.matched=true;c=this.encloseMath(c);this.switchPattern(this.start)}}else{if(a[0]==="{"){b.pcount++}else{if(a[0]==="}"&&b.pcount){b.pcount--}}}return c},prevEndMatch:function(){this.search.matched=true;var a=this.encloseMath(this.search.close);this.switchPattern(this.start);return a},switchPattern:function(a){a.lastIndex=this.pattern.lastIndex;this.pattern=a;this.search.start=(a===this.start)},encloseMath:function(b){var a=this.search,f=a.close,e,c;if(a.cpos===f.length){f=f.nextSibling}else{f=f.splitText(a.cpos)}if(!f){e=f=MathJax.HTML.addText(a.close.parentNode,"")}a.close=f;c=(a.opos?a.open.splitText(a.opos):a.open);while(c.nextSibling&&c.nextSibling!==f){if(c.nextSibling.nodeValue!==null){if(c.nextSibling.nodeName==="#comment"){c.nodeValue+=c.nextSibling.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/,"$1")}else{c.nodeValue+=c.nextSibling.nodeValue}}else{if(this.msieNewlineBug){c.nodeValue+=(c.nextSibling.nodeName.toLowerCase()==="br"?"\n":" ")}else{c.nodeValue+=" "}}c.parentNode.removeChild(c.nextSibling)}var d=c.nodeValue.substr(a.olen,c.nodeValue.length-a.olen-a.clen);c.parentNode.removeChild(c);if(this.config.preview!=="none"){this.createPreview(a.mode,d)}c=this.createMathTag(a.mode,d);this.search={};this.pattern.lastIndex=0;if(e){e.parentNode.removeChild(e)}return c},insertNode:function(b){var a=this.search;a.close.parentNode.insertBefore(b,a.close)},createPreview:function(c,a){var b=this.config.preview;if(b==="none"){return}if(b==="TeX"){b=[this.filterPreview(a)]}if(b){b=MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},b);this.insertNode(b)}},createMathTag:function(c,b){var a=document.createElement("script");a.type="math/tex"+c;MathJax.HTML.setScript(a,b);this.insertNode(a);return a},filterPreview:function(a){return a},msieNewlineBug:(MathJax.Hub.Browser.isMSIE&&document.documentMode<9)};MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.tex2jax]);MathJax.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js");

MathJax.Extension.mml2jax={version:"2.2",config:{preview:"alttext"},MMLnamespace:"http://www.w3.org/1998/Math/MathML",PreProcess:function(e){if(!this.configured){this.config=MathJax.Hub.CombineConfig("mml2jax",this.config);if(this.config.Augment){MathJax.Hub.Insert(this,this.config.Augment)}this.InitBrowser();this.configured=true}if(typeof(e)==="string"){e=document.getElementById(e)}if(!e){e=document.body}this.ProcessMathArray(e.getElementsByTagName("math"));if(e.getElementsByTagNameNS){this.ProcessMathArray(e.getElementsByTagNameNS(this.MMLnamespace,"math"))}var d,b;if(typeof(document.namespaces)!=="undefined"){try{for(d=0,b=document.namespaces.length;d<b;d++){var f=document.namespaces[d];if(f.urn===this.MMLnamespace){this.ProcessMathArray(e.getElementsByTagName(f.name+":math"))}}}catch(g){}}else{var c=document.getElementsByTagName("html")[0];if(c){for(d=0,b=c.attributes.length;d<b;d++){var a=c.attributes[d];if(a.nodeName.substr(0,6)==="xmlns:"&&a.nodeValue===this.MMLnamespace){this.ProcessMathArray(e.getElementsByTagName(a.nodeName.substr(6)+":math"))}}}}},ProcessMathArray:function(b){var a;if(b.length){if(this.MathTagBug){for(a=b.length-1;a>=0;a--){if(b[a].nodeName==="MATH"){this.ProcessMathFlattened(b[a])}else{this.ProcessMath(b[a])}}}else{for(a=b.length-1;a>=0;a--){this.ProcessMath(b[a])}}}},ProcessMath:function(e){var d=e.parentNode;var a=document.createElement("script");a.type="math/mml";d.insertBefore(a,e);if(this.AttributeBug){var b=this.OuterHTML(e);if(this.CleanupHTML){b=b.replace(/<\?import .*?>/i,"").replace(/<\?xml:namespace .*?\/>/i,"");b=b.replace(/&nbsp;/g,"&#xA0;")}MathJax.HTML.setScript(a,b);d.removeChild(e)}else{var c=MathJax.HTML.Element("span");c.appendChild(e);MathJax.HTML.setScript(a,c.innerHTML)}if(this.config.preview!=="none"){this.createPreview(e,a)}},ProcessMathFlattened:function(f){var d=f.parentNode;var b=document.createElement("script");b.type="math/mml";d.insertBefore(b,f);var c="",e,a=f;while(f&&f.nodeName!=="/MATH"){e=f;f=f.nextSibling;c+=this.NodeHTML(e);e.parentNode.removeChild(e)}if(f&&f.nodeName==="/MATH"){f.parentNode.removeChild(f)}b.text=c+"</math>";if(this.config.preview!=="none"){this.createPreview(a,b)}},NodeHTML:function(e){var c,b,a;if(e.nodeName==="#text"){c=this.quoteHTML(e.nodeValue)}else{if(e.nodeName==="#comment"){c="<!--"+e.nodeValue+"-->"}else{c="<"+e.nodeName.toLowerCase();for(b=0,a=e.attributes.length;b<a;b++){var d=e.attributes[b];if(d.specified){c+=" "+d.nodeName.toLowerCase().replace(/xmlns:xmlns/,"xmlns")+"=";var f=d.nodeValue;if(f==null&&d.nodeName==="style"&&e.style){f=e.style.cssText}c+='"'+this.quoteHTML(f)+'"'}}c+=">";if(e.outerHTML!=null&&e.outerHTML.match(/(.<\/[A-Z]+>|\/>)$/)){for(b=0,a=e.childNodes.length;b<a;b++){c+=this.OuterHTML(e.childNodes[b])}c+="</"+e.nodeName.toLowerCase()+">"}}}return c},OuterHTML:function(d){if(d.nodeName.charAt(0)==="#"){return this.NodeHTML(d)}if(!this.AttributeBug){return d.outerHTML}var c=this.NodeHTML(d);for(var b=0,a=d.childNodes.length;b<a;b++){c+=this.OuterHTML(d.childNodes[b])}c+="</"+d.nodeName.toLowerCase()+">";return c},quoteHTML:function(a){if(a==null){a=""}return a.replace(/&/g,"&#x26;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")},createPreview:function(b,a){var c=this.config.preview;if(c==="none"){return}if(c==="alttext"){var d=b.getAttribute("alttext");if(d!=null){c=[this.filterPreview(d)]}else{c=null}}if(c){c=MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},c);a.parentNode.insertBefore(c,a)}},filterPreview:function(a){return a},InitBrowser:function(){var b=MathJax.HTML.Element("span",{id:"<",className:"mathjax",innerHTML:"<math><mi>x</mi><mspace /></math>"});var a=b.outerHTML||"";this.AttributeBug=a!==""&&!(a.match(/id="&lt;"/)&&a.match(/class="mathjax"/)&&a.match(/<\/math>/));this.MathTagBug=b.childNodes.length>1;this.CleanupHTML=MathJax.Hub.Browser.isMSIE}};MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.mml2jax]);MathJax.Ajax.loadComplete("[MathJax]/extensions/mml2jax.js");

MathJax.Extension.asciimath2jax={version:"2.2",config:{delimiters:[["`","`"]],displaydelimiters:[["``","``"]],skipTags:["script","noscript","style","textarea","pre","code"],ignoreClass:"asciimath2jax_ignore",processClass:"asciimath2jax_process",preview:"AsciiMath"},processEnvironments:true,PreProcess:function(a){if(!this.configured){this.config=MathJax.Hub.CombineConfig("asciimath2jax",this.config);if(this.config.Augment){MathJax.Hub.Insert(this,this.config.Augment)}this.configured=true}if(typeof(a)==="string"){a=document.getElementById(a)}if(!a){a=document.body}if(this.createPatterns()){this.scanElement(a,a.nextSibling)}},createPatterns:function(){var d=[],e=[],c,a,b=this.config;this.match={};for(c=0,a=b.delimiters.length;c<a;c++){d.push(this.patternQuote(b.delimiters[c][0]));this.match[b.delimiters[c][0]]={mode:"",end:b.delimiters[c][1],pattern:this.endPattern(b.delimiters[c][1])}}for(c=0,a=b.displaydelimiters.length;c<a;c++){d.push(this.patternQuote(b.displaydelimiters[c][0]));this.match[b.displaydelimiters[c][0]]={mode:"; mode=display",end:b.displaydelimiters[c][1],pattern:this.endPattern(b.displaydelimiters[c][1])}}this.start=new RegExp(d.sort(this.sortLength).join("|"),"g");this.skipTags=new RegExp("^("+b.skipTags.join("|")+")$","i");var e=[];if(MathJax.Hub.config.preRemoveClass){e.push(MathJax.Hub.config.preRemoveClass)}if(b.ignoreClass){e.push(b.ignoreClass)}this.ignoreClass=(e.length?new RegExp("(^| )("+e.join("|")+")( |$)"):/^$/);this.processClass=new RegExp("(^| )("+b.processClass+")( |$)");return true},patternQuote:function(a){return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(a){return new RegExp(this.patternQuote(a)+"|\\\\.","g")},sortLength:function(d,c){if(d.length!==c.length){return c.length-d.length}return(d==c?0:(d<c?-1:1))},scanElement:function(c,b,g){var a,e,d,f;while(c&&c!=b){if(c.nodeName.toLowerCase()==="#text"){if(!g){c=this.scanText(c)}}else{a=(typeof(c.className)==="undefined"?"":c.className);e=(typeof(c.tagName)==="undefined"?"":c.tagName);if(typeof(a)!=="string"){a=String(a)}f=this.processClass.exec(a);if(c.firstChild&&!a.match(/(^| )MathJax/)&&(f||!this.skipTags.exec(e))){d=(g||this.ignoreClass.exec(a))&&!f;this.scanElement(c.firstChild,b,d)}}if(c){c=c.nextSibling}}},scanText:function(b){if(b.nodeValue.replace(/\s+/,"")==""){return b}var a,c;this.search={start:true};this.pattern=this.start;while(b){this.pattern.lastIndex=0;while(b&&b.nodeName.toLowerCase()==="#text"&&(a=this.pattern.exec(b.nodeValue))){if(this.search.start){b=this.startMatch(a,b)}else{b=this.endMatch(a,b)}}if(this.search.matched){b=this.encloseMath(b)}if(b){do{c=b;b=b.nextSibling}while(b&&(b.nodeName.toLowerCase()==="br"||b.nodeName.toLowerCase()==="#comment"));if(!b||b.nodeName!=="#text"){return c}}}return b},startMatch:function(a,b){var c=this.match[a[0]];if(c!=null){this.search={end:c.end,mode:c.mode,open:b,olen:a[0].length,opos:this.pattern.lastIndex-a[0].length};this.switchPattern(c.pattern)}return b},endMatch:function(a,b){if(a[0]==this.search.end){this.search.close=b;this.search.cpos=this.pattern.lastIndex;this.search.clen=(this.search.isBeginEnd?0:a[0].length);this.search.matched=true;b=this.encloseMath(b);this.switchPattern(this.start)}return b},switchPattern:function(a){a.lastIndex=this.pattern.lastIndex;this.pattern=a;this.search.start=(a===this.start)},encloseMath:function(b){var a=this.search,f=a.close,e,c;if(a.cpos===f.length){f=f.nextSibling}else{f=f.splitText(a.cpos)}if(!f){e=f=MathJax.HTML.addText(a.close.parentNode,"")}a.close=f;c=(a.opos?a.open.splitText(a.opos):a.open);while(c.nextSibling&&c.nextSibling!==f){if(c.nextSibling.nodeValue!==null){if(c.nextSibling.nodeName==="#comment"){c.nodeValue+=c.nextSibling.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/,"$1")}else{c.nodeValue+=c.nextSibling.nodeValue}}else{if(this.msieNewlineBug){c.nodeValue+=(c.nextSibling.nodeName.toLowerCase()==="br"?"\n":" ")}else{c.nodeValue+=" "}}c.parentNode.removeChild(c.nextSibling)}var d=c.nodeValue.substr(a.olen,c.nodeValue.length-a.olen-a.clen);c.parentNode.removeChild(c);if(this.config.preview!=="none"){this.createPreview(a.mode,d)}c=this.createMathTag(a.mode,d);this.search={};this.pattern.lastIndex=0;if(e){e.parentNode.removeChild(e)}return c},insertNode:function(b){var a=this.search;a.close.parentNode.insertBefore(b,a.close)},createPreview:function(c,a){var b=this.config.preview;if(b==="none"){return}if(b==="AsciiMath"){b=[this.filterPreview(a)]}if(b){b=MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},b);this.insertNode(b)}},createMathTag:function(c,a){var b=document.createElement("script");b.type="math/asciimath"+c;MathJax.HTML.setScript(b,a);this.insertNode(b);return b},filterPreview:function(a){return a},msieNewlineBug:(MathJax.Hub.Browser.isMSIE&&(document.documentMode||0)<9)};MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.asciimath2jax]);MathJax.Ajax.loadComplete("[MathJax]/extensions/asciimath2jax.js");

(function(d,h,l,g,m,b,j){var q="2.2";var i=MathJax.Extension;var c=i.MathEvents={version:q};var k=d.config.menuSettings;var p={hover:500,frame:{x:3.5,y:5,bwidth:1,bcolor:"#A6D",hwidth:"15px",hcolor:"#83A"},button:{x:-4,y:-3,wx:-2,src:l.fileURL(b.imageDir+"/MenuArrow-15.png")},fadeinInc:0.2,fadeoutInc:0.05,fadeDelay:50,fadeoutStart:400,fadeoutDelay:15*1000,styles:{".MathJax_Hover_Frame":{"border-radius":".25em","-webkit-border-radius":".25em","-moz-border-radius":".25em","-khtml-border-radius":".25em","box-shadow":"0px 0px 15px #83A","-webkit-box-shadow":"0px 0px 15px #83A","-moz-box-shadow":"0px 0px 15px #83A","-khtml-box-shadow":"0px 0px 15px #83A",border:"1px solid #A6D ! important",display:"inline-block",position:"absolute"},".MathJax_Hover_Arrow":{position:"absolute",width:"15px",height:"11px",cursor:"pointer"}}};var n=c.Event={LEFTBUTTON:0,RIGHTBUTTON:2,MENUKEY:"altKey",Mousedown:function(r){return n.Handler(r,"Mousedown",this)},Mouseup:function(r){return n.Handler(r,"Mouseup",this)},Mousemove:function(r){return n.Handler(r,"Mousemove",this)},Mouseover:function(r){return n.Handler(r,"Mouseover",this)},Mouseout:function(r){return n.Handler(r,"Mouseout",this)},Click:function(r){return n.Handler(r,"Click",this)},DblClick:function(r){return n.Handler(r,"DblClick",this)},Menu:function(r){return n.Handler(r,"ContextMenu",this)},Handler:function(u,s,t){if(l.loadingMathMenu){return n.False(u)}var r=b[t.jaxID];if(!u){u=window.event}u.isContextMenu=(s==="ContextMenu");if(r[s]){return r[s](u,t)}if(i.MathZoom){return i.MathZoom.HandleEvent(u,s,t)}},False:function(r){if(!r){r=window.event}if(r){if(r.preventDefault){r.preventDefault()}if(r.stopPropagation){r.stopPropagation()}r.cancelBubble=true;r.returnValue=false}return false},ContextMenu:function(s,A,v){var x=b[A.jaxID],u=x.getJaxFromMath(A);var B=(x.config.showMathMenu!=null?x:d).config.showMathMenu;if(!B||(k.context!=="MathJax"&&!v)){return}if(c.msieEventBug){s=window.event||s}n.ClearSelection();f.ClearHoverTimer();if(u.hover){if(u.hover.remove){clearTimeout(u.hover.remove);delete u.hover.remove}u.hover.nofade=true}var t=MathJax.Menu;var C,z;if(t){if(t.loadingDomain){return n.False(s)}C=m.loadDomain("MathMenu");if(!C){t.jax=u;var r=t.menu.Find("Show Math As").menu;r.items[0].name=u.sourceMenuTitle;r.items[0].format=(u.sourceMenuFormat||"MathML");r.items[1].name=j[u.inputJax].sourceMenuTitle;var w=t.menu.Find("Math Settings","MathPlayer");w.hidden=!(u.outputJax==="NativeMML"&&d.Browser.hasMathPlayer);return t.menu.Post(s)}t.loadingDomain=true;z=function(){delete t.loadingDomain}}else{if(l.loadingMathMenu){return n.False(s)}l.loadingMathMenu=true;C=l.Require("[MathJax]/extensions/MathMenu.js");z=function(){delete l.loadingMathMenu;if(!MathJax.Menu){MathJax.Menu={}}}}var y={pageX:s.pageX,pageY:s.pageY,clientX:s.clientX,clientY:s.clientY};g.Queue(C,z,["ContextMenu",n,y,A,v]);return n.False(s)},AltContextMenu:function(t,s){var u=b[s.jaxID];var r=(u.config.showMathMenu!=null?u:d).config.showMathMenu;if(r){r=(u.config.showMathMenuMSIE!=null?u:d).config.showMathMenuMSIE;if(k.context==="MathJax"&&!k.mpContext&&r){if(!c.noContextMenuBug||t.button!==n.RIGHTBUTTON){return}}else{if(!t[n.MENUKEY]||t.button!==n.LEFTBUTTON){return}}return u.ContextMenu(t,s,true)}},ClearSelection:function(){if(c.safariContextMenuBug){setTimeout("window.getSelection().empty()",0)}if(document.selection){setTimeout("document.selection.empty()",0)}},getBBox:function(t){t.appendChild(c.topImg);var s=c.topImg.offsetTop,u=t.offsetHeight-s,r=t.offsetWidth;t.removeChild(c.topImg);return{w:r,h:s,d:u}}};var f=c.Hover={Mouseover:function(t,s){if(k.discoverable||k.zoom==="Hover"){var v=t.fromElement||t.relatedTarget,u=t.toElement||t.target;if(v&&u&&(v.isMathJax!=u.isMathJax||d.getJaxFor(v)!==d.getJaxFor(u))){var r=this.getJaxFromMath(s);if(r.hover){f.ReHover(r)}else{f.HoverTimer(r,s)}return n.False(t)}}},Mouseout:function(t,s){if(k.discoverable||k.zoom==="Hover"){var v=t.fromElement||t.relatedTarget,u=t.toElement||t.target;if(v&&u&&(v.isMathJax!=u.isMathJax||d.getJaxFor(v)!==d.getJaxFor(u))){var r=this.getJaxFromMath(s);if(r.hover){f.UnHover(r)}else{f.ClearHoverTimer()}return n.False(t)}}},Mousemove:function(t,s){if(k.discoverable||k.zoom==="Hover"){var r=this.getJaxFromMath(s);if(r.hover){return}if(f.lastX==t.clientX&&f.lastY==t.clientY){return}f.lastX=t.clientX;f.lastY=t.clientY;f.HoverTimer(r,s);return n.False(t)}},HoverTimer:function(r,s){this.ClearHoverTimer();this.hoverTimer=setTimeout(g(["Hover",this,r,s]),p.hover)},ClearHoverTimer:function(){if(this.hoverTimer){clearTimeout(this.hoverTimer);delete this.hoverTimer}},Hover:function(r,v){if(i.MathZoom&&i.MathZoom.Hover({},v)){return}var u=b[r.outputJax],w=u.getHoverSpan(r,v),z=u.getHoverBBox(r,w,v),x=(u.config.showMathMenu!=null?u:d).config.showMathMenu;var B=p.frame.x,A=p.frame.y,y=p.frame.bwidth;if(c.msieBorderWidthBug){y=0}r.hover={opacity:0,id:r.inputID+"-Hover"};var s=h.Element("span",{id:r.hover.id,isMathJax:true,style:{display:"inline-block",width:0,height:0,position:"relative"}},[["span",{className:"MathJax_Hover_Frame",isMathJax:true,style:{display:"inline-block",position:"absolute",top:this.Px(-z.h-A-y-(z.y||0)),left:this.Px(-B-y+(z.x||0)),width:this.Px(z.w+2*B),height:this.Px(z.h+z.d+2*A),opacity:0,filter:"alpha(opacity=0)"}}]]);var t=h.Element("span",{isMathJax:true,id:r.hover.id+"Menu",style:{display:"inline-block","z-index":1,width:0,height:0,position:"relative"}},[["img",{className:"MathJax_Hover_Arrow",isMathJax:true,math:v,src:p.button.src,onclick:this.HoverMenu,jax:u.id,style:{left:this.Px(z.w+B+y+(z.x||0)+p.button.x),top:this.Px(-z.h-A-y-(z.y||0)-p.button.y),opacity:0,filter:"alpha(opacity=0)"}}]]);if(z.width){s.style.width=t.style.width=z.width;s.style.marginRight=t.style.marginRight="-"+z.width;s.firstChild.style.width=z.width;t.firstChild.style.left="";t.firstChild.style.right=this.Px(p.button.wx)}w.parentNode.insertBefore(s,w);if(x){w.parentNode.insertBefore(t,w)}if(w.style){w.style.position="relative"}this.ReHover(r)},ReHover:function(r){if(r.hover.remove){clearTimeout(r.hover.remove)}r.hover.remove=setTimeout(g(["UnHover",this,r]),p.fadeoutDelay);this.HoverFadeTimer(r,p.fadeinInc)},UnHover:function(r){if(!r.hover.nofade){this.HoverFadeTimer(r,-p.fadeoutInc,p.fadeoutStart)}},HoverFade:function(r){delete r.hover.timer;r.hover.opacity=Math.max(0,Math.min(1,r.hover.opacity+r.hover.inc));r.hover.opacity=Math.floor(1000*r.hover.opacity)/1000;var t=document.getElementById(r.hover.id),s=document.getElementById(r.hover.id+"Menu");t.firstChild.style.opacity=r.hover.opacity;t.firstChild.style.filter="alpha(opacity="+Math.floor(100*r.hover.opacity)+")";if(s){s.firstChild.style.opacity=r.hover.opacity;s.firstChild.style.filter=t.style.filter}if(r.hover.opacity===1){return}if(r.hover.opacity>0){this.HoverFadeTimer(r,r.hover.inc);return}t.parentNode.removeChild(t);if(s){s.parentNode.removeChild(s)}if(r.hover.remove){clearTimeout(r.hover.remove)}delete r.hover},HoverFadeTimer:function(r,t,s){r.hover.inc=t;if(!r.hover.timer){r.hover.timer=setTimeout(g(["HoverFade",this,r]),(s||p.fadeDelay))}},HoverMenu:function(r){if(!r){r=window.event}return b[this.jax].ContextMenu(r,this.math,true)},ClearHover:function(r){if(r.hover.remove){clearTimeout(r.hover.remove)}if(r.hover.timer){clearTimeout(r.hover.timer)}f.ClearHoverTimer();delete r.hover},Px:function(r){if(Math.abs(r)<0.006){return"0px"}return r.toFixed(2).replace(/\.?0+$/,"")+"px"},getImages:function(){var r=new Image();r.src=p.button.src}};var a=c.Touch={last:0,delay:500,start:function(s){var r=new Date().getTime();var t=(r-a.last<a.delay&&a.up);a.last=r;a.up=false;if(t){a.timeout=setTimeout(a.menu,a.delay,s,this);s.preventDefault()}},end:function(s){var r=new Date().getTime();a.up=(r-a.last<a.delay);if(a.timeout){clearTimeout(a.timeout);delete a.timeout;a.last=0;a.up=false;s.preventDefault();return n.Handler((s.touches[0]||s.touch),"DblClick",this)}},menu:function(s,r){delete a.timeout;a.last=0;a.up=false;return n.Handler((s.touches[0]||s.touch),"ContextMenu",r)}};if(d.Browser.isMobile){var o=p.styles[".MathJax_Hover_Arrow"];o.width="25px";o.height="18px";p.button.x=-6}d.Browser.Select({MSIE:function(r){var t=(document.documentMode||0);var s=r.versionAtLeast("8.0");c.msieBorderWidthBug=(document.compatMode==="BackCompat");c.msieEventBug=r.isIE9;c.msieAlignBug=(!s||t<8);if(t<9){n.LEFTBUTTON=1}},Safari:function(r){c.safariContextMenuBug=true},Opera:function(r){c.operaPositionBug=true},Konqueror:function(r){c.noContextMenuBug=true}});c.topImg=(c.msieAlignBug?h.Element("img",{style:{width:0,height:0,position:"relative"},src:"about:blank"}):h.Element("span",{style:{width:0,height:0,display:"inline-block"}}));if(c.operaPositionBug){c.topImg.style.border="1px solid"}c.config=p=d.CombineConfig("MathEvents",p);var e=function(){var r=p.styles[".MathJax_Hover_Frame"];r.border=p.frame.bwidth+"px solid "+p.frame.bcolor+" ! important";r["box-shadow"]=r["-webkit-box-shadow"]=r["-moz-box-shadow"]=r["-khtml-box-shadow"]="0px 0px "+p.frame.hwidth+" "+p.frame.hcolor};g.Queue(d.Register.StartupHook("End Config",{}),[e],["getImages",f],["Styles",l,p.styles],["Post",d.Startup.signal,"MathEvents Ready"],["loadComplete",l,"[MathJax]/extensions/MathEvents.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.Callback,MathJax.Localization,MathJax.OutputJax,MathJax.InputJax);

(function(a,d,f,c,j){var k="2.2";var i=a.CombineConfig("MathZoom",{styles:{"#MathJax_Zoom":{position:"absolute","background-color":"#F0F0F0",overflow:"auto",display:"block","z-index":301,padding:".5em",border:"1px solid black",margin:0,"font-weight":"normal","font-style":"normal","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","box-shadow":"5px 5px 15px #AAAAAA","-webkit-box-shadow":"5px 5px 15px #AAAAAA","-moz-box-shadow":"5px 5px 15px #AAAAAA","-khtml-box-shadow":"5px 5px 15px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},"#MathJax_ZoomOverlay":{position:"absolute",left:0,top:0,"z-index":300,display:"inline-block",width:"100%",height:"100%",border:0,padding:0,margin:0,"background-color":"white",opacity:0,filter:"alpha(opacity=0)"},"#MathJax_ZoomFrame":{position:"relative",display:"inline-block",height:0,width:0},"#MathJax_ZoomEventTrap":{position:"absolute",left:0,top:0,"z-index":302,display:"inline-block",border:0,padding:0,margin:0,"background-color":"white",opacity:0,filter:"alpha(opacity=0)"}}});var e,b,g;MathJax.Hub.Register.StartupHook("MathEvents Ready",function(){g=MathJax.Extension.MathEvents.Event;e=MathJax.Extension.MathEvents.Event.False;b=MathJax.Extension.MathEvents.Hover});var h=MathJax.Extension.MathZoom={version:k,settings:a.config.menuSettings,scrollSize:18,HandleEvent:function(n,l,m){if(h.settings.CTRL&&!n.ctrlKey){return true}if(h.settings.ALT&&!n.altKey){return true}if(h.settings.CMD&&!n.metaKey){return true}if(h.settings.Shift&&!n.shiftKey){return true}if(!h[l]){return true}return h[l](n,m)},Click:function(m,l){if(this.settings.zoom==="Click"){return this.Zoom(m,l)}},DblClick:function(m,l){if(this.settings.zoom==="Double-Click"){return this.Zoom(m,l)}},Hover:function(m,l){if(this.settings.zoom==="Hover"){this.Zoom(m,l);return true}return false},Zoom:function(n,s){this.Remove();b.ClearHoverTimer();g.ClearSelection();var q=MathJax.OutputJax[s.jaxID];var o=q.getJaxFromMath(s);if(o.hover){b.UnHover(o)}var l=Math.floor(0.85*document.body.clientWidth),r=Math.floor(0.85*Math.max(document.body.clientHeight,document.documentElement.clientHeight));var m=d.Element("span",{id:"MathJax_ZoomFrame"},[["span",{id:"MathJax_ZoomOverlay",onmousedown:this.Remove}],["span",{id:"MathJax_Zoom",onclick:this.Remove,style:{visibility:"hidden",fontSize:this.settings.zscale,"max-width":l+"px","max-height":r+"px"}},[["span",{style:{display:"inline-block","white-space":"nowrap"}}]]]]);var x=m.lastChild,u=x.firstChild,p=m.firstChild;s.parentNode.insertBefore(m,s);s.parentNode.insertBefore(s,m);if(u.addEventListener){u.addEventListener("mousedown",this.Remove,true)}if(this.msieTrapEventBug){var w=d.Element("span",{id:"MathJax_ZoomEventTrap",onmousedown:this.Remove});m.insertBefore(w,x)}if(this.msieZIndexBug){var t=d.addElement(document.body,"img",{src:"about:blank",id:"MathJax_ZoomTracker",width:0,height:0,style:{width:0,height:0,position:"relative"}});m.style.position="relative";m.style.zIndex=i.styles["#MathJax_ZoomOverlay"]["z-index"];m=t}var v=q.Zoom(o,u,s,l,r);if(this.msiePositionBug){if(this.msieSizeBug){x.style.height=v.zH+"px";x.style.width=v.zW+"px"}if(x.offsetHeight>r){x.style.height=r+"px";x.style.width=(v.zW+this.scrollSize)+"px"}if(x.offsetWidth>l){x.style.width=l+"px";x.style.height=(v.zH+this.scrollSize)+"px"}}if(this.operaPositionBug){x.style.width=Math.min(l,v.zW)+"px"}if(x.offsetWidth&&x.offsetWidth<l&&x.offsetHeight<r){x.style.overflow="visible"}this.Position(x,v);if(this.msieTrapEventBug){w.style.height=x.clientHeight+"px";w.style.width=x.clientWidth+"px";w.style.left=(parseFloat(x.style.left)+x.clientLeft)+"px";w.style.top=(parseFloat(x.style.top)+x.clientTop)+"px"}x.style.visibility="";if(this.settings.zoom==="Hover"){p.onmouseover=this.Remove}if(window.addEventListener){addEventListener("resize",this.Resize,false)}else{if(window.attachEvent){attachEvent("onresize",this.Resize)}else{this.onresize=window.onresize;window.onresize=this.Resize}}a.signal.Post(["math zoomed",o]);return e(n)},Position:function(p,r){var q=this.Resize(),m=q.x,s=q.y,l=r.mW;var o=-l-Math.floor((p.offsetWidth-l)/2),n=r.Y;p.style.left=Math.max(o,10-m)+"px";p.style.top=Math.max(n,10-s)+"px";if(!h.msiePositionBug){h.SetWH()}},Resize:function(m){if(h.onresize){h.onresize(m)}var r=document.getElementById("MathJax_ZoomFrame"),l=document.getElementById("MathJax_ZoomOverlay");var o=h.getXY(r);var n=r.parentNode,q=h.getOverflow(n);while(n.parentNode&&n!==document.body&&q==="visible"){n=n.parentNode;q=h.getOverflow(n)}if(q!=="visible"){l.scroll_parent=n;var p=h.getXY(n);o.x-=p.x;o.y-=p.y;p=h.getBorder(n);o.x-=p.x;o.y-=p.y}l.style.left=(-o.x)+"px";l.style.top=(-o.y)+"px";if(h.msiePositionBug){setTimeout(h.SetWH,0)}else{h.SetWH()}return o},SetWH:function(){var l=document.getElementById("MathJax_ZoomOverlay");l.style.width=l.style.height="1px";var m=l.scroll_parent||document.documentElement||document.body;l.style.width=m.scrollWidth+"px";l.style.height=Math.max(m.clientHeight,m.scrollHeight)+"px"},getOverflow:(window.getComputedStyle?function(l){return getComputedStyle(l).overflow}:function(l){return(l.currentStyle||{overflow:"visible"}).overflow}),getBorder:function(o){var m={thin:1,medium:2,thick:3};var n=(window.getComputedStyle?getComputedStyle(o):(o.currentStyle||{borderLeftWidth:0,borderTopWidth:0}));var l=n.borderLeftWidth,p=n.borderTopWidth;if(m[l]){l=m[l]}else{l=parseInt(l)}if(m[p]){p=m[p]}else{p=parseInt(p)}return{x:l,y:p}},getXY:function(o){var l=0,n=0,m;m=o;while(m.offsetParent){l+=m.offsetLeft;m=m.offsetParent}if(h.operaPositionBug){o.style.border="1px solid"}m=o;while(m.offsetParent){n+=m.offsetTop;m=m.offsetParent}if(h.operaPositionBug){o.style.border=""}return{x:l,y:n}},Remove:function(n){var p=document.getElementById("MathJax_ZoomFrame");if(p){var o=MathJax.OutputJax[p.previousSibling.jaxID];var l=o.getJaxFromMath(p.previousSibling);a.signal.Post(["math unzoomed",l]);p.parentNode.removeChild(p);p=document.getElementById("MathJax_ZoomTracker");if(p){p.parentNode.removeChild(p)}if(h.operaRefreshBug){var m=d.addElement(document.body,"div",{style:{position:"fixed",left:0,top:0,width:"100%",height:"100%",backgroundColor:"white",opacity:0},id:"MathJax_OperaDiv"});document.body.removeChild(m)}if(window.removeEventListener){removeEventListener("resize",h.Resize,false)}else{if(window.detachEvent){detachEvent("onresize",h.Resize)}else{window.onresize=h.onresize;delete h.onresize}}}return e(n)}};a.Browser.Select({MSIE:function(l){var n=(document.documentMode||0);var m=(n>=9);h.msiePositionBug=!m;h.msieSizeBug=l.versionAtLeast("7.0")&&(!document.documentMode||n===7||n===8);h.msieZIndexBug=(n<=7);h.msieInlineBlockAlignBug=(n<=7);h.msieTrapEventBug=!window.addEventListener;if(document.compatMode==="BackCompat"){h.scrollSize=52}if(m){delete i.styles["#MathJax_Zoom"].filter}},Opera:function(l){h.operaPositionBug=true;h.operaRefreshBug=true}});h.topImg=(h.msieInlineBlockAlignBug?d.Element("img",{style:{width:0,height:0,position:"relative"},src:"about:blank"}):d.Element("span",{style:{width:0,height:0,display:"inline-block"}}));if(h.operaPositionBug||h.msieTopBug){h.topImg.style.border="1px solid"}MathJax.Callback.Queue(["StartupHook",MathJax.Hub.Register,"Begin Styles",{}],["Styles",f,i.styles],["Post",a.Startup.signal,"MathZoom Ready"],["loadComplete",f,"[MathJax]/extensions/MathZoom.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax["HTML-CSS"],MathJax.OutputJax.NativeMML);

(function(c,g,k,f,b){var q="2.2";var j=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:q,signal:j};var o=function(r){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",r]].concat([].slice.call(arguments,1)))};var n=c.Browser.isPC,l=c.Browser.isMSIE,e=((document.documentMode||0)>8);var i=(n?null:"5px");var p=c.CombineConfig("MathMenu",{delay:150,closeImg:k.fileURL(b.imageDir+"/CloseX-31.png"),showRenderer:true,showMathPlayer:true,showFontMenu:false,showContext:false,showDiscoverable:false,showLocale:true,showLocaleURL:false,windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(n?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":i,"-webkit-border-radius":i,"-moz-border-radius":i,"-khtml-border-radius":i,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(n?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em",color:"#666666","font-family":(l?"'Arial unicode MS'":null)},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(l?"'Arial unicode MS'":null)},".MathJax_MenuRadioCheck":{position:"absolute",left:(n?"1em":".7em")},".MathJax_MenuLabel":{padding:(n?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(n?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(n?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(n?"Highlight":"#606872"),color:(n?"HighlightText":"white")},".MathJax_Menu_Close":{position:"absolute",width:"31px",height:"31px",top:"-15px",left:"-15px"}}});var h,d;c.Register.StartupHook("MathEvents Ready",function(){h=MathJax.Extension.MathEvents.Event.False;d=MathJax.Extension.MathEvents.Hover});var a=MathJax.Menu=MathJax.Object.Subclass({version:q,items:[],posted:false,title:null,margin:5,Init:function(r){this.items=[].slice.call(arguments,0)},With:function(r){if(r){c.Insert(this,r)}return this},Post:function(s,B){if(!s){s=window.event}var r=document.getElementById("MathJax_MenuFrame");if(!r){r=a.Background(this);delete m.lastItem;delete m.lastMenu;delete a.skipUp;j.Post(["post",a.jax])}var t=g.addElement(r,"div",{onmouseup:a.Mouseup,ondblclick:h,ondragstart:h,onselectstart:h,oncontextmenu:h,menuItem:this,className:"MathJax_Menu"});MathJax.Localization.setCSS(t);for(var v=0,u=this.items.length;v<u;v++){this.items[v].Create(t)}if(a.isMobile){g.addElement(t,"span",{className:"MathJax_Menu_Close",menu:B,ontouchstart:a.Close,ontouchend:h,onmousedown:a.Close,onmouseup:h},[["img",{src:p.closeImg,style:{width:"100%",height:"100%"}}]])}this.posted=true;t.style.width=(t.offsetWidth+2)+"px";var A=s.pageX,z=s.pageY;if(!A&&!z){A=s.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;z=s.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!B){if(A+t.offsetWidth>document.body.offsetWidth-this.margin){A=document.body.offsetWidth-t.offsetWidth-this.margin}if(a.isMobile){A=Math.max(5,A-Math.floor(t.offsetWidth/2));z-=20}a.skipUp=s.isContextMenu}else{var w="left",C=B.offsetWidth;A=(a.isMobile?30:C-2);z=0;while(B&&B!==r){A+=B.offsetLeft;z+=B.offsetTop;B=B.parentNode}if(A+t.offsetWidth>document.body.offsetWidth-this.margin&&!a.isMobile){w="right";A=Math.max(this.margin,A-C-t.offsetWidth+6)}if(!n){t.style["borderRadiusTop"+w]=0;t.style["WebkitBorderRadiusTop"+w]=0;t.style["MozBorderRadiusTop"+w]=0;t.style["KhtmlBorderRadiusTop"+w]=0}}t.style.left=A+"px";t.style.top=z+"px";if(document.selection&&document.selection.empty){document.selection.empty()}return h(s)},Remove:function(r,s){j.Post(["unpost",a.jax]);var t=document.getElementById("MathJax_MenuFrame");if(t){t.parentNode.removeChild(t);if(this.msieFixedPositionBug){detachEvent("onresize",a.Resize)}}if(a.jax.hover){delete a.jax.hover.nofade;d.UnHover(a.jax)}return h(r)},Find:function(r){return this.FindN(1,r,[].slice.call(arguments,1))},FindId:function(r){return this.FindN(0,r,[].slice.call(arguments,1))},FindN:function(v,s,u){for(var t=0,r=this.items.length;t<r;t++){if(this.items[t].name[v]===s){if(u.length){if(!this.items[t].menu){return null}return this.items[t].menu.FindN(v,u[0],u.slice(1))}return this.items[t]}}return null},IndexOf:function(r){return this.IndexOfN(1,r)},IndexOfId:function(r){return this.IndexOfN(0,r)},IndexOfN:function(u,s){for(var t=0,r=this.items.length;t<r;t++){if(this.items[t].name[u]===s){return t}}return null}},{config:p,div:null,Close:function(r){return a.Event(r,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"))},Remove:function(r){return a.Event(r,this,"Remove")},Mouseover:function(r){return a.Event(r,this,"Mouseover")},Mouseout:function(r){return a.Event(r,this,"Mouseout")},Mousedown:function(r){return a.Event(r,this,"Mousedown")},Mouseup:function(r){return a.Event(r,this,"Mouseup")},Touchstart:function(r){return a.Event(r,this,"Touchstart")},Touchend:function(r){return a.Event(r,this,"Touchend")},Event:function(t,v,r,u){if(a.skipMouseover&&r==="Mouseover"&&!u){return h(t)}if(a.skipUp){if(r.match(/Mouseup|Touchend/)){delete a.skipUp;return h(t)}if(r==="Touchstart"||(r==="Mousedown"&&!a.skipMousedown)){delete a.skipUp}}if(!t){t=window.event}var s=v.menuItem;if(s&&s[r]){return s[r](t,v)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(s){var t=g.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:s,onmousedown:this.Remove}]]);var r=t.firstChild;if(a.msieBackgroundBug){r.style.backgroundColor="white";r.style.filter="alpha(opacity=0)"}if(a.msieFixedPositionBug){t.width=t.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{r.style.position="fixed"}return t},Resize:function(){setTimeout(a.SetWH,0)},SetWH:function(){var r=document.getElementById("MathJax_MenuFrame");if(r){r=r.firstChild;r.style.width=r.style.height="1px";r.style.width=document.body.scrollWidth+"px";r.style.height=document.body.scrollHeight+"px"}},saveCookie:function(){g.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=g.Cookie.Get("menu")},getImages:function(){if(a.isMobile){var r=new Image();r.src=p.closeImg}}});var m=a.ITEM=MathJax.Object.Subclass({name:"",Create:function(s){if(!this.hidden){var r={onmouseover:a.Mouseover,onmouseout:a.Mouseout,onmouseup:a.Mouseup,onmousedown:a.Mousedown,ondragstart:h,onselectstart:h,onselectend:h,ontouchstart:a.Touchstart,ontouchend:a.Touchend,className:"MathJax_MenuItem",menuItem:this};if(this.disabled){r.className+=" MathJax_MenuDisabled"}g.addElement(s,"div",r,this.Label(r,s))}},Name:function(){return o(this.name[0],this.name[1])},Mouseover:function(v,x){if(!this.disabled){this.Activate(x)}if(!this.menu||!this.menu.posted){var w=document.getElementById("MathJax_MenuFrame").childNodes,s=x.parentNode.childNodes;for(var t=0,r=s.length;t<r;t++){var u=s[t].menuItem;if(u&&u.menu&&u.menu.posted){u.Deactivate(s[t])}}r=w.length-1;while(r>=0&&x.parentNode.menuItem!==w[r].menuItem){w[r].menuItem.posted=false;w[r].parentNode.removeChild(w[r]);r--}if(this.Timer&&!a.isMobile){this.Timer(v,x)}}},Mouseout:function(r,s){if(!this.menu||!this.menu.posted){this.Deactivate(s)}if(this.timer){clearTimeout(this.timer);delete this.timer}},Mouseup:function(r,s){return this.Remove(r,s)},Touchstart:function(r,s){return this.TouchEvent(r,s,"Mousedown")},Touchend:function(r,s){return this.TouchEvent(r,s,"Mouseup")},TouchEvent:function(s,t,r){if(this!==m.lastItem){if(m.lastMenu){a.Event(s,m.lastMenu,"Mouseout")}a.Event(s,t,"Mouseover",true);m.lastItem=this;m.lastMenu=t}if(this.nativeTouch){return null}a.Event(s,t,r);return false},Remove:function(r,s){s=s.parentNode.menuItem;return s.Remove(r,s)},Activate:function(r){this.Deactivate(r);r.className+=" MathJax_MenuActive"},Deactivate:function(r){r.className=r.className.replace(/ MathJax_MenuActive/,"")},With:function(r){if(r){c.Insert(this,r)}return this}});a.ITEM.COMMAND=a.ITEM.Subclass({action:function(){},Init:function(r,t,s){if(!(r instanceof Array)){r=[r,r]}this.name=r;this.action=t;this.With(s)},Label:function(r,s){return[this.Name()]},Mouseup:function(r,s){if(!this.disabled){this.Remove(r,s);j.Post(["command",this]);this.action.call(this,r)}return h(r)}});a.ITEM.SUBMENU=a.ITEM.Subclass({menu:null,marker:(n&&!c.Browser.isSafari?"\u25B6":"\u25B8"),Init:function(r,t){if(!(r instanceof Array)){r=[r,r]}this.name=r;var s=1;if(!(t instanceof a.ITEM)){this.With(t),s++}this.menu=a.apply(a,[].slice.call(arguments,s))},Label:function(r,s){this.menu.posted=false;return[this.Name()+" ",["span",{className:"MathJax_MenuArrow"},[this.marker]]]},Timer:function(r,s){if(this.timer){clearTimeout(this.timer)}r={clientX:r.clientX,clientY:r.clientY};this.timer=setTimeout(f(["Mouseup",this,r,s]),p.delay)},Touchend:function(s,u){var t=this.menu.posted;var r=this.SUPER(arguments).Touchend.apply(this,arguments);if(t){this.Deactivate(u);delete m.lastItem;delete m.lastMenu}return r},Mouseup:function(s,u){if(!this.disabled){if(!this.menu.posted){if(this.timer){clearTimeout(this.timer);delete this.timer}this.menu.Post(s,u)}else{var t=document.getElementById("MathJax_MenuFrame").childNodes,r=t.length-1;while(r>=0){var v=t[r];v.menuItem.posted=false;v.parentNode.removeChild(v);if(v.menuItem===this.menu){break}r--}}}return h(s)}});a.ITEM.RADIO=a.ITEM.Subclass({variable:null,marker:(n?"\u25CF":"\u2713"),Init:function(s,r,t){if(!(s instanceof Array)){s=[s,s]}this.name=s;this.variable=r;this.With(t);if(this.value==null){this.value=this.name[0]}},Label:function(s,t){var r={className:"MathJax_MenuRadioCheck"};if(p.settings[this.variable]!==this.value){r={style:{display:"none"}}}return[["span",r,[this.marker]]," "+this.Name()]},Mouseup:function(u,v){if(!this.disabled){var w=v.parentNode.childNodes;for(var s=0,r=w.length;s<r;s++){var t=w[s].menuItem;if(t&&t.variable===this.variable){w[s].firstChild.style.display="none"}}v.firstChild.display="";p.settings[this.variable]=this.value;a.cookie[this.variable]=p.settings[this.variable];a.saveCookie();j.Post(["radio button",this])}this.Remove(u,v);if(this.action&&!this.disabled){this.action.call(a,this)}return h(u)}});a.ITEM.CHECKBOX=a.ITEM.Subclass({variable:null,marker:"\u2713",Init:function(s,r,t){if(!(s instanceof Array)){s=[s,s]}this.name=s;this.variable=r;this.With(t)},Label:function(s,t){var r={className:"MathJax_MenuCheck"};if(!p.settings[this.variable]){r={style:{display:"none"}}}return[["span",r,[this.marker]]," "+this.Name()]},Mouseup:function(r,s){if(!this.disabled){s.firstChild.display=(p.settings[this.variable]?"none":"");p.settings[this.variable]=!p.settings[this.variable];a.cookie[this.variable]=p.settings[this.variable];a.saveCookie();j.Post(["checkbox",this])}this.Remove(r,s);if(this.action&&!this.disabled){this.action.call(a,this)}return h(r)}});a.ITEM.LABEL=a.ITEM.Subclass({Init:function(r,s){if(!(r instanceof Array)){r=[r,r]}this.name=r;this.With(s)},Label:function(r,s){delete r.onmouseover,delete r.onmouseout;delete r.onmousedown;r.className+=" MathJax_MenuLabel";return[this.Name()]}});a.ITEM.RULE=a.ITEM.Subclass({Label:function(r,s){delete r.onmouseover,delete r.onmouseout;delete r.onmousedown;r.className+=" MathJax_MenuRule";return null}});a.About=function(){var t=b["HTML-CSS"]||{};var s=(t.imgFonts?"image":(t.fontInUse?(t.webFonts?"web":"local")+" "+t.fontInUse:(b.SVG?"web SVG":"generic")))+" fonts";var x=(!t.webFonts||t.imgFonts?null:t.allowWebFonts.replace(/otf/,"woff or otf")+" fonts");var r=["MathJax.js v"+MathJax.fileversion,["br"]];r.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(r,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]);a.About.GetJax(r,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]);a.About.GetJax(r,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]);r.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(r,MathJax.Extension,["Extension","%1 Extension v%2"],true);r.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[c.Browser+" v"+c.Browser.version+(x?" \u2014 "+o(x.replace(/ /g,""),x):"")]]);a.About.div=a.Background(a.About);var v=g.addElement(a.About.div,"div",{id:"MathJax_About"},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],o(s.replace(/ /g,""),"using "+s),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},r],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["img",{src:p.closeImg,style:{width:"21px",height:"21px",position:"absolute",top:".2em",right:".2em"},onclick:a.About.Remove}]]);MathJax.Localization.setCSS(v);var w=(document.documentElement||{});var u=window.innerHeight||w.clientHeight||w.scrollHeight||0;if(a.prototype.msieAboutBug){v.style.width="20em";v.style.position="absolute";v.style.left=Math.floor((document.documentElement.scrollWidth-v.offsetWidth)/2)+"px";v.style.top=(Math.floor((u-v.offsetHeight)/3)+document.body.scrollTop)+"px"}else{v.style.marginLeft=Math.floor(-v.offsetWidth/2)+"px";v.style.top=Math.floor((u-v.offsetHeight)/3)+"px"}};a.About.Remove=function(r){if(a.About.div){document.body.removeChild(a.About.div);delete a.About.div}};a.About.GetJax=function(s,x,v,u){var w=[];for(var y in x){if(x.hasOwnProperty(y)&&x[y]){if((u&&x[y].version)||(x[y].isa&&x[y].isa(x))){w.push(o(v[0],v[1],(x[y].id||y),x[y].version))}}}w.sort();for(var t=0,r=w.length;t<r;t++){s.push(w[t],["br"])}return s};a.Help=function(){k.Require("[MathJax]/extensions/HelpDialog.js",function(){MathJax.Extension.Help.Dialog()})};a.ShowSource=function(u){if(!u){u=window.event}var t={screenX:u.screenX,screenY:u.screenY};if(!a.jax){return}if(this.format==="MathML"){var r=MathJax.ElementJax.mml;if(r&&typeof(r.mbase.prototype.toMathML)!=="undefined"){try{a.ShowSource.Text(a.jax.root.toMathML(),u)}catch(s){if(!s.restart){throw s}f.After([this,a.ShowSource,t],s.restart)}}else{if(!k.loadingToMathML){k.loadingToMathML=true;a.ShowSource.Window(u);f.Queue(k.Require("[MathJax]/extensions/toMathML.js"),function(){delete k.loadingToMathML;if(!r.mbase.prototype.toMathML){r.mbase.prototype.toMathML=function(){}}},[this,a.ShowSource,t]);return}}}else{if(this.format==="Error"){a.ShowSource.Text(a.jax.errorText,u)}else{if(a.jax.originalText==null){alert(o("NoOriginalForm","No original form available"));return}a.ShowSource.Text(a.jax.originalText,u)}}};a.ShowSource.Window=function(s){if(!a.ShowSource.w){var t=[],r=p.windowSettings;for(var u in r){if(r.hasOwnProperty(u)){t.push(u+"="+r[u])}}a.ShowSource.w=window.open("","_blank",t.join(","))}return a.ShowSource.w};a.ShowSource.Text=function(v,t){var r=a.ShowSource.Window(t);delete a.ShowSource.w;v=v.replace(/^\s*/,"").replace(/\s*$/,"");v=v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var u=o("EqSource","MathJax Equation Source");if(a.isMobile){r.document.open();r.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+u+"</title></head><body style='font-size:85%'>");r.document.write("<pre>"+v+"</pre>");r.document.write("<hr><input type='button' value='"+o("Close","Close")+"' onclick='window.close()' />");r.document.write("</body></html>");r.document.close()}else{r.document.open();r.document.write("<html><head><title>"+u+"</title></head><body style='font-size:85%'>");r.document.write("<table><tr><td><pre>"+v+"</pre></td></tr></table>");r.document.write("</body></html>");r.document.close();var s=r.document.body.firstChild;setTimeout(function(){var A=(r.outerHeight-r.innerHeight)||30,z=(r.outerWidth-r.innerWidth)||30,w,B;z=Math.max(100,Math.min(Math.floor(0.5*screen.width),s.offsetWidth+z+25));A=Math.max(40,Math.min(Math.floor(0.5*screen.height),s.offsetHeight+A+25));r.resizeTo(z,A);if(t&&t.screenX!=null){w=Math.max(0,Math.min(t.screenX-Math.floor(z/2),screen.width-z-20));B=Math.max(0,Math.min(t.screenY-Math.floor(A/2),screen.height-A-20));r.moveTo(w,B)}},50)}};a.Scale=function(){var s=b["HTML-CSS"],r=b.NativeMML,v=b.SVG;var u=(s||r||v||{config:{scale:100}}).config.scale;var t=prompt(o("ScaleMath","Scale all mathematics (compared to surrounding text) by"),u+"%");if(t){if(t.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)){t=parseFloat(t);if(t){if(t!==u){if(s){s.config.scale=t}if(r){r.config.scale=t}if(v){v.config.scale=t}a.cookie.scale=t;a.saveCookie();c.Reprocess()}}else{alert(o("NonZeroScale","The scale should not be zero"))}}else{alert(o("PercentScale","The scale should be a percentage (e.g., 120%%)"))}}};a.Zoom=function(){if(!MathJax.Extension.MathZoom){k.Require("[MathJax]/extensions/MathZoom.js")}};a.Renderer=function(){var s=c.outputJax["jax/mml"];if(s[0]!==p.settings.renderer){var v=c.Browser,u,r=a.Renderer.Messages,t;switch(p.settings.renderer){case"NativeMML":if(!p.settings.warnedMML){if(v.isChrome&&v.version.substr(0,3)!=="24."){u=r.MML.WebKit}else{if(v.isSafari&&!v.versionAtLeast("5.0")){u=r.MML.WebKit}else{if(v.isMSIE){if(!v.hasMathPlayer){u=r.MML.MSIE}}else{u=r.MML[v]}}}t="warnedMML"}break;case"SVG":if(!p.settings.warnedSVG){if(v.isMSIE&&!e){u=r.SVG.MSIE}}break}if(u){u=o(u[0],u[1]);u+="\n\n";u+=o("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)");a.cookie.renderer=s[0].id;a.saveCookie();if(!confirm(u)){a.cookie.renderer=p.settings.renderer=g.Cookie.Get("menu").renderer;a.saveCookie();return}if(t){a.cookie.warned=p.settings.warned=true}a.cookie.renderer=p.settings.renderer;a.saveCookie()}c.Queue(["setRenderer",c,p.settings.renderer,"jax/mml"],["Rerender",c])}};a.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}};a.Font=function(){var r=b["HTML-CSS"];if(!r){return}document.location.reload()};a.Locale=function(){MathJax.Localization.setLocale(p.settings.locale);MathJax.Hub.Queue(["Reprocess",MathJax.Hub])};a.LoadLocale=function(){var r=prompt(o("LoadURL","Load translation data from this URL:"));if(r){if(!r.match(/\.js$/)){alert(o("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"))}k.Require(r,function(s){if(s!=k.STATUS.OK){alert(o("BadData","Failed to load translation data from %1",r))}})}};a.MPEvents=function(t){var s=p.settings.discoverable,r=a.MPEvents.Messages;if(!e){if(p.settings.mpMouse&&!confirm(o.apply(o,r.IE8warning))){delete a.cookie.mpContext;delete p.settings.mpContext;delete a.cookie.mpMouse;delete p.settings.mpMouse;a.saveCookie();return}p.settings.mpContext=p.settings.mpMouse;a.cookie.mpContext=a.cookie.mpMouse=p.settings.mpMouse;a.saveCookie();MathJax.Hub.Queue(["Rerender",MathJax.Hub])}else{if(!s&&t.name[1]==="Menu Events"&&p.settings.mpContext){alert(o.apply(o,r.IE9warning))}}};a.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]};c.Browser.Select({MSIE:function(r){var s=(document.compatMode==="BackCompat");var t=r.versionAtLeast("8.0")&&document.documentMode>7;a.Augment({margin:20,msieBackgroundBug:(document.documentMode<9),msieFixedPositionBug:(s||!t),msieAboutBug:s});if(e){delete p.styles["#MathJax_About"].filter;delete p.styles[".MathJax_Menu"].filter}},Firefox:function(r){a.skipMouseover=r.isMobile&&r.versionAtLeast("6.0");a.skipMousedown=r.isMobile}});a.isMobile=c.Browser.isMobile;a.noContextMenu=c.Browser.noContextMenu;a.CreateLocaleMenu=function(){if(!a.menu){return}var w=a.menu.Find("Language").menu,t=w.items;var s=[],y=MathJax.Localization.strings;for(var x in y){if(y.hasOwnProperty(x)){s.push(x)}}s=s.sort();w.items=[];for(var u=0,r=s.length;u<r;u++){var v=y[s[u]].menuTitle;if(v){v+=" ("+s[u]+")"}else{v=s[u]}w.items.push(m.RADIO([s[u],v],"locale",{action:a.Locale}))}w.items.push(t[t.length-2],t[t.length-1])};c.Register.StartupHook("End Config",function(){p.settings=c.config.menuSettings;if(typeof(p.settings.showRenderer)!=="undefined"){p.showRenderer=p.settings.showRenderer}if(typeof(p.settings.showFontMenu)!=="undefined"){p.showFontMenu=p.settings.showFontMenu}if(typeof(p.settings.showContext)!=="undefined"){p.showContext=p.settings.showContext}a.getCookie();a.menu=a(m.SUBMENU(["Show","Show Math As"],m.COMMAND(["MathMLcode","MathML Code"],a.ShowSource,{nativeTouch:true,format:"MathML"}),m.COMMAND(["Original","Original Form"],a.ShowSource,{nativeTouch:true}),m.RULE(),m.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints")),m.RULE(),m.SUBMENU(["Settings","Math Settings"],m.SUBMENU(["ZoomTrigger","Zoom Trigger"],m.RADIO(["Hover","Hover"],"zoom",{action:a.Zoom}),m.RADIO(["Click","Click"],"zoom",{action:a.Zoom}),m.RADIO(["DoubleClick","Double-Click"],"zoom",{action:a.Zoom}),m.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),m.RULE(),m.LABEL(["TriggerRequires","Trigger Requires:"]),m.CHECKBOX((c.Browser.isMac?["Option","Option"]:["Alt","Alt"]),"ALT"),m.CHECKBOX(["Command","Command"],"CMD",{hidden:!c.Browser.isMac}),m.CHECKBOX(["Control","Control"],"CTRL",{hidden:c.Browser.isMac}),m.CHECKBOX(["Shift","Shift"],"Shift")),m.SUBMENU(["ZoomFactor","Zoom Factor"],m.RADIO("125%","zscale"),m.RADIO("133%","zscale"),m.RADIO("150%","zscale"),m.RADIO("175%","zscale"),m.RADIO("200%","zscale"),m.RADIO("250%","zscale"),m.RADIO("300%","zscale"),m.RADIO("400%","zscale")),m.RULE(),m.SUBMENU(["Renderer","Math Renderer"],{hidden:!p.showRenderer},m.RADIO("HTML-CSS","renderer",{action:a.Renderer}),m.RADIO("MathML","renderer",{action:a.Renderer,value:"NativeMML"}),m.RADIO("SVG","renderer",{action:a.Renderer})),m.SUBMENU("MathPlayer",{hidden:!c.Browser.isMSIE||!p.showMathPlayer,disabled:!c.Browser.hasMathPlayer},m.LABEL(["MPHandles","Let MathPlayer Handle:"]),m.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:a.MPEvents,hidden:!e}),m.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:a.MPEvents,hidden:!e}),m.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:a.MPEvents,hidden:e})),m.SUBMENU(["FontPrefs","Font Preference"],{hidden:!p.showFontMenu},m.LABEL(["ForHTMLCSS","For HTML-CSS:"]),m.RADIO(["Auto","Auto"],"font",{action:a.Font}),m.RULE(),m.RADIO(["TeXLocal","TeX (local)"],"font",{action:a.Font}),m.RADIO(["TeXWeb","TeX (web)"],"font",{action:a.Font}),m.RADIO(["TeXImage","TeX (image)"],"font",{action:a.Font}),m.RULE(),m.RADIO(["STIXlocal","STIX (local)"],"font",{action:a.Font})),m.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!p.showContext},m.RADIO("MathJax","context"),m.RADIO(["Browser","Browser"],"context")),m.COMMAND(["Scale","Scale All Math ..."],a.Scale),m.RULE().With({hidden:!p.showDiscoverable,name:["","discover_rule"]}),m.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!p.showDiscoverable})),m.SUBMENU(["Locale","Language"],{hidden:!p.showLocale},m.RADIO("en","locale",{action:a.Locale}),m.RULE().With({hidden:!p.showLocaleURL,name:["","localURL_rule"]}),m.COMMAND(["LoadLocale","Load from URL ..."],a.LoadLocale,{hidden:!p.showLocaleURL})),m.RULE(),m.COMMAND(["About","About MathJax"],a.About),m.COMMAND(["Help","MathJax Help"],a.Help));if(a.isMobile){(function(){var s=p.settings;var r=a.menu.Find("Math Settings","Zoom Trigger").menu;r.items[0].disabled=r.items[1].disabled=true;if(s.zoom==="Hover"||s.zoom=="Click"){s.zoom="None"}r.items=r.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){a.ITEM.SUBMENU.Augment({marker:"\u00BB"})}})()}a.CreateLocaleMenu()});a.showRenderer=function(r){a.cookie.showRenderer=p.showRenderer=r;a.saveCookie();a.menu.Find("Math Settings","Math Renderer").hidden=!r};a.showMathPlayer=function(r){a.cookie.showMathPlayer=p.showMathPlayer=r;a.saveCookie();a.menu.Find("Math Settings","MathPlayer").hidden=!r};a.showFontMenu=function(r){a.cookie.showFontMenu=p.showFontMenu=r;a.saveCookie();a.menu.Find("Math Settings","Font Preference").hidden=!r};a.showContext=function(r){a.cookie.showContext=p.showContext=r;a.saveCookie();a.menu.Find("Math Settings","Contextual Menu").hidden=!r};a.showDiscoverable=function(r){a.cookie.showDiscoverable=p.showDiscoverable=r;a.saveCookie();a.menu.Find("Math Settings","Highlight on Hover").hidden=!r;a.menu.Find("Math Settings","discover_rule").hidden=!r};a.showLocale=function(r){a.cookie.showLocale=p.showLocale=r;a.saveCookie();a.menu.Find("Language").hidden=!r};MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){if(!MathJax.OutputJax["HTML-CSS"].config.imageFont){a.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=true}});f.Queue(c.Register.StartupHook("End Config",{}),["getImages",a],["Styles",k,p.styles],["Post",c.Startup.signal,"MathMenu Ready"],["loadComplete",k,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);

MathJax.ElementJax.mml=MathJax.ElementJax({mimeType:"jax/mml"},{id:"mml",version:"2.2",directory:MathJax.ElementJax.directory+"/mml",extensionDir:MathJax.ElementJax.extensionDir+"/mml",optableDir:MathJax.ElementJax.directory+"/mml/optable"});MathJax.ElementJax.mml.Augment({Init:function(){if(arguments.length===1&&arguments[0].type==="math"){this.root=arguments[0]}else{this.root=MathJax.ElementJax.mml.math.apply(this,arguments)}if(this.root.attr&&this.root.attr.mode){if(!this.root.display&&this.root.attr.mode==="display"){this.root.display="block";this.root.attrNames.push("display")}delete this.root.attr.mode;for(var b=0,a=this.root.attrNames.length;b<a;b++){if(this.root.attrNames[b]==="mode"){this.root.attrNames.splice(b,1);break}}}}},{INHERIT:"_inherit_",AUTO:"_auto_",SIZE:{INFINITY:"infinity",SMALL:"small",NORMAL:"normal",BIG:"big"},COLOR:{TRANSPARENT:"transparent"},VARIANT:{NORMAL:"normal",BOLD:"bold",ITALIC:"italic",BOLDITALIC:"bold-italic",DOUBLESTRUCK:"double-struck",FRAKTUR:"fraktur",BOLDFRAKTUR:"bold-fraktur",SCRIPT:"script",BOLDSCRIPT:"bold-script",SANSSERIF:"sans-serif",BOLDSANSSERIF:"bold-sans-serif",SANSSERIFITALIC:"sans-serif-italic",SANSSERIFBOLDITALIC:"sans-serif-bold-italic",MONOSPACE:"monospace",INITIAL:"inital",TAILED:"tailed",LOOPED:"looped",STRETCHED:"stretched",CALIGRAPHIC:"-tex-caligraphic",OLDSTYLE:"-tex-oldstyle"},FORM:{PREFIX:"prefix",INFIX:"infix",POSTFIX:"postfix"},LINEBREAK:{AUTO:"auto",NEWLINE:"newline",NOBREAK:"nobreak",GOODBREAK:"goodbreak",BADBREAK:"badbreak"},LINEBREAKSTYLE:{BEFORE:"before",AFTER:"after",DUPLICATE:"duplicate",INFIXLINBREAKSTYLE:"infixlinebreakstyle"},INDENTALIGN:{LEFT:"left",CENTER:"center",RIGHT:"right",AUTO:"auto",ID:"id",INDENTALIGN:"indentalign"},INDENTSHIFT:{INDENTSHIFT:"indentshift"},LINETHICKNESS:{THIN:"thin",MEDIUM:"medium",THICK:"thick"},NOTATION:{LONGDIV:"longdiv",ACTUARIAL:"actuarial",RADICAL:"radical",BOX:"box",ROUNDEDBOX:"roundedbox",CIRCLE:"circle",LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",UPDIAGONALSTRIKE:"updiagonalstrike",DOWNDIAGONALSTRIKE:"downdiagonalstrike",VERTICALSTRIKE:"verticalstrike",HORIZONTALSTRIKE:"horizontalstrike",MADRUWB:"madruwb"},ALIGN:{TOP:"top",BOTTOM:"bottom",CENTER:"center",BASELINE:"baseline",AXIS:"axis",LEFT:"left",RIGHT:"right"},LINES:{NONE:"none",SOLID:"solid",DASHED:"dashed"},SIDE:{LEFT:"left",RIGHT:"right",LEFTOVERLAP:"leftoverlap",RIGHTOVERLAP:"rightoverlap"},WIDTH:{AUTO:"auto",FIT:"fit"},ACTIONTYPE:{TOGGLE:"toggle",STATUSLINE:"statusline",TOOLTIP:"tooltip",INPUT:"input"},LENGTH:{VERYVERYTHINMATHSPACE:"veryverythinmathspace",VERYTHINMATHSPACE:"verythinmathspace",THINMATHSPACE:"thinmathspace",MEDIUMMATHSPACE:"mediummathspace",THICKMATHSPACE:"thickmathspace",VERYTHICKMATHSPACE:"verythickmathspace",VERYVERYTHICKMATHSPACE:"veryverythickmathspace",NEGATIVEVERYVERYTHINMATHSPACE:"negativeveryverythinmathspace",NEGATIVEVERYTHINMATHSPACE:"negativeverythinmathspace",NEGATIVETHINMATHSPACE:"negativethinmathspace",NEGATIVEMEDIUMMATHSPACE:"negativemediummathspace",NEGATIVETHICKMATHSPACE:"negativethickmathspace",NEGATIVEVERYTHICKMATHSPACE:"negativeverythickmathspace",NEGATIVEVERYVERYTHICKMATHSPACE:"negativeveryverythickmathspace"},OVERFLOW:{LINBREAK:"linebreak",SCROLL:"scroll",ELIDE:"elide",TRUNCATE:"truncate",SCALE:"scale"},UNIT:{EM:"em",EX:"ex",PX:"px",IN:"in",CM:"cm",MM:"mm",PT:"pt",PC:"pc"},TEXCLASS:{ORD:0,OP:1,BIN:2,REL:3,OPEN:4,CLOSE:5,PUNCT:6,INNER:7,VCENTER:8,NONE:-1},TEXCLASSNAMES:["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"],copyAttributes:{fontfamily:true,fontsize:true,fontweight:true,fontstyle:true,color:true,background:true,id:true,"class":true,href:true,style:true},skipAttributes:{texClass:true,useHeight:true,texprimestyle:true},copyAttributeNames:["fontfamily","fontsize","fontweight","fontstyle","color","background","id","class","href","style"]});(function(a){a.mbase=MathJax.Object.Subclass({type:"base",isToken:false,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT},noInherit:{},noInheritAttribute:{texClass:true},linebreakContainer:false,Init:function(){this.data=[];if(this.inferRow&&!(arguments.length===1&&arguments[0].inferred)){this.Append(a.mrow().With({inferred:true,notParent:true}))}this.Append.apply(this,arguments)},With:function(d){for(var e in d){if(d.hasOwnProperty(e)){this[e]=d[e]}}return this},Append:function(){if(this.inferRow&&this.data.length){this.data[0].Append.apply(this.data[0],arguments)}else{for(var e=0,d=arguments.length;e<d;e++){this.SetData(this.data.length,arguments[e])}}},SetData:function(d,e){if(e!=null){if(!(e instanceof a.mbase)){e=(this.isToken?a.chars(e):a.mtext(e))}e.parent=this;e.setInherit(this.inheritFromMe?this:this.inherit)}this.data[d]=e},Parent:function(){var d=this.parent;while(d&&d.notParent){d=d.parent}return d},Get:function(e,j){if(this[e]!=null){return this[e]}if(this.attr&&this.attr[e]!=null){return this.attr[e]}var f=this.Parent();if(f&&f["adjustChild_"+e]!=null){return(f["adjustChild_"+e])(this.childPosition(),j)}var i=this.inherit;var d=i;while(i){var h=i[e];if(h==null&&i.attr){h=i.attr[e]}if(h!=null&&i.noInheritAttribute&&!i.noInheritAttribute[e]){var g=i.noInherit[this.type];if(!(g&&g[e])){return h}}d=i;i=i.inherit}if(!j){if(this.defaults[e]===a.AUTO){return this.autoDefault(e)}if(this.defaults[e]!==a.INHERIT&&this.defaults[e]!=null){return this.defaults[e]}if(d){return d.defaults[e]}}return null},hasValue:function(d){return(this.Get(d,true)!=null)},getValues:function(){var e={};for(var f=0,d=arguments.length;f<d;f++){e[arguments[f]]=this.Get(arguments[f])}return e},adjustChild_scriptlevel:function(e,d){return this.Get("scriptlevel",d)},adjustChild_displaystyle:function(e,d){return this.Get("displaystyle",d)},adjustChild_texprimestyle:function(e,d){return this.Get("texprimestyle",d)},childPosition:function(){var g=this,f=g.parent;while(f.notParent){g=f;f=g.parent}for(var e=0,d=f.data.length;e<d;e++){if(f.data[e]===g){return e}}return null},setInherit:function(f){if(f!==this.inherit&&this.inherit==null){this.inherit=f;for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&this.data[e].setInherit){this.data[e].setInherit(f)}}}},setTeXclass:function(d){this.getPrevClass(d);return(typeof(this.texClass)!=="undefined"?this:d)},getPrevClass:function(d){if(d){this.prevClass=d.Get("texClass");this.prevLevel=d.Get("scriptlevel")}},updateTeXclass:function(d){if(d){this.prevClass=d.prevClass;delete d.prevClass;this.prevLevel=d.prevLevel;delete d.prevLevel;this.texClass=d.Get("texClass")}},texSpacing:function(){var e=(this.prevClass!=null?this.prevClass:a.TEXCLASS.NONE);var d=(this.Get("texClass")||a.TEXCLASS.ORD);if(e===a.TEXCLASS.NONE||d===a.TEXCLASS.NONE){return""}if(e===a.TEXCLASS.VCENTER){e=a.TEXCLASS.ORD}if(d===a.TEXCLASS.VCENTER){d=a.TEXCLASS.ORD}var f=this.TEXSPACE[e][d];if(this.prevLevel>0&&this.Get("scriptlevel")>0&&f>=0){return""}return this.TEXSPACELENGTH[Math.abs(f)]},TEXSPACELENGTH:["",a.LENGTH.THINMATHSPACE,a.LENGTH.MEDIUMMATHSPACE,a.LENGTH.THICKMATHSPACE],TEXSPACE:[[0,-1,2,3,0,0,0,1],[-1,-1,0,3,0,0,0,1],[2,2,0,0,2,0,0,2],[3,3,0,0,3,0,0,3],[0,0,0,0,0,0,0,0],[0,-1,2,3,0,0,0,1],[1,1,0,1,1,1,1,1],[1,-1,2,3,1,0,1,1]],autoDefault:function(d){return""},isSpacelike:function(){return false},isEmbellished:function(){return false},Core:function(){return this},CoreMO:function(){return this},hasNewline:function(){if(this.isEmbellished()){return this.CoreMO().hasNewline()}if(this.isToken||this.linebreakContainer){return false}for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&this.data[e].hasNewline()){return true}}return false},array:function(){if(this.inferred){return this.data}else{return[this]}},toString:function(){return this.type+"("+this.data.join(",")+")"}},{childrenSpacelike:function(){for(var e=0,d=this.data.length;e<d;e++){if(!this.data[e].isSpacelike()){return false}}return true},childEmbellished:function(){return(this.data[0]&&this.data[0].isEmbellished())},childCore:function(){return this.data[0]},childCoreMO:function(){return(this.data[0]?this.data[0].CoreMO():null)},setChildTeXclass:function(d){if(this.data[0]){d=this.data[0].setTeXclass(d);this.updateTeXclass(this.data[0])}return d},setBaseTeXclasses:function(f){this.getPrevClass(f);this.texClass=null;if(this.data[0]){if(this.isEmbellished()||this.data[0].isa(a.mi)){f=this.data[0].setTeXclass(f);this.updateTeXclass(this.Core())}else{this.data[0].setTeXclass();f=this}}else{f=this}for(var e=1,d=this.data.length;e<d;e++){if(this.data[e]){this.data[e].setTeXclass()}}return f},setSeparateTeXclasses:function(f){this.getPrevClass(f);for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]){this.data[e].setTeXclass()}}if(this.isEmbellished()){this.updateTeXclass(this.Core())}return this}});a.mi=a.mbase.Subclass({type:"mi",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.AUTO,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT},autoDefault:function(e){if(e==="mathvariant"){var d=(this.data[0]||"").toString();return(d.length===1||(d.length===2&&d.charCodeAt(0)>=55296&&d.charCodeAt(0)<56320)?a.VARIANT.ITALIC:a.VARIANT.NORMAL)}return""},setTeXclass:function(e){this.getPrevClass(e);var d=this.data.join("");if(d.length>1&&d.match(/^[a-z][a-z0-9]*$/i)&&this.texClass===a.TEXCLASS.ORD){this.texClass=a.TEXCLASS.OP;this.autoOP=true}return this}});a.mn=a.mbase.Subclass({type:"mn",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT}});a.mo=a.mbase.Subclass({type:"mo",isToken:true,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT,form:a.AUTO,fence:a.AUTO,separator:a.AUTO,lspace:a.AUTO,rspace:a.AUTO,stretchy:a.AUTO,symmetric:a.AUTO,maxsize:a.AUTO,minsize:a.AUTO,largeop:a.AUTO,movablelimits:a.AUTO,accent:a.AUTO,linebreak:a.LINEBREAK.AUTO,lineleading:a.INHERIT,linebreakstyle:a.AUTO,linebreakmultchar:a.INHERIT,indentalign:a.INHERIT,indentshift:a.INHERIT,indenttarget:a.INHERIT,indentalignfirst:a.INHERIT,indentshiftfirst:a.INHERIT,indentalignlast:a.INHERIT,indentshiftlast:a.INHERIT,texClass:a.AUTO},defaultDef:{form:a.FORM.INFIX,fence:false,separator:false,lspace:a.LENGTH.THICKMATHSPACE,rspace:a.LENGTH.THICKMATHSPACE,stretchy:false,symmetric:true,maxsize:a.SIZE.INFINITY,minsize:"0em",largeop:false,movablelimits:false,accent:false,linebreak:a.LINEBREAK.AUTO,lineleading:"1ex",linebreakstyle:"before",indentalign:a.INDENTALIGN.AUTO,indentshift:"0",indenttarget:"",indentalignfirst:a.INDENTALIGN.INDENTALIGN,indentshiftfirst:a.INDENTSHIFT.INDENTSHIFT,indentalignlast:a.INDENTALIGN.INDENTALIGN,indentshiftlast:a.INDENTSHIFT.INDENTSHIFT,texClass:a.TEXCLASS.REL},SPACE_ATTR:{lspace:1,rspace:2,form:4},useMMLspacing:7,autoDefault:function(f,l){var k=this.def;if(!k){if(f==="form"){this.useMMLspacing&=~this.SPACE_ATTR.form;return this.getForm()}var j=this.data.join("");var e=[this.Get("form"),a.FORM.INFIX,a.FORM.POSTFIX,a.FORM.PREFIX];for(var g=0,d=e.length;g<d;g++){var h=this.OPTABLE[e[g]][j];if(h){k=this.makeDef(h);break}}if(!k){k=this.CheckRange(j)}if(!k&&l){k={}}else{if(!k){k=MathJax.Hub.Insert({},this.defaultDef)}k.form=e[0];this.def=k}}this.useMMLspacing&=~(this.SPACE_ATTR[f]||0);if(k[f]!=null){return k[f]}else{if(!l){return this.defaultDef[f]}}return""},CheckRange:function(h){var j=h.charCodeAt(0);if(j>=55296&&j<56320){j=(((j-55296)<<10)+(h.charCodeAt(1)-56320))+65536}for(var f=0,d=this.RANGES.length;f<d&&this.RANGES[f][0]<=j;f++){if(j<=this.RANGES[f][1]){if(this.RANGES[f][3]){var e=a.optableDir+"/"+this.RANGES[f][3]+".js";this.RANGES[f][3]=null;MathJax.Hub.RestartAfter(MathJax.Ajax.Require(e))}var g=a.TEXCLASSNAMES[this.RANGES[f][2]];g=this.OPTABLE.infix[h]=a.mo.OPTYPES[g==="BIN"?"BIN3":g];return this.makeDef(g)}}return null},makeDef:function(e){if(e[2]==null){e[2]=this.defaultDef.texClass}if(!e[3]){e[3]={}}var d=MathJax.Hub.Insert({},e[3]);d.lspace=this.SPACE[e[0]];d.rspace=this.SPACE[e[1]];d.texClass=e[2];if(d.texClass===a.TEXCLASS.REL&&(this.movablelimits||this.data.join("").match(/^[a-z]+$/i))){d.texClass=a.TEXCLASS.OP}return d},getForm:function(){var d=this,f=this.parent,e=this.Parent();while(e&&e.isEmbellished()){d=f;f=e.parent;e=e.Parent()}if(f&&f.type==="mrow"&&f.NonSpaceLength()!==1){if(f.FirstNonSpace()===d){return a.FORM.PREFIX}if(f.LastNonSpace()===d){return a.FORM.POSTFIX}}return a.FORM.INFIX},isEmbellished:function(){return true},hasNewline:function(){return(this.Get("linebreak")===a.LINEBREAK.NEWLINE)},setTeXclass:function(d){this.getValues("lspace","rspace");if(this.useMMLspacing){this.texClass=a.TEXCLASS.NONE;return this}this.texClass=this.Get("texClass");if(this.data.join("")==="\u2061"){if(d){d.texClass=a.TEXCLASS.OP}this.texClass=this.prevClass=a.TEXCLASS.NONE;return d}return this.adjustTeXclass(d)},adjustTeXclass:function(d){if(this.texClass===a.TEXCLASS.NONE){return d}if(d){if(d.autoOP&&(this.texClass===a.TEXCLASS.BIN||this.texClass===a.TEXCLASS.REL)){d.texClass=a.TEXCLASS.ORD}this.prevClass=d.texClass||a.TEXCLASS.ORD;this.prevLevel=d.Get("scriptlevel")}else{this.prevClass=a.TEXCLASS.NONE}if(this.texClass===a.TEXCLASS.BIN&&(this.prevClass===a.TEXCLASS.NONE||this.prevClass===a.TEXCLASS.BIN||this.prevClass===a.TEXCLASS.OP||this.prevClass===a.TEXCLASS.REL||this.prevClass===a.TEXCLASS.OPEN||this.prevClass===a.TEXCLASS.PUNCT)){this.texClass=a.TEXCLASS.ORD}else{if(this.prevClass===a.TEXCLASS.BIN&&(this.texClass===a.TEXCLASS.REL||this.texClass===a.TEXCLASS.CLOSE||this.texClass===a.TEXCLASS.PUNCT)){d.texClass=this.prevClass=a.TEXCLASS.ORD}}return this}});a.mtext=a.mbase.Subclass({type:"mtext",isToken:true,isSpacelike:function(){return true},texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT}});a.mspace=a.mbase.Subclass({type:"mspace",isToken:true,isSpacelike:function(){return true},defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,width:"0em",height:"0ex",depth:"0ex",linebreak:a.LINEBREAK.AUTO},hasDimAttr:function(){return(this.hasValue("width")||this.hasValue("height")||this.hasValue("depth"))},hasNewline:function(){return(!this.hasDimAttr()&&this.Get("linebreak")===a.LINEBREAK.NEWLINE)}});a.ms=a.mbase.Subclass({type:"ms",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathvariant:a.INHERIT,mathsize:a.INHERIT,mathbackground:a.INHERIT,mathcolor:a.INHERIT,lquote:'"',rquote:'"'}});a.mglyph=a.mbase.Subclass({type:"mglyph",isToken:true,texClass:a.TEXCLASS.ORD,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,alt:"",src:"",width:a.AUTO,height:a.AUTO,valign:"0em"}});a.mrow=a.mbase.Subclass({type:"mrow",isSpacelike:a.mbase.childrenSpacelike,inferred:false,notParent:false,isEmbellished:function(){var e=false;for(var f=0,d=this.data.length;f<d;f++){if(this.data[f]==null){continue}if(this.data[f].isEmbellished()){if(e){return false}e=true;this.core=f}else{if(!this.data[f].isSpacelike()){return false}}}return e},NonSpaceLength:function(){var f=0;for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&!this.data[e].isSpacelike()){f++}}return f},FirstNonSpace:function(){for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]&&!this.data[e].isSpacelike()){return this.data[e]}}return null},LastNonSpace:function(){for(var d=this.data.length-1;d>=0;d--){if(this.data[0]&&!this.data[d].isSpacelike()){return this.data[d]}}return null},Core:function(){if(!(this.isEmbellished())||typeof(this.core)==="undefined"){return this}return this.data[this.core]},CoreMO:function(){if(!(this.isEmbellished())||typeof(this.core)==="undefined"){return this}return this.data[this.core].CoreMO()},toString:function(){if(this.inferred){return"["+this.data.join(",")+"]"}return this.SUPER(arguments).toString.call(this)},setTeXclass:function(f){for(var e=0,d=this.data.length;e<d;e++){if(this.data[e]){f=this.data[e].setTeXclass(f)}}if(this.data[0]){this.updateTeXclass(this.data[0])}return f}});a.mfrac=a.mbase.Subclass({type:"mfrac",num:0,den:1,linebreakContainer:true,texClass:a.TEXCLASS.INNER,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,linethickness:a.LINETHICKNESS.MEDIUM,numalign:a.ALIGN.CENTER,denomalign:a.ALIGN.CENTER,bevelled:false},adjustChild_displaystyle:function(d){return false},adjustChild_scriptlevel:function(e){var d=this.Get("scriptlevel");if(!this.Get("displaystyle")||d>0){d++}return d},adjustChild_texprimestyle:function(d){if(d==this.den){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setSeparateTeXclasses});a.msqrt=a.mbase.Subclass({type:"msqrt",inferRow:true,linebreakContainer:true,texClass:a.TEXCLASS.ORD,setTeXclass:a.mbase.setSeparateTeXclasses,adjustChild_texprimestyle:function(d){return true}});a.mroot=a.mbase.Subclass({type:"mroot",linebreakContainer:true,texClass:a.TEXCLASS.ORD,adjustChild_displaystyle:function(d){if(d===1){return false}return this.Get("displaystyle")},adjustChild_scriptlevel:function(e){var d=this.Get("scriptlevel");if(e===1){d+=2}return d},adjustChild_texprimestyle:function(d){if(d===0){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setSeparateTeXclasses});a.mstyle=a.mbase.Subclass({type:"mstyle",isSpacelike:a.mbase.childrenSpacelike,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,inferRow:true,defaults:{scriptlevel:a.INHERIT,displaystyle:a.INHERIT,scriptsizemultiplier:Math.sqrt(1/2),scriptminsize:"8pt",mathbackground:a.INHERIT,mathcolor:a.INHERIT,infixlinebreakstyle:a.LINEBREAKSTYLE.BEFORE,decimalseparator:"."},adjustChild_scriptlevel:function(f){var e=this.scriptlevel;if(e==null){e=this.Get("scriptlevel")}else{if(String(e).match(/^ *[-+]/)){delete this.scriptlevel;var d=this.Get("scriptlevel");this.scriptlevel=e;e=d+parseInt(e)}}return e},inheritFromMe:true,noInherit:{mpadded:{width:true,height:true,depth:true,lspace:true,voffset:true},mtable:{width:true,height:true,depth:true,align:true}},setTeXclass:a.mbase.setChildTeXclass});a.merror=a.mbase.Subclass({type:"merror",inferRow:true,linebreakContainer:true,texClass:a.TEXCLASS.ORD});a.mpadded=a.mbase.Subclass({type:"mpadded",inferRow:true,isSpacelike:a.mbase.childrenSpacelike,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,width:"",height:"",depth:"",lspace:0,voffset:0},setTeXclass:a.mbase.setChildTeXclass});a.mphantom=a.mbase.Subclass({type:"mphantom",texClass:a.TEXCLASS.ORD,inferRow:true,isSpacelike:a.mbase.childrenSpacelike,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,setTeXclass:a.mbase.setChildTeXclass});a.mfenced=a.mbase.Subclass({type:"mfenced",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,open:"(",close:")",separators:","},texClass:a.TEXCLASS.OPEN,setTeXclass:function(g){this.getPrevClass(g);var e=this.getValues("open","close","separators");e.open=e.open.replace(/[ \t\n\r]/g,"");e.close=e.close.replace(/[ \t\n\r]/g,"");e.separators=e.separators.replace(/[ \t\n\r]/g,"");if(e.open!==""){this.SetData("open",a.mo(e.open).With({stretchy:true,texClass:a.TEXCLASS.OPEN}));g=this.data.open.setTeXclass(g)}if(e.separators!==""){while(e.separators.length<this.data.length){e.separators+=e.separators.charAt(e.separators.length-1)}}if(this.data[0]){g=this.data[0].setTeXclass(g)}for(var f=1,d=this.data.length;f<d;f++){if(this.data[f]){if(e.separators!==""){this.SetData("sep"+f,a.mo(e.separators.charAt(f-1)));g=this.data["sep"+f].setTeXclass(g)}g=this.data[f].setTeXclass(g)}}if(e.close!==""){this.SetData("close",a.mo(e.close).With({stretchy:true,texClass:a.TEXCLASS.CLOSE}));g=this.data.close.setTeXclass(g)}this.updateTeXclass(this.data.open);return g}});a.menclose=a.mbase.Subclass({type:"menclose",inferRow:true,linebreakContainer:true,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,notation:a.NOTATION.LONGDIV,texClass:a.TEXCLASS.ORD},setTeXclass:a.mbase.setSeparateTeXclasses});a.msubsup=a.mbase.Subclass({type:"msubsup",base:0,sub:1,sup:2,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,subscriptshift:"",superscriptshift:"",texClass:a.AUTO},autoDefault:function(d){if(d==="texClass"){return(this.isEmbellished()?this.CoreMO().Get(d):a.TEXCLASS.ORD)}return 0},adjustChild_displaystyle:function(d){if(d>0){return false}return this.Get("displaystyle")},adjustChild_scriptlevel:function(e){var d=this.Get("scriptlevel");if(e>0){d++}return d},adjustChild_texprimestyle:function(d){if(d===this.sub){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setBaseTeXclasses});a.msub=a.msubsup.Subclass({type:"msub"});a.msup=a.msubsup.Subclass({type:"msup",sub:2,sup:1});a.mmultiscripts=a.msubsup.Subclass({type:"mmultiscripts",adjustChild_texprimestyle:function(d){if(d%2===1){return true}return this.Get("texprimestyle")}});a.mprescripts=a.mbase.Subclass({type:"mprescripts"});a.none=a.mbase.Subclass({type:"none"});a.munderover=a.mbase.Subclass({type:"munderover",base:0,under:1,over:2,sub:1,sup:2,ACCENTS:["","accentunder","accent"],linebreakContainer:true,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,accent:a.AUTO,accentunder:a.AUTO,align:a.ALIGN.CENTER,texClass:a.AUTO,subscriptshift:"",superscriptshift:""},autoDefault:function(d){if(d==="texClass"){return(this.isEmbellished()?this.CoreMO().Get(d):a.TEXCLASS.ORD)}if(d==="accent"&&this.data[this.over]){return this.data[this.over].CoreMO().Get("accent")}if(d==="accentunder"&&this.data[this.under]){return this.data[this.under].CoreMO().Get("accent")}return false},adjustChild_displaystyle:function(d){if(d>0){return false}return this.Get("displaystyle")},adjustChild_scriptlevel:function(f){var e=this.Get("scriptlevel");var d=(this.data[this.base]&&!this.Get("displaystyle")&&this.data[this.base].CoreMO().Get("movablelimits"));if(f==this.under&&(d||!this.Get("accentunder"))){e++}if(f==this.over&&(d||!this.Get("accent"))){e++}return e},adjustChild_texprimestyle:function(d){if(d===this.base&&this.data[this.over]){return true}return this.Get("texprimestyle")},setTeXclass:a.mbase.setBaseTeXclasses});a.munder=a.munderover.Subclass({type:"munder"});a.mover=a.munderover.Subclass({type:"mover",over:1,under:2,sup:1,sub:2,ACCENTS:["","accent","accentunder"]});a.mtable=a.mbase.Subclass({type:"mtable",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,align:a.ALIGN.AXIS,rowalign:a.ALIGN.BASELINE,columnalign:a.ALIGN.CENTER,groupalign:"{left}",alignmentscope:true,columnwidth:a.WIDTH.AUTO,width:a.WIDTH.AUTO,rowspacing:"1ex",columnspacing:".8em",rowlines:a.LINES.NONE,columnlines:a.LINES.NONE,frame:a.LINES.NONE,framespacing:"0.4em 0.5ex",equalrows:false,equalcolumns:false,displaystyle:false,side:a.SIDE.RIGHT,minlabelspacing:"0.8em",texClass:a.TEXCLASS.ORD,useHeight:1},inheritFromMe:true,noInherit:{mover:{align:true},munder:{align:true},munderover:{align:true},mtable:{align:true,rowalign:true,columnalign:true,groupalign:true,alignmentscope:true,columnwidth:true,width:true,rowspacing:true,columnspacing:true,rowlines:true,columnlines:true,frame:true,framespacing:true,equalrows:true,equalcolumns:true,side:true,minlabelspacing:true,texClass:true,useHeight:1}},linebreakContainer:true,Append:function(){for(var e=0,d=arguments.length;e<d;e++){if(!((arguments[e] instanceof a.mtr)||(arguments[e] instanceof a.mlabeledtr))){arguments[e]=a.mtd(arguments[e])}}this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:a.mbase.setSeparateTeXclasses});a.mtr=a.mbase.Subclass({type:"mtr",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,rowalign:a.INHERIT,columnalign:a.INHERIT,groupalign:a.INHERIT},inheritFromMe:true,noInherit:{mrow:{rowalign:true,columnalign:true,groupalign:true},mtable:{rowalign:true,columnalign:true,groupalign:true}},linebreakContainer:true,Append:function(){for(var e=0,d=arguments.length;e<d;e++){if(!(arguments[e] instanceof a.mtd)){arguments[e]=a.mtd(arguments[e])}}this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:a.mbase.setSeparateTeXclasses});a.mtd=a.mbase.Subclass({type:"mtd",inferRow:true,linebreakContainer:true,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,rowspan:1,columnspan:1,rowalign:a.INHERIT,columnalign:a.INHERIT,groupalign:a.INHERIT},setTeXclass:a.mbase.setSeparateTeXclasses});a.maligngroup=a.mbase.Subclass({type:"malign",isSpacelike:function(){return true},defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,groupalign:a.INHERIT},inheritFromMe:true,noInherit:{mrow:{groupalign:true},mtable:{groupalign:true}}});a.malignmark=a.mbase.Subclass({type:"malignmark",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,edge:a.SIDE.LEFT},isSpacelike:function(){return true}});a.mlabeledtr=a.mtr.Subclass({type:"mlabeledtr"});a.maction=a.mbase.Subclass({type:"maction",defaults:{mathbackground:a.INHERIT,mathcolor:a.INHERIT,actiontype:a.ACTIONTYPE.TOGGLE,selection:1},selected:function(){return this.data[this.Get("selection")-1]||a.NULL},isEmbellished:function(){return this.selected().isEmbellished()},isSpacelike:function(){return this.selected().isSpacelike()},Core:function(){return this.selected().Core()},CoreMO:function(){return this.selected().CoreMO()},setTeXclass:function(d){if(this.Get("actiontype")===a.ACTIONTYPE.TOOLTIP&&this.data[1]){this.data[1].setTeXclass()}return this.selected().setTeXclass(d)}});a.semantics=a.mbase.Subclass({type:"semantics",notParent:true,isEmbellished:a.mbase.childEmbellished,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,defaults:{definitionURL:null,encoding:null},setTeXclass:a.mbase.setChildTeXclass});a.annotation=a.mbase.Subclass({type:"annotation",isToken:true,linebreakContainer:true,defaults:{definitionURL:null,encoding:null,cd:"mathmlkeys",name:"",src:null}});a["annotation-xml"]=a.mbase.Subclass({type:"annotation-xml",linebreakContainer:true,defaults:{definitionURL:null,encoding:null,cd:"mathmlkeys",name:"",src:null}});a.math=a.mstyle.Subclass({type:"math",defaults:{mathvariant:a.VARIANT.NORMAL,mathsize:a.SIZE.NORMAL,mathcolor:"",mathbackground:a.COLOR.TRANSPARENT,scriptlevel:0,displaystyle:a.AUTO,display:"inline",maxwidth:"",overflow:a.OVERFLOW.LINEBREAK,altimg:"","altimg-width":"","altimg-height":"","altimg-valign":"",alttext:"",cdgroup:"",scriptsizemultiplier:Math.sqrt(1/2),scriptminsize:"8px",infixlinebreakstyle:a.LINEBREAKSTYLE.BEFORE,lineleading:"1ex",indentshift:"auto",indentalign:a.INDENTALIGN.AUTO,indentalignfirst:a.INDENTALIGN.INDENTALIGN,indentshiftfirst:a.INDENTSHIFT.INDENTSHIFT,indentalignlast:a.INDENTALIGN.INDENTALIGN,indentshiftlast:a.INDENTSHIFT.INDENTSHIFT,decimalseparator:".",texprimestyle:false},autoDefault:function(d){if(d==="displaystyle"){return this.Get("display")==="block"}return""},linebreakContainer:true,setTeXclass:a.mbase.setChildTeXclass});a.chars=a.mbase.Subclass({type:"chars",Append:function(){this.data.push.apply(this.data,arguments)},value:function(){return this.data.join("")},toString:function(){return this.data.join("")}});a.entity=a.mbase.Subclass({type:"entity",Append:function(){this.data.push.apply(this.data,arguments)},value:function(){if(this.data[0].substr(0,2)==="#x"){return parseInt(this.data[0].substr(2),16)}else{if(this.data[0].substr(0,1)==="#"){return parseInt(this.data[0].substr(1))}else{return 0}}},toString:function(){var d=this.value();if(d<=65535){return String.fromCharCode(d)}d-=65536;return String.fromCharCode((d>>10)+55296)+String.fromCharCode((d&1023)+56320)}});a.xml=a.mbase.Subclass({type:"xml",Init:function(){this.div=document.createElement("div");return this.SUPER(arguments).Init.apply(this,arguments)},Append:function(){for(var e=0,d=arguments.length;e<d;e++){var f=this.Import(arguments[e]);this.data.push(f);this.div.appendChild(f)}},Import:function(h){if(document.importNode){return document.importNode(h,true)}var e,f,d;if(h.nodeType===1){e=document.createElement(h.nodeName);for(f=0,d=h.attributes.length;f<d;f++){var g=h.attributes[f];if(g.specified&&g.nodeValue!=null&&g.nodeValue!=""){e.setAttribute(g.nodeName,g.nodeValue)}if(g.nodeName==="style"){e.style.cssText=g.nodeValue}}if(h.className){e.className=h.className}}else{if(h.nodeType===3||h.nodeType===4){e=document.createTextNode(h.nodeValue)}else{if(h.nodeType===8){e=document.createComment(h.nodeValue)}else{return document.createTextNode("")}}}for(f=0,d=h.childNodes.length;f<d;f++){e.appendChild(this.Import(h.childNodes[f]))}return e},value:function(){return this.div},toString:function(){return this.div.innerHTML}});a.TeXAtom=a.mbase.Subclass({type:"texatom",inferRow:true,notParent:true,texClass:a.TEXCLASS.ORD,Core:a.mbase.childCore,CoreMO:a.mbase.childCoreMO,isEmbellished:a.mbase.childEmbellished,setTeXclass:function(d){this.data[0].setTeXclass();return this.adjustTeXclass(d)},adjustTeXclass:a.mo.prototype.adjustTeXclass});a.NULL=a.mbase().With({type:"null"});var b=a.TEXCLASS;var c={ORD:[0,0,b.ORD],ORD11:[1,1,b.ORD],ORD21:[2,1,b.ORD],ORD02:[0,2,b.ORD],ORD55:[5,5,b.ORD],OP:[1,2,b.OP,{largeop:true,movablelimits:true,symmetric:true}],OPFIXED:[1,2,b.OP,{largeop:true,movablelimits:true}],INTEGRAL:[0,1,b.OP,{largeop:true,symmetric:true}],INTEGRAL2:[1,2,b.OP,{largeop:true,symmetric:true}],BIN3:[3,3,b.BIN],BIN4:[4,4,b.BIN],BIN01:[0,1,b.BIN],BIN5:[5,5,b.BIN],TALLBIN:[4,4,b.BIN,{stretchy:true}],BINOP:[4,4,b.BIN,{largeop:true,movablelimits:true}],REL:[5,5,b.REL],REL1:[1,1,b.REL,{stretchy:true}],REL4:[4,4,b.REL],RELSTRETCH:[5,5,b.REL,{stretchy:true}],RELACCENT:[5,5,b.REL,{accent:true}],WIDEREL:[5,5,b.REL,{accent:true,stretchy:true}],OPEN:[0,0,b.OPEN,{fence:true,stretchy:true,symmetric:true}],CLOSE:[0,0,b.CLOSE,{fence:true,stretchy:true,symmetric:true}],INNER:[0,0,b.INNER],PUNCT:[0,3,b.PUNCT],ACCENT:[0,0,b.ORD,{accent:true}],WIDEACCENT:[0,0,b.ORD,{accent:true,stretchy:true}]};a.mo.Augment({SPACE:["0em","0.1111em","0.1667em","0.2222em","0.2667em","0.3333em"],RANGES:[[32,127,b.REL,"BasicLatin"],[160,255,b.ORD,"Latin1Supplement"],[256,383,b.ORD],[384,591,b.ORD],[688,767,b.ORD,"SpacingModLetters"],[768,879,b.ORD,"CombDiacritMarks"],[880,1023,b.ORD,"GreekAndCoptic"],[7680,7935,b.ORD],[8192,8303,b.PUNCT,"GeneralPunctuation"],[8304,8351,b.ORD],[8352,8399,b.ORD],[8400,8447,b.ORD,"CombDiactForSymbols"],[8448,8527,b.ORD,"LetterlikeSymbols"],[8528,8591,b.ORD],[8592,8703,b.REL,"Arrows"],[8704,8959,b.BIN,"MathOperators"],[8960,9215,b.ORD,"MiscTechnical"],[9312,9471,b.ORD],[9472,9631,b.ORD],[9632,9727,b.ORD,"GeometricShapes"],[9984,10175,b.ORD,"Dingbats"],[10176,10223,b.ORD,"MiscMathSymbolsA"],[10224,10239,b.REL,"SupplementalArrowsA"],[10496,10623,b.REL,"SupplementalArrowsB"],[10624,10751,b.ORD,"MiscMathSymbolsB"],[10752,11007,b.BIN,"SuppMathOperators"],[11008,11263,b.ORD,"MiscSymbolsAndArrows"],[119808,120831,b.ORD]],OPTABLE:{prefix:{"\u2200":c.ORD21,"\u2202":c.ORD21,"\u2203":c.ORD21,"\u2207":c.ORD21,"\u220F":c.OP,"\u2210":c.OP,"\u2211":c.OP,"\u2212":c.BIN01,"\u2213":c.BIN01,"\u221A":[1,1,b.ORD,{stretchy:true}],"\u2220":c.ORD,"\u222B":c.INTEGRAL,"\u222E":c.INTEGRAL,"\u22C0":c.OP,"\u22C1":c.OP,"\u22C2":c.OP,"\u22C3":c.OP,"\u2308":c.OPEN,"\u230A":c.OPEN,"\u27E8":c.OPEN,"\u27EE":c.OPEN,"\u2A00":c.OP,"\u2A01":c.OP,"\u2A02":c.OP,"\u2A04":c.OP,"\u2A06":c.OP,"\u00AC":c.ORD21,"\u00B1":c.BIN01,"(":c.OPEN,"+":c.BIN01,"-":c.BIN01,"[":c.OPEN,"{":c.OPEN,"|":c.OPEN},postfix:{"!":[1,0,b.CLOSE],"&":c.ORD,"\u2032":c.ORD02,"\u203E":c.WIDEACCENT,"\u2309":c.CLOSE,"\u230B":c.CLOSE,"\u23DE":c.WIDEACCENT,"\u23DF":c.WIDEACCENT,"\u266D":c.ORD02,"\u266E":c.ORD02,"\u266F":c.ORD02,"\u27E9":c.CLOSE,"\u27EF":c.CLOSE,"\u02C6":c.WIDEACCENT,"\u02C7":c.WIDEACCENT,"\u02C9":c.WIDEACCENT,"\u02CA":c.ACCENT,"\u02CB":c.ACCENT,"\u02D8":c.ACCENT,"\u02D9":c.ACCENT,"\u02DC":c.WIDEACCENT,"\u0302":c.WIDEACCENT,"\u00A8":c.ACCENT,"\u00AF":c.WIDEACCENT,")":c.CLOSE,"]":c.CLOSE,"^":c.WIDEACCENT,_:c.WIDEACCENT,"`":c.ACCENT,"|":c.CLOSE,"}":c.CLOSE,"~":c.WIDEACCENT},infix:{"":c.ORD,"%":[3,3,b.ORD],"\u2022":c.BIN4,"\u2026":c.INNER,"\u2044":c.TALLBIN,"\u2061":c.ORD,"\u2062":c.ORD,"\u2063":[0,0,b.ORD,{linebreakstyle:"after",separator:true}],"\u2064":c.ORD,"\u2190":c.WIDEREL,"\u2191":c.RELSTRETCH,"\u2192":c.WIDEREL,"\u2193":c.RELSTRETCH,"\u2194":c.WIDEREL,"\u2195":c.RELSTRETCH,"\u2196":c.RELSTRETCH,"\u2197":c.RELSTRETCH,"\u2198":c.RELSTRETCH,"\u2199":c.RELSTRETCH,"\u21A6":c.WIDEREL,"\u21A9":c.WIDEREL,"\u21AA":c.WIDEREL,"\u21BC":c.WIDEREL,"\u21BD":c.WIDEREL,"\u21C0":c.WIDEREL,"\u21C1":c.WIDEREL,"\u21CC":c.WIDEREL,"\u21D0":c.WIDEREL,"\u21D1":c.RELSTRETCH,"\u21D2":c.WIDEREL,"\u21D3":c.RELSTRETCH,"\u21D4":c.WIDEREL,"\u21D5":c.RELSTRETCH,"\u2208":c.REL,"\u2209":c.REL,"\u220B":c.REL,"\u2212":c.BIN4,"\u2213":c.BIN4,"\u2215":c.TALLBIN,"\u2216":c.BIN4,"\u2217":c.BIN4,"\u2218":c.BIN4,"\u2219":c.BIN4,"\u221D":c.REL,"\u2223":c.REL,"\u2225":c.REL,"\u2227":c.BIN4,"\u2228":c.BIN4,"\u2229":c.BIN4,"\u222A":c.BIN4,"\u223C":c.REL,"\u2240":c.BIN4,"\u2243":c.REL,"\u2245":c.REL,"\u2248":c.REL,"\u224D":c.REL,"\u2250":c.REL,"\u2260":c.REL,"\u2261":c.REL,"\u2264":c.REL,"\u2265":c.REL,"\u226A":c.REL,"\u226B":c.REL,"\u227A":c.REL,"\u227B":c.REL,"\u2282":c.REL,"\u2283":c.REL,"\u2286":c.REL,"\u2287":c.REL,"\u228E":c.BIN4,"\u2291":c.REL,"\u2292":c.REL,"\u2293":c.BIN4,"\u2294":c.BIN4,"\u2295":c.BIN4,"\u2296":c.BIN4,"\u2297":c.BIN4,"\u2298":c.BIN4,"\u2299":c.BIN4,"\u22A2":c.REL,"\u22A3":c.REL,"\u22A4":c.ORD55,"\u22A5":c.REL,"\u22A8":c.REL,"\u22C4":c.BIN4,"\u22C5":c.BIN4,"\u22C6":c.BIN4,"\u22C8":c.REL,"\u22EE":c.ORD55,"\u22EF":c.INNER,"\u22F1":[5,5,b.INNER],"\u25B3":c.BIN4,"\u25B5":c.BIN4,"\u25B9":c.BIN4,"\u25BD":c.BIN4,"\u25BF":c.BIN4,"\u25C3":c.BIN4,"\u2758":c.REL,"\u27F5":c.WIDEREL,"\u27F6":c.WIDEREL,"\u27F7":c.WIDEREL,"\u27F8":c.WIDEREL,"\u27F9":c.WIDEREL,"\u27FA":c.WIDEREL,"\u27FC":c.WIDEREL,"\u2A2F":c.BIN4,"\u2A3F":c.BIN4,"\u2AAF":c.REL,"\u2AB0":c.REL,"\u00B1":c.BIN4,"\u00B7":c.BIN4,"\u00D7":c.BIN4,"\u00F7":c.BIN4,"*":c.BIN3,"+":c.BIN4,",":[0,3,b.PUNCT,{linebreakstyle:"after",separator:true}],"-":c.BIN4,".":[3,3,b.ORD],"/":c.ORD11,":":[1,2,b.REL],";":[0,3,b.PUNCT,{linebreakstyle:"after",separator:true}],"<":c.REL,"=":c.REL,">":c.REL,"?":[1,1,b.CLOSE],"\\":c.ORD,"^":c.ORD11,_:c.ORD11,"|":[2,2,b.ORD,{fence:true,stretchy:true,symmetric:true}],"#":c.ORD,"$":c.ORD,"\u002E":[0,3,b.PUNCT,{separator:true}],"\u02B9":c.ORD,"\u0300":c.ACCENT,"\u0301":c.ACCENT,"\u0303":c.WIDEACCENT,"\u0304":c.ACCENT,"\u0306":c.ACCENT,"\u0307":c.ACCENT,"\u0308":c.ACCENT,"\u030C":c.ACCENT,"\u0332":c.WIDEACCENT,"\u0338":c.REL4,"\u2015":[0,0,b.ORD,{stretchy:true}],"\u2017":[0,0,b.ORD,{stretchy:true}],"\u2020":c.BIN3,"\u2021":c.BIN3,"\u20D7":c.ACCENT,"\u2111":c.ORD,"\u2113":c.ORD,"\u2118":c.ORD,"\u211C":c.ORD,"\u2205":c.ORD,"\u221E":c.ORD,"\u2305":c.BIN3,"\u2306":c.BIN3,"\u2322":c.REL4,"\u2323":c.REL4,"\u2329":c.OPEN,"\u232A":c.CLOSE,"\u23AA":c.ORD,"\u23AF":[0,0,b.ORD,{stretchy:true}],"\u23B0":c.OPEN,"\u23B1":c.CLOSE,"\u2500":c.ORD,"\u25EF":c.BIN3,"\u2660":c.ORD,"\u2661":c.ORD,"\u2662":c.ORD,"\u2663":c.ORD,"\u3008":c.OPEN,"\u3009":c.CLOSE,"\uFE37":c.WIDEACCENT,"\uFE38":c.WIDEACCENT}}},{OPTYPES:c});a.mo.prototype.OPTABLE.infix["^"]=c.WIDEREL;a.mo.prototype.OPTABLE.infix._=c.WIDEREL})(MathJax.ElementJax.mml);MathJax.ElementJax.mml.loadComplete("jax.js");

MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js",function(){var b="2.2";var a=MathJax.ElementJax.mml;SETTINGS=MathJax.Hub.config.menuSettings;a.mbase.Augment({toMathML:function(k){var g=(this.inferred&&this.parent.inferRow);if(k==null){k=""}var e=this.type,d=this.toMathMLattributes();if(e==="mspace"){return k+"<"+e+d+" />"}var j=[];var h=(this.isToken?"":k+(g?"":"  "));for(var f=0,c=this.data.length;f<c;f++){if(this.data[f]){j.push(this.data[f].toMathML(h))}else{if(!this.isToken){j.push(h+"<mrow />")}}}if(this.isToken){return k+"<"+e+d+">"+j.join("")+"</"+e+">"}if(g){return j.join("\n")}if(j.length===0||(j.length===1&&j[0]==="")){return k+"<"+e+d+" />"}return k+"<"+e+d+">\n"+j.join("\n")+"\n"+k+"</"+e+">"},toMathMLattributes:function(){var j=[],g=this.defaults;var c=(this.attrNames||a.copyAttributeNames),l=a.skipAttributes;if(this.type==="math"&&(!this.attr||!this.attr.xmlns)){j.push('xmlns="http://www.w3.org/1998/Math/MathML"')}if(!this.attrNames){if(this.type==="mstyle"){g=a.math.prototype.defaults}for(var d in g){if(!l[d]&&g.hasOwnProperty(d)){var e=(d==="open"||d==="close");if(this[d]!=null&&(e||this[d]!==g[d])){var k=this[d];delete this[d];if(e||this.Get(d)!==k){j.push(d+'="'+this.toMathMLattribute(k)+'"')}this[d]=k}}}}for(var h=0,f=c.length;h<f;h++){if(c[h]==="class"){continue}k=(this.attr||{})[c[h]];if(k==null){k=this[c[h]]}if(k!=null){j.push(c[h]+'="'+this.toMathMLquote(k)+'"')}}this.toMathMLclass(j);if(j.length){return" "+j.join(" ")}else{return""}},toMathMLclass:function(c){var e=[];if(this["class"]){e.push(this["class"])}if(this.isa(a.TeXAtom)&&SETTINGS.texHints){var d=["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"][this.texClass];if(d){e.push("MJX-TeXAtom-"+d)}}if(this.mathvariant&&this.toMathMLvariants[this.mathvariant]){e.push("MJX"+this.mathvariant)}if(this.arrow){e.push("MJX-arrow")}if(this.variantForm){e.push("MJX-variant")}if(e.length){c.unshift('class="'+e.join(" ")+'"')}},toMathMLattribute:function(c){if(typeof(c)==="string"&&c.replace(/ /g,"").match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)){return RegExp.$2+((1/18)*RegExp.$3).toFixed(3).replace(/\.?0+$/,"")+"em"}else{if(this.toMathMLvariants[c]){return this.toMathMLvariants[c]}}return this.toMathMLquote(c)},toMathMLvariants:{"-tex-caligraphic":a.VARIANT.SCRIPT,"-tex-caligraphic-bold":a.VARIANT.BOLDSCRIPT,"-tex-oldstyle":a.VARIANT.NORMAL,"-tex-oldstyle-bold":a.VARIANT.BOLD,"-tex-mathit":a.VARIANT.ITALIC},toMathMLquote:function(f){f=String(f).split("");for(var g=0,d=f.length;g<d;g++){var k=f[g].charCodeAt(0);if(k<=55295||57344<=k){if(k<32||k>126){f[g]="&#x"+k.toString(16).toUpperCase()+";"}else{var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[f[g]];if(j){f[g]=j}}}else{if(g+1<d){var h=f[g+1].charCodeAt(0);var e=(((k-55296)<<10)+(h-56320)+65536);f[g]="&#x"+e.toString(16).toUpperCase()+";";f[g+1]="";g++}else{f[g]=""}}}return f.join("")}});a.msubsup.Augment({toMathML:function(h){var e=this.type;if(this.data[this.sup]==null){e="msub"}if(this.data[this.sub]==null){e="msup"}var d=this.toMathMLattributes();delete this.data[0].inferred;var g=[];for(var f=0,c=this.data.length;f<c;f++){if(this.data[f]){g.push(this.data[f].toMathML(h+"  "))}}return h+"<"+e+d+">\n"+g.join("\n")+"\n"+h+"</"+e+">"}});a.munderover.Augment({toMathML:function(h){var e=this.type;if(this.data[this.under]==null){e="mover"}if(this.data[this.over]==null){e="munder"}var d=this.toMathMLattributes();delete this.data[0].inferred;var g=[];for(var f=0,c=this.data.length;f<c;f++){if(this.data[f]){g.push(this.data[f].toMathML(h+"  "))}}return h+"<"+e+d+">\n"+g.join("\n")+"\n"+h+"</"+e+">"}});a.TeXAtom.Augment({toMathML:function(d){var c=this.toMathMLattributes();if(!c&&this.data[0].data.length===1){return d.substr(2)+this.data[0].toMathML(d)}return d+"<mrow"+c+">\n"+this.data[0].toMathML(d+"  ")+"\n"+d+"</mrow>"}});a.chars.Augment({toMathML:function(c){return(c||"")+this.toMathMLquote(this.toString())}});a.entity.Augment({toMathML:function(c){return(c||"")+"&"+this.data[0]+";<!-- "+this.toString()+" -->"}});a.xml.Augment({toMathML:function(c){return(c||"")+this.toString()}});MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",function(){a.TeXmathchoice.Augment({toMathML:function(c){return this.Core().toMathML(c)}})});MathJax.Hub.Startup.signal.Post("toMathML Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");

(function(b,e){var d="2.2";var a=b.CombineConfig("TeX.noErrors",{disabled:false,multiLine:true,inlineDelimiters:["",""],style:{"font-size":"90%","text-align":"left",color:"black",padding:"1px 3px",border:"1px solid"}});var c="\u00A0";MathJax.Extension["TeX/noErrors"]={version:d,config:a};b.Register.StartupHook("TeX Jax Ready",function(){var f=MathJax.InputJax.TeX.formatError;MathJax.InputJax.TeX.Augment({formatError:function(j,i,k,g){if(a.disabled){return f.apply(this,arguments)}var h=j.message.replace(/\n.*/,"");b.signal.Post(["TeX Jax - parse error",h,i,k,g]);var m=a.inlineDelimiters;var l=(k||a.multiLine);if(!k){i=m[0]+i+m[1]}if(l){i=i.replace(/ /g,c)}else{i=i.replace(/\n/g," ")}return MathJax.ElementJax.mml.merror(i).With({isError:true,multiLine:l})}})});b.Register.StartupHook("HTML-CSS Jax Config",function(){b.Config({"HTML-CSS":{styles:{".MathJax .noError":b.Insert({"vertical-align":(b.Browser.isMSIE&&a.multiLine?"-2px":"")},a.style)}}})});b.Register.StartupHook("HTML-CSS Jax Ready",function(){var g=MathJax.ElementJax.mml;var h=MathJax.OutputJax["HTML-CSS"];var f=g.math.prototype.toHTML,i=g.merror.prototype.toHTML;g.math.Augment({toHTML:function(j,k){var l=this.data[0];if(l&&l.data[0]&&l.data[0].isError){j.style.fontSize="";j=this.HTMLcreateSpan(j);j.bbox=l.data[0].toHTML(j).bbox}else{j=f.call(this,j,k)}return j}});g.merror.Augment({toHTML:function(p){if(!this.isError){return i.call(this,p)}p=this.HTMLcreateSpan(p);p.className="noError";if(this.multiLine){p.style.display="inline-block"}var r=this.data[0].data[0].data.join("").split(/\n/);for(var o=0,l=r.length;o<l;o++){h.addText(p,r[o]);if(o!==l-1){h.addElement(p,"br",{isMathJax:true})}}var q=h.getHD(p.parentNode),k=h.getW(p.parentNode);if(l>1){var n=(q.h+q.d)/2,j=h.TeX.x_height/2;p.parentNode.style.verticalAlign=h.Em(q.d+(j-n));q.h=j+n;q.d=n-j}p.bbox={h:q.h,d:q.d,w:k,lw:0,rw:k};return p}})});b.Register.StartupHook("SVG Jax Config",function(){b.Config({SVG:{styles:{".MathJax_SVG .noError":b.Insert({"vertical-align":(b.Browser.isMSIE&&a.multiLine?"-2px":"")},a.style)}}})});b.Register.StartupHook("SVG Jax Ready",function(){var g=MathJax.ElementJax.mml;var f=g.math.prototype.toSVG,h=g.merror.prototype.toSVG;g.math.Augment({toSVG:function(i,j){var k=this.data[0];if(k&&k.data[0]&&k.data[0].isError){i=k.data[0].toSVG(i)}else{i=f.call(this,i,j)}return i}});g.merror.Augment({toSVG:function(n){if(!this.isError||this.Parent().type!=="math"){return h.call(this,n)}n=e.addElement(n,"span",{className:"noError",isMathJax:true});if(this.multiLine){n.style.display="inline-block"}var o=this.data[0].data[0].data.join("").split(/\n/);for(var l=0,j=o.length;l<j;l++){e.addText(n,o[l]);if(l!==j-1){e.addElement(n,"br",{isMathJax:true})}}if(j>1){var k=n.offsetHeight/2;n.style.verticalAlign=(-k+(k/j))+"px"}return n}})});b.Register.StartupHook("NativeMML Jax Ready",function(){var h=MathJax.ElementJax.mml;var g=MathJax.Extension["TeX/noErrors"].config;var f=h.math.prototype.toNativeMML,i=h.merror.prototype.toNativeMML;h.math.Augment({toNativeMML:function(j){var k=this.data[0];if(k&&k.data[0]&&k.data[0].isError){j=k.data[0].toNativeMML(j)}else{j=f.call(this,j)}return j}});h.merror.Augment({toNativeMML:function(n){if(!this.isError){return i.call(this,n)}n=n.appendChild(document.createElement("span"));var o=this.data[0].data[0].data.join("").split(/\n/);for(var l=0,k=o.length;l<k;l++){n.appendChild(document.createTextNode(o[l]));if(l!==k-1){n.appendChild(document.createElement("br"))}}if(this.multiLine){n.style.display="inline-block";if(k>1){n.style.verticalAlign="middle"}}for(var p in g.style){if(g.style.hasOwnProperty(p)){var j=p.replace(/-./g,function(m){return m.charAt(1).toUpperCase()});n.style[j]=g.style[p]}}return n}})});b.Startup.signal.Post("TeX noErrors Ready")})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");

MathJax.Extension["TeX/noUndefined"]={version:"2.2",config:MathJax.Hub.CombineConfig("TeX.noUndefined",{disabled:false,attributes:{mathcolor:"red"}})};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var b=MathJax.Extension["TeX/noUndefined"].config;var a=MathJax.ElementJax.mml;var c=MathJax.InputJax.TeX.Parse.prototype.csUndefined;MathJax.InputJax.TeX.Parse.Augment({csUndefined:function(d){if(b.disabled){return c.apply(this,arguments)}MathJax.Hub.signal.Post(["TeX Jax - undefined control sequence",d]);this.Push(a.mtext(d).With(b.attributes))}});MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js");

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/input/TeX/jax.js
 *  
 *  Implements the TeX InputJax that reads mathematics in
 *  TeX and LaTeX format and converts it to the MML ElementJax
 *  internal format.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2013 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (TEX,HUB,AJAX) {
  var MML, NBSP = "\u00A0"; 
  
  var _ = function (id) {
    return MathJax.Localization._.apply(MathJax.Localization,
      [["TeX", id]].concat([].slice.call(arguments,1)));
  };

  var STACK = MathJax.Object.Subclass({
    Init: function (env,inner) {
      this.global = {isInner: inner};
      this.data = [STACKITEM.start(this.global)];
      if (env) {this.data[0].env = env}
      this.env = this.data[0].env;
    },
    Push: function () {
      var i, m, item, top;
      for (i = 0, m = arguments.length; i < m; i++) {
        item = arguments[i];
        if (item instanceof MML.mbase) {item = STACKITEM.mml(item)}
        item.global = this.global;
        top = (this.data.length ? this.Top().checkItem(item) : true);
        if (top instanceof Array) {this.Pop(); this.Push.apply(this,top)}
        else if (top instanceof STACKITEM) {this.Pop(); this.Push(top)}
        else if (top) {
          this.data.push(item);
          if (item.env) {
            for (var id in this.env)
              {if (this.env.hasOwnProperty(id)) {item.env[id] = this.env[id]}}
            this.env = item.env;
          } else {item.env = this.env}
        }
      }
    },
    Pop: function () {
      var item = this.data.pop(); if (!item.isOpen) {delete item.env}
      this.env = (this.data.length ? this.Top().env : {});
      return item;
    },
    Top: function (n) {
      if (n == null) {n = 1}
      if (this.data.length < n) {return null}
      return this.data[this.data.length-n];
    },
    Prev: function (noPop) {
      var top = this.Top();
      if (noPop) {return top.data[top.data.length-1]}
            else {return top.Pop()}
    },
    toString: function () {return "stack[\n  "+this.data.join("\n  ")+"\n]"}
  });
  
  var STACKITEM = STACK.Item = MathJax.Object.Subclass({
    type: "base",
    endError:   /*_()*/ ["ExtraOpenMissingClose","Extra open brace or missing close brace"],
    closeError: /*_()*/ ["ExtraCloseMissingOpen","Extra close brace or missing open brace"],
    rightError: /*_()*/ ["MissingLeftExtraRight","Missing \\left or extra \\right"],
    Init: function () {
      if (this.isOpen) {this.env = {}}
      this.data = [];
      this.Push.apply(this,arguments);
    },
    Push: function () {this.data.push.apply(this.data,arguments)},
    Pop: function () {return this.data.pop()},
    mmlData: function (inferred,forceRow) {
      if (inferred == null) {inferred = true}
      if (this.data.length === 1 && !forceRow) {return this.data[0]}
      return MML.mrow.apply(MML,this.data).With((inferred ? {inferred: true}: {}));
    },
    checkItem: function (item) {
      if (item.type === "over" && this.isOpen) {item.num = this.mmlData(false); this.data = []}
      if (item.type === "cell" && this.isOpen) {
        if (item.linebreak) {return false}
        TEX.Error(["Misplaced","Misplaced %1",item.name]);
      }
      if (item.isClose && this[item.type+"Error"]) {TEX.Error(this[item.type+"Error"])}
      if (!item.isNotStack) {return true}
      this.Push(item.data[0]); return false;
    },
    With: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {this[id] = def[id]}}
      return this;
    },
    toString: function () {return this.type+"["+this.data.join("; ")+"]"}
  });

  STACKITEM.start = STACKITEM.Subclass({
    type: "start", isOpen: true,
    Init: function (global) {
      this.SUPER(arguments).Init.call(this);
      this.global = global;
    },
    checkItem: function (item) {
      if (item.type === "stop") {return STACKITEM.mml(this.mmlData())}
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });

  STACKITEM.stop = STACKITEM.Subclass({
    type: "stop", isClose: true
  });

  STACKITEM.open = STACKITEM.Subclass({
    type: "open", isOpen: true,
    stopError: /*_()*/ ["ExtraOpenMissingClose","Extra open brace or missing close brace"],
    checkItem: function (item) {
      if (item.type === "close") {
        var mml = this.mmlData();
        return STACKITEM.mml(MML.TeXAtom(mml)); // TeXAtom make it an ORD to prevent spacing (FIXME: should be another way)
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });

  STACKITEM.close = STACKITEM.Subclass({
    type: "close", isClose: true
  });

  STACKITEM.prime = STACKITEM.Subclass({
    type: "prime",
    checkItem: function (item) {
      if (this.data[0].type !== "msubsup") 
        {return [MML.msup(this.data[0],this.data[1]),item]}
      this.data[0].SetData(this.data[0].sup,this.data[1]);
      return [this.data[0],item];
    }
  });
  
  STACKITEM.subsup = STACKITEM.Subclass({
    type: "subsup",
    stopError: /*_()*/ ["MissingScript","Missing superscript or subscript argument"],
    supError:  /*_()*/ ["MissingOpenForSup","Missing open brace for superscript"],
    subError:  /*_()*/ ["MissingOpenForSup","Missing open brace for subscript"],
    checkItem: function (item) {
      if (item.type === "open" || item.type === "left") {return true}
      if (item.type === "mml") {
        if (this.primes) {
          if (this.position !== 2) {this.data[0].SetData(2,this.primes)}
            else {item.data[0] = MML.mrow(this.primes.With({variantForm:true}),item.data[0])}
        }
        this.data[0].SetData(this.position,item.data[0]);
        return STACKITEM.mml(this.data[0]);
      }
      if (this.SUPER(arguments).checkItem.call(this,item))
        {TEX.Error(this[["","subError","supError"][this.position]])}
    },
    Pop: function () {}
  });

  STACKITEM.over = STACKITEM.Subclass({
    type: "over", isClose: true, name: "\\over",
    checkItem: function (item,stack) {
      if (item.type === "over")
        {TEX.Error(["AmbiguousUseOf","Ambiguous use of %1",item.name])}
      if (item.isClose) {
        var mml = MML.mfrac(this.num,this.mmlData(false));
        if (this.thickness != null) {mml.linethickness = this.thickness}
        if (this.open || this.close) {
          mml.texClass = MML.TEXCLASS.INNER;
          mml.texWithDelims = true;
          mml = TEX.fenced(this.open,mml,this.close);
        }
        return [STACKITEM.mml(mml), item];
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    },
    toString: function () {return "over["+this.num+" / "+this.data.join("; ")+"]"}
  });

  STACKITEM.left = STACKITEM.Subclass({
    type: "left", isOpen: true, delim: '(',
    stopError: /*_()*/ ["ExtraLeftMissingRight", "Extra \\left or missing \\right"],
    checkItem: function (item) {
      if (item.type === "right")
        {return STACKITEM.mml(TEX.fenced(this.delim,this.mmlData(),item.delim))}
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });

  STACKITEM.right = STACKITEM.Subclass({
    type: "right", isClose: true, delim: ')'
  });

  STACKITEM.begin = STACKITEM.Subclass({
    type: "begin", isOpen: true,
    checkItem: function (item) {
      if (item.type === "end") {
        if (item.name !== this.name)
          {TEX.Error(["EnvBadEnd","\\begin{%1} ended with \\end{%2}",this.name,item.name])}
        if (!this.end) {return STACKITEM.mml(this.mmlData())}
        return this.parse[this.end].call(this.parse,this,this.data);
      }
      if (item.type === "stop")
        {TEX.Error(["EnvMissingEnd","Missing \\end{%1}",this.name])}
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });
  
  STACKITEM.end = STACKITEM.Subclass({
    type: "end", isClose: true
  });

  STACKITEM.style = STACKITEM.Subclass({
    type: "style",
    checkItem: function (item) {
      if (!item.isClose) {return this.SUPER(arguments).checkItem.call(this,item)}
      var mml = MML.mstyle.apply(MML,this.data).With(this.styles);
      return [STACKITEM.mml(mml),item];
    }
  });
  
  STACKITEM.position = STACKITEM.Subclass({
    type: "position",
    checkItem: function (item) {
      if (item.isClose) {TEX.Error(["MissingBoxFor","Missing box for %1",name])}
      if (item.isNotStack) {
        var mml = item.mmlData();
        switch (this.move) {
         case 'vertical':
          mml = MML.mpadded(mml).With({height: this.dh, depth: this.dd, voffset: this.dh});
          return [STACKITEM.mml(mml)];
         case 'horizontal':
          return [STACKITEM.mml(this.left),item,STACKITEM.mml(this.right)];
        }
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });
  
  STACKITEM.array = STACKITEM.Subclass({
    type: "array", isOpen: true, arraydef: {},
    Init: function () {
      this.table = []; this.row = []; this.env = {}; this.frame = []
      this.SUPER(arguments).Init.apply(this,arguments);
    },
    checkItem: function (item) {
      if (item.isClose && item.type !== "over") {
        if (item.isEntry) {this.EndEntry(); this.clearEnv(); return false}
        if (item.isCR)    {this.EndEntry(); this.EndRow(); this.clearEnv(); return false}
        this.EndTable(); this.clearEnv();
        var mml = MML.mtable.apply(MML,this.table).With(this.arraydef);
        if (this.frame.length === 4) {
          mml.frame = (this.frame.dashed ? "dashed" : "solid");
        } else if (this.frame.length) {
          mml.hasFrame = true;
          if (this.arraydef.rowlines) {this.arraydef.rowlines = this.arraydef.rowlines.replace(/none( none)+$/,"none")}
          mml = MML.menclose(mml).With({notation: this.frame.join(" "), isFrame: true});
          if ((this.arraydef.columnlines||"none") != "none" ||
              (this.arraydef.rowlines||"none") != "none") {mml.padding = 0} // HTML-CSS jax implements this
        }
        if (this.open || this.close) {mml = TEX.fenced(this.open,mml,this.close)}
        mml = STACKITEM.mml(mml);
        if (this.requireClose) {
          if (item.type === 'close') {return mml}
          TEX.Error(["MissingCloseBrace","Missing close brace"]);
        }
        return [mml,item];
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    },
    EndEntry: function () {this.row.push(MML.mtd.apply(MML,this.data)); this.data = []},
    EndRow:   function () {this.table.push(MML.mtr.apply(MML,this.row)); this.row = []},
    EndTable: function () {
      if (this.data.length || this.row.length) {this.EndEntry(); this.EndRow()}
      this.checkLines();
    },
    checkLines: function () {
      if (this.arraydef.rowlines) {
        var lines = this.arraydef.rowlines.split(/ /);
        if (lines.length === this.table.length) {
          this.frame.push("bottom"); lines.pop();
          this.arraydef.rowlines = lines.join(' ');
        } else if (lines.length < this.table.length-1) {
          this.arraydef.rowlines += " none";
        }
      }
      if (this.rowspacing) {
        var rows = this.arraydef.rowspacing.split(/ /);
        while (rows.length < this.table.length) {rows.push(this.rowspacing+"em")}
        this.arraydef.rowspacing = rows.join(' ');
      }
    },
    clearEnv: function () {
      for (var id in this.env) {if (this.env.hasOwnProperty(id)) {delete this.env[id]}}
    }
  });
  
  STACKITEM.cell = STACKITEM.Subclass({
    type: "cell", isClose: true
  });

  STACKITEM.mml = STACKITEM.Subclass({
    type: "mml", isNotStack: true,
    Add: function () {this.data.push.apply(this.data,arguments); return this}
  });
  
  STACKITEM.fn = STACKITEM.Subclass({
    type: "fn",
    checkItem: function (item) {
      if (this.data[0]) {
        if (item.type !== "mml" || !item.data[0]) {return [this.data[0],item]}
        if (item.data[0].isa(MML.mspace)) {return [this.data[0],item]}
        var mml = item.data[0]; if (mml.isEmbellished()) {mml = mml.CoreMO()}
        if ([0,0,1,1,0,1,1,0,0,0][mml.Get("texClass")]) {return [this.data[0],item]}
        return [this.data[0],MML.mo(MML.entity("#x2061")).With({texClass:MML.TEXCLASS.NONE}),item];
      }
      return this.SUPER(arguments).checkItem.apply(this,arguments);
    }
  });
  
  STACKITEM.not = STACKITEM.Subclass({
    type: "not",
    checkItem: function (item) {
      var mml, c;
      if (item.type === "open" || item.type === "left") {return true}
      if (item.type === "mml" && item.data[0].type.match(/^(mo|mi|mtext)$/)) {
        mml = item.data[0], c = mml.data.join("");
        if (c.length === 1 && !mml.movesupsub) {
          c = STACKITEM.not.remap[c.charCodeAt(0)];
          if (c) {mml.SetData(0,MML.chars(String.fromCharCode(c)))}
            else {mml.Append(MML.chars("\u0338"))}
          return item;
        }
      }
      //  \mathrel{\rlap{\notChar}}
      mml = MML.mpadded(MML.mtext("\u29F8")).With({width:0});
      mml = MML.TeXAtom(mml).With({texClass:MML.TEXCLASS.REL});
      return [mml,item];
    }
  });
  STACKITEM.not.remap = {
    0x2190:0x219A, 0x2192:0x219B, 0x2194:0x21AE,
    0x21D0:0x21CD, 0x21D2:0x21CF, 0x21D4:0x21CE,
    0x2208:0x2209, 0x220B:0x220C, 0x2223:0x2224, 0x2225:0x2226,
    0x223C:0x2241, 0x007E:0x2241, 0x2243:0x2244, 0x2245:0x2247,
    0x2248:0x2249, 0x224D:0x226D, 0x003D:0x2260, 0x2261:0x2262,
    0x003C:0x226E, 0x003E:0x226F, 0x2264:0x2270, 0x2265:0x2271,
    0x2272:0x2274, 0x2273:0x2275, 0x2276:0x2278, 0x2277:0x2279,
    0x227A:0x2280, 0x227B:0x2281, 0x2282:0x2284, 0x2283:0x2285,
    0x2286:0x2288, 0x2287:0x2289, 0x22A2:0x22AC, 0x22A8:0x22AD,
    0x22A9:0x22AE, 0x22AB:0x22AF, 0x227C:0x22E0, 0x227D:0x22E1,
    0x2291:0x22E2, 0x2292:0x22E3, 0x22B2:0x22EA, 0x22B3:0x22EB,
    0x22B4:0x22EC, 0x22B5:0x22ED, 0x2203:0x2204
  };
  
  STACKITEM.dots = STACKITEM.Subclass({
    type: "dots",
    checkItem: function (item) {
      if (item.type === "open" || item.type === "left") {return true}
      var dots = this.ldots;
      if (item.type === "mml" && item.data[0].isEmbellished()) {
        var tclass = item.data[0].CoreMO().Get("texClass");
        if (tclass === MML.TEXCLASS.BIN || tclass === MML.TEXCLASS.REL) {dots = this.cdots}
      }
      return [dots,item];
    }
  });
  

  var TEXDEF = {
    //
    //  Add new definitions without overriding user-defined ones
    //
    Add: function (src,dst,nouser) {
      if (!dst) {dst = this}
      for (var id in src) {if (src.hasOwnProperty(id)) {
        if (typeof src[id] === 'object' && !(src[id] instanceof Array) &&
           (typeof dst[id] === 'object' || typeof dst[id] === 'function')) 
             {this.Add(src[id],dst[id],src[id],nouser)}
          else if (!dst[id] || !dst[id].isUser || !nouser) {dst[id] = src[id]}
      }}
      return dst;
    }
  };
  var STARTUP = function () {
    MML = MathJax.ElementJax.mml;
    HUB.Insert(TEXDEF,{
  
      // patterns for letters and numbers
      letter:  /[a-z]/i,
      digit:   /[0-9.]/,
      number:  /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)*|\.[0-9]+)/,
    
      special: {
        '\\':  'ControlSequence',
        '{':   'Open',
        '}':   'Close',
        '~':   'Tilde',
        '^':   'Superscript',
        '_':   'Subscript',
        ' ':   'Space',
        "\t":  'Space',
        "\r":  'Space',
        "\n":  'Space',
        "'":   'Prime',
        '%':   'Comment',
        '&':   'Entry',
        '#':   'Hash',
        '\u2019': 'Prime'
      },
      
      remap: {
        '-':   '2212',
        '*':   '2217',
        '`':   '2018'   // map ` to back quote
      },
    
      mathchar0mi: {
	// Lower-case greek
	alpha:        '03B1',
	beta:         '03B2',
	gamma:        '03B3',
	delta:        '03B4',
	epsilon:      '03F5',
	zeta:         '03B6',
	eta:          '03B7',
	theta:        '03B8',
	iota:         '03B9',
	kappa:        '03BA',
	lambda:       '03BB',
	mu:           '03BC',
	nu:           '03BD',
	xi:           '03BE',
	omicron:      '03BF', // added for completeness
	pi:           '03C0',
	rho:          '03C1',
	sigma:        '03C3',
	tau:          '03C4',
	upsilon:      '03C5',
	phi:          '03D5',
	chi:          '03C7',
	psi:          '03C8',
	omega:        '03C9',
	varepsilon:   '03B5',
	vartheta:     '03D1',
	varpi:        '03D6',
	varrho:       '03F1',
	varsigma:     '03C2',
	varphi:       '03C6',
        
        // Ord symbols
        S:            ['00A7',{mathvariant: MML.VARIANT.NORMAL}],
        aleph:        ['2135',{mathvariant: MML.VARIANT.NORMAL}],
        hbar:         ['210F',{variantForm:true}],
        imath:        '0131',
        jmath:        '0237',
        ell:          '2113',
        wp:           ['2118',{mathvariant: MML.VARIANT.NORMAL}],
        Re:           ['211C',{mathvariant: MML.VARIANT.NORMAL}],
        Im:           ['2111',{mathvariant: MML.VARIANT.NORMAL}],
        partial:      ['2202',{mathvariant: MML.VARIANT.NORMAL}],
        infty:        ['221E',{mathvariant: MML.VARIANT.NORMAL}],
        prime:        ['2032',{mathvariant: MML.VARIANT.NORMAL, variantForm:true}],
        emptyset:     ['2205',{mathvariant: MML.VARIANT.NORMAL}],
        nabla:        ['2207',{mathvariant: MML.VARIANT.NORMAL}],
        top:          ['22A4',{mathvariant: MML.VARIANT.NORMAL}],
        bot:          ['22A5',{mathvariant: MML.VARIANT.NORMAL}],
        angle:        ['2220',{mathvariant: MML.VARIANT.NORMAL}],
        triangle:     ['25B3',{mathvariant: MML.VARIANT.NORMAL}],
        backslash:    ['2216',{mathvariant: MML.VARIANT.NORMAL, variantForm:true}],
        forall:       ['2200',{mathvariant: MML.VARIANT.NORMAL}],
        exists:       ['2203',{mathvariant: MML.VARIANT.NORMAL}],
        neg:          ['00AC',{mathvariant: MML.VARIANT.NORMAL}],
        lnot:         ['00AC',{mathvariant: MML.VARIANT.NORMAL}],
        flat:         ['266D',{mathvariant: MML.VARIANT.NORMAL}],
        natural:      ['266E',{mathvariant: MML.VARIANT.NORMAL}],
        sharp:        ['266F',{mathvariant: MML.VARIANT.NORMAL}],
        clubsuit:     ['2663',{mathvariant: MML.VARIANT.NORMAL}],
        diamondsuit:  ['2662',{mathvariant: MML.VARIANT.NORMAL}],
        heartsuit:    ['2661',{mathvariant: MML.VARIANT.NORMAL}],
        spadesuit:    ['2660',{mathvariant: MML.VARIANT.NORMAL}]
      },
        
      mathchar0mo: {
        surd:         '221A',

        // big ops
        coprod:       ['2210',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigvee:       ['22C1',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigwedge:     ['22C0',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        biguplus:     ['2A04',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigcap:       ['22C2',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigcup:       ['22C3',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        'int':        ['222B',{texClass: MML.TEXCLASS.OP}],
        intop:        ['222B',{texClass: MML.TEXCLASS.OP, movesupsub:true, movablelimits:true}],
        iint:         ['222C',{texClass: MML.TEXCLASS.OP}],
        iiint:        ['222D',{texClass: MML.TEXCLASS.OP}],
        prod:         ['220F',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        sum:          ['2211',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigotimes:    ['2A02',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigoplus:     ['2A01',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigodot:      ['2A00',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        oint:         ['222E',{texClass: MML.TEXCLASS.OP}],
        bigsqcup:     ['2A06',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        smallint:     ['222B',{largeop:false}],
        
        // binary operations
        triangleleft:      '25C3',
        triangleright:     '25B9',
        bigtriangleup:     '25B3',
        bigtriangledown:   '25BD',
        wedge:        '2227',
        land:         '2227',
        vee:          '2228',
        lor:          '2228',
        cap:          '2229',
        cup:          '222A',
        ddagger:      '2021',
        dagger:       '2020',
        sqcap:        '2293',
        sqcup:        '2294',
        uplus:        '228E',
        amalg:        '2A3F',
        diamond:      '22C4',
        bullet:       '2219',
        wr:           '2240',
        div:          '00F7',
        odot:         ['2299',{largeop: false}],
        oslash:       ['2298',{largeop: false}],
        otimes:       ['2297',{largeop: false}],
        ominus:       ['2296',{largeop: false}],
        oplus:        ['2295',{largeop: false}],
        mp:           '2213',
        pm:           '00B1',
        circ:         '2218',
        bigcirc:      '25EF',
        setminus:     ['2216',{variantForm:true}],
        cdot:         '22C5',
        ast:          '2217',
        times:        '00D7',
        star:         '22C6',
        
        // Relations
        propto:       '221D',
        sqsubseteq:   '2291',
        sqsupseteq:   '2292',
        parallel:     '2225',
        mid:          '2223',
        dashv:        '22A3',
        vdash:        '22A2',
        leq:          '2264',
        le:           '2264',
        geq:          '2265',
        ge:           '2265',
        lt:           '003C',
        gt:           '003E',
        succ:         '227B',
        prec:         '227A',
        approx:       '2248',
        succeq:       '2AB0',  // or '227C',
        preceq:       '2AAF',  // or '227D',
        supset:       '2283',
        subset:       '2282',
        supseteq:     '2287',
        subseteq:     '2286',
        'in':         '2208',
        ni:           '220B',
        notin:        '2209',
        owns:         '220B',
        gg:           '226B',
        ll:           '226A',
        sim:          '223C',
        simeq:        '2243',
        perp:         '22A5',
        equiv:        '2261',
        asymp:        '224D',
        smile:        '2323',
        frown:        '2322',
        ne:           '2260',
        neq:          '2260',
        cong:         '2245',
        doteq:        '2250',
        bowtie:       '22C8',
        models:       '22A8',
        
        notChar:      '29F8',
        
        
        // Arrows
        Leftrightarrow:     '21D4',
        Leftarrow:          '21D0',
        Rightarrow:         '21D2',
        leftrightarrow:     '2194',
        leftarrow:          '2190',
        gets:               '2190',
        rightarrow:         '2192',
        to:                 '2192',
        mapsto:             '21A6',
        leftharpoonup:      '21BC',
        leftharpoondown:    '21BD',
        rightharpoonup:     '21C0',
        rightharpoondown:   '21C1',
        nearrow:            '2197',
        searrow:            '2198',
        nwarrow:            '2196',
        swarrow:            '2199',
        rightleftharpoons:  '21CC',
        hookrightarrow:     '21AA',
        hookleftarrow:      '21A9',
        longleftarrow:      '27F5',
        Longleftarrow:      '27F8',
        longrightarrow:     '27F6',
        Longrightarrow:     '27F9',
        Longleftrightarrow: '27FA',
        longleftrightarrow: '27F7',
        longmapsto:         '27FC',
        
        
        // Misc.
        ldots:            '2026',
        cdots:            '22EF',
        vdots:            '22EE',
        ddots:            '22F1',
        dotsc:            '2026',  // dots with commas
        dotsb:            '22EF',  // dots with binary ops and relations
        dotsm:            '22EF',  // dots with multiplication
        dotsi:            '22EF',  // dots with integrals
        dotso:            '2026',  // other dots
        
        ldotp:            ['002E', {texClass: MML.TEXCLASS.PUNCT}],
        cdotp:            ['22C5', {texClass: MML.TEXCLASS.PUNCT}],
        colon:            ['003A', {texClass: MML.TEXCLASS.PUNCT}]
      },
      
      mathchar7: {
        Gamma:        '0393',
        Delta:        '0394',
        Theta:        '0398',
        Lambda:       '039B',
        Xi:           '039E',
        Pi:           '03A0',
        Sigma:        '03A3',
        Upsilon:      '03A5',
        Phi:          '03A6',
        Psi:          '03A8',
        Omega:        '03A9',
        
        '_':          '005F',
        '#':          '0023',
        '$':          '0024',
        '%':          '0025',
        '&':          '0026',
        And:          '0026'
      },
      
      delimiter: {
        '(':                '(',
        ')':                ')',
        '[':                '[',
        ']':                ']',
        '<':                '27E8',
        '>':                '27E9',
        '\\lt':             '27E8',
        '\\gt':             '27E9',
        '/':                '/',
        '|':                ['|',{texClass:MML.TEXCLASS.ORD}],
        '.':                '',
        '\\\\':             '\\',
        '\\lmoustache':     '23B0',  // non-standard
        '\\rmoustache':     '23B1',  // non-standard
        '\\lgroup':         '27EE',  // non-standard
        '\\rgroup':         '27EF',  // non-standard
        '\\arrowvert':      '23D0',
        '\\Arrowvert':      '2016',
        '\\bracevert':      '23AA',  // non-standard
        '\\Vert':           ['2225',{texClass:MML.TEXCLASS.ORD}],
        '\\|':              ['2225',{texClass:MML.TEXCLASS.ORD}],
        '\\vert':           ['|',{texClass:MML.TEXCLASS.ORD}],
        '\\uparrow':        '2191',
        '\\downarrow':      '2193',
        '\\updownarrow':    '2195',
        '\\Uparrow':        '21D1',
        '\\Downarrow':      '21D3',
        '\\Updownarrow':    '21D5',
        '\\backslash':      '\\',
        '\\rangle':         '27E9',
        '\\langle':         '27E8',
        '\\rbrace':         '}',
        '\\lbrace':         '{',
        '\\}':              '}',
        '\\{':              '{',
        '\\rceil':          '2309',
        '\\lceil':          '2308',
        '\\rfloor':         '230B',
        '\\lfloor':         '230A',
        '\\lbrack':         '[',
        '\\rbrack':         ']'
      },
      
      macros: {
        displaystyle:      ['SetStyle','D',true,0],
        textstyle:         ['SetStyle','T',false,0],
        scriptstyle:       ['SetStyle','S',false,1],
        scriptscriptstyle: ['SetStyle','SS',false,2],
        
        rm:                ['SetFont',MML.VARIANT.NORMAL],
        mit:               ['SetFont',MML.VARIANT.ITALIC],
        oldstyle:          ['SetFont',MML.VARIANT.OLDSTYLE],
        cal:               ['SetFont',MML.VARIANT.CALIGRAPHIC],
        it:                ['SetFont',"-tex-mathit"], // needs special handling
        bf:                ['SetFont',MML.VARIANT.BOLD],
        bbFont:            ['SetFont',MML.VARIANT.DOUBLESTRUCK],
        scr:               ['SetFont',MML.VARIANT.SCRIPT],
        frak:              ['SetFont',MML.VARIANT.FRAKTUR],
        sf:                ['SetFont',MML.VARIANT.SANSSERIF],
        tt:                ['SetFont',MML.VARIANT.MONOSPACE],

//      font:
        
        tiny:              ['SetSize',0.5],
        Tiny:              ['SetSize',0.6],  // non-standard
        scriptsize:        ['SetSize',0.7],
        small:             ['SetSize',0.85],
        normalsize:        ['SetSize',1.0],
        large:             ['SetSize',1.2],
        Large:             ['SetSize',1.44],
        LARGE:             ['SetSize',1.73],
        huge:              ['SetSize',2.07],
        Huge:              ['SetSize',2.49],
        
        arcsin:            ['NamedFn'],
        arccos:            ['NamedFn'],
        arctan:            ['NamedFn'],
        arg:               ['NamedFn'],
        cos:               ['NamedFn'],
        cosh:              ['NamedFn'],
        cot:               ['NamedFn'],
        coth:              ['NamedFn'],
        csc:               ['NamedFn'],
        deg:               ['NamedFn'],
        det:                'NamedOp',
        dim:               ['NamedFn'],
        exp:               ['NamedFn'],
        gcd:                'NamedOp',
        hom:               ['NamedFn'],
        inf:                'NamedOp',
        ker:               ['NamedFn'],
        lg:                ['NamedFn'],
        lim:                'NamedOp',
        liminf:            ['NamedOp','lim&thinsp;inf'],
        limsup:            ['NamedOp','lim&thinsp;sup'],
        ln:                ['NamedFn'],
        log:               ['NamedFn'],
        max:                'NamedOp',
        min:                'NamedOp',
        Pr:                 'NamedOp',
        sec:               ['NamedFn'],
        sin:               ['NamedFn'],
        sinh:              ['NamedFn'],
        sup:                'NamedOp',
        tan:               ['NamedFn'],
        tanh:              ['NamedFn'],
        
        limits:            ['Limits',1],
        nolimits:          ['Limits',0],

        overline:            ['UnderOver','00AF'],
        underline:           ['UnderOver','005F'],
        overbrace:           ['UnderOver','23DE',1],
        underbrace:          ['UnderOver','23DF',1],
        overrightarrow:      ['UnderOver','2192'],
        underrightarrow:     ['UnderOver','2192'],
        overleftarrow:       ['UnderOver','2190'],
        underleftarrow:      ['UnderOver','2190'],
        overleftrightarrow:  ['UnderOver','2194'],
        underleftrightarrow: ['UnderOver','2194'],

        overset:            'Overset',
        underset:           'Underset',
        stackrel:           ['Macro','\\mathrel{\\mathop{#2}\\limits^{#1}}',2],
          
        over:               'Over',
        overwithdelims:     'Over',
        atop:               'Over',
        atopwithdelims:     'Over',
        above:              'Over',
        abovewithdelims:    'Over',
        brace:             ['Over','{','}'],
        brack:             ['Over','[',']'],
        choose:            ['Over','(',')'],
        
        frac:               'Frac',
        sqrt:               'Sqrt',
        root:               'Root',
        uproot:            ['MoveRoot','upRoot'],
        leftroot:          ['MoveRoot','leftRoot'],
        
        left:               'LeftRight',
        right:              'LeftRight',
        middle:             'Middle',

        llap:               'Lap',
        rlap:               'Lap',
        raise:              'RaiseLower',
        lower:              'RaiseLower',
        moveleft:           'MoveLeftRight',
        moveright:          'MoveLeftRight',

        ',':               ['Spacer',MML.LENGTH.THINMATHSPACE],
        ':':               ['Spacer',MML.LENGTH.MEDIUMMATHSPACE],  // for LaTeX
        '>':               ['Spacer',MML.LENGTH.MEDIUMMATHSPACE],
        ';':               ['Spacer',MML.LENGTH.THICKMATHSPACE],
        '!':               ['Spacer',MML.LENGTH.NEGATIVETHINMATHSPACE],
        enspace:           ['Spacer',".5em"],
        quad:              ['Spacer',"1em"],
        qquad:             ['Spacer',"2em"],
        thinspace:         ['Spacer',MML.LENGTH.THINMATHSPACE],
        negthinspace:      ['Spacer',MML.LENGTH.NEGATIVETHINMATHSPACE],
    
        hskip:              'Hskip',
        hspace:             'Hskip',
        kern:               'Hskip',
        mskip:              'Hskip',
        mspace:             'Hskip',
        mkern:              'Hskip',
        Rule:              ['Rule'],
        Space:             ['Rule','blank'],
    
        big:               ['MakeBig',MML.TEXCLASS.ORD,0.85],
        Big:               ['MakeBig',MML.TEXCLASS.ORD,1.15],
        bigg:              ['MakeBig',MML.TEXCLASS.ORD,1.45],
        Bigg:              ['MakeBig',MML.TEXCLASS.ORD,1.75],
        bigl:              ['MakeBig',MML.TEXCLASS.OPEN,0.85],
        Bigl:              ['MakeBig',MML.TEXCLASS.OPEN,1.15],
        biggl:             ['MakeBig',MML.TEXCLASS.OPEN,1.45],
        Biggl:             ['MakeBig',MML.TEXCLASS.OPEN,1.75],
        bigr:              ['MakeBig',MML.TEXCLASS.CLOSE,0.85],
        Bigr:              ['MakeBig',MML.TEXCLASS.CLOSE,1.15],
        biggr:             ['MakeBig',MML.TEXCLASS.CLOSE,1.45],
        Biggr:             ['MakeBig',MML.TEXCLASS.CLOSE,1.75],
        bigm:              ['MakeBig',MML.TEXCLASS.REL,0.85],
        Bigm:              ['MakeBig',MML.TEXCLASS.REL,1.15],
        biggm:             ['MakeBig',MML.TEXCLASS.REL,1.45],
        Biggm:             ['MakeBig',MML.TEXCLASS.REL,1.75],

        mathord:           ['TeXAtom',MML.TEXCLASS.ORD],
        mathop:            ['TeXAtom',MML.TEXCLASS.OP],
        mathopen:          ['TeXAtom',MML.TEXCLASS.OPEN],
        mathclose:         ['TeXAtom',MML.TEXCLASS.CLOSE],
        mathbin:           ['TeXAtom',MML.TEXCLASS.BIN],
        mathrel:           ['TeXAtom',MML.TEXCLASS.REL],
        mathpunct:         ['TeXAtom',MML.TEXCLASS.PUNCT],
        mathinner:         ['TeXAtom',MML.TEXCLASS.INNER],

        vcenter:           ['TeXAtom',MML.TEXCLASS.VCENTER],

        mathchoice:        ['Extension','mathchoice'],
        buildrel:           'BuildRel',
    
        hbox:               ['HBox',0],
        text:               'HBox',
        mbox:               ['HBox',0],
        fbox:               'FBox',

        strut:              'Strut',
        mathstrut:         ['Macro','\\vphantom{(}'],
        phantom:            'Phantom',
        vphantom:          ['Phantom',1,0],
        hphantom:          ['Phantom',0,1],
        smash:              'Smash',
    
        acute:             ['Accent', "00B4"],  // or 0301 or 02CA
        grave:             ['Accent', "0060"],  // or 0300 or 02CB
        ddot:              ['Accent', "00A8"],  // or 0308
        tilde:             ['Accent', "007E"],  // or 0303 or 02DC
        bar:               ['Accent', "00AF"],  // or 0304 or 02C9
        breve:             ['Accent', "02D8"],  // or 0306
        check:             ['Accent', "02C7"],  // or 030C
        hat:               ['Accent', "005E"],  // or 0302 or 02C6
        vec:               ['Accent', "2192"],  // or 20D7
        dot:               ['Accent', "02D9"],  // or 0307
        widetilde:         ['Accent', "007E",1], // or 0303 or 02DC
        widehat:           ['Accent', "005E",1], // or 0302 or 02C6

        matrix:             'Matrix',
        array:              'Matrix',
        pmatrix:           ['Matrix','(',')'],
        cases:             ['Matrix','{','',"left left",null,".1em",null,true],
        eqalign:           ['Matrix',null,null,"right left",MML.LENGTH.THICKMATHSPACE,".5em",'D'],
        displaylines:      ['Matrix',null,null,"center",null,".5em",'D'],
        cr:                 'Cr',
        '\\':               'CrLaTeX',
        newline:            'Cr',
        hline:             ['HLine','solid'],
        hdashline:         ['HLine','dashed'],
//      noalign:            'HandleNoAlign',
        eqalignno:         ['Matrix',null,null,"right left right",MML.LENGTH.THICKMATHSPACE+" 3em",".5em",'D'],
        leqalignno:        ['Matrix',null,null,"right left right",MML.LENGTH.THICKMATHSPACE+" 3em",".5em",'D'],

        //  TeX substitution macros
        bmod:              ['Macro','\\mathbin{\\mmlToken{mo}{mod}}'],
        pmod:              ['Macro','\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}',1],
        mod:               ['Macro','\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1',1],
        pod:               ['Macro','\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)',1],
        iff:               ['Macro','\\;\\Longleftrightarrow\\;'],
        skew:              ['Macro','{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}',3],
        mathcal:           ['Macro','{\\cal #1}',1],
        mathscr:           ['Macro','{\\scr #1}',1],
        mathrm:            ['Macro','{\\rm #1}',1],
        mathbf:            ['Macro','{\\bf #1}',1],
        mathbb:            ['Macro','{\\bbFont #1}',1],
        Bbb:               ['Macro','{\\bbFont #1}',1],
        mathit:            ['Macro','{\\it #1}',1],
        mathfrak:          ['Macro','{\\frak #1}',1],
        mathsf:            ['Macro','{\\sf #1}',1],
        mathtt:            ['Macro','{\\tt #1}',1],
        textrm:            ['Macro','\\mathord{\\rm\\text{#1}}',1],
        textit:            ['Macro','\\mathord{\\it{\\text{#1}}}',1],
        textbf:            ['Macro','\\mathord{\\bf{\\text{#1}}}',1],
        pmb:               ['Macro','\\rlap{#1}\\kern1px{#1}',1],
        TeX:               ['Macro','T\\kern-.14em\\lower.5ex{E}\\kern-.115em X'],
        LaTeX:             ['Macro','L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX'],
        ' ':               ['Macro','\\text{ }'],

        //  Specially handled
        not:                'Not',
        dots:               'Dots',
        space:              'Tilde',
        

        //  LaTeX
        begin:              'Begin',
        end:                'End',

        newcommand:        ['Extension','newcommand'],
        renewcommand:      ['Extension','newcommand'],
        newenvironment:    ['Extension','newcommand'],
        renewenvironment:  ['Extension','newcommand'],
        def:               ['Extension','newcommand'],
        let:               ['Extension','newcommand'],
        
        verb:              ['Extension','verb'],
        
        boldsymbol:        ['Extension','boldsymbol'],
        
        tag:               ['Extension','AMSmath'],
        notag:             ['Extension','AMSmath'],
        label:             ['Extension','AMSmath'],
        ref:               ['Extension','AMSmath'],
        eqref:             ['Extension','AMSmath'],
        nonumber:          ['Macro','\\notag'],

        //  Extensions to TeX
        unicode:           ['Extension','unicode'],
        color:              'Color',
        
        href:              ['Extension','HTML'],
        'class':           ['Extension','HTML'],
        style:             ['Extension','HTML'],
        cssId:             ['Extension','HTML'],
        bbox:              ['Extension','bbox'],
    
        mmlToken:           'MmlToken',

        require:            'Require'

      },
      
      environment: {
        array:        ['AlignedArray'],
        matrix:       ['Array',null,null,null,'c'],
        pmatrix:      ['Array',null,'(',')','c'],
        bmatrix:      ['Array',null,'[',']','c'],
        Bmatrix:      ['Array',null,'\\{','\\}','c'],
        vmatrix:      ['Array',null,'\\vert','\\vert','c'],
        Vmatrix:      ['Array',null,'\\Vert','\\Vert','c'],
        cases:        ['Array',null,'\\{','.','ll',null,".1em"],

        equation:     [null,'Equation'],
        'equation*':  [null,'Equation'],

        eqnarray:     ['ExtensionEnv',null,'AMSmath'],
        'eqnarray*':  ['ExtensionEnv',null,'AMSmath'],

        align:        ['ExtensionEnv',null,'AMSmath'],
        'align*':     ['ExtensionEnv',null,'AMSmath'],
        aligned:      ['ExtensionEnv',null,'AMSmath'],
        multline:     ['ExtensionEnv',null,'AMSmath'],
        'multline*':  ['ExtensionEnv',null,'AMSmath'],
        split:        ['ExtensionEnv',null,'AMSmath'],
        gather:       ['ExtensionEnv',null,'AMSmath'],
        'gather*':    ['ExtensionEnv',null,'AMSmath'],
        gathered:     ['ExtensionEnv',null,'AMSmath'],
        alignat:      ['ExtensionEnv',null,'AMSmath'],
        'alignat*':   ['ExtensionEnv',null,'AMSmath'],
        alignedat:    ['ExtensionEnv',null,'AMSmath']
      },
      
      p_height: 1.2 / .85   // cmex10 height plus depth over .85

    });
    
    //
    //  Add macros defined in the configuration
    //
    if (this.config.Macros) {
      var MACROS = this.config.Macros;
      for (var id in MACROS) {if (MACROS.hasOwnProperty(id)) {
        if (typeof(MACROS[id]) === "string") {TEXDEF.macros[id] = ['Macro',MACROS[id]]}
        else {TEXDEF.macros[id] = ["Macro"].concat(MACROS[id])}
        TEXDEF.macros[id].isUser = true;
      }}
    }
  };
  
  /************************************************************************/
  /*
   *   The TeX Parser
   */

  var PARSE = MathJax.Object.Subclass({
    Init: function (string,env) {
      this.string = string; this.i = 0; this.macroCount = 0;
      var ENV; if (env) {ENV = {}; for (var id in env) {if (env.hasOwnProperty(id)) {ENV[id] = env[id]}}}
      this.stack = TEX.Stack(ENV,!!env);
      this.Parse(); this.Push(STACKITEM.stop());
    },
    Parse: function () {
      var c, n;
      while (this.i < this.string.length) {
        c = this.string.charAt(this.i++); n = c.charCodeAt(0);
        if (n >= 0xD800 && n < 0xDC00) {c += this.string.charAt(this.i++)}
        if (TEXDEF.special[c]) {this[TEXDEF.special[c]](c)}
        else if (TEXDEF.letter.test(c)) {this.Variable(c)}
        else if (TEXDEF.digit.test(c)) {this.Number(c)}
        else {this.Other(c)}
      }
    },
    Push: function () {this.stack.Push.apply(this.stack,arguments)},
    mml: function () {
      if (this.stack.Top().type !== "mml") {return null}
      return this.stack.Top().data[0];
    },
    mmlToken: function (token) {return token}, // used by boldsymbol extension

    /************************************************************************/
    /*
     *   Handle various token classes
     */

    /*
     *  Lookup a control-sequence and process it
     */
    ControlSequence: function (c) {
      var name = this.GetCS(), macro = this.csFindMacro(name);
      if (macro) {
        if (!(macro instanceof Array)) {macro = [macro]}
        var fn = macro[0]; if (!(fn instanceof Function)) {fn = this[fn]}
        fn.apply(this,[c+name].concat(macro.slice(1)));
      } else if (TEXDEF.mathchar0mi[name])            {this.csMathchar0mi(name,TEXDEF.mathchar0mi[name])}
        else if (TEXDEF.mathchar0mo[name])            {this.csMathchar0mo(name,TEXDEF.mathchar0mo[name])}
        else if (TEXDEF.mathchar7[name])              {this.csMathchar7(name,TEXDEF.mathchar7[name])}
        else if (TEXDEF.delimiter["\\"+name] != null) {this.csDelimiter(name,TEXDEF.delimiter["\\"+name])}
        else                                          {this.csUndefined(c+name)}
    },
    //
    //  Look up a macro in the macros list
    //  (overridden in begingroup extension)
    //
    csFindMacro: function (name) {return TEXDEF.macros[name]},
    //
    //  Handle normal mathchar (as an mi)
    //
    csMathchar0mi: function (name,mchar) {
      var def = {mathvariant: MML.VARIANT.ITALIC};
      if (mchar instanceof Array) {def = mchar[1]; mchar = mchar[0]}
      this.Push(this.mmlToken(MML.mi(MML.entity("#x"+mchar)).With(def)));
    },
    //
    //  Handle normal mathchar (as an mo)
    //
    csMathchar0mo: function (name,mchar) {
      var def = {stretchy: false};
      if (mchar instanceof Array) {def = mchar[1]; def.stretchy = false; mchar = mchar[0]}
      this.Push(this.mmlToken(MML.mo(MML.entity("#x"+mchar)).With(def)));
    },
    //
    //  Handle mathchar in current family
    //
    csMathchar7: function (name,mchar) {
      var def = {mathvariant: MML.VARIANT.NORMAL};
      if (mchar instanceof Array) {def = mchar[1]; mchar = mchar[0]}
      if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      this.Push(this.mmlToken(MML.mi(MML.entity("#x"+mchar)).With(def)));
    },
    //
    //  Handle delimiter
    //
    csDelimiter: function (name,delim) {
      var def = {};
      if (delim instanceof Array) {def = delim[1]; delim = delim[0]}
      if (delim.length === 4) {delim = MML.entity('#x'+delim)} else {delim = MML.chars(delim)}
      this.Push(this.mmlToken(MML.mo(delim).With({fence: false, stretchy: false}).With(def)));
    },
    //
    //  Handle undefined control sequence
    //  (overridden in noUndefined extension)
    //
    csUndefined: function (name) {
      TEX.Error(["UndefinedControlSequence","Undefined control sequence %1",name]);
    },

    /*
     *  Handle a variable (a single letter)
     */
    Variable: function (c) {
      var def = {}; if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      this.Push(this.mmlToken(MML.mi(MML.chars(c)).With(def)));
    },

    /*
     *  Determine the extent of a number (pattern may need work)
     */
    Number: function (c) {
      var mml, n = this.string.slice(this.i-1).match(TEXDEF.number);
      if (n) {mml = MML.mn(n[0].replace(/[{}]/g,"")); this.i += n[0].length - 1}
        else {mml = MML.mo(MML.chars(c))}
      if (this.stack.env.font) {mml.mathvariant = this.stack.env.font}
      this.Push(this.mmlToken(mml));
    },
    
    /*
     *  Handle { and }
     */
    Open: function (c) {this.Push(STACKITEM.open())},
    Close: function (c) {this.Push(STACKITEM.close())},
    
    /*
     *  Handle tilde and spaces
     */
    Tilde: function (c) {this.Push(MML.mtext(MML.chars(NBSP)))},
    Space: function (c) {},
    
    /*
     *  Handle ^, _, and '
     */
    Superscript: function (c) {
      if (this.GetNext().match(/\d/)) // don't treat numbers as a unit
        {this.string = this.string.substr(0,this.i+1)+" "+this.string.substr(this.i+1)}
      var position, primes, base, top = this.stack.Top();
      if (top.type === "prime") {base = top.data[0]; primes = top.data[1]; this.stack.Pop()}
        else {base = this.stack.Prev(); if (!base) {base = MML.mi("")}}
      if (base.isEmbellishedWrapper) {base = base.data[0].data[0]}
      if (base.type === "msubsup") {
        if (base.data[base.sup])
          {TEX.Error(["DoubleExponent","Double exponent: use braces to clarify"])}
        position = base.sup;
      } else if (base.movesupsub) {
        if (base.type !== "munderover" || base.data[base.over]) {
          if (base.movablelimits && base.isa(MML.mi)) {base = this.mi2mo(base)}
          base = MML.munderover(base,null,null).With({movesupsub:true})
        }
        position = base.over;
      } else {
        base = MML.msubsup(base,null,null);
        position = base.sup;
      }
      this.Push(STACKITEM.subsup(base).With({position: position, primes: primes}));
    },
    Subscript: function (c) {
      if (this.GetNext().match(/\d/)) // don't treat numbers as a unit
        {this.string = this.string.substr(0,this.i+1)+" "+this.string.substr(this.i+1)}
      var position, primes, base, top = this.stack.Top();
      if (top.type === "prime") {base = top.data[0]; primes = top.data[1]; this.stack.Pop()}
        else {base = this.stack.Prev(); if (!base) {base = MML.mi("")}}
      if (base.isEmbellishedWrapper) {base = base.data[0].data[0]}
      if (base.type === "msubsup") {
        if (base.data[base.sub])
          {TEX.Error(["DoubleSubscripts","Double subscripts: use braces to clarify"])}
        position = base.sub;
      } else if (base.movesupsub) {
        if (base.type !== "munderover" || base.data[base.under]) {
          if (base.movablelimits && base.isa(MML.mi)) {base = this.mi2mo(base)}
          base = MML.munderover(base,null,null).With({movesupsub:true})
        }
        position = base.under;
      } else {
        base = MML.msubsup(base,null,null);
        position = base.sub;
      }
      this.Push(STACKITEM.subsup(base).With({position: position, primes: primes}));
    },
    PRIME: "\u2032", SMARTQUOTE: "\u2019",
    Prime: function (c) {
      var base = this.stack.Prev(); if (!base) {base = MML.mi()}
      if (base.type === "msubsup" && base.data[base.sup]) {
        TEX.Error(["DoubleExponentPrime",
                   "Prime causes double exponent: use braces to clarify"]);
      }
      var sup = ""; this.i--;
      do {sup += this.PRIME; this.i++, c = this.GetNext()}
        while (c === "'" || c === this.SMARTQUOTE);
      sup = ["","\u2032","\u2033","\u2034","\u2057"][sup.length] || sup;
      this.Push(STACKITEM.prime(base,this.mmlToken(MML.mo(sup))));
    },
    mi2mo: function (mi) {
      var mo = MML.mo();  mo.Append.apply(mo,mi.data); var id;
      for (id in mo.defaults)
        {if (mo.defaults.hasOwnProperty(id) && mi[id] != null) {mo[id] = mi[id]}}
      for (id in MML.copyAttributes)
        {if (MML.copyAttributes.hasOwnProperty(id) && mi[id] != null) {mo[id] = mi[id]}}
      return mo;
    },
    
    /*
     *  Handle comments
     */
    Comment: function (c) {
      while (this.i < this.string.length && this.string.charAt(this.i) != "\n") {this.i++}
    },
    
    /*
     *  Handle hash marks outside of definitions
     */
    Hash: function (c) {
      TEX.Error(["CantUseHash1",
                 "You can't use 'macro parameter character #' in math mode"]);
    },
    
    /*
     *  Handle other characters (as <mo> elements)
     */
    Other: function (c) {
      var def = {stretchy: false}, mo;
      if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      if (TEXDEF.remap[c]) {
        c = TEXDEF.remap[c];
        if (c instanceof Array) {def = c[1]; c = c[0]}
        mo = MML.mo(MML.entity('#x'+c)).With(def);
      } else {
        mo = MML.mo(c).With(def);
      }
      if (mo.autoDefault("texClass",true) == "") {mo = MML.TeXAtom(mo)}
      this.Push(this.mmlToken(mo));
    },
    
    /************************************************************************/
    /*
     *   Macros
     */
    
    SetFont: function (name,font) {this.stack.env.font = font},
    SetStyle: function (name,texStyle,style,level) {
      this.stack.env.style = texStyle; this.stack.env.level = level;
      this.Push(STACKITEM.style().With({styles: {displaystyle: style, scriptlevel: level}}));
    },
    SetSize: function (name,size) {
      this.stack.env.size = size;
      this.Push(STACKITEM.style().With({styles: {mathsize: size+"em"}})); // convert to absolute?
    },

    Color: function (name) {
      var color = this.GetArgument(name);
      var old = this.stack.env.color; this.stack.env.color = color;
      var math = this.ParseArg(name);
      if (old) {this.stack.env.color} else {delete this.stack.env.color}
      this.Push(MML.mstyle(math).With({mathcolor: color}));
    },
    
    Spacer: function (name,space) {
      this.Push(MML.mspace().With({width: space, mathsize: MML.SIZE.NORMAL, scriptlevel:0}));
    },
    
    LeftRight: function (name) {
      this.Push(STACKITEM[name.substr(1)]().With({delim: this.GetDelimiter(name)}));
    },
    
    Middle: function (name) {
      var delim = this.GetDelimiter(name);
      if (this.stack.Top().type !== "left")
        {TEX.Error(["MisplacedMiddle","%1 must be within \\left and \\right",name])}
      this.Push(MML.mo(delim).With({stretchy:true}));
    },
    
    NamedFn: function (name,id) {
      if (!id) {id = name.substr(1)};
      var mml = MML.mi(id).With({texClass: MML.TEXCLASS.OP});
      this.Push(STACKITEM.fn(this.mmlToken(mml)));
    },
    NamedOp: function (name,id) {
      if (!id) {id = name.substr(1)};
      id = id.replace(/&thinsp;/,"\u2006");
      var mml = MML.mo(id).With({
        movablelimits: true,
        movesupsub: true,
        form: MML.FORM.PREFIX,
        texClass: MML.TEXCLASS.OP
      });
      mml.useMMLspacing &= ~mml.SPACE_ATTR.form;  // don't count this explicit form setting
      this.Push(this.mmlToken(mml));
    },
    Limits: function (name,limits) {
      var op = this.stack.Prev("nopop");
      if (!op || op.texClass !== MML.TEXCLASS.OP)
        {TEX.Error(["MisplacedLimits","%1 is allowed only on operators",name])}
      op.movesupsub = (limits ? true : false);
      op.movablelimits = false;
    },
    
    Over: function (name,open,close) {
      var mml = STACKITEM.over().With({name: name});
      if (open || close) {
        mml.open = open; mml.close = close;
      } else if (name.match(/withdelims$/)) {
        mml.open  = this.GetDelimiter(name);
        mml.close = this.GetDelimiter(name);
      }
      if (name.match(/^\\above/)) {mml.thickness = this.GetDimen(name)}
      else if (name.match(/^\\atop/) || open || close) {mml.thickness = 0}
      this.Push(mml);
    },

    Frac: function (name) {
      var num = this.ParseArg(name);
      var den = this.ParseArg(name);
      this.Push(MML.mfrac(num,den));
    },

    Sqrt: function (name) {
      var n = this.GetBrackets(name), arg = this.GetArgument(name);
      if (arg === "\\frac") {arg += "{"+this.GetArgument(arg)+"}{"+this.GetArgument(arg)+"}"}
      var mml = TEX.Parse(arg,this.stack.env).mml();
      if (!n) {mml = MML.msqrt.apply(MML,mml.array())}
         else {mml = MML.mroot(mml,this.parseRoot(n))}
      this.Push(mml);
    },
    Root: function (name) {
      var n = this.GetUpTo(name,"\\of");
      var arg = this.ParseArg(name);
      this.Push(MML.mroot(arg,this.parseRoot(n)));
    },
    parseRoot: function (n) {
      var env = this.stack.env, inRoot = env.inRoot; env.inRoot = true;
      var parser = TEX.Parse(n,env); n = parser.mml(); var global = parser.stack.global;
      if (global.leftRoot || global.upRoot) {
        n = MML.mpadded(n);
        if (global.leftRoot) {n.width = global.leftRoot}
        if (global.upRoot) {n.voffset = global.upRoot; n.height = global.upRoot}
      }
      env.inRoot = inRoot;
      return n;
    },
    MoveRoot: function (name,id) {
      if (!this.stack.env.inRoot)
        {TEX.Error(["MisplacedMoveRoot","%1 can appear only within a root",name])}
      if (this.stack.global[id])
        {TEX.Error(["MultipleMoveRoot","Multiple use of %1",name])}
      var n = this.GetArgument(name);
      if (!n.match(/-?[0-9]+/))
        {TEX.Error(["IntegerArg","The argument to %1 must be an integer",name])}
      n = (n/15)+"em";
      if (n.substr(0,1) !== "-") {n = "+"+n}
      this.stack.global[id] = n;
    },
    
    Accent: function (name,accent,stretchy) {
      var c = this.ParseArg(name);
      var def = {accent: true}; if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      var mml = this.mmlToken(MML.mo(MML.entity("#x"+accent)).With(def));
      mml.stretchy = (stretchy ? true : false);
      this.Push(MML.TeXAtom(MML.munderover(c,null,mml).With({accent: true})));
    },
    
    UnderOver: function (name,c,stack) {
      var pos = {o: "over", u: "under"}[name.charAt(1)];
      var base = this.ParseArg(name);
      if (base.Get("movablelimits")) {base.movablelimits = false}
      var mml = MML.munderover(base,null,null);
      if (stack) {mml.movesupsub = true}
      mml.data[mml[pos]] = 
        this.mmlToken(MML.mo(MML.entity("#x"+c)).With({stretchy:true, accent:(pos == "under")}));
      this.Push(mml);
    },
    
    Overset: function (name) {
      var top = this.ParseArg(name), base = this.ParseArg(name);
      this.Push(MML.mover(base,top));
    },
    Underset: function (name) {
      var bot = this.ParseArg(name), base = this.ParseArg(name);
      this.Push(MML.munder(base,bot));
    },
    
    TeXAtom: function (name,mclass) {
      var def = {texClass: mclass}, mml;
      if (mclass == MML.TEXCLASS.OP) {
        def.movesupsub = def.movablelimits = true;
        var arg = this.GetArgument(name);
        var match = arg.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
        if (match) {
          def.mathvariant = MML.VARIANT.NORMAL;
          mml = STACKITEM.fn(this.mmlToken(MML.mi(match[1]).With(def)));
        } else {
          mml = STACKITEM.fn(MML.TeXAtom(TEX.Parse(arg,this.stack.env).mml()).With(def));
        }
      } else {mml = MML.TeXAtom(this.ParseArg(name)).With(def)}
      this.Push(mml);
    },
    
    MmlToken: function (name) {
      var type = this.GetArgument(name),
          attr = this.GetBrackets(name,"").replace(/^\s+/,""),
          data = this.GetArgument(name),
          def = {attrNames:[]}, match;
      if (!MML[type] || !MML[type].prototype.isToken)
        {TEX.Error(["NotMathMLToken","%1 is not a token element",type])}
      while (attr !== "") {
        match = attr.match(/^([a-z]+)\s*=\s*(\'[^']*'|"[^"]*"|[^ ]*)\s*/i);
        if (!match)
          {TEX.Error("InvalidMathMLAttr","Invalid MathML attribute: %1",attr)}
        if (!MML[type].prototype.defaults[match[1]] && !this.MmlTokenAllow[match[1]]) {
          TEX.Error(["UnknownAttrForElement",
                     "%1 is not a recognized attribute for %2",
                     match[1],type]);
        }
        var value = this.MmlFilterAttribute(match[1],match[2].replace(/^(['"])(.*)\1$/,"$2"));
        if (value) {
          if (value.toLowerCase() === "true") {value = true}
            else if (value.toLowerCase() === "false") {value = false}
          def[match[1]] = value;
          def.attrNames.push(match[1]);
        }
        attr = attr.substr(match[0].length);
      }
      this.Push(this.mmlToken(MML[type](data).With(def)));
    },
    MmlFilterAttribute: function (name,value) {return value},
    MmlTokenAllow: {
      fontfamily:1, fontsize:1, fontweight:1, fontstyle:1,
      color:1, background:1,
      id:1, "class":1, href:1, style:1
    },
    
    Strut: function (name) {
      this.Push(MML.mpadded(MML.mrow()).With({height: "8.6pt", depth: "3pt", width: 0}));
    },
    
    Phantom: function (name,v,h) {
      var box = MML.mphantom(this.ParseArg(name));
      if (v || h) {
        box = MML.mpadded(box);
        if (h) {box.height = box.depth = 0}
        if (v) {box.width = 0}
      }
      this.Push(MML.TeXAtom(box));
    },
    
    Smash: function (name) {
      var bt = this.trimSpaces(this.GetBrackets(name,""));
      var smash = MML.mpadded(this.ParseArg(name));
      switch (bt) {
        case "b": smash.depth = 0; break;
        case "t": smash.height = 0; break;
        default: smash.height = smash.depth = 0;
      }
      this.Push(MML.TeXAtom(smash));
    },
    
    Lap: function (name) {
      var mml = MML.mpadded(this.ParseArg(name)).With({width: 0});
      if (name === "\\llap") {mml.lspace = "-1 width"}
      this.Push(MML.TeXAtom(mml));
    },
    
    RaiseLower: function (name) {
      var h = this.GetDimen(name);
      var item = STACKITEM.position().With({name: name, move: 'vertical'});
      if (h.charAt(0) === '-') {h = h.slice(1); name = {raise: "\\lower", lower: "\\raise"}[name.substr(1)]}
      if (name === "\\lower") {item.dh = '-'+h; item.dd = '+'+h} else {item.dh = '+'+h; item.dd = '-'+h}
      this.Push(item);
    },
    
    MoveLeftRight: function (name) {
      var h = this.GetDimen(name);
      var nh = (h.charAt(0) === '-' ? h.slice(1) : '-'+h);
      if (name === "\\moveleft") {var tmp = h; h = nh; nh = tmp}
      this.Push(STACKITEM.position().With({
        name: name, move: 'horizontal',
        left:  MML.mspace().With({width: h, mathsize: MML.SIZE.NORMAL}),
        right: MML.mspace().With({width: nh, mathsize: MML.SIZE.NORMAL})
      }));
    },
    
    Hskip: function (name) {
      this.Push(MML.mspace().With({width: this.GetDimen(name), mathsize: MML.SIZE.NORMAL}));
    },
    
    Rule: function (name,style) {
      var w = this.GetDimen(name),
          h = this.GetDimen(name),
          d = this.GetDimen(name);
      var mml, def = {width:w, height:h, depth:d};
      if (style !== 'blank') {
        if (parseFloat(w) && parseFloat(h)+parseFloat(d))
          {def.mathbackground = (this.stack.env.color || "black")}
        mml = MML.mpadded(MML.mrow()).With(def);
      } else {
        mml = MML.mspace().With(def);
      }
      this.Push(mml);
    },
    
    MakeBig: function (name,mclass,size) {
      size *= TEXDEF.p_height;
      size = String(size).replace(/(\.\d\d\d).+/,'$1')+"em";
      var delim = this.GetDelimiter(name);
      this.Push(MML.TeXAtom(MML.mo(delim).With({
        minsize: size, maxsize: size,
        fence: true, stretchy: true, symmetric: true
      })).With({texClass: mclass}));
    },
    
    BuildRel: function (name) {
      var top = this.ParseUpTo(name,"\\over");
      var bot = this.ParseArg(name);
      this.Push(MML.TeXAtom(MML.munderover(bot,null,top)).With({mclass: MML.TEXCLASS.REL}));
    },
    
    HBox: function (name,style) {
      this.Push.apply(this,this.InternalMath(this.GetArgument(name),style));
    },
    
    FBox: function (name) {
      this.Push(MML.menclose.apply(MML,this.InternalMath(this.GetArgument(name))).With({notation:"box"}));
    },
    
    Not: function (name) {
      this.Push(STACKITEM.not());
    },
    
    Dots: function (name) {
      this.Push(STACKITEM.dots().With({
        ldots: this.mmlToken(MML.mo(MML.entity("#x2026")).With({stretchy:false})),
        cdots: this.mmlToken(MML.mo(MML.entity("#x22EF")).With({stretchy:false}))
      }));
    },
    
    Require: function (name) {
      var file = this.GetArgument(name)
        .replace(/.*\//,"")            // remove any leading path
        .replace(/[^a-z0-9_.-]/ig,""); // remove illegal characters
      this.Extension(null,file);
    },
    
    Extension: function (name,file,array) {
      if (name && !typeof(name) === "string") {name = name.name}
      file = TEX.extensionDir+"/"+file;
      if (!file.match(/\.js$/)) {file += ".js"}
      if (!AJAX.loaded[AJAX.fileURL(file)]) {
        if (name != null) {delete TEXDEF[array || 'macros'][name.replace(/^\\/,"")]}
        HUB.RestartAfter(AJAX.Require(file));
      }
    },
    
    Macro: function (name,macro,argcount,def) {
      if (argcount) {
        var args = [];
        if (def != null) {
          var optional = this.GetBrackets(name);
          args.push(optional == null ? def : optional);
        }
        for (var i = args.length; i < argcount; i++) {args.push(this.GetArgument(name))}
        macro = this.SubstituteArgs(args,macro);
      }
      this.string = this.AddArgs(macro,this.string.slice(this.i));
      this.i = 0;
      if (++this.macroCount > TEX.config.MAXMACROS) {
        TEX.Error(["MaxMacroSub1",
                   "MathJax maximum macro substitution count exceeded; " +
                   "is there a recursive macro call?"]);
      }
    },
    
    Matrix: function (name,open,close,align,spacing,vspacing,style,cases) {
      var c = this.GetNext();
      if (c === "")
        {TEX.Error(["MissingArgFor","Missing argument for %1",name])}
      if (c === "{") {this.i++} else {this.string = c+"}"+this.string.slice(this.i+1); this.i = 0}
      var array = STACKITEM.array().With({
        requireClose: true,
        arraydef: {
          rowspacing: (vspacing||"4pt"),
          columnspacing: (spacing||"1em")
        }
      });
      if (cases)         {array.isCases = true}
      if (open || close) {array.open = open; array.close = close}
      if (style === "D") {array.arraydef.displaystyle = true}
      if (align != null) {array.arraydef.columnalign = align}
      this.Push(array);
    },
    
    Entry: function (name) {
      this.Push(STACKITEM.cell().With({isEntry: true, name: name}));
      if (this.stack.Top().isCases) {
        var string = this.string;
        var braces = 0, i = this.i, m = string.length;
        while (i < m) {
          var c = string.charAt(i);
          if (c === "{") {braces++; i++}
          else if (c === "}") {if (braces === 0) {m = 0} else {braces--; i++}}
          else if (c === "&" && braces === 0) {
            TEX.Error(["ExtraAlignTab","Extra alignment tab in \\cases text"]);
          } else if (c === "\\") {
            if (string.substr(i).match(/^((\\cr)[^a-zA-Z]|\\\\)/)) {m = 0} else {i += 2}
          } else {i++}
        }
        var text = string.substr(this.i,i-this.i);
        if (!text.match(/^\s*\\text[^a-zA-Z]/)) {
          this.Push.apply(this,this.InternalMath(text));
          this.i = i;
        }
      }
    },
    
    Cr: function (name) {
      this.Push(STACKITEM.cell().With({isCR: true, name: name}));
    },
    
    CrLaTeX: function (name) {
      var n;
      if (this.string.charAt(this.i) === "[") {
        n = this.GetBrackets(name,"").replace(/ /g,"");
        if (n &&
            !n.match(/^((-?(\.\d+|\d+(\.\d*)?))(pt|em|ex|mu|mm|cm|in|pc))$/)) {
          TEX.Error(["BracketMustBeDimension",
                     "Bracket argument to %1 must be a dimension",name]);
        }
      }
      this.Push(STACKITEM.cell().With({isCR: true, name: name, linebreak: true}));
      var top = this.stack.Top();
      if (top.isa(STACKITEM.array)) {
        if (n && top.arraydef.rowspacing) {
          var rows = top.arraydef.rowspacing.split(/ /);
          if (!top.rowspacing) {top.rowspacing = this.dimen2em(rows[0])}
          while (rows.length < top.table.length) {rows.push(this.Em(top.rowspacing))}
          rows[top.table.length-1] = this.Em(Math.max(0,top.rowspacing+this.dimen2em(n)));
          top.arraydef.rowspacing = rows.join(' ');
        }
      } else {
        if (n) {this.Push(MML.mspace().With({depth:n}))}
        this.Push(MML.mo().With({linebreak:MML.LINEBREAK.NEWLINE}));
      }
    },
    emPerInch: 7.2,
    dimen2em: function (dim) {
      var match = dim.match(/^(-?(?:\.\d+|\d+(?:\.\d*)?))(pt|em|ex|mu|pc|in|mm|cm)/);
      var m = parseFloat(match[1]||"1"), unit = match[2];
      if (unit === "em") {return m}
      if (unit === "ex") {return m * .43}
      if (unit === "pt") {return m / 10}                    // 10 pt to an em
      if (unit === "pc") {return m * 1.2}                   // 12 pt to a pc
      if (unit === "in") {return m * this.emPerInch}
      if (unit === "cm") {return m * this.emPerInch / 2.54} // 2.54 cm to an inch
      if (unit === "mm") {return m * this.emPerInch / 25.4} // 10 mm to a cm
      if (unit === "mu") {return m / 18}
      return 0;
    },
    Em: function (m) {
      if (Math.abs(m) < .0006) {return "0em"}
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    
    HLine: function (name,style) {
      if (style == null) {style = "solid"}
      var top = this.stack.Top();
      if (!top.isa(STACKITEM.array) || top.data.length)
        {TEX.Error(["Misplaced","Misplaced %1",name])}
      if (top.table.length == 0) {
        top.frame.push("top");
      } else {
        var lines = (top.arraydef.rowlines ? top.arraydef.rowlines.split(/ /) : []);
        while (lines.length < top.table.length) {lines.push("none")}
        lines[top.table.length-1] = style;
        top.arraydef.rowlines = lines.join(' ');
      }
    },
    
   /************************************************************************/
   /*
    *   LaTeX environments
    */

    Begin: function (name) {
      var env = this.GetArgument(name);
      if (env.match(/[^a-z*]/i))
        {TEX.Error(["InvalidEnv","Invalid environment name '%1'",env])}
      var cmd = this.envFindName(env);
      if (!cmd)
        {TEX.Error(["UnknownEnv","Unknown environment '%1'",env])}
      if (++this.macroCount > TEX.config.MAXMACROS) {
        TEX.Error(["MaxMacroSub2",
                   "MathJax maximum substitution count exceeded; " +
                   "is there a recursive latex environment?"]);
      }
      if (!(cmd instanceof Array)) {cmd = [cmd]}
      var mml = STACKITEM.begin().With({name: env, end: cmd[1], parse:this});
      if (cmd[0] && this[cmd[0]]) {mml = this[cmd[0]].apply(this,[mml].concat(cmd.slice(2)))}
      this.Push(mml);
    },
    End: function (name) {
      this.Push(STACKITEM.end().With({name: this.GetArgument(name)}));
    },
    envFindName: function (name) {return TEXDEF.environment[name]},
    
    Equation: function (begin,row) {return row},
    
    ExtensionEnv: function (begin,file) {this.Extension(begin.name,file,"environment")},
    
    Array: function (begin,open,close,align,spacing,vspacing,style,raggedHeight) {
      if (!align) {align = this.GetArgument("\\begin{"+begin.name+"}")}
      var lines = ("c"+align).replace(/[^clr|:]/g,'').replace(/[^|:]([|:])+/g,'$1');
      align = align.replace(/[^clr]/g,'').split('').join(' ');
      align = align.replace(/l/g,'left').replace(/r/g,'right').replace(/c/g,'center');
      var array = STACKITEM.array().With({
        arraydef: {
          columnalign: align,
          columnspacing: (spacing||"1em"),
          rowspacing: (vspacing||"4pt")
        }
      });
      if (lines.match(/[|:]/)) {
        if (lines.charAt(0).match(/[|:]/)) {array.frame.push("left"); array.frame.dashed = lines.charAt(0) === ":"}
        if (lines.charAt(lines.length-1).match(/[|:]/)) {array.frame.push("right")}
        lines = lines.substr(1,lines.length-2);
        array.arraydef.columnlines =
          lines.split('').join(' ').replace(/[^|: ]/g,'none').replace(/\|/g,'solid').replace(/:/g,'dashed');
      }
      if (open)  {array.open  = this.convertDelimiter(open)}
      if (close) {array.close = this.convertDelimiter(close)}
      if (style === "D") {array.arraydef.displaystyle = true}
      if (style === "S") {array.arraydef.scriptlevel = 1} // FIXME: should use mstyle?
      if (raggedHeight)  {array.arraydef.useHeight = false}
      this.Push(begin);
      return array;
    },
    
    AlignedArray: function (begin) {
      var align = this.GetBrackets("\\begin{"+begin.name+"}");
      return this.setArrayAlign(this.Array.apply(this,arguments),align);
    },
    setArrayAlign: function (array,align) {
      align = this.trimSpaces(align||"");
      if (align === "t") {array.arraydef.align = "baseline 1"}
      else if (align === "b") {array.arraydef.align = "baseline -1"}
      else if (align === "c") {array.arraydef.align = "center"}
      else if (align) {array.arraydef.align = align} // FIXME: should be an error?
      return array;
    },
    
    /************************************************************************/
    /*
     *   String handling routines
     */

    /*
     *  Convert delimiter to character
     */
    convertDelimiter: function (c) {
      if (c) {c = TEXDEF.delimiter[c]}
      if (c == null) {return null}
      if (c instanceof Array) {c = c[0]}
      if (c.length === 4) {c = String.fromCharCode(parseInt(c,16))}
      return c;
    },

    /*
     *  Trim spaces from a string
     */
    trimSpaces: function (text) {
      if (typeof(text) != 'string') {return text}
      return text.replace(/^\s+|\s+$/g,'');
    },

    /*
     *   Check if the next character is a space
     */
    nextIsSpace: function () {
      return this.string.charAt(this.i).match(/[ \n\r\t]/);
    },
    
    /*
     *  Get the next non-space character
     */
    GetNext: function () {
      while (this.nextIsSpace()) {this.i++}
      return this.string.charAt(this.i);
    },
  
    /*
     *  Get and return a control-sequence name
     */
    GetCS: function () {
      var CS = this.string.slice(this.i).match(/^([a-z]+|.) ?/i);
      if (CS) {this.i += CS[1].length; return CS[1]} else {this.i++; return " "}
    },

    /*
     *  Get and return a TeX argument (either a single character or control sequence,
     *  or the contents of the next set of braces).
     */
    GetArgument: function (name,noneOK) {
      switch (this.GetNext()) {
       case "":
        if (!noneOK) {TEX.Error(["MissingArgFor","Missing argument for %1",name])}
        return null;
       case '}':
        if (!noneOK) {
          TEX.Error(["ExtraCloseMissingOpen",
                     "Extra close brace or missing open brace"]);
        }
        return null;
       case '\\':
        this.i++; return "\\"+this.GetCS();
       case '{':
        var j = ++this.i, parens = 1;
        while (this.i < this.string.length) {
          switch (this.string.charAt(this.i++)) {
           case '\\':  this.i++; break;
           case '{':   parens++; break;
           case '}':
            if (parens == 0) {TEX.Error(["ExtraClose","Extra close brace"])}
            if (--parens == 0) {return this.string.slice(j,this.i-1)}
            break;
          }
        }
        TEX.Error(["MissingCloseBrace","Missing close brace"]);
        break;
      }        
      return this.string.charAt(this.i++);
    },
    
    /*
     *  Get an optional LaTeX argument in brackets
     */
    GetBrackets: function (name,def) {
      if (this.GetNext() != '[') {return def};
      var j = ++this.i, parens = 0;
      while (this.i < this.string.length) {
        switch (this.string.charAt(this.i++)) {
         case '{':   parens++; break;
         case '\\':  this.i++; break;
         case '}':
          if (parens-- <= 0) {
            TEX.Error(["ExtraCloseLooking",
                       "Extra close brace while looking for %1","']'"]);
          }
          break;   
         case ']':
          if (parens == 0) {return this.string.slice(j,this.i-1)}
          break;
        }
      }
      TEX.Error(["MissingCloseBracket",
                 "Couldn't find closing ']' for argument to %1",name]);
    },
  
    /*
     *  Get the name of a delimiter (check it in the delimiter list).
     */
    GetDelimiter: function (name) {
      while (this.nextIsSpace()) {this.i++}
      var c = this.string.charAt(this.i);
      if (this.i < this.string.length) {
        this.i++; if (c == "\\") {c += this.GetCS(name)}
        if (TEXDEF.delimiter[c] != null) {return this.convertDelimiter(c)}
      }
      TEX.Error(["MissingOrUnrecognizedDelim",
                 "Missing or unrecognized delimiter for %1",name]);
    },

    /*
     *  Get a dimension (including its units).
     */
    GetDimen: function (name) {
      var dimen;
      if (this.nextIsSpace()) {this.i++}
      if (this.string.charAt(this.i) == '{') {
        dimen = this.GetArgument(name);
        if (dimen.match(/^\s*([-+]?(\.\d+|\d+(\.\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/))
          {return dimen.replace(/ /g,"")}
      } else {
        dimen = this.string.slice(this.i);
        var match = dimen.match(/^\s*(([-+]?(\.\d+|\d+(\.\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)) ?/);
        if (match) {
          this.i += match[0].length;
          return match[1].replace(/ /g,"");
        }
      }
      TEX.Error(["MissingDimOrUnits",
                 "Missing dimension or its units for %1",name]);
    },
    
    /*
     *  Get everything up to the given control sequence (token)
     */
    GetUpTo: function (name,token) {
      while (this.nextIsSpace()) {this.i++}
      var j = this.i, k, c, parens = 0;
      while (this.i < this.string.length) {
        k = this.i; c = this.string.charAt(this.i++);
        switch (c) {
         case '\\':  c += this.GetCS(); break;
         case '{':   parens++; break;
         case '}':
          if (parens == 0) {
            TEX.Error(["ExtraCloseLooking",
                       "Extra close brace while looking for %1",token])
          }
          parens--;
          break;
        }
        if (parens == 0 && c == token) {return this.string.slice(j,k)}
      }
      TEX.Error(["TokenNotFoundForCommand",
                 "Couldn't find %1 for %2",token,name]);
    },

    /*
     *  Parse various substrings
     */
    ParseArg: function (name) {return TEX.Parse(this.GetArgument(name),this.stack.env).mml()},
    ParseUpTo: function (name,token) {return TEX.Parse(this.GetUpTo(name,token),this.stack.env).mml()},
    
    /*
     *  Break up a string into text and math blocks
     *  @@@ FIXME:  skip over braced groups?  @@@
     *  @@@ FIXME:  pass environment to TEX.Parse? @@@
     */
    InternalMath: function (text,level) {
      var def = {displaystyle: false}; if (level != null) {def.scriptlevel = level}
      if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      if (!text.match(/\\?\$|\\\(|\\(eq)?ref\s*\{/)) {return [this.InternalText(text,def)]}
      var i = 0, k = 0, c, match = '';
      var mml = [];
      while (i < text.length) {
        c = text.charAt(i++);
        if (c === '$') {
          if (match === '$') {
            mml.push(MML.TeXAtom(TEX.Parse(text.slice(k,i-1),{}).mml().With(def)));
            match = ''; k = i;
          } else if (match === '') {
            if (k < i-1) {mml.push(this.InternalText(text.slice(k,i-1),def))}
            match = '$'; k = i;
          }
        } else if (c === '}' && match === '}') {
          mml.push(MML.TeXAtom(TEX.Parse(text.slice(k,i),{}).mml().With(def)));
          match = ''; k = i;
        } else if (c === '\\') {
          if (match === '' && text.substr(i).match(/^(eq)?ref\s*\{/)) {
            if (k < i-1) {mml.push(this.InternalText(text.slice(k,i-1),def))}
            match = '}'; k = i-1;
          } else {
            c = text.charAt(i++);
            if (c === '(' && match === '') {
              if (k < i-2) {mml.push(this.InternalText(text.slice(k,i-2),def))}
              match = ')'; k = i;
            } else if (c === ')' && match === ')') {
              mml.push(MML.TeXAtom(TEX.Parse(text.slice(k,i-2),{}).mml().With(def)));
              match = ''; k = i;
            } else if (c === '$' && match === '')  {
              i--; text = text.substr(0,i-1) + text.substr(i); // remove \ from \$
            }
          }
        }
      }
      if (match !== '')
        {TEX.Error(["MathNotTerminated","Math not terminated in text box"])}
      if (k < text.length) {mml.push(this.InternalText(text.slice(k),def))}
      return mml;
    },
    InternalText: function (text,def) {
      text = text.replace(/^\s+/,NBSP).replace(/\s+$/,NBSP);
      return MML.mtext(MML.chars(text)).With(def);
    },

    /*
     *  Replace macro paramters with their values
     */
    SubstituteArgs: function (args,string) {
      var text = ''; var newstring = ''; var c; var i = 0;
      while (i < string.length) {
        c = string.charAt(i++);
        if (c === "\\") {text += c + string.charAt(i++)}
        else if (c === '#') {
          c = string.charAt(i++);
          if (c === '#') {text += c} else {
            if (!c.match(/[1-9]/) || c > args.length) {
              TEX.Error(["IllegalMacroParam",
                         "Illegal macro parameter reference"]);
            }
            newstring = this.AddArgs(this.AddArgs(newstring,text),args[c-1]);
            text = '';
          }
        } else {text += c}
      }
      return this.AddArgs(newstring,text);
    },
    
    /*
     *  Make sure that macros are followed by a space if their names
     *  could accidentally be continued into the following text.
     */
    AddArgs: function (s1,s2) {
      if (s2.match(/^[a-z]/i) && s1.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {s1 += ' '}
      if (s1.length + s2.length > TEX.config.MAXBUFFER) {
        TEX.Error(["MaxBufferSize",
                   "MathJax internal buffer size exceeded; is there a recursive macro call?"]);
      }
      return s1+s2;
    }
    
  });
  
  /************************************************************************/

  TEX.Augment({
    Stack: STACK, Parse: PARSE, Definitions: TEXDEF, Startup: STARTUP,
    
    config: {
      MAXMACROS: 10000,    // maximum number of macro substitutions per equation
      MAXBUFFER: 5*1024    // maximum size of TeX string to process
    },
    
    sourceMenuTitle: /*_(MathMenu)*/ ["TeXCommands","TeX Commands"],

    prefilterHooks: MathJax.Callback.Hooks(true),    // hooks to run before processing TeX
    postfilterHooks: MathJax.Callback.Hooks(true),   // hooks to run after processing TeX
    
    //
    //  Check if AMSmath extension must be loaded and push
    //    it on the extensions array, if needed
    //
    Config: function () {
      this.SUPER(arguments).Config.apply(this,arguments);
      if (this.config.equationNumbers.autoNumber !== "none") {
        if (!this.config.extensions) {this.config.extensions = []}
        this.config.extensions.push("AMSmath.js");
      }
    },

    //
    //  Convert TeX to ElementJax
    //
    Translate: function (script) {
      var mml, isError = false, math = MathJax.HTML.getScript(script);
      var display = (script.type.replace(/\n/g," ").match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/) != null);
      var data = {math:math, display:display, script:script};
      this.prefilterHooks.Execute(data); math = data.math;
      try {
        mml = TEX.Parse(math).mml();
//        mml = MML.semantics(mml,MML.annotation(math).With({encoding:"application/x-tex"}));
      } catch(err) {
        if (!err.texError) {throw err}
        mml = this.formatError(err,math,display,script);
        isError = true;
      }
      if (mml.inferred) {mml = MML.apply(MathJax.ElementJax,mml.data)} else {mml = MML(mml)}
      if (display) {mml.root.display = "block";}

      if (isError) {mml.texError = true}
      data.math = mml; this.postfilterHooks.Execute(data);
      return data.math;
    },
    prefilterMath: function (math,displaystyle,script) {
      return math;
    },
    postfilterMath: function (math,displaystyle,script) {
      this.combineRelations(math.root);
      return math;
    },
    formatError: function (err,math,display,script) {
      var message = err.message.replace(/\n.*/,"");
      HUB.signal.Post(["TeX Jax - parse error",message,math,display,script]);
      return MML.merror(message);
    },

    //
    //  Produce an error and stop processing this equation
    //
    Error: function (message) {
      //
      //  Translate message if it is ["id","message",args]
      //
      if (message instanceof Array) {message = _.apply(_,message)}
      throw HUB.Insert(Error(message),{texError: true});
    },
    
    //
    //  Add a user-defined macro to the macro list
    //
    Macro: function (name,def,argn) {
      TEXDEF.macros[name] = ['Macro'].concat([].slice.call(arguments,1));
      TEXDEF.macros[name].isUser = true;
    },
    
    /*
     *  Create an mrow that has stretchy delimiters at either end, as needed
     */
    fenced: function (open,mml,close) {
      var mrow = MML.mrow();
      mrow.open = open; mrow.close = close;
      if (open) {mrow.Append(MML.mo(open).With({fence:true, stretchy:true, texClass:MML.TEXCLASS.OPEN}))}
      if (mml.type === "mrow") {mrow.Append.apply(mrow,mml.data)} else {mrow.Append(mml)}
      if (close) {mrow.Append(MML.mo(close).With({fence:true, stretchy:true, texClass:MML.TEXCLASS.CLOSE}))}
      return mrow;
    },
    
    //
    //  Combine adjacent <mo> elements that are relations
    //    (since MathML treats the spacing very differently)
    //
    combineRelations: function (mml) {
      var i, m, m1, m2;
      for (i = 0, m = mml.data.length; i < m; i++) {
        if (mml.data[i]) {
          if (mml.isa(MML.mrow)) {
            while (i+1 < m && (m1 = mml.data[i]) && (m2 = mml.data[i+1]) &&
                   m1.isa(MML.mo) && m2.isa(MML.mo) &&
                   m1.Get("texClass") === MML.TEXCLASS.REL &&
                   m2.Get("texClass") === MML.TEXCLASS.REL) {
              if (m1.variantForm == m2.variantForm &&
                  m1.Get("mathvariant") == m2.Get("mathvariant") && m1.style == m2.style &&
                  m1["class"] == m2["class"] && !m1.id && !m2.id) {
                m1.Append.apply(m1,m2.data);
                mml.data.splice(i+1,1); m--;
              } else {
                m1.rspace = m2.lspace = "0pt"; i++;
              }
            }
          }
          if (!mml.data[i].isToken) {this.combineRelations(mml.data[i])}
        }
      }
    }
  });

  //
  //  Add the default filters
  //
  TEX.prefilterHooks.Add(function (data) {
    data.math = TEX.prefilterMath(data.math,data.display,data.script);
  });
  TEX.postfilterHooks.Add(function (data) {
    data.math = TEX.postfilterMath(data.math,data.display,data.script);
  });

  TEX.loadComplete("jax.js");
  
})(MathJax.InputJax.TeX,MathJax.Hub,MathJax.Ajax);

MathJax.Extension["TeX/AMSmath"]={version:"2.2",number:0,startNumber:0,labels:{},eqlabels:{},refs:[]};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var b=MathJax.ElementJax.mml,g=MathJax.InputJax.TeX,f=MathJax.Extension["TeX/AMSmath"];var d=g.Definitions,e=g.Stack.Item,a=g.config.equationNumbers;var c=function(j){var l=[];for(var k=0,h=j.length;k<h;k++){l[k]=g.Parse.prototype.Em(j[k])}return l.join(" ")};d.Add({mathchar0mo:{iiiint:["2A0C",{texClass:b.TEXCLASS.OP}]},macros:{mathring:["Accent","2DA"],nobreakspace:"Tilde",negmedspace:["Spacer",b.LENGTH.NEGATIVEMEDIUMMATHSPACE],negthickspace:["Spacer",b.LENGTH.NEGATIVETHICKMATHSPACE],idotsint:["MultiIntegral","\\int\\cdots\\int"],dddot:["Accent","20DB"],ddddot:["Accent","20DC"],sideset:["Macro","\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}",3],boxed:["Macro","\\fbox{$\\displaystyle{#1}$}",1],tag:"HandleTag",notag:"HandleNoTag",label:"HandleLabel",ref:"HandleRef",eqref:["HandleRef",true],substack:["Macro","\\begin{subarray}{c}#1\\end{subarray}",1],injlim:["NamedOp","inj&thinsp;lim"],projlim:["NamedOp","proj&thinsp;lim"],varliminf:["Macro","\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],varlimsup:["Macro","\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],varinjlim:["Macro","\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],varprojlim:["Macro","\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],DeclareMathOperator:"HandleDeclareOp",operatorname:"HandleOperatorName",genfrac:"Genfrac",frac:["Genfrac","","","",""],tfrac:["Genfrac","","","",1],dfrac:["Genfrac","","","",0],binom:["Genfrac","(",")","0em",""],tbinom:["Genfrac","(",")","0em",1],dbinom:["Genfrac","(",")","0em",0],cfrac:"CFrac",shoveleft:["HandleShove",b.ALIGN.LEFT],shoveright:["HandleShove",b.ALIGN.RIGHT],xrightarrow:["xArrow",8594,5,6],xleftarrow:["xArrow",8592,7,3]},environment:{align:["AMSarray",null,true,true,"rlrlrlrlrlrl",c([5/18,2,5/18,2,5/18,2,5/18,2,5/18,2,5/18])],"align*":["AMSarray",null,false,true,"rlrlrlrlrlrl",c([5/18,2,5/18,2,5/18,2,5/18,2,5/18,2,5/18])],multline:["Multline",null,true],"multline*":["Multline",null,false],split:["AMSarray",null,false,false,"rl",c([5/18])],gather:["AMSarray",null,true,true,"c"],"gather*":["AMSarray",null,false,true,"c"],alignat:["AlignAt",null,true,true],"alignat*":["AlignAt",null,false,true],alignedat:["AlignAt",null,false,false],aligned:["AlignedArray",null,null,null,"rlrlrlrlrlrl",c([5/18,2,5/18,2,5/18,2,5/18,2,5/18,2,5/18]),".5em","D"],gathered:["AlignedArray",null,null,null,"c",null,".5em","D"],subarray:["Array",null,null,null,null,c([0,0,0,0]),"0.1em","S",1],smallmatrix:["Array",null,null,null,"c",c([1/3]),".2em","S",1],equation:["EquationBegin","Equation",true],"equation*":["EquationBegin","EquationStar",false],eqnarray:["AMSarray",null,true,true,"rcl",b.LENGTH.THICKMATHSPACE,".5em"],"eqnarray*":["AMSarray",null,false,true,"rcl",b.LENGTH.THICKMATHSPACE,".5em"]},delimiter:{"\\lvert":["2223",{texClass:b.TEXCLASS.OPEN}],"\\rvert":["2223",{texClass:b.TEXCLASS.CLOSE}],"\\lVert":["2225",{texClass:b.TEXCLASS.OPEN}],"\\rVert":["2225",{texClass:b.TEXCLASS.CLOSE}]}},null,true);g.Parse.Augment({HandleTag:function(j){var l=this.GetStar();var i=this.trimSpaces(this.GetArgument(j)),h=i;if(!l){i=a.formatTag(i)}var k=this.stack.global;k.tagID=h;if(k.notags){g.Error(["CommandNotAllowedInEnv","%1 not allowed in %2 environment",j,k.notags])}if(k.tag){g.Error(["MultipleCommand","Multiple %1",j])}k.tag=b.mtd.apply(b,this.InternalMath(i)).With({id:a.formatID(h)})},HandleNoTag:function(h){if(this.stack.global.tag){delete this.stack.global.tag}this.stack.global.notag=true},HandleLabel:function(i){var j=this.stack.global,h=this.GetArgument(i);if(h===""){return}if(!f.refUpdate){if(j.label){g.Error(["MultipleCommand","Multiple %1",i])}j.label=h;if(f.labels[h]||f.eqlabels[h]){g.Error(["MultipleLabel","Label '%1' multiply defined",h])}f.eqlabels[h]="???"}},HandleRef:function(j,l){var i=this.GetArgument(j);var k=f.labels[i]||f.eqlabels[i];if(!k){k="??";f.badref=!f.refUpdate}var h=k;if(l){h=a.formatTag(h)}if(a.useLabelIds){k=i}this.Push(b.mrow.apply(b,this.InternalMath(h)).With({href:a.formatURL(a.formatID(k)),"class":"MathJax_ref"}))},HandleDeclareOp:function(i){var h=(this.GetStar()?"\\limits":"");var j=this.trimSpaces(this.GetArgument(i));if(j.charAt(0)=="\\"){j=j.substr(1)}var k=this.GetArgument(i);k=k.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}");g.Definitions.macros[j]=["Macro","\\mathop{\\rm "+k+"}"+h]},HandleOperatorName:function(i){var h=(this.GetStar()?"\\limits":"\\nolimits");var j=this.trimSpaces(this.GetArgument(i));j=j.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}");this.string="\\mathop{\\rm "+j+"}"+h+" "+this.string.slice(this.i);this.i=0},HandleShove:function(i,h){var j=this.stack.Top();if(j.type!=="multline"||j.data.length){g.Error(["CommandAtTheBeginingOfLine","%1 must come at the beginning of the line",i])}j.data.shove=h},CFrac:function(k){var h=this.trimSpaces(this.GetBrackets(k,"")),j=this.GetArgument(k),l=this.GetArgument(k);var i=b.mfrac(g.Parse("\\strut\\textstyle{"+j+"}",this.stack.env).mml(),g.Parse("\\strut\\textstyle{"+l+"}",this.stack.env).mml());h=({l:b.ALIGN.LEFT,r:b.ALIGN.RIGHT,"":""})[h];if(h==null){g.Error(["IllegalAlign","Illegal alignment specified in %1",k])}if(h){i.numalign=i.denomalign=h}this.Push(i)},Genfrac:function(i,k,p,m,h){if(k==null){k=this.GetDelimiterArg(i)}else{k=this.convertDelimiter(k)}if(p==null){p=this.GetDelimiterArg(i)}else{p=this.convertDelimiter(p)}if(m==null){m=this.GetArgument(i)}if(h==null){h=this.trimSpaces(this.GetArgument(i))}var l=this.ParseArg(i);var o=this.ParseArg(i);var j=b.mfrac(l,o);if(m!==""){j.linethickness=m}if(k||p){j=g.fenced(k,j,p)}if(h!==""){var n=(["D","T","S","SS"])[h];if(n==null){g.Error(["BadMathStyleFor","Bad math style for %1",i])}j=b.mstyle(j);if(n==="D"){j.displaystyle=true;j.scriptlevel=0}else{j.displaystyle=false;j.scriptlevel=h-1}}this.Push(j)},Multline:function(i,h){this.Push(i);this.checkEqnEnv();return e.multline(h,this.stack).With({arraydef:{displaystyle:true,rowspacing:".5em",width:g.config.MultLineWidth,columnwidth:"100%",side:g.config.TagSide,minlabelspacing:g.config.TagIndent}})},AMSarray:function(j,i,h,l,k){this.Push(j);if(h){this.checkEqnEnv()}l=l.replace(/[^clr]/g,"").split("").join(" ");l=l.replace(/l/g,"left").replace(/r/g,"right").replace(/c/g,"center");return e.AMSarray(j.name,i,h,this.stack).With({arraydef:{displaystyle:true,rowspacing:".5em",columnalign:l,columnspacing:(k||"1em"),rowspacing:"3pt",side:g.config.TagSide,minlabelspacing:g.config.TagIndent}})},AlignAt:function(k,i,h){var p,j,o="",m=[];if(!h){j=this.GetBrackets("\\begin{"+k.name+"}")}p=this.GetArgument("\\begin{"+k.name+"}");if(p.match(/[^0-9]/)){g.Error(["PositiveIntegerArg","Argument to %1 must me a positive integer","\\begin{"+k.name+"}"])}while(p>0){o+="rl";m.push("0em 0em");p--}m=m.join(" ");if(h){return this.AMSarray(k,i,h,o,m)}var l=this.Array.call(this,k,null,null,o,m,".5em","D");return this.setArrayAlign(l,j)},EquationBegin:function(h,i){this.checkEqnEnv();this.stack.global.forcetag=(i&&a.autoNumber!=="none");return h},EquationStar:function(h,i){this.stack.global.tagged=true;return i},checkEqnEnv:function(){if(this.stack.global.eqnenv){g.Error(["ErroneousNestingEq","Erroneous nesting of equation structures"])}this.stack.global.eqnenv=true},MultiIntegral:function(h,l){var k=this.GetNext();if(k==="\\"){var j=this.i;k=this.GetArgument(h);this.i=j;if(k==="\\limits"){if(h==="\\idotsint"){l="\\!\\!\\mathop{\\,\\,"+l+"}"}else{l="\\!\\!\\!\\mathop{\\,\\,\\,"+l+"}"}}}this.string=l+" "+this.string.slice(this.i);this.i=0},xArrow:function(j,n,m,h){var k={width:"+"+(m+h)+"mu",lspace:m+"mu"};var o=this.GetBrackets(j),p=this.ParseArg(j);var q=b.mo(b.chars(String.fromCharCode(n))).With({stretchy:true,texClass:b.TEXCLASS.REL});var i=b.munderover(q);i.SetData(i.over,b.mpadded(p).With(k).With({voffset:".15em"}));if(o){o=g.Parse(o,this.stack.env).mml();i.SetData(i.under,b.mpadded(o).With(k).With({voffset:"-.24em"}))}this.Push(i)},GetDelimiterArg:function(h){var i=this.trimSpaces(this.GetArgument(h));if(i==""){return null}if(d.delimiter[i]==null){g.Error(["MissingOrUnrecognizedDelim","Missing or unrecognized delimiter for %1",h])}return this.convertDelimiter(i)},GetStar:function(){var h=(this.GetNext()==="*");if(h){this.i++}return h}});e.Augment({autoTag:function(){var i=this.global;if(!i.notag){f.number++;i.tagID=a.formatNumber(f.number.toString());var h=g.Parse("\\text{"+a.formatTag(i.tagID)+"}",{}).mml();i.tag=b.mtd(h.With({id:a.formatID(i.tagID)}))}},getTag:function(){var i=this.global,h=i.tag;i.tagged=true;if(i.label){f.eqlabels[i.label]=i.tagID;if(a.useLabelIds){h.id=a.formatID(i.label)}}delete i.tag;delete i.tagID;delete i.label;return h}});e.multline=e.array.Subclass({type:"multline",Init:function(i,h){this.SUPER(arguments).Init.apply(this);this.numbered=(i&&a.autoNumber!=="none");this.save={notag:h.global.notag};h.global.tagged=!i&&!h.global.forcetag},EndEntry:function(){var h=b.mtd.apply(b,this.data);if(this.data.shove){h.columnalign=this.data.shove}this.row.push(h);this.data=[]},EndRow:function(){if(this.row.length!=1){g.Error(["MultlineRowsOneCol","The rows within the %1 environment must have exactly one column","multline"])}this.table.push(this.row);this.row=[]},EndTable:function(){this.SUPER(arguments).EndTable.call(this);if(this.table.length){var j=this.table.length-1,l,k=-1;if(!this.table[0][0].columnalign){this.table[0][0].columnalign=b.ALIGN.LEFT}if(!this.table[j][0].columnalign){this.table[j][0].columnalign=b.ALIGN.RIGHT}if(!this.global.tag&&this.numbered){this.autoTag()}if(this.global.tag&&!this.global.notags){k=(this.arraydef.side==="left"?0:this.table.length-1);this.table[k]=[this.getTag()].concat(this.table[k])}for(l=0,j=this.table.length;l<j;l++){var h=(l===k?b.mlabeledtr:b.mtr);this.table[l]=h.apply(b,this.table[l])}}this.global.notag=this.save.notag}});e.AMSarray=e.array.Subclass({type:"AMSarray",Init:function(k,j,i,h){this.SUPER(arguments).Init.apply(this);this.numbered=(j&&a.autoNumber!=="none");this.save={notags:h.global.notags,notag:h.global.notag};h.global.notags=(i?null:k);h.global.tagged=!j&&!h.global.forcetag},EndRow:function(){var h=b.mtr;if(!this.global.tag&&this.numbered){this.autoTag()}if(this.global.tag&&!this.global.notags){this.row=[this.getTag()].concat(this.row);h=b.mlabeledtr}if(this.numbered){delete this.global.notag}this.table.push(h.apply(b,this.row));this.row=[]},EndTable:function(){this.SUPER(arguments).EndTable.call(this);this.global.notags=this.save.notags;this.global.notag=this.save.notag}});e.start.Augment({oldCheckItem:e.start.prototype.checkItem,checkItem:function(j){if(j.type==="stop"){var h=this.mmlData(),i=this.global;if(f.display&&!i.tag&&!i.tagged&&!i.isInner&&(a.autoNumber==="all"||i.forcetag)){this.autoTag()}if(i.tag){var l=[this.getTag(),b.mtd(h)];var k={side:g.config.TagSide,minlabelspacing:g.config.TagIndent,columnalign:h.displayAlign};if(h.displayAlign===b.INDENTALIGN.LEFT){k.width="100%";if(h.displayIndent&&!String(h.displayIndent).match(/^0+(\.0*)?($|[a-z%])/)){k.columnwidth=h.displayIndent+" fit";k.columnspacing="0";l=[l[0],b.mtd(),l[1]]}}else{if(h.displayAlign===b.INDENTALIGN.RIGHT){k.width="100%";if(h.displayIndent&&!String(h.displayIndent).match(/^0+(\.0*)?($|[a-z%])/)){k.columnwidth="fit "+h.displayIndent;k.columnspacing="0";l[2]=b.mtd()}}}h=b.mtable(b.mlabeledtr.apply(b,l)).With(k)}return e.mml(h)}return this.oldCheckItem.call(this,j)}});g.prefilterHooks.Add(function(h){f.display=h.display;f.number=f.startNumber;f.eqlabels={};f.badref=false;if(f.refUpdate){f.number=h.script.MathJax.startNumber}});g.postfilterHooks.Add(function(h){h.script.MathJax.startNumber=f.startNumber;f.startNumber=f.number;MathJax.Hub.Insert(f.labels,f.eqlabels);if(f.badref&&!h.math.texError){f.refs.push(h.script)}});MathJax.Hub.Register.MessageHook("Begin Math Input",function(){f.refs=[];f.refUpdate=false});MathJax.Hub.Register.MessageHook("End Math Input",function(k){if(f.refs.length){f.refUpdate=true;for(var j=0,h=f.refs.length;j<h;j++){f.refs[j].MathJax.state=MathJax.ElementJax.STATE.UPDATE}return MathJax.Hub.processInput({scripts:f.refs,start:new Date().getTime(),i:0,j:0,jax:{},jaxIDs:[]})}return null});g.resetEquationNumbers=function(i,h){f.startNumber=(i||0);if(!h){f.labels={}}};MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");

MathJax.Extension["TeX/AMSsymbols"]={version:"2.2"};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.ElementJax.mml,b=MathJax.InputJax.TeX.Definitions;b.Add({mathchar0mi:{digamma:"03DD",varkappa:"03F0",varGamma:["0393",{mathvariant:a.VARIANT.ITALIC}],varDelta:["0394",{mathvariant:a.VARIANT.ITALIC}],varTheta:["0398",{mathvariant:a.VARIANT.ITALIC}],varLambda:["039B",{mathvariant:a.VARIANT.ITALIC}],varXi:["039E",{mathvariant:a.VARIANT.ITALIC}],varPi:["03A0",{mathvariant:a.VARIANT.ITALIC}],varSigma:["03A3",{mathvariant:a.VARIANT.ITALIC}],varUpsilon:["03A5",{mathvariant:a.VARIANT.ITALIC}],varPhi:["03A6",{mathvariant:a.VARIANT.ITALIC}],varPsi:["03A8",{mathvariant:a.VARIANT.ITALIC}],varOmega:["03A9",{mathvariant:a.VARIANT.ITALIC}],beth:"2136",gimel:"2137",daleth:"2138",backprime:["2035",{variantForm:true}],hslash:"210F",varnothing:["2205",{variantForm:true}],blacktriangle:"25B4",triangledown:["25BD",{variantForm:true}],blacktriangledown:"25BE",square:"25FB",Box:"25FB",blacksquare:"25FC",lozenge:"25CA",Diamond:"25CA",blacklozenge:"29EB",circledS:["24C8",{mathvariant:a.VARIANT.NORMAL}],bigstar:"2605",sphericalangle:"2222",measuredangle:"2221",nexists:"2204",complement:"2201",mho:"2127",eth:["00F0",{mathvariant:a.VARIANT.NORMAL}],Finv:"2132",diagup:"2571",Game:"2141",diagdown:"2572",Bbbk:["006B",{mathvariant:a.VARIANT.DOUBLESTRUCK}],yen:"00A5",circledR:"00AE",checkmark:"2713",maltese:"2720"},mathchar0mo:{dotplus:"2214",ltimes:"22C9",smallsetminus:"2216",rtimes:"22CA",Cap:"22D2",doublecap:"22D2",leftthreetimes:"22CB",Cup:"22D3",doublecup:"22D3",rightthreetimes:"22CC",barwedge:"22BC",curlywedge:"22CF",veebar:"22BB",curlyvee:"22CE",doublebarwedge:"2A5E",boxminus:"229F",circleddash:"229D",boxtimes:"22A0",circledast:"229B",boxdot:"22A1",circledcirc:"229A",boxplus:"229E",centerdot:"22C5",divideontimes:"22C7",intercal:"22BA",leqq:"2266",geqq:"2267",leqslant:"2A7D",geqslant:"2A7E",eqslantless:"2A95",eqslantgtr:"2A96",lesssim:"2272",gtrsim:"2273",lessapprox:"2A85",gtrapprox:"2A86",approxeq:"224A",lessdot:"22D6",gtrdot:"22D7",lll:"22D8",llless:"22D8",ggg:"22D9",gggtr:"22D9",lessgtr:"2276",gtrless:"2277",lesseqgtr:"22DA",gtreqless:"22DB",lesseqqgtr:"2A8B",gtreqqless:"2A8C",doteqdot:"2251",Doteq:"2251",eqcirc:"2256",risingdotseq:"2253",circeq:"2257",fallingdotseq:"2252",triangleq:"225C",backsim:"223D",thicksim:["223C",{variantForm:true}],backsimeq:"22CD",thickapprox:["2248",{variantForm:true}],subseteqq:"2AC5",supseteqq:"2AC6",Subset:"22D0",Supset:"22D1",sqsubset:"228F",sqsupset:"2290",preccurlyeq:"227C",succcurlyeq:"227D",curlyeqprec:"22DE",curlyeqsucc:"22DF",precsim:"227E",succsim:"227F",precapprox:"2AB7",succapprox:"2AB8",vartriangleleft:"22B2",lhd:"22B2",vartriangleright:"22B3",rhd:"22B3",trianglelefteq:"22B4",unlhd:"22B4",trianglerighteq:"22B5",unrhd:"22B5",vDash:"22A8",Vdash:"22A9",Vvdash:"22AA",smallsmile:["2323",{variantForm:true}],shortmid:["2223",{variantForm:true}],smallfrown:["2322",{variantForm:true}],shortparallel:["2225",{variantForm:true}],bumpeq:"224F",between:"226C",Bumpeq:"224E",pitchfork:"22D4",varpropto:"221D",backepsilon:"220D",blacktriangleleft:"25C2",blacktriangleright:"25B8",therefore:"2234",because:"2235",eqsim:"2242",vartriangle:["25B3",{variantForm:true}],Join:"22C8",nless:"226E",ngtr:"226F",nleq:"2270",ngeq:"2271",nleqslant:["2A87",{variantForm:true}],ngeqslant:["2A88",{variantForm:true}],nleqq:["2270",{variantForm:true}],ngeqq:["2271",{variantForm:true}],lneq:"2A87",gneq:"2A88",lneqq:"2268",gneqq:"2269",lvertneqq:["2268",{variantForm:true}],gvertneqq:["2269",{variantForm:true}],lnsim:"22E6",gnsim:"22E7",lnapprox:"2A89",gnapprox:"2A8A",nprec:"2280",nsucc:"2281",npreceq:["22E0",{variantForm:true}],nsucceq:["22E1",{variantForm:true}],precneqq:"2AB5",succneqq:"2AB6",precnsim:"22E8",succnsim:"22E9",precnapprox:"2AB9",succnapprox:"2ABA",nsim:"2241",ncong:"2246",nshortmid:["2224",{variantForm:true}],nshortparallel:["2226",{variantForm:true}],nmid:"2224",nparallel:"2226",nvdash:"22AC",nvDash:"22AD",nVdash:"22AE",nVDash:"22AF",ntriangleleft:"22EA",ntriangleright:"22EB",ntrianglelefteq:"22EC",ntrianglerighteq:"22ED",nsubseteq:"2288",nsupseteq:"2289",nsubseteqq:["2288",{variantForm:true}],nsupseteqq:["2289",{variantForm:true}],subsetneq:"228A",supsetneq:"228B",varsubsetneq:["228A",{variantForm:true}],varsupsetneq:["228B",{variantForm:true}],subsetneqq:"2ACB",supsetneqq:"2ACC",varsubsetneqq:["2ACB",{variantForm:true}],varsupsetneqq:["2ACC",{variantForm:true}],leftleftarrows:"21C7",rightrightarrows:"21C9",leftrightarrows:"21C6",rightleftarrows:"21C4",Lleftarrow:"21DA",Rrightarrow:"21DB",twoheadleftarrow:"219E",twoheadrightarrow:"21A0",leftarrowtail:"21A2",rightarrowtail:"21A3",looparrowleft:"21AB",looparrowright:"21AC",leftrightharpoons:"21CB",rightleftharpoons:["21CC",{variantForm:true}],curvearrowleft:"21B6",curvearrowright:"21B7",circlearrowleft:"21BA",circlearrowright:"21BB",Lsh:"21B0",Rsh:"21B1",upuparrows:"21C8",downdownarrows:"21CA",upharpoonleft:"21BF",upharpoonright:"21BE",downharpoonleft:"21C3",restriction:"21BE",multimap:"22B8",downharpoonright:"21C2",leftrightsquigarrow:"21AD",rightsquigarrow:"21DD",leadsto:"21DD",dashrightarrow:"21E2",dashleftarrow:"21E0",nleftarrow:"219A",nrightarrow:"219B",nLeftarrow:"21CD",nRightarrow:"21CF",nleftrightarrow:"21AE",nLeftrightarrow:"21CE"},delimiter:{"\\ulcorner":"231C","\\urcorner":"231D","\\llcorner":"231E","\\lrcorner":"231F"},macros:{implies:["Macro","\\;\\Longrightarrow\\;"],impliedby:["Macro","\\;\\Longleftarrow\\;"]}},null,true);var c=a.mo.OPTYPES.REL;MathJax.Hub.Insert(a.mo.prototype,{OPTABLE:{infix:{"\u2322":c,"\u2323":c,"\u25B3":c,"\uE006":c,"\uE007":c,"\uE00C":c,"\uE00D":c,"\uE00E":c,"\uE00F":c,"\uE010":c,"\uE011":c,"\uE016":c,"\uE017":c,"\uE018":c,"\uE019":c,"\uE01A":c,"\uE01B":c,"\uE04B":c,"\uE04F":c}}});MathJax.Hub.Startup.signal.Post("TeX AMSsymbols Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js");

(function(c,d){var a;var b=function(e){return MathJax.Localization._.apply(MathJax.Localization,[["MathML",e]].concat([].slice.call(arguments,1)))};c.Parse=MathJax.Object.Subclass({Init:function(e){this.Parse(e)},Parse:function(g){var h;if(typeof g!=="string"){h=g.parentNode}else{h=c.ParseXML(this.preProcessMath.call(this,g));if(h==null){c.Error(["ErrorParsingMathML","Error parsing MathML"])}}var f=h.getElementsByTagName("parsererror")[0];if(f){c.Error(["ParsingError","Error parsing MathML: %1",f.textContent.replace(/This page.*?errors:|XML Parsing Error: |Below is a rendering of the page.*/g,"")])}if(h.childNodes.length!==1){c.Error(["MathMLSingleElement","MathML must be formed by a single element"])}if(h.firstChild.nodeName.toLowerCase()==="html"){var e=h.getElementsByTagName("h1")[0];if(e&&e.textContent==="XML parsing error"&&e.nextSibling){c.Error(["ParsingError","Error parsing MathML: %1",String(e.nextSibling.nodeValue).replace(/fatal parsing error: /,"")])}}if(h.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/,"")!=="math"){c.Error(["MathMLRootElement","MathML must be formed by a <math> element, not %1","<"+h.firstChild.nodeName+">"])}this.mml=this.MakeMML(h.firstChild)},MakeMML:function(h){var i=String(h.getAttribute("class")||"");var f,g=h.nodeName.toLowerCase().replace(/^[a-z]+:/,"");var e=(i.match(/(^| )MJX-TeXAtom-([^ ]*)/));if(e){f=this.TeXAtom(e[2])}else{if(!(a[g]&&a[g].isa&&a[g].isa(a.mbase))){MathJax.Hub.signal.Post(["MathML Jax - unknown node type",g]);return a.merror(b("UnknownNodeType","Unknown node type: %1",g))}else{f=a[g]()}}this.AddAttributes(f,h);this.CheckClass(f,f["class"]);this.AddChildren(f,h);if(c.config.useMathMLspacing){f.useMMLspacing=8}return f},TeXAtom:function(f){var e=a.TeXAtom().With({texClass:a.TEXCLASS[f]});if(e.texClass===a.TEXCLASS.OP){e.movesupsub=e.movablelimits=true}return e},CheckClass:function(f,h){h=(h||"").split(/ /);var j=[];for(var g=0,e=h.length;g<e;g++){if(h[g].substr(0,4)==="MJX-"){if(h[g]==="MJX-arrow"){f.arrow=true}else{if(h[g]==="MJX-variant"){f.variantForm=true;if(!MathJax.Extension["TeX/AMSsymbols"]){MathJax.Hub.RestartAfter(MathJax.Ajax.Require("[MathJax]/extensions/TeX/AMSsymbols.js"))}}else{if(h[g].substr(0,11)!=="MJX-TeXAtom"){f.mathvariant=h[g].substr(3);if(f.mathvariant==="-tex-caligraphic-bold"||f.mathvariant==="-tex-oldstyle-bold"){if(!MathJax.Extension["TeX/boldsymbol"]){MathJax.Hub.RestartAfter(MathJax.Ajax.Require("[MathJax]/extensions/TeX/boldsymbol.js"))}}}}}}else{j.push(h[g])}}if(j.length){f["class"]=j.join(" ")}else{delete f["class"]}},AddAttributes:function(g,j){g.attr={};g.attrNames=[];for(var h=0,e=j.attributes.length;h<e;h++){var f=j.attributes[h].name;if(f=="xlink:href"){f="href"}if(f.match(/:/)){continue}if(f.match(/^_moz-math-((column|row)(align|line)|font-style)$/)){continue}var k=j.attributes[h].value;k=this.filterAttribute(f,k);if(k!=null){if(k.toLowerCase()==="true"){k=true}else{if(k.toLowerCase()==="false"){k=false}}if(g.defaults[f]!=null||a.copyAttributes[f]){g[f]=k}else{g.attr[f]=k}g.attrNames.push(f)}}},filterAttribute:function(e,f){return f},AddChildren:function(e,g){for(var k=0,j=g.childNodes.length;k<j;k++){var f=g.childNodes[k];if(f.nodeName==="#comment"){continue}if(f.nodeName==="#text"){if(e.isToken&&!e.mmlSelfClosing){var o=f.nodeValue.replace(/&([a-z][a-z0-9]*);/ig,this.replaceEntity);e.Append(a.chars(this.trimSpace(o)))}else{if(f.nodeValue.match(/\S/)){c.Error(["UnexpectedTextNode","Unexpected text node: %1","'"+f.nodeValue+"'"])}}}else{if(e.type==="annotation-xml"){e.Append(a.xml(f))}else{var h=this.MakeMML(f);e.Append(h);if(h.mmlSelfClosing&&h.data.length){e.Append.apply(e,h.data);h.data=[]}}}}if(e.type==="mrow"&&e.data.length>=2){var l=e.data[0],n=e.data[e.data.length-1];if(l.type==="mo"&&l.Get("fence")&&n.type==="mo"&&n.Get("fence")){if(l.data[0]){e.open=l.data.join("")}if(n.data[0]){e.close=n.data.join("")}}}},preProcessMath:function(f){if(f.match(/^<[a-z]+:/i)&&!f.match(/^<[^<>]* xmlns:/)){f=f.replace(/^<([a-z]+)(:math)/i,'<$1$2 xmlns:$1="http://www.w3.org/1998/Math/MathML"')}var e=f.match(/^(<math( ('.*?'|".*?"|[^>])+)>)/i);if(e&&e[2].match(/ (?!xmlns=)[a-z]+=\"http:/i)){f=e[1].replace(/ (?!xmlns=)([a-z]+=(['"])http:.*?\2)/ig," xmlns:$1 $1")+f.substr(e[0].length)}if(f.match(/^<math/i)&&!f.match(/^<[^<>]* xmlns=/)){f=f.replace(/^<(math)/i,'<math xmlns="http://www.w3.org/1998/Math/MathML"')}f=f.replace(/^\s*(?:\/\/)?<!(--)?\[CDATA\[((.|\n)*)(\/\/)?\]\]\1>\s*$/,"$2");return f.replace(/&([a-z][a-z0-9]*);/ig,this.replaceEntity)},trimSpace:function(e){return e.replace(/[\t\n\r]/g," ").replace(/^ +/,"").replace(/ +$/,"").replace(/  +/g," ")},replaceEntity:function(g,f){if(f.match(/^(lt|amp|quot)$/)){return g}if(c.Parse.Entity[f]){return c.Parse.Entity[f]}var h=f.charAt(0).toLowerCase();var e=f.match(/^[a-zA-Z](fr|scr|opf)$/);if(e){h=e[1]}if(!c.Parse.loaded[h]){c.Parse.loaded[h]=true;MathJax.Hub.RestartAfter(MathJax.Ajax.Require(c.entityDir+"/"+h+".js"))}return g}},{loaded:[]});c.Augment({sourceMenuTitle:["OriginalMathML","Original MathML"],prefilterHooks:MathJax.Callback.Hooks(true),postfilterHooks:MathJax.Callback.Hooks(true),Translate:function(e){if(!this.ParseXML){this.ParseXML=this.createParser()}var f,h,i={script:e};if(e.firstChild&&e.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/,"")==="math"){i.math=e.firstChild;this.prefilterHooks.Execute(i);h=i.math}else{h=MathJax.HTML.getScript(e);if(d.isMSIE){h=h.replace(/(&nbsp;)+$/,"")}i.math=h;this.prefilterHooks.Execute(i);h=i.math}try{f=c.Parse(h).mml}catch(g){if(!g.mathmlError){throw g}f=this.formatError(g,h,e)}i.math=a(f);this.postfilterHooks.Execute(i);return i.math},prefilterMath:function(f,e){return f},prefilterMathML:function(f,e){return f},formatError:function(h,g,e){var f=h.message.replace(/\n.*/,"");MathJax.Hub.signal.Post(["MathML Jax - parse error",f,g,e]);return a.merror(f)},Error:function(e){if(e instanceof Array){e=b.apply(b,e)}throw MathJax.Hub.Insert(Error(e),{mathmlError:true})},parseDOM:function(e){return this.parser.parseFromString(e,"text/xml")},parseMS:function(e){return(this.parser.loadXML(e)?this.parser:null)},parseDIV:function(e){this.div.innerHTML=e.replace(/<([a-z]+)([^>]*)\/>/g,"<$1$2></$1>");return this.div},parseError:function(e){return null},createMSParser:function(){var j=null;var f=["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.5.0","MSXML2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument.2.0","Microsoft.XMLDOM"];for(var g=0,e=f.length;g<e&&!j;g++){try{j=new ActiveXObject(f[g])}catch(h){}}return j},createParser:function(){if(window.DOMParser){this.parser=new DOMParser();return(this.parseDOM)}else{if(window.ActiveXObject){this.parser=this.createMSParser();if(!this.parser){MathJax.Localization.Try(this.parserCreationError);return(this.parseError)}this.parser.async=false;return(this.parseMS)}}this.div=MathJax.Hub.Insert(document.createElement("div"),{style:{visibility:"hidden",overflow:"hidden",height:"1px",position:"absolute",top:0}});if(!document.body.firstChild){document.body.appendChild(this.div)}else{document.body.insertBefore(this.div,document.body.firstChild)}return(this.parseDIV)},parserCreationError:function(){alert(b("CantCreateXMLParser","MathJax can't create an XML parser for MathML.  Check that\nthe 'Script ActiveX controls marked safe for scripting' security\nsetting is enabled (use the Internet Options item in the Tools\nmenu, and select the Security panel, then press the Custom Level\nbutton to check this).\n\nMathML equations will not be able to be processed by MathJax."))},Startup:function(){a=MathJax.ElementJax.mml;a.mspace.Augment({mmlSelfClosing:true});a.none.Augment({mmlSelfClosing:true});a.mprescripts.Augment({mmlSelfClosing:true})}});c.prefilterHooks.Add(function(e){e.math=(typeof(e.math)==="string"?c.prefilterMath(e.math,e.script):c.prefilterMathML(e.math,e.script))});c.Parse.Entity={ApplyFunction:"\u2061",Backslash:"\u2216",Because:"\u2235",Breve:"\u02D8",Cap:"\u22D2",CenterDot:"\u00B7",CircleDot:"\u2299",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",Congruent:"\u2261",ContourIntegral:"\u222E",Coproduct:"\u2210",Cross:"\u2A2F",Cup:"\u22D3",CupCap:"\u224D",Dagger:"\u2021",Del:"\u2207",Delta:"\u0394",Diamond:"\u22C4",DifferentialD:"\u2146",DotEqual:"\u2250",DoubleDot:"\u00A8",DoubleRightTee:"\u22A8",DoubleVerticalBar:"\u2225",DownArrow:"\u2193",DownLeftVector:"\u21BD",DownRightVector:"\u21C1",DownTee:"\u22A4",Downarrow:"\u21D3",Element:"\u2208",EqualTilde:"\u2242",Equilibrium:"\u21CC",Exists:"\u2203",ExponentialE:"\u2147",FilledVerySmallSquare:"\u25AA",ForAll:"\u2200",Gamma:"\u0393",Gg:"\u22D9",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Hacek:"\u02C7",Hat:"\u005E",HumpDownHump:"\u224E",HumpEqual:"\u224F",Im:"\u2111",ImaginaryI:"\u2148",Integral:"\u222B",Intersection:"\u22C2",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",Lambda:"\u039B",Larr:"\u219E",LeftAngleBracket:"\u27E8",LeftArrow:"\u2190",LeftArrowRightArrow:"\u21C6",LeftCeiling:"\u2308",LeftDownVector:"\u21C3",LeftFloor:"\u230A",LeftRightArrow:"\u2194",LeftTee:"\u22A3",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpVector:"\u21BF",LeftVector:"\u21BC",Leftarrow:"\u21D0",Leftrightarrow:"\u21D4",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",Ll:"\u22D8",Lleftarrow:"\u21DA",LongLeftArrow:"\u27F5",LongLeftRightArrow:"\u27F7",LongRightArrow:"\u27F6",Longleftarrow:"\u27F8",Longleftrightarrow:"\u27FA",Longrightarrow:"\u27F9",Lsh:"\u21B0",MinusPlus:"\u2213",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotPrecedes:"\u2280",NotPrecedesSlantEqual:"\u22E0",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsSlantEqual:"\u22E1",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotVerticalBar:"\u2224",Omega:"\u03A9",OverBar:"\u203E",OverBrace:"\u23DE",PartialD:"\u2202",Phi:"\u03A6",Pi:"\u03A0",PlusMinus:"\u00B1",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",Product:"\u220F",Proportional:"\u221D",Psi:"\u03A8",Rarr:"\u21A0",Re:"\u211C",ReverseEquilibrium:"\u21CB",RightAngleBracket:"\u27E9",RightArrow:"\u2192",RightArrowLeftArrow:"\u21C4",RightCeiling:"\u2309",RightDownVector:"\u21C2",RightFloor:"\u230B",RightTee:"\u22A2",RightTeeArrow:"\u21A6",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpVector:"\u21BE",RightVector:"\u21C0",Rightarrow:"\u21D2",Rrightarrow:"\u21DB",Rsh:"\u21B1",Sigma:"\u03A3",SmallCircle:"\u2218",Sqrt:"\u221A",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",Star:"\u22C6",Subset:"\u22D0",SubsetEqual:"\u2286",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",SuchThat:"\u220B",Sum:"\u2211",Superset:"\u2283",SupersetEqual:"\u2287",Supset:"\u22D1",Therefore:"\u2234",Theta:"\u0398",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",UnderBar:"\u005F",UnderBrace:"\u23DF",Union:"\u22C3",UnionPlus:"\u228E",UpArrow:"\u2191",UpDownArrow:"\u2195",UpTee:"\u22A5",Uparrow:"\u21D1",Updownarrow:"\u21D5",Upsilon:"\u03A5",Vdash:"\u22A9",Vee:"\u22C1",VerticalBar:"\u2223",VerticalTilde:"\u2240",Vvdash:"\u22AA",Wedge:"\u22C0",Xi:"\u039E",acute:"\u00B4",aleph:"\u2135",alpha:"\u03B1",amalg:"\u2A3F",and:"\u2227",ang:"\u2220",angmsd:"\u2221",angsph:"\u2222",ape:"\u224A",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",beta:"\u03B2",beth:"\u2136",between:"\u226C",bigcirc:"\u25EF",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",blacklozenge:"\u29EB",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",bowtie:"\u22C8",boxdl:"\u2510",boxdr:"\u250C",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxur:"\u2514",bsol:"\u005C",bull:"\u2022",cap:"\u2229",check:"\u2713",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledR:"\u00AE",circledS:"\u24C8",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",clubs:"\u2663",colon:"\u003A",comp:"\u2201",ctdot:"\u22EF",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cup:"\u222A",curarr:"\u21B7",curlyvee:"\u22CE",curlywedge:"\u22CF",dagger:"\u2020",daleth:"\u2138",ddarr:"\u21CA",deg:"\u00B0",delta:"\u03B4",digamma:"\u03DD",div:"\u00F7",divideontimes:"\u22C7",dot:"\u02D9",doteqdot:"\u2251",dotplus:"\u2214",dotsquare:"\u22A1",dtdot:"\u22F1",ecir:"\u2256",efDot:"\u2252",egs:"\u2A96",ell:"\u2113",els:"\u2A95",empty:"\u2205",epsi:"\u03B5",epsiv:"\u03F5",erDot:"\u2253",eta:"\u03B7",eth:"\u00F0",flat:"\u266D",fork:"\u22D4",frown:"\u2322",gEl:"\u2A8C",gamma:"\u03B3",gap:"\u2A86",gimel:"\u2137",gnE:"\u2269",gnap:"\u2A8A",gne:"\u2A88",gnsim:"\u22E7",gt:"\u003E",gtdot:"\u22D7",harrw:"\u21AD",hbar:"\u210F",hellip:"\u2026",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",imath:"\u0131",infin:"\u221E",intcal:"\u22BA",iota:"\u03B9",jmath:"\u0237",kappa:"\u03BA",kappav:"\u03F0",lEg:"\u2A8B",lambda:"\u03BB",lap:"\u2A85",larrlp:"\u21AB",larrtl:"\u21A2",lbrace:"\u007B",lbrack:"\u005B",le:"\u2264",leftleftarrows:"\u21C7",leftthreetimes:"\u22CB",lessdot:"\u22D6",lmoust:"\u23B0",lnE:"\u2268",lnap:"\u2A89",lne:"\u2A87",lnsim:"\u22E6",longmapsto:"\u27FC",looparrowright:"\u21AC",lowast:"\u2217",loz:"\u25CA",lt:"\u003C",ltimes:"\u22C9",ltri:"\u25C3",macr:"\u00AF",malt:"\u2720",mho:"\u2127",mu:"\u03BC",multimap:"\u22B8",nLeftarrow:"\u21CD",nLeftrightarrow:"\u21CE",nRightarrow:"\u21CF",nVDash:"\u22AF",nVdash:"\u22AE",natur:"\u266E",nearr:"\u2197",nharr:"\u21AE",nlarr:"\u219A",not:"\u00AC",nrarr:"\u219B",nu:"\u03BD",nvDash:"\u22AD",nvdash:"\u22AC",nwarr:"\u2196",omega:"\u03C9",omicron:"\u03BF",or:"\u2228",osol:"\u2298",period:"\u002E",phi:"\u03C6",phiv:"\u03D5",pi:"\u03C0",piv:"\u03D6",prap:"\u2AB7",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",prime:"\u2032",psi:"\u03C8",rarrtl:"\u21A3",rbrace:"\u007D",rbrack:"\u005D",rho:"\u03C1",rhov:"\u03F1",rightrightarrows:"\u21C9",rightthreetimes:"\u22CC",ring:"\u02DA",rmoust:"\u23B1",rtimes:"\u22CA",rtri:"\u25B9",scap:"\u2AB8",scnE:"\u2AB6",scnap:"\u2ABA",scnsim:"\u22E9",sdot:"\u22C5",searr:"\u2198",sect:"\u00A7",sharp:"\u266F",sigma:"\u03C3",sigmav:"\u03C2",simne:"\u2246",smile:"\u2323",spades:"\u2660",sub:"\u2282",subE:"\u2AC5",subnE:"\u2ACB",subne:"\u228A",supE:"\u2AC6",supnE:"\u2ACC",supne:"\u228B",swarr:"\u2199",tau:"\u03C4",theta:"\u03B8",thetav:"\u03D1",tilde:"\u02DC",times:"\u00D7",triangle:"\u25B5",triangleq:"\u225C",upsi:"\u03C5",upuparrows:"\u21C8",veebar:"\u22BB",vellip:"\u22EE",weierp:"\u2118",xi:"\u03BE",yen:"\u00A5",zeta:"\u03B6",zigrarr:"\u21DD"};c.loadComplete("jax.js")})(MathJax.InputJax.MathML,MathJax.Hub.Browser);

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/input/AsciiMath/jax.js
 *  
 *  An Input Jax for AsciiMath notation 
 *  (see http://www1.chapman.edu/~jipsen/mathml/asciimath.html).
 *  
 *  Originally adapted for MathJax by David Lippman.
 *  Additional work done by Davide P. Cervone.
 *  
 *  A portion of this file is taken from
 *  ASCIIMathML.js Version 1.4.7 Aug 30, 2005, (c) Peter Jipsen http://www.chapman.edu/~jipsen
 *  and is used by permission of Peter Jipsen, who has agreed to allow us to
 *  release it under the Apache2 license (see below).  That portion is indicated
 *  via comments.
 *  
 *  The remainder falls under the copyright that follows.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2013 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (ASCIIMATH) {

  var MML;  // Filled in later

  //
  //  Make a documentFragment work-alike that uses MML objects
  //  rather than DOM objects.
  //
  var DOCFRAG = MathJax.Object.Subclass({
    firstChild: null,
    lastChild: null,
    Init: function () {
      this.childNodes = [];
    },
    appendChild: function (node) {
      if (node.parent) {node.parent.removeChild(node)}
      if (this.lastChild) {this.lastChild.nextSibling = node}
      if (!this.firstChild) {this.firstChild = node}
      this.childNodes.push(node); node.parent = this;
      this.lastChild = node;
      return node;
    },
    removeChild: function (node) {
      for (var i = 0, m = this.childNodes.length; i < m; i++)
        {if (this.childNodes[i] === node) break}
      if (i === m) return;
      this.childNodes.splice(i,1);
      if (node === this.firstChild) {this.firstChild = node.nextSibling}
      if (node === this.lastChild) {
        if (!this.childNodes.length) {this.lastChild = null}
          else {this.lastChild = this.childNodes[this.childNodes.length-1]}
      }
      if (i) {this.childNodes[i-1].nextSibling = node.nextSibling}
      node.nextSibling = node.parent = null;
      return node;
    },
    replaceChild: function (node,old) {
      for (var i = 0, m = this.childNodes.length; i < m; i++)
        {if (this.childNodes[i] === old) break}
      if (i) {this.childNodes[i-1].nextSibling = node} else {this.firstChild = node}
      if (i >= m-1) {this.lastChild = node}
      this.childNodes[i] = node; node.nextSibling = old.nextSibling;
      old.nextSibling = old.parent = null;
      return old;
    },
    toString: function () {return "{"+this.childNodes.join("")+"}"}
  });
  
  var INITASCIIMATH = function () {
    MML = MathJax.ElementJax.mml;
    var MBASEINIT = MML.mbase.prototype.Init;
    
    //
    //  Make MML elements looks like DOM elements (add the
    //  methods that AsciiMath needs)
    //
    MML.mbase.Augment({
      firstChild: null,
      lastChild: null,
      nodeValue: "",
      nextSibling: null,
      Init: function () {
        var obj = MBASEINIT.apply(this,arguments) || this;
        obj.childNodes = obj.data;
        obj.nodeName = obj.type;
        return obj;
      },
      appendChild: function (node) {
        if (node.parent) {node.parent.removeChild(node)}
        var nodes = arguments;
        if (node.isa(DOCFRAG)) {
          nodes = node.childNodes;
          node.data = node.childNodes = [];
          node.firstChild = node.lastChild = null;
        }
        for (var i = 0, m = nodes.length; i < m; i++) {
          node = nodes[i];
          if (this.lastChild) {this.lastChild.nextSibling = node}
          if (!this.firstChild) {this.firstChild = node}
          this.Append(node);
          this.lastChild = node;
          this.nodeValue += node.nodeValue;
        }
        return node;
      },
      removeChild: function (node) {
        for (var i = 0, m = this.childNodes.length; i < m; i++)
          {if (this.childNodes[i] === node) break}
        if (i === m) return;
        this.childNodes.splice(i,1);
        if (node === this.firstChild) {this.firstChild = node.nextSibling}
        if (node === this.lastChild) {
          if (!this.childNodes.length) {this.lastChild = null}
            else {this.lastChild = this.childNodes[this.childNodes.length-1]}
        }
        if (i) {this.childNodes[i-1].nextSibling = node.nextSibling}
        this.nodeValue = "";
        for (i = 0, m = this.childNodes.length; i < m; i++)
          {this.nodeValue += this.childNodes[i].nodeValue}
        node.nextSibling = node.parent = null;
        return node;
      },
      replaceChild: function (node,old) {
        for (var i = 0, m = this.childNodes.length; i < m; i++)
          {if (this.childNodes[i] === old) break}
        // FIXME:  make this work with DOCFRAG's?
        if (i) {this.childNodes[i-1].nextSibling = node} else {this.firstChild = node}
        if (i >= m-1) {this.lastChild = node}
        this.SetData(i,node); node.nextSibling = old.nextSibling;
        this.nodeValue = "";
        for (i = 0, m = this.childNodes.length; i < m; i++)
          {this.nodeValue += this.childNodes[i].nodeValue}
        old.nextSibling = old.parent = null;
        return old;
      },
      setAttribute: function (name,value) {this[name] = value}
    });
  };
  
  //
  //  Set up to isolate ASCIIMathML.js
  //
  
  var window = {};  // hide the true window
  
  //
  //  Hide the true document, and add functions that
  //  use and produce MML objects instead of DOM objects
  //
  var document = {
    getElementById: true,
    createElementNS: function (ns,type) {return MML[type]()},
    createTextNode: function (text) {return MML.chars(text).With({nodeValue:text})},
    createDocumentFragment: function () {return DOCFRAG()}
  };
  
  var navigator = {appName: "MathJax"};  // hide the true navigator object
  
  var i; // avoid global variable used in code below
  
/******************************************************************
 *
 *   The following section is ASCIIMathML.js Version 1.4.7
 *   (c) Peter Jipsen, used with permission.
 *   
 *   Some sections are commented out to save space in the
 *   minified version (but that is not strictly necessary).
 *   A few items are commented out and marked with DPVC comments
 *   in order to keep the minifier from complaining about the
 *   coding practices in ASCIIMathML.js
 *   
 *   Two sections are modified to include changes from version 2.0.1 of
 *   ASCIIMathML.js and are marked with comments to that effect.  This
 *   makes this version effectively the same as version 2.0.1, but 
 *   without the overhead of the LaTeX-processing code.
 *
 ******************************************************************/

/*
ASCIIMathML.js
==============
This file contains JavaScript functions to convert ASCII math notation
to Presentation MathML. The conversion is done while the (X)HTML page 
loads, and should work with Firefox/Mozilla/Netscape 7+ and Internet 
Explorer 6+MathPlayer (http://www.dessci.com/en/products/mathplayer/).
Just add the next line to your (X)HTML page with this file in the same folder:
<script type="text/javascript" src="ASCIIMathML.js"></script>
This is a convenient and inexpensive solution for authoring MathML.

Version 1.4.7 Aug 30, 2005, (c) Peter Jipsen http://www.chapman.edu/~jipsen
Latest version at http://www.chapman.edu/~jipsen/mathml/ASCIIMathML.js
For changes see http://www.chapman.edu/~jipsen/mathml/asciimathchanges.txt
If you use it on a webpage, please send the URL to jipsen@chapman.edu

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
General Public License (at http://www.gnu.org/copyleft/gpl.html) 
for more details.
*/

//var checkForMathML = true;   // check if browser can display MathML
//var notifyIfNoMathML = true; // display note if no MathML capability
//var alertIfNoMathML = true;  // show alert box if no MathML capability
var mathcolor = "red";       // change it to "" (to inherit) or any other color
var mathfontfamily = "serif"; // change to "" to inherit (works in IE) 
                              // or another family (e.g. "arial")
var displaystyle = true;      // puts limits above and below large operators
var showasciiformulaonhover = true; // helps students learn ASCIIMath
var decimalsign = ".";        // change to "," if you like, beware of `(1,2)`!
//var AMdelimiter1 = "`", AMescape1 = "\\\\`"; // can use other characters
//var AMdelimiter2 = "$", AMescape2 = "\\\\\\$", AMdelimiter2regexp = "\\$";
//var doubleblankmathdelimiter = false; // if true,  x+1  is equal to `x+1`
                                      // for IE this works only in <!--   -->
//var separatetokens;// has been removed (email me if this is a problem)
var isIE = document.createElementNS==null;

/* 
 * if (document.getElementById==null) 
 *   alert("This webpage requires a recent browser such as\
 * \nMozilla/Netscape 7+ or Internet Explorer 6+MathPlayer")
 */

// all further global variables start with "AM"

function AMcreateElementXHTML(t) {
  if (isIE) return document.createElement(t);
  else return document.createElementNS("http://www.w3.org/1999/xhtml",t);
}

/* 
 * function AMnoMathMLNote() {
 *   var nd = AMcreateElementXHTML("h3");
 *   nd.setAttribute("align","center")
 *   nd.appendChild(AMcreateElementXHTML("p"));
 *   nd.appendChild(document.createTextNode("To view the "));
 *   var an = AMcreateElementXHTML("a");
 *   an.appendChild(document.createTextNode("ASCIIMathML"));
 *   an.setAttribute("href","http://www.chapman.edu/~jipsen/asciimath.html");
 *   nd.appendChild(an);
 *   nd.appendChild(document.createTextNode(" notation use Internet Explorer 6+"));  
 *   an = AMcreateElementXHTML("a");
 *   an.appendChild(document.createTextNode("MathPlayer"));
 *   an.setAttribute("href","http://www.dessci.com/en/products/mathplayer/download.htm");
 *   nd.appendChild(an);
 *   nd.appendChild(document.createTextNode(" or Netscape/Mozilla/Firefox"));
 *   nd.appendChild(AMcreateElementXHTML("p"));
 *   return nd;
 * }
 * 
 * function AMisMathMLavailable() {
 *   if (navigator.appName.slice(0,8)=="Netscape") 
 *     if (navigator.appVersion.slice(0,1)>="5") return null;
 *     else return AMnoMathMLNote();
 *   else if (navigator.appName.slice(0,9)=="Microsoft")
 *     try {
 *         var ActiveX = new ActiveXObject("MathPlayer.Factory.1");
 *         return null;
 *     } catch (e) {
 *         return AMnoMathMLNote();
 *     }
 *   else return AMnoMathMLNote();
 * }
 */

// character lists for Mozilla/Netscape fonts
var AMcal = [0xEF35,0x212C,0xEF36,0xEF37,0x2130,0x2131,0xEF38,0x210B,0x2110,0xEF39,0xEF3A,0x2112,0x2133,0xEF3B,0xEF3C,0xEF3D,0xEF3E,0x211B,0xEF3F,0xEF40,0xEF41,0xEF42,0xEF43,0xEF44,0xEF45,0xEF46];
var AMfrk = [0xEF5D,0xEF5E,0x212D,0xEF5F,0xEF60,0xEF61,0xEF62,0x210C,0x2111,0xEF63,0xEF64,0xEF65,0xEF66,0xEF67,0xEF68,0xEF69,0xEF6A,0x211C,0xEF6B,0xEF6C,0xEF6D,0xEF6E,0xEF6F,0xEF70,0xEF71,0x2128];
var AMbbb = [0xEF8C,0xEF8D,0x2102,0xEF8E,0xEF8F,0xEF90,0xEF91,0x210D,0xEF92,0xEF93,0xEF94,0xEF95,0xEF96,0x2115,0xEF97,0x2119,0x211A,0x211D,0xEF98,0xEF99,0xEF9A,0xEF9B,0xEF9C,0xEF9D,0xEF9E,0x2124];

var CONST = 0, UNARY = 1, BINARY = 2, INFIX = 3, LEFTBRACKET = 4, 
    RIGHTBRACKET = 5, SPACE = 6, UNDEROVER = 7, DEFINITION = 8,
    LEFTRIGHT = 9, TEXT = 10; // token types

var AMsqrt = {input:"sqrt", tag:"msqrt", output:"sqrt", tex:null, ttype:UNARY},
  AMroot  = {input:"root", tag:"mroot", output:"root", tex:null, ttype:BINARY},
  AMfrac  = {input:"frac", tag:"mfrac", output:"/",    tex:null, ttype:BINARY},
  AMdiv   = {input:"/",    tag:"mfrac", output:"/",    tex:null, ttype:INFIX},
  AMover  = {input:"stackrel", tag:"mover", output:"stackrel", tex:null, ttype:BINARY},
  AMsub   = {input:"_",    tag:"msub",  output:"_",    tex:null, ttype:INFIX},
  AMsup   = {input:"^",    tag:"msup",  output:"^",    tex:null, ttype:INFIX},
  AMtext  = {input:"text", tag:"mtext", output:"text", tex:null, ttype:TEXT},
  AMmbox  = {input:"mbox", tag:"mtext", output:"mbox", tex:null, ttype:TEXT},
  AMquote = {input:"\"",   tag:"mtext", output:"mbox", tex:null, ttype:TEXT};

var AMsymbols = [
//some greek symbols
{input:"alpha",  tag:"mi", output:"\u03B1", tex:null, ttype:CONST},
{input:"beta",   tag:"mi", output:"\u03B2", tex:null, ttype:CONST},
{input:"chi",    tag:"mi", output:"\u03C7", tex:null, ttype:CONST},
{input:"delta",  tag:"mi", output:"\u03B4", tex:null, ttype:CONST},
{input:"Delta",  tag:"mo", output:"\u0394", tex:null, ttype:CONST},
{input:"epsi",   tag:"mi", output:"\u03B5", tex:"epsilon", ttype:CONST},
{input:"varepsilon", tag:"mi", output:"\u025B", tex:null, ttype:CONST},
{input:"eta",    tag:"mi", output:"\u03B7", tex:null, ttype:CONST},
{input:"gamma",  tag:"mi", output:"\u03B3", tex:null, ttype:CONST},
{input:"Gamma",  tag:"mo", output:"\u0393", tex:null, ttype:CONST},
{input:"iota",   tag:"mi", output:"\u03B9", tex:null, ttype:CONST},
{input:"kappa",  tag:"mi", output:"\u03BA", tex:null, ttype:CONST},
{input:"lambda", tag:"mi", output:"\u03BB", tex:null, ttype:CONST},
{input:"Lambda", tag:"mo", output:"\u039B", tex:null, ttype:CONST},
{input:"mu",     tag:"mi", output:"\u03BC", tex:null, ttype:CONST},
{input:"nu",     tag:"mi", output:"\u03BD", tex:null, ttype:CONST},
{input:"omega",  tag:"mi", output:"\u03C9", tex:null, ttype:CONST},
{input:"Omega",  tag:"mo", output:"\u03A9", tex:null, ttype:CONST},
{input:"phi",    tag:"mi", output:"\u03C6", tex:null, ttype:CONST},
{input:"varphi", tag:"mi", output:"\u03D5", tex:null, ttype:CONST},
{input:"Phi",    tag:"mo", output:"\u03A6", tex:null, ttype:CONST},
{input:"pi",     tag:"mi", output:"\u03C0", tex:null, ttype:CONST},
{input:"Pi",     tag:"mo", output:"\u03A0", tex:null, ttype:CONST},
{input:"psi",    tag:"mi", output:"\u03C8", tex:null, ttype:CONST},
{input:"Psi",    tag:"mi", output:"\u03A8", tex:null, ttype:CONST},
{input:"rho",    tag:"mi", output:"\u03C1", tex:null, ttype:CONST},
{input:"sigma",  tag:"mi", output:"\u03C3", tex:null, ttype:CONST},
{input:"Sigma",  tag:"mo", output:"\u03A3", tex:null, ttype:CONST},
{input:"tau",    tag:"mi", output:"\u03C4", tex:null, ttype:CONST},
{input:"theta",  tag:"mi", output:"\u03B8", tex:null, ttype:CONST},
{input:"vartheta", tag:"mi", output:"\u03D1", tex:null, ttype:CONST},
{input:"Theta",  tag:"mo", output:"\u0398", tex:null, ttype:CONST},
{input:"upsilon", tag:"mi", output:"\u03C5", tex:null, ttype:CONST},
{input:"xi",     tag:"mi", output:"\u03BE", tex:null, ttype:CONST},
{input:"Xi",     tag:"mo", output:"\u039E", tex:null, ttype:CONST},
{input:"zeta",   tag:"mi", output:"\u03B6", tex:null, ttype:CONST},

//binary operation symbols
{input:"*",  tag:"mo", output:"\u22C5", tex:"cdot", ttype:CONST},
{input:"**", tag:"mo", output:"\u22C6", tex:"star", ttype:CONST},
{input:"//", tag:"mo", output:"/",      tex:null, ttype:CONST},
{input:"\\\\", tag:"mo", output:"\\",   tex:"backslash", ttype:CONST},
{input:"setminus", tag:"mo", output:"\\", tex:null, ttype:CONST},
{input:"xx", tag:"mo", output:"\u00D7", tex:"times", ttype:CONST},
{input:"-:", tag:"mo", output:"\u00F7", tex:"divide", ttype:CONST},
{input:"@",  tag:"mo", output:"\u2218", tex:"circ", ttype:CONST},
{input:"o+", tag:"mo", output:"\u2295", tex:"oplus", ttype:CONST},
{input:"ox", tag:"mo", output:"\u2297", tex:"otimes", ttype:CONST},
{input:"o.", tag:"mo", output:"\u2299", tex:"odot", ttype:CONST},
{input:"sum", tag:"mo", output:"\u2211", tex:null, ttype:UNDEROVER},
{input:"prod", tag:"mo", output:"\u220F", tex:null, ttype:UNDEROVER},
{input:"^^",  tag:"mo", output:"\u2227", tex:"wedge", ttype:CONST},
{input:"^^^", tag:"mo", output:"\u22C0", tex:"bigwedge", ttype:UNDEROVER},
{input:"vv",  tag:"mo", output:"\u2228", tex:"vee", ttype:CONST},
{input:"vvv", tag:"mo", output:"\u22C1", tex:"bigvee", ttype:UNDEROVER},
{input:"nn",  tag:"mo", output:"\u2229", tex:"cap", ttype:CONST},
{input:"nnn", tag:"mo", output:"\u22C2", tex:"bigcap", ttype:UNDEROVER},
{input:"uu",  tag:"mo", output:"\u222A", tex:"cup", ttype:CONST},
{input:"uuu", tag:"mo", output:"\u22C3", tex:"bigcup", ttype:UNDEROVER},

//binary relation symbols
{input:"!=",  tag:"mo", output:"\u2260", tex:"ne", ttype:CONST},
{input:":=",  tag:"mo", output:":=",     tex:null, ttype:CONST},
{input:"lt",  tag:"mo", output:"<",      tex:null, ttype:CONST},
{input:"<=",  tag:"mo", output:"\u2264", tex:"le", ttype:CONST},
{input:"lt=", tag:"mo", output:"\u2264", tex:"leq", ttype:CONST},
{input:">=",  tag:"mo", output:"\u2265", tex:"ge", ttype:CONST},
{input:"geq", tag:"mo", output:"\u2265", tex:null, ttype:CONST},
{input:"-<",  tag:"mo", output:"\u227A", tex:"prec", ttype:CONST},
{input:"-lt", tag:"mo", output:"\u227A", tex:null, ttype:CONST},
{input:">-",  tag:"mo", output:"\u227B", tex:"succ", ttype:CONST},
{input:"in",  tag:"mo", output:"\u2208", tex:null, ttype:CONST},
{input:"!in", tag:"mo", output:"\u2209", tex:"notin", ttype:CONST},
{input:"sub", tag:"mo", output:"\u2282", tex:"subset", ttype:CONST},
{input:"sup", tag:"mo", output:"\u2283", tex:"supset", ttype:CONST},
{input:"sube", tag:"mo", output:"\u2286", tex:"subseteq", ttype:CONST},
{input:"supe", tag:"mo", output:"\u2287", tex:"supseteq", ttype:CONST},
{input:"-=",  tag:"mo", output:"\u2261", tex:"equiv", ttype:CONST},
{input:"~=",  tag:"mo", output:"\u2245", tex:"cong", ttype:CONST},
{input:"~~",  tag:"mo", output:"\u2248", tex:"approx", ttype:CONST},
{input:"prop", tag:"mo", output:"\u221D", tex:"propto", ttype:CONST},

//logical symbols
{input:"and", tag:"mtext", output:"and", tex:null, ttype:SPACE},
{input:"or",  tag:"mtext", output:"or",  tex:null, ttype:SPACE},
{input:"not", tag:"mo", output:"\u00AC", tex:"neg", ttype:CONST},
{input:"=>",  tag:"mo", output:"\u21D2", tex:"implies", ttype:CONST},
{input:"if",  tag:"mo", output:"if",     tex:null, ttype:SPACE},
{input:"<=>", tag:"mo", output:"\u21D4", tex:"iff", ttype:CONST},
{input:"AA",  tag:"mo", output:"\u2200", tex:"forall", ttype:CONST},
{input:"EE",  tag:"mo", output:"\u2203", tex:"exists", ttype:CONST},
{input:"_|_", tag:"mo", output:"\u22A5", tex:"bot", ttype:CONST},
{input:"TT",  tag:"mo", output:"\u22A4", tex:"top", ttype:CONST},
{input:"|--",  tag:"mo", output:"\u22A2", tex:"vdash", ttype:CONST},
{input:"|==",  tag:"mo", output:"\u22A8", tex:"models", ttype:CONST},

//grouping brackets
{input:"(", tag:"mo", output:"(", tex:null, ttype:LEFTBRACKET},
{input:")", tag:"mo", output:")", tex:null, ttype:RIGHTBRACKET},
{input:"[", tag:"mo", output:"[", tex:null, ttype:LEFTBRACKET},
{input:"]", tag:"mo", output:"]", tex:null, ttype:RIGHTBRACKET},
{input:"{", tag:"mo", output:"{", tex:null, ttype:LEFTBRACKET},
{input:"}", tag:"mo", output:"}", tex:null, ttype:RIGHTBRACKET},
{input:"|", tag:"mo", output:"|", tex:null, ttype:LEFTRIGHT},
//{input:"||", tag:"mo", output:"||", tex:null, ttype:LEFTRIGHT},
{input:"(:", tag:"mo", output:"\u2329", tex:"langle", ttype:LEFTBRACKET},
{input:":)", tag:"mo", output:"\u232A", tex:"rangle", ttype:RIGHTBRACKET},
{input:"<<", tag:"mo", output:"\u2329", tex:null, ttype:LEFTBRACKET},
{input:">>", tag:"mo", output:"\u232A", tex:null, ttype:RIGHTBRACKET},
{input:"{:", tag:"mo", output:"{:", tex:null, ttype:LEFTBRACKET, invisible:true},
{input:":}", tag:"mo", output:":}", tex:null, ttype:RIGHTBRACKET, invisible:true},

//miscellaneous symbols
{input:"int",  tag:"mo", output:"\u222B", tex:null, ttype:CONST},
{input:"dx",   tag:"mi", output:"{:d x:}", tex:null, ttype:DEFINITION},
{input:"dy",   tag:"mi", output:"{:d y:}", tex:null, ttype:DEFINITION},
{input:"dz",   tag:"mi", output:"{:d z:}", tex:null, ttype:DEFINITION},
{input:"dt",   tag:"mi", output:"{:d t:}", tex:null, ttype:DEFINITION},
{input:"oint", tag:"mo", output:"\u222E", tex:null, ttype:CONST},
{input:"del",  tag:"mo", output:"\u2202", tex:"partial", ttype:CONST},
{input:"grad", tag:"mo", output:"\u2207", tex:"nabla", ttype:CONST},
{input:"+-",   tag:"mo", output:"\u00B1", tex:"pm", ttype:CONST},
{input:"O/",   tag:"mo", output:"\u2205", tex:"emptyset", ttype:CONST},
{input:"oo",   tag:"mo", output:"\u221E", tex:"infty", ttype:CONST},
{input:"aleph", tag:"mo", output:"\u2135", tex:null, ttype:CONST},
{input:"...",  tag:"mo", output:"...",    tex:"ldots", ttype:CONST},
{input:":.",  tag:"mo", output:"\u2234",  tex:"therefore", ttype:CONST},
{input:"/_",  tag:"mo", output:"\u2220",  tex:"angle", ttype:CONST},
{input:"\\ ",  tag:"mo", output:"\u00A0", tex:null, ttype:CONST},
{input:"quad", tag:"mo", output:"\u00A0\u00A0", tex:null, ttype:CONST},
{input:"qquad", tag:"mo", output:"\u00A0\u00A0\u00A0\u00A0", tex:null, ttype:CONST},
{input:"cdots", tag:"mo", output:"\u22EF", tex:null, ttype:CONST},
{input:"vdots", tag:"mo", output:"\u22EE", tex:null, ttype:CONST},
{input:"ddots", tag:"mo", output:"\u22F1", tex:null, ttype:CONST},
{input:"diamond", tag:"mo", output:"\u22C4", tex:null, ttype:CONST},
{input:"square", tag:"mo", output:"\u25A1", tex:null, ttype:CONST},
{input:"|__", tag:"mo", output:"\u230A",  tex:"lfloor", ttype:CONST},
{input:"__|", tag:"mo", output:"\u230B",  tex:"rfloor", ttype:CONST},
{input:"|~", tag:"mo", output:"\u2308",  tex:"lceiling", ttype:CONST},
{input:"~|", tag:"mo", output:"\u2309",  tex:"rceiling", ttype:CONST},
{input:"CC",  tag:"mo", output:"\u2102", tex:null, ttype:CONST},
{input:"NN",  tag:"mo", output:"\u2115", tex:null, ttype:CONST},
{input:"QQ",  tag:"mo", output:"\u211A", tex:null, ttype:CONST},
{input:"RR",  tag:"mo", output:"\u211D", tex:null, ttype:CONST},
{input:"ZZ",  tag:"mo", output:"\u2124", tex:null, ttype:CONST},
{input:"f",   tag:"mi", output:"f",      tex:null, ttype:UNARY, func:true},
{input:"g",   tag:"mi", output:"g",      tex:null, ttype:UNARY, func:true},

//standard functions
{input:"lim",  tag:"mo", output:"lim", tex:null, ttype:UNDEROVER},
{input:"Lim",  tag:"mo", output:"Lim", tex:null, ttype:UNDEROVER},
{input:"sin",  tag:"mo", output:"sin", tex:null, ttype:UNARY, func:true},
{input:"cos",  tag:"mo", output:"cos", tex:null, ttype:UNARY, func:true},
{input:"tan",  tag:"mo", output:"tan", tex:null, ttype:UNARY, func:true},
{input:"sinh", tag:"mo", output:"sinh", tex:null, ttype:UNARY, func:true},
{input:"cosh", tag:"mo", output:"cosh", tex:null, ttype:UNARY, func:true},
{input:"tanh", tag:"mo", output:"tanh", tex:null, ttype:UNARY, func:true},
{input:"cot",  tag:"mo", output:"cot", tex:null, ttype:UNARY, func:true},
{input:"sec",  tag:"mo", output:"sec", tex:null, ttype:UNARY, func:true},
{input:"csc",  tag:"mo", output:"csc", tex:null, ttype:UNARY, func:true},
{input:"log",  tag:"mo", output:"log", tex:null, ttype:UNARY, func:true},
{input:"ln",   tag:"mo", output:"ln",  tex:null, ttype:UNARY, func:true},
{input:"det",  tag:"mo", output:"det", tex:null, ttype:UNARY, func:true},
{input:"dim",  tag:"mo", output:"dim", tex:null, ttype:CONST},
{input:"mod",  tag:"mo", output:"mod", tex:null, ttype:CONST},
{input:"gcd",  tag:"mo", output:"gcd", tex:null, ttype:UNARY, func:true},
{input:"lcm",  tag:"mo", output:"lcm", tex:null, ttype:UNARY, func:true},
{input:"lub",  tag:"mo", output:"lub", tex:null, ttype:CONST},
{input:"glb",  tag:"mo", output:"glb", tex:null, ttype:CONST},
{input:"min",  tag:"mo", output:"min", tex:null, ttype:UNDEROVER},
{input:"max",  tag:"mo", output:"max", tex:null, ttype:UNDEROVER},

//arrows
{input:"uarr", tag:"mo", output:"\u2191", tex:"uparrow", ttype:CONST},
{input:"darr", tag:"mo", output:"\u2193", tex:"downarrow", ttype:CONST},
{input:"rarr", tag:"mo", output:"\u2192", tex:"rightarrow", ttype:CONST},
{input:"->",   tag:"mo", output:"\u2192", tex:"to", ttype:CONST},
{input:"|->",  tag:"mo", output:"\u21A6", tex:"mapsto", ttype:CONST},
{input:"larr", tag:"mo", output:"\u2190", tex:"leftarrow", ttype:CONST},
{input:"harr", tag:"mo", output:"\u2194", tex:"leftrightarrow", ttype:CONST},
{input:"rArr", tag:"mo", output:"\u21D2", tex:"Rightarrow", ttype:CONST},
{input:"lArr", tag:"mo", output:"\u21D0", tex:"Leftarrow", ttype:CONST},
{input:"hArr", tag:"mo", output:"\u21D4", tex:"Leftrightarrow", ttype:CONST},

//commands with argument
AMsqrt, AMroot, AMfrac, AMdiv, AMover, AMsub, AMsup,
{input:"hat", tag:"mover", output:"\u005E", tex:null, ttype:UNARY, acc:true},
{input:"bar", tag:"mover", output:"\u00AF", tex:"overline", ttype:UNARY, acc:true},
{input:"vec", tag:"mover", output:"\u2192", tex:null, ttype:UNARY, acc:true},
{input:"dot", tag:"mover", output:".",      tex:null, ttype:UNARY, acc:true},
{input:"ddot", tag:"mover", output:"..",    tex:null, ttype:UNARY, acc:true},
{input:"ul", tag:"munder", output:"\u0332", tex:"underline", ttype:UNARY, acc:true},
AMtext, AMmbox, AMquote,
{input:"bb", tag:"mstyle", atname:"fontweight", atval:"bold", output:"bb", tex:null, ttype:UNARY},
{input:"mathbf", tag:"mstyle", atname:"fontweight", atval:"bold", output:"mathbf", tex:null, ttype:UNARY},
{input:"sf", tag:"mstyle", atname:"fontfamily", atval:"sans-serif", output:"sf", tex:null, ttype:UNARY},
{input:"mathsf", tag:"mstyle", atname:"fontfamily", atval:"sans-serif", output:"mathsf", tex:null, ttype:UNARY},
{input:"bbb", tag:"mstyle", atname:"mathvariant", atval:"double-struck", output:"bbb", tex:null, ttype:UNARY, codes:AMbbb},
{input:"mathbb", tag:"mstyle", atname:"mathvariant", atval:"double-struck", output:"mathbb", tex:null, ttype:UNARY, codes:AMbbb},
{input:"cc",  tag:"mstyle", atname:"mathvariant", atval:"script", output:"cc", tex:null, ttype:UNARY, codes:AMcal},
{input:"mathcal", tag:"mstyle", atname:"mathvariant", atval:"script", output:"mathcal", tex:null, ttype:UNARY, codes:AMcal},
{input:"tt",  tag:"mstyle", atname:"fontfamily", atval:"monospace", output:"tt", tex:null, ttype:UNARY},
{input:"mathtt", tag:"mstyle", atname:"fontfamily", atval:"monospace", output:"mathtt", tex:null, ttype:UNARY},
{input:"fr",  tag:"mstyle", atname:"mathvariant", atval:"fraktur", output:"fr", tex:null, ttype:UNARY, codes:AMfrk},
{input:"mathfrak",  tag:"mstyle", atname:"mathvariant", atval:"fraktur", output:"mathfrak", tex:null, ttype:UNARY, codes:AMfrk}
];

function compareNames(s1,s2) {
  if (s1.input > s2.input) return 1
  else return -1;
}

var AMnames = []; //list of input symbols

function AMinitSymbols() {
  var texsymbols = [], i;
  for (i=0; i<AMsymbols.length; i++)
    if (AMsymbols[i].tex) 
      texsymbols[texsymbols.length] = {input:AMsymbols[i].tex, 
        tag:AMsymbols[i].tag, output:AMsymbols[i].output, ttype:AMsymbols[i].ttype};
  AMsymbols = AMsymbols.concat(texsymbols);
  AMsymbols.sort(compareNames);
  for (i=0; i<AMsymbols.length; i++) AMnames[i] = AMsymbols[i].input;
}

var AMmathml = "http://www.w3.org/1998/Math/MathML";

function AMcreateElementMathML(t) {
  if (isIE) return document.createElement("m:"+t);
  else return document.createElementNS(AMmathml,t);
}

function AMcreateMmlNode(t,frag) {
//  var node = AMcreateElementMathML(name);
  if (isIE) var node = document.createElement("m:"+t);
  else /*var*//*DPVC*/ node = document.createElementNS(AMmathml,t);
  node.appendChild(frag);
  return node;
}

function newcommand(oldstr,newstr) {
  AMsymbols = AMsymbols.concat([{input:oldstr, tag:"mo", output:newstr, 
                                 tex:null, ttype:DEFINITION}]);
  // ####  Added from Version 2.0.1 #### //
  AMsymbols.sort(compareNames);
  for (i=0; i<AMsymbols.length; i++) AMnames[i] = AMsymbols[i].input;
  // ####  End of Addition #### //
}

function AMremoveCharsAndBlanks(str,n) {
//remove n characters and any following blanks
  var st;
  if (str.charAt(n)=="\\" && str.charAt(n+1)!="\\" && str.charAt(n+1)!=" ") 
    st = str.slice(n+1);
  else st = str.slice(n);
  for (var i=0; i<st.length && st.charCodeAt(i)<=32; i=i+1);
  return st.slice(i);
}

function AMposition(arr, str, n) { 
// return position >=n where str appears or would be inserted
// assumes arr is sorted
  if (n==0) {
    var h,m;
    n = -1;
    h = arr.length;
    while (n+1<h) {
      m = (n+h) >> 1;
      if (arr[m]<str) n = m; else h = m;
    }
    return h;
  } else
    for (var i=n; i<arr.length && arr[i]<str; i++);
  return i; // i=arr.length || arr[i]>=str
}

function AMgetSymbol(str) {
//return maximal initial substring of str that appears in names
//return null if there is none
  var k = 0; //new pos
  var j = 0; //old pos
  var mk; //match pos
  var st;
  var tagst;
  var match = "";
  var more = true;
  for (var i=1; i<=str.length && more; i++) {
    st = str.slice(0,i); //initial substring of length i
    j = k;
    k = AMposition(AMnames, st, j);
    if (k<AMnames.length && str.slice(0,AMnames[k].length)==AMnames[k]){
      match = AMnames[k];
      mk = k;
      i = match.length;
    }
    more = k<AMnames.length && str.slice(0,AMnames[k].length)>=AMnames[k];
  }
  AMpreviousSymbol=AMcurrentSymbol;
  if (match!=""){
    AMcurrentSymbol=AMsymbols[mk].ttype;
    return AMsymbols[mk]; 
  }
// if str[0] is a digit or - return maxsubstring of digits.digits
  AMcurrentSymbol=CONST;
  k = 1;
  st = str.slice(0,1);
  var integ = true;
  while ("0"<=st && st<="9" && k<=str.length) {
    st = str.slice(k,k+1);
    k++;
  }
  if (st == decimalsign) {
    st = str.slice(k,k+1);
    if ("0"<=st && st<="9") {
      integ = false;
      k++;
      while ("0"<=st && st<="9" && k<=str.length) {
        st = str.slice(k,k+1);
        k++;
      }
    }
  }
  if ((integ && k>1) || k>2) {
    st = str.slice(0,k-1);
    tagst = "mn";
  } else {
    k = 2;
    st = str.slice(0,1); //take 1 character
    tagst = (("A">st || st>"Z") && ("a">st || st>"z")?"mo":"mi");
  }
  // #### Replaced by lines from Version 2.0.1 #### //
  if (st=="-" && AMpreviousSymbol==INFIX) {
    AMcurrentSymbol = INFIX;  //trick "/" into recognizing "-" on second parse
    return {input:st, tag:tagst, output:st, ttype:UNARY, func:true};
  }
  // #### End of Replacement #### //
  return {input:st, tag:tagst, output:st, ttype:CONST};
}

function AMremoveBrackets(node) {
  var st;
  if (node.nodeName=="mrow") {
    st = node.firstChild.firstChild.nodeValue;
    if (st=="(" || st=="[" || st=="{") node.removeChild(node.firstChild);
  }
  if (node.nodeName=="mrow") {
    st = node.lastChild.firstChild.nodeValue;
    if (st==")" || st=="]" || st=="}") node.removeChild(node.lastChild);
  }
}

/*Parsing ASCII math expressions with the following grammar
v ::= [A-Za-z] | greek letters | numbers | other constant symbols
u ::= sqrt | text | bb | other unary symbols for font commands
b ::= frac | root | stackrel         binary symbols
l ::= ( | [ | { | (: | {:            left brackets
r ::= ) | ] | } | :) | :}            right brackets
S ::= v | lEr | uS | bSS             Simple expression
I ::= S_S | S^S | S_S^S | S          Intermediate expression
E ::= IE | I/I                       Expression
Each terminal symbol is translated into a corresponding mathml node.*/

var AMnestingDepth,AMpreviousSymbol,AMcurrentSymbol;

function AMparseSexpr(str) { //parses str and returns [node,tailstr]
  var symbol, node, result, i, st,// rightvert = false,
    newFrag = document.createDocumentFragment();
  str = AMremoveCharsAndBlanks(str,0);
  symbol = AMgetSymbol(str);             //either a token or a bracket or empty
  if (symbol == null || symbol.ttype == RIGHTBRACKET && AMnestingDepth > 0) {
    return [null,str];
  }
  if (symbol.ttype == DEFINITION) {
    str = symbol.output+AMremoveCharsAndBlanks(str,symbol.input.length); 
    symbol = AMgetSymbol(str);
  }
  switch (symbol.ttype) {
  case UNDEROVER:
  case CONST:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    return [AMcreateMmlNode(symbol.tag,        //its a constant
                             document.createTextNode(symbol.output)),str];
  case LEFTBRACKET:   //read (expr+)
    AMnestingDepth++;
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    result = AMparseExpr(str,true);
    AMnestingDepth--;
    if (typeof symbol.invisible == "boolean" && symbol.invisible) 
      node = AMcreateMmlNode("mrow",result[0]);
    else {
      node = AMcreateMmlNode("mo",document.createTextNode(symbol.output));
      node = AMcreateMmlNode("mrow",node);
      node.appendChild(result[0]);
    }
    return [node,result[1]];
  case TEXT:
      if (symbol!=AMquote) str = AMremoveCharsAndBlanks(str,symbol.input.length);
      if (str.charAt(0)=="{") i=str.indexOf("}");
      else if (str.charAt(0)=="(") i=str.indexOf(")");
      else if (str.charAt(0)=="[") i=str.indexOf("]");
      else if (symbol==AMquote) i=str.slice(1).indexOf("\"")+1;
      else i = 0;
      if (i==-1) i = str.length;
      st = str.slice(1,i);
      if (st.charAt(0) == " ") {
        node = AMcreateElementMathML("mspace");
        node.setAttribute("width","1ex");
        newFrag.appendChild(node);
      }
      newFrag.appendChild(
        AMcreateMmlNode(symbol.tag,document.createTextNode(st)));
      if (st.charAt(st.length-1) == " ") {
        node = AMcreateElementMathML("mspace");
        node.setAttribute("width","1ex");
        newFrag.appendChild(node);
      }
      str = AMremoveCharsAndBlanks(str,i+1);
      return [AMcreateMmlNode("mrow",newFrag),str];
  case UNARY:
      str = AMremoveCharsAndBlanks(str,symbol.input.length); 
      result = AMparseSexpr(str);
      if (result[0]==null) return [AMcreateMmlNode(symbol.tag,
                             document.createTextNode(symbol.output)),str];
      if (typeof symbol.func == "boolean" && symbol.func) { // functions hack
        st = str.charAt(0);
        if (st=="^" || st=="_" || st=="/" || st=="|" || st==",") {
          return [AMcreateMmlNode(symbol.tag,
                    document.createTextNode(symbol.output)),str];
        } else {
          node = AMcreateMmlNode("mrow",
           AMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)));
          node.appendChild(result[0]);
          return [node,result[1]];
        }
      }
      AMremoveBrackets(result[0]);
      if (symbol.input == "sqrt") {           // sqrt
        return [AMcreateMmlNode(symbol.tag,result[0]),result[1]];
      } else if (typeof symbol.acc == "boolean" && symbol.acc) {   // accent
        node = AMcreateMmlNode(symbol.tag,result[0]);
        node.appendChild(AMcreateMmlNode("mo",document.createTextNode(symbol.output)));
        return [node,result[1]];
      } else {                        // font change command
        if (!isIE && typeof symbol.codes != "undefined") {
          for (i=0; i<result[0].childNodes.length; i++)
            if (result[0].childNodes[i].nodeName=="mi" || result[0].nodeName=="mi") {
              st = (result[0].nodeName=="mi"?result[0].firstChild.nodeValue:
                              result[0].childNodes[i].firstChild.nodeValue);
              var newst = [];
              for (var j=0; j<st.length; j++)
                if (st.charCodeAt(j)>64 && st.charCodeAt(j)<91) newst = newst +
                  String.fromCharCode(symbol.codes[st.charCodeAt(j)-65]);
                else newst = newst + st.charAt(j);
              if (result[0].nodeName=="mi")
                result[0]=AMcreateElementMathML("mo").
                          appendChild(document.createTextNode(newst));
              else result[0].replaceChild(AMcreateElementMathML("mo").
          appendChild(document.createTextNode(newst)),result[0].childNodes[i]);
            }
        }
        node = AMcreateMmlNode(symbol.tag,result[0]);
        node.setAttribute(symbol.atname,symbol.atval);
        return [node,result[1]];
      }
  case BINARY:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    result = AMparseSexpr(str);
    if (result[0]==null) return [AMcreateMmlNode("mo",
                           document.createTextNode(symbol.input)),str];
    AMremoveBrackets(result[0]);
    var result2 = AMparseSexpr(result[1]);
    if (result2[0]==null) return [AMcreateMmlNode("mo",
                           document.createTextNode(symbol.input)),str];
    AMremoveBrackets(result2[0]);
    if (symbol.input=="root" || symbol.input=="stackrel") 
      newFrag.appendChild(result2[0]);
    newFrag.appendChild(result[0]);
    if (symbol.input=="frac") newFrag.appendChild(result2[0]);
    return [AMcreateMmlNode(symbol.tag,newFrag),result2[1]];
  case INFIX:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    return [AMcreateMmlNode("mo",document.createTextNode(symbol.output)),str];
  case SPACE:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    node = AMcreateElementMathML("mspace");
    node.setAttribute("width","1ex");
    newFrag.appendChild(node);
    newFrag.appendChild(
      AMcreateMmlNode(symbol.tag,document.createTextNode(symbol.output)));
    node = AMcreateElementMathML("mspace");
    node.setAttribute("width","1ex");
    newFrag.appendChild(node);
    return [AMcreateMmlNode("mrow",newFrag),str];
  case LEFTRIGHT:
//    if (rightvert) return [null,str]; else rightvert = true;
    AMnestingDepth++;
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    result = AMparseExpr(str,false);
    AMnestingDepth--;
    /*var*//*DPVC*/ st = "";
    if (result[0].lastChild!=null)
      st = result[0].lastChild.firstChild.nodeValue;
//alert(result[0].lastChild+"***"+st);
    if (st == "|") { // its an absolute value subterm
      node = AMcreateMmlNode("mo",document.createTextNode(symbol.output));
      node = AMcreateMmlNode("mrow",node);
      node.appendChild(result[0]);
      return [node,result[1]];
    } else { // the "|" is a \mid
      node = AMcreateMmlNode("mo",document.createTextNode(symbol.output));
      node = AMcreateMmlNode("mrow",node);
      return [node,str];
    }
  default:
//alert("default");
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    return [AMcreateMmlNode(symbol.tag,        //its a constant
                             document.createTextNode(symbol.output)),str];
  }
}

function AMparseIexpr(str) {
  var symbol, sym1, sym2, node, result, underover;
  str = AMremoveCharsAndBlanks(str,0);
  sym1 = AMgetSymbol(str);
  result = AMparseSexpr(str);
  node = result[0];
  str = result[1];
  symbol = AMgetSymbol(str);
  if (symbol.ttype == INFIX && symbol.input != "/") {
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
//    if (symbol.input == "/") result = AMparseIexpr(str); else ...
    result = AMparseSexpr(str);
    if (result[0] == null) // show box in place of missing argument
      result[0] = AMcreateMmlNode("mo",document.createTextNode("\u25A1"));
    else AMremoveBrackets(result[0]);
    str = result[1];
//    if (symbol.input == "/") AMremoveBrackets(node);
    if (symbol.input == "_") {
      sym2 = AMgetSymbol(str);
      underover = (sym1.ttype == UNDEROVER);
      if (sym2.input == "^") {
        str = AMremoveCharsAndBlanks(str,sym2.input.length);
        var res2 = AMparseSexpr(str);
        AMremoveBrackets(res2[0]);
        str = res2[1];
        node = AMcreateMmlNode((underover?"munderover":"msubsup"),node);
        node.appendChild(result[0]);
        node.appendChild(res2[0]);
        node = AMcreateMmlNode("mrow",node); // so sum does not stretch
      } else {
        node = AMcreateMmlNode((underover?"munder":"msub"),node);
        node.appendChild(result[0]);
      }
    } else {
      node = AMcreateMmlNode(symbol.tag,node);
      node.appendChild(result[0]);
    }
  }
  return [node,str];
}

function AMparseExpr(str,rightbracket) {
  var symbol, node, result, i, /*nodeList = [],*//*DPVC*/
  newFrag = document.createDocumentFragment();
  do {
    str = AMremoveCharsAndBlanks(str,0);
    result = AMparseIexpr(str);
    node = result[0];
    str = result[1];
    symbol = AMgetSymbol(str);
    if (symbol.ttype == INFIX && symbol.input == "/") {
      str = AMremoveCharsAndBlanks(str,symbol.input.length);
      result = AMparseIexpr(str);
      if (result[0] == null) // show box in place of missing argument
        result[0] = AMcreateMmlNode("mo",document.createTextNode("\u25A1"));
      else AMremoveBrackets(result[0]);
      str = result[1];
      AMremoveBrackets(node);
      node = AMcreateMmlNode(symbol.tag,node);
      node.appendChild(result[0]);
      newFrag.appendChild(node);
      symbol = AMgetSymbol(str);
    } 
    else if (node!=undefined) newFrag.appendChild(node);
  } while ((symbol.ttype != RIGHTBRACKET && 
           (symbol.ttype != LEFTRIGHT || rightbracket)
           || AMnestingDepth == 0) && symbol!=null && symbol.output!="");
  if (symbol.ttype == RIGHTBRACKET || symbol.ttype == LEFTRIGHT) {
//    if (AMnestingDepth > 0) AMnestingDepth--;
    var len = newFrag.childNodes.length;
    if (len>0 && newFrag.childNodes[len-1].nodeName == "mrow" && len>1 &&
      newFrag.childNodes[len-2].nodeName == "mo" &&
      newFrag.childNodes[len-2].firstChild.nodeValue == ",") { //matrix
      var right = newFrag.childNodes[len-1].lastChild.firstChild.nodeValue;
      if (right==")" || right=="]") {
        var left = newFrag.childNodes[len-1].firstChild.firstChild.nodeValue;
        if (left=="(" && right==")" && symbol.output != "}" || 
            left=="[" && right=="]") {
        var pos = []; // positions of commas
        var matrix = true;
        var m = newFrag.childNodes.length;
        for (i=0; matrix && i<m; i=i+2) {
          pos[i] = [];
          node = newFrag.childNodes[i];
          if (matrix) matrix = node.nodeName=="mrow" && 
            (i==m-1 || node.nextSibling.nodeName=="mo" && 
            node.nextSibling.firstChild.nodeValue==",")&&
            node.firstChild.firstChild.nodeValue==left &&
            node.lastChild.firstChild.nodeValue==right;
          if (matrix) 
            for (var j=0; j<node.childNodes.length; j++)
              if (node.childNodes[j].firstChild.nodeValue==",")
                pos[i][pos[i].length]=j;
          if (matrix && i>1) matrix = pos[i].length == pos[i-2].length;
        }
        if (matrix) {
          var row, frag, n, k, table = document.createDocumentFragment();
          for (i=0; i<m; i=i+2) {
            row = document.createDocumentFragment();
            frag = document.createDocumentFragment();
            node = newFrag.firstChild; // <mrow>(-,-,...,-,-)</mrow>
            n = node.childNodes.length;
            k = 0;
            node.removeChild(node.firstChild); //remove (
            for (j=1; j<n-1; j++) {
              if (typeof pos[i][k] != "undefined" && j==pos[i][k]){
                node.removeChild(node.firstChild); //remove ,
                row.appendChild(AMcreateMmlNode("mtd",frag));
                k++;
              } else frag.appendChild(node.firstChild);
            }
            row.appendChild(AMcreateMmlNode("mtd",frag));
            if (newFrag.childNodes.length>2) {
              newFrag.removeChild(newFrag.firstChild); //remove <mrow>)</mrow>
              newFrag.removeChild(newFrag.firstChild); //remove <mo>,</mo>
            }
            table.appendChild(AMcreateMmlNode("mtr",row));
          }
          node = AMcreateMmlNode("mtable",table);
          if (typeof symbol.invisible == "boolean" && symbol.invisible) node.setAttribute("columnalign","left");
          newFrag.replaceChild(node,newFrag.firstChild);
        }
       }
      }
    }
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    if (typeof symbol.invisible != "boolean" || !symbol.invisible) {
      node = AMcreateMmlNode("mo",document.createTextNode(symbol.output));
      newFrag.appendChild(node);
    }
  }
  return [newFrag,str];
}

function AMparseMath(str) {
  var /*result,*//*DPVC*/ node = AMcreateElementMathML("mstyle");
  if (mathcolor != "") node.setAttribute("mathcolor",mathcolor);
  if (displaystyle) node.setAttribute("displaystyle","true");
  if (mathfontfamily != "") node.setAttribute("fontfamily",mathfontfamily);
  AMnestingDepth = 0;
  node.appendChild(AMparseExpr(str.replace(/^\s+/g,""),false)[0]);
  node = AMcreateMmlNode("math",node);
  if (showasciiformulaonhover)                      //fixed by djhsu so newline
    node.setAttribute("title",str.replace(/\s+/g," "));//does not show in Gecko
  if (mathfontfamily != "" && (isIE || mathfontfamily != "serif")) {
    var fnode = AMcreateElementXHTML("font");
    fnode.setAttribute("face",mathfontfamily);
    fnode.appendChild(node);
    return fnode;
  }
  return node;
}

/* 
 * function AMstrarr2docFrag(arr, linebreaks) {
 *   var newFrag=document.createDocumentFragment();
 *   var expr = false;
 *   for (var i=0; i<arr.length; i++) {
 *     if (expr) newFrag.appendChild(AMparseMath(arr[i]));
 *     else {
 *       var arri = (linebreaks ? arr[i].split("\n\n") : [arr[i]]);
 *       newFrag.appendChild(AMcreateElementXHTML("span").
 *       appendChild(document.createTextNode(arri[0])));
 *       for (var j=1; j<arri.length; j++) {
 *         newFrag.appendChild(AMcreateElementXHTML("p"));
 *         newFrag.appendChild(AMcreateElementXHTML("span").
 *         appendChild(document.createTextNode(arri[j])));
 *       }
 *     }
 *     expr = !expr;
 *   }
 *   return newFrag;
 * }
 * 
 * function AMprocessNodeR(n, linebreaks) {
 *   var mtch, str, arr, frg, i;
 *   if (n.childNodes.length == 0) {
 *    if ((n.nodeType!=8 || linebreaks) &&
 *     n.parentNode.nodeName!="form" && n.parentNode.nodeName!="FORM" &&
 *     n.parentNode.nodeName!="textarea" && n.parentNode.nodeName!="TEXTAREA" &&
 *     n.parentNode.nodeName!="pre" && n.parentNode.nodeName!="PRE") {
 *     str = n.nodeValue;
 *     if (!(str == null)) {
 *       str = str.replace(/\r\n\r\n/g,"\n\n");
 *       if (doubleblankmathdelimiter) {
 *         str = str.replace(/\x20\x20\./g," "+AMdelimiter1+".");
 *         str = str.replace(/\x20\x20,/g," "+AMdelimiter1+",");
 *         str = str.replace(/\x20\x20/g," "+AMdelimiter1+" ");
 *       }
 *       str = str.replace(/\x20+/g," ");
 *       str = str.replace(/\s*\r\n/g," ");
 *       mtch = false;
 *       str = str.replace(new RegExp(AMescape2, "g"),
 *               function(st){mtch=true;return "AMescape2"});
 *       str = str.replace(new RegExp(AMescape1, "g"),
 *               function(st){mtch=true;return "AMescape1"});
 *       str = str.replace(new RegExp(AMdelimiter2regexp, "g"),AMdelimiter1);
 *       arr = str.split(AMdelimiter1);
 *       for (i=0; i<arr.length; i++)
 *         arr[i]=arr[i].replace(/AMescape2/g,AMdelimiter2).
 *                       replace(/AMescape1/g,AMdelimiter1);
 *       if (arr.length>1 || mtch) {
 *         if (checkForMathML) {
 *           checkForMathML = false;
 *           var nd = AMisMathMLavailable();
 *           AMnoMathML = nd != null;
 *           if (AMnoMathML && notifyIfNoMathML) 
 *             if (alertIfNoMathML)
 *               alert("To view the ASCIIMathML notation use Internet Explorer 6 +\nMathPlayer (free from www.dessci.com)\n\
 *                 or Firefox/Mozilla/Netscape");
 *             else AMbody.insertBefore(nd,AMbody.childNodes[0]);
 *         }
 *         if (!AMnoMathML) {
 *           frg = AMstrarr2docFrag(arr,n.nodeType==8);
 *           var len = frg.childNodes.length;
 *           n.parentNode.replaceChild(frg,n);
 *           return len-1;
 *         } else return 0;
 *       }
 *     }
 *    } else return 0;
 *   } else if (n.nodeName!="math") {
 *     for (i=0; i<n.childNodes.length; i++)
 *       i += AMprocessNodeR(n.childNodes[i], linebreaks);
 *   }
 *   return 0;
 * }
 * 
 * function AMprocessNode(n, linebreaks, spanclassAM) {
 *   var frag,st;
 *   if (spanclassAM!=null) {
 *     frag = document.getElementsByTagName("span")
 *     for (var i=0;i<frag.length;i++)
 *       if (frag[i].className == "AM")
 *         AMprocessNodeR(frag[i],linebreaks);
 *   } else {
 *     try {
 *       st = n.innerHTML;
 *     } catch(err) {}
 *     if (st==null || 
 *         st.indexOf(AMdelimiter1)!=-1 || st.indexOf(AMdelimiter2)!=-1) 
 *       AMprocessNodeR(n,linebreaks);
 *   }
 *   if (isIE) { //needed to match size and font of formula to surrounding text
 *     frag = document.getElementsByTagName('math');
 *     for (var i=0;i<frag.length;i++) frag[i].update()
 *   }
 * }
 * 
 * var AMbody;
 * var AMnoMathML = false, AMtranslated = false;
 * 
 * function translate(spanclassAM) {
 *   if (!AMtranslated) { // run this only once
 *     AMtranslated = true;
 *     AMinitSymbols();
 *     AMbody = document.getElementsByTagName("body")[0];
 *     AMprocessNode(AMbody, false, spanclassAM);
 *   }
 * }
 * 
 * if (isIE) { // avoid adding MathPlayer info explicitly to each webpage
 *   document.write("<object id=\"mathplayer\"\
 *   classid=\"clsid:32F66A20-7614-11D4-BD11-00104BD3F987\"></object>");
 *   document.write("<?import namespace=\"m\" implementation=\"#mathplayer\"?>");
 * }
 * 
 * // GO1.1 Generic onload by Brothercake 
 * // http://www.brothercake.com/
 * //onload function (replaces the onload="translate()" in the <body> tag)
 * function generic()
 * {
 *   translate();
 * };
 * //setup onload function
 * if(typeof window.addEventListener != 'undefined')
 * {
 *   //.. gecko, safari, konqueror and standard
 *   window.addEventListener('load', generic, false);
 * }
 * else if(typeof document.addEventListener != 'undefined')
 * {
 *   //.. opera 7
 *   document.addEventListener('load', generic, false);
 * }
 * else if(typeof window.attachEvent != 'undefined')
 * {
 *   //.. win/ie
 *   window.attachEvent('onload', generic);
 * }
 * //** remove this condition to degrade older browsers
 * else
 * {
 *   //.. mac/ie5 and anything else that gets this far
 *   //if there's an existing onload function
 *   if(typeof window.onload == 'function')
 *   {
 *     //store it
 *     var existing = onload;
 *     //add new onload handler
 *     window.onload = function()
 *     {
 *       //call existing onload function
 *       existing();
 *       //call generic onload function
 *       generic();
 *     };
 *   }
 *   else
 *   {
 *     //setup onload function
 *     window.onload = generic;
 *   }
 * }
 */

/******************************************************************
 *
 *   The previous section is ASCIIMathML.js Version 1.4.7
 *   (c) Peter Jipsen, used with permission.
 *
 ******************************************************************/

showasciiformulaonhover = false;
mathfontfamily = "";
mathcolor = "";

//
//  Remove remapping of mathvariants to plane1 (MathJax handles that)
//  Change functions to mi rather than mo (to get spacing right)
//
(function () {
  for (var i = 0, m = AMsymbols.length; i < m; i++) {
    if (AMsymbols[i].codes) {delete AMsymbols[i].codes}
    if (AMsymbols[i].func) {AMsymbols[i].tag = "mi"}
    if (AMsymbols[i].atname === "fontfamily" || AMsymbols[i].atname === "fontweight")
      {AMsymbols[i].atname = "mathvariant"}
  }
})();

//
//  Add some missing symbols
//
AMsymbols.push(
  {input:"gt",  tag:"mo", output:">",      tex:null, ttype:CONST},
  {input:"gt=", tag:"mo", output:"\u2265", tex:"geq", ttype:CONST},
  {input:"-<=", tag:"mo", output:"\u2AAF", tex:"preceq", ttype:CONST},
  {input:">-=", tag:"mo", output:"\u2AB0", tex:"succeq", ttype:CONST},
  {input:"'",   tag:"mo", output:"\u2032", tex:"prime", ttype:CONST},
  {input:"arcsin",  tag:"mi", output:"arcsin", tex:null, ttype:UNARY, func:true},
  {input:"arccos",  tag:"mi", output:"arccos", tex:null, ttype:UNARY, func:true},
  {input:"arctan",  tag:"mi", output:"arctan", tex:null, ttype:UNARY, func:true},
  {input:"coth",  tag:"mi", output:"coth", tex:null, ttype:UNARY, func:true},
  {input:"sech",  tag:"mi", output:"sech", tex:null, ttype:UNARY, func:true},
  {input:"csch",  tag:"mi", output:"csch", tex:null, ttype:UNARY, func:true},
  {input:"abs",   tag:"mi", output:"abs",  tex:null, ttype:UNARY, func:true},
  {input:"exp",   tag:"mi", output:"exp",  tex:null, ttype:UNARY, func:true},
  {input:"tilde", tag:"mover", output:"~", tex:null, ttype:UNARY, acc:true}
)

//
//  Access to AsciiMath functions and values
//
ASCIIMATH.Augment({
  AM: {
    Init: function () {
      displaystyle = ASCIIMATH.config.displaystyle;
      // Old versions use the "decimal" option, so take it into account if it
      // is defined by the user. See issue 384.
      decimalsign  = (ASCIIMATH.config.decimal || ASCIIMATH.config.decimalsign);
      INITASCIIMATH();
      AMinitSymbols();
    },
    Augment: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {
	switch (id) {
	 case "displaystyle": displaystyle = def[id]; break;
	 case "decimal": decimal = def[id]; break;
	 case "parseMath": AMparseMath = def[id]; break;
	 case "parseExpr": AMparseExpr = def[id]; break;
	 case "parseIexpr": AMparseIexpr = def[id]; break;
	 case "parseSexpr": AMparseSexpr = def[id]; break;
	 case "removeBrackets": AMremoveBrackets = def[id]; break;
	 case "getSymbol": AMgetSymbol = def[id]; break;
	 case "position": AMposition = def[id]; break;
	 case "removeCharsAndBlanks": AMremoveCharsAndBlanks = def[id]; break;
	 case "createMmlNode": AMcreateMmlNode = def[id]; break;
	 case "createElementMathML": AMcreateElementMathML = def[id]; break;
	 case "createElementXHTML": AMcreateElementXHTML = def[id]; break;
	 case "initSymbols": AMinitSymbols = def[id]; break;
	 case "compareNames": comareNames = def[id]; break;
	};
        this[id] = def[id];
      }};
    },
    parseMath:  AMparseMath,
    parseExpr:  AMparseExpr,
    parseIexpr: AMparseIexpr,
    parseSexr:  AMparseSexpr,
    removeBrackets: AMremoveBrackets,
    getSymbol:  AMgetSymbol,
    position:   AMposition,
    removeCharsAndBlanks: AMremoveCharsAndBlanks,
    createMmlNode: AMcreateMmlNode,
    createElementMathML: AMcreateElementMathML,
    createElementXHTML:  AMcreateElementXHTML,
    initSymbols: AMinitSymbols,
    compareNames: compareNames,
    
    createDocumentFragment: DOCFRAG,
    document: document,
    
    define: newcommand,
    symbols: AMsymbols,
    names: AMnames,
        
    TOKEN: {
      CONST:CONST, UNARY:UNARY, BINARY:BINARY, INFIX:INFIX,
      LEFTBRACKET:LEFTBRACKET, RIGHTBRACKET:RIGHTBRACKET, SPACE:SPACE,
      UNDEROVER:UNDEROVER, DEFINITION:DEFINITION, LEFTRIGHT:LEFTRIGHT, TEXT:TEXT
    }
  }
});

//
//  Make minimizer think these have been used
var junk = [
  window, navigator //,
//  checkForMathML, notifyIfNoMathML, alertIfNoMathML, AMdelimiter1, AMescape1,
//  AMdelimiter2, AMescape2, AMdelimiter2regexp, doubleblankmathdelimiter
];
junk = null;
  
})(MathJax.InputJax.AsciiMath);


/************************************************************************/

(function (ASCIIMATH) {
  var MML;
  
  ASCIIMATH.Augment({
    sourceMenuTitle: /*_(MathMenu)*/ ["AsciiMathInput","AsciiMath Input"],

    prefilterHooks:    MathJax.Callback.Hooks(true),   // hooks to run before processing AsciiMath
    postfilterHooks:   MathJax.Callback.Hooks(true),   // hooks to run after processing AsciiMath

    Translate: function (script) {
      var mml, math = MathJax.HTML.getScript(script);
      var data = {math:math, script:script};
      this.prefilterHooks.Execute(data); math = data.math;
      try {
        mml = this.AM.parseMath(math);
      } catch(err) {
        if (!err.asciimathError) {throw err}
        mml = this.formatError(err,math);
      }
 var display = (script.type.replace(/\n/g," ").match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/) != null);
	  if (display) { MML(mml).root.display = "block"}
		
	  data.math = MML(mml); this.postfilterHooks.Execute(data);
      return data.math;
    },
    formatError: function (err,math,script) {
      var message = err.message.replace(/\n.*/,"");
      MathJax.Hub.signal.Post(["AsciiMath Jax - parse error",message,math,script]);
      return MML.merror(message);
    },
    Error: function (message) {
      throw MathJax.Hub.Insert(Error(message),{asciimathError: true});
    },
    //
    //  Initialize the MML variable and AsciiMath itself
    //
    Startup: function () {
      MML = MathJax.ElementJax.mml;
      this.AM.Init();
    }
  });

  ASCIIMATH.loadComplete("jax.js");
  
})(MathJax.InputJax.AsciiMath);




(function(l,c,g,e){var f,i=c.Browser.isMSIE;var h,b,d,k;c.Register.StartupHook("MathZoom Ready",function(){k=MathJax.Extension.MathZoom});var j=function(m,o){var n=e.Element("span");m="padding"+m;if(o){n.style.cssText=(o.getAttribute("style")||"");if(n.style.padding===""&&(n.style[m]||"")===""){n.style[m]="0px";o.setAttribute("style",n.style.cssText)}}};var a=function(r,m,p){if(r){var o=e.Element("span");o.style.cssText=(r.getAttribute("style")||"");if(o.style.padding===""){var q={paddingLeft:p,paddingTop:m,paddingRight:"0px",paddingBottom:"0px"};for(var n in q){if(q.hasOwnProperty(n)){if((o.style[n]||"")===""){o.style[n]=q[n]}}}}r.setAttribute("style",o.style.cssText)}};l.Augment({config:{styles:{".MathJax_MathML":{"font-style":"normal","font-weight":"normal","line-height":"normal","font-size":"100%","font-size-adjust":"none","text-indent":0,"text-align":"left","text-transform":"none","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none",direction:"ltr",border:0,padding:0,margin:0},"span.MathJax_MathML":{display:"inline"},"div.MathJax_MathML":{display:"block"},".MathJax_mmlExBox":{display:"block",overflow:"hidden",height:"1px",width:"60ex",padding:0,border:0,margin:0}}},settings:c.config.menuSettings,ex:1,Config:function(){this.SUPER(arguments).Config.call(this);if(this.settings.scale){this.config.scale=this.settings.scale}if(c.config.displayAlign!=="center"){var o=c.config.displayAlign,m=c.config.displayIndent;var n={"text-align":o+"!important"};n["margin-"+o]=m+"!important";c.Insert(this.config.styles,{"div.MathJax_MathML":n,"div.MathJax_MathML math":{"text-align":o},"div.MathJax_MathContainer > span":{"text-align":o+"!important"}})}if(!this.require){this.require=[]}this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(){h=MathJax.Extension.MathEvents.Event;b=MathJax.Extension.MathEvents.Touch;d=MathJax.Extension.MathEvents.Hover;this.ContextMenu=h.ContextMenu;this.Mousedown=h.AltContextMenu;this.Mouseover=d.Mouseover;this.Mouseout=d.Mouseout;this.Mousemove=d.Mousemove;if(!i){this.EmExSpan=e.Element("span",{style:{position:"absolute","font-size-adjust":"none"}},[["div",{className:"MathJax_mmlExBox"}],["span",{className:"MathJax_MathML"}]]);f.math(f.mspace().With({width:"60ex"})).toNativeMML(this.EmExSpan.lastChild)}return g.Styles(this.config.styles)},InitializeMML:function(){this.initialized=true;if(i){try{if(!c.Browser.mpNamespace){var m=document.createElement("object");m.id="mathplayer";m.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987";document.getElementsByTagName("head")[0].appendChild(m);document.namespaces.add("m","http://www.w3.org/1998/Math/MathML");c.Browser.mpNamespace=true}if(!c.Browser.mpImported){document.namespaces.m.doImport("#mathplayer");c.Browser.mpImported=true}}catch(n){alert(MathJax.Localization._(["MathML","MathPlayer"],"MathJax was not able to set up MathPlayer.\n\nIf MathPlayer is not installed, you need to install it first.\nOtherwise, your security settings may be preventing ActiveX     \ncontrols from running.  Use the Internet Options item under\nthe Tools menu and select the Security tab, then press the\nCustom Level button. Check that the settings for\n'Run ActiveX Controls', and 'Binary and script behaviors'\nare enabled.\n\nCurrently you will see error messages rather than\ntypeset mathematics."))}}else{document.body.appendChild(this.EmExSpan);this.defaultEx=this.EmExSpan.firstChild.offsetWidth/60;this.defaultMEx=this.EmExSpan.lastChild.offsetWidth/60;document.body.removeChild(this.EmExSpan)}},preTranslate:function(o){var t=o.jax[this.id],u,p=t.length,y,r,A,w,z,n,v,s,q;for(u=0;u<p;u++){y=t[u];if(!y.parentNode){continue}if(!this.initialized){this.InitializeMML()}r=y.previousSibling;if(r&&r.className==="MathJax_MathML"){r.parentNode.removeChild(r)}n=y.MathJax.elementJax;if(!n){continue}z=n.root;n.NativeMML={};var x=(z.Get("display")==="block"?"div":"span");A=e.Element(x,{className:"MathJax_MathML",id:n.inputID+"-Frame"},[["span",{className:"MathJax_MathContainer",isMathJax:true,jaxID:this.id,style:{position:"relative",display:"inline-block","white-space":"nowrap"}},[["span",{isMathJax:true,style:{display:"inline-block"}}]]]]);y.parentNode.insertBefore(A,y);if(!i){y.parentNode.insertBefore(this.EmExSpan.cloneNode(true),y)}}for(u=0;u<p;u++){y=t[u];if(!y.parentNode){continue}n=y.MathJax.elementJax;if(!n){continue}if(!i){w=y.previousSibling;A=w.previousSibling;v=w.firstChild.offsetWidth/60;s=w.lastChild.offsetWidth/60;if(v===0||v==="NaN"){v=this.defaultEx;s=this.defaultMEx}q=(s>1?v/s:1)*this.config.scale;q=Math.floor(Math.max(this.config.minScaleAdjust/100,q));n.NativeMML.ex=v}else{q=100}n.NativeMML.fontSize=q+"%"}if(!i){for(u=0;u<p;u++){y=t[u];if(!y.parentNode||!y.MathJax.elementJax){continue}w=t[u].previousSibling;w.parentNode.removeChild(w)}}},Translate:function(s){if(!s.parentNode){return}var m=s.MathJax.elementJax,t=m.root;var u=document.getElementById(m.inputID+"-Frame"),n=u.firstChild,q=n.firstChild;u.style.fontSize=m.NativeMML.fontSize;this.ex=m.NativeMML.ex||this.defaultEx;try{t.toNativeMML(q)}catch(r){if(r.restart){while(q.firstChild){q.removeChild(q.firstChild)}}throw r}if(i){if(n.addEventListener){for(var o in this.MSIE9events){if(this.MSIE9events.hasOwnProperty(o)){n.addEventListener(o,this.MSIE9event,true)}}}else{var p=(this.config.showMathMenuMSIE!=null?this:c).config;if(p.showMathMenuMSIE&&!this.settings.mpContext&&!this.settings.mpMouse){this.MSIEoverlay(n)}else{n.style.position="";q.firstChild.onmousedown=this.MSIEaltMenu}}}else{n.oncontextmenu=h.Menu;n.onmouseover=h.Mouseover;n.onmouseout=h.Mouseout;n.onmousedown=h.Mousedown;n.onclick=h.Click;n.ondblclick=h.DblClick;if(c.Browser.noContextMenu){n.ontouchstart=b.start;n.ontouchend=b.end}}},postTranslate:function(n){if(this.forceReflow){var m=(document.styleSheets||[])[0]||{};m.disabled=true;m.disabled=false}},Remove:function(m){var n=m.SourceElement();if(!n){return}n=n.previousSibling;if(!n){return}if(n.className.match(/MathJax_MathML/)){n.parentNode.removeChild(n)}},MMLnamespace:"http://www.w3.org/1998/Math/MathML",MSIEoverlay:function(m){var n=m.firstChild;if(n.nodeName.toLowerCase()==="span"){n=n.firstChild}var o=this.getHoverBBox(null,n,{});e.addElement(m,"span",{style:{display:"inline-block",width:0,height:0,position:"relative"}},[["span",{isMathJax:true,className:"MathJax_MathPlayer_Overlay",style:{display:"inline-block",position:"absolute",left:d.Px(-o.w),top:d.Px(-o.h-(o.y||0)-1),width:d.Px(o.w),height:d.Px(o.h+o.d),cursor:"pointer","background-color":"white",filter:"alpha(opacity=0)"}}]]);c.Insert(m,{msieMath:n,onmousedown:this.MSIEevent,oncontextmenu:this.MSIEevent,onclick:this.MSIEevent,onmouseup:this.MSIEevent,onmousemove:this.MSIEevent,ondblclick:this.MSIEevent,onmouseover:this.MSIEevent,onmouseout:this.MSIEevent})},MSIEevents:{mousedown:"Mousedown",contextmenu:"ContextMenu",click:"Click",mouseup:"Mouseup",mousemove:"Mousemove",dblclick:"DblClick",mouseover:"Mouseover",mouseout:"Mouseout"},MSIEevent:function(){var n=window.event;var m=l.MSIEevents[n.type];if(l[m]&&l[m](n,this)===false){return false}if(k&&k.HandleEvent(n,m,this)===false){return false}if(n.srcElement.className==="MathJax_MathPlayer_Overlay"&&this.msieMath.fireEvent){if(m==="ContextMenu"||m==="Mouseover"||m==="Mouseout"){this.msieMath.fireEvent("on"+n.type,n)}}return h.False(n)},MSIEaltMenu:function(){var m=this.parentNode.parentNode;while(!m.jaxID){m=m.parentNode}h.AltContextMenu(window.event,m)},MSIE9events:{contextmenu:"Menu",click:"Click",dblclick:"DblClick",mouseup:"False",mouseover:"Mouseover",mouseout:"Mouseout"},MSIE9event:function(n){if(n.type==="contextmenu"&&l.settings.mpContext){return true}if(n.type==="mouseup"&&l.settings.mpMouse){return true}if(n.type==="click"&&l.settings.mpContext){return h.AltContextMenu(n,this)}var m=l.MSIE9events[n.type];return h[m].call(this,n)},getJaxFromMath:function(m){m=m.parentNode;do{m=m.nextSibling}while(m&&m.nodeName.toLowerCase()!=="script");return c.getJaxFor(m)},getHoverSpan:function(m,n){return n.firstChild},getHoverBBox:function(m,n,o){return h.getBBox(n.parentNode)},Zoom:function(n,u,s,m,r){n.root.toNativeMML(u);if(this.msieIE8HeightBug){u.style.position="absolute"}var p=s.offsetWidth||s.scrollWidth,v=s.offsetHeight||s.scrollHeight;var t=u.offsetWidth,q=u.offsetHeight;if(l.widthBug){var o=u.firstChild.firstChild.scrollWidth;if(o>t){t=o;u.style.width=t+"px"}}if(this.msieIE8HeightBug){u.style.position=""}return{Y:-h.getBBox(u.parentNode).h,mW:p,mH:v,zW:t,zH:q}},NAMEDSPACE:{negativeveryverythinmathspace:"-.0556em",negativeverythinmathspace:"-.1111em",negativethinmathspace:"-.1667em",negativemediummathspace:"-.2222em",negativethickmathspace:"-.2778em",negativeverythickmathspace:"-.3333em",negativeveryverythickmathspace:"-.3889em"}});c.Register.StartupHook("mml Jax Ready",function(){f=MathJax.ElementJax.mml;f.mbase.Augment({toNativeMML:function(r){var p=this.NativeMMLelement(this.type);this.NativeMMLattributes(p);for(var q=0,o=this.data.length;q<o;q++){if(this.data[q]){this.data[q].toNativeMML(p)}else{p.appendChild(this.NativeMMLelement("mrow"))}}r.appendChild(p)},NativeMMLattributes:function(p){var t=this.defaults;var v=(this.attrNames||f.copyAttributeNames),r=f.skipAttributes;if(!this.attrNames){if(this.type==="mstyle"){t=f.math.prototype.defaults}for(var u in t){if(!r[u]&&t.hasOwnProperty(u)){if(this[u]!=null){p.setAttribute(u,this.NativeMMLattribute(this[u]))}}}}for(var q=0,o=v.length;q<o;q++){var s=(this.attr||{})[v[q]];if(s==null){s=this[v[q]]}if(s!=null){p.setAttribute(v[q],this.NativeMMLattribute(s))}}this.NativeMMLclass(p)},NativeMMLclass:function(o){var q=[];if(this["class"]){q.push(this["class"])}if(this.isa(f.TeXAtom)){var p=["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"][this.texClass];if(p){q.push("MJX-TeXAtom-"+p)}}if(this.mathvariant&&this.NativeMMLvariants[this.mathvariant]){q.push("MJX"+this.mathvariant)}if(this.arrow){q.push("MJX-arrow")}if(this.variantForm){q.push("MJX-variant")}if(q.length){o.setAttribute("class",q.join(" "))}},NativeMMLattribute:function(o){o=String(o);if(l.NAMEDSPACE[o]){o=l.NAMEDSPACE[o]}else{if(o.match(/^\s*(([-+])?(\d+(\.\d*)?|\.\d+))\s*mu\s*$/)){o=RegExp.$2+((1/18)*RegExp.$3).toFixed(3).replace(/\.?0+$/,"")+"em"}else{if(this.NativeMMLvariants[o]){o=this.NativeMMLvariants[o]}}}return o},NativeMMLvariants:{"-tex-caligraphic":f.VARIANT.SCRIPT,"-tex-caligraphic-bold":f.VARIANT.BOLDSCRIPT,"-tex-oldstyle":f.VARIANT.NORMAL,"-tex-oldstyle-bold":f.VARIANT.BOLD,"-tex-mathit":f.VARIANT.ITALIC},NativeMMLelement:function(o){var p=(i?document.createElement("m:"+o):document.createElementNS(l.MMLnamespace,o));p.isMathJax=true;return p}});f.mrow.Augment({toNativeMML:function(s){var r,p;if(this.inferred&&this.parent.inferRow){for(r=0,p=this.data.length;r<p;r++){if(this.data[r]){this.data[r].toNativeMML(s)}else{s.appendChild(this.NativeMMLelement("mrow"))}}}else{if(l.stretchyMoBug&&(this.open||this.close)){var q=this.NativeMMLelement("mfenced");this.NativeMMLattributes(q);r=0,p=this.data.length;if(this.open){q.setAttribute("open",this.open);r++}if(this.close){q.setAttribute("close",this.close);p--}var o=q;if(p-r+1>1){o=this.NativeMMLelement("mrow");s.appendChild(q);s=q}for(;r<p;r++){if(this.data[r]){this.data[r].toNativeMML(o)}else{o.appendChild(this.NativeMMLelement("mrow"))}}s.appendChild(o)}else{this.SUPER(arguments).toNativeMML.call(this,s)}}}});f.msubsup.Augment({toNativeMML:function(s){var r=this.type;if(this.data[this.sup]==null){r="msub"}if(this.data[this.sub]==null){r="msup"}var p=this.NativeMMLelement(r);this.NativeMMLattributes(p);delete this.data[0].inferred;for(var q=0,o=this.data.length;q<o;q++){if(this.data[q]){this.data[q].toNativeMML(p)}}s.appendChild(p)}});f.munderover.Augment({toNativeMML:function(s){var r=this.type;if(this.data[this.under]==null){r="mover"}if(this.data[this.over]==null){r="munder"}var p=this.NativeMMLelement(r);this.NativeMMLattributes(p);delete this.data[0].inferred;for(var q=0,o=this.data.length;q<o;q++){if(this.data[q]){this.data[q].toNativeMML(p)}}s.appendChild(p)}});if(!i){var m=MathJax.Hub.SplitList;f.mtable.Augment({toNativeMML:function(z){var s,q;if(l.tableSpacingBug){var A=this.getValues("rowspacing","columnspacing");this.nMMLtopPadding=m("0px "+A.rowspacing);this.nMMLleftPadding=m("0px "+A.columnspacing);var y=this.nMMLtopPadding,v=y.length;for(s=0,q=this.data.length;s<q;s++){if(this.data[s]){this.data[s].nMMLtopPadding=y[s<v?s:v-1]}}}if(l.tableLabelBug){for(s=0,q=this.data.length;s<q;s++){if(this.data[s]&&this.data[s].isa(f.mlabeledtr)){var u=c.config.displayAlign.charAt(0),w=this.Get("side").charAt(0);this.nMMLhasLabels=true;this.nMMLlaMatch=(u===w);this.nMMLforceWidth=(u==="c"||!!((this.width||"").match("%")));break}}}if(this.width&&this.ffTableWidthBug){var B=(this.style||"").replace(/;\s*$/,"").split(";");if(B[0]===""){B.shift()}B.push("width:"+this.width);this.style=B.join(";")}this.SUPER(arguments).toNativeMML.call(this,z);if(this.nMMLhasLabels){var r=z.firstChild;if(this.nMMLforceWidth||w!=="r"){var p=(u!=="l"?1:0)+(w==="l"?1:0);if(p){var t={columnalign:"left",columnwidth:"auto",columnspacing:"0px",columnlines:"none"};for(var o in t){if(t.hasOwnProperty(o)&&this[o]){var x=[t[o],t[o]].slice(2-p).join(" ")+" ";r.setAttribute(o,x+r.getAttribute(o))}}}}if(this.nMMLforceWidth||!this.nMMLlaMatch){r.setAttribute("width","100%")}}}});f.mtr.Augment({toNativeMML:function(v){this.SUPER(arguments).toNativeMML.call(this,v);var p=v.lastChild;if(l.tableSpacingBug){var r=this.parent.nMMLleftPadding,t=r.length;for(var w=p.firstChild,q=0;w;w=w.nextSibling,q++){a(w,this.nMMLtopPadding,r[q<t?q:t-1])}}if(l.tableLabelBug){var o=this.parent.nMMLforceWidth,u=this.parent.Get("side").charAt(0),s=c.config.displayAlign.charAt(0);if(this.parent.nMMLhasLabels&&p.firstChild){if(o||u!=="r"){j("Left",p.firstChild);if(s!=="l"){p.insertBefore(this.NativeMMLelement("mtd"),p.firstChild).setAttribute("style","padding:0")}if(u==="l"){p.insertBefore(this.NativeMMLelement("mtd"),p.firstChild).setAttribute("style","padding:0")}}if(o||u!=="l"){j("Right",p.lastChild)}}}}});f.mlabeledtr.Augment({toNativeMML:function(C){var t=this.NativeMMLelement("mtr");this.NativeMMLattributes(t);for(var u=1,s=this.data.length;u<s;u++){if(this.data[u]){this.data[u].toNativeMML(t)}else{t.appendChild(this.NativeMMLelement("mtd"))}}if(l.tableSpacingBug){var v=this.parent.nMMLleftPadding,y=v.length;u=0;for(var D=t.firstChild;D;D=D.nextSibling,u++){a(D,this.nMMLtopPadding,v[u<y?u:y-1])}}if(l.tableLabelBug){var z=this.parent.Get("side").charAt(0),x=c.config.displayAlign.charAt(0),q=c.config.displayIndent;this.data[0].toNativeMML(t);var A=t.lastChild,r=A;if(z===x){A.setAttribute("style","width:"+q);A.setAttribute("columnalign",c.config.displayAlign)}else{r=this.NativeMMLelement("mpadded");r.setAttribute("style","width:0");r.setAttribute("width","0px");r.appendChild(A.firstChild);A.appendChild(r)}j("",A);t.removeChild(A);var o=100,p=this.parent.nMMLforceWidth;if((this.parent.width||"").match(/%/)){o-=parseFloat(this.parent.width)}var B=o;if(p||z!=="r"){j("Left",t.firstChild);if(x!=="l"){if(x==="c"){B/=2}o-=B;t.insertBefore(this.NativeMMLelement("mtd"),t.firstChild).setAttribute("style","padding:0;width:"+B+"%")}if(z==="l"){t.insertBefore(A,t.firstChild)}}if(p||z!=="l"){j("Right",t.lastChild);if(x!=="r"){t.appendChild(this.NativeMMLelement("mtd")).setAttribute("style","padding:0;width:"+o+"%")}if(z==="r"){if(z!==x){r.setAttribute("lspace","-1width")}t.appendChild(A)}}}C.appendChild(t)}});f.mtd.Augment({toNativeMML:function(r){var p=r.appendChild(this.NativeMMLelement(this.type));this.NativeMMLattributes(p);if(l.widthBug){p=p.appendChild(this.NativeMMLelement("mrow"))}for(var q=0,o=this.data.length;q<o;q++){if(this.data[q]){this.data[q].toNativeMML(p)}else{p.appendChild(this.NativeMMLelement("mrow"))}}}});f.mspace.Augment({toNativeMML:function(q){this.SUPER(arguments).toNativeMML.call(this,q);if(l.spaceWidthBug&&this.width){var r=q.lastChild;var p=r.getAttribute("width");var o=r.getAttribute("style")||"";if(o!=""){o+=";"}r.setAttribute("style",o+"width:"+p)}}});var n=MathJax.Ajax.fileURL(MathJax.OutputJax.fontDir+"/HTML-CSS/TeX/otf");l.Augment({config:{styles:{'[mathvariant="double-struck"]':{"font-family":"MathJax_AMS, MathJax_AMS-WEB"},'[mathvariant="script"]':{"font-family":"MathJax_Script, MathJax_Script-WEB"},'[mathvariant="fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB"},'[mathvariant="bold-script"]':{"font-family":"MathJax_Script, MathJax_Caligraphic-WEB","font-weight":"bold"},'[mathvariant="bold-fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB","font-weight":"bold"},'[mathvariant="monospace"]':{"font-family":"monospace"},'[mathvariant="sans-serif"]':{"font-family":"sans-serif"},'[mathvariant="bold-sans-serif"]':{"font-family":"sans-serif","font-weight":"bold"},'[mathvariant="sans-serif-italic"]':{"font-family":"sans-serif","font-style":"italic"},'[mathvariant="sans-serif-bold-italic"]':{"font-family":"sans-serif","font-style":"italic","font-weight":"bold"},'[class="MJX-tex-oldstyle"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"},'[class="MJX-tex-oldstyle-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB","font-weight":"bold"},'[class="MJX-tex-caligraphic"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"},'[class="MJX-tex-caligraphic-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB","font-weight":"bold"},"@font-face /*1*/":{"font-family":"MathJax_AMS-WEB",src:"url('"+n+"/MathJax_AMS-Regular.otf')"},"@font-face /*2*/":{"font-family":"MathJax_Script-WEB",src:"url('"+n+"/MathJax_Script-Regular.otf')"},"@font-face /*3*/":{"font-family":"MathJax_Fraktur-WEB",src:"url('"+n+"/MathJax_Fraktur-Regular.otf')"},"@font-face /*4*/":{"font-family":"MathJax_Caligraphic-WEB",src:"url('"+n+"/MathJax_Caligraphic-Regular.otf')"},"@font-face /*5*/":{"font-family":"MathJax_Fraktur-WEB","font-weight":"bold",src:"url('"+n+"/MathJax_Fraktur-Bold.otf')"},"@font-face /*6*/":{"font-family":"MathJax_Caligraphic-WEB","font-weight":"bold",src:"url('"+n+"/MathJax_Caligraphic-Bold.otf')"}}}})}f.math.Augment({toNativeMML:function(r){var p=this.NativeMMLelement(this.type),s=p;p.setAttribute("xmlns",l.MMLnamespace);this.NativeMMLattributes(p);if(l.widthBug){p=p.appendChild(this.NativeMMLelement("mrow"))}for(var q=0,o=this.data.length;q<o;q++){if(this.data[q]){this.data[q].toNativeMML(p)}else{p.appendChild(this.NativeMMLelement("mrow"))}}var t=((this.data[0]||[]).data[0]||{});if(t.nMMLhasLabels){if(t.nMMLforceWidth||!t.nMMLlaMatch){p.setAttribute("style","width:100%");r.style.width=r.parentNode.style.width="100%"}if(t.nMMLlaMatch){if(r.parentNode.parentNode.nodeName.toLowerCase()==="div"){r.parentNode.parentNode.style.setProperty("margin-"+c.config.displayAlign,"0px","important")}}}r.appendChild(s);if(l.widthBug&&!t.nMMLforceWidth&&t.nMMLlaMatch){r.style.width=(s.firstChild.scrollWidth/l.ex).toFixed(3)+"ex"}}});f.mfenced.Augment({toNativeMML:function(w){if(!l.mfencedBug){this.SUPER(arguments).toNativeMML.call(this,w);return}var t=c.Browser.isOpera;var u,p,r;var q=this.getValues("open","close","separators");q.open=q.open.replace(/^\s+/,"").replace(/\s+$/,"");q.close=q.close.replace(/^\s+/,"").replace(/\s+$/,"");q.separators=q.separators.replace(/\s+/g,"").split("");if(q.separators.length==0){q.separators=null}else{if(q.separators.length<this.data.length-1){var v=q.separators[q.separators.length-1];for(u=this.data.length-1-q.separators.length;u>0;u--){q.separators.push(v)}}}var o=this.NativeMMLelement(t?this.type:"mrow");this.NativeMMLattributes(o);o.removeAttribute("separators");if(t){o.setAttribute("open",q.open);o.setAttribute("close",q.close);if(this.data.length>1){w.appendChild(o);w=o;o=this.NativeMMLelement("mrow")}}else{o.removeAttribute("open");o.removeAttribute("close")}if(!t){r=this.NativeMMLelement("mo");r.setAttribute("fence","true");r.textContent=q.open;o.appendChild(r)}for(u=0,p=this.data.length;u<p;u++){if(q.separators&&u>0){r=this.NativeMMLelement("mo");r.setAttribute("separator","true");r.textContent=q.separators[u-1];o.appendChild(r)}if(this.data[u]){this.data[u].toNativeMML(o)}else{o.appendChild(this.NativeMMLelement("mrow"))}}if(!t){r=this.NativeMMLelement("mo");r.setAttribute("fence","true");r.textContent=q.close;o.appendChild(r)}w.appendChild(o)}});f.TeXAtom.Augment({toNativeMML:function(p){var o=this.NativeMMLelement("mrow");this.NativeMMLattributes(o);this.data[0].toNativeMML(o);p.appendChild(o)}});f.chars.Augment({toNativeMML:function(o){o.appendChild(document.createTextNode(this.toString()))}});f.entity.Augment({toNativeMML:function(o){o.appendChild(document.createTextNode(this.toString()))}});f.xml.Augment({toNativeMML:function(q){for(var p=0,o=this.data.length;p<o;p++){q.appendChild(this.data[p].cloneNode(true))}}});c.Register.StartupHook("TeX mathchoice Ready",function(){f.TeXmathchoice.Augment({toNativeMML:function(o){this.Core().toNativeMML(o)}})});setTimeout(MathJax.Callback(["loadComplete",l,"jax.js"]),0)});c.Browser.Select({MSIE:function(m){var n=(document.documentMode||0);l.msieIE8HeightBug=(n===8)},Opera:function(m){l.operaPositionBug=true;l.stretchyMoBug=true;l.tableLabelBug=true;l.mfencedBug=true},Firefox:function(m){l.ffTableWidthBug=!m.versionAtLeast("13.0");l.forceReflow=true;l.widthBug=true;l.spaceWidthBug=!m.versionAtLeast("20.0");l.tableSpacingBug=true;l.tableLabelBug=true;l.mfencedBug=true},Chrome:function(m){l.tableSpacingBug=true;l.tableLabelBug=true;l.mfencedBug=true},Safari:function(m){l.tableSpacingBug=true;l.tableLabelBug=true;l.mfencedBug=true}});c.Register.StartupHook("End Cookie",function(){if(c.config.menuSettings.zoom!=="None"){g.Require("[MathJax]/extensions/MathZoom.js")}})})(MathJax.OutputJax.NativeMML,MathJax.Hub,MathJax.Ajax,MathJax.HTML);

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/jax.js
 *
 *  Implements the HTML-CSS OutputJax that displays mathematics
 *  using HTML and CSS to position the characters from math fonts
 *  in their proper locations.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2013 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


(function (AJAX,HUB,HTMLCSS) {
  var MML, isMobile = HUB.Browser.isMobile;

  var MESSAGE = function () {
    var data = [].slice.call(arguments,0);
    data[0][0] = ["HTML-CSS",data[0][0]];
    return MathJax.Message.Set.apply(MathJax.Message,data);
  };
   
  var FONTTEST = MathJax.Object.Subclass({
    timeout:  (isMobile? 15:8)*1000,   // timeout for loading web fonts

    FontInfo: {
      STIX: {family: "STIXSizeOneSym", testString: "() {} []"},
      TeX:  {family: "MathJax_Size1",  testString: "() {} []"}
    },
    comparisonFont: ["sans-serif","monospace","script","Times","Courier","Arial","Helvetica"],
    testSize: ["40px","50px","60px","30px","20px"],

    Init: function () {
      this.div = MathJax.HTML.addElement(document.body,"div",{
        id: "MathJax_Font_Test",
        style: {position:"absolute", visibility:"hidden", top:0, left:0, width: "auto",
                padding:0, border:0, margin:0, whiteSpace:"nowrap",
                textAlign:"left", textIndent:0, textTransform:"none",
                lineHeight:"normal", letterSpacing:"normal", wordSpacing:"normal",
                fontSize:this.testSize[0], fontWeight:"normal", fontStyle:"normal",
                fontSizeAdjust:"none"}
      },[""]);
      this.text = this.div.firstChild;
    },

    findFont: function (fonts,pref) {
      if (pref && this.testCollection(pref)) {return pref}
      for (var i = 0, m = fonts.length; i < m; i++) {
        if (fonts[i] === pref) continue;
        if (this.testCollection(fonts[i])) {return fonts[i]}
      }
      return null;
    },

    testCollection: function (name) {return this.testFont(this.FontInfo[name])},

    testFont: function (font) {
      if (font.isWebFont && HTMLCSS.FontFaceBug) {
        this.div.style.fontWeight = this.div.style.fontStyle = "normal";
      } else {
        this.div.style.fontWeight = (font.weight||"normal");
        this.div.style.fontStyle  = (font.style||"normal");
      }
      var W = this.getComparisonWidths(font.testString,font.noStyleChar);
      if (W) {
        this.div.style.fontFamily = "'"+font.family+"',"+this.comparisonFont[0];
        if (this.div.offsetWidth == W[0]) {
          this.div.style.fontFamily = "'"+font.family+"',"+this.comparisonFont[W[2]];
          if (this.div.offsetWidth == W[1]) {return false}
        }
        if (this.div.offsetWidth != W[3] || this.div.offsetHeight != W[4]) {
          if (font.noStyleChar || !HTMLCSS.FONTDATA || !HTMLCSS.FONTDATA.hasStyleChar) {return true}
          for (var i = 0, m = this.testSize.length; i < m; i++)
            {if (this.testStyleChar(font,this.testSize[i])) {return true}}
        }
      }
      return false;
    },

    styleChar:   "\uEFFD", // width encodes style
    versionChar: "\uEFFE", // width encodes version
    compChar:    "\uEFFF", // "standard" width to compare to

    testStyleChar: function (font,size) {
      var n = 3 + (font.weight ? 2 : 0) + (font.style ? 4 : 0);
      var extra = "", dw = 0;
      var SIZE = this.div.style.fontSize; this.div.style.fontSize = size;
      if (HTMLCSS.msieItalicWidthBug && font.style === "italic") {
        this.text.nodeValue = extra = this.compChar;
        dw = this.div.offsetWidth;
      }
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = this.compChar+extra}
        else {this.text.nodeValue = this.compChar+extra}
      var W = this.div.offsetWidth-dw;
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = this.styleChar+extra}
        else {this.text.nodeValue = this.styleChar+extra}
      var N = Math.floor((this.div.offsetWidth-dw)/W+.5);
      if (N === n) {
        if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = this.versionChar+extra}
          else {this.text.nodeValue = this.versionChar+extra}
        font.version = Math.floor((this.div.offsetWidth-dw)/W+1.5)/2;
      }
      this.div.style.fontSize = SIZE;
      return (N === n);
    },

    getComparisonWidths: function (string,noStyleChar) {
      if (HTMLCSS.FONTDATA && HTMLCSS.FONTDATA.hasStyleChar && !noStyleChar)
        {string += this.styleChar + " " + this.compChar}
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = string}
        else {this.text.nodeValue = string}
      this.div.style.fontFamily = this.comparisonFont[0];
      var W = this.div.offsetWidth;
      this.div.style.fontFamily = HTMLCSS.webFontDefault;
      var sW = this.div.offsetWidth, sH = this.div.offsetHeight;
      for (var i = 1, m = this.comparisonFont.length; i < m; i++) {
        this.div.style.fontFamily = this.comparisonFont[i];
        if (this.div.offsetWidth != W) {return [W,this.div.offsetWidth,i,sW,sH]}
      }
      return null;
    },

    loadWebFont: function (font) {
      HUB.Startup.signal.Post("HTML-CSS Jax - Web-Font "+HTMLCSS.fontInUse+"/"+font.directory);
      var n = MESSAGE(["LoadWebFont","Loading web-font %1",HTMLCSS.fontInUse+"/"+font.directory]);
      var done = MathJax.Callback({}); // called when font is loaded
      var callback = MathJax.Callback(["loadComplete",this,font,n,done]);
      AJAX.timer.start(AJAX,[this.checkWebFont,font,callback],0,this.timeout);
      return done;
    },
    loadComplete: function (font,n,done,status) {
      MathJax.Message.Clear(n);
      if (status === AJAX.STATUS.OK) {this.webFontLoaded = true; done(); return}
      this.loadError(font);
      if (HUB.Browser.isFirefox && HTMLCSS.allowWebFonts) {
        var host = document.location.protocol + "//" + document.location.hostname;
        if (document.location.port != "") {host += ":" + document.location.port}
        host += "/";
        if (AJAX.fileURL(HTMLCSS.webfontDir).substr(0,host.length) !== host)
          {this.firefoxFontError(font)}
      }
      if (!this.webFontLoaded) {HTMLCSS.loadWebFontError(font,done)} else {done()}
    },
    loadError: function (font) {
      MESSAGE(["CantLoadWebFont","Can't load web font %1",HTMLCSS.fontInUse+"/"+font.directory],null,2000);
      HUB.Startup.signal.Post(["HTML-CSS Jax - web font error",HTMLCSS.fontInUse+"/"+font.directory,font]);
    },
    firefoxFontError: function (font) {
      MESSAGE(["FirefoxCantLoadWebFont","Firefox can't load web fonts from a remote host"],null,3000);
      HUB.Startup.signal.Post("HTML-CSS Jax - Firefox web fonts on remote host error");
    },

    checkWebFont: function (check,font,callback) {
      if (check.time(callback)) return;
      if (HTMLCSS.Font.testFont(font)) {callback(check.STATUS.OK)}
        else {setTimeout(check,check.delay)}
    },

    fontFace: function (name) {
      var type = HTMLCSS.allowWebFonts;
      var FONT = HTMLCSS.FONTDATA.FONTS[name];
      if (HTMLCSS.msieFontCSSBug && !FONT.family.match(/-Web$/)) {FONT.family += "-Web"}
      var dir = AJAX.fileURL(HTMLCSS.webfontDir+"/"+type);
      var fullname = name.replace(/-b/,"-B").replace(/-i/,"-I").replace(/-Bold-/,"-Bold");
      if (!fullname.match(/-/)) {fullname += "-Regular"}
      if (type === "svg") {fullname += ".svg#"+fullname} else {fullname += "."+type}
      var def = {
        "font-family": FONT.family,
        src: "url('"+dir+"/"+fullname+"')"
      };
      if (type === "otf") {
        def.src += " format('opentype')";
        dir = AJAX.fileURL(HTMLCSS.webfontDir+"/woff");  // add woff fonts as well
        def.src = "url('"+dir+"/"+fullname.replace(/otf$/,"woff")+"') format('woff'), "+def.src;
      } else if (type !== "eot") {def.src += " format('"+type+"')"}
      if (!(HTMLCSS.FontFaceBug && FONT.isWebFont)) {
        if (name.match(/-bold/)) {def["font-weight"] = "bold"}
        if (name.match(/-italic/)) {def["font-style"] = "italic"}
      }
      return def;
    }
  });
  
  var EVENT, TOUCH, HOVER; // filled in later
  
  HTMLCSS.Augment({
    config: {
      styles: {
        ".MathJax": {
          "display":         "inline",
          "font-style":      "normal",
          "font-weight":     "normal",
          "line-height":     "normal",
          "font-size":       "100%",
          "font-size-adjust":"none",
          "text-indent":     0,
          "text-align":      "left",
          "text-transform":  "none",
          "letter-spacing":  "normal",
          "word-spacing":    "normal",
          "word-wrap":       "normal",
          "white-space":     "nowrap",
          "float":           "none",
          "direction":       "ltr",
          border: 0, padding: 0, margin: 0
        },

        ".MathJax_Display": {
          position: "relative",
          display: "block",
          width: "100%"
        },

        ".MathJax img, .MathJax nobr, .MathJax a": {
          border: 0, padding: 0, margin: 0, "max-width": "none", "max-height": "none",
          "vertical-align": 0, "line-height": "normal",
          "text-decoration": "none"
        },
        "img.MathJax_strut": {
          border:"0 !important", padding:"0 !important", margin: "0 !important",
          "vertical-align": "0 !important"
        },
        
	".MathJax span": {
	  display: "inline", position: "static",
	  border: 0, padding: 0, margin: 0,
	  "vertical-align": 0, "line-height": "normal",
	  "text-decoration": "none"
	},

        ".MathJax nobr": {
          "white-space": "nowrap ! important"
        },
        
        ".MathJax img": {
          display: "inline ! important",
          "float": "none ! important"
        },
        
        ".MathJax *": {
          transition: "none",
          "-webkit-transition": "none",
          "-moz-transition": "none",
          "-ms-transition": "none",
          "-o-transition": "none"
        },

        ".MathJax_Processing": {
          visibility: "hidden", position:"fixed",
          width: 0, height: 0, overflow:"hidden"
        },
        ".MathJax_Processed": {display:"none!important"},
        
        ".MathJax_ExBox": {
          display:"block", overflow:"hidden",
          width:"1px", height:"60ex"
        },
        ".MathJax .MathJax_EmBox": {
          display:"block", overflow:"hidden",
          width:"1px", height:"60em"
        },
        
        ".MathJax .MathJax_HitBox": {
          cursor: "text",
          background: "white",
          opacity:0, filter:"alpha(opacity=0)"
        },
        ".MathJax .MathJax_HitBox *": {
          filter: "none", opacity:1, background:"transparent" // for IE
        },
        
        "#MathJax_Tooltip": {
          position: "absolute", left: 0, top: 0,
          width: "auto", height: "auto",
          display: "none"
        },
        "#MathJax_Tooltip *": {
          filter: "none", opacity:1, background:"transparent" // for IE
        },
        
        //
        //  Used for testing web fonts against the default font used while
        //  web fonts are loading
        //
        "@font-face": {
          "font-family": "MathJax_Blank",
          "src": "url('about:blank')"
        }

      }
    },
    settings: HUB.config.menuSettings,

    hideProcessedMath: true,           // use display:none until all math is processed

    Font: null,                        // created by Config() below
    webFontDefault: "MathJax_Blank",
    allowWebFonts: "otf",              // assume browser can use OTF web fonts

    maxStretchyParts: 1000,            // limit the number of parts allowed for
                                       // stretchy operators. See issue 366.

    Config: function () {
      if (!this.require) {this.require = []}
      this.Font = FONTTEST();
      this.SUPER(arguments).Config.call(this); var settings = this.settings;
      if (this.adjustAvailableFonts) {this.adjustAvailableFonts(this.config.availableFonts)}
      if (settings.scale) {this.config.scale = settings.scale}
      if (settings.font && settings.font !== "Auto") {
        if (settings.font === "TeX (local)") {
          this.config.availableFonts = ["TeX"];
          this.config.preferredFont = this.config.webFont = "TeX";
        } else if (settings.font === "STIX (local)") {
          this.config.availableFonts = ["STIX"];
          this.config.preferredFont = "STIX";
          this.config.webFont = "TeX";
        } else if (settings.font === "TeX (web)") {
          this.config.availableFonts = [];
          this.config.preferredFont = "";
          this.config.webFont = "TeX";
        } else if (settings.font === "TeX (image)") {
          this.config.availableFonts = [];
          this.config.preferredFont = this.config.webFont = "";
        }
      }
      var font = this.Font.findFont(this.config.availableFonts,this.config.preferredFont);
      if (!font && this.allowWebFonts) {font = this.config.webFont; if (font) {this.webFonts = true}}
      if (!font && this.config.imageFont) {font = this.config.imageFont; this.imgFonts = true}
      if (font) {
        this.fontInUse = font; this.fontDir += "/" + font; this.webfontDir += "/" + font;
        this.require.push(this.fontDir+"/fontdata.js");
        if (this.imgFonts) {
          this.require.push(this.directory+"/imageFonts.js");
          HUB.Startup.signal.Post("HTML-CSS Jax - using image fonts");
        }
      } else {
        MESSAGE(["CantFindFontUsing","Can't find a valid font using %1",
                "["+this.config.availableFonts.join(", ")+"]"],null,3000);
        this.fontInUse = "generic";
        this.FONTDATA = {
          TeX_factor: 1, baselineskip: 1.2, lineH: .8, lineD: .2, ffLineH: .8,
          FONTS: {},
          VARIANT: {
            "normal": {fonts:[]}, "-generic-variant": {fonts:[]},
            "-largeOp": {fonts:[]}, "-smallOp": {fonts:[]}
          }, RANGES: [], DELIMITERS: {}, RULECHAR: 0x2D, REMAP: {}
        };
        HUB.Startup.signal.Post("HTML-CSS Jax - no valid font");
      }
      this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js");
    },

    Startup: function () {
      //  Set up event handling
      EVENT = MathJax.Extension.MathEvents.Event;
      TOUCH = MathJax.Extension.MathEvents.Touch;
      HOVER = MathJax.Extension.MathEvents.Hover;
      this.ContextMenu = EVENT.ContextMenu;
      this.Mousedown   = EVENT.AltContextMenu;
      this.Mouseover   = HOVER.Mouseover;
      this.Mouseout    = HOVER.Mouseout;
      this.Mousemove   = HOVER.Mousemove;

      // Make hidden div for when math is in a display:none block
      this.hiddenDiv = this.Element("div",{
        style:{visibility:"hidden", overflow:"hidden", position:"absolute", top:0,
               height:"1px", width: "auto", padding:0, border:0, margin:0,
               textAlign:"left", textIndent:0, textTransform:"none",
               lineHeight:"normal", letterSpacing:"normal", wordSpacing:"normal"}
      });
      if (!document.body.firstChild) {document.body.appendChild(this.hiddenDiv)}
        else {document.body.insertBefore(this.hiddenDiv,document.body.firstChild)}
      this.hiddenDiv = this.addElement(this.hiddenDiv,"div",{id:"MathJax_Hidden"});

      // Determine pixels per inch
      var div = this.addElement(this.hiddenDiv,"div",{style:{width:"5in"}});
      this.pxPerInch = div.offsetWidth/5; this.hiddenDiv.removeChild(div);

      // Markers used by getW
      this.startMarker = this.createStrut(this.Element("span"),10,true);
      this.endMarker = this.addText(this.Element("span"),"x").parentNode;

      // Used in getHD
      this.HDspan = this.Element("span");
      if (this.operaHeightBug) {this.createStrut(this.HDspan,0)}
      if (this.msieInlineBlockAlignBug) {
        this.HDimg = this.addElement(this.HDspan,"img",{style:{height:"0px", width:"1px"}});
        try {this.HDimg.src = "about:blank"} catch(err) {}
      } else {
        this.HDimg = this.createStrut(this.HDspan,0);
      }

      // Used in preTranslate to get scaling factors
      this.EmExSpan = this.Element("span",
        {style:{position:"absolute","font-size-adjust":"none"}},
        [
          ["span",{className:"MathJax_ExBox"}],
          ["span",{className:"MathJax"},
            [["span",{className:"MathJax_EmBox"}]]
          ]
        ]
      );

      // Used in preTranslate to get linebreak width
      this.linebreakSpan = this.Element("span",null,
        [["hr",{style: {width:"100%", size:1, padding:0, border:0, margin:0}}]]);

      // Set up styles and preload web fonts
      return AJAX.Styles(this.config.styles,["InitializeHTML",this]);
    },
    
    removeSTIXfonts: function (fonts) {
      //
      //  Opera doesn't display large chunks of the STIX fonts, and
      //  Safari/Windows doesn't display Plane1,
      //  so disable STIX for these browsers.
      //
      for (var i = 0, m = fonts.length; i < m; i++)
        {if (fonts[i] === "STIX") {fonts.splice(i,1); m--; i--;}}
      if (this.config.preferredFont === "STIX") {this.config.preferredFont = fonts[0]}
    },

    PreloadWebFonts: function () {
      if (!HTMLCSS.allowWebFonts || !HTMLCSS.config.preloadWebFonts) return;
      for (var i = 0, m = HTMLCSS.config.preloadWebFonts.length; i < m; i++) {
        var FONT = HTMLCSS.FONTDATA.FONTS[HTMLCSS.config.preloadWebFonts[i]];
        if (!FONT.available) {HTMLCSS.Font.testFont(FONT)}
      }
    },
    
    //
    //  Handle initialization that requires styles to be set up
    //
    InitializeHTML: function () {
      this.PreloadWebFonts();
      //
      //  Get the default sizes (need styles in place to do this)
      //
      document.body.appendChild(this.EmExSpan);
      document.body.appendChild(this.linebreakSpan);
      this.defaultEx    = this.EmExSpan.firstChild.offsetHeight/60;
      this.defaultEm    = this.EmExSpan.lastChild.firstChild.offsetHeight/60;
      this.defaultWidth = this.linebreakSpan.firstChild.offsetWidth;
      document.body.removeChild(this.linebreakSpan);
      document.body.removeChild(this.EmExSpan);
    },
    
    preTranslate: function (state) {
      var scripts = state.jax[this.id], i, m = scripts.length,
          script, prev, span, div, test, jax, ex, em, scale, maxwidth, relwidth = false,
          linebreak = this.config.linebreaks.automatic, width = this.config.linebreaks.width;
      if (linebreak) {
        relwidth = (width.match(/^\s*(\d+(\.\d*)?%\s*)?container\s*$/) != null);
        if (relwidth) {width = width.replace(/\s*container\s*/,"")}
          else {maxwidth = this.defaultWidth}
        if (width === "") {width = "100%"}
      } else {maxwidth = 100000} // a big width, so no implicit line breaks
      //
      //  Loop through the scripts
      //
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        //
        //  Remove any existing output
        //
        prev = script.previousSibling;
        if (prev && String(prev.className).match(/^MathJax(_Display)?( MathJax_Processing)?$/))
          {prev.parentNode.removeChild(prev)}
        //
        //  Add the span, and a div if in display mode,
        //  then set the role and mark it as being processed
        //
        jax = script.MathJax.elementJax; if (!jax) continue;
        jax.HTMLCSS = {display: (jax.root.Get("display") === "block")}
        span = div = this.Element("span",{
	  className:"MathJax", id:jax.inputID+"-Frame", isMathJax:true, jaxID:this.id,
          oncontextmenu:EVENT.Menu, onmousedown: EVENT.Mousedown,
          onmouseover:EVENT.Mouseover, onmouseout:EVENT.Mouseout, onmousemove:EVENT.Mousemove,
	  onclick:EVENT.Click, ondblclick:EVENT.DblClick
        });
	if (HUB.Browser.noContextMenu) {
	  span.ontouchstart = TOUCH.start;
	  span.ontouchend = TOUCH.end;
	}
        if (jax.HTMLCSS.display) {
          div = this.Element("div",{className:"MathJax_Display"});
          div.appendChild(span);
        } else if (this.msieDisappearingBug) {span.style.display = "inline-block"}
        //
        //  Mark math for screen readers
        //    (screen readers don't know about role="math" yet, so use "textbox" instead)
        //
        div.setAttribute("role","textbox"); div.setAttribute("aria-readonly","true");
        div.className += " MathJax_Processing";
        script.parentNode.insertBefore(div,script);
        //
        //  Add the test span for determining scales and linebreak widths
        //
        script.parentNode.insertBefore(this.EmExSpan.cloneNode(true),script);
        if (relwidth) {div.parentNode.insertBefore(this.linebreakSpan.cloneNode(true),div)}
      }
      //
      //  Determine the scaling factors for each script
      //  (this only requires one reflow rather than a reflow for each equation)
      //
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        test = script.previousSibling; div = test.previousSibling;
        jax = script.MathJax.elementJax; if (!jax) continue;
        ex = test.firstChild.offsetHeight/60;
        em = test.lastChild.firstChild.offsetHeight/60;
        if (relwidth) {maxwidth = div.previousSibling.firstChild.offsetWidth}
        if (ex === 0 || ex === "NaN") {
          // can't read width, so move to hidden div for processing
          // (this will cause a reflow for each math element that is hidden)
          this.hiddenDiv.appendChild(div);
          jax.HTMLCSS.isHidden = true;
          ex = this.defaultEx; em = this.defaultEm;
          if (relwidth) {maxwidth = this.defaultWidth}
        }
        scale = Math.floor(Math.max(this.config.minScaleAdjust/100,(ex/this.TeX.x_height)/em) * this.config.scale);
        jax.HTMLCSS.scale = scale/100; jax.HTMLCSS.fontSize = scale+"%";
        jax.HTMLCSS.em = jax.HTMLCSS.outerEm = em; this.em = em * scale/100; jax.HTMLCSS.ex = ex;
        jax.HTMLCSS.lineWidth = (linebreak ? this.length2em(width,1,maxwidth/this.em) : 1000000);
      }
      //
      //  Remove the test spans used for determining scales and linebreak widths
      //
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        test = scripts[i].previousSibling;
        jax = scripts[i].MathJax.elementJax; if (!jax) continue;
        if (relwidth) {
          span = test.previousSibling;
          if (!jax.HTMLCSS.isHidden) {span = span.previousSibling}
          span.parentNode.removeChild(span);
        }
        test.parentNode.removeChild(test);
      }
      //
      //  Set state variables used for displaying equations in chunks
      //
      state.HTMLCSSeqn = state.HTMLCSSlast = 0; state.HTMLCSSi = -1;
      state.HTMLCSSchunk = this.config.EqnChunk;
      state.HTMLCSSdelay = false;
    },

    Translate: function (script,state) {
      if (!script.parentNode) return;

      //
      //  If we are supposed to do a chunk delay, do it
      //  
      if (state.HTMLCSSdelay) {
        state.HTMLCSSdelay = false;
        HUB.RestartAfter(MathJax.Callback.Delay(this.config.EqnChunkDelay));
      }

      //
      //  Get the data about the math
      //
      var jax = script.MathJax.elementJax, math = jax.root,
          span = document.getElementById(jax.inputID+"-Frame"),
          div = (jax.HTMLCSS.display ? span.parentNode : span);
      //
      //  Set the font metrics
      //
      this.em = MML.mbase.prototype.em = jax.HTMLCSS.em * jax.HTMLCSS.scale; 
      this.outerEm = jax.HTMLCSS.em; this.scale = jax.HTMLCSS.scale;
      this.linebreakWidth = jax.HTMLCSS.lineWidth;
      span.style.fontSize = jax.HTMLCSS.fontSize;
      //
      //  Typeset the math
      //
      this.initImg(span);
      this.initHTML(math,span);
      math.setTeXclass();
      try {math.toHTML(span,div)} catch (err) {
        if (err.restart) {while (span.firstChild) {span.removeChild(span.firstChild)}}
        throw err;
      }
      //
      //  Put it in place, and remove the processing marker
      //
      if (jax.HTMLCSS.isHidden) {script.parentNode.insertBefore(div,script)}
      div.className = div.className.split(/ /)[0];
      //
      //  Check if we are hiding the math until more is processed
      //
      if (this.hideProcessedMath) {
        //
        //  Hide the math and don't let its preview be removed
        //
        div.className += " MathJax_Processed";
        if (script.MathJax.preview) {
          jax.HTMLCSS.preview = script.MathJax.preview;
          delete script.MathJax.preview;
        }
        //
        //  Check if we should show this chunk of equations
        //
        state.HTMLCSSeqn += (state.i - state.HTMLCSSi); state.HTMLCSSi = state.i;
        if (state.HTMLCSSeqn >= state.HTMLCSSlast + state.HTMLCSSchunk) {
          this.postTranslate(state);
          state.HTMLCSSchunk = Math.floor(state.HTMLCSSchunk*this.config.EqnChunkFactor);
          state.HTMLCSSdelay = true;  // delay if there are more scripts
        }
      }
    },

    postTranslate: function (state) {
      var scripts = state.jax[this.id];
      if (!this.hideProcessedMath) return;
      //
      //  Reveal this chunk of math
      //
      for (var i = state.HTMLCSSlast, m = state.HTMLCSSeqn; i < m; i++) {
        var script = scripts[i];
        if (script && script.MathJax.elementJax) {
          //
          //  Remove the processed marker
          //
          script.previousSibling.className = script.previousSibling.className.split(/ /)[0];
          var data = script.MathJax.elementJax.HTMLCSS;
          //
          //  Remove the preview, if any
          //
          if (data.preview) {
            data.preview.innerHTML = "";
            script.MathJax.preview = data.preview;
            delete data.preview;
          }
        }
      }
      if (this.forceReflow) {
        //  WebKit can misplace some elements that should wrap to the next line
        //  but gets them right ona reflow, so force reflow by toggling a stylesheet
        var sheet = (document.styleSheets||[])[0]||{};
        sheet.disabled = true; sheet.disabled = false;
      }
      //
      //  Save our place so we know what is revealed
      //
      state.HTMLCSSlast = state.HTMLCSSeqn;
    },

    getJaxFromMath: function (math) {
      if (math.parentNode.className === "MathJax_Display") {math = math.parentNode}
      do {math = math.nextSibling} while (math && math.nodeName.toLowerCase() !== "script");
      return HUB.getJaxFor(math);
    },
    getHoverSpan: function (jax,math) {return jax.root.HTMLspanElement()},
    getHoverBBox: function (jax,span,math) {
      var bbox = span.bbox, em = jax.HTMLCSS.outerEm;
      var BBOX = {w:bbox.w*em, h:bbox.h*em, d:bbox.d*em};
      if (bbox.width) {BBOX.width = bbox.width}
      return BBOX;
    },
    
    Zoom: function (jax,span,math,Mw,Mh) {
      //
      //  Re-render at larger size
      //
      span.className = "MathJax";
      span.style.fontSize = jax.HTMLCSS.fontSize;

      //
      //  get em sizes (taken from HTMLCSS.preTranslate)
      //
      var emex = span.appendChild(this.EmExSpan.cloneNode(true));
      var em = emex.lastChild.firstChild.offsetHeight/60;
      this.em = MML.mbase.prototype.em = em;
      this.outerEm = em / jax.HTMLCSS.scale;
      emex.parentNode.removeChild(emex);

      this.idPostfix = "-zoom"; jax.root.toHTML(span,span); this.idPostfix = "";
      var width = jax.root.HTMLspanElement().bbox.width;
      if (width) {
        //  Handle full-width displayed equations
        //  FIXME: this is a hack for now
        span.style.width = Math.floor(Mw-1.5*HTMLCSS.em)+"px"; span.style.display="inline-block";
        var id = (jax.root.id||"MathJax-Span-"+jax.root.spanID)+"-zoom";
        var child = document.getElementById(id).firstChild;
        while (child && child.style.width !== width) {child = child.nextSibling}
        if (child) {child.style.width = "100%"}
      }
      //
      //  Get height and width of zoomed math and original math
      //
      span.style.position = "absolute";
      if (!width) {math.style.position = "absolute"}
      var zW = span.offsetWidth, zH = span.offsetHeight,
          mH = math.offsetHeight, mW = math.offsetWidth;
      if (mW === 0) {mW = math.parentNode.offsetWidth}; // IE7 gets mW == 0?
      span.style.position = math.style.position = "";
      //
      return {Y:-EVENT.getBBox(span).h, mW:mW, mH:mH, zW:zW, zH:zH};
    },

    initImg: function (span) {},
    initHTML: function (math,span) {},
    initFont: function (name) {
      var FONTS = HTMLCSS.FONTDATA.FONTS, AVAIL = HTMLCSS.config.availableFonts;
      if (AVAIL && AVAIL.length && HTMLCSS.Font.testFont(FONTS[name]))
        {FONTS[name].available = true; return null}
      if (!this.allowWebFonts) {return null}
      FONTS[name].isWebFont = true;
      if (HTMLCSS.FontFaceBug) {
        FONTS[name].family = name;
        if (HTMLCSS.msieFontCSSBug) {FONTS[name].family += "-Web"}
      }
      return AJAX.Styles({"@font-face":this.Font.fontFace(name)});
    },

    Remove: function (jax) {
      var span = document.getElementById(jax.inputID+"-Frame");
      if (span) {
        if (jax.HTMLCSS.display) {span = span.parentNode}
        span.parentNode.removeChild(span);
      }
      delete jax.HTMLCSS;
    },
    
    getHD: function (span) {
      var position = span.style.position;
      span.style.position = "absolute";
      this.HDimg.style.height = "0px";
      span.appendChild(this.HDspan);
      var HD = {h:span.offsetHeight};
      this.HDimg.style.height = HD.h+"px";
      HD.d = span.offsetHeight - HD.h; HD.h -= HD.d;
      HD.h /= this.em; HD.d /= this.em;
      span.removeChild(this.HDspan);
      span.style.position = position;
      return HD;
    },
    getW: function (span) {
      var W, H, w = (span.bbox||{}).w, start = span;
      if (span.bbox && span.bbox.exactW) {return w}
      if ((span.bbox && w >= 0 && !this.initialSkipBug) || this.negativeBBoxes || !span.firstChild) {
        W = span.offsetWidth; H = span.parentNode.offsetHeight;
      } else if (span.bbox && w < 0 && this.msieNegativeBBoxBug) {
        W = -span.offsetWidth, H = span.parentNode.offsetHeight;
      } else {
        // IE can't deal with a space at the beginning, so put something else first
        if (this.initialSkipBug) {
          var position = span.style.position; span.style.position = "absolute";
          start = this.startMarker; span.insertBefore(start,span.firstChild)
        }
        span.appendChild(this.endMarker);
        W = this.endMarker.offsetLeft - start.offsetLeft;
        span.removeChild(this.endMarker);
        if (this.initialSkipBug) {span.removeChild(start); span.style.position = position}
      }
      if (H != null) {span.parentNode.HH = H/this.em}
      return W/this.em;
    },
    Measured: function (span,parent) {
      var bbox = span.bbox;
      if (bbox.width == null && bbox.w && !bbox.isMultiline) {
        var w = this.getW(span);
        bbox.rw += w - bbox.w;
        bbox.w = w; bbox.exactW = true;
      }
      if (!parent) {parent = span.parentNode}
      if (!parent.bbox) {parent.bbox = bbox}
      return span;
    },
    Remeasured: function (span,parent) {
      parent.bbox = this.Measured(span,parent).bbox;
    },
    MeasureSpans: function (SPANS) {
      var spans = [], span, i, m, bbox, start, end, W, parent;
      //
      //  Insert the needed markers
      // 
      for (i = 0, m = SPANS.length; i < m; i++) {
        span = SPANS[i]; if (!span) continue;
        bbox = span.bbox; parent = this.parentNode(span);
        if (bbox.exactW || bbox.width || bbox.w === 0 || bbox.isMultiline) {
          if (!parent.bbox) {parent.bbox = bbox}
          continue;
        }
        if (this.negativeBBoxes || !span.firstChild || (bbox.w >= 0 && !this.initialSkipBug) ||
            (bbox.w < 0 && this.msieNegativeBBoxBug)) {
          spans.push([span]);
        } else if (this.initialSkipBug) {
          start = this.startMarker.cloneNode(true); end = this.endMarker.cloneNode(true);
          span.insertBefore(start,span.firstChild); span.appendChild(end);
          spans.push([span,start,end,span.style.position]); span.style.position = "absolute";
        } else {
          end = this.endMarker.cloneNode(true);
          span.appendChild(end); spans.push([span,null,end]);
        }
      }
      //
      //  Read the widths and heights
      //
      for (i = 0, m = spans.length; i < m; i++) {
        span = spans[i][0]; bbox = span.bbox; parent = this.parentNode(span);
        if ((bbox.w >= 0 && !this.initialSkipBug) || this.negativeBBoxes || !span.firstChild) {
          W = span.offsetWidth; parent.HH = parent.offsetHeight/this.em;
        } else if (bbox.w < 0 && this.msieNegativeBBoxBug) {
          W = -span.offsetWidth, parent.HH = parent.offsetHeight/this.em;
        } else {
          W = spans[i][2].offsetLeft - ((spans[i][1]||{}).offsetLeft||0);
        }
        W /= this.em;
        bbox.rw += W - bbox.w;
        bbox.w = W; bbox.exactW = true;
        if (!parent.bbox) {parent.bbox = bbox}
      }
      //
      //  Remove markers
      //
      for (i = 0, m = spans.length; i < m; i++) {
        span = spans[i];
        if (span[1]) {span[1].parentNode.removeChild(span[1]), span[0].style.position = span[3]}
        if (span[2]) {span[2].parentNode.removeChild(span[2])}
      }
    },

    Em: function (m) {
      if (Math.abs(m) < .0006) {return "0em"}
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    EmRounded: function (m) {
      m = (Math.round(m*HTMLCSS.em)+.05)/HTMLCSS.em;
      if (Math.abs(m) < .0006) {return "0em"}
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    unEm: function (m) {
      return parseFloat(m);
    },
    Px: function (m) {
      m *= this.em; var s = (m < 0? "-" : "");
      return s+Math.abs(m).toFixed(1).replace(/\.?0+$/,"") + "px";
    },
    unPx: function (m) {
      return parseFloat(m)/this.em;
    },
    Percent: function (m) {
      return (100*m).toFixed(1).replace(/\.?0+$/,"") + "%";
    },
    length2em: function (length,mu,size) {
      if (typeof(length) !== "string") {length = length.toString()}
      if (length === "") {return ""}
      if (length === MML.SIZE.NORMAL) {return 1}
      if (length === MML.SIZE.BIG)    {return 2}
      if (length === MML.SIZE.SMALL)  {return .71}
      if (length === "infinity")      {return HTMLCSS.BIGDIMEN}
      var factor = this.FONTDATA.TeX_factor;
      if (length.match(/mathspace$/)) {return HTMLCSS.MATHSPACE[length]*factor}
      var match = length.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
      var m = parseFloat(match[1]||"1"), unit = match[2];
      if (size == null) {size = 1}; if (mu == null) {mu = 1}
      if (unit === "em") {return m * factor}
      if (unit === "ex") {return m * HTMLCSS.TeX.x_height * factor}
      if (unit === "%")  {return m / 100 * size}
      if (unit === "px") {return m / HTMLCSS.em}
      if (unit === "pt") {return m / 10 * factor}                        // 10 pt to an em
      if (unit === "pc") {return m * 1.2 * factor}                       // 12 pt to a pc
      if (unit === "in") {return m * this.pxPerInch / HTMLCSS.em}
      if (unit === "cm") {return m * this.pxPerInch / HTMLCSS.em / 2.54} // 2.54 cm to an inch
      if (unit === "mm") {return m * this.pxPerInch / HTMLCSS.em / 25.4} // 10 mm to a cm
      if (unit === "mu") {return m / 18 * factor * mu} // 18mu to an em for the scriptlevel
      return m*factor*size;  // relative to given size (or 1em as default)
    },
    thickness2em: function (length,mu) {
      var thick = HTMLCSS.TeX.rule_thickness;
      if (length === MML.LINETHICKNESS.MEDIUM) {return thick}
      if (length === MML.LINETHICKNESS.THIN) {return .67*thick}
      if (length === MML.LINETHICKNESS.THICK) {return 1.67*thick}
      return this.length2em(length,mu,thick);
    },
    
    getPadding: function (span) {
      var padding = {top:0, right:0, bottom:0, left:0}, has = false;
      for (var id in padding) {if (padding.hasOwnProperty(id)) {
        var pad = span.style["padding"+id.charAt(0).toUpperCase()+id.substr(1)];
        if (pad) {padding[id] = this.length2em(pad); has = true;}
      }}
      return (has ? padding : false);
    },
    getBorders: function (span) {
      var border = {top:0, right:0, bottom:0, left:0}, css = {}, has = false;
      for (var id in border) {if (border.hasOwnProperty(id)) {
        var ID = "border"+id.charAt(0).toUpperCase()+id.substr(1);
        var style = span.style[ID+"Style"];
        if (style) {
          has = true;
          border[id] = this.length2em(span.style[ID+"Width"]);
          css[ID] = [span.style[ID+"Width"],span.style[ID+"Style"],span.style[ID+"Color"]].join(" ");
        }
      }}
      border.css = css;
      return (has ? border : false);
    },
    setBorders: function (span,borders) {
      if (borders) {
        for (var id in borders.css) {if (borders.css.hasOwnProperty(id)) {
          span.style[id] = borders.css[id];
        }}
      }
    },

    createStrut: function (span,h,before) {
      var strut = this.Element("span",{
        isMathJax: true,
        style:{display:"inline-block", overflow:"hidden", height:h+"px",
               width:"1px", marginRight:"-1px"}
      });
      if (before) {span.insertBefore(strut,span.firstChild)} else {span.appendChild(strut)}
      return strut;
    },
    createBlank: function (span,w,before) {
      var blank = this.Element("span",{
        isMathJax: true,
        style: {display:"inline-block", overflow:"hidden", height:"1px", width:this.Em(w)}
      });
      if (before) {span.insertBefore(blank,span.firstChild)} else {span.appendChild(blank)}
      return blank;
    },
    createShift: function (span,w,before) {
      var space = this.Element("span",{style:{marginLeft:this.Em(w)}, isMathJax:true});
      if (before) {span.insertBefore(space,span.firstChild)} else {span.appendChild(space)}
      return space;
    },
    createSpace: function (span,h,d,w,color,isSpace) {
      if (h < -d) {d = -h} // make sure h is above d
      var H = this.Em(h+d), D = this.Em(-d);
      if (this.msieInlineBlockAlignBug) {D = this.Em(HTMLCSS.getHD(span.parentNode).d-d)}
      if (span.isBox || isSpace) {
	var scale = (span.scale == null ? 1 : span.scale);
	span.bbox = {exactW: true, h: h*scale, d: d*scale, w: w*scale, rw: w*scale, lw: 0};
        span.style.height = H; span.style.verticalAlign = D;
        span.HH = (h+d)*scale;
      } else {
        span = this.addElement(span,"span",{style: {height:H, verticalAlign:D}, isMathJax:true});
      }
      if (w >= 0) {
        span.style.width = this.Em(w);
        span.style.display = "inline-block";
        span.style.overflow = "hidden";       // for IE in quirks mode
      } else {
        if (this.msieNegativeSpaceBug) {span.style.height = ""}
        span.style.marginLeft = this.Em(w);
        if (HTMLCSS.safariNegativeSpaceBug && span.parentNode.firstChild == span)
          {this.createBlank(span,0,true)}
      }
      if (color && color !== MML.COLOR.TRANSPARENT) {
        span.style.backgroundColor = color;
        span.style.position = "relative"; // make sure it covers earlier items
      }
      return span;
    },
    createRule: function (span,h,d,w,color) {
      if (h < -d) {d = -h} // make sure h is above d
      var min = HTMLCSS.TeX.min_rule_thickness, f = 1;
      // If rule is very thin, make it at least min_rule_thickness so it doesn't disappear
      if (w > 0 && w*this.em < min) {w = min/this.em}
      if (h+d > 0 && (h+d)*this.em < min) {f = 1/(h+d)*(min/this.em); h *= f; d *= f}
      if (!color) {color = "solid"} else {color = "solid "+color}
      color = this.Em(w)+" "+color;
      var H = (f === 1 ? this.Em(h+d) : min+"px"), D = this.Em(-d);
      var rule = this.addElement(span,"span",{
        style: {borderLeft: color, display: "inline-block", overflow:"hidden",
                width:0, height:H, verticalAlign:D},
        bbox: {h:h, d:d, w:w, rw:w, lw:0, exactW:true}, noAdjust:true, HH:h+d, isMathJax:true
      });
      if (w > 0 && rule.offsetWidth == 0) {rule.style.width = this.Em(w)}
      if (span.isBox || span.className == "mspace") {span.bbox = rule.bbox, span.HH = h+d}
      return rule;
    },
    createFrame: function (span,h,d,w,t,style) {
      if (h < -d) {d = -h} // make sure h is above d
      var T = 2*t;
      if (this.msieFrameSizeBug) {if (w < T) {w = T}; if (h+d < T) {h = T-d}}
      if (this.msieBorderWidthBug) {T = 0}
      var H = this.Em(h+d-T), D = this.Em(-d-t), W = this.Em(w-T);
      var B = this.Em(t)+" "+style;
      var frame = this.addElement(span,"span",{
        style: {border: B, display:"inline-block", overflow:"hidden", width:W, height:H},
        bbox: {h:h, d:d, w:w, rw:w, lw:0, exactW:true}, noAdjust: true, HH:h+d, isMathJax:true
      });
      if (D) {frame.style.verticalAlign = D}
      return frame;
    },
    
    //
    //  Find parent span (skipping over <a> tags)
    //
    parentNode: function (span) {
      var parent = span.parentNode;
      if (parent.nodeName.toLowerCase() === "a") {parent = parent.parentNode}
      return parent;
    },

    createStack: function (span,nobbox,w) {
      if (this.msiePaddingWidthBug) {this.createStrut(span,0)}
      var relativeW = String(w).match(/%$/);
      var W = (!relativeW && w != null ? w : 0);
      span = this.addElement(span,"span",{
        noAdjust: true, HH: 0, isMathJax: true,
        style: {display:"inline-block", position:"relative",
                width:(relativeW ? "100%" : this.Em(W)), height:0}
      });
      if (!nobbox) {
        span.parentNode.bbox = span.bbox = {
          exactW: true,
          h: -this.BIGDIMEN, d: -this.BIGDIMEN,
          w:W, lw: this.BIGDIMEN, rw: (!relativeW && w != null ? w : -this.BIGDIMEN)
        };
        if (relativeW) {span.bbox.width = w}
      }
      return span;
    },
    createBox: function (span,w) {
      var box = this.addElement(span,"span",{style:{position:"absolute"}, isBox: true, isMathJax:true});
      if (w != null) {box.style.width = w}
      return box;
    },
    addBox: function (span,box) {
      box.style.position = "absolute"; box.isBox = box.isMathJax = true;
      return span.appendChild(box);
    },
    placeBox: function (span,x,y,noclip) {
      span.isMathJax = true;
      var parent = HTMLCSS.parentNode(span), bbox = span.bbox, BBOX = parent.bbox;
      if (this.msiePlaceBoxBug) {this.addText(span,this.NBSP)}
      if (this.imgSpaceBug) {this.addText(span,this.imgSpace)}
      // Place the box
      var HH, dx = 0;
      if (span.HH != null) {HH = span.HH}
        else if (bbox) {HH = Math.max(3,bbox.h+bbox.d)}
        else {HH = span.offsetHeight/this.em}
      if (!span.noAdjust) {
        HH += 1;
        HH = Math.round(HH*this.em)/this.em; // make this an integer number of pixels (for Chrome)
        if (this.msieInlineBlockAlignBug) {
          this.addElement(span,"img",{
            className:"MathJax_strut", border:0, src:"about:blank", isMathJax:true,
            style:{width:0,height:this.Em(HH)}
          });
        } else {
          this.addElement(span,"span",{
            isMathJax: true, style:{display:"inline-block",width:0,height:this.Em(HH)}
          });
          if (HTMLCSS.chromeHeightBug) 
            {HH -= (span.lastChild.offsetHeight - Math.round(HH*this.em))/this.em}
        }
      }
      // Clip so that bbox doesn't include extra height and depth
      if (bbox) {
        if (this.initialSkipBug) {
          if (bbox.lw < 0) {dx = bbox.lw; HTMLCSS.createBlank(span,-dx,true)}
          if (bbox.rw > bbox.w) {HTMLCSS.createBlank(span,bbox.rw-bbox.w+.1)}
        }
        if (!this.msieClipRectBug && !bbox.noclip && !noclip) {
          var dd = 3/this.em;
          var H = (bbox.H == null ? bbox.h : bbox.H), D = (bbox.D == null ? bbox.d : bbox.D);
          var t = HH - H - dd, b = HH + D + dd, l = bbox.lw - 3*dd, r = 1000;
          if (this.initialSkipBug && bbox.lw < 0) {l = -3*dd}
          if (bbox.isFixed) {r = bbox.width-l}
          span.style.clip = "rect("+this.Em(t)+" "+this.Em(r)+" "+this.Em(b)+" "+this.Em(l)+")";
        }
      }
      // Place the box
      span.style.top = this.Em(-y-HH);
      span.style.left = this.Em(x+dx);
      // Update the bounding box
      if (bbox && BBOX) {
        if (bbox.H != null && (BBOX.H == null || bbox.H + y > BBOX.H)) {BBOX.H = bbox.H + y}
        if (bbox.D != null && (BBOX.D == null || bbox.D - y > BBOX.D)) {BBOX.D = bbox.D - y}
        if (bbox.h + y > BBOX.h) {BBOX.h = bbox.h + y}
        if (bbox.d - y > BBOX.d) {BBOX.d = bbox.d - y}
        if (BBOX.H != null && BBOX.H <= BBOX.h) {delete BBOX.H}
        if (BBOX.D != null && BBOX.D <= BBOX.d) {delete BBOX.D}
        if (bbox.w + x > BBOX.w) {
          BBOX.w = bbox.w + x;
          if (BBOX.width == null) {parent.style.width = this.Em(BBOX.w)}
        }
        if (bbox.rw + x > BBOX.rw) {BBOX.rw = bbox.rw + x}
        if (bbox.lw + x < BBOX.lw) {BBOX.lw = bbox.lw + x}
        if (bbox.width != null && !bbox.isFixed) {
          if (BBOX.width == null) {
            parent.style.width = BBOX.width = "100%";
            if (bbox.minWidth) {parent.style.minWidth = BBOX.minWidth = bbox.minWidth}
          }
          span.style.width = bbox.width;
        }
      }
    },
    alignBox: function (span,align,y) {
      this.placeBox(span,0,y); // set y position (and left aligned)
      var bbox = span.bbox; if (bbox.isMultiline) return;
      var isRelative = bbox.width != null && !bbox.isFixed;
      var r = 0, c = -bbox.w/2, l = "50%";
      if (this.initialSkipBug) {r = bbox.w-bbox.rw-.1; c += bbox.lw}
      if (this.msieMarginScaleBug) {c = (c*this.em) + "px"} else {c = this.Em(c)}
      if (isRelative) {c = ""; l = (50 - parseFloat(bbox.width)/2) + "%"}
      HUB.Insert(span.style,({
        right:  {left:"", right: this.Em(r)},
        center: {left:l, marginLeft: c}
      })[align]);
    },
    setStackWidth: function (span,w) {
      if (typeof(w) === "number") {
        span.style.width = this.Em(Math.max(0,w));
        var bbox = span.bbox; if (bbox) {bbox.w = w; bbox.exactW = true};
        bbox = span.parentNode.bbox; if (bbox) {bbox.w = w; bbox.exactW = true};
      } else {
        span.style.width = span.parentNode.style.width = "100%";
        if (span.bbox) {span.bbox.width = w}
        if (span.parentNode.bbox) {span.parentNode.bbox.width = w}
      }
    },

    createDelimiter: function (span,code,HW,scale,font) {
      if (!code) {
        span.bbox = {h:0, d:0, w:this.TeX.nulldelimiterspace, lw: 0};
        span.bbox.rw = span.bbox.w;
        this.createSpace(span,span.bbox.h,span.bbox.d,span.bbox.w);
        return;
      }
      if (!scale) {scale = 1};
      if (!(HW instanceof Array)) {HW = [HW,HW]}
      var hw = HW[1]; HW = HW[0];
      var delim = {alias: code};
      while (delim.alias) {
        code = delim.alias; delim = this.FONTDATA.DELIMITERS[code];
        if (!delim) {delim = {HW: [0,this.FONTDATA.VARIANT[MML.VARIANT.NORMAL]]}}
      }
      if (delim.load) {HUB.RestartAfter(AJAX.Require(this.fontDir+"/fontdata-"+delim.load+".js"))}
      for (var i = 0, m = delim.HW.length; i < m; i++) {
        if (delim.HW[i][0]*scale >= HW-.01 || (i == m-1 && !delim.stretch)) {
          if (delim.HW[i][2]) {scale *= delim.HW[i][2]}
          if (delim.HW[i][3]) {code = delim.HW[i][3]}
          var chr = this.addElement(span,"span");
          this.createChar(chr,[code,delim.HW[i][1]],scale,font);
          span.bbox = chr.bbox;
          span.offset = .65 * span.bbox.w;
          span.scale = scale;
          return;
        }
      }
      if (delim.stretch) {this["extendDelimiter"+delim.dir](span,hw,delim.stretch,scale,font)}
    },
    extendDelimiterV: function (span,H,delim,scale,font) {
      var stack = this.createStack(span,true);
      var top = this.createBox(stack), bot = this.createBox(stack);
      this.createChar(top,(delim.top||delim.ext),scale,font);
      this.createChar(bot,(delim.bot||delim.ext),scale,font);
      var ext = {bbox:{w:0,lw:0,rw:0}}, mid = ext, EXT;
      var h = top.bbox.h + top.bbox.d + bot.bbox.h + bot.bbox.d;
      var y = -top.bbox.h; this.placeBox(top,0,y,true); y -= top.bbox.d;
      if (delim.mid) {
        mid = this.createBox(stack); this.createChar(mid,delim.mid,scale,font);
        h += mid.bbox.h + mid.bbox.d;
      }
      if (delim.min && H < h*delim.min) {H = h*delim.min}
      if (H > h) {
        ext = this.Element("span"); this.createChar(ext,delim.ext,scale,font);
        var eH = ext.bbox.h + ext.bbox.d, eh = eH - .05, n, N, k = (delim.mid ? 2 : 1);
        N = n = Math.min(Math.ceil((H-h)/(k*eh)), this.maxStretchyParts);
        if (!delim.fullExtenders) {eh = (H-h)/(k*n)}
        var dy = (n/(n+1))*(eH - eh); eh = eH - dy; y += dy + eh - ext.bbox.h;
        while (k-- > 0) {
          while (n-- > 0) {
            if (!this.msieCloneNodeBug) {EXT = ext.cloneNode(true)}
              else {EXT = this.Element("span"); this.createChar(EXT,delim.ext,scale,font)}
            EXT.bbox = ext.bbox;
            y -= eh; this.placeBox(this.addBox(stack,EXT),0,y,true);
          }
          y += dy - ext.bbox.d;
          if (delim.mid && k) {
            this.placeBox(mid,0,y-mid.bbox.h,true); n = N;
            y += -(mid.bbox.h + mid.bbox.d) + dy + eh - ext.bbox.h;
          }
        }
      } else {
        y += (h - H)/2;
        if (delim.mid) {this.placeBox(mid,0,y-mid.bbox.h,true); y += -(mid.bbox.h + mid.bbox.d)}
        y += (h - H)/2;
      }
      this.placeBox(bot,0,y-bot.bbox.h,true); y -= bot.bbox.h + bot.bbox.d;
      span.bbox = {
        w:  Math.max(top.bbox.w,ext.bbox.w,bot.bbox.w,mid.bbox.w),
        lw: Math.min(top.bbox.lw,ext.bbox.lw,bot.bbox.lw,mid.bbox.lw),
        rw: Math.max(top.bbox.rw,ext.bbox.rw,bot.bbox.rw,mid.bbox.rw),
        h: 0, d: -y, exactW: true
      }
      span.scale = scale;
      span.offset = .55 * span.bbox.w;
      span.isMultiChar = true;
      this.setStackWidth(stack,span.bbox.w);
    },
    extendDelimiterH: function (span,W,delim,scale,font) {
      var stack = this.createStack(span,true);
      var left = this.createBox(stack), right = this.createBox(stack);
      this.createChar(left,(delim.left||delim.rep),scale,font);
      this.createChar(right,(delim.right||delim.rep),scale,font);
      var rep = this.Element("span"); this.createChar(rep,delim.rep,scale,font);
      var mid = {bbox: {h:-this.BIGDIMEN, d:-this.BIGDIMEN}}, REP;
      this.placeBox(left,-left.bbox.lw,0,true);
      var w = (left.bbox.rw - left.bbox.lw) + (right.bbox.rw - right.bbox.lw) - .05,
          x = left.bbox.rw - left.bbox.lw - .025, dx;
      if (delim.mid) {
        mid = this.createBox(stack); this.createChar(mid,delim.mid,scale,font);
        w += mid.bbox.w;
      }
      if (delim.min && W < w*delim.min) {W = w*delim.min}
      if (W > w) {
        var rW = rep.bbox.rw-rep.bbox.lw, rw = rW - .05, n, N, k = (delim.mid ? 2 : 1);
        N = n = Math.min(Math.ceil((W-w)/(k*rw)), this.maxStretchyParts);
        if (!delim.fillExtenders) {rw = (W-w)/(k*n)}
        dx = (n/(n+1))*(rW - rw); rw = rW - dx; x -= rep.bbox.lw + dx;
        while (k-- > 0) {
          while (n-- > 0) {
            if (!this.cloneNodeBug) {REP = rep.cloneNode(true)}
              else {REP = this.Element("span"); this.createChar(REP,delim.rep,scale,font)}
            REP.bbox = rep.bbox;
            this.placeBox(this.addBox(stack,REP),x,0,true); x += rw;
          }
          if (delim.mid && k) {this.placeBox(mid,x,0,true); x += mid.bbox.w - dx; n = N}
        }
      } else {
        x -= (w - W)/2;
        if (delim.mid) {this.placeBox(mid,x,0,true); x += mid.bbox.w};
        x -= (w - W)/2;
      }
      this.placeBox(right,x,0,true);
      span.bbox = {
        w: x+right.bbox.rw, lw: 0, rw: x+right.bbox.rw,
        H: Math.max(left.bbox.h,rep.bbox.h,right.bbox.h,mid.bbox.h),
        D: Math.max(left.bbox.d,rep.bbox.d,right.bbox.d,mid.bbox.d),
        h: rep.bbox.h, d: rep.bbox.d, exactW: true
      }
      span.scale = scale;
      span.isMultiChar = true;
      this.setStackWidth(stack,span.bbox.w);
    },
    createChar: function (span,data,scale,font) {
      span.isMathJax = true;
      var SPAN = span, text = "", variant = {fonts: [data[1]], noRemap:true};
      if (font && font === MML.VARIANT.BOLD) {variant.fonts = [data[1]+"-bold",data[1]]}
      if (typeof(data[1]) !== "string") {variant = data[1]}
      if (data[0] instanceof Array) {
        for (var i = 0, m = data[0].length; i < m; i++) {text += String.fromCharCode(data[0][i])}
      } else {text = String.fromCharCode(data[0])}
      if (data[4]) {scale *= data[4]}
      if (scale !== 1 || data[3]) {
	SPAN = this.addElement(span,"span",{style:{fontSize: this.Percent(scale)}, scale:scale, isMathJax:true});
        this.handleVariant(SPAN,variant,text);
        span.bbox = SPAN.bbox;
      } else {this.handleVariant(span,variant,text)}
      if (data[2]) {span.style.marginLeft = this.Em(data[2])}     // x offset
      if (data[3]) {                                              // y offset
        span.firstChild.style.verticalAlign = this.Em(data[3]);
        span.bbox.h += data[3]; if (span.bbox.h < 0) {span.bbox.h = 0}
      }
      if (data[5]) {span.bbox.h += data[5]}  // extra height
      if (data[6]) {span.bbox.d += data[6]}  // extra depth
      //  Handle combining characters by adding a non-breaking space so it shows up
      if (this.AccentBug && span.bbox.w === 0) {SPAN.firstChild.nodeValue += this.NBSP}
    },
    positionDelimiter: function (span,h) {
      h -= span.bbox.h; span.bbox.d -= h; span.bbox.h += h;
      if (h) {
        if (this.safariVerticalAlignBug || this.konquerorVerticalAlignBug ||
           (this.operaVerticalAlignBug && span.isMultiChar)) {
          if (span.firstChild.style.display === "" && span.style.top !== "")
            {span = span.firstChild; h -= HTMLCSS.unEm(span.style.top)}
          span.style.position = "relative";
          span.style.top = this.Em(-h);
        } else {
          span.style.verticalAlign = this.Em(h);
          if (HTMLCSS.ffVerticalAlignBug) {HTMLCSS.createRule(span.parentNode,span.bbox.h,0,0)}
        }
      }
    },

    handleVariant: function (span,variant,text) {
      var newtext = "", n, c, font, VARIANT, SPAN = span, force = !!span.style.fontFamily;
      if (text.length === 0) return;
      if (!span.bbox) {
        span.bbox = {
          w: 0, h: -this.BIGDIMEN, d: -this.BIGDIMEN,
          rw: -this.BIGDIMEN, lw: this.BIGDIMEN
        };
      }
      if (!variant) {variant = this.FONTDATA.VARIANT[MML.VARIANT.NORMAL]}
      VARIANT = variant;
      for (var i = 0, m = text.length; i < m; i++) {
        variant = VARIANT;
        n = text.charCodeAt(i); c = text.charAt(i);
        if (n >= 0xD800 && n < 0xDBFF) {
          i++; n = (((n-0xD800)<<10)+(text.charCodeAt(i)-0xDC00))+0x10000;
          if (this.FONTDATA.RemapPlane1) {
            var nv = this.FONTDATA.RemapPlane1(n,variant);
            n = nv.n; variant = nv.variant;
          }
        } else {
          var id, M, RANGES = this.FONTDATA.RANGES;
          for (id = 0, M = RANGES.length; id < M; id++) {
            if (RANGES[id].name === "alpha" && variant.noLowerCase) continue;
            var N = variant["offset"+RANGES[id].offset];
            if (N && n >= RANGES[id].low && n <= RANGES[id].high) {
              if (RANGES[id].remap && RANGES[id].remap[n]) {
                n = N + RANGES[id].remap[n];
              } else {
                n = n - RANGES[id].low + N;
                if (RANGES[id].add) {n += RANGES[id].add}
              }
              if (variant["variant"+RANGES[id].offset])
                {variant = this.FONTDATA.VARIANT[variant["variant"+RANGES[id].offset]]}
              break;
            }
          }
        }
        if (variant.remap && variant.remap[n]) {
          if (variant.remap[n] instanceof Array) {
            var remap = variant.remap[n];
            n = remap[0]; variant = this.FONTDATA.VARIANT[remap[1]];
          } else if (typeof(variant.remap[n]) === "string") {
            text = variant.remap[n]+text.substr(i+1);
            i = 0; m = text.length; n = text.charCodeAt(0);
          } else {
            n = variant.remap[n];
            if (variant.remap.variant) {variant = this.FONTDATA.VARIANT[variant.remap.variant]}
          }
        }
        if (this.FONTDATA.REMAP[n] && !variant.noRemap) {
          n = this.FONTDATA.REMAP[n];
          if (n instanceof Array) {variant = this.FONTDATA.VARIANT[n[1]]; n = n[0]}
          if (typeof(n) === "string") {
            text = n+text.substr(i+1);
            i = 0; m = text.length; n = n.charCodeAt(0);
          }
        }
        font = this.lookupChar(variant,n); c = font[n];
        if (force || (!this.checkFont(font,SPAN.style) && !c[5].img)) {
          if (newtext.length) {this.addText(SPAN,newtext); newtext = ""};
          var addSpan = !!SPAN.style.fontFamily || !!span.style.fontStyle ||
                        !!span.style.fontWeight || !font.directory || force; force = false;
          if (SPAN !== span) {addSpan = !this.checkFont(font,span.style); SPAN = span}
          if (addSpan) {SPAN = this.addElement(span,"span",{isMathJax:true, subSpan:true})}
          this.handleFont(SPAN,font,SPAN !== span);
        }
        newtext = this.handleChar(SPAN,font,c,n,newtext);
        if (!(c[5]||{}).space) {
          if (c[0]/1000 > span.bbox.h) {span.bbox.h = c[0]/1000}
          if (c[1]/1000 > span.bbox.d) {span.bbox.d = c[1]/1000}
        }
        if (span.bbox.w + c[3]/1000 < span.bbox.lw) {span.bbox.lw = span.bbox.w + c[3]/1000}
        if (span.bbox.w + c[4]/1000 > span.bbox.rw) {span.bbox.rw = span.bbox.w + c[4]/1000}
        span.bbox.w += c[2]/1000;
      }
      if (newtext.length) {this.addText(SPAN,newtext)}
      if (span.scale && span.scale !== 1) {
        span.bbox.h *= span.scale; span.bbox.d *= span.scale;
        span.bbox.w *= span.scale; span.bbox.lw *= span.scale; span.bbox.rw *= span.scale;
      }
      if (text.length == 1 && font.skew && font.skew[n]) {span.bbox.skew = font.skew[n]}
    },
    checkFont: function (font,style) {
      var weight = (style.fontWeight||"normal");
      if (weight.match(/^\d+$/)) {weight = (parseInt(weight) >= 600 ? "bold" : "normal")}
      return (font.family.replace(/'/g,"") === style.fontFamily.replace(/'/g,"") &&
             (font.style||"normal") === (style.fontStyle||"normal") &&
             (font.weight||"normal") === weight);
    },

    handleFont: function (span,font,force) {
      span.style.fontFamily = font.family;
      if (!font.directory) {span.style.fontSize = Math.floor(100/HTMLCSS.scale+.5) + "%"}
      if (!(HTMLCSS.FontFaceBug && font.isWebFont)) {
        var style  = font.style  || "normal", weight = font.weight || "normal";
        if (style !== "normal"  || force) {span.style.fontStyle  = style}
        if (weight !== "normal" || force) {span.style.fontWeight = weight}
      }
    },

    handleChar: function (span,font,c,n,text) {
      var C = c[5];
      if (C.space) {
        if (text.length) {this.addText(span,text)}
        HTMLCSS.createShift(span,c[2]/1000);
        return "";
      }
      if (C.img) {return this.handleImg(span,font,c,n,text)}
      if (C.isUnknown && this.FONTDATA.DELIMITERS[n]) {
        if (text.length) {this.addText(span,text)}
        var scale = span.scale;
        HTMLCSS.createDelimiter(span,n,0,1,font);
        if (this.FONTDATA.DELIMITERS[n].dir === "V") {
          span.style.verticalAlign = this.Em(span.bbox.d);
          span.bbox.h += span.bbox.d; span.bbox.d = 0;
        }
        span.scale = scale;
        c[0] = span.bbox.h*1000; c[1] = span.bbox.d*1000;
        c[2] = span.bbox.w*1000; c[3] = span.bbox.lw*1000; c[4] = span.bbox.rw*1000;
        return "";
      }
      if (C.c == null) {
        if (n <= 0xFFFF) {C.c = String.fromCharCode(n)} else {
          var N = n - 0x10000;
          C.c = String.fromCharCode((N>>10)+0xD800)
              + String.fromCharCode((N&0x3FF)+0xDC00);
        }
      }
      if (C.rfix) {this.addText(span,text+C.c); HTMLCSS.createShift(span,C.rfix/1000); return ""}
      if (c[2] || !this.msieAccentBug || text.length) {return text + C.c}
      //  Handle IE accent clipping bug
      HTMLCSS.createShift(span,c[3]/1000);
      HTMLCSS.createShift(span,(c[4]-c[3])/1000);
      this.addText(span,C.c);
      HTMLCSS.createShift(span,-c[4]/1000);
      return "";
    },
    handleImg: function (span,font,c,n,text) {return text}, // replaced by imageFont extension

    lookupChar: function (variant,n) {
      var i, m;
      if (!variant.FONTS) {
        var FONTS = this.FONTDATA.FONTS;
        var fonts = (variant.fonts || this.FONTDATA.VARIANT.normal.fonts);
        if (!(fonts instanceof Array)) {fonts = [fonts]}
        if (variant.fonts != fonts) {variant.fonts = fonts}
        variant.FONTS = [];
        for (i = 0, m = fonts.length; i < m; i++) {
          if (FONTS[fonts[i]]) {
            variant.FONTS.push(FONTS[fonts[i]]);
            FONTS[fonts[i]].name = fonts[i]; // FIXME: should really be in the font files
          }
        }
      }
      for (i = 0, m = variant.FONTS.length; i < m; i++) {
        var font = variant.FONTS[i];
        if (typeof(font) === "string") {
          delete variant.FONTS; this.loadFont(font);
        }
        if (font[n]) {
          if (font[n].length === 5) {font[n][5] = {}}
          if (HTMLCSS.allowWebFonts && !font.available)
            {this.loadWebFont(font)} else {return font}
        } else {this.findBlock(font,n)}
      }
      return this.unknownChar(variant,n);
    },
    
    unknownChar: function (variant,n) {
      var unknown = (variant.defaultFont || {family:HTMLCSS.config.undefinedFamily});
      if (variant.bold) {unknown.weight = "bold"}; if (variant.italic) {unknown.style = "italic"}
      if (!unknown[n]) {unknown[n] = [800,200,500,0,500,{isUnknown:true}]} // [h,d,w,lw,rw,{data}]
      HUB.signal.Post(["HTML-CSS Jax - unknown char",n,variant]);
      return unknown;
    },

    findBlock: function (font,c) {
      if (font.Ranges) {
        // FIXME:  do binary search?
        for (var i = 0, m = font.Ranges.length; i < m; i++) {
          if (c <  font.Ranges[i][0]) return;
          if (c <= font.Ranges[i][1]) {
            var file = font.Ranges[i][2];
            for (var j = font.Ranges.length-1; j >= 0; j--)
              {if (font.Ranges[j][2] == file) {font.Ranges.splice(j,1)}}
            this.loadFont(font.directory+"/"+file+".js");
          }
        }
      }
    },

    loadFont: function (file) {
      var queue = MathJax.Callback.Queue();
      queue.Push(["Require",AJAX,this.fontDir+"/"+file]);
      if (this.imgFonts) {
        if (!MathJax.isPacked) {file = file.replace(/\/([^\/]*)$/,HTMLCSS.imgPacked+"/$1")}
        queue.Push(["Require",AJAX,this.webfontDir+"/png/"+file]);
      }
      HUB.RestartAfter(queue.Push({}));
    },

    loadWebFont: function (font) {
      font.available = font.isWebFont = true;
      if (HTMLCSS.FontFaceBug) {
        font.family = font.name;
        if (HTMLCSS.msieFontCSSBug) {font.family += "-Web"}
      }
      HUB.RestartAfter(this.Font.loadWebFont(font));
    },
    loadWebFontError: function (font,done) {
      //
      //  After the first web font fails to load, switch to image fonts, if possible
      //  otherwise, give up on web fonts all together
      // 
      HUB.Startup.signal.Post("HTML-CSS Jax - disable web fonts");
      font.isWebFont = false;
      if (this.config.imageFont && this.config.imageFont === this.fontInUse) {
        this.imgFonts = true;
        HUB.Startup.signal.Post("HTML-CSS Jax - switch to image fonts");
        HUB.Startup.signal.Post("HTML-CSS Jax - using image fonts");
        MESSAGE(["WebFontNotAvailable","Web-Fonts not available -- using image fonts instead"],null,3000);
        AJAX.Require(this.directory+"/imageFonts.js",done);
      } else {
        this.allowWebFonts = false;
        done();
      }
    },

    Element: MathJax.HTML.Element,
    addElement: MathJax.HTML.addElement,
    TextNode: MathJax.HTML.TextNode,
    addText: MathJax.HTML.addText,
    ucMatch: MathJax.HTML.ucMatch,

    BIGDIMEN: 10000000,
    ID: 0, idPostfix: "",
    GetID: function () {this.ID++; return this.ID},

    MATHSPACE: {
      veryverythinmathspace:  1/18,
      verythinmathspace:      2/18,
      thinmathspace:          3/18,
      mediummathspace:        4/18,
      thickmathspace:         5/18,
      verythickmathspace:     6/18,
      veryverythickmathspace: 7/18,
      negativeveryverythinmathspace:  -1/18,
      negativeverythinmathspace:      -2/18,
      negativethinmathspace:          -3/18,
      negativemediummathspace:        -4/18,
      negativethickmathspace:         -5/18,
      negativeverythickmathspace:     -6/18,
      negativeveryverythickmathspace: -7/18
    },

    TeX: {
      x_height:         .430554,
      quad:             1,
      num1:             .676508,
      num2:             .393732,
      num3:             .44373,
      denom1:           .685951,
      denom2:           .344841,
      sup1:             .412892,
      sup2:             .362892,
      sup3:             .288888,
      sub1:             .15,
      sub2:             .247217,
      sup_drop:         .386108,
      sub_drop:         .05,
      delim1:          2.39,
      delim2:          1.0,
      axis_height:      .25,
      rule_thickness:   .06,
      big_op_spacing1:  .111111,
      big_op_spacing2:  .166666,
      big_op_spacing3:  .2,
      big_op_spacing4:  .6,
      big_op_spacing5:  .1,

      scriptspace:         .1,
      nulldelimiterspace:  .12,
      delimiterfactor:     901,
      delimitershortfall:   .1,    // originally .3,

      min_rule_thickness:  1.25     // in pixels
    },

    NBSP: "\u00A0",

    rfuzz: 0         // adjustment to rule placements in roots
  });

  MathJax.Hub.Register.StartupHook("mml Jax Ready",function () {

    MML = MathJax.ElementJax.mml;

    MML.mbase.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span); if (this.type != "mrow") {span = this.HTMLhandleSize(span)}
	for (var i = 0, m = this.data.length; i < m; i++)
	  {if (this.data[i]) {this.data[i].toHTML(span)}}
	var stretchy = this.HTMLcomputeBBox(span);
	var h = span.bbox.h, d = span.bbox.d;
	for (i = 0, m = stretchy.length; i < m; i++) {stretchy[i].HTMLstretchV(span,h,d)}
	if (stretchy.length) {this.HTMLcomputeBBox(span,true)}
        if (this.HTMLlineBreaks(span)) {span = this.HTMLmultiline(span)}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLlineBreaks: function () {return false},
      HTMLmultiline: function () {MML.mbase.HTMLautoloadFile("multiline")},
      HTMLcomputeBBox: function (span,full,i,m) {
	if (i == null) {i = 0}; if (m == null) {m = this.data.length}
	var BBOX = span.bbox = {exactW: true}, stretchy = [];
	while (i < m) {
	  var core = this.data[i]; if (!core) continue;
	  if (!full && core.HTMLcanStretch("Vertical"))
	    {stretchy.push(core); core = (core.CoreMO()||core)}
	  this.HTMLcombineBBoxes(core,BBOX); i++;
	}
	this.HTMLcleanBBox(BBOX);
	return stretchy;
      },
      HTMLcombineBBoxes: function (core,BBOX) {
	if (BBOX.w == null) {this.HTMLemptyBBox(BBOX)}
	var child = (core.bbox ? core : core.HTMLspanElement());
        if (!child || !child.bbox) return;
	var bbox = child.bbox;
	if (bbox.d > BBOX.d) {BBOX.d = bbox.d}
	if (bbox.h > BBOX.h) {BBOX.h = bbox.h}
	if (bbox.D != null && bbox.D > BBOX.D) {BBOX.D = bbox.D}
	if (bbox.H != null && bbox.H > BBOX.H) {BBOX.H = bbox.H}
	if (child.style.paddingLeft) {BBOX.w += HTMLCSS.unEm(child.style.paddingLeft)*(child.scale||1)}
	if (BBOX.w + bbox.lw < BBOX.lw) {BBOX.lw = BBOX.w + bbox.lw}
	if (BBOX.w + bbox.rw > BBOX.rw) {BBOX.rw = BBOX.w + bbox.rw}
	BBOX.w += bbox.w;
	if (child.style.paddingRight) {BBOX.w += HTMLCSS.unEm(child.style.paddingRight)*(child.scale||1)}
	if (bbox.width) {BBOX.width = bbox.width; BBOX.minWidth = bbox.minWidth}
        if (bbox.ic) {BBOX.ic = bbox.ic} else {delete BBOX.ic}
        if (BBOX.exactW && !bbox.exactW) {delete BBOX.exactW}
      },
      HTMLemptyBBox: function (BBOX) {
	BBOX.h = BBOX.d = BBOX.H = BBOX.D = BBOX.rw = -HTMLCSS.BIGDIMEN;
	BBOX.w = 0; BBOX.lw = HTMLCSS.BIGDIMEN;
	return BBOX;
      },
      HTMLcleanBBox: function (BBOX) {
	if (BBOX.h === this.BIGDIMEN)
	  {BBOX.h = BBOX.d = BBOX.H = BBOX.D = BBOX.w = BBOX.rw = BBOX.lw = 0}
	if (BBOX.D <= BBOX.d) {delete BBOX.D}; if (BBOX.H <= BBOX.h) {delete BBOX.H}
      },
      HTMLzeroBBox: function () {return {h:0, d:0, w:0, lw: 0, rw:0}},
      HTMLcanStretch: function (direction) {
	if (this.isEmbellished()) {
          var core = this.Core();
          if (core && core !== this) {return core.HTMLcanStretch(direction)}
        }
	return false;
      },
      HTMLstretchH: function (box,W) {return this.HTMLspanElement()},
      HTMLstretchV: function (box,h,d) {return this.HTMLspanElement()},
      HTMLnotEmpty: function (data) {
	while (data) {
	  if ((data.type !== "mrow" && data.type !== "texatom") ||
	       data.data.length > 1) {return true}
	  data = data.data[0];
	}
	return false;
      },

      HTMLmeasureChild: function (n,box) {
	if (this.data[n]) {HTMLCSS.Measured(this.data[n].toHTML(box),box)}
	  else {box.bbox = this.HTMLzeroBBox()}
      },
      HTMLboxChild: function (n,box) {
        if (!this.data[n]) {this.SetData(n,MML.mrow())}
	return this.data[n].toHTML(box);
      },

      HTMLcreateSpan: function (span) {
	if (this.spanID) {
	  var SPAN = this.HTMLspanElement();
	  if (SPAN && (SPAN.parentNode === span || (SPAN.parentNode||{}).parentNode === span)) {
	    while (SPAN.firstChild) {SPAN.removeChild(SPAN.firstChild)}
	    SPAN.bbox = this.HTMLzeroBBox();
	    SPAN.scale = 1; SPAN.isMultChar = SPAN.HH = null;
	    SPAN.style.cssText = "";
	    return SPAN;
	  }
	}
	if (this.href) {span = HTMLCSS.addElement(span,"a",{href:this.href, isMathJax:true})}
	span = HTMLCSS.addElement(span,"span",{className: this.type, isMathJax:true});
	if (HTMLCSS.imgHeightBug) {span.style.display = "inline-block"}
	if (this["class"]) {span.className += " "+this["class"]}
	if (!this.spanID) {this.spanID = HTMLCSS.GetID()}
	span.id = (this.id || "MathJax-Span-"+this.spanID) + HTMLCSS.idPostfix;
	span.bbox = this.HTMLzeroBBox(); this.styles = {};
	if (this.style) {
	  span.style.cssText = this.style;
	  if (span.style.fontSize) {this.mathsize = span.style.fontSize; span.style.fontSize = ""}
          this.styles = {border:HTMLCSS.getBorders(span), padding:HTMLCSS.getPadding(span)}
          if (this.styles.border) {span.style.border = ""} // IE needs "0px none"?
          if (this.styles.padding) {span.style.padding = ""}
	}
	if (this.href) {span.parentNode.bbox = span.bbox}
	return span;
      },
      HTMLspanElement: function () {
	if (!this.spanID) {return null}
	return document.getElementById((this.id||"MathJax-Span-"+this.spanID)+HTMLCSS.idPostfix);
      },

      HTMLhandleVariant: function (span,variant,text) {HTMLCSS.handleVariant(span,variant,text)},

      HTMLhandleSize: function (span) {
	if (!span.scale) {
	  span.scale = this.HTMLgetScale();
	  if (span.scale !== 1) {span.style.fontSize = HTMLCSS.Percent(span.scale)}
	}
	return span;
      },

      HTMLhandleColor: function (span) {
	var values = this.getValues("mathcolor","color");
	if (this.mathbackground) {values.mathbackground = this.mathbackground}
	if (this.background) {values.background = this.background}
        if (this.style && span.style.backgroundColor) {
          values.mathbackground = span.style.backgroundColor;
          span.style.backgroundColor = "transparent";
        }
        var borders = (this.styles||{}).border, padding = (this.styles||{}).padding;
	if (values.color && !this.mathcolor) {values.mathcolor = values.color}
	if (values.background && !this.mathbackground) {values.mathbackground = values.background}
	if (values.mathcolor) {span.style.color = values.mathcolor}
	if ((values.mathbackground && values.mathbackground !== MML.COLOR.TRANSPARENT) || 
             borders || padding) {
	  var bbox = span.bbox, dd = (bbox.exact ? 0 : 1/HTMLCSS.em), lW = 0, rW = 0,
              lpad = span.style.paddingLeft, rpad = span.style.paddingRight;
	  if (this.isToken) {lW = bbox.lw; rW = bbox.rw - bbox.w}
	  if (lpad !== "") {lW += HTMLCSS.unEm(lpad)*(span.scale||1)}
	  if (rpad !== "") {rW -= HTMLCSS.unEm(rpad)*(span.scale||1)}
          var dw = (HTMLCSS.PaddingWidthBug || bbox.keepPadding || bbox.exactW ? 0 : rW - lW);
	  var W = Math.max(0,HTMLCSS.getW(span) + dw);
	  var H = bbox.h + bbox.d, D = -bbox.d, lp = 0, rp = 0;
	  if (W > 0) {W += 2*dd; lW -= dd}; if (H > 0) {H += 2*dd; D -= dd}; rW = -W-lW;
          if (borders) {
            rW -= borders.right; D -= borders.bottom; lp += borders.left; rp += borders.right;
            bbox.h += borders.top; bbox.d += borders.bottom;
            bbox.w += borders.left + borders.right;
            bbox.lw -= borders.left; bbox.rw += borders.right;
          }
          if (padding) {
            H += padding.top + padding.bottom; W += padding.left + padding.right;
            rW -= padding.right; D -= padding.bottom; lp += padding.left; rp += padding.right;
            bbox.h += padding.top; bbox.d += padding.bottom;
            bbox.w += padding.left + padding.right;
            bbox.lw -= padding.left; bbox.rw += padding.right;
          }
          if (rp) {span.style.paddingRight = HTMLCSS.Em(rp)}
	  var frame = HTMLCSS.Element("span",{
            id:"MathJax-Color-"+this.spanID+HTMLCSS.idPostfix, isMathJax: true,
	    style:{display:"inline-block", backgroundColor:values.mathbackground,
		   width: HTMLCSS.Em(W), height:HTMLCSS.Em(H), verticalAlign: HTMLCSS.Em(D),
		   marginLeft: HTMLCSS.Em(lW), marginRight: HTMLCSS.Em(rW)}
	  });
          HTMLCSS.setBorders(frame,borders);
          if (bbox.width) {frame.style.width = bbox.width; frame.style.marginRight = "-"+bbox.width}
	  if (HTMLCSS.msieInlineBlockAlignBug) {
            // FIXME:  handle variable width background
	    frame.style.position = "relative"; frame.style.width = frame.style.height = 0;
	    frame.style.verticalAlign = frame.style.marginLeft = frame.style.marginRight = "";
            frame.style.border = frame.style.padding = "";
            if (borders && HTMLCSS.msieBorderWidthBug)
              {H += borders.top + borders.bottom; W += borders.left + borders.right}
            frame.style.width = HTMLCSS.Em(lp+dd);
	    HTMLCSS.placeBox(HTMLCSS.addElement(frame,"span",{
	      noAdjust: true, isMathJax: true,
	      style: {display:"inline-block", position:"absolute", overflow:"hidden",
		      background:(values.mathbackground||"transparent"), 
                      width: HTMLCSS.Em(W), height: HTMLCSS.Em(H)}
	    }),lW,bbox.h+dd);
            HTMLCSS.setBorders(frame.firstChild,borders);
	  }
	  span.parentNode.insertBefore(frame,span);
          if (HTMLCSS.msieColorPositionBug) {span.style.position = "relative"}
	  return frame;
	}
	return null;
      },
      HTMLremoveColor: function () {
	var color = document.getElementById("MathJax-Color-"+this.spanID+HTMLCSS.idPostfix);
	if (color) {color.parentNode.removeChild(color)}
      },

      HTMLhandleSpace: function (span) {
	if (this.useMMLspacing) {
	  if (this.type !== "mo") return;
	  var values = this.getValues("scriptlevel","lspace","rspace");
          if (values.scriptlevel <= 0 || this.hasValue("lspace") || this.hasValue("rspace")) {
            var mu = this.HTMLgetMu(span);
	    values.lspace = Math.max(0,HTMLCSS.length2em(values.lspace,mu));
	    values.rspace = Math.max(0,HTMLCSS.length2em(values.rspace,mu));
	    var core = this, parent = this.Parent();
	    while (parent && parent.isEmbellished() && parent.Core() === core)
	      {core = parent; parent = parent.Parent(); span = core.HTMLspanElement()}
	    if (values.lspace) {span.style.paddingLeft =  HTMLCSS.Em(values.lspace)}
	    if (values.rspace) {span.style.paddingRight = HTMLCSS.Em(values.rspace)}
	  }
	} else {
	  var space = this.texSpacing();
	  if (space !== "") {
	    space = HTMLCSS.length2em(space,this.HTMLgetScale())/(span.scale||1);
	    if (span.style.paddingLeft) {space += HTMLCSS.unEm(span.style.paddingLeft)}
	    span.style.paddingLeft = HTMLCSS.Em(space);
	  }
	}
      },

      HTMLgetScale: function () {
	var scale = 1, values = this.getValues("mathsize","scriptlevel","fontsize");
	if (this.style) {
	  var span = this.HTMLspanElement();
	  if (span.style.fontSize != "") {values.fontsize = span.style.fontSize}
	}
	if (values.fontsize && !this.mathsize) {values.mathsize = values.fontsize}
	if (values.scriptlevel !== 0) {
	  if (values.scriptlevel > 2) {values.scriptlevel = 2}
	  scale = Math.pow(this.Get("scriptsizemultiplier"),values.scriptlevel);
	  values.scriptminsize = HTMLCSS.length2em(this.Get("scriptminsize"));
	  if (scale < values.scriptminsize) {scale = values.scriptminsize}
	}
	if (this.isToken) {scale *= HTMLCSS.length2em(values.mathsize)}
	return scale;
      },
      HTMLgetMu: function (span) {
	var mu = 1, values = this.getValues("scriptlevel","scriptsizemultiplier");
        if (span.scale && span.scale !== 1) {mu = 1/span.scale}
	if (values.scriptlevel !== 0) {
	  if (values.scriptlevel > 2) {values.scriptlevel = 2}
	  mu = Math.sqrt(Math.pow(values.scriptsizemultiplier,values.scriptlevel));
	}
	return mu;
      },

      HTMLgetVariant: function () {
	var values = this.getValues("mathvariant","fontfamily","fontweight","fontstyle");
        values.hasVariant = this.Get("mathvariant",true);  // null if not explicitly specified
        if (!values.hasVariant) {
          values.family = values.fontfamily;
          values.weight = values.fontweight;
          values.style  = values.fontstyle;
        }
	if (this.style) {
          var span = this.HTMLspanElement();
	  if (!values.family && span.style.fontFamily) {values.family = span.style.fontFamily}
	  if (!values.weight && span.style.fontWeight) {values.weight = span.style.fontWeight}
	  if (!values.style  && span.style.fontStyle)  {values.style  = span.style.fontStyle}
	}
        if (values.weight && values.weight.match(/^\d+$/))
            {values.weight = (parseInt(values.weight) > 600 ? "bold" : "normal")}
	var variant = values.mathvariant; if (this.variantForm) {variant = "-"+HTMLCSS.fontInUse+"-variant"}
	if (values.family && !values.hasVariant) {
	  if (!values.weight && values.mathvariant.match(/bold/)) {values.weight = "bold"}
	  if (!values.style && values.mathvariant.match(/italic/)) {values.style = "italic"}
	  return {FONTS:[], fonts:[], noRemap:true,
		  defaultFont: {family:values.family, style:values.style, weight:values.weight}};
	}
        if (values.weight === "bold") {
          variant = {
            normal:MML.VARIANT.BOLD, italic:MML.VARIANT.BOLDITALIC,
            fraktur:MML.VARIANT.BOLDFRAKTUR, script:MML.VARIANT.BOLDSCRIPT,
            "sans-serif":MML.VARIANT.BOLDSANSSERIF,
            "sans-serif-italic":MML.VARIANT.SANSSERIFBOLDITALIC
          }[variant]||variant;
        } else if (values.weight === "normal") {
          variant = {
            bold:MML.VARIANT.normal, "bold-italic":MML.VARIANT.ITALIC,
            "bold-fraktur":MML.VARIANT.FRAKTUR, "bold-script":MML.VARIANT.SCRIPT,
            "bold-sans-serif":MML.VARIANT.SANSSERIF,
            "sans-serif-bold-italic":MML.VARIANT.SANSSERIFITALIC
          }[variant]||variant;
        }
        if (values.style === "italic") {
          variant = {
            normal:MML.VARIANT.ITALIC, bold:MML.VARIANT.BOLDITALIC,
            "sans-serif":MML.VARIANT.SANSSERIFITALIC,
            "bold-sans-serif":MML.VARIANT.SANSSERIFBOLDITALIC
          }[variant]||variant;
        } else if (values.style === "normal") {
          variant = {
            italic:MML.VARIANT.NORMAL, "bold-italic":MML.VARIANT.BOLD,
            "sans-serif-italic":MML.VARIANT.SANSSERIF,
            "sans-serif-bold-italic":MML.VARIANT.BOLDSANSSERIF
          }[variant]||variant;
        }
        if (!(variant in HTMLCSS.FONTDATA.VARIANT)) {
          // If the mathvariant value is invalid or not supported by this
          // font, fallback to normal. See issue 363.
          variant = "normal";
        }
        return HTMLCSS.FONTDATA.VARIANT[variant];
      }
    },{
      HTMLautoload: function () {
	var file = HTMLCSS.autoloadDir+"/"+this.type+".js";
	HUB.RestartAfter(AJAX.Require(file));
      },
      HTMLautoloadFile: function (name) {
	var file = HTMLCSS.autoloadDir+"/"+name+".js";
	HUB.RestartAfter(AJAX.Require(file));
      },

      HTMLstretchH: function (box,w) {
	this.HTMLremoveColor();
	return this.toHTML(box,w);
      },

      HTMLstretchV: function (box,h,d) {
	this.HTMLremoveColor();
	return this.toHTML(box,h,d);
      }
    });

    MML.chars.Augment({
      toHTML: function (span,variant,remap,chars) {
        var text = this.data.join("").replace(/[\u2061-\u2064]/g,""); // remove invisibles
        if (remap) {text = remap(text,chars)}
        if (variant.fontInherit) {
          var scale = Math.floor(100/HTMLCSS.scale+.5) + "%";
          HTMLCSS.addElement(span,"span",{style:{"font-size":scale}},[text]);
          if (variant.bold)   {span.lastChild.style.fontWeight = "bold"}
          if (variant.italic) {span.lastChild.style.fontStyle = "italic"}
          var HD = HTMLCSS.getHD(span), W = HTMLCSS.getW(span);
          span.bbox = {h:HD.h, d:HD.d, w:W, lw:0, rw:W, exactW: true};
        } else {
          this.HTMLhandleVariant(span,variant,text);
        }
      }
    });
    MML.entity.Augment({
      toHTML: function (span,variant,remap,chars) {
        var text = this.toString().replace(/[\u2061-\u2064]/g,""); // remove invisibles
        if (remap) {text = remap(text,chars)}
        if (variant.fontInherit) {
          var scale = Math.floor(100/HTMLCSS.scale+.5) + "%";
          HTMLCSS.addElement(span,"span",{style:{"font-size":scale}},[text]);
          if (variant.bold)   {span.lastChild.style.fontWeight = "bold"}
          if (variant.italic) {span.lastChild.style.fontStyle = "italic"}
          var HD = HTMLCSS.getHD(span), W = HTMLCSS.getW(span);
          span.bbox = {h:HD.h, d:HD.d, w:W, lw:0, rw:W, exactW: true};
        } else {
          this.HTMLhandleVariant(span,variant,text);
        }
      }
    });

    MML.mi.Augment({
      toHTML: function (span) {
	span = this.HTMLhandleSize(this.HTMLcreateSpan(span)); span.bbox = null;
	var variant = this.HTMLgetVariant();
	for (var i = 0, m = this.data.length; i < m; i++)
	  {if (this.data[i]) {this.data[i].toHTML(span,variant)}}
	if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
        var text = this.data.join(""), bbox = span.bbox;
	if (bbox.skew && text.length !== 1) {delete bbox.skew}
        if (bbox.rw > bbox.w && text.length === 1 && !variant.noIC) {
          bbox.ic = bbox.rw - bbox.w;
          HTMLCSS.createBlank(span,bbox.ic);
          bbox.w = bbox.rw;
        }
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      }
    });

    MML.mn.Augment({
      toHTML: function (span) {
	span = this.HTMLhandleSize(this.HTMLcreateSpan(span)); span.bbox = null;
	var variant = this.HTMLgetVariant();
	for (var i = 0, m = this.data.length; i < m; i++)
	  {if (this.data[i]) {this.data[i].toHTML(span,variant)}}
	if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
	if (this.data.join("").length !== 1) {delete span.bbox.skew}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      }
    });

    MML.mo.Augment({
      toHTML: function (span) {
	span = this.HTMLhandleSize(this.HTMLcreateSpan(span));
	if (this.data.length == 0) {return span} else {span.bbox = null}
	var text = this.data.join("");
        //
        //  Get the variant, and check for operator size
        //
	var variant = this.HTMLgetVariant();
	var values = this.getValues("largeop","displaystyle");
	if (values.largeop)
	  {variant = HTMLCSS.FONTDATA.VARIANT[values.displaystyle ? "-largeOp" : "-smallOp"]}
        //
        //  Get character translation for superscript and accents
        //
        var parent = this.CoreParent(),
            isScript = (parent && parent.isa(MML.msubsup) && this !== parent.data[parent.base]),
            mapchars = (isScript?this.HTMLremapChars:null);
        if (text.length === 1 && parent && parent.isa(MML.munderover) &&
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          if (over && this === over.CoreMO() && parent.Get("accent")) {mapchars = HTMLCSS.FONTDATA.REMAPACCENT}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {mapchars = HTMLCSS.FONTDATA.REMAPACCENTUNDER}
        }
        //
        //  STIX and TeX fonts need quotes from variant font
        //
        if (isScript && text.match(/['`"\u00B4\u2032-\u2037\u2057]/))
          {variant = HTMLCSS.FONTDATA.VARIANT["-"+HTMLCSS.fontInUse+"-variant"]}
        //
        //  Typeset contents
        //
	for (var i = 0, m = this.data.length; i < m; i++)
          {if (this.data[i]) {this.data[i].toHTML(span,variant,this.HTMLremap,mapchars)}}
	if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
	if (text.length !== 1) {delete span.bbox.skew}
        //
        //  Handle combining characters by adding a non-breaking space and removing that width
        //
	if (HTMLCSS.AccentBug && span.bbox.w === 0 && text.length === 1 && span.firstChild) {
	  span.firstChild.nodeValue += HTMLCSS.NBSP;
	  HTMLCSS.createSpace(span,0,0,-span.offsetWidth/HTMLCSS.em);
	}
        //
        //  Handle large operator centering
        //
	if (values.largeop) {
	  var p = (span.bbox.h - span.bbox.d)/2 - HTMLCSS.TeX.axis_height*span.scale;
	  if (HTMLCSS.safariVerticalAlignBug && span.lastChild.nodeName === "IMG") {
	    span.lastChild.style.verticalAlign =
	      HTMLCSS.Em(HTMLCSS.unEm(span.lastChild.style.verticalAlign||0)/HTMLCSS.em-p/span.scale);
	  } else if (HTMLCSS.konquerorVerticalAlignBug && span.lastChild.nodeName === "IMG") {
	    span.style.position = "relative";
	    span.lastChild.style.position="relative";
	    span.lastChild.style.top = HTMLCSS.Em(p/span.scale);
	  } else {
	    span.style.verticalAlign = HTMLCSS.Em(-p/span.scale);
	  }
	  span.bbox.h -= p; span.bbox.d += p;
	  if (span.bbox.rw > span.bbox.w) {
	    span.bbox.ic = span.bbox.rw-span.bbox.w;
	    HTMLCSS.createBlank(span,span.bbox.ic);
	    span.bbox.w = span.bbox.rw;
	  }
	}
        //
        //  Finish up
        //
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      CoreParent: function () {
        var parent = this;
        while (parent && parent.isEmbellished() &&
               parent.CoreMO() === this && !parent.isa(MML.math)) {parent = parent.Parent()}
        return parent;
      },
      CoreText: function (parent) {
        if (!parent) {return ""}
        if (parent.isEmbellished()) {return parent.CoreMO().data.join("")}
        while ((parent.isa(MML.mrow) || parent.isa(MML.TeXAtom) ||
                parent.isa(MML.mstyle) || parent.isa(MML.mphantom)) &&
                parent.data.length === 1 && parent.data[0]) {parent = parent.data[0]}
        if (!parent.isToken) {return ""} else {return parent.data.join("")}
      },
      HTMLremapChars: {
        '*':"\u2217",
        '"':"\u2033",
        "\u00B0":"\u2218",
        "\u00B2":"2",
        "\u00B3":"3",
        "\u00B4":"\u2032",
        "\u00B9":"1"
      },
      HTMLremap: function (text,map) {
        text = text.replace(/-/g,"\u2212");
        if (map) {
          text = text.replace(/'/g,"\u2032").replace(/`/g,"\u2035");
          if (text.length === 1) {text = map[text]||text}
        }
        return text;
      },
      HTMLcanStretch: function (direction) {
	if (!this.Get("stretchy")) {return false}
	var c = this.data.join("");
	if (c.length > 1) {return false}
        var parent = this.CoreParent();
        if (parent && parent.isa(MML.munderover) && 
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          if (over && this === over.CoreMO() && parent.Get("accent")) {c = HTMLCSS.FONTDATA.REMAPACCENT[c]||c}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {c = HTMLCSS.FONTDATA.REMAPACCENTUNDER[c]||c}
        }
	c = HTMLCSS.FONTDATA.DELIMITERS[c.charCodeAt(0)];
	return (c && c.dir == direction.substr(0,1));
      },
      HTMLstretchV: function (box,h,d) {
	this.HTMLremoveColor();
	var values = this.getValues("symmetric","maxsize","minsize");
	var span = this.HTMLspanElement(), mu = this.HTMLgetMu(span), H;
	var axis = HTMLCSS.TeX.axis_height, scale = span.scale;
	if (values.symmetric) {H = 2*Math.max(h-axis,d+axis)} else {H = h + d}
	values.maxsize = HTMLCSS.length2em(values.maxsize,mu,span.bbox.h+span.bbox.d);
	values.minsize = HTMLCSS.length2em(values.minsize,mu,span.bbox.h+span.bbox.d);
	H = Math.max(values.minsize,Math.min(values.maxsize,H));
	span = this.HTMLcreateSpan(box); // clear contents and attributes
	HTMLCSS.createDelimiter(span,this.data.join("").charCodeAt(0),H,scale);
	if (values.symmetric) {H = (span.bbox.h + span.bbox.d)/2 + axis}
	  else {H = (span.bbox.h + span.bbox.d) * h/(h + d)}
	HTMLCSS.positionDelimiter(span,H);
	this.HTMLhandleSpace(span); // add in lspace/rspace, if any
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: function (box,W) {
	this.HTMLremoveColor();
	var values = this.getValues("maxsize","minsize","mathvariant","fontweight");
        // FIXME:  should take style="font-weight:bold" into account as well
	if ((values.fontweight === "bold" || parseInt(values.fontweight) >= 600) &&
            !this.Get("mathvariant",true)) {values.mathvariant = MML.VARIANT.BOLD}
	var span = this.HTMLspanElement(), mu = this.HTMLgetMu(span), scale = span.scale;
	values.maxsize = HTMLCSS.length2em(values.maxsize,mu,span.bbox.w);
	values.minsize = HTMLCSS.length2em(values.minsize,mu,span.bbox.w);
	W = Math.max(values.minsize,Math.min(values.maxsize,W));
	span = this.HTMLcreateSpan(box); // clear contents and attributes
	HTMLCSS.createDelimiter(span,this.data.join("").charCodeAt(0),W,scale,values.mathvariant);
	this.HTMLhandleSpace(span); // add in lspace/rspace, if any
	this.HTMLhandleColor(span);
	return span;
      }
    });

    MML.mtext.Augment({
      toHTML: function (span) {
        span = this.HTMLhandleSize(this.HTMLcreateSpan(span)); 
        var variant = this.HTMLgetVariant();
        //  Avoid setting the font style for error text or if mtextFontInherit is set
        if (HTMLCSS.config.mtextFontInherit || this.Parent().type === "merror")
          {variant = {bold:variant.bold, italic:variant.italic, fontInherit: true}}
        for (var i = 0, m = this.data.length; i < m; i++)
          {if (this.data[i]) {this.data[i].toHTML(span,variant)}}
        if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
        if (this.data.join("").length !== 1) {delete span.bbox.skew}
        this.HTMLhandleSpace(span);
        this.HTMLhandleColor(span);
        return span;
      }
    });
    MML.merror.Augment({
      toHTML: function (span) {
        //
        //  Width doesn't include padding and border, so use an extra inline block
        //  element to capture it.
        //  
        var SPAN = MathJax.HTML.addElement(span,"span",{style:{display:"inline-block"}});
        span = this.SUPER(arguments).toHTML.call(this,SPAN);
        var HD = HTMLCSS.getHD(SPAN), W = HTMLCSS.getW(SPAN);
        SPAN.bbox = {h:HD.h, d:HD.d, w:W, lw:0, rw:W, exactW: true};
        SPAN.id = span.id; span.id = null;
        return SPAN;
      }
    });

    MML.ms.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.mglyph.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.mspace.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	var values = this.getValues("height","depth","width");
        var mu = this.HTMLgetMu(span);
	values.mathbackground = this.mathbackground;
	if (this.background && !this.mathbackground) {values.mathbackground = this.background}
	var h = HTMLCSS.length2em(values.height,mu),
            d = HTMLCSS.length2em(values.depth,mu),
	    w = HTMLCSS.length2em(values.width,mu);
       HTMLCSS.createSpace(span,h,d,w,values.mathbackground,true);
       return span;
      }
    });

    MML.mphantom.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var box = this.data[0].toHTML(span);
	  if (D != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchV(span,HW,D),span)}
	  else if (HW != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchH(span,HW),span)}
          else {box = HTMLCSS.Measured(box,span)}
	  span.bbox = {w: box.bbox.w, h: box.bbox.h, d: box.bbox.d, lw: 0, rw: 0, exactW: true};
	  for (var i = 0, m = span.childNodes.length; i < m; i++)
	    {span.childNodes[i].style.visibility = "hidden"}
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mpadded.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var stack = HTMLCSS.createStack(span,true);
	  var box = HTMLCSS.createBox(stack);
          var child = this.data[0].toHTML(box);
	  if (D != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchV(box,HW,D),box)}
	  else if (HW != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchH(box,HW),box)}
          else {HTMLCSS.Measured(child,box)}
	  var values = this.getValues("height","depth","width","lspace","voffset"),
              x = 0, y = 0, mu = this.HTMLgetMu(span);
	  if (values.lspace)  {x = this.HTMLlength2em(box,values.lspace,mu)}
	  if (values.voffset) {y = this.HTMLlength2em(box,values.voffset,mu)}
	  HTMLCSS.placeBox(box,x,y);
	  span.bbox = {
	    h: box.bbox.h, d: box.bbox.d, w: box.bbox.w, exactW: true,
	    lw: Math.min(0,box.bbox.lw+x), rw: Math.max(box.bbox.w,box.bbox.rw+x),
	    H: Math.max((box.bbox.H == null ? -HTMLCSS.BIGDIMEN : box.bbox.H),box.bbox.h+y),
	    D: Math.max((box.bbox.D == null ? -HTMLCSS.BIGDIMEN : box.bbox.D),box.bbox.d-y)
	  };
	  if (values.height !== "") {span.bbox.h = this.HTMLlength2em(box,values.height,mu,"h",0)}
	  if (values.depth  !== "") {span.bbox.d = this.HTMLlength2em(box,values.depth,mu,"d",0)}
	  if (values.width  !== "") {span.bbox.w = this.HTMLlength2em(box,values.width,mu,"w",0)}
	  if (span.bbox.H <= span.bbox.h) {delete span.bbox.H}
	  if (span.bbox.D <= span.bbox.d) {delete span.bbox.D}
          var dimen = /^\s*(\d+(\.\d*)?|\.\d+)\s*(pt|em|ex|mu|px|pc|in|mm|cm)\s*$/
          span.bbox.exact = !!((this.data[0] && this.data[0].data.length == 0) ||
             dimen.exec(values.height) || dimen.exec(values.width) || dimen.exec(values.depth));
	  HTMLCSS.setStackWidth(stack,span.bbox.w);
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLlength2em: function (span,length,mu,d,m) {
	if (m == null) {m = -HTMLCSS.BIGDIMEN}
	var match = String(length).match(/width|height|depth/);
	var size = (match ? span.bbox[match[0].charAt(0)] : (d ? span.bbox[d] : 0));
	var v = HTMLCSS.length2em(length,mu,size);
	if (d && String(length).match(/^\s*[-+]/))
	  {return Math.max(m,span.bbox[d]+v)} else {return v}
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mrow.Augment({
      HTMLlineBreaks: function (span) {
        if (!this.parent.linebreakContainer) {return false}
        return (HTMLCSS.config.linebreaks.automatic &&
                span.bbox.w > HTMLCSS.linebreakWidth) || this.hasNewline();
      },
      HTMLstretchH: function (box,w) {
	this.HTMLremoveColor();
	var span = this.HTMLspanElement();
	this.data[this.core].HTMLstretchH(span,w);
	this.HTMLcomputeBBox(span,true);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchV: function (box,h,d) {
	this.HTMLremoveColor();
	var span = this.HTMLspanElement();
	this.data[this.core].HTMLstretchV(span,h,d);
	this.HTMLcomputeBBox(span,true);
	this.HTMLhandleColor(span);
	return span;
      }
    });

    MML.mstyle.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var SPAN = this.data[0].toHTML(span);
	  if (D != null) {this.data[0].HTMLstretchV(span,HW,D)}
	  else if (HW != null) {this.data[0].HTMLstretchH(span,HW)}
          span.bbox = SPAN.bbox;
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mfrac.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	var frac = HTMLCSS.createStack(span);
	var num = HTMLCSS.createBox(frac), den = HTMLCSS.createBox(frac);
        HTMLCSS.MeasureSpans([this.HTMLboxChild(0,num),this.HTMLboxChild(1,den)]);
        var values = this.getValues("displaystyle","linethickness","numalign","denomalign","bevelled");
	var scale = this.HTMLgetScale(), isDisplay = values.displaystyle;
	var a = HTMLCSS.TeX.axis_height * scale;
	if (values.bevelled) {
	  var delta = (isDisplay ? .4 : .15);
	  var H = Math.max(num.bbox.h+num.bbox.d,den.bbox.h+den.bbox.d)+2*delta;
	  var bevel = HTMLCSS.createBox(frac);
	  HTMLCSS.createDelimiter(bevel,0x2F,H);
	  HTMLCSS.placeBox(num,0,(num.bbox.d-num.bbox.h)/2+a+delta);
	  HTMLCSS.placeBox(bevel,num.bbox.w-delta/2,(bevel.bbox.d-bevel.bbox.h)/2+a);
	  HTMLCSS.placeBox(den,num.bbox.w+bevel.bbox.w-delta,(den.bbox.d-den.bbox.h)/2+a-delta);
	} else {
	  var W = Math.max(num.bbox.w,den.bbox.w);
	  var t = HTMLCSS.thickness2em(values.linethickness,scale), p,q, u,v;
	  var mt = HTMLCSS.TeX.min_rule_thickness/this.em;
	  if (isDisplay) {u = HTMLCSS.TeX.num1; v = HTMLCSS.TeX.denom1}
	    else {u = (t === 0 ? HTMLCSS.TeX.num3 : HTMLCSS.TeX.num2); v = HTMLCSS.TeX.denom2}
	  u *= scale; v *= scale;
	  if (t === 0) {// \atop
	    p = Math.max((isDisplay ? 7 : 3) * HTMLCSS.TeX.rule_thickness, 2*mt); // force to at least 2 px
	    q = (u - num.bbox.d) - (den.bbox.h - v);
	    if (q < p) {u += (p - q)/2; v += (p - q)/2}
	  } else {// \over
	    p = Math.max((isDisplay ? 2 : 0) * mt + t, t/2 + 1.5*mt);  // force to be at least 1.5px
	    q = (u - num.bbox.d) - (a + t/2); if (q < p) {u += p - q}
	    q = (a - t/2) - (den.bbox.h - v); if (q < p) {v += p - q}
	    var rule = HTMLCSS.createBox(frac);
	    HTMLCSS.createRule(rule,t,0,W+2*t);
	    HTMLCSS.placeBox(rule,0,a-t/2);
	  }
	  HTMLCSS.alignBox(num,values.numalign,u);
	  HTMLCSS.alignBox(den,values.denomalign,-v);
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLcanStretch: function (direction) {return false},
      HTMLhandleSpace: function (span) {
	if (!this.texWithDelims) {
	  var space = (this.useMMLspacing ? 0 : HTMLCSS.length2em(this.texSpacing()||0)) + .12;
	  span.style.paddingLeft  = HTMLCSS.Em(space);
	  span.style.paddingRight = HTMLCSS.Em(.12);
	}
      }
    });

    MML.msqrt.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	var sqrt = HTMLCSS.createStack(span);
	var base = HTMLCSS.createBox(sqrt),
	    rule = HTMLCSS.createBox(sqrt),
	    surd = HTMLCSS.createBox(sqrt);
	var scale = this.HTMLgetScale();
	var t = HTMLCSS.TeX.rule_thickness * scale, p,q, H, W;
	if (this.Get("displaystyle")) {p = HTMLCSS.TeX.x_height * scale} else {p = t}
	q = Math.max(t + p/4,1.5*HTMLCSS.TeX.min_rule_thickness/this.em); // force to be at least 1px
	var BASE = this.HTMLboxChild(0,base);
	H = BASE.bbox.h + BASE.bbox.d + q + t;
        HTMLCSS.createDelimiter(surd,0x221A,H,scale);
	HTMLCSS.MeasureSpans([BASE,surd]);
	W = BASE.bbox.w;
	var x = 0;
	if (surd.isMultiChar || (HTMLCSS.AdjustSurd && HTMLCSS.imgFonts)) {surd.bbox.w *= .95}
	if (surd.bbox.h + surd.bbox.d > H) {q = ((surd.bbox.h+surd.bbox.d) - (H-t))/2}
	var ruleC = HTMLCSS.FONTDATA.DELIMITERS[HTMLCSS.FONTDATA.RULECHAR];
	if (!ruleC || W < ruleC.HW[0][0]*scale || scale < .75) {
	  HTMLCSS.createRule(rule,0,t,W);
	} else {
	  HTMLCSS.createDelimiter(rule,HTMLCSS.FONTDATA.RULECHAR,W,scale);
	}
	H = BASE.bbox.h + q + t;
        q = H*HTMLCSS.rfuzz; if (surd.isMultiChar) {q = HTMLCSS.rfuzz}
	x = this.HTMLaddRoot(sqrt,surd,x,surd.bbox.h+surd.bbox.d-H,scale);
	HTMLCSS.placeBox(surd,x,H-surd.bbox.h);
	HTMLCSS.placeBox(rule,x+surd.bbox.w,H-rule.bbox.h+q);
	HTMLCSS.placeBox(base,x+surd.bbox.w,0);
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLaddRoot: function (sqrt,surd,x,d,scale) {return x}
    });

    MML.mroot.Augment({
      toHTML: MML.msqrt.prototype.toHTML,
      HTMLaddRoot: function (sqrt,surd,x,d,scale) {
	var box = HTMLCSS.createBox(sqrt);
	if (this.data[1]) {
	  var root = this.data[1].toHTML(box);
	  root.style.paddingRight = root.style.paddingLeft = ""; // remove extra padding, if any
	  HTMLCSS.Measured(root,box);
	} else {box.bbox = this.HTMLzeroBBox()}
	var h = this.HTMLrootHeight(surd.bbox.h+surd.bbox.d,scale,box)-d;
	var w = Math.min(box.bbox.w,box.bbox.rw); // remove extra right-hand padding, if any
	x = Math.max(w,surd.offset);
	HTMLCSS.placeBox(box,x-w,h);
	return x - surd.offset;
      },
      HTMLrootHeight: function (d,scale,root) {
	return .45*(d-.9*scale)+.6*scale + Math.max(0,root.bbox.d-.075);
      }
    });

    MML.mfenced.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	if (this.data.open) {this.data.open.toHTML(span)}
	if (this.data[0] != null) {this.data[0].toHTML(span)}
	for (var i = 1, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    if (this.data["sep"+i]) {this.data["sep"+i].toHTML(span)}
	    this.data[i].toHTML(span);
	  }
	}
	if (this.data.close) {this.data.close.toHTML(span)}
	var stretchy = this.HTMLcomputeBBox(span);
	var h = span.bbox.h, d = span.bbox.d;
	for (i = 0, m = stretchy.length; i < m; i++) {stretchy[i].HTMLstretchV(span,h,d)}
	if (stretchy.length) {this.HTMLcomputeBBox(span,true)}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLcomputeBBox: function (span,full) {
	var BBOX = span.bbox = {}, stretchy = [];
	this.HTMLcheckStretchy(this.data.open,BBOX,stretchy,full);
	this.HTMLcheckStretchy(this.data[0],BBOX,stretchy,full);
	for (var i = 1, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    this.HTMLcheckStretchy(this.data["sep"+i],BBOX,stretchy,full);
	    this.HTMLcheckStretchy(this.data[i],BBOX,stretchy,full);
	  }
	}
	this.HTMLcheckStretchy(this.data.close,BBOX,stretchy,full);
	this.HTMLcleanBBox(BBOX);
	return stretchy;
      },
      HTMLcheckStretchy: function (core,BBOX,stretchy,full) {
	if (core) {
	  if (!full && core.HTMLcanStretch("Vertical"))
	    {stretchy.push(core); core = (core.CoreMO()||core)}
	  this.HTMLcombineBBoxes(core,BBOX);
	}
      }
    });

    MML.menclose.Augment({toHTML: MML.mbase.HTMLautoload});
    MML.maction.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.semantics.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var SPAN = this.data[0].toHTML(span);
	  if (D != null) {this.data[0].HTMLstretchV(span,HW,D)}
	  else if (HW != null) {this.data[0].HTMLstretchH(span,HW)}
          span.bbox = SPAN.bbox;
	}
	this.HTMLhandleSpace(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.munderover.Augment({
      toHTML: function (span,HW,D) {
	var values = this.getValues("displaystyle","accent","accentunder","align");
	if (!values.displaystyle && this.data[this.base] != null &&
	    this.data[this.base].CoreMO().Get("movablelimits"))
	      {return MML.msubsup.prototype.toHTML.call(this,span)}
	span = this.HTMLcreateSpan(span); var scale = this.HTMLgetScale();
	var stack = HTMLCSS.createStack(span);
	var boxes = [], children = [], stretch = [], box, i, m;
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i] != null) {
	    box = boxes[i] = HTMLCSS.createBox(stack);
	    children[i] = this.data[i].toHTML(box);
	    if (i == this.base) {
	      if (D != null) {this.data[this.base].HTMLstretchV(box,HW,D)}
	      else if (HW != null) {this.data[this.base].HTMLstretchH(box,HW)}
	      stretch[i] = (D == null && HW != null ? false :
			   this.data[i].HTMLcanStretch("Horizontal"));
	    } else {
	      stretch[i] = this.data[i].HTMLcanStretch("Horizontal");
	    }
          }
        }
        HTMLCSS.MeasureSpans(children);
        var W = -HTMLCSS.BIGDIMEN, WW = W;
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    if (boxes[i].bbox.w > WW) {WW = boxes[i].bbox.w}
	    if (!stretch[i] && WW > W) {W = WW}
	  }
	}
	if (D == null && HW != null) {W = HW} else if (W == -HTMLCSS.BIGDIMEN) {W = WW}
        for (i = WW = 0, m = this.data.length; i < m; i++) {if (this.data[i]) {
          box = boxes[i];
          if (stretch[i]) {box.bbox = this.data[i].HTMLstretchH(box,W).bbox}
          if (box.bbox.w > WW) {WW = box.bbox.w}
        }}
	var t = HTMLCSS.TeX.rule_thickness, factor = HTMLCSS.FONTDATA.TeX_factor;
	var base = boxes[this.base] || {bbox: this.HTMLzeroBBox()};
	var x, y, z1, z2, z3, dw, k, delta = 0;
        if (base.bbox.ic) {delta = 1.3*base.bbox.ic + .05} // adjust faked IC to be more in line with expeted results
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i] != null) {
	    box = boxes[i];
	    z3 = HTMLCSS.TeX.big_op_spacing5 * scale;
	    var accent = (i != this.base && values[this.ACCENTS[i]]);
	    if (accent && box.bbox.w <= 1/HTMLCSS.em+.0001) { // images can get the width off by 1px
	      box.bbox.w = box.bbox.rw - box.bbox.lw; box.bbox.noclip = true;
	      if (box.bbox.lw)
		{box.insertBefore(HTMLCSS.createSpace(box.parentNode,0,0,-box.bbox.lw),box.firstChild)}
	      HTMLCSS.createBlank(box,0,0,box.bbox.rw+.1);
	    }
	    dw = {left:0, center:(WW-box.bbox.w)/2, right:WW-box.bbox.w}[values.align];
	    x = dw; y = 0;
	    if (i == this.over) {
	      if (accent) {
		k = Math.max(t * scale * factor,2.5/this.em); z3 = 0;
		if (base.bbox.skew) {x += base.bbox.skew}
	      } else {
		z1 = HTMLCSS.TeX.big_op_spacing1 * scale * factor;
		z2 = HTMLCSS.TeX.big_op_spacing3 * scale * factor;
		k = Math.max(z1,z2-Math.max(0,box.bbox.d));
	      }
	      k = Math.max(k,1.5/this.em); // force to be at least 1.5px
	      x += delta/2; y = base.bbox.h + box.bbox.d + k;
	      box.bbox.h += z3;
	    } else if (i == this.under) {
	      if (accent) {
		k = 3*t * scale * factor; z3 = 0;
	      } else {
		z1 = HTMLCSS.TeX.big_op_spacing2 * scale * factor;
		z2 = HTMLCSS.TeX.big_op_spacing4 * scale * factor;
		k = Math.max(z1,z2-box.bbox.h);
	      }
	      k = Math.max(k,1.5/this.em); // force to be at least 1.5px
	      x -= delta/2; y = -(base.bbox.d + box.bbox.h + k);
	      box.bbox.d += z3;
	    }
	    HTMLCSS.placeBox(box,x,y);
	  }
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.msubsup.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
        var scale = this.HTMLgetScale(), mu = this.HTMLgetMu(span);
	var stack = HTMLCSS.createStack(span), values, children = [];
	var base = HTMLCSS.createBox(stack);
	if (this.data[this.base]) {
          children.push(this.data[this.base].toHTML(base));
	  if (D != null) {this.data[this.base].HTMLstretchV(base,HW,D)}
	  else if (HW != null) {this.data[this.base].HTMLstretchH(base,HW)}
	} else {base.bbox = this.HTMLzeroBBox()}
	var x_height = HTMLCSS.TeX.x_height * scale,
	    s = HTMLCSS.TeX.scriptspace * scale * .75;  // FIXME: .75 can be removed when IC is right?
	var sup, sub;
	if (this.HTMLnotEmpty(this.data[this.sup]))
          {sup = HTMLCSS.createBox(stack); children.push(this.data[this.sup].toHTML(sup))}
	if (this.HTMLnotEmpty(this.data[this.sub]))
          {sub = HTMLCSS.createBox(stack); children.push(this.data[this.sub].toHTML(sub))}
        HTMLCSS.MeasureSpans(children);
	if (sup) {sup.bbox.w += s; sup.bbox.rw = Math.max(sup.bbox.w,sup.bbox.rw)}
	if (sub) {sub.bbox.w += s; sub.bbox.rw = Math.max(sub.bbox.w,sub.bbox.rw)}
	HTMLCSS.placeBox(base,0,0);
        var sscale;
        if (sup) {
          sscale = this.data[this.sup].HTMLgetScale();
        } else if (sub) {
          sscale = this.data[this.sub].HTMLgetScale();
        } else {
          sscale = this.HTMLgetScale();
        }
	var q = HTMLCSS.TeX.sup_drop * sscale, r = HTMLCSS.TeX.sub_drop * sscale;
	var u = base.bbox.h - q, v = base.bbox.d + r, delta = 0, p;
	if (base.bbox.ic) {
          base.bbox.w -= base.bbox.ic;    // remove IC (added by mo and mi)
          delta = 1.3*base.bbox.ic + .05; // adjust faked IC to be more in line with expected results
        }
	if (this.data[this.base] &&
	   (this.data[this.base].type === "mi" || this.data[this.base].type === "mo")) {
	  if (this.data[this.base].data.join("").length === 1 && base.bbox.scale === 1 &&
	      !this.data[this.base].Get("largeop")) {u = v = 0}
	}
	var min = this.getValues("subscriptshift","superscriptshift");
	min.subscriptshift   = (min.subscriptshift === ""   ? 0 : HTMLCSS.length2em(min.subscriptshift,mu));
	min.superscriptshift = (min.superscriptshift === "" ? 0 : HTMLCSS.length2em(min.superscriptshift,mu));
	if (!sup) {
	  if (sub) {
	    v = Math.max(v,HTMLCSS.TeX.sub1*scale,sub.bbox.h-(4/5)*x_height,min.subscriptshift);
	    HTMLCSS.placeBox(sub,base.bbox.w,-v,sub.bbox);
	  }
	} else {
	  if (!sub) {
	    values = this.getValues("displaystyle","texprimestyle");
	    p = HTMLCSS.TeX[(values.displaystyle ? "sup1" : (values.texprimestyle ? "sup3" : "sup2"))];
	    u = Math.max(u,p*scale,sup.bbox.d+(1/4)*x_height,min.superscriptshift);
	    HTMLCSS.placeBox(sup,base.bbox.w+delta,u,sup.bbox);
	  } else {
	    v = Math.max(v,HTMLCSS.TeX.sub2*scale);
	    var t = HTMLCSS.TeX.rule_thickness * scale;
	    if ((u - sup.bbox.d) - (sub.bbox.h - v) < 3*t) {
	      v = 3*t - u + sup.bbox.d + sub.bbox.h;
	      q = (4/5)*x_height - (u - sup.bbox.d);
	      if (q > 0) {u += q; v -= q}
	    }
	    HTMLCSS.placeBox(sup,base.bbox.w+delta,Math.max(u,min.superscriptshift));
	    HTMLCSS.placeBox(sub,base.bbox.w,-Math.max(v,min.subscriptshift));
	  }
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mmultiscripts.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.mtable.Augment({toHTML: MML.mbase.HTMLautoload});
    
    MML["annotation-xml"].Augment({toHTML: MML.mbase.HTMLautoload});
    
    MML.math.Augment({
      toHTML: function (span,node) {
	var alttext = this.Get("alttext");
        if (alttext && alttext !== "") {node.setAttribute("aria-label",alttext)}
	var nobr = HTMLCSS.addElement(span,"nobr",{isMathJax: true});
	span = this.HTMLcreateSpan(nobr);
	var stack = HTMLCSS.createStack(span), box = HTMLCSS.createBox(stack), math;
	// Move font-size from outer span to stack to avoid line separation 
	// problem in strict HTML mode
	stack.style.fontSize = nobr.parentNode.style.fontSize; nobr.parentNode.style.fontSize = "";
	if (this.data[0] != null) {
	  if (HTMLCSS.msieColorBug) {
	    if (this.background) {this.data[0].background = this.background; delete this.background}
	    if (this.mathbackground) {this.data[0].mathbackground = this.mathbackground; delete this.mathbackground}
	  }
	  MML.mbase.prototype.displayAlign = HUB.config.displayAlign;
	  MML.mbase.prototype.displayIndent = HUB.config.displayIndent;
          var html = this.data[0].toHTML(box); html.bbox.exactW = false; // force remeasure just to be sure
	  math = HTMLCSS.Measured(html,box);
	}
	HTMLCSS.placeBox(box,0,0);
        //
        //  Get width right if minimum font size is set:
        //    Round to nearest pixel (plus a small amount), and convert back to outer-em's.
        //    Add the width to the span (outside the MathJax class, so uses outer em size,
        //    which makes it work even when minimum font size is in effect).
        //
        span.style.width = HTMLCSS.Em((Math.round(math.bbox.w*this.em)+.25)/HTMLCSS.outerEm);
        span.style.display = "inline-block";
	//
	//  Adjust bbox to match outer em-size
	// 
        var p = 1/HTMLCSS.em, f = HTMLCSS.em / HTMLCSS.outerEm; HTMLCSS.em /= f;
	span.bbox.h *= f; span.bbox.d *= f; span.bbox.w *= f;
	span.bbox.lw *= f; span.bbox.rw *= f;
	if (math && math.bbox.width != null) {
          span.style.minWidth = (math.bbox.minWidth || span.style.width);
	  span.style.width = stack.style.width = math.bbox.width;
	  box.style.width = "100%";
	}
	//
	//  Add color (if any)
	//
	this.HTMLhandleColor(span);
	//
	//  Make math span be the correct height and depth
	//
	if (math) {HTMLCSS.createRule(span,(math.bbox.h+p)*f,(math.bbox.d+p)*f,0)}
	//
	//  Handle indentalign and indentshift for single-line display equations
	//
	if (!this.isMultiline && this.Get("display") === "block" && span.bbox.width == null) {
	  var values = this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");
	  if (values.indentalignfirst !== MML.INDENTALIGN.INDENTALIGN) {values.indentalign = values.indentalignfirst}
	  if (values.indentalign === MML.INDENTALIGN.AUTO) {values.indentalign = this.displayAlign}
	  node.style.textAlign = values.indentalign;
	  if (values.indentshiftfirst !== MML.INDENTSHIFT.INDENTSHIFT) {values.indentshift = values.indentshiftfirst}
	  if (values.indentshift === "auto") {values.indentshift = this.displayIndent}
	  if (values.indentshift && values.indentalign !== MML.INDENTALIGN.CENTER) {
	    span.style[{left:"marginLeft",right:"marginRight"}[values.indentalign]] =
	      HTMLCSS.Em(HTMLCSS.length2em(values.indentshift));
	  }
	}
	return span;
      },
      HTMLspanElement: MML.mbase.prototype.HTMLspanElement
    });

    MML.TeXAtom.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  if (this.texClass === MML.TEXCLASS.VCENTER) {
	    var stack = HTMLCSS.createStack(span);
	    var box = HTMLCSS.createBox(stack);
	    HTMLCSS.Measured(this.data[0].toHTML(box),box);
	    // FIXME: should the axis height be scaled?
	    HTMLCSS.placeBox(box,0,HTMLCSS.TeX.axis_height-(box.bbox.h+box.bbox.d)/2+box.bbox.d);
	  } else {
	    span.bbox = this.data[0].toHTML(span).bbox;
	  }
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      }
    });
    
    //
    //  Loading isn't complete until the element jax is modified,
    //  but can't call loadComplete within the callback for "mml Jax Ready"
    //  (it would call HTMLCSS's Require routine, asking for the mml jax again)
    //  so wait until after the mml jax has finished processing.
    //  
    //  We also need to wait for the onload handler to run, since the loadComplete
    //  will call Config and Startup, which need to modify the body.
    //
    MathJax.Hub.Register.StartupHook("onLoad",function () {
      setTimeout(MathJax.Callback(["loadComplete",HTMLCSS,"jax.js"]),0);
    });
  });

  HUB.Register.StartupHook("End Config",function () {
    
    //
    //  Handle browser-specific setup
    //
    HUB.Browser.Select({
      MSIE: function (browser) {
        var mode = (document.documentMode || 0);
        var isIE7 = browser.versionAtLeast("7.0");
        var isIE8 = browser.versionAtLeast("8.0") && mode > 7;
        var quirks = (document.compatMode === "BackCompat");
        if (mode < 9) {
          // IE doesn't do mouse events on trasparent objects,
          //   so give a background color, but opacity makes it transparent
          HTMLCSS.config.styles[".MathJax .MathJax_HitBox"]["background-color"] = "white";
          HTMLCSS.config.styles[".MathJax .MathJax_HitBox"].opacity = 0
          HTMLCSS.config.styles[".MathJax .MathJax_HitBox"].filter = "alpha(opacity=0)";
        }
        // FIXME:  work out tests for these?
        HTMLCSS.Augment({
          PaddingWidthBug: true,
          msieAccentBug: true,
          msieColorBug: true,
          msieColorPositionBug: true,    // needs position:relative to put color behind text
          msieRelativeWidthBug: quirks,
          msieDisappearingBug: (mode >= 8), // inline math disappears
          msieMarginScaleBug: (mode < 8),   // relative margins are not scaled properly by font-size
          msiePaddingWidthBug: true,
          msieBorderWidthBug: quirks,
          msieFrameSizeBug: (mode <= 8),    // crashes if size of box isn't big enough for border
          msieInlineBlockAlignBug: (!isIE8 || quirks),
          msiePlaceBoxBug: (isIE8 && !quirks),
          msieClipRectBug: !isIE8,
          msieNegativeSpaceBug: quirks,
          cloneNodeBug: (isIE8 && browser.version === "8.0"),
          initialSkipBug: (mode < 8),        // confused by initial left-margin values
          msieNegativeBBoxBug: (mode >= 8),  // negative bboxes have positive widths
          msieIE6: !isIE7,
          msieItalicWidthBug: true,
          FontFaceBug: true,
          msieFontCSSBug: browser.isIE9,
          allowWebFonts: (mode >= 9 ? "woff" : "eot")
        });
      },

      Firefox: function (browser) {
        var webFonts = false;
        if (browser.versionAtLeast("3.5")) {
          var root = String(document.location).replace(/[^\/]*$/,"");
          if (document.location.protocol !== "file:" || HUB.config.root.match(/^https?:\/\//) ||
              (HUB.config.root+"/").substr(0,root.length) === root) {webFonts = "otf"}
        }
        HTMLCSS.Augment({
          ffVerticalAlignBug: true,
          AccentBug: true,
          allowWebFonts: webFonts
        });
      },

      Safari: function (browser) {
        var v3p0 = browser.versionAtLeast("3.0");
        var v3p1 = browser.versionAtLeast("3.1");
        var trueSafari = navigator.appVersion.match(/ Safari\/\d/) &&
                         navigator.appVersion.match(/ Version\/\d/) &&
                         navigator.vendor.match(/Apple/);
        var android = (navigator.appVersion.match(/ Android (\d+)\.(\d+)/));
        var forceImages = (v3p1 && browser.isMobile && (
          (navigator.platform.match(/iPad|iPod|iPhone/) && !browser.versionAtLeast("5.0")) ||
          (android != null && (android[1] < 2 || (android[1] == 2 && android[2] < 2)))
        ));
        HTMLCSS.Augment({
          config: {
            styles: {
              ".MathJax img, .MathJax nobr, .MathJax a": {
                // "none" seems to work like "0px" when width is initially 0
                "max-width": "5000em", "max-height": "5000em"
              }
            }
          },
          rfuzz: .011,
          AccentBug: true,
          AdjustSurd: true,
          negativeBBoxes: true,
          safariNegativeSpaceBug: true,
          safariVerticalAlignBug: !v3p1,
          safariTextNodeBug: !v3p0,
          forceReflow: true,
          allowWebFonts: (v3p1 && !forceImages ? "otf" : false)
        });
        if (trueSafari) {
          HTMLCSS.Augment({
            webFontDefault: (browser.isMobile ? "sans-serif" : "serif")
          });
        }
        if (browser.isPC) {
          HTMLCSS.Augment({
            adjustAvailableFonts: HTMLCSS.removeSTIXfonts,  // can't access plane1
            checkWebFontsTwice: true  // bug in Safari/Win that doesn't update font test div properly
          });
        }
        if (forceImages) {
          //  Force image mode for iOS prior to 4.2 and Droid prior to 2.2
          var config = HUB.config["HTML-CSS"];
          if (config) {config.availableFonts = []; config.preferredFont = null}
            else {HUB.config["HTML-CSS"] = {availableFonts: [], preferredFont: null}}
        }
      },

      Chrome: function (browser) {
        HTMLCSS.Augment({
          Em: HTMLCSS.EmRounded,   // vertical alignment needs help (since around v20)
          cloneNodeBug: true,      // Chrome gets heights wrong with the cloned ones
          rfuzz: .011,
          AccentBug: true,
          AdjustSurd: true,
          negativeBBoxes: true,
          safariNegativeSpaceBug: true,
          safariWebFontSerif: [""],
          forceReflow: true,
          allowWebFonts: (browser.versionAtLeast("4.0") ? "otf" : "svg")
        });
      },

      Opera: function (browser) {
        browser.isMini = (navigator.appVersion.match("Opera Mini") != null);
        HTMLCSS.config.styles[".MathJax .merror"]["vertical-align"] = null;
        HTMLCSS.config.styles[".MathJax span"]["z-index"] = 0;
        HTMLCSS.Augment({
          operaHeightBug: true,
          operaVerticalAlignBug: true,
          operaFontSizeBug: browser.versionAtLeast("10.61"),
          initialSkipBug: true,
          FontFaceBug: true,
          PaddingWidthBug: true,
          allowWebFonts: (browser.versionAtLeast("10.0") && !browser.isMini ? "otf" : false),
          adjustAvailableFonts: HTMLCSS.removeSTIXfonts
        });
      },

      Konqueror: function (browser) {
        HTMLCSS.Augment({
          konquerorVerticalAlignBug: true
        });
      }
    });
  
  });

  MathJax.Hub.Register.StartupHook("End Cookie", function () {  
    if (HUB.config.menuSettings.zoom !== "None")
      {AJAX.Require("[MathJax]/extensions/MathZoom.js")}
  });
    
})(MathJax.Ajax, MathJax.Hub, MathJax.OutputJax["HTML-CSS"]);

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var c="2.2.1";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];a.mtable.Augment({toHTML:function(t){t=this.HTMLcreateSpan(t);if(this.data.length===0){return t}var K=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");var aJ=K.width.match(/%$/);var ay=b.createStack(t);var aG=this.HTMLgetScale(),aA=this.HTMLgetMu(t),aB=-1;var aq=[],au=[],ak=[],aw=[],av=[],af,ae,ap=-1,ad,ao,Z,aF,R,aC,aO=[];var al=b.FONTDATA.baselineskip*aG*K.useHeight,aT,I=b.FONTDATA.lineH*aG,O=b.FONTDATA.lineD*aG;for(af=0,ad=this.data.length;af<ad;af++){aF=this.data[af];Z=(aF.type==="mlabeledtr"?aB:0);aw[af]=[];aq[af]=au[af]=0;for(ae=Z,ao=aF.data.length+Z;ae<ao;ae++){if(ak[ae]==null){if(ae>ap){ap=ae}av[ae]=b.createStack(b.createBox(ay));ak[ae]=-b.BIGDIMEN}aw[af][ae]=b.createBox(av[ae]);aO.push(aF.data[ae-Z].toHTML(aw[af][ae]))}}b.MeasureSpans(aO);for(af=0,ad=this.data.length;af<ad;af++){aF=this.data[af];Z=(aF.type==="mlabeledtr"?aB:0);for(ae=Z,ao=aF.data.length+Z;ae<ao;ae++){R=aF.data[ae-Z];if(R.isMultiline){aw[af][ae].style.width="100%"}if(R.isEmbellished()){aC=R.CoreMO();var aS=aC.Get("minsize",true);if(aS){var aL=aC.HTMLspanElement().bbox;if(aC.HTMLcanStretch("Vertical")){aT=aL.h+aL.d;if(aT){aS=b.length2em(aS,aA,aT);if(aS*aL.h/aT>aq[af]){aq[af]=aS*aL.h/aT}if(aS*aL.d/aT>au[af]){au[af]=aS*aL.d/aT}}}else{if(aC.HTMLcanStretch("Horizontal")){aS=b.length2em(aS,aA,aL.w);if(aS>ak[ae]){ak[ae]=aS}}}}}if(aw[af][ae].bbox.h>aq[af]){aq[af]=aw[af][ae].bbox.h}if(aw[af][ae].bbox.d>au[af]){au[af]=aw[af][ae].bbox.d}if(aw[af][ae].bbox.w>ak[ae]){ak[ae]=aw[af][ae].bbox.w}}}if(aq[0]+au[0]){aq[0]=Math.max(aq[0],I)}if(aq[aw.length-1]+au[aw.length-1]){au[aw.length-1]=Math.max(au[aw.length-1],O)}var aE=MathJax.Hub.SplitList;var az=aE(K.columnspacing),aQ=aE(K.rowspacing),e=aE(K.columnalign),E=aE(K.rowalign),d=aE(K.columnlines),z=aE(K.rowlines),aM=aE(K.columnwidth),V=[];for(af=0,ad=az.length;af<ad;af++){az[af]=b.length2em(az[af],aA)}for(af=0,ad=aQ.length;af<ad;af++){aQ[af]=b.length2em(aQ[af],aA)}while(az.length<ap){az.push(az[az.length-1])}while(e.length<=ap){e.push(e[e.length-1])}while(d.length<ap){d.push(d[d.length-1])}while(aM.length<=ap){aM.push(aM[aM.length-1])}while(aQ.length<aw.length){aQ.push(aQ[aQ.length-1])}while(E.length<=aw.length){E.push(E[E.length-1])}while(z.length<aw.length){z.push(z[z.length-1])}if(av[aB]){e[aB]=(K.side.substr(0,1)==="l"?"left":"right");az[aB]=-ak[aB]}for(af=0,ad=aw.length;af<ad;af++){aF=this.data[af];V[af]=[];if(aF.rowalign){E[af]=aF.rowalign}if(aF.columnalign){V[af]=aE(aF.columnalign);while(V[af].length<=ap){V[af].push(V[af][V[af].length-1])}}}if(K.equalrows){var aD=Math.max.apply(Math,aq),X=Math.max.apply(Math,au);for(af=0,ad=aw.length;af<ad;af++){Z=((aD+X)-(aq[af]+au[af]))/2;aq[af]+=Z;au[af]+=Z}}aT=aq[0]+au[aw.length-1];for(af=0,ad=aw.length-1;af<ad;af++){aT+=Math.max((aq[af]+au[af]?al:0),au[af]+aq[af+1]+aQ[af])}var aI=0,aH=0,aV,g=aT;if(K.frame!=="none"||(K.columnlines+K.rowlines).match(/solid|dashed/)){var w=aE(K.framespacing);if(w.length!=2){w=aE(this.defaults.framespacing)}aI=b.length2em(w[0],aA);aH=b.length2em(w[1],aA);g=aT+2*aH}var aj,aU,ab="";if(typeof(K.align)!=="string"){K.align=String(K.align)}if(K.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)){ab=RegExp.$3;K.align=RegExp.$1}else{K.align=this.defaults.align}if(ab!==""){ab=parseInt(ab);if(ab<0){ab=aw.length+1+ab}if(ab<1){ab=1}else{if(ab>aw.length){ab=aw.length}}aj=0;aU=-(aT+aH)+aq[0];for(af=0,ad=ab-1;af<ad;af++){var N=Math.max((aq[af]+au[af]?al:0),au[af]+aq[af+1]+aQ[af]);aj+=N;aU+=N}}else{aj=({top:-(aq[0]+aH),bottom:aT+aH-aq[0],center:aT/2-aq[0],baseline:aT/2-aq[0],axis:aT/2+b.TeX.axis_height*aG-aq[0]})[K.align];aU=({top:-(aT+2*aH),bottom:0,center:-(aT/2+aH),baseline:-(aT/2+aH),axis:b.TeX.axis_height*aG-aT/2-aH})[K.align]}var ac,ag=0,B=0,L=0,aa=0,ah=0,an=[],at=[],S=1;if(K.equalcolumns&&K.width!=="auto"){if(aJ){ac=(100/(ap+1)).toFixed(2).replace(/\.?0+$/,"")+"%";for(af=0,ad=Math.min(ap+1,aM.length);af<ad;af++){aM[af]=ac}ac=0;ag=1;ah=ap+1;for(af=0,ad=Math.min(ap+1,az.length);af<ad;af++){ac+=az[af]}}else{ac=b.length2em(K.width,aA);for(af=0,ad=Math.min(ap+1,az.length);af<ad;af++){ac-=az[af]}ac/=ap+1;for(af=0,ad=Math.min(ap+1,aM.length);af<ad;af++){ak[af]=ac}}}else{for(af=0,ad=Math.min(ap+1,aM.length);af<ad;af++){if(aM[af]==="auto"){B+=ak[af]}else{if(aM[af]==="fit"){at[ah]=af;ah++;B+=ak[af]}else{if(aM[af].match(/%$/)){an[aa]=af;aa++;L+=ak[af];ag+=b.length2em(aM[af],aA,1)}else{ak[af]=b.length2em(aM[af],aA);B+=ak[af]}}}}if(aJ){ac=0;for(af=0,ad=Math.min(ap,az.length);af<ad;af++){ac+=az[af]}if(ag>0.98){S=0.98/ag;ag=0.98}}else{if(K.width==="auto"){if(ag>0.98){S=L/(B+L);ac=B+L}else{ac=B/(1-ag)}}else{ac=b.length2em(K.width,aA);for(af=0,ad=Math.min(ap+1,az.length);af<ad;af++){ac-=az[af]}}for(af=0,ad=an.length;af<ad;af++){ak[an[af]]=b.length2em(aM[an[af]],aA,ac*S);B+=ak[an[af]]}if(Math.abs(ac-B)>0.01){if(ah&&ac>B){ac=(ac-B)/ah;for(af=0,ad=at.length;af<ad;af++){ak[at[af]]+=ac}}else{ac=ac/B;for(ae=0;ae<=ap;ae++){ak[ae]*=ac}}}if(K.equalcolumns){var Q=Math.max.apply(Math,ak);for(ae=0;ae<=ap;ae++){ak[ae]=Q}}}}var T=aj,o,r,aR;Z=(av[aB]?aB:0);for(ae=Z;ae<=ap;ae++){for(af=0,ad=aw.length;af<ad;af++){if(aw[af][ae]){Z=(this.data[af].type==="mlabeledtr"?aB:0);R=this.data[af].data[ae-Z];if(R.HTMLcanStretch("Horizontal")){aw[af][ae].bbox=R.HTMLstretchH(av[ae],ak[ae]).bbox}else{if(R.HTMLcanStretch("Vertical")){aC=R.CoreMO();var aK=aC.symmetric;aC.symmetric=false;aw[af][ae].bbox=R.HTMLstretchV(av[ae],aq[af],au[af]).bbox;aw[af][ae].HH=null;aC.symmetric=aK}}aR=R.rowalign||this.data[af].rowalign||E[af];o=({top:aq[af]-aw[af][ae].bbox.h,bottom:aw[af][ae].bbox.d-au[af],center:((aq[af]-au[af])-(aw[af][ae].bbox.h-aw[af][ae].bbox.d))/2,baseline:0,axis:0})[aR]||0;aR=(R.columnalign||V[af][ae]||e[ae]);b.alignBox(aw[af][ae],aR,T+o)}if(af<aw.length-1){T-=Math.max((aq[af]+au[af]?al:0),au[af]+aq[af+1]+aQ[af])}}T=aj}if(aJ){var G=b.createBox(ay);G.style.left=G.style.top=0;G.style.right=b.Em(ac+2*aI);G.style.display="inline-block";G.style.height="0px";if(b.msieRelativeWidthBug){G=b.createBox(G);G.style.position="relative";G.style.height="1em";G.style.width="100%";G.bbox=ay.bbox}var aP=0,aW=aI,k,l;if(ah){k=100*(1-ag)/ah,l=B/ah}else{k=100*(1-ag)/(ap+1);l=B/(ap+1)}for(ae=0;ae<=ap;ae++){b.placeBox(av[ae].parentNode,0,0);av[ae].style.position="relative";av[ae].style.left=b.Em(aW);av[ae].style.width="100%";av[ae].parentNode.parentNode.removeChild(av[ae].parentNode);var am=b.createBox(G);b.addBox(am,av[ae]);av[ae]=am;var h=am.style;h.display="inline-block";h.left=aP+"%";if(aM[ae].match(/%$/)){var u=parseFloat(aM[ae])*S;if(ah===0){h.width=(k+u)+"%";aP+=k+u;am=b.createBox(am);b.addBox(am,av[ae].firstChild);am.style.left=0;am.style.right=b.Em(l);aW-=l}else{h.width=u+"%";aP+=u}}else{if(aM[ae]==="fit"||ah===0){h.width=k+"%";am=b.createBox(am);b.addBox(am,av[ae].firstChild);am.style.left=0;am.style.right=b.Em(l-ak[ae]);aW+=ak[ae]-l;aP+=k}else{h.width=b.Em(ak[ae]);aW+=ak[ae]}}if(b.msieRelativeWidthBug){b.addText(am.firstChild,b.NBSP);am.firstChild.style.position="relative"}aW+=az[ae];if(d[ae]!=="none"&&ae<ap&&ae!==aB){r=b.createBox(G);r.style.left=aP+"%";r=b.createRule(r,g,0,1.25/b.em);r.style.position="absolute";r.bbox={h:g,d:0,w:0,rw:1.25/b.em,lw:0};r.parentNode.bbox=ay.bbox;b.placeBox(r,aW-az[ae]/2,aU,true);r.style.borderStyle=d[ae]}}}else{var U=aI;for(ae=0;ae<=ap;ae++){if(!av[ae].bbox.width){b.setStackWidth(av[ae],ak[ae])}if(aM[ae]!=="auto"&&aM[ae]!=="fit"){av[ae].bbox.width=ak[ae];av[ae].bbox.isFixed=true}b.placeBox(av[ae].parentNode,U,0);U+=ak[ae]+az[ae];if(d[ae]!=="none"&&ae<ap&&ae!==aB){r=b.createRule(ay,g,0,1.25/b.em);b.addBox(ay,r);r.bbox={h:g,d:0,w:0,rw:1.25/b.em,lw:0};b.placeBox(r,U-az[ae]/2,aU,true);r.style.borderStyle=d[ae]}}}ay.bbox.d=-aU;ay.bbox.h=g+aU;b.setStackWidth(ay,ay.bbox.w+aI);aV=ay.bbox.w;var ai;if(K.frame!=="none"){ai=b.createFrame(ay,g,0,aV,1.25/b.em,K.frame);b.addBox(ay,ai);b.placeBox(ai,0,aU,true);if(aJ){ai.style.width="100%"}}T=aj;for(af=0,ad=aw.length-1;af<ad;af++){o=Math.max(al,au[af]+aq[af+1]+aQ[af]);if(z[af]!=="none"){r=b.createRule(ay,1.25/b.em,0,aV);b.addBox(ay,r);r.bbox={h:1.25/b.em,d:0,w:aV,rw:aV,lw:0};b.placeBox(r,0,T-au[af]-(o-au[af]-aq[af+1])/2,true);if(z[af]==="dashed"||aJ){r.style.borderTop=r.style.height+" "+z[af];r.style.height=0;r.style.width=r.style.borderLeftWidth;r.style.borderLeft="";if(aJ){r.style.width="100%"}}}T-=o}if(aJ){t.bbox.width=K.width;ay.style.width="100%"}if(av[aB]){var ax=ay.bbox.w,q;var ar=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");if(ar.indentalignfirst!==a.INDENTALIGN.INDENTALIGN){ar.indentalign=ar.indentalignfirst}if(ar.indentalign===a.INDENTALIGN.AUTO){ar.indentalign=this.displayAlign}if(ar.indentshiftfirst!==a.INDENTSHIFT.INDENTSHIFT){ar.indentshift=ar.indentshiftfirst}if(ar.indentshift==="auto"){ar.indentshift=this.displayIndent}var aN=b.createStack(t,false,"100%");b.addBox(aN,ay);b.alignBox(ay,ar.indentalign,0);if(ar.indentshift&&ar.indentalign!==a.INDENTALIGN.CENTER){q=b.length2em(ar.indentshift,aA);ax+=q;ay.style[ar.indentalign]=b.Em(q)}av[aB].parentNode.parentNode.removeChild(av[aB].parentNode);b.addBox(aN,av[aB]);b.alignBox(av[aB],e[aB],0);if(b.msieRelativeWidthBug){ay.style.top=av[aB].style.top=""}if(aJ){ay.style.width=K.width;t.bbox.width="100%"}q=b.length2em(K.minlabelspacing,aA);av[aB].style.marginRight=av[aB].style.marginLeft=b.Em(q);if(ar.indentalign===a.INDENTALIGN.CENTER){ax+=4*q+2*av[aB].bbox.w}else{if(ar.indentalign!==e[aB]){ax+=2*q+av[aB].bbox.w}}t.style.minWidth=t.bbox.minWidth=aN.style.minWidth=aN.bbox.minWidth=b.Em(ax)}if(!aJ){this.HTMLhandleSpace(t)}var v=this.HTMLhandleColor(t);if(v&&aJ){if(!ai){ai=b.createFrame(ay,g,0,aV,0,"none");b.addBox(ay,ai);b.placeBox(ai,0,aU,true);ai.style.width="100%"}ai.style.backgroundColor=v.style.backgroundColor;ai.parentNode.insertBefore(ai,ai.parentNode.firstChild);v.parentNode.removeChild(v)}return t},HTMLhandleSpace:function(d){d.bbox.keepPadding=true;d.bbox.exact=true;if(!this.hasFrame&&d.bbox.width==null){d.style.paddingLeft=d.style.paddingRight=b.Em(1/6)}this.SUPER(arguments).HTMLhandleSpace.call(this,d)}});a.mtd.Augment({toHTML:function(e,d,g){e=this.HTMLcreateSpan(e);if(this.data[0]){var f=this.data[0].toHTML(e);if(g!=null){f=this.data[0].HTMLstretchV(e,d,g)}else{if(d!=null){f=this.data[0].HTMLstretchH(e,d)}}e.bbox=f.bbox}this.HTMLhandleSpace(e);this.HTMLhandleColor(e);return e},HTMLstretchH:a.mbase.HTMLstretchH,HTMLstretchV:a.mbase.HTMLstretchV});MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/mtable.js")});

MathJax.Ajax.loadComplete("[MathJax]/config/TeX-MML-AM_HTMLorMML-full.js");
