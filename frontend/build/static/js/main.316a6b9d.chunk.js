(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(13),i=a.n(s),c=a(3),r=a(14),l=a.n(r),o=a(0),d=function(){return Object(o.jsx)("div",{className:"m-5",children:Object(o.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h2",{children:"Explaining Algorithm"})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"Algorithm performance: O(n ^ 2)"}),Object(o.jsxs)("p",{className:"card-text",children:["To solve this challenge I decided to go through the list and calls a function twice, this functions receives an array, so in the first call this array receives an array, from the firsts element in the original array until the element that belongs to the actual position of the iteration, and in the second call from the next element of the actual iteration until the last element in the array, this function takes the array and returns the sum of its elements, with that twice calls we get two numbers that represent the sum of the left and right sides of the actual index, after that, the values are compared, if these values are equals means the sum of both sides are equal so breaks the loop and returns the actual index.",Object(o.jsx)("a",{href:"https://github.com/DamnDanielV/API-Algorithm/blob/main/algorithm_api/responsechallenge/code.py",className:"btn btn-outline-info m-3",children:"See Code"})]})]})]})})},m=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),r=Object(c.a)(i,2),m=r[0],h=r[1],b=Object(n.useState)(!1),u=Object(c.a)(b,2),j=u[0],f=u[1],x=Object(n.createRef)();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mb-2 gap-2 col-8 mx-auto animate__animated animate__fadeIn",children:[Object(o.jsx)(d,{}),!j&&Object(o.jsx)("button",{onClick:function(){return f(!j)},className:"btn btn-primary animate__animated animate__fadeIn",children:"Wanna try?"})]}),Object(o.jsx)("div",{className:"mb-3 d-grid gap-2 col-6 mx-auto",children:j&&Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h4",{className:"animate__animated animate__fadeIn",children:"Introduce a serie of numbers separated by comma"}),Object(o.jsxs)("div",{className:"mb-3 d-grid gap-2 col-6 mx-auto animate__animated animate__fadeInUp",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.post("/api/hi",{numbers:x.current.value},{headers:{"Content-Type":"application/json"}}).then((function(e){s(e.data.index),0===e.data.index?h("No number that satisfy the condition"):h("")})).catch((function(e){h("Check your input!"),s(0)})),x.current.value=""},method:"POST",className:"form mb-1 d-grid gap-2 mx-auto",children:[Object(o.jsx)("input",{ref:x,name:"numbers",className:"form-control"}),Object(o.jsx)("button",{className:"btn btn-primary",children:"Check"})]}),Object(o.jsxs)("div",{className:"form mb-3 d-grid gap-2 mx-auto",children:[0!==a?Object(o.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:["Number found at: ",a]}):Object(o.jsx)("h4",{className:"animate__animated animate__fadeIn",children:m}),Object(o.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return f(!j)},children:"Close"})]})]})]})})]})};i.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.316a6b9d.chunk.js.map