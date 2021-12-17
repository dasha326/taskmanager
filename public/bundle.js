(()=>{"use strict";const e=e=>e<10?`0${e}`:String(e),t=t=>`${e(t.getHours()%12)}:${e(t.getMinutes())}`,n="afterbegin",a="beforeend",s=(e,t,s)=>{switch(s){case n:e.prepend(t);break;case a:e.append(t)}};class r{constructor(){if(new.target===r)throw new Error("Нельзя создать экземпляр класса, только наследовать");this._element=null,this._nameClass=new.target.name}getTemplate(){throw console.log(this._nameClass),new Error(`Реализуй асбтрактный метод в ${this._nameClass}`)}getElement(){return this._element||(this._element=(e=>{const t=document.createElement("div");return t.innerHTML=e,t.firstChild})(this.getTemplate())),this._element}removeElement(){this._element=null}}class l extends r{getTemplate(){return'<div class="board__tasks"></div>'}}class c extends r{getTemplate(){return'<div class="board__filter-list">\n          <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>\n          <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>\n          <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>\n        </div>'}}class d extends r{getTemplate(){return'<button class="load-more" type="button">load more</button>'}}const o=["January","February","March","April","May","June","July","August","September","October","November","December"],i=["mo","tu","we","th","fr","sa","su"],_=["black","yellow","blue","green","pink"];class u extends r{constructor(e){super(),this._task=e}getTemplate(){return(e=>{const{description:n,dueDate:a,color:s,repeatingDays:r,isArchive:l,isFavorite:c}=e,d=a instanceof Date&&a<Date.now(),i=!!a,_=i?`${a.getDate()} ${o[a.getMonth()]}`:"",u=i?t(a):"";return`<article class="card card--${s} ${Object.values(r).some((e=>!!e))?"card--repeat":""} ${d?"card--deadline":""}">\n        <div class="card__form">\n            <div class="card__inner">\n                <div class="card__control">\n                    <button type="button" class="card__btn card__btn--edit">edit</button>\n                    <button type="button" class="card__btn card__btn--archive ${l?"":"card__btn--disabled "}">archive</button>\n                    <button type="button" class="card__btn card__btn--favorites ${c?"":"card__btn--disabled "}">favorites</button>\n                </div>\n    \n                <div class="card__color-bar">\n                    <svg class="card__color-bar-wave" width="100%" height="10">\n                        <use xlink:href="#wave"></use>\n                    </svg>\n                </div>\n    \n                <div class="card__textarea-wrap">\n                    <p class="card__text">${n}</p>\n                </div>\n                <div class="card__settings">\n                  <div class="card__details">\n                    <div class="card__dates">\n                      <div class="card__date-deadline">\n                        <p class="card__input-deadline-wrap">\n                          <span class="card__date">${_}</span>\n                          <span class="card__time">${u}</span>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </article>`})(this._task)}}class p extends r{constructor(e){super(),this._task=e}getTemplate(){return(e=>{const{description:n,dueDate:a,color:s,repeatingDays:r}=e,l=a instanceof Date&&a<Date.now(),c=!!a,d=c?`${a.getDate()} ${o[a.getMonth()]}`:"",u=c?t(a):"",p=Object.values(r).some((e=>!!e))?"card--repeat":"",v=l?"card--deadline":"",m=(b=s,_.map(((e,t)=>`<input\n            type="radio"\n            id="color-${e}-${t}"\n            class="card__color-input card__color-input--${e} visually-hidden"\n            name="color"\n            value="${e}"\n            ${b===e?"checked":""}\n          />\n          <label\n            for="color-${e}-${t}"\n            class="card__color card__color--${e}"\n            >${e}</label\n          >`)).join("\n"));var b;const h=((e,t)=>e.map(((e,n)=>`<input\n                class="visually-hidden card__repeat-day-input"\n                type="checkbox"\n                id="repeat-${e}-${n}"\n                name="repeat"\n                value="mo"\n                ${t[e]?"checked":""}\n              />\n              <label class="card__repeat-day" for="repeat-${e}-${n}"\n                >${e}</label\n              >`)).join("\n"))(i,r);return`<article class="card card--edit card--${s} ${p} ${v}">\n            <form class="card__form" method="get">\n              <div class="card__inner">\n                <div class="card__color-bar">\n                  <svg class="card__color-bar-wave" width="100%" height="10">\n                    <use xlink:href="#wave"></use>\n                  </svg>\n                </div>\n\n                <div class="card__textarea-wrap">\n                  <label>\n                    <textarea\n                      class="card__text"\n                      placeholder="Start typing your text here..."\n                      name="text"\n                    >${n}</textarea>\n                  </label>\n                </div>\n\n                <div class="card__settings">\n                  <div class="card__details">\n                    <div class="card__dates">\n                      <button class="card__date-deadline-toggle" type="button">\n                        date: <span class="card__date-status">${c?"yes":"no"}</span>\n                      </button>\n                      ${c?`\n                      <fieldset class="card__date-deadline">\n                        <label class="card__input-deadline-wrap">\n                          <input\n                            class="card__date"\n                            type="text"\n                            placeholder=""\n                            name="date"\n                            value="${d} ${u}"\n                          />\n                        </label>\n                      </fieldset>\n                      `:""}                     \n\n                      <button class="card__repeat-toggle" type="button">\n                        repeat:<span class="card__repeat-status">yes</span>\n                      </button>\n\n                      <fieldset class="card__repeat-days">\n                        <div class="card__repeat-days-inner">\n                            ${h}\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="card__colors-inner">\n                    <h3 class="card__colors-title">Color</h3>\n                    <div class="card__colors-wrap">\n                      ${m}\n                    </div>\n                  </div>\n                </div>\n\n                <div class="card__status-btns">\n                  <button class="card__save" type="submit">save</button>\n                  <button class="card__delete" type="button">delete</button>\n                </div>\n              </div>\n            </form>\n          </article>`})(this._task)}}class v extends r{getTemplate(){return'<p class="board__no-tasks">\n          Click «ADD NEW TASK» in menu to create your first task\n        </p>'}}const m=["Изучить теорию","Сделать домашку"," Пройти интенсив на соточку"],b={mo:!1,tu:!1,we:!1,th:!1,fr:!1,sa:!1,su:!1},h=e=>e[g(0,e.length)],g=(e,t)=>e+Math.floor(Math.random()*(t-e)),y=document.querySelector("main"),f=y.querySelector(".main__control"),w=(e,t)=>{const n=t=>{t.preventDefault(),e.replaceChild(l,c)},r=e=>{("Escape"===e.key||"Esc"===e.key)&&n(e),document.removeEventListener("keydown",r)},l=new u(t).getElement();l.querySelector(".card__btn--edit").addEventListener("click",(()=>{e.replaceChild(c,l),document.addEventListener("keydown",r)}));const c=new p(t).getElement();c.querySelector(".card__save").addEventListener("click",(e=>{e.preventDefault(),n(e),document.removeEventListener("keydown",r)})),s(e,l,a)},$=new Array(23).fill("").map((()=>{const e=Math.random()>.5?null:(()=>{const e=new Date,t=(Math.random()>.5?1:-1)*g(0,8);return e.setDate(e.getDate()+t),e})();return{description:h(m),dueDate:e,repeatingDays:e?b:Object.assign({},b,{mo:Math.random()>.5}),color:h(_),isArchive:!1,isFavorite:!1}})),E=["all","today","favorites","repeating","archive"].map(((e,t)=>({name:e,count:Math.floor(10*Math.random()),disabled:3===t})));s(f,(new class extends r{getTemplate(){return'<section class="control__btn-wrap">\n          <input\n            type="radio"\n            name="control"\n            id="control__new-task"\n            class="control__input visually-hidden"\n          />\n          <label for="control__new-task" class="control__label control__label--new-task"\n            >+ ADD NEW TASK</label\n          >\n          <input\n            type="radio"\n            name="control"\n            id="control__task"\n            class="control__input visually-hidden"\n            checked\n          />\n          <label for="control__task" class="control__label">TASKS</label>\n          <input\n            type="radio"\n            name="control"\n            id="control__statistic"\n            class="control__input visually-hidden"\n          />\n          <label for="control__statistic" class="control__label"\n            >STATISTICS</label\n          >\n        </section>'}}).getElement(),a),s(y,new class extends r{constructor(e){super(),this._filters=e}}(E).getElement(),a);const k=new class extends r{getTemplate(){return'<section class="board container"></section>'}};s(y,k.getElement(),a),((e,t)=>{const r=t.every((e=>e.isArchive));if(console.log(r),r)return void s(e.getElement(),(new v).getElement(),n);const o=(new l).getElement();s(e.getElement(),o,n),s(e.getElement(),(new c).getElement(),n);let i=8;t.slice(1,i).forEach((e=>w(o,e)));const _=(new d).getElement();s(e.getElement(),_,a),_.addEventListener("click",(()=>{const e=i;i+=8,t.slice(e,i).forEach((e=>w(o,e))),i>=23&&_.remove()}))})(k,$)})();
//# sourceMappingURL=bundle.js.map