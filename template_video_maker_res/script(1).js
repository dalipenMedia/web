window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme13"]=window.wsb["Theme13"]||window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-192941\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"source-sans-pro\",\"montserrat\"],\"colors\":[\"#6F6F6F\"],\"locale\":\"zh-SG\",\"language\":\"zh\",\"resellerId\":1,\"internalLinks\":{\"695bb24f-ea46-4352-8483-ccf3cc3755a7\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":\"7e2d5dd8-c3fc-4671-8819-0db9c2cf1d63\",\"routePath\":\"/about-us\"},\"c35e105e-3a38-4cc2-a439-fa2a123d3535\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":\"7e2d5dd8-c3fc-4671-8819-0db9c2cf1d63\",\"routePath\":\"/about-us\"},\"4919ded7-d799-4da1-aae9-6d15560c78ad\":{\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"widgetId\":null,\"routePath\":\"/kolayapp\"},\"162de4c9-5cf1-4987-aa05-26485f7674e3\":{\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"widgetId\":\"59abc4cb-0171-41d6-b786-527483c82eb2\",\"routePath\":\"/template-video-maker\"},\"17fd595f-4069-409a-897b-2ade95bd8ea9\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":\"cfc55778-ded3-4cd0-ba06-4624c18eff8a\",\"routePath\":\"/about-us\"},\"8d80941b-6641-4af8-ba75-5a3916e891c4\":{\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"widgetId\":\"5b586826-2275-4a14-95e0-1a015b22999a\",\"routePath\":\"/kolayapp\"},\"26d1b1cd-b83d-4ab4-b64a-eb37b0625ded\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":null,\"routePath\":\"/about-us\"},\"18fea099-9d9f-4172-a210-ef4f8df9092e\":{\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"widgetId\":null,\"routePath\":\"/template-video-maker\"},\"4f3a2727-c43d-4caa-842c-fdf6b6b2a968\":{\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"widgetId\":null,\"routePath\":\"/kolayapp\"}},\"isHomepage\":true,\"navigationMap\":{\"287f429b-ed6e-416e-aa2a-319409973b79\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"name\":\"Template Video Maker\",\"href\":\"/template-video-maker\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"name\":\"About Us\",\"href\":\"/about-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"56b8870e-df7c-40df-b150-8a55f0418089\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"56b8870e-df7c-40df-b150-8a55f0418089\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5736fcaf-61bf-4bfb-a394-a4d02cc6d069\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5736fcaf-61bf-4bfb-a394-a4d02cc6d069\",\"name\":\"Contact Information\",\"href\":\"/contact-information\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"79197ad5-3902-4e90-81d7-fff854da9b3f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"name\":\"KolayApp\",\"href\":\"/kolayapp\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ee545362-903f-4b37-bc1e-d21c11adb121\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ee545362-903f-4b37-bc1e-d21c11adb121\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#6F6F6F\",\"meta\":{\"primary\":\"rgb(111, 111, 111)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]},\"alternate\":{\"id\":\"source-sans-pro\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":20,\"alternate\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"logo\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":700,\"weights\":[600,700],\"styles\":{\"letterSpacing\":\"4px\",\"textTransform\":\"uppercase\",\"fontWeight\":700,\"fontSize\":\"xlarge\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-192939-navId-mobile\",\"uniqueId\":\"n-192939\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"zh-SG\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"HeaderMedia\",\"groupType\":\"Fill\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.8}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-192951\",\"label\":\"\u66F4\u591A\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-192948\",\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"zh-SG\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.8}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(w),i&&(g=s.pop(),f(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,f),h(d,0,n,I),h(s,n,s.length,I),h(d,n,s.length,f),f(p)}else s.forEach(f),I(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function w(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function I(e){e.style.display="none",e.classList.remove("visible")}function f(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-192950\",\"logoImageId\":\"logo-192947\",\"containerId\":\"navBarId-192948\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;if(!t||t.style.height)return;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav192942\",\"anchorId\":\"header_stickynav-anchor192943\",\"logoHeight\":25,\"hasAnimation\":true}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"source-sans-pro\",\"montserrat\"],\"colors\":[\"#6F6F6F\"],\"fontScale\":\"medium\",\"locale\":\"zh-SG\",\"language\":\"zh\",\"resellerId\":1,\"internalLinks\":{\"695bb24f-ea46-4352-8483-ccf3cc3755a7\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":\"7e2d5dd8-c3fc-4671-8819-0db9c2cf1d63\",\"routePath\":\"/about-us\"},\"c35e105e-3a38-4cc2-a439-fa2a123d3535\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":\"7e2d5dd8-c3fc-4671-8819-0db9c2cf1d63\",\"routePath\":\"/about-us\"},\"4919ded7-d799-4da1-aae9-6d15560c78ad\":{\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"widgetId\":null,\"routePath\":\"/kolayapp\"},\"162de4c9-5cf1-4987-aa05-26485f7674e3\":{\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"widgetId\":\"59abc4cb-0171-41d6-b786-527483c82eb2\",\"routePath\":\"/template-video-maker\"},\"17fd595f-4069-409a-897b-2ade95bd8ea9\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":\"cfc55778-ded3-4cd0-ba06-4624c18eff8a\",\"routePath\":\"/about-us\"},\"8d80941b-6641-4af8-ba75-5a3916e891c4\":{\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"widgetId\":\"5b586826-2275-4a14-95e0-1a015b22999a\",\"routePath\":\"/kolayapp\"},\"26d1b1cd-b83d-4ab4-b64a-eb37b0625ded\":{\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"widgetId\":null,\"routePath\":\"/about-us\"},\"18fea099-9d9f-4172-a210-ef4f8df9092e\":{\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"widgetId\":null,\"routePath\":\"/template-video-maker\"},\"4f3a2727-c43d-4caa-842c-fdf6b6b2a968\":{\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"widgetId\":null,\"routePath\":\"/kolayapp\"}},\"isHomepage\":true,\"navigationMap\":{\"287f429b-ed6e-416e-aa2a-319409973b79\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"name\":\"Template Video Maker\",\"href\":\"/template-video-maker\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3c0f4b6a-4e69-4acd-b6cb-14c338cb0fdf\",\"name\":\"About Us\",\"href\":\"/about-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"56b8870e-df7c-40df-b150-8a55f0418089\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"56b8870e-df7c-40df-b150-8a55f0418089\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5736fcaf-61bf-4bfb-a394-a4d02cc6d069\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5736fcaf-61bf-4bfb-a394-a4d02cc6d069\",\"name\":\"Contact Information\",\"href\":\"/contact-information\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"79197ad5-3902-4e90-81d7-fff854da9b3f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"79197ad5-3902-4e90-81d7-fff854da9b3f\",\"name\":\"KolayApp\",\"href\":\"/kolayapp\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ee545362-903f-4b37-bc1e-d21c11adb121\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ee545362-903f-4b37-bc1e-d21c11adb121\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#6F6F6F\",\"meta\":{\"primary\":\"rgb(111, 111, 111)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]},\"alternate\":{\"id\":\"source-sans-pro\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":20,\"alternate\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"logo\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":700,\"weights\":[600,700],\"styles\":{\"letterSpacing\":\"4px\",\"textTransform\":\"uppercase\",\"fontWeight\":700,\"fontSize\":\"xlarge\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.renderBootstrap({elId:'bs-3',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"dalipen.com\",\"reamazeBrandId\":\"06b8b347-1b67-4e45-827f-99b0511a2a0f\",\"welcomeMessage\":\"\u60A8\u597D\uFF01\u8BF7\u544A\u8BC9\u6211\u4EEC\u5982\u4F55\u63D0\u4F9B\u5E2E\u52A9\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u56DE\u590D\u3002\",\"formSuccessMessage\":\"\u611F\u8C22\u60A8\u7684\u7559\u8A00\u3002\u6211\u4EEC\u5C06\u5C3D\u5FEB\u56DE\u590D\u60A8\u3002\",\"emailOptInMessage\":\"\u767B\u5F55\u4EE5\u63A5\u6536\u7535\u5B50\u90AE\u4EF6\u66F4\u65B0\u3001\u516C\u544A\u7B49\u7B49\u3002\",\"emailOptInEnabled\":false,\"domainName\":\"dalipen.com\",\"cookieBannerEnabled\":false,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"\u59D3\u540D\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"\u79FB\u52A8\u8BBE\u5907\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"\u90AE\u7BB1\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"\u6211\u4EEC\u5982\u4F55\u63D0\u4F9B\u5E2E\u52A9\uFF1F\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"\u53D1\u9001\"}],\"accountId\":\"20747972-b030-11ee-8331-3417ebe73f0e\",\"websiteId\":\"06b8b347-1b67-4e45-827f-99b0511a2a0f\",\"id\":\"7468db81-76b7-4601-be4c-c5b246fa465d\",\"staticContent\":{\"submitButtonLoadingLabel\":\"\u53D1\u9001\",\"infoStartTitle\":\"\u5BF9\u8BDD\",\"contactFormResponseErrorMessage\":\"\u5728\u53D1\u9001\u60A8\u7684\u6D88\u606F\u65F6\u51FA\u73B0\u4E86\u4E00\u4E9B\u95EE\u9898\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002\",\"infoStartDesc\":\"\u5FEB\u901F\u667A\u80FD\u5730\u56DE\u590D\u7F51\u7AD9\u6D88\u606F\u3001\u6587\u672C\u6D88\u606F\u548C Facebook Messenger\u3002\u968F\u65F6\u968F\u5730\u901A\u8FC7\u624B\u673A\u63A5\u6536\u5373\u65F6\u901A\u77E5\u5E76\u505A\u51FA\u56DE\u590D\u3002\",\"infoStartTag\":\"\u65B0\u54C1\",\"phoneValidationErrorMessage\":\"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u8BDD\u53F7\u7801\u3002\",\"defaultCancelButtonLabel\":\"\u53D6\u6D88\",\"contactsLinkInfoMessaging\":\"\u5728\u201C\u8054\u7CFB\u4EBA\u201D\u4E2D\u8BB0\u5F55\u4E86\u6765\u81EA\u60A8\u7684\u7F51\u7AD9\u6D88\u606F\u8868\u5355\u7684\u8054\u7CFB\u4EBA\u3002\",\"defaultSubmitButtonLabel\":\"\u53D1\u9001\",\"endOfChat\":\"\u804A\u5929\u7ED3\u675F\",\"infoConnectedDesc\":\"\u60A8\u5DF2\u8FDE\u63A5\u5230 Conversations \u79FB\u52A8\u8BBE\u5907\u5E94\u7528\u7A0B\u5E8F\uFF0C\u76EE\u524D\u6B63\u5728\u901A\u8FC7\u8BE5\u7A0B\u5E8F\u63A5\u6536\u6240\u6709\u7F51\u7AD9\u6D88\u606F\u3002\",\"infoRecommendedTag\":\"\u5EFA\u8BAE\",\"infoStartLink\":\"\u7ACB\u5373\u8D2D\u4E70\",\"phoneUsOnlyValidationErrorMessage\":\"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7F8E\u56FD\u624B\u673A\u53F7\u7801\u3002\",\"infoIncludedTag\":\"\u5305\u542B\",\"infoPublishRequiredDesc\":\"\u9700\u8981\u53D1\u5E03\u624D\u80FD\u5B8C\u6210\u542F\u7528\u6B64\u529F\u80FD\u7684\u7B2C\u4E00\u6B65\u3002\",\"infoPendingLoginDesc\":\"\u6211\u4EEC\u5DF2\u5411\u60A8\u53D1\u9001\u4E86\u4E00\u6761\u6587\u672C\u6D88\u606F\uFF0C\u7528\u4E8E\u4E0B\u8F7D Conversations \u5E94\u7528\u7A0B\u5E8F\u3002\u8BF7\u4E0B\u8F7D\u5E76\u5B89\u88C5\uFF0C\u4EE5\u5B8C\u6210\u8BBE\u7F6E\u3002\",\"termsOfSerivce\":\"\u670D\u52A1\u6761\u6B3E\",\"infoUnavailableDesc\":\"\u76EE\u524D\uFF0C\u6211\u4EEC\u4EC5\u5141\u8BB8\u5728\u4E00\u4E2A\u7F51\u7AD9\u4F7F\u7528\u6B64\u529F\u80FD\u3002\u8981\u5728\u76F8\u5E94\u7F51\u7AD9\u4E0A\u4F7F\u7528\u6B64\u529F\u80FD\uFF0C\u8BF7\u65AD\u5F00\u6B63\u5728\u4F7F\u7528\u7684\u540C\u7C7B\u529F\u80FD\u3002\",\"recaptchaDisclosure\":\"\u672C\u7F51\u7AD9\u53D7 reCAPTCHA \u4FDD\u62A4\u5E76\u9002\u7528 Google {privacyPolicy}\u548C{termsOfSerivce}\u3002\",\"emailValidationErrorMessage\":\"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"\u5BF9\u8BDD\",\"requiredValidationErrorMessage\":\"\u8BF7\u586B\u5199\u8BE5\u5FC5\u586B\u5B57\u6BB5\",\"infoUnavailableTag\":\"\u672A\u53D1\u552E\",\"contactsLinkText\":\"\u7BA1\u7406\u200C\u6211\u7684\u8054\u7CFB\u4EBA\",\"privacyPolicy\":\"\u9690\u79C1\u653F\u7B56\",\"infoPublishRequiredLink\":\"\u7ACB\u5373\u53D1\u5E03\",\"infoPendingLoginLink\":\"\u91CD\u65B0\u53D1\u9001\u94FE\u63A5\",\"infoConnectedTitle\":\"Conversations \u79FB\u52A8\u8BBE\u5907\u5E94\u7528\u7A0B\u5E8F\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"\u63D0\u4EA4\u60A8\u7684\u7535\u8BDD\u53F7\u7801\uFF0C\u5373\u8868\u660E\u60A8\u540C\u610F\u63A5\u6536\u6211\u4EEC\u7684\u6587\u672C\u4FE1\u606F\u3002\u53EF\u80FD\u4F1A\u4EA7\u751F\u77ED\u4FE1\u8D39/\u6570\u636E\u6D41\u91CF\u8D39\u3002\",\"emailMaxCountValidationErrorMessage\":\"\u60A8\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u592A\u957F\",\"infoConnectedTag\":\"\u5DF2\u8FDE\u63A5\"},\"emailConfirmationMessage\":\"\u6211\u4EEC\u5DF2\u5411\u60A8\u53D1\u9001\u786E\u8BA4\u7535\u5B50\u90AE\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u94FE\u63A5\u9A8C\u8BC1\u60A8\u7684\u5730\u5740\u3002\",\"recaptchaType\":null,\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u544A\u8BC9\u6211\u3002\",\"reamazePromptEnabled\":true,\"reamazeThemeColor\":\"#6F6F6F\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"\u8C22\u8C22\uFF01\u60A8\u7684\u6D88\u606F\u5DF2\u63D0\u4EA4\u3002\u6211\u4EEC\u5C06\u5728\u6B64\u5904\u6216\u4EE5\u7535\u90AE\u5F62\u5F0F\u56DE\u590D\u60A8\u3002\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"7468db81-76b7-4601-be4c-c5b246fa465d\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"zh-SG\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"7468db81-76b7-4601-be4c-c5b246fa465d\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-192938').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":"Fill","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"LOGOS","wam_site_homepageFirstWidgetPreset":"logos1","wam_site_businessCategory":"itservices","wam_site_theme":"layout13","wam_site_locale":"zh-SG","wam_site_fontPack":"playfair-display","wam_site_cookieBannerEnabled":false,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"business","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);