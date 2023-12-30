import './polyfills.server.mjs';
import{k as S}from"./chunk-W6VD74MR.mjs";import{Aa as u,Ba as w,Ca as g,Da as l,Ga as F,J as c,M as f,Q as b,R as h,S as p,eb as I,h as C,m as V,oa as A,r as D,ta as M,wa as E,ya as s,za as o}from"./chunk-YR4H5GCM.mjs";import{a as d,b as _}from"./chunk-KRLCULJA.mjs";function x(t){return t!=null}function U(t){return w(t)?C(t):t}function O(t){let e={};return t.forEach(i=>{e=i!=null?d(d({},e),i):e}),Object.keys(e).length===0?null:e}function N(t,e){return e.map(i=>i(t))}function R(t){return!t.validate}function P(t){return t.map(e=>R(e)?e:i=>e.validate(i))}function H(t){if(!t)return null;let e=t.filter(x);return e.length==0?null:function(i){return O(N(i,e))}}function L(t){return t!=null?H(P(t)):null}function $(t){if(!t)return null;let e=t.filter(x);return e.length==0?null:function(i){let r=N(i,e).map(U);return D(r).pipe(V(O))}}function W(t){return t!=null?$(P(t)):null}var m=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=W(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},y=class extends m{get formDirective(){return null}get path(){return null}};var v=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},q={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Fe=_(d({},q),{"[class.ng-submitted]":"isSubmitted"});var k=(()=>{let e=class e extends v{constructor(r){super(r)}};e.\u0275fac=function(n){return new(n||e)(A(y,10))},e.\u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,a){n&2&&E("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},features:[M]});let t=e;return t})();var z=new f("CallSetDisabledState",{providedIn:"root",factory:()=>G}),G="always";var j=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Z=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({});let t=e;return t})();var X=new f("NgModelWithFormControlWarning");var Y=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[Z]});let t=e;return t})();var T=(()=>{let e=class e{static withConfig(r){return{ngModule:e,providers:[{provide:X,useValue:r.warnOnNgModelWithFormControl??"always"},{provide:z,useValue:r.callSetDisabledState??G}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=h({type:e}),e.\u0275inj=c({imports:[Y]});let t=e;return t})();var Ne=(()=>{let e=class e{signIn(){console.log("Ingresando...")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["ng-component"]],standalone:!0,features:[F],decls:35,vars:0,consts:[[1,"flex","w-[calc(100vw_-_80px)]","md:w-full","md:items-center","md:rounded-md","md:shadow-lg","md:mx-2","md:space-x-2","md:p-2"],[1,"hidden","max-w-screen-md","md:block"],["src","../../../assets/images/login-image.jpeg","alt","",1,"rounded-md","h-full","w-full","object-cover"],[1,"flex","flex-col","w-full","md:mx-auto","space-y-5"],["action","",3,"ngSubmit"],[1,"flex","flex-col","justify-center","space-y-6","px-4","md:px-0"],[1,"space-y-4"],[1,"text-center"],[1,"text-2xl"],[1,"text-gray-400","text-sm"],[1,"flex","flex-col","gap-y-6","md:px-10"],[1,"space-y-0.5"],["for","email",1,"text-sm"],["type","email","name","email","id","email",1,"border-b","border-b-lack","outline-none","font-light","py-1","px-2","w-full","block"],["for","password",1,"text-sm"],["type","password","name","password","id","password",1,"border-b","border-b-lack","outline-none","font-light","py-1","px-2","w-full","block"],["type","submit",1,"bg-gray-800","rounded-2xl","font-bold","uppercase","text-white","p-2"],[1,"md:px-2","space-y-2"],[1,"md:w-full","md:mx-auto","w-full"],[1,"text-xs"],[1,"text-gray-500"],["routerLink","/autenticacion/registro",1,"text-gray-800"]],template:function(n,a){n&1&&(s(0,"section",0)(1,"div",1),u(2,"img",2),o(),s(3,"div",3)(4,"form",4),g("ngSubmit",function(){return a.signIn()}),s(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2",8),l(9,"Iniciar Sesion"),o(),s(10,"p",9),l(11," Ingresa tus datos para iniciar sesion "),o()(),s(12,"div",10)(13,"div",11)(14,"label",12),l(15,"Correo Electronico"),o(),u(16,"input",13),o(),s(17,"div",11)(18,"label",14),l(19,"Contrase\xF1a"),o(),u(20,"input",15),o(),s(21,"button",16),l(22," Ingresar "),o()()()()(),s(23,"div",17),u(24,"hr",18),s(25,"div",19)(26,"span",20),l(27,"\xBFNo tienes cuenta? "),o(),s(28,"button",21),l(29," Registrarse "),o()(),s(30,"div",19)(31,"span",20),l(32,"\xBFOlvidaste tu contrase\xF1a? "),o(),s(33,"button",21),l(34," Recuperar "),o()()()()())},dependencies:[I,S,T,j,k]});let t=e;return t})();export{Ne as default};
