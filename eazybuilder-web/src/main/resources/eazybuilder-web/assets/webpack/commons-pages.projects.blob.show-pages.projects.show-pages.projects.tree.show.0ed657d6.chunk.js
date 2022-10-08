(this.webpackJsonp=this.webpackJsonp||[]).push([[90],{"049F":function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getBlobInfo"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"projectPath"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filePath"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"project"},arguments:[{kind:"Argument",name:{kind:"Name",value:"fullPath"},value:{kind:"Variable",name:{kind:"Name",value:"projectPath"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"repository"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blobs"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paths"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"filePath"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"webPath"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"rawSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"rawTextBlob"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fileType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"editBlobPath"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"storedExternally"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"rawPath"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"replacePath"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"simpleViewer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fileType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tooLarge"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"renderError"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"richViewer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fileType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tooLarge"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"renderError"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:649}};n.loc.source={body:"query getBlobInfo($projectPath: ID!, $filePath: String!) {\n  project(fullPath: $projectPath) {\n    id\n    repository {\n      blobs(paths: [$filePath]) {\n        nodes {\n          webPath\n          name\n          size\n          rawSize\n          rawTextBlob\n          fileType\n          path\n          editBlobPath\n          storedExternally\n          rawPath\n          replacePath\n          simpleViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n          richViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function r(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var i=t.type;"NamedType"===i.kind&&n.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),i[e.name.value]=t}})),e.exports=n,e.exports.getBlobInfo=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=i[t]||new Set,o=new Set,l=new Set;for(a.forEach((function(e){l.add(e)}));l.size>0;){var s=l;l=new Set,s.forEach((function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(t){var i=r(e,t);i&&n.definitions.push(i)})),n}(n,"getBlobInfo")},"0ch9":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return r})),n.d(t,"u",(function(){return a})),n.d(t,"t",(function(){return o})),n.d(t,"s",(function(){return l})),n.d(t,"v",(function(){return s})),n.d(t,"w",(function(){return d})),n.d(t,"F",(function(){return c})),n.d(t,"G",(function(){return u})),n.d(t,"I",(function(){return f})),n.d(t,"H",(function(){return p})),n.d(t,"y",(function(){return h})),n.d(t,"x",(function(){return b})),n.d(t,"C",(function(){return m})),n.d(t,"B",(function(){return v})),n.d(t,"A",(function(){return k})),n.d(t,"z",(function(){return g})),n.d(t,"E",(function(){return y})),n.d(t,"D",(function(){return w})),n.d(t,"O",(function(){return j})),n.d(t,"N",(function(){return O})),n.d(t,"K",(function(){return S})),n.d(t,"M",(function(){return P})),n.d(t,"J",(function(){return B})),n.d(t,"P",(function(){return E})),n.d(t,"L",(function(){return _})),n.d(t,"d",(function(){return N})),n.d(t,"c",(function(){return F})),n.d(t,"b",(function(){return I})),n.d(t,"e",(function(){return x})),n.d(t,"a",(function(){return D})),n.d(t,"g",(function(){return V})),n.d(t,"f",(function(){return q})),n.d(t,"l",(function(){return A})),n.d(t,"k",(function(){return T})),n.d(t,"m",(function(){return L})),n.d(t,"o",(function(){return C})),n.d(t,"n",(function(){return z})),n.d(t,"j",(function(){return G})),n.d(t,"r",(function(){return $})),n.d(t,"q",(function(){return W})),n.d(t,"p",(function(){return J}));const i="mark",r="measure",a="snippet-view-app-start",o="snippet-edit-app-start",l="snippet-blobs-content-finished",s="snippet-blobs-content",d="webide-app-start",c="webide-file-clicked",u="webide-file-finished",f="webide-init-editor-start",p="webide-init-editor-finish",h="webide-getBranchData-start",b="webide-getBranchData-finish",m="webide-getFileData-start",v="webide-getFileData-finish",k="webide-getFiles-start",g="webide-getFiles-finish",y="webide-getProjectData-start",w="webide-getProjectData-finish",j="webide-file-loading-after-interaction",O="WebIDE: Project data",S="WebIDE: Branch data",P="WebIDE: File data",B="WebIDE: Before Vue app",E="WebIDE: Repo Editor",_="WebIDE: Fetch Files",N="mr-diffs-mark-file-tree-start",F="mr-diffs-mark-file-tree-end",I="mr-diffs-mark-diff-files-start",x="mr-diffs-mark-first-diff-file-shown",D="mr-diffs-mark-diff-files-end",V="mr-diffs-measure-file-tree-done",q="mr-diffs-measure-diff-files-done",A="pipelines-detail-links-mark-calculate-start",T="pipelines-detail-links-mark-calculate-end",L="Pipelines Detail Graph: Links Calculation",C="pipeline_graph_link_calculation_duration_seconds",z="pipeline_graph_links_total",G="pipeline_graph_links_per_job_ratio",$="blobviewer-load-viewer-start",W="blobviewer-load-viewer-finish",J="Repository File Viewer: loading the content"},"8zNS":function(e,t,n){"use strict";var i=n("s1D3");const r=[8,12,16,18,24,32,48,72];var a={components:{GlIcon:i.a},props:{status:{type:Object,required:!0},size:{type:Number,required:!1,default:16,validator:e=>r.includes(e)},borderless:{type:Boolean,required:!1,default:!1},cssClasses:{type:String,required:!1,default:""}},computed:{cssClass(){const e=this.status.group;return"ci-status-icon ci-status-icon-".concat(e," js-ci-status-icon-").concat(e)},icon(){return this.borderless?"".concat(this.status.icon,"_borderless"):this.status.icon}}},o=n("tBpV"),l=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",{class:this.cssClass},[t("gl-icon",{class:this.cssClasses,attrs:{name:this.icon,size:this.size,"aria-label":this.status.icon,"use-deprecated-sizes":""}})],1)}),[],!1,null,null,null);t.a=l.exports},CqXh:function(e,t,n){"use strict";var i=n("VNnR"),r=n.n(i),a={props:{storageKey:{type:String,required:!0},value:{type:[String,Number,Boolean,Array,Object],required:!1,default:""},asJson:{type:Boolean,required:!1,default:!1},persist:{type:Boolean,required:!1,default:!0},clear:{type:Boolean,required:!1,default:!1}},watch:{value(e){this.saveValue(this.serialize(e))},clear(e){e&&localStorage.removeItem(this.storageKey)}},mounted(){const{exists:e,value:t}=this.getStorageValue();e&&!r()(t,this.value)&&this.$emit("input",t)},methods:{getStorageValue(){const e=localStorage.getItem(this.storageKey);if(null===e)return{exists:!1};try{return{exists:!0,value:this.deserialize(e)}}catch(t){return console.warn("[gitlab] Failed to deserialize value from localStorage (key=".concat(this.storageKey,")"),e),{exists:!1}}},saveValue(e){this.persist&&localStorage.setItem(this.storageKey,e)},serialize(e){return this.asJson?JSON.stringify(e):e},deserialize(e){return this.asJson?JSON.parse(e):e}},render(){return this.$slots.default}},o=n("tBpV"),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.a=l.exports},i1z4:function(e,t,n){"use strict";var i=n("7xOh");t.a=Object(i.a)()},jHQk:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));n("S26F"),n("pBsb");const i=function(e,t,n){if(!e)return void(document.title="".concat(n," ").concat("· GitLab"));const i=e.replace(/^\//,""),r=""===i;document.title="".concat(r?"Files":i," · ").concat(t," · ").concat(n," ").concat("· GitLab")};function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;const{title:n=""}=t,i=n.split(" · ");i.length>1&&(i[1]=e,t.title=i.join(" · "))}},kYRv:function(e,t,n){"use strict";var i=n("o4PY"),r=n.n(i),a=n("FkSe"),o=n("67aS"),l=n("6L/t"),s=n("7bJy"),d=n("XRO8"),c=n("/lV4"),u=n("049F"),f=n.n(u),p=n("4lAS"),h={i18n:{edit:Object(c.a)("Edit")},components:{GlButton:p.a},props:{editPath:{type:String,required:!0}}},b=n("tBpV"),m=Object(b.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("gl-button",{staticClass:"gl-mr-3",attrs:{category:"primary",variant:"confirm",href:this.editPath}},[this._v("\n  "+this._s(this.$options.i18n.edit)+"\n")])}),[],!1,null,null,null).exports,v={components:{BlobHeader:l.a,BlobHeaderEdit:m,BlobContent:o.a,GlLoadingIcon:a.a},apollo:{project:{query:f.a,variables(){return{projectPath:this.projectPath,filePath:this.path}},result(){this.switchViewer(this.hasRichViewer&&!window.location.hash?s.g:s.i)},error(){Object(d.b)({message:Object(c.a)("An error occurred while loading the file. Please try again.")})}}},provide:()=>({blobHash:r()()}),props:{path:{type:String,required:!0},projectPath:{type:String,required:!0}},data:()=>({activeViewerType:s.i,project:{repository:{blobs:{nodes:[{name:"",size:"",rawTextBlob:"",type:"",fileType:"",tooLarge:!1,path:"",editBlobPath:"",ideEditPath:"",storedExternally:!1,rawPath:"",externalStorageUrl:"",replacePath:"",deletePath:"",canLock:!1,isLocked:!1,lockLink:"",canModifyBlob:!0,forkPath:"",simpleViewer:{},richViewer:null}]}}}}),computed:{isLoading(){return this.$apollo.queries.project.loading},blobInfo(){var e,t,n;return(null===(e=this.project)||void 0===e?void 0:null===(t=e.repository)||void 0===t?void 0:null===(n=t.blobs)||void 0===n?void 0:n.nodes)[0]||{}},viewer(){const{richViewer:e,simpleViewer:t}=this.blobInfo;return this.activeViewerType===s.g?e:t},hasRichViewer(){return Boolean(this.blobInfo.richViewer)},hasRenderError(){return Boolean(this.viewer.renderError)}},methods:{switchViewer(e){this.activeViewerType=e||s.i}}},k=Object(b.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoading?n("gl-loading-icon"):e._e(),e._v(" "),e.blobInfo&&!e.isLoading?n("div",{staticClass:"file-holder"},[n("blob-header",{attrs:{blob:e.blobInfo,"hide-viewer-switcher":!e.hasRichViewer,"active-viewer-type":e.viewer.type,"has-render-error":e.hasRenderError},on:{"viewer-changed":e.switchViewer},scopedSlots:e._u([{key:"actions",fn:function(){return[n("blob-header-edit",{attrs:{"edit-path":e.blobInfo.editBlobPath}})]},proxy:!0}],null,!1,604159748)}),e._v(" "),n("blob-content",{attrs:{blob:e.blobInfo,content:e.blobInfo.rawTextBlob,"is-raw-content":!0,"active-viewer":e.viewer,loading:!1}})],1):e._e()],1)}),[],!1,null,null,null);t.a=k.exports},m4yQ:function(e,t,n){"use strict";n.r(t);var i=n("jB52"),r=n("NmEs"),a=n("3twG"),o=n("EmJ/"),l=n.n(o),s=n("/lV4"),d=n("Yyc1"),c=n("wP8z"),u=n("koWC"),f=n("4lAS"),p=n("LLbv"),h={components:{GlDropdown:d.a,GlDropdownItem:c.a,GlDropdownDivider:u.a,GlButton:f.a},directives:{GlTooltip:p.a},props:{actions:{type:Array,required:!0},selectedKey:{type:String,required:!1,default:""},category:{type:String,required:!1,default:"secondary"},variant:{type:String,required:!1,default:"default"}},computed:{hasMultipleActions(){return this.actions.length>1},selectedAction(){var e=this;return this.actions.find((function(t){return t.key===e.selectedKey}))||this.actions[0]}},methods:{handleItemClick(e){this.$emit("select",e.key)},handleClick(e,t){var n;return null===(n=e.handle)||void 0===n?void 0:n.call(e,t)}}},b=n("tBpV"),m=Object(b.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasMultipleActions?n("gl-dropdown",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:e.selectedAction.tooltip,expression:"selectedAction.tooltip"}],attrs:{text:e.selectedAction.text,"split-href":e.selectedAction.href,variant:e.variant,category:e.category,split:""},on:{click:function(t){return e.handleClick(e.selectedAction,t)}}},[n("template",{slot:"button-content"},[n("span",e._b({staticClass:"gl-new-dropdown-button-text"},"span",e.selectedAction.attrs,!1),[e._v("\n      "+e._s(e.selectedAction.text)+"\n    ")])]),e._v(" "),e._l(e.actions,(function(t,i){return[n("gl-dropdown-item",{key:t.key,attrs:{"is-check-item":!0,"is-checked":t.key===e.selectedAction.key,"secondary-text":t.secondaryText,"data-testid":"action_"+t.key},on:{click:function(n){return e.handleItemClick(t)}}},[n("span",{staticClass:"gl-font-weight-bold"},[e._v(e._s(t.text))])]),e._v(" "),i!=e.actions.length-1?n("gl-dropdown-divider",{key:t.key+"_divider"}):e._e()]}))],2):e.selectedAction?n("gl-button",e._b({directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:e.selectedAction.tooltip,expression:"selectedAction.tooltip"}],attrs:{variant:e.variant,category:e.category,href:e.selectedAction.href},on:{click:function(t){return e.handleClick(e.selectedAction,t)}}},"gl-button",e.selectedAction.attrs,!1),[e._v("\n  "+e._s(e.selectedAction.text)+"\n")]):e._e()}),[],!1,null,null,null).exports,v=n("CqXh");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={components:{ActionsButton:m,LocalStorageSync:v.a},props:{isFork:{type:Boolean,required:!1,default:!1},needsToFork:{type:Boolean,required:!1,default:!1},gitpodEnabled:{type:Boolean,required:!1,default:!1},isBlob:{type:Boolean,required:!1,default:!1},showEditButton:{type:Boolean,required:!1,default:!0},showWebIdeButton:{type:Boolean,required:!1,default:!0},showGitpodButton:{type:Boolean,required:!1,default:!1},editUrl:{type:String,required:!1,default:""},webIdeUrl:{type:String,required:!1,default:""},gitpodUrl:{type:String,required:!1,default:""}},data:()=>({selection:"webide"}),computed:{actions(){return[this.webIdeAction,this.editAction,this.gitpodAction].filter((function(e){return e}))},editAction(){var e=this;if(!this.showEditButton)return null;const t=this.needsToFork?{href:"#modal-confirm-fork-edit",handle:function(){return e.showModal("#modal-confirm-fork-edit")}}:{href:this.editUrl};return g({key:"edit",text:Object(s.a)("Edit"),secondaryText:Object(s.a)("Edit this file only."),tooltip:"",attrs:{"data-qa-selector":"edit_button","data-track-event":"click_edit","data-track-label":"Edit"}},t)},webIdeAction(){var e=this;if(!this.showWebIdeButton)return null;const t=this.needsToFork?{href:"#modal-confirm-fork-webide",handle:function(){return e.showModal("#modal-confirm-fork-webide")}}:{href:this.webIdeUrl};let n=Object(s.a)("Web IDE");return this.isBlob?n=Object(s.a)("Edit in Web IDE"):this.isFork&&(n=Object(s.a)("Edit fork in Web IDE")),g({key:"webide",text:n,secondaryText:Object(s.a)("Quickly and easily edit multiple files in your project."),tooltip:"",attrs:{"data-qa-selector":"web_ide_button","data-track-event":"click_edit_ide","data-track-label":"Web IDE"}},t)},gitpodAction(){var e=this;if(!this.showGitpodButton)return null;const t=this.gitpodEnabled?{href:this.gitpodUrl}:{href:"#modal-enable-gitpod",handle:function(){return e.showModal("#modal-enable-gitpod")}},n=Object(s.a)("Launch a ready-to-code development environment for your project.");return g({key:"gitpod",text:Object(s.a)("Gitpod"),secondaryText:n,tooltip:n,attrs:{"data-qa-selector":"gitpod_button"}},t)}},methods:{select(e){this.selection=e},showModal(e){l()(e).modal("show")}}},j=Object(b.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gl-sm-ml-3"},[n("actions-button",{attrs:{actions:e.actions,"selected-key":e.selection,variant:e.isBlob?"info":"default",category:e.isBlob?"primary":"secondary"},on:{select:e.select}}),e._v(" "),n("local-storage-sync",{attrs:{"storage-key":"gl-web-ide-button-selected",value:e.selection},on:{input:e.select}})],1)}),[],!1,null,null,null).exports;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){let{el:t,router:n}=e;if(!t)return;const o=Object(r.h)(JSON.parse(t.dataset.options)),{projectPath:l,ref:s,isBlob:d,webIdeUrl:c}=o,u=B(o,["projectPath","ref","isBlob","webIdeUrl"]);new i.default({el:t,router:n,render(e){var t;return e(j,{props:S({isBlob:d,webIdeUrl:d?c:Object(a.E)(Object(a.p)("/",l,"edit",s,"-",(null===(t=this.$route)||void 0===t?void 0:t.params.path)||"","/"))},u)})}})}}}]);
//# sourceMappingURL=commons-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.0ed657d6.chunk.js.map