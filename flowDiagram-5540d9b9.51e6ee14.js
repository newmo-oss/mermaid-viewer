function e(e,t,l,r){Object.defineProperty(e,t,{get:l,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree2db,l=t.register;l("kFzsa",function(l,r){e(l.exports,"isSubgraph",function(){return n}),e(l.exports,"edgeToId",function(){return i}),e(l.exports,"applyStyle",function(){return c}),e(l.exports,"applyClass",function(){return p}),e(l.exports,"applyTransition",function(){return b});var o=t("9nH1Y"),a=t("6hIcI");function n(e,t){return!!e.children(t).length}function i(e){return d(e.v)+":"+d(e.w)+":"+d(e.name)}var s=/:/g;function d(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function p(e,t,l){t&&e.attr("class",t).attr("class",l+" "+e.attr("class"))}function b(e,t){var l=t.graph();if(a.default(l)){var r=l.transition;if(o.default(r))return r(e)}return e}}),l("69vZK",function(l,r){e(l.exports,"addHtmlLabel",function(){return a});var o=t("kFzsa");function a(e,t){var l=e.append("foreignObject").attr("width","100000"),r=l.append("xhtml:div");r.attr("xmlns","http://www.w3.org/1999/xhtml");var a=t.label;switch(typeof a){case"function":r.insert(a);break;case"object":r.insert(function(){return a});break;default:r.html(a)}o.applyStyle(r,t.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap");var n=r.node().getBoundingClientRect();return l.attr("width",n.width).attr("height",n.height),l}}),l("lKGxb",function(l,r){e(l.exports,"f",function(){return w}),e(l.exports,"a",function(){return h});var o=t("55XQZ"),a=t("fMd7L"),n=t("sYKpE"),i=t("7twxt"),s=t("69vZK"),d=t("2oLRQ"),c=t("4i3RR");let p={},b=async function(e,t,l,r,o,a){let i=r.select(`[id="${l}"]`);for(let l of Object.keys(e)){let r;let d=e[l],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let p=(0,n.k)(d.styles),b=void 0!==d.text?d.text:d.id;if((0,n.l).info("vertex",d,d.labelType),"markdown"===d.labelType)(0,n.l).info("vertex",d,d.labelType);else if((0,n.m)((0,n.c)().flowchart.htmlLabels)){let e={label:b};(r=(0,s.addHtmlLabel)(i,e).node()).parentNode.removeChild(r)}else{let e=o.createElementNS("http://www.w3.org/2000/svg","text");for(let t of(e.setAttribute("style",p.labelStyle.replace("color:","fill:")),b.split(n.e.lineBreakRegex))){let l=o.createElementNS("http://www.w3.org/2000/svg","tspan");l.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),l.setAttribute("dy","1em"),l.setAttribute("x","1"),l.textContent=t,e.appendChild(l)}r=e}let u=0,f="";switch(d.type){case"round":u=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}let w=await (0,n.r)(b,(0,n.c)());t.setNode(d.id,{labelStyle:p.labelStyle,shape:f,labelText:w,labelType:d.labelType,rx:u,ry:u,class:c,style:p.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:a.db.getTooltip(d.id)||"",domId:a.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,n.c)().flowchart.padding}),(0,n.l).info("setNode",{labelStyle:p.labelStyle,labelType:d.labelType,shape:f,labelText:w,rx:u,ry:u,class:c,style:p.style,id:d.id,domId:a.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,n.c)().flowchart.padding})}},u=async function(e,t,l){let r,o;(0,n.l).info("abc78 edges = ",e);let i=0,s={};if(void 0!==e.defaultStyle){let t=(0,n.k)(e.defaultStyle);r=t.style,o=t.labelStyle}for(let l of e){i++;let d="L-"+l.start+"-"+l.end;void 0===s[d]?s[d]=0:s[d]++,(0,n.l).info("abc78 new entry",d,s[d]);let c=d+"-"+s[d];(0,n.l).info("abc78 new link id to be used is",d,c,s[d]);let b="LS-"+l.start,u="LE-"+l.end,f={style:"",labelStyle:""};switch(f.minlen=l.length||1,"arrow_open"===l.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",l.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let w="",g="";switch(l.stroke){case"normal":w="fill:none;",void 0!==r&&(w=r),void 0!==o&&(g=o),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==l.style){let e=(0,n.k)(l.style);w=e.style,g=e.labelStyle}f.style=f.style+=w,f.labelStyle=f.labelStyle+=g,void 0!==l.interpolate?f.curve=(0,n.n)(l.interpolate,a.curveLinear):void 0!==e.defaultInterpolate?f.curve=(0,n.n)(e.defaultInterpolate,a.curveLinear):f.curve=(0,n.n)(p.curve,a.curveLinear),void 0===l.text?void 0!==l.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=l.labelType,f.label=await (0,n.r)(l.text.replace(n.e.lineBreakRegex,"\n"),(0,n.c)()),void 0===l.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=c,f.classes="flowchart-link "+b+" "+u,t.setEdge(l.start,l.end,f,i)}},f=async function(e,t,l,r){let s,d;(0,n.l).info("Drawing flowchart");let c=r.db.getDirection();void 0===c&&(c="TD");let{securityLevel:p,flowchart:f}=(0,n.c)(),w=f.nodeSpacing||50,g=f.rankSpacing||50;"sandbox"===p&&(s=(0,a.select)("#i"+t));let h="sandbox"===p?(0,a.select)(s.nodes()[0].contentDocument.body):(0,a.select)("body"),y="sandbox"===p?s.nodes()[0].contentDocument:document,k=new o.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:w,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x=r.db.getSubGraphs();(0,n.l).info("Subgraphs - ",x);for(let e=x.length-1;e>=0;e--)d=x[e],(0,n.l).info("Subgraph - ",d),r.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let v=r.db.getVertices(),m=r.db.getEdges();(0,n.l).info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){d=x[S],(0,a.selectAll)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)(0,n.l).info("Setting up subgraphs",d.nodes[e],d.id),k.setParent(d.nodes[e],d.id)}await b(v,k,t,h,y,r),await u(m,k);let T=h.select(`[id="${t}"]`),_=h.select("#"+t+" g");if(await (0,i.r)(_,k,["point","circle","cross"],"flowchart",t),(0,n.u).insertTitle(T,"flowchartTitleText",f.titleTopMargin,r.db.getDiagramTitle()),(0,n.o)(k,T,f.diagramPadding,f.useMaxWidth),r.db.indexNodes("subGraph"+S),!f.htmlLabels)for(let e of y.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=e.getBBox(),l=y.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("rx",0),l.setAttribute("ry",0),l.setAttribute("width",t.width),l.setAttribute("height",t.height),e.insertBefore(l,e.firstChild)}Object.keys(v).forEach(function(e){let l=v[e];if(l.link){let r=(0,a.select)("#"+t+' [id="'+e+'"]');if(r){let e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",l.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",l.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===p?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):l.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",l.linkTarget);let t=r.insert(function(){return e},":first-child"),o=r.select(".label-container");o&&t.append(function(){return o.node()});let a=r.select(".label");a&&t.append(function(){return a.node()})}}})},w={setConf:function(e){for(let t of Object.keys(e))p[t]=e[t]},addVertices:b,addEdges:u,getClasses:function(e,t){return t.db.getClasses()},draw:f},g=(e,t)=>{let l=d.default,r=l(e,"r"),o=l(e,"g"),a=l(e,"b");return c.default(r,o,a,t)},h=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${g(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`});
//# sourceMappingURL=flowDiagram-5540d9b9.51e6ee14.js.map
