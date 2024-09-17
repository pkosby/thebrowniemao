;/*FB_PKG_DELIM*/

__d("IGDSTabGroupContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);c=b;g["default"]=c}),98);
__d("useBoolean",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState;function a(a){a=j(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:i(function(){return c(function(a){return!a})},[]),setTrue:i(function(){return c(!0)},[]),setFalse:i(function(){return c(!1)},[])}}g["default"]=a}),98);
__d("IGDSTabBase.react",["BaseButton.react","IGDSTabGroupContext","IGDSText.react","PolarisFastLink.react","nullthrows","react","stylex","useBoolean"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useContext,l=b.c,m={bottomBorder:{borderBottomColor:"x1bs97v6",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},bottomBorderSelected:{borderBottomColor:"x1rx6pd",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},iconContainer:{fontSize:"xgxxoiu",height:"xxk0z11",$$css:!0},iconContainerWithMarginEnd:{marginEnd:"x1emribx",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",height:"xn3w4p2",justifyContent:"xl56j7k",lineHeight:"x17ydfre",textAlign:"x2b8uid",$$css:!0}};function a(a){var b=l(35),d=a.bottomBorder,e=a.linkXStyle,f=a.size,g=a.href,i=a.icon,n=a.label,o=a.onPress,p=a.value;a=c("useBoolean")(!1);var q=a.setFalse,r=a.setTrue;a=a.value;var s=k(c("IGDSTabGroupContext")),t,u;if(b[0]!==s||b[1]!==p||b[2]!==o||b[3]!==i||b[4]!==a||b[5]!==n){var v=c("nullthrows")(s),w=v.selectedValue,x=v.setSelectedValue;v=v.showLabels;v=v;u=p===w;w=function(){o&&o(),u||x(p)};t=i==null?null:j.jsx("span",{className:(h||(h=c("stylex")))(m.iconContainer,v&&m.iconContainerWithMarginEnd),children:j.jsx(i,{alt:n,color:a||u?"ig-primary-icon":"ig-secondary-icon",size:24})});b[0]=s;b[1]=p;b[2]=o;b[3]=i;b[4]=a;b[5]=n;b[6]=t;b[7]=v;b[8]=u;b[9]=w}else t=b[6],v=b[7],u=b[8],w=b[9];s=t;b[10]!==v||b[11]!==u||b[12]!==f||b[13]!==n?(i=v&&j.jsx("span",{"aria-hidden":!0,className:"x6s0dn4 xrvj5dj xa74l3y",children:j.jsx("span",{className:"x1pz0jrs x8j7owd",children:j.jsx(c("IGDSText.react"),{color:u?"primaryText":"tertiaryText",size:f,weight:"bold",children:n})})}),b[10]=v,b[11]=u,b[12]=f,b[13]=n,b[14]=i):i=b[14];b[15]!==s||b[16]!==i?(a=j.jsxs(j.Fragment,{children:[s,i]}),b[15]=s,b[16]=i,b[17]=a):a=b[17];t=a;if(g!=null){v=d===!0&&(u?m.bottomBorderSelected:m.bottomBorder);b[18]!==e||b[19]!==v?(f=[m.root,e,v],b[18]=e,b[19]=v,b[20]=f):f=b[20];b[21]!==g||b[22]!==f||b[23]!==t?(s=j.jsx(c("PolarisFastLink.react"),{href:g,xstyle:f,children:t}),b[21]=g,b[22]=f,b[23]=t,b[24]=s):s=b[24];return s}i=d===!0&&(u?m.bottomBorderSelected:m.bottomBorder);b[25]!==e||b[26]!==i?(a=[m.root,e,i],b[25]=e,b[26]=i,b[27]=a):a=b[27];b[28]!==n||b[29]!==w||b[30]!==q||b[31]!==r||b[32]!==a||b[33]!==t?(v=j.jsx(c("BaseButton.react"),{"aria-label":n,onClick:w,onHoverEnd:q,onHoverStart:r,xstyle:a,children:t}),b[28]=n,b[29]=w,b[30]=q,b[31]=r,b[32]=a,b[33]=t,b[34]=v):v=b[34];return v}g["default"]=a}),98);
__d("IGDSHeroTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={leftAligned:{flexGrow:"x1c4vz4f",$$css:!0}};function a(a){var b=i(2),d;b[0]!==a?(d=j.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({},a,{linkXStyle:k.leftAligned,size:"label"})),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("IGDSTabGroup.react",["IGDSTabGroupContext","emptyFunction","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useMemo;var k=b.c,l={leftAligned:{alignItems:"x7a106z",display:"x78zum5",rowGap:"xp1r0qw",columnGap:"xtqikln",justifyContent:"x1nhvcw1",$$css:!0},root:{alignItems:"x6s0dn4",display:"xrvj5dj",gridTemplateColumns:"x1lp0lgv",width:"xh8yej3",$$css:!0}};function a(a){var b=k(17),d=a.children,e=a.leftAlign,f=a.onChange,g=a.showLabels;a=a.value;g=g===void 0?!0:g;var i=c("IGDSTabGroupContext");f=(f=f)!=null?f:c("emptyFunction");var m;b[0]!==a||b[1]!==f||b[2]!==g?(m={selectedValue:a,setSelectedValue:f,showLabels:g},b[0]=a,b[1]=f,b[2]=g,b[3]=m):m=b[3];a=m;f=a;b[4]!==d?(g=j.Children.toArray(d),b[4]=d,b[5]=g):g=b[5];m=g.length;b[6]!==m?(a={"--igdstabgroup-column-count":m},b[6]=m,b[7]=a):a=b[7];g=a;m=g;a=i.Provider;g=e===!0?l.leftAligned:l.root;b[8]!==g?(i=(h||(h=c("stylex")))(g),b[8]=g,b[9]=i):i=b[9];b[10]!==i||b[11]!==m||b[12]!==d?(e=j.jsx("div",{className:i,style:m,children:d}),b[10]=i,b[11]=m,b[12]=d,b[13]=e):e=b[13];b[14]!==f||b[15]!==e?(g=j.jsx(a,{value:f,children:e}),b[14]=f,b[15]=e,b[16]=g):g=b[16];return g}g["default"]=a}),98);
__d("IGDSHeroTabGroup.react",["IGDSDivider.react","IGDSTabGroup.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(10),d,e;b[0]!==a?(d=a.hasDivider,e=babelHelpers.objectWithoutPropertiesLoose(a,["hasDivider"]),b[0]=a,b[1]=d,b[2]=e):(d=b[1],e=b[2]);a=d===void 0?!0:d;b[3]!==e?(d=j.jsx(c("IGDSTabGroup.react"),babelHelpers["extends"]({},e,{leftAlign:!0})),b[3]=e,b[4]=d):d=b[4];b[5]!==a?(e=a&&j.jsx(c("IGDSDivider.react"),{}),b[5]=a,b[6]=e):e=b[6];b[7]!==d||b[8]!==e?(a=j.jsxs(j.Fragment,{children:[d,e]}),b[7]=d,b[8]=e,b[9]=a):a=b[9];return a}g["default"]=a}),98);
__d("IGDSTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(2),d;b[0]!==a?(d=j.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({bottomBorder:!0},a)),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("PolarisDSACommonStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__u0Be1d57Mpf__JHASH__");b=h._("__JHASH__3_D4NdH98Lo__JHASH__");c=h._("__JHASH__qDRbI_FRuW6__JHASH__");d=h._("__JHASH__boI5WtRuQ86__JHASH__");e=h._("__JHASH__zRp2s1FeNY5__JHASH__");f=h._("__JHASH___BqkzgA1P3H__JHASH__");g.SUGGESTED_FOR_YOU_HEADER=a;g.MORE_ACCOUNTS_HEADER=b;g.SEARCH_NOT_PERSONALIZED_HEADER=c;g.SEARCH_FOR_YOU_HEADER=d;g.FOR_YOU_HEADER=e;g.FOLLOWING_HEADER=f}),226);
__d("usePolarisNonPersonalizedTabsImpressionLogger",["polarisLogAction","react","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).c;function a(a){var b=i(2),d;b[0]!==a?(d={onImpressionStart:function(){c("polarisLogAction")("dsaTabImpression",{source:a})}},b[0]=a,b[1]=d):d=b[1];return c("useSinglePartialViewImpression")(d)}g["default"]=a}),98);
__d("PolarisSearchTabs.react",["IGDSTab.react","IGDSTabGroup.react","PolarisDSACommonStrings","PolarisReactRedux.react","PolarisSearchActions","PolarisSearchConstants","polarisLogAction","react","usePolarisNonPersonalizedTabsImpressionLogger","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(12),e=a.pendingQuery;a=c("usePolarisSelector")(k);var f=d("PolarisReactRedux.react").useDispatch(),g;b[0]!==f||b[1]!==e?(g=function(a){f(d("PolarisSearchActions").switchSearchTab(a,e)),c("polarisLogAction")("dsaTabSwitch",{intent_source:a===d("PolarisSearchConstants").SearchTabConstants["default"]?"default":"non_profiled",source:"search"})},b[0]=f,b[1]=e,b[2]=g):g=b[2];g=g;var h=c("usePolarisNonPersonalizedTabsImpressionLogger")("search"),l;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(l="x4afe7t x127lhb5",b[3]=l):l=b[3];var m;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(m=j.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_FOR_YOU_HEADER,value:d("PolarisSearchConstants").SearchTabConstants["default"]}),b[4]=m):m=b[4];var n;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(n=j.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_NOT_PERSONALIZED_HEADER,value:d("PolarisSearchConstants").SearchTabConstants.notPersonalized}),b[5]=n):n=b[5];b[6]!==g||b[7]!==a.currentSearchTab?(m=j.jsxs(c("IGDSTabGroup.react"),{onChange:g,value:a.currentSearchTab,children:[m,n]}),b[6]=g,b[7]=a.currentSearchTab,b[8]=m):m=b[8];b[9]!==h||b[10]!==m?(n=j.jsx("div",{className:l,ref:h,children:m}),b[9]=h,b[10]=m,b[11]=n):n=b[11];return n}function k(a){return a.search}g["default"]=a}),98);