(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(t,e,n){t.exports={view_container:"ViewContent_view_container__1dxQy",view__controls:"ViewContent_view__controls__1i_vs",view__content:"ViewContent_view__content__1FRVb",view__content__title:"ViewContent_view__content__title__4teMT",view__content__content:"ViewContent_view__content__content__1Qofl",view__text:"ViewContent_view__text__i6q3p",deleteBtn:"ViewContent_deleteBtn__1ZRy7"}},,,,function(t,e,n){t.exports={Form_container:"newNoteForm_Form_container__1ZHf5",form_controls:"newNoteForm_form_controls__2S8vW",form:"newNoteForm_form__1sIg5"}},function(t,e,n){t.exports={main_container:"addNewNote_main_container__3EB_3",new_note__container:"addNewNote_new_note__container__1YCu4",new_note__logo:"addNewNote_new_note__logo__3oGvK"}},,function(t,e,n){},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(11),i=n.n(c),o=(n(10),n(5)),a=n(2),r=(n(16),n(0)),l=function(t){var e=Intl.DateTimeFormat("en-UK").format(new Date(t.date));return Object(r.jsxs)("div",{className:"content__container",id:t.id,onClick:function(e){var n=e.target.closest(".content__container"),c={id:n.getAttribute("id"),title:n.querySelector(".content__title").innerHTML,content:n.querySelector(".content__content").innerHTML};t.ContentDisplayHandler(!1,c)},children:[Object(r.jsx)("div",{className:"content__title",children:t.title}),Object(r.jsx)("div",{className:"content__content",children:t.content}),Object(r.jsx)("div",{className:"content__date",children:e})]})},s=function(t){var e,n=function(e,n){t.ContentDisplayHandler(e,n)};return t.data.length>0&&(e=t.data.map((function(t){return Object(r.jsx)(l,{id:t.id,title:t.title,content:t.content,date:t.date,ContentDisplayHandler:n},t.id)}))),t.data.length>0?Object(r.jsx)("div",{id:"main_content__container",children:e}):Object(r.jsxs)("div",{id:"Message_container",children:[Object(r.jsx)("p",{children:"Start creating notes now !!"}),Object(r.jsx)("p",{children:"Remember This"}),Object(r.jsxs)("ol",{children:[Object(r.jsx)("li",{children:"To create new note press on plus button above"}),Object(r.jsx)("li",{children:"To save a note after adding content press on back arrow button"}),Object(r.jsx)("li",{children:"To save after update click on title again"}),Object(r.jsx)("li",{children:"You can store upto 7 big notes"})]})]})},d=n.p+"static/media/icons8-plus.fb2878e5.svg",_=n(7),j=n.n(_),u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEdElEQVRoge2a3W9URRjGn4HGLikKLWy76o1EU0SxcqkhGL8tFhO9BPUOAjFBiPJfGG9IMPqHKIEIWEFsBSsfhrKleCM2tcaYqFQqmp8X8x53hN2z58ye3daE92aSM+88zzNn3jnzzsyR7tjSMlcUENAn6SlJmyU9IulBSf2SeszluqQfJX0n6ZKkU5I+d879UpSGaANKwJvAUeBv8ttfwBHgDaC7FS1RIwKskPSWpHcl3WuPFySdlnRC0kVJVUmzkn63+pWSKpLWSxqS9IykJyUlHZiR9L6kD5xzN2J05e3ECHA1eKtngJ3Aqgis1cAu4GyANw1sbYf2hLQEfBgQfg28WCD+MPBNgH8IKBWFn5BUTDjAdWAvsLxQEs+zHNgHzAejPVAU+DobboBJYGMhwOmcQ0DVOK8A61oFLAeAXwFrC9KahbsXOGXcV4FKLFApCKfTQE/zVsUa0AOMBWGWf84EE3sSv9gtigFrgqg4lLfxSDCx2z4nMugZCj4Aw1kbraC2Tuxts8bMBuwPJn/zEAMOBOtE4Z/YWAO6gHOmbX8z527gB3N+oUMaMxvwsmmbSR0VfPIGcCaSqIJPN76MVpuO74Iv6Y40x6PmtDOCpAJcsvYTQGFbhFt4dhvH4UYOffi0+gY5E0BgIOjEJLGLVzauXmABuFlXJ/CaCTmWE7gfuGhtLwP3Faa6Meeo8b2SPFsW1G+28rMcgAPy+4+Nki5Leto5N1OE2CZ2wsotyYOwIxusPJ8FCShL+lR+W1uV9JxzbrYAkVks0fhwPWFTNlwbbqu83TcMp7bOiQb8jyahXK/yZ6tMzavwGfGFTs6JOhrWGv9cvcoFq7wrBcAFnWinnWzSkW7z+3dvvyytQSOciDad4yAutKosTmiVjb9uaP2vJ3sYWlesHGwG5Jybk/SspG/lP4GjHR6Z9VZOJQ/Cjkxa+XgWJOfcT5Kelz/+HJR0rIMjM2Rl3c/vqzZcx/Mg3hJmHZkz1FKUbfUqe6kljatzAncyaeyjljTe08jpiInZFUEQpvHnWlbcmGePcXyS5vS6OZ2NJKngt6Nj0UrT8R1+rwOwPc2xG7hmji+1Q0wrBmwzbd/T7BoCeMecJ1h6hw/nTdvbWRqUqJ317uuAxkwWvOBq09EIGm21RvPAUPMW7TVgE/CHacp3lYG/n0jewJo2acyio4w/lAM4GANQwh8cgz9IXoxD7JXAuGkYzxxSdYDK+M0T+GuFcsFa07j7gC+Me5pWL3zwFz3J0FaBTLlYi5ybAs4p4IGigAeCMJvHHyh3FQL+X54u+zolE3sc6C+apBR8AMCv4IXcvuJX7JFgnQA4GD0nMpIOB8MO/ix2N9AbgdWHz50mArwpIm6LY38YKEnaI+mApPvt8Z+SxiQdl3RBftMzK+k3q79b/ueCQUmPyW/MnpCUHHZck/SepI+ccwsxuqINn5vtAA7jtwB57SbwMbC91TAq8qeaVfI/1WyRP7V8SFJZfiQkPzJzkqbld3YnJY06534tSsMdW0r2DxtrT22kgozsAAAAAElFTkSuQmCC",b=n(1),A=function(t){var e=Object(b.useState)(""),n=Object(a.a)(e,2),c=n[0],i=n[1],o=Object(b.useState)(""),l=Object(a.a)(o,2),s=l[0],d=l[1];return Object(r.jsxs)("form",{id:j.a.Form_container,children:[Object(r.jsxs)("div",{id:j.a.form_controls,onClick:function(){var e={id:50*Math.random(),title:c,content:s,date:(new Date).toISOString()};e.title.length>0&&e.content.length>0&&t.submitHandler(e),console.log(e),t.clickHandler(!1)},children:[Object(r.jsx)("img",{src:u,alt:"back button"}),Object(r.jsx)("p",{children:"Create a new note"})]}),Object(r.jsxs)("div",{id:j.a.form,children:[Object(r.jsx)("input",{type:"text",placeholder:"Title",onChange:function(t){t.target.value.length>0?i(t.target.value):alert("error")}}),Object(r.jsx)("textarea",{cols:"1",rows:"20",placeholder:"Content goes here",onChange:function(t){t.target.value.length>0&&d(t.target.value)},"aria-multiline":"true"})]})]})},g=n(8),O=n.n(g),v=function(t){return Object(r.jsx)("div",{id:O.a.main_container,children:!0===t.flag?Object(r.jsxs)("div",{id:O.a.new_note__container,children:[Object(r.jsx)("p",{children:"Note Taker"}),Object(r.jsx)("div",{id:O.a.new_note__logo,onClick:function(){t.clickHandler(!1)},children:Object(r.jsx)("img",{src:d,alt:"plus logo"})})]}):Object(r.jsx)(A,{clickHandler:function(e){t.clickHandler(!0)},submitHandler:function(e){t.formSubmit(e)}})})},f=n(3),w=n.n(f),m=function(t){var e=Object(b.useState)(""),n=Object(a.a)(e,2),c=n[0],i=n[1],o=Object(b.useState)(""),l=Object(a.a)(o,2),s=l[0],d=l[1];return Object(r.jsxs)("div",{id:w.a.view_container,children:[Object(r.jsxs)("div",{id:w.a.view__controls,onClick:function(){var e={id:t.data.id,title:c,content:s,date:(new Date).toISOString()};e.title.length>0&&e.content.length>0&&t.formSubmit(e),t.clickHandler(!0,"")},children:[Object(r.jsx)("img",{src:u,alt:"back button"}),Object(r.jsx)("p",{id:w.a.view__text,children:"Your note "}),Object(r.jsx)("button",{id:w.a.deleteBtn,onClick:function(){t.deleteHandler(t.data.id)},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAmklEQVRIie2VMQoCMRBF/1c8hFcUwc5C8ABewMstbGVhZy0Iz2YDIbvuxjWyTX41mWT+G4aBSBMC9kBLXzfgCHjKY8x8N2Cc6vALoOlMTsAmyq+Bc3fXjHk4KmJ2J0PGtiVpVdJ0EfU2oMCotrbv4fD3ES0LCJuQG38NKKEKqIAKqICZgGcI4r8hJ07rPwEu6aNMvSRdbT/i5BtRtIPz+Hl+WgAAAABJRU5ErkJggg==",alt:"delete button"})})]}),Object(r.jsxs)("div",{id:w.a.view__content,children:[Object(r.jsx)("div",{className:w.a.view__content__title,contentEditable:"true",onClick:function(t){i(t.target.innerHTML)},children:t.data.title}),Object(r.jsx)("div",{className:w.a.view__content__content,contentEditable:"true",onClick:function(t){d(t.target.innerHTML)},children:t.data.content})]})]})},x=function(t){localStorage.setItem("data",JSON.stringify(t))};var h=function(){var t=function(){var t=JSON.parse(localStorage.getItem("data"));if(t)return t.length>0?t:void 0}()||{},e=Object(b.useState)(!0),n=Object(a.a)(e,2),c=n[0],i=n[1],l=Object(b.useState)(!0),d=Object(a.a)(l,2),_=d[0],j=d[1],u=Object(b.useState)([]),A=Object(a.a)(u,2),g=A[0],O=A[1],f=Object(b.useState)(t),w=Object(a.a)(f,2),h=w[0],C=w[1],S=function(t,e){O(e),j(t)};return Object(r.jsxs)("div",{id:"container",children:[_?Object(r.jsx)(v,{clickHandler:function(t){i(t)},formSubmit:function(t){console.log(t),C((function(e){return x([t].concat(Object(o.a)(Array.from(e)))),[t].concat(Object(o.a)(Array.from(e)))}))},flag:c}):"",c&&!0===_?Object(r.jsx)(s,{data:h,ContentDisplayHandler:S,flag:_}):"",!1===_?Object(r.jsx)(m,{data:g,clickHandler:S,deleteHandler:function(t){var e=h.filter((function(e){return+e.id!==+t}));C(e),x(e)},formSubmit:function(t){C((function(e){var n=(e=Array.from(e)).findIndex((function(e){return+e.id===+t.id}));return console.log(n),e.splice(n,1),x([t].concat(Object(o.a)(e))),[t].concat(Object(o.a)(e))}))}}):""]})};i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.400c5583.chunk.js.map