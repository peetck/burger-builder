(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{100:function(e,t,a){e.exports={Auth:"Auth_Auth__QGqTC",ContactData:"Auth_ContactData__EBW3D"}},101:function(e,t,a){"use strict";a.r(t);var n=a(24),i=a(5),l=a(6),r=a(8),u=a(7),o=a(0),s=a.n(o),c=a(15),d=a(4),h=a(95),p=a(33),m=a(100),v=a.n(m),g=a(16),f=a(41),b=a(3),E=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),u=0;u<l;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,a){var i=Object(b.b)(e.state.controls,Object(n.a)({},a,Object(b.b)(e.state.controls[a],{value:t.target.value,valid:Object(b.a)(t.target.value,e.state.controls[a].validation),touched:!0})));e.setState({controls:i})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return s.a.createElement(h.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}));this.props.loading&&(n=s.a.createElement(f.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuthenticated&&(l=s.a.createElement(d.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:v.a.Auth},l,i,s.a.createElement("form",{onSubmit:this.submitHandler},n,s.a.createElement(p.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(p.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),a}(o.Component);t.default=Object(c.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(g.b(t,a,n))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}}))(E)},95:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(96),r=a.n(l);t.a=function(e){var t=null,a=[r.a.InputElement],n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(a.push(r.a.Invalid),n=i.a.createElement("p",{className:r.a.ValidationError},"Please enter a valid value!")),e.elementType){case"input":t=i.a.createElement("input",Object.assign({onChange:e.changed,className:a.join(" ")},e.elementConfig,{value:e.value}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({onChange:e.changed,className:a.join(" ")},e.elementConfig,{value:e.value}));break;case"select":t=i.a.createElement("select",{onChange:e.changed,className:a.join(" "),value:e.value},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({onChange:e.changed,className:a.join(" ")},e.elementConfig,{value:e.value}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),t,n)}},96:function(e,t,a){e.exports={Input:"Input_Input__Pc0-H",Label:"Input_Label__1es4q",InputElement:"Input_InputElement__3j6_h",Invalid:"Input_Invalid__37HzK",ValidationError:"Input_ValidationError__2UZ2h"}}}]);
//# sourceMappingURL=4.a5c1376e.chunk.js.map