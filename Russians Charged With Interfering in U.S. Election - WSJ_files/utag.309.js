//tealium universal tag - utag.309 ut4.0.201708251323, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
ncg_data=window.ncg_data||{};ncg_data.user_id=utag.data['cp.TR']==undefined?'':utag.data['cp.TR'];ncg_data.user_provider='inhouse';ncg_data.user_memtype=utag.data['user_type'];ncg_data.browser_dmp_id=utag.data['cp.bknx_fa'];ncg_data.browser_ads_ppid='';ncg_data.browser_ads_provider='dfp';ncg_data.browser_analytics_id=utag.data.adobe_visitor_id;ncg_data.browser_analytics_provider='omniture';(function(){var body=document.body||document.getElementsByTagName('body')[0],scr=document.createElement('script');scr.defer=1;scr.async=1;scr.src='//us.tags.newscgp.com/prod/ncg/ncg.js';body.appendChild(scr);}());}};utag.o[loader].loader.LOAD(id);})("309","wsjdn.wsj");}catch(error){utag.DB(error);}
