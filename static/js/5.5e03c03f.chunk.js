(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[5],{106:function(e,r,n){e.exports={Order:"Order_Order__1j406"}},110:function(e,r,n){"use strict";n.r(r);var t=n(11),a=n(12),i=n(14),o=n(13),u=n(0),s=n.n(u),c=n(21),d=n(106),p=n.n(d),l=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return s.a.createElement("div",{className:p.a.Order},s.a.createElement("p",null,"Ingredients: ",t),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},m=n(25),b=n(48),f=n(7),h=n(47),g=function(e){Object(i.a)(n,e);var r=Object(o.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(h.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return s.a.createElement(l,{key:e.id,ingredients:e.ingredients,price:+e.price})}))),s.a.createElement("div",null,e)}}]),n}(u.Component);r.default=Object(c.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(f.i(r,n))}}}))(Object(b.a)(g,m.a))}}]);
//# sourceMappingURL=5.5e03c03f.chunk.js.map