(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[3],{152:function(e){e.exports=JSON.parse('{"openapi":"3.0.0","info":{"version":"1.0.0","title":"TodoMVC"},"servers":[{"url":"https://api.example.com/v1"}],"paths":{"/form":{"get":{"summary":"List all forms","operationId":"getForms","responses":{"200":{"description":"An array of forms","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Forms"}}}}}},"post":{"summary":"Create a form","operationId":"postForm","responses":{"201":{"description":"Null response"}}},"put":{"summary":"Update a form","operationId":"putForm","responses":{"200":{"description":"Null response"}}}},"/form/draft":{"get":{"summary":"List draft forms","operationId":"getDraftForms","responses":{"200":{"description":"An array of forms","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Forms"}}}}}}},"/form/published":{"get":{"summary":"List published forms","operationId":"getPublishedForms","responses":{"200":{"description":"An array of forms","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Forms"}}}}}}},"/form/published/public":{"get":{"summary":"List published public forms","operationId":"getPublishedPublicForms","responses":{"200":{"description":"An array of forms","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Forms"}}}}}}},"/form/tags":{"get":{"summary":"List form tags","operationId":"getFormTags","responses":{"200":{"description":"An array of form tags","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Tags"}}}}}}},"/config/handlers":{"get":{"summary":"List form submission handlers","operationId":"getFormHandlers","responses":{"200":{"description":"An array of form submission handlers","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Handlers"}}}}}}},"/form/{formId}":{"get":{"summary":"Get a form by id","operationId":"getForm","parameters":[{"name":"formId","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}}],"responses":{"200":{"description":"A form","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Form"}}}}}},"delete":{"summary":"Delete a form","operationId":"deleteForm","parameters":[{"name":"formId","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}}],"responses":{"200":{"description":"Null response"}}}},"/form/{formId}/{formRev}":{"get":{"summary":"Get a form by id","operationId":"getFormRev","parameters":[{"name":"formId","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}},{"name":"formRev","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}}],"responses":{"200":{"description":"A form","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Form"}}}}}}},"/form/collated/{formId}":{"get":{"summary":"Get a self contained representation of form by id","operationId":"getAtomicForm","parameters":[{"name":"formId","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}}],"responses":{"200":{"description":"A form","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Form"}}}}}}},"/formgroup":{"get":{"summary":"List all form groups","operationId":"getFormGroups","responses":{"200":{"description":"An array of form groups","content":{"application/json":{"schema":{"$ref":"#/components/schemas/FormGroups"}}}}}},"post":{"summary":"Create a form group","operationId":"postFormGroup","responses":{"201":{"description":"Null response"}}},"put":{"summary":"Update a form group","operationId":"putFormGroup","responses":{"200":{"description":"Null response"}}}},"/formgroup/{formGroupId}":{"get":{"summary":"Get a form group by id","operationId":"getFormGroup","parameters":[{"name":"formGroupId","in":"path","required":true,"description":"The id of the form group","schema":{"type":"string"}}],"responses":{"200":{"description":"A form group","content":{"application/json":{"schema":{"$ref":"#/components/schemas/FormGroup"}}}}}},"delete":{"summary":"Delete a form group","operationId":"deleteFormGroup","parameters":[{"name":"formGroupId","in":"path","required":true,"description":"The id of the form group","schema":{"type":"string"}}],"responses":{"200":{"description":"Null response"}}}},"/field":{"get":{"summary":"List all fields","operationId":"getFields","responses":{"200":{"description":"An array of fields","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fields"}}}}}},"post":{"summary":"Create a field","operationId":"postField","responses":{"201":{"description":"Null response"}}},"put":{"summary":"Update a field","operationId":"putField","responses":{"200":{"description":"Null response"}}}},"/field/{fieldId}":{"get":{"summary":"Get a field by id","operationId":"getField","parameters":[{"name":"fieldId","in":"path","required":true,"description":"The id of the field","schema":{"type":"string"}}],"responses":{"200":{"description":"A field","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Field"}}}}}},"delete":{"summary":"Delete a field","operationId":"deleteField","parameters":[{"name":"fieldId","in":"path","required":true,"description":"The id of the field","schema":{"type":"string"}}],"responses":{"200":{"description":"Null response"}}}},"/formdata/submit":{"post":{"summary":"Submit a form","operationId":"postFormData","parameters":[{"name":"actionId","in":"query","required":false,"description":"Action for data submission","schema":{"type":"string"}}],"responses":{"200":{"description":"Structured object with handler id and attribute map","content":{"application/json":{"schema":{"type":"object","properties":{}}}}}}}},"/formdata/submit/{dataId}":{"post":{"summary":"Resubmit a form","operationId":"postResubmitFormData","parameters":[{"name":"dataId","in":"path","required":true,"description":"The id of the data","schema":{"type":"string"}},{"name":"credentials","in":"query","required":true,"description":"The credentials of the user","schema":{"type":"string"}}],"responses":{"201":{"description":"A form data id","content":{"application/json":{"schema":{"type":"string"}}}}}}},"/formdata/{dataId}":{"get":{"summary":"Get a form data by id","operationId":"getFormData","parameters":[{"name":"dataId","in":"path","required":true,"description":"The id of the data","schema":{"type":"string"}}],"responses":{"200":{"description":"A form data","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Data"}}}}}},"put":{"summary":"Resubmit a form","operationId":"putFormData","responses":{"201":{"description":"A form data id","content":{"application/json":{"schema":{"type":"string"}}}}}}},"/formdata/{formId}/{formRev}/{dataId}":{"get":{"summary":"Get a form data by dataId, formId and form revision","operationId":"getFormAndFormDataByRevision","parameters":[{"name":"formId","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}},{"name":"formRev","in":"path","required":true,"description":"The revision of the form","schema":{"type":"string"}},{"name":"dataId","in":"path","required":true,"description":"The id of the data","schema":{"type":"string"}},{"name":"credentials","in":"query","required":true,"description":"Credentials of the user","schema":{"type":"string"}}],"responses":{"200":{"description":"form data","content":{"application/json":{"schema":{"type":"object"}}}}}}},"/formdata/{formId}/{dataId}":{"get":{"summary":"Get a form data by dataId, formId and form revision","operationId":"getFormDataFromSubmissionHandler","parameters":[{"name":"formId","in":"path","required":true,"description":"The id of the form","schema":{"type":"string"}},{"name":"dataId","in":"path","required":true,"description":"The id of the data","schema":{"type":"string"}},{"name":"credentials","in":"query","required":true,"description":"Credentials of the user","schema":{"type":"string"}}],"responses":{"200":{"description":"form data","content":{"application/json":{"schema":{"type":"object"}}}}}}},"/port":{"get":{"summary":"Export configs","operationId":"getConfigs","parameters":[{"name":"ids","in":"query","required":true,"description":"The ids of the forms","schema":{"type":"string"}}],"responses":{"200":{"description":"A full export of everything","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Port"}}}}}},"post":{"summary":"Import configs","operationId":"postConfigs","responses":{"201":{"description":"Null response"}}}},"/config":{"get":{"summary":"Get public server config","operationId":"getConfig","responses":{"200":{"description":"Public server config","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Config"}}}}}}}},"components":{"schemas":{"Form":{"type":"object","properties":{"_id":{"type":"integer"},"_rev":{"type":"integer"}}},"Forms":{"type":"array","items":{"$ref":"#/components/schemas/Form"}},"FormGroup":{"type":"object","properties":{"_id":{"type":"integer"},"_rev":{"type":"integer"}}},"FormGroups":{"type":"array","items":{"$ref":"#/components/schemas/FormGroup"}},"Field":{"type":"object","properties":{"_id":{"type":"integer"},"_rev":{"type":"integer"}}},"Fields":{"type":"array","items":{"$ref":"#/components/schemas/Field"}},"Tag":{"type":"string"},"Handler":{"type":"string"},"Tags":{"type":"array","items":{"$ref":"#/components/schemas/Tag"}},"Handlers":{"type":"array","items":{"$ref":"#/components/schemas/Handler"}},"Port":{"type":"object","properties":{},"items":{"$ref":"#/components/schemas/Port"}},"Data":{"type":"object","properties":{}},"Datas":{"type":"array","items":{"$ref":"#/components/schemas/Data"}},"Config":{"type":"object","properties":{"recaptcha":{"type":"object","properties":{"sitekey":{"type":"string"}}}}}}}}')},408:function(e){e.exports=JSON.parse('[{"frontend":"/formula/formula-frontend","api":{"baseURL":"https://visma.formula-demo.fi/api"}},["visma-consulting.github.io",{"frontend":"https://visma.formula-demo.fi"}]]')},411:function(e,t,r){"use strict";var n=r(152);r.d(t,"a",(function(){return n}))},412:function(e){e.exports=JSON.parse('{"a":"/formula"}')},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(6),a=r.n(n),s=r(15),o=r.n(s),i=r(9),p=r.n(i),c=r(403),u=r.n(c),m=r(30),d=r(152),f=new u.a({definition:d}).init();function l(){return h.apply(this,arguments)}function h(){return h=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getForms.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return g=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getDraftForms.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function b(){return j.apply(this,arguments)}function j(){return j=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getPublishedForms.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function F(){return x.apply(this,arguments)}function x(){return x=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getPublishedPublicForms.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function v(){return I.apply(this,arguments)}function I(){return I=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormTags.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function w(){return O.apply(this,arguments)}function O(){return O=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormHandlers.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function k(){return q.apply(this,arguments)}function q(){return q=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getForm.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function T(){return G.apply(this,arguments)}function G(){return G=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormRev.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function A(){return D.apply(this,arguments)}function D(){return D=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getAtomicForm.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function $(){return C.apply(this,arguments)}function C(){return C=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormGroups.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function R(){return N.apply(this,arguments)}function N(){return N=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormGroup.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function P(){return S.apply(this,arguments)}function S(){return S=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFields.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function L(){return _.apply(this,arguments)}function _(){return _=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getField.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function H(){return U.apply(this,arguments)}function U(){return U=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormData.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function E(){return J.apply(this,arguments)}function J(){return J=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormAndFormDataByRevision.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function B(){return M.apply(this,arguments)}function M(){return M=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getFormDataFromSubmissionHandler.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function V(){return W.apply(this,arguments)}function W(){return W=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getConfigs.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function z(){return K.apply(this,arguments)}function K(){return K=p()(a.a.mark((function e(){var t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return t=e.sent,e.next=5,t.getConfig.apply(t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}var Q=Object(m.a)(l,{id:"react-openapi-client-generator-getForms"}),X=o()(Q,3),Y=(X[0],X[1],X[2],Object(m.a)(y,{id:"react-openapi-client-generator-getDraftForms"})),Z=o()(Y,3),ee=(Z[0],Z[1],Z[2],Object(m.a)(b,{id:"react-openapi-client-generator-getPublishedForms"})),te=o()(ee,3),re=(te[0],te[1],te[2],Object(m.a)(F,{id:"react-openapi-client-generator-getPublishedPublicForms"})),ne=o()(re,3),ae=(ne[0],ne[1],ne[2],Object(m.a)(v,{id:"react-openapi-client-generator-getFormTags"})),se=o()(ae,3),oe=(se[0],se[1],se[2],Object(m.a)(w,{id:"react-openapi-client-generator-getFormHandlers"})),ie=o()(oe,3),pe=(ie[0],ie[1],ie[2],Object(m.a)(k,{id:"react-openapi-client-generator-getForm"})),ce=o()(pe,3),ue=(ce[0],ce[1],ce[2],Object(m.a)(T,{id:"react-openapi-client-generator-getFormRev"})),me=o()(ue,3),de=(me[0],me[1],me[2],Object(m.a)(A,{id:"react-openapi-client-generator-getAtomicForm"})),fe=o()(de,3),le=(fe[0],fe[1],fe[2],Object(m.a)($,{id:"react-openapi-client-generator-getFormGroups"})),he=o()(le,3),ye=(he[0],he[1],he[2],Object(m.a)(R,{id:"react-openapi-client-generator-getFormGroup"})),ge=o()(ye,3),be=(ge[0],ge[1],ge[2],Object(m.a)(P,{id:"react-openapi-client-generator-getFields"})),je=o()(be,3),Fe=(je[0],je[1],je[2],Object(m.a)(L,{id:"react-openapi-client-generator-getField"})),xe=o()(Fe,3),ve=(xe[0],xe[1],xe[2],Object(m.a)(H,{id:"react-openapi-client-generator-getFormData"})),Ie=o()(ve,3),we=(Ie[0],Ie[1],Ie[2],Object(m.a)(E,{id:"react-openapi-client-generator-getFormAndFormDataByRevision"})),Oe=o()(we,3),ke=(Oe[0],Oe[1],Oe[2],Object(m.a)(B,{id:"react-openapi-client-generator-getFormDataFromSubmissionHandler"})),qe=o()(ke,3),Te=(qe[0],qe[1],qe[2],Object(m.a)(V,{id:"react-openapi-client-generator-getConfigs"})),Ge=o()(Te,3),Ae=(Ge[0],Ge[1],Ge[2],Object(m.a)(z,{id:"react-openapi-client-generator-getConfig"})),De=o()(Ae,3);De[0],De[1],De[2]},441:function(e,t,r){var n={"./en-US":[423,0],"./en-US.json":[423,0],"./fi-FI":[424,1],"./fi-FI.json":[424,1],"./sv-SE":[425,2],"./sv-SE.json":[425,2]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r.t(a,3)}))}a.keys=function(){return Object.keys(n)},a.id=441,e.exports=a},495:function(e,t){},498:function(e,t){},500:function(e,t){},729:function(e,t,r){"use strict";r.r(t);var n=r(19),a=r.n(n),s=r(34),o=r(6),i=r.n(o),p=r(15),c=r.n(p),u=r(9),m=r.n(u),d=r(153),f=r(36),l=r(0),h=r.n(l),y=r(16),g=r.n(y),b=r(226),j={},F=j,x={"@material-ui/core":d,"@material-ui/styles":f,react:l,"react-dom":y,"react-intl":b},v=function(){var e=m()(i.a.mark((function e(t){var r,n,a,s,o,p,u,m,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=0,n=Object.entries(x);r<n.length;r++)a=c()(n[r],2),s=a[0],o=a[1],window["".concat("__formula","_").concat(s)]=o;return p="".concat(t,"/dll/").concat("v0.4","/"),e.next=4,fetch(p+"manifest.json");case 4:return u=e.sent,e.next=7,u.json();case 7:return m=e.sent,e.next=10,import(p+m["main.js"]);case 10:(d=document.createElement("link")).rel="stylesheet",d.href=p+m["main.css"],document.head.appendChild(d),Object.assign(j,window.__formula);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=r(743),w=r(415),O=r.n(w),k=r(414),q=r.n(k),T=r(744),G=r(75),A=r(418),D=r(416),$=r(25),C=r(412),R=r(14),N=r(316),P=r(745),S=r(413),L=r(163),_=r(26),H=Object(N.a)((function(e){return{link:{marginRight:e.spacing(.5)}}}));function U(){var e=Object(L.a)(),t=Object(R.a)(e,2),r=t[0],n=t[1],a=H();return S.a.map((function(e){return Object(_.jsx)(P.a,{component:"button",selected:r===e.locale,onClick:function(){n(e.locale)},className:a.link,children:e.value},e.locale)}))}var E=r(65),J=Object(G.b)({palette:{primary:{main:q.a[500]},secondary:{main:O.a[500]}}});function B(){return Object(_.jsx)(A.a,{fallback:null,children:Object(_.jsx)(I.a,{theme:J,children:Object(_.jsxs)(T.a,{maxWidth:"md",children:[Object(_.jsx)(U,{}),Object(_.jsx)(D.a,{basename:C.a,children:Object(_.jsxs)($.c,{children:[Object(_.jsx)($.a,{path:"/",exact:!0,render:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(F.Formula,{config:{title:"Log In",elements:[{key:"email",type:"email",name:"Email Address",required:!0},{key:"password",type:"password",name:"Password",required:!0}]},onSubmit:function(e){var t=e.values;return console.log(t)}}),Object(_.jsx)(F.Formula,{config:{title:"Field types",elements:[{key:"date",type:"date",name:"Date"},{key:"richtext",type:"richtext",name:"Rich Text"}]},onSubmit:function(e){var t=e.values;return console.log(t)}})]})}}),Object(_.jsx)($.a,{path:"/:id",render:function(e){var t=e.match.params.id;return Object(_.jsx)(F.Formula,{axios:function(e){e.defaults.baseURL=E.a.api.baseURL},id:t})}})]})})]})})})}function M(){return(M=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(E.a.frontend);case 2:g.a.render(Object(_.jsx)(h.a.StrictMode,{children:Object(_.jsx)(B,{})}),document.getElementById("root"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){M.apply(this,arguments)}()}},[[729,4,5]]]);
//# sourceMappingURL=main.480f3d8a.chunk.js.map