(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=n(11),o=n(2),u=n(3),l=n(6),d=n(5),h=n(0),b=function(e){return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:e.title}),e.children]})},m=n(4),j=n(8),p={name:"",number:""},f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this)).state=Object(j.a)({},p),a.handleChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.reset=function(){return a.setState(Object(j.a)({},p))},console.log(e),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props.submit),Object(h.jsxs)("form",{onSubmit:function(t){return e.props.submit(t,e.state.name,e.state.number,e.reset)},children:[Object(h.jsxs)("p",{children:["Name: ",this.state.name]}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),Object(h.jsxs)("p",{children:["Number: ",this.state.number]}),Object(h.jsx)("input",{type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:function(t){return e.handleChange(t)}}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(e){return console.log(e.deleteContact),Object(h.jsx)("ul",{children:e.contacts.map((function(t){return console.log(t),Object(h.jsxs)("li",{children:[t.name,": ",t.number,Object(h.jsx)("button",{className:"list__btn",onClick:function(){return e.deleteContact(t.id)},type:"button",children:"Delete"})]},t.id)}))})},x=function(e){return Object(h.jsx)("input",{type:"text",name:"filter",placeholder:"Search",onChange:function(t){return e.handler(t)}})},C=n(12),g=n(10),v=(n(19),n(20),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleSearch=function(t){e.setState({filter:t.target.value})},e.submit=function(t,n,a,c){t.preventDefault(),e.state.contacts.find((function(e){return e.name===n}))?Object(g.info)({text:"".concat(n," is already in contacts."),delay:700}):(e.setState({contacts:[].concat(Object(i.a)(e.state.contacts),[{name:n,number:a,id:Object(C.a)()}])}),c())},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.filter.toLocaleLowerCase(),n=this.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Phonebook",children:Object(h.jsx)(f,{state:this.state,submit:this.submit})}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(x,{name:this.state.name,handler:function(t){return e.handleSearch(t)},search:function(t){return e.search(t)}}),Object(h.jsx)(O,{contacts:n,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component)),y=v;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0eeeed05.chunk.js.map