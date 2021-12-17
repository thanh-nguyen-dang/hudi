"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7557],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),g=o,m=f["".concat(u,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"Asynchronous Clustering using Hudi",excerpt:"How to setup Hudi for asynchronous clustering",author:"codope",category:"blog"},u=void 0,s={permalink:"/blog/2021/08/23/async-clustering",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-23-async-clustering.md",source:"@site/blog/2021-08-23-async-clustering.md",title:"Asynchronous Clustering using Hudi",description:"In one of the previous blog posts, we introduced a new",date:"2021-08-23T00:00:00.000Z",formattedDate:"August 23, 2021",tags:[],readingTime:6.055,truncated:!0,prevItem:{title:"Reliable ingestion from AWS S3 using Hudi",permalink:"/blog/2021/08/23/s3-events-source"},nextItem:{title:"Improving Marker Mechanism in Apache Hudi",permalink:"/blog/2021/08/18/improving-marker-mechanism"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In one of the ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/01/27/hudi-clustering-intro"},"previous blog")," posts, we introduced a new\nkind of table service called clustering to reorganize data for improved query performance without compromising on\ningestion speed. We learnt how to setup inline clustering. In this post, we will discuss what has changed since then and\nsee how asynchronous clustering can be setup using HoodieClusteringJob as well as DeltaStreamer utility."))}f.isMDXComponent=!0}}]);