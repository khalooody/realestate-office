import"./500-Dt57VjtK.js";import{d as l,i as Be,a as m,n as U,e as n,u as I,r as ne,b as u,c as ee,p as qe,f as P,S as B,g as He,s as z,h as le,j as q,l as $,t as p,k as N,m as R,w as Pe,o as Ne,q as ie,v as je,x as g,y as re,z as Re,A as de,B as h,C as i,D as T,E as F,F as w,G as te,H as Fe,I as Oe,J as ce,K as k,L as Q,M as Te,N as Ge,R as we,O as Me,P as Ve,Q as We,T as Je,U as Ke,V as Qe,W as Xe}from"./ui-xW8a68Za.js";const Ye="ملخّص التسجيلات وأداء الصفحة";function Ze(e){const t=l.leads,a=t.filter(d=>d.status==="new"),s=t.filter(d=>Be(d.createdAt)),r=t.filter(d=>d.status==="hot"),c=Se(t,d=>d.unit),o=Se(t,d=>d.source),b=c[0];e.innerHTML=`
    <div class="kpis">
      ${G({k:"إجمالي المسجّلين",v:U(t.length),icon:"leads",accent:!0,note:`+${m(rt())} خلال 7 أيام`,tone:"up"})}
      ${G({k:"لم يُتواصل معهم بعد",v:U(a.length),icon:"clock",note:a.length?"تحتاج متابعة اليوم":"لا متأخرات — أحسنت",tone:a.length?"down":"up"})}
      ${G({k:"الوحدة الأكثر طلباً",v:n(I(b==null?void 0:b.k).name||"—"),small:!0,icon:"units",note:b?`${m(b.v)} من أصل ${m(t.length)} تسجيلاً`:""})}
      ${G({k:"مسجّلو اليوم",v:U(s.length),icon:"trend",note:t[0]?`آخر تسجيل ${ne(t[0].createdAt)}`:"",tone:"up"})}
    </div>

    <div class="grid grid--2">
      <section class="panel">
        <div class="panel__h">
          <h2 class="panel__t">التسجيلات خلال آخر سبعة أيام</h2>
          <span class="panel__s">${n(tt())}</span>
        </div>
        <div class="bars">${et()}</div>
      </section>

      <section class="panel">
        <div class="panel__h">
          <h2 class="panel__t">مؤشرات سريعة</h2>
          <span class="panel__s">تقديرية</span>
        </div>
        <ul class="mix">${st()}</ul>
      </section>
    </div>

    <div class="grid grid--half">
      <section class="panel">
        <div class="panel__h">
          <h2 class="panel__t">من أين جاء المسجّلون؟</h2>
          <span class="panel__s">حسب مصدر الزيارة</span>
        </div>
        <ul class="mix">${ke(o,t.length,d=>d)}</ul>
      </section>

      <section class="panel">
        <div class="panel__h">
          <h2 class="panel__t">الطلب حسب النمط</h2>
          <span class="panel__s">المساحة المطلوبة عند التسجيل</span>
        </div>
        <ul class="mix">${ke(c,t.length,d=>I(d).name)}</ul>
      </section>
    </div>

    <div class="grid grid--2">
      <section class="panel">
        <div class="panel__h">
          <h2 class="panel__t">مسار الزائر</h2>
          <span class="panel__s">من فتح الصفحة إلى التسجيل</span>
        </div>
        <ul class="mix">${at()}</ul>
      </section>

      <section class="panel">
        <div class="panel__h">
          <h2 class="panel__t">آخر النشاط</h2>
          <a class="panel__s" href="#/leads">كل المسجّلين ←</a>
        </div>
        <ul class="feed">${lt()}</ul>
      </section>
    </div>

    ${r.length?it(r.length):""}`}function G({k:e,v:t,note:a="",icon:s,tone:r="",accent:c=!1,small:o=!1}){return`
    <article class="kpi${c?" kpi--accent":""}">
      <div class="kpi__top">
        <span class="kpi__k">${n(e)}</span>
        <span class="kpi__ic">${u(s,17)}</span>
      </div>
      <p class="kpi__v${o?" kpi__v--sm":""}">${t}</p>
      ${a?`<p class="kpi__d ${r}">${n(a)}</p>`:""}
    </article>`}function et(){const e=l.traffic.days||[],t=Math.max(1,...e.map(a=>a.leads));return e.map(a=>{const s=Math.round(a.leads/t*84);return`
        <div class="bar${a.leads===t?" is-max":""}" title="${n(ee(a.date))} · ${a.leads}">
          <span class="bar__n">${m(a.leads)}</span>
          <span class="bar__c" style="height:${s}%"></span>
          <span class="bar__d">${n(ee(a.date))}</span>
        </div>`}).join("")}function tt(){const e=l.traffic.days||[];if(!e.length)return"";const t=e.reduce((a,s)=>s.leads>a.leads?s:a);return`الذروة يوم ${ee(t.date)} — يوم بثّ الإعلان`}function ke(e,t,a){return e.length?e.map(s=>{const r=t?s.v/t*100:0;return`
        <li>
          <div class="mix__r">
            <span>${n(a(s.k))}</span>
            <em>${m(s.v)} · ${qe(r)}</em>
          </div>
          <div class="track"><i style="width:${r}%"></i></div>
        </li>`}).join(""):'<li><span class="panel__s">لا بيانات بعد.</span></li>'}function at(){var a;const e=l.traffic.funnel||[],t=((a=e[0])==null?void 0:a.v)||1;return e.map(s=>`
      <li>
        <div class="mix__r">
          <span>${n(s.k)}</span>
          <em>${U(s.v)} · ${qe(s.v/t*100)}</em>
        </div>
        <div class="track"><i style="width:${s.v/t*100}%"></i></div>
      </li>`).join("")}function st(){return(l.traffic.quick||[]).map(e=>`
      <li>
        <div class="mix__r">
          <span>${n(e.k)}</span>
          <em>${n(e.text||m(e.v)+(e.suffix||""))}</em>
        </div>
        <div class="track"><i style="width:${Math.min(100,e.v/e.max*100)}%"></i></div>
      </li>`).join("")}const nt={lead:"leads",status:"check",content:"content",unit:"units",user:"user"};function lt(){return l.activity.slice(0,6).map(e=>`
      <li>
        <span class="feed__ic">${u(nt[e.type]||"activity",15)}</span>
        <span>
          <span class="feed__t">${n(e.title)}</span>
          <span class="feed__d">${n(e.desc)}</span>
        </span>
        <span class="feed__a">${n(ne(e.at))}</span>
      </li>`).join("")}function it(e){return`
    <section class="panel" style="margin-top:14px;border-color:var(--accent-line)">
      <div class="panel__h" style="margin:0">
        <div style="display:flex;gap:12px;align-items:center">
          <span class="kpi__ic" style="background:var(--accent-soft);color:var(--accent)">${u("trend",17)}</span>
          <div>
            <p class="panel__t">${m(e)} ${e===1?"مسجّل مهتم جداً":"مسجّلين مهتمّين جداً"}</p>
            <p class="panel__s">قرّبهم من الإغلاق قبل فتح التأجير.</p>
          </div>
        </div>
        <a class="btn btn--sm" href="#/leads">فتح القائمة</a>
      </div>
    </section>`}function Se(e,t){const a=new Map;return e.forEach(s=>a.set(t(s),(a.get(t(s))||0)+1)),[...a].map(([s,r])=>({k:s,v:r})).sort((s,r)=>r.v-s.v)}function rt(){const e=Date.now()-6048e5;return l.leads.filter(t=>new Date(t.createdAt).getTime()>=e).length}const dt=Object.freeze(Object.defineProperty({__proto__:null,render:Ze,subtitle:Ye},Symbol.toStringTag,{value:"Module"})),ct="كل من سجّل اهتمامه بالمشروع",v={q:"",unit:"",status:"",owner:"",sort:"newest"};let _=new Set;function M(e){const t=ut(),a=P("edit");e.innerHTML=`
    <div class="tools">
      <span class="search">
        ${u("search",16)}
        <input id="q" type="search" value="${n(v.q)}"
               placeholder="ابحث باسم أو شركة أو رقم…" autocomplete="off">
      </span>

      <select id="fUnit">
        <option value="">كل الأنماط</option>
        ${l.units.map(s=>x(s.id,s.name,v.unit)).join("")}
      </select>

      <select id="fStatus">
        <option value="">كل الحالات</option>
        ${B.map(s=>x(s.key,s.label,v.status)).join("")}
      </select>

      <select id="fOwner">
        <option value="">كل المسؤولين</option>
        ${l.users.map(s=>x(s.id,s.name,v.owner)).join("")}
      </select>

      <select id="fSort">
        ${x("newest","الأحدث أولاً",v.sort)}
        ${x("oldest","الأقدم أولاً",v.sort)}
        ${x("name","الاسم أبجدياً",v.sort)}
        ${x("status","حسب الحالة",v.sort)}
      </select>

      <span style="margin-inline-start:auto;display:flex;gap:10px">
        <button class="btn" id="exp">${u("download",16)} تصدير CSV</button>
        ${a?`<button class="btn btn--solid" id="addBtn">${u("plus",16)} تسجيل يدوي</button>`:""}
      </span>
    </div>

    <div class="bulk" id="bulk" ${_.size?"":"hidden"}>
      <span>${m(_.size)} محدَّد</span>
      ${a?`<select id="bulkStatus" class="st-sel">
             <option value="">غيّر الحالة إلى…</option>
             ${B.map(s=>`<option value="${s.key}">${s.label}</option>`).join("")}
           </select>
           <button class="btn btn--sm" id="bulkDel">${u("trash",14)} حذف المحدَّد</button>`:""}
      <button class="btn btn--sm btn--ghost bulk__sp" id="bulkClear">إلغاء التحديد</button>
    </div>

    <div class="tbl">
      <table>
        <thead>
          <tr>
            <th style="width:38px"><input class="chk" type="checkbox" id="all"
                ${t.length&&t.every(s=>_.has(s.id))?"checked":""}
                aria-label="تحديد الكل"></th>
            <th>المسجّل</th>
            <th>رقم الجوال</th>
            <th>النمط المطلوب</th>
            <th>المصدر</th>
            <th>التاريخ</th>
            <th>المسؤول</th>
            <th>الحالة</th>
            <th style="width:120px"></th>
          </tr>
        </thead>
        <tbody id="rows">${t.map(ot).join("")}</tbody>
      </table>
      ${t.length?"":He("لا توجد نتائج مطابقة.","جرّب مسح البحث أو تغيير الفلاتر.")}
    </div>

    <p class="tally">عرض ${m(t.length)} من أصل ${m(l.leads.length)} تسجيلاً${v.q||v.unit||v.status||v.owner?" · فلترة مفعّلة":""}</p>`,mt(e,t)}function ot(e){const t=z(e.status),a=I(e.unit),s=l.users.find(c=>c.id===e.owner),r=P("edit");return`
    <tr data-id="${e.id}" class="${_.has(e.id)?"is-picked":""}">
      <td><input class="chk pick" type="checkbox" ${_.has(e.id)?"checked":""}
                 aria-label="تحديد ${n(e.name)}"></td>
      <td class="cell-n">
        ${e.status==="new"?'<span class="dot"></span>':""}${n(e.name)}
        <em>${n(e.company)}${e.note?" · "+n(e.note):""}</em>
      </td>
      <td class="cell-ltr">${n(e.phone)}</td>
      <td class="nowrap">${n(a.name)}</td>
      <td>${n(e.source)}</td>
      <td class="nowrap">${n(le(e.createdAt))}</td>
      <td class="nowrap">${n(s?s.name:"—")}</td>
      <td>
        ${r?`<select class="st-sel st" aria-label="حالة ${n(e.name)}">
                 ${B.map(c=>`<option value="${c.key}"${c.key===e.status?" selected":""}>${c.label}</option>`).join("")}
               </select>`:`<span class="pill pill--${t.tone}">${t.label}</span>`}
      </td>
      <td>
        <div class="acts">
          <a class="act act--wa" href="${pt(e)}" target="_blank" rel="noopener"
             title="مراسلة على واتساب" aria-label="مراسلة ${n(e.name)}">${u("whatsapp",15)}</a>
          ${r?`<button class="act ed" title="تعديل" aria-label="تعديل ${n(e.name)}">${u("edit",15)}</button>
                 <button class="act act--del del" title="حذف" aria-label="حذف ${n(e.name)}">${u("trash",15)}</button>`:""}
        </div>
      </td>
    </tr>`}function pt(e){var s;const a=(((s=l.site.contact)==null?void 0:s.waTemplate)||"مرحباً {name}").replace("{name}",e.name.split(" ")[0]);return`https://wa.me/${Pe(e.phone)}?text=${encodeURIComponent(a)}`}function x(e,t,a){return`<option value="${n(e)}"${e===a?" selected":""}>${n(t)}</option>`}function ut(){const e=v.q.trim().toLowerCase();let t=l.leads.filter(s=>v.unit&&s.unit!==v.unit||v.status&&s.status!==v.status||v.owner&&s.owner!==v.owner?!1:e?[s.name,s.company,s.phone,s.email,s.note].join(" ").toLowerCase().includes(e):!0);const a=B.map(s=>s.key);return t=[...t].sort((s,r)=>v.sort==="oldest"?new Date(s.createdAt)-new Date(r.createdAt):v.sort==="name"?s.name.localeCompare(r.name,"ar"):v.sort==="status"?a.indexOf(s.status)-a.indexOf(r.status):new Date(r.createdAt)-new Date(s.createdAt)),t}function mt(e,t){var r,c,o,b;const a=d=>e.querySelector("#"+d),s=a("q");s.addEventListener("input",()=>{v.q=s.value;const d=s.selectionStart;M(e);const f=e.querySelector("#q");f.focus(),f.setSelectionRange(d,d)}),a("fUnit").addEventListener("change",d=>V("unit",d.target.value,e)),a("fStatus").addEventListener("change",d=>V("status",d.target.value,e)),a("fOwner").addEventListener("change",d=>V("owner",d.target.value,e)),a("fSort").addEventListener("change",d=>V("sort",d.target.value,e)),a("exp").addEventListener("click",()=>ft(t)),(r=a("addBtn"))==null||r.addEventListener("click",()=>bt()),a("all").addEventListener("change",d=>{d.target.checked?t.forEach(f=>_.add(f.id)):_.clear(),M(e)}),e.querySelectorAll("tr[data-id]").forEach(d=>{var S,A,C;const f=d.dataset.id,y=l.leads.find(L=>L.id===f);d.querySelector(".pick").addEventListener("change",L=>{L.target.checked?_.add(f):_.delete(f),M(e)}),(S=d.querySelector(".st"))==null||S.addEventListener("change",L=>{const j=L.target.value;q("leads",f,{status:j}),$("status","تغيير حالة",`${y.name} → ${z(j).label}`),p(`حُدّثت حالة ${y.name} إلى «${z(j).label}».`)}),(A=d.querySelector(".ed"))==null||A.addEventListener("click",()=>vt(y)),(C=d.querySelector(".del"))==null||C.addEventListener("click",()=>ht(y))}),(c=a("bulkClear"))==null||c.addEventListener("click",()=>{_.clear(),M(e)}),(o=a("bulkStatus"))==null||o.addEventListener("change",d=>{const f=d.target.value;if(!f)return;const y=[..._];y.forEach(S=>q("leads",S,{status:f})),$("status","تغيير حالة جماعي",`${y.length} تسجيلاً → ${z(f).label}`),_.clear(),p(`حُدّثت ${m(y.length)} حالة.`)}),(b=a("bulkDel"))==null||b.addEventListener("click",async()=>{const d=_.size;if(!await N({title:`حذف ${m(d)} تسجيلاً؟`,body:"سيُحذف المحدَّد نهائياً من القائمة. لا يمكن التراجع عن هذه الخطوة — باستثناء «إعادة تعيين البيانات» في الإعدادات، التي تُرجع الملفات الأصلية وتلغي كل تعديل آخر معها.",confirmLabel:"احذف"}))return;const y=[..._];R("leads",l.leads.filter(S=>!y.includes(S.id))),$("lead","حذف تسجيلات",`${y.length} تسجيلاً`),_.clear(),p(`حُذف ${m(d)} تسجيلاً.`)})}function V(e,t,a){v[e]=t,M(a)}function Ae(e={}){return h(i({name:"name",label:"الاسم",value:e.name||"",required:!0,half:!0}),i({name:"company",label:"الشركة",value:e.company||"",half:!0}))+h(i({name:"phone",label:"رقم الجوال",value:e.phone||"",dir:"ltr",placeholder:"+971 50 123 4567",half:!0}),i({name:"email",label:"البريد الإلكتروني",value:e.email||"",type:"email",dir:"ltr",half:!0}))+h(T({name:"unit",label:"النمط المطلوب",value:e.unit||"X",options:l.units.map(t=>({key:t.id,label:`${t.name} · ${t.area}`})),half:!0}),T({name:"source",label:"المصدر",value:e.source||"إعلان إنستغرام",options:["إعلان إنستغرام","بحث جوجل","لينكدإن","إحالة","اتصال مباشر","أخرى"].map(t=>({key:t,label:t})),half:!0}))+h(T({name:"status",label:"الحالة",value:e.status||"new",options:B.map(t=>({key:t.key,label:t.label})),half:!0}),T({name:"owner",label:"المسؤول",value:e.owner||F().id,options:l.users.map(t=>({key:t.id,label:t.name})),half:!0}))+w({name:"note",label:"ملاحظة",value:e.note||"",rows:2,hint:"تظهر تحت الاسم في الجدول."})}async function bt(){await g({title:"تسجيل يدوي",subtitle:"لمن تواصل عبر الهاتف أو المعرض بدل النموذج.",body:Ae(),submitLabel:"أضف التسجيل",wide:!0,onSubmit(e){if(!e.name.trim()||!e.phone.trim())return p("الاسم ورقم الجوال مطلوبان.","err"),!1;re("leads",{id:Re(),...e,company:e.company.trim()||"—",createdAt:new Date().toISOString()}),$("lead","تسجيل يدوي",`${e.name} · ${I(e.unit).name}`),p(`أُضيف ${e.name} إلى القائمة.`)}})}async function vt(e){await g({title:"تعديل التسجيل",subtitle:`${e.id} · سُجّل ${ie(e.createdAt)} — ${je(e.createdAt)}`,body:Ae(e),wide:!0,onSubmit(t){if(!t.name.trim()||!t.phone.trim())return p("الاسم ورقم الجوال مطلوبان.","err"),!1;q("leads",e.id,t),$("lead","تعديل تسجيل",t.name),p("حُفظت التعديلات.")}})}async function ht(e){await N({title:`حذف ${e.name}؟`,body:`سيُحذف التسجيل ورقم ${n(e.phone)} من القائمة نهائياً.`})&&(de("leads",e.id),_.delete(e.id),$("lead","حذف تسجيل",e.name),p(`حُذف ${e.name}.`))}function ft(e){Ne(`rawaq-leads-${new Date().toISOString().slice(0,10)}.csv`,["المعرّف","الاسم","الشركة","الجوال","البريد","النمط","المصدر","التاريخ","المسؤول","الحالة","ملاحظة"],e.map(t=>{var a;return[t.id,t.name,t.company,t.phone,t.email,I(t.unit).name,t.source,`${ie(t.createdAt)} ${je(t.createdAt)}`,((a=l.users.find(s=>s.id===t.owner))==null?void 0:a.name)||"",z(t.status).label,t.note]})),p(`صُدّر ${U(e.length)} تسجيلاً كما هو معروض.`)}const $t=Object.freeze(Object.defineProperty({__proto__:null,render:M,subtitle:ct},Symbol.toStringTag,{value:"Module"})),_t="الأنماط المعروضة على الصفحة، ومخزون كل نمط";function gt(e){var r,c;const t=P("edit"),a=[...l.units].sort((o,b)=>(o.order||0)-(b.order||0)),s=o=>l.leads.filter(b=>b.unit===o).length;e.innerHTML=`
    <div class="tools">
      <p class="panel__s" style="flex:1">
        ${m(a.filter(o=>o.published).length)} نمطاً معروضاً على الصفحة ·
        ${m(a.reduce((o,b)=>o+(b.published?b.available:0),0))} وحدة متاحة
      </p>
      ${t?`<button class="btn btn--solid" id="addUnit">${u("plus",16)} نمط جديد</button>`:""}
    </div>

    <div class="cards">${a.map(o=>yt(o,s(o.id),t)).join("")}</div>

    <section class="panel" style="margin-top:14px">
      <div class="panel__h">
        <h2 class="panel__t">نصوص قسم الأنماط</h2>
        <span class="panel__s">العناوين المشتركة فوق البطاقات على الصفحة</span>
      </div>
      <div class="set" style="border:0;padding:0">
        <div>
          <p class="set__k">ما يظهر حول البطاقات</p>
          <p class="set__d">
            العنوان الفرعي، عنوان القسم، وسم «الأكثر طلباً»، ونص القفل الذي يُخفي
            الأسعار عن غير المسجّلين.
          </p>
        </div>
        <div>
          <div class="kv" style="margin-bottom:10px"><b>${n(((r=l.site.types)==null?void 0:r.heading)||"")}</b></div>
          <p class="panel__s" style="margin-bottom:14px">${n(((c=l.site.types)==null?void 0:c.locked)||"")}</p>
          ${t?'<button class="btn" id="editCopy">تعديل النصوص</button>':""}
        </div>
      </div>
    </section>`,t&&(e.querySelector("#addUnit").addEventListener("click",wt),e.querySelector("#editCopy").addEventListener("click",Lt),e.querySelectorAll("[data-unit]").forEach(o=>{var d;const b=l.units.find(f=>f.id===o.dataset.unit);o.querySelector(".u-ed").addEventListener("click",()=>kt(b)),o.querySelector(".u-del").addEventListener("click",()=>St(b)),(d=o.querySelector(".u-feat"))==null||d.addEventListener("click",()=>oe(b))}))}function yt(e,t,a){var s,r;return`
    <article class="card${e.featured?" is-featured":""}" data-unit="${n(e.id)}">
      ${e.featured?`<span class="card__flag">${n(((s=l.site.types)==null?void 0:s.flag)||"الأكثر طلباً")}</span>`:""}
      <h3 class="card__n">${n(e.name)}</h3>
      <p class="card__k">${n(e.kind)}</p>

      <dl class="card__specs">
        <div><dt>المساحة</dt><dd>${n(e.area)}</dd></div>
        <div><dt>محطات العمل</dt><dd>${n(e.desks)}</dd></div>
        <div><dt>غرف الاجتماعات</dt><dd>${n(e.rooms)}</dd></div>
        <div><dt>المواقف</dt><dd>${n(e.parking)}</dd></div>
      </dl>

      <div class="card__rent">
        <span>${n(((r=l.site.types)==null?void 0:r.rentLabel)||"الإيجار السنوي")}</span>
        <b>${n(e.rent)}</b>
      </div>

      <p class="card__avail">
        ${e.total?`${m(e.available)} متاحة من ${m(e.total)} · ${m(t)} مهتماً`:`غير معروض · ${m(t)} تسجيلاً مرتبطاً`}
        ${e.published?"":' · <span style="color:var(--text-3)">مخفي عن الصفحة</span>'}
      </p>

      ${a?`<div class="card__foot">
               <button class="btn btn--sm u-ed">${u("edit",14)} تعديل</button>
               ${e.published&&!e.featured?'<button class="btn btn--sm u-feat">تمييز</button>':""}
               <button class="btn btn--sm u-del" title="حذف" aria-label="حذف ${n(e.name)}">${u("trash",14)}</button>
             </div>`:""}
    </article>`}function Ce(e={}){return h(i({name:"name",label:"اسم النمط",value:e.name||"",required:!0,half:!0}),i({name:"kind",label:"الوصف القصير",value:e.kind||"",placeholder:"مكتب متوسط",half:!0}))+h(i({name:"area",label:"المساحة",value:e.area||"",placeholder:"180 – 220 م²",half:!0}),i({name:"rent",label:"الإيجار السنوي",value:e.rent||"",placeholder:"365,000 درهم",half:!0}))+h(i({name:"desks",label:"محطات العمل",value:e.desks||"",placeholder:"24 – 32",half:!0}),i({name:"rooms",label:"غرف الاجتماعات",value:e.rooms||"",placeholder:"2",half:!0}))+h(i({name:"parking",label:"المواقف",value:e.parking||"",placeholder:"6",half:!0}),i({name:"total",label:"إجمالي الوحدات",value:e.total??0,type:"number",half:!0}))+i({name:"available",label:"المتاح للتأجير",value:e.available??0,type:"number",hint:"يُعرض على الصفحة كمؤشر ندرة."})+te({name:"published",label:"معروض على الصفحة",hint:"أطفئه لإخفاء النمط دون حذفه.",checked:e.published!==!1})+te({name:"featured",label:"النمط المميّز",hint:"وسم «الأكثر طلباً». نمط واحد فقط في كل مرة.",checked:!!e.featured})}function De(e){return{...e,total:Number(e.total)||0,available:Number(e.available)||0,published:!!e.published,featured:!!e.featured}}async function wt(){await g({title:"نمط جديد",subtitle:"يظهر مباشرة في قسم الأنماط بعد الحفظ.",body:Ce(),submitLabel:"أضف النمط",wide:!0,onSubmit(e){if(!e.name.trim())return p("اسم النمط مطلوب.","err"),!1;const t=De(e),a="U"+Date.now().toString(36).slice(-4).toUpperCase();re("units",{id:a,order:l.units.length+1,...t}),t.featured&&oe({id:a},!0),$("unit","نمط جديد",t.name),p(`أُضيف ${t.name}.`)}})}async function kt(e){await g({title:`تعديل ${e.name}`,subtitle:`${m(l.leads.filter(t=>t.unit===e.id).length)} تسجيلاً مرتبطاً بهذا النمط`,body:Ce(e),wide:!0,onSubmit(t){if(!t.name.trim())return p("اسم النمط مطلوب.","err"),!1;const a=De(t);if(a.available>a.total)return p("المتاح لا يمكن أن يتجاوز الإجمالي.","err"),!1;q("units",e.id,a),a.featured&&oe(e,!0),$("unit","تعديل نمط",a.name),p("حُفظت التعديلات.")}})}function oe(e,t=!1){var a;R("units",l.units.map(s=>({...s,featured:s.id===e.id}))),t||($("unit","تمييز نمط",((a=l.units.find(s=>s.id===e.id))==null?void 0:a.name)||e.id),p("حُدّث النمط المميّز."))}async function St(e){const t=l.leads.filter(s=>s.unit===e.id).length;await N({title:`حذف ${e.name}؟`,body:t?`مرتبط بـ ${m(t)} تسجيلاً — ستبقى تلك التسجيلات، لكن حقل «النمط المطلوب» فيها سيعرض المعرّف بلا اسم. الأفضل عادةً إخفاؤه من الصفحة بدل حذفه.`:"لا يوجد تسجيل مرتبط بهذا النمط. سيُحذف من الصفحة نهائياً."})&&(de("units",e.id),$("unit","حذف نمط",e.name),p(`حُذف ${e.name}.`))}async function Lt(){const e=l.site.types||{};await g({title:"نصوص قسم الأنماط",body:h(i({name:"eyebrow",label:"العنوان الفرعي",value:e.eyebrow||"",half:!0}),i({name:"flag",label:"وسم النمط المميّز",value:e.flag||"",half:!0}))+i({name:"heading",label:"عنوان القسم",value:e.heading||""})+h(i({name:"rentLabel",label:"تسمية الإيجار",value:e.rentLabel||"",half:!0}),i({name:"cta",label:"زر البطاقة",value:e.cta||"",half:!0}))+w({name:"locked",label:"نص قفل الأسعار",value:e.locked||"",rows:2}),wide:!0,onSubmit(t){R("site",{...l.site,types:{...e,...t}}),$("content","تعديل محتوى","نصوص قسم الأنماط"),p("حُفظت النصوص.")}})}const xt=Object.freeze(Object.defineProperty({__proto__:null,render:gt,subtitle:_t},Symbol.toStringTag,{value:"Module"})),Et="النصوص والإعدادات التي تظهر للزائر";function qt(e){var r,c,o,b,d,f,y,S,A,C,L,j,ue,me,be,ve,he,fe,$e,_e,ge,ye;const t=l.site,a=P("edit"),s=Fe((r=t.register)==null?void 0:r.deadline);e.innerHTML=`
    <section class="panel" style="border-color:var(--accent-line)">
      <div class="panel__h" style="margin:0">
        <div style="display:flex;gap:12px;align-items:flex-start">
          <span class="kpi__ic" style="background:var(--accent-soft);color:var(--accent)">${u("alert",17)}</span>
          <div>
            <p class="panel__t">التعديلات محفوظة محلياً</p>
            <p class="panel__s" style="line-height:1.8">
              ما يُحفظ هنا يُخزَّن في هذا المتصفح ويظهر في هذه اللوحة فقط. لن ينتقل
              إلى الصفحة العامة قبل ربط اللوحة بقاعدة بيانات — الملفات في
              <code>public/data/</code> هي المرجع حتى ذلك الحين.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">مفاتيح التشغيل</h2>
        <span class="panel__s">تسري فور التبديل</span></div>
      ${jt(a)}
    </section>

    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">الواجهة</h2></div>
      ${O("hero","أول ما يُقرأ","العنوان والسطر التمهيدي ونص زر بدء الجولة.",[["العنوان الفرعي",(c=t.hero)==null?void 0:c.eyebrow],["الاسم",(o=t.hero)==null?void 0:o.title],["السطر التعريفي",(b=t.hero)==null?void 0:b.subtitle],["زر الجولة",(d=t.hero)==null?void 0:d.cta]],a)}
    </section>

    <section class="panel">
      <div class="panel__h">
        <h2 class="panel__t">المشاهد الخمسة</h2>
        <span class="panel__s">نصوص الجولة المتزامنة مع التمرير</span>
      </div>
      <div class="tbl" style="border:0">
        <table style="min-width:640px">
          <thead><tr><th style="width:42px">#</th><th>الغرفة</th><th>العنوان</th><th>الوصف</th><th style="width:56px"></th></tr></thead>
          <tbody>
            ${(t.scenes||[]).map((D,Ie)=>`
              <tr>
                <td>${m(D.num)}</td>
                <td class="cell-n">${n(D.label)}</td>
                <td>${n(D.title)}</td>
                <td class="panel__s">${n(D.description)}</td>
                <td>${a?`<div class="acts"><button class="act sc" data-i="${Ie}" aria-label="تعديل المشهد ${D.num}">${u("edit",15)}</button></div>`:""}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <p class="tally">
        مواضع المشاهد على الشريط الزمني تُضبط في <code>src/data/scenes.js</code> —
        هنا النصوص فقط.
      </p>
    </section>

    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">قسم التسجيل</h2>
        <span class="panel__s">${s.past?"انقضى موعد فتح التأجير":`متبقٍ ${m(s.d)} يوماً`}</span></div>
      ${O("register","النموذج والعدّاد","العناوين، موعد فتح التأجير، خيارات المساحة، ورسالة ما بعد التسجيل.",[["عنوان القسم",(f=t.register)==null?void 0:f.heading],["موعد فتح التأجير",(y=t.register)!=null&&y.deadline?ie(t.register.deadline):"—"],["نص الزر",(S=t.register)==null?void 0:S.submit],["خيارات المساحة",`${m((((A=t.register)==null?void 0:A.sizeOptions)||[]).length)} خيارات`]],a)}
    </section>

    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">التواصل والتذييل</h2></div>
      ${O("contact","كيف يصل إليك الزائر","البريد والهاتف والواتساب وقالب الرسالة الذي يستخدمه فريق التأجير من جدول المسجّلين.",[["البريد",(C=t.contact)==null?void 0:C.email],["الهاتف",(L=t.contact)==null?void 0:L.phone],["واتساب",(j=t.contact)==null?void 0:j.whatsapp],["قالب الرسالة",(ue=t.contact)==null?void 0:ue.waTemplate]],a)}
      ${O("footer","التذييل","نبذة المالك وبيانات التراخيص وإخلاء المسؤولية.",[["النبذة",(me=t.footer)==null?void 0:me.about],["إخلاء المسؤولية",(be=t.footer)==null?void 0:be.disclaimer],["التراخيص",`${m((((ve=t.footer)==null?void 0:ve.registrations)||[]).length)} بنود`]],a)}
      ${O("social","الحسابات","روابط الحسابات في التذييل. اتركه فارغاً ليختفي الرمز.",[["لينكدإن",((he=t.social)==null?void 0:he.linkedin)||"—"],["إنستغرام",((fe=t.social)==null?void 0:fe.instagram)||"—"],["إكس",(($e=t.social)==null?void 0:$e.x)||"—"]],a)}
    </section>

    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">بيانات الصفحة</h2>
        <span class="panel__s">ما يظهر في نتائج البحث وعند مشاركة الرابط</span></div>
      ${O("meta","العنوان والوصف","عنوان التبويب، وصف محرّكات البحث، وبطاقة المشاركة.",[["العنوان",(_e=t.meta)==null?void 0:_e.title],["الوصف",(ge=t.meta)==null?void 0:ge.description],["عنوان المشاركة",(ye=t.meta)==null?void 0:ye.ogTitle]],a)}
    </section>`,a&&Ot(e)}function O(e,t,a,s,r){return`
    <div class="set">
      <div>
        <p class="set__k">${n(t)}</p>
        <p class="set__d">${n(a)}</p>
      </div>
      <div>
        ${s.map(([c,o])=>`
          <div class="kv" style="margin-bottom:8px;align-items:baseline">
            <span style="min-width:118px;flex:none">${n(c)}</span>
            <b style="line-height:1.7">${n(o||"—")}</b>
          </div>`).join("")}
        ${r?`<button class="btn btn--sm ed" data-b="${e}" style="margin-top:12px">${u("edit",14)} تعديل</button>`:""}
      </div>
    </div>`}function jt(e){const t=l.site.flags||{};return`<div${e?"":' style="opacity:.55;pointer-events:none"'}>
    ${[["registrationOpen","التسجيل مفتوح","يُغلق النموذج ويستبدله برسالة عند الإطفاء."],["showPrices","إظهار الأسعار للجميع","الأصل أن تُكشف للمسجّلين فقط."],["showCountdown","عرض العدّاد","الأيام والساعات حتى فتح التأجير."],["englishEdition","النسخة الإنجليزية","يُظهر مبدّل اللغة في الصفحة."],["maintenanceMode","وضع الصيانة","يُخفي الموقع عن الزوّار مؤقتاً."]].map(([s,r,c])=>te({name:"flag:"+s,label:r,hint:c,checked:!!t[s]})).join("")}
  </div>`}function Ot(e){e.querySelectorAll('input[name^="flag:"]').forEach(t=>{t.addEventListener("change",()=>{const a=t.name.slice(5);R("site",{...l.site,flags:{...l.site.flags,[a]:t.checked}}),$("content","مفتاح تشغيل",`${a} → ${t.checked?"مفعّل":"مطفأ"}`),p(t.checked?"فُعّل المفتاح.":"أُطفئ المفتاح.")})}),e.querySelectorAll(".ed").forEach(t=>t.addEventListener("click",()=>Tt[t.dataset.b]())),e.querySelectorAll(".sc").forEach(t=>t.addEventListener("click",()=>Mt(Number(t.dataset.i))))}function E(e,t,a){R("site",{...l.site,[e]:t}),$("content","تعديل محتوى",a),p("حُفظ المحتوى.")}const Tt={hero:()=>{const e=l.site.hero||{};return g({title:"الواجهة",body:h(i({name:"eyebrow",label:"العنوان الفرعي",value:e.eyebrow||"",half:!0}),i({name:"title",label:"الاسم",value:e.title||"",half:!0}))+i({name:"subtitle",label:"السطر التعريفي",value:e.subtitle||""})+h(i({name:"cta",label:"زر بدء الجولة",value:e.cta||"",half:!0}),i({name:"scrollHint",label:"تلميح التمرير",value:e.scrollHint||"",half:!0})),wide:!0,onSubmit:t=>E("hero",{...e,...t},"نصوص الواجهة")})},register:()=>{const e=l.site.register||{};return g({title:"قسم التسجيل",subtitle:"العدّاد يُحسب من موعد فتح التأجير أدناه.",body:h(i({name:"eyebrow",label:"العنوان الفرعي",value:e.eyebrow||"",half:!0}),i({name:"submit",label:"نص الزر",value:e.submit||"",half:!0}))+i({name:"heading",label:"عنوان القسم",value:e.heading||""})+h(i({name:"deadline",label:"موعد فتح التأجير",value:(e.deadline||"").slice(0,16),type:"datetime-local",half:!0}),i({name:"deadlineLabel",label:"نص الموعد المعروض",value:e.deadlineLabel||"",half:!0}))+w({name:"sizeOptions",label:"خيارات المساحة في النموذج",value:(e.sizeOptions||[]).join(`
`),rows:4,hint:"خيار في كل سطر."})+h(i({name:"doneTitle",label:"عنوان ما بعد التسجيل",value:e.doneTitle||"",half:!0}),i({name:"fine",label:"السطر الدقيق",value:e.fine||"",half:!0}))+w({name:"doneBody",label:"رسالة ما بعد التسجيل",value:e.doneBody||"",rows:2}),wide:!0,onSubmit:t=>E("register",{...e,...t,deadline:t.deadline?`${t.deadline}:00+04:00`:e.deadline,sizeOptions:t.sizeOptions.split(`
`).map(a=>a.trim()).filter(Boolean)},"قسم التسجيل")})},contact:()=>{const e=l.site.contact||{};return g({title:"التواصل",body:h(i({name:"email",label:"البريد",value:e.email||"",dir:"ltr",half:!0}),i({name:"phone",label:"الهاتف",value:e.phone||"",dir:"ltr",half:!0}))+h(i({name:"whatsapp",label:"واتساب",value:e.whatsapp||"",dir:"ltr",half:!0}),i({name:"hours",label:"ساعات العمل",value:e.hours||"",half:!0}))+i({name:"address",label:"العنوان",value:e.address||""})+w({name:"waTemplate",label:"قالب رسالة واتساب",value:e.waTemplate||"",rows:3,hint:"{name} يُستبدل بالاسم الأول للمسجّل. هذا هو النص الذي يفتحه زر «مراسلة» في جدول المسجّلين."}),wide:!0,onSubmit:t=>E("contact",{...e,...t},"بيانات التواصل")})},footer:()=>{const e=l.site.footer||{};return g({title:"التذييل",body:w({name:"about",label:"النبذة",value:e.about||"",rows:3})+w({name:"disclaimer",label:"إخلاء المسؤولية",value:e.disclaimer||"",rows:2})+w({name:"registrations",label:"التراخيص",value:(e.registrations||[]).map(t=>`${t.k} | ${t.v}`).join(`
`),rows:4,hint:"بند في كل سطر، بصيغة «الاسم | القيمة»."}),wide:!0,onSubmit:t=>E("footer",{...e,...t,registrations:t.registrations.split(`
`).map(a=>a.split("|").map(s=>s.trim())).filter(([a])=>a).map(([a,s=""])=>({k:a,v:s}))},"التذييل")})},social:()=>{const e=l.site.social||{};return g({title:"الحسابات",subtitle:"اترك الحقل فارغاً ليختفي الرمز من التذييل.",body:i({name:"linkedin",label:"لينكدإن",value:e.linkedin||"",dir:"ltr"})+i({name:"instagram",label:"إنستغرام",value:e.instagram||"",dir:"ltr"})+i({name:"x",label:"إكس",value:e.x||"",dir:"ltr"}),onSubmit:t=>E("social",{...e,...t},"روابط الحسابات")})},meta:()=>{const e=l.site.meta||{};return g({title:"بيانات الصفحة",subtitle:"العنوان يظهر في تبويب المتصفح ونتائج البحث.",body:i({name:"title",label:"العنوان",value:e.title||""})+w({name:"description",label:"الوصف",value:e.description||"",rows:3,hint:"الأمثل بين 120 و160 حرفاً."})+i({name:"ogTitle",label:"عنوان بطاقة المشاركة",value:e.ogTitle||""})+w({name:"ogDescription",label:"وصف بطاقة المشاركة",value:e.ogDescription||"",rows:2}),wide:!0,onSubmit:t=>E("meta",{...e,...t},"بيانات الصفحة")})}};function Mt(e){const t=l.site.scenes||[],a=t[e];return g({title:`المشهد ${a.num}`,subtitle:"ثلاثة أسطر تظهر فوق اللقطة أثناء التمرير.",body:i({name:"label",label:"اسم الغرفة",value:a.label})+i({name:"title",label:"العنوان",value:a.title})+w({name:"description",label:"الوصف",value:a.description,rows:2}),onSubmit(s){const r=t.map((c,o)=>o===e?{...c,...s}:c);E("scenes",r,`نص المشهد ${a.num}`)}})}const At=Object.freeze(Object.defineProperty({__proto__:null,render:qt,subtitle:Et},Symbol.toStringTag,{value:"Module"})),Ct="الحساب، الفريق، ومظهر اللوحة";function Dt(e){const t=F(),a=l.users.find(r=>r.id===t.id)||t,s=t.role==="owner";e.innerHTML=`
    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">الحساب</h2></div>

      <div class="set">
        <div>
          <p class="set__k">الملف الشخصي</p>
          <p class="set__d">الاسم الذي يظهر بجانب التسجيلات المسندة إليك، وبريد الدخول.</p>
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
            <span class="who__av" style="width:46px;height:46px;font-size:.95rem">${n(Oe(a.name))}</span>
            <div>
              <p style="font-size:.95rem">${n(a.name)}</p>
              <p class="panel__s" dir="ltr" style="text-align:start">${n(a.email)}</p>
              <p class="panel__s">${n(ce(a.role).label)} · آخر دخول ${n(le(a.lastLogin))}</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn btn--sm" id="editMe">${u("edit",14)} تعديل الملف</button>
            <button class="btn btn--sm" id="editPw">${u("key",14)} تغيير كلمة المرور</button>
          </div>
        </div>
      </div>

      <div class="set">
        <div>
          <p class="set__k">التنبيهات</p>
          <p class="set__d">
            متى تُخطَر بتسجيل جديد. تُحفظ في هذا المتصفح الآن، وتنتقل إلى الحساب
            عند ربط قاعدة البيانات.
          </p>
        </div>
        <div>
          ${Y("notifyEmail","بريد عند كل تسجيل جديد","يصل إلى "+a.email)}
          ${Y("notifyWhatsapp","واتساب للتسجيلات المهمّة","الأنماط الكبيرة والإحالات فقط")}
          ${Y("notifyDigest","ملخّص يومي","رسالة واحدة في نهاية اليوم بدل رسالة لكل تسجيل")}
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="panel__h"><h2 class="panel__t">مظهر اللوحة</h2></div>

      <div class="set">
        <div>
          <p class="set__k">السمة</p>
          <p class="set__d">الداكن هو أرضية علامة رواق نفسها. الفاتح لضوء النهار والطباعة.</p>
        </div>
        <div class="seg" id="segTheme">
          <button data-v="dark" class="${k.theme==="dark"?"is-on":""}">داكن</button>
          <button data-v="light" class="${k.theme==="light"?"is-on":""}">فاتح</button>
        </div>
      </div>

      <div class="set">
        <div>
          <p class="set__k">شكل الأرقام</p>
          <p class="set__d">
            يخصّ أرقام اللوحة وحدها — العدّادات والتواريخ والنسب. أما نصوص الموقع
            (الإيجار، المساحات) فتبقى كما تُكتب في «محتوى الموقع»، لأنها تُطبع على
            الصفحة حرفاً بحرف.
          </p>
        </div>
        <div class="seg" id="segNum">
          <button data-v="latin" class="${k.numerals==="latin"?"is-on":""}">1 2 3</button>
          <button data-v="arab" class="${k.numerals==="arab"?"is-on":""}">١ ٢ ٣</button>
        </div>
      </div>

      <div class="set">
        <div>
          <p class="set__k">القائمة الجانبية</p>
          <p class="set__d">وضعها الافتراضي عند فتح اللوحة.</p>
        </div>
        <div class="seg" id="segSide">
          <button data-v="open" class="${k.sidebar==="open"?"is-on":""}">مفتوحة</button>
          <button data-v="closed" class="${k.sidebar==="closed"?"is-on":""}">مطوية</button>
        </div>
      </div>
    </section>

    ${s?Ut():""}

    <section class="panel danger">
      <div class="panel__h"><h2 class="panel__t">منطقة الخطر</h2></div>

      <div class="set">
        <div>
          <p class="set__k">إعادة تعيين البيانات</p>
          <p class="set__d">
            يمسح كل تعديل أُجري في هذا المتصفح — التسجيلات المضافة، الحالات
            المتغيّرة، نصوص الموقع — ويعيد الملفات الأصلية من
            <code>public/data/</code>. لا رجعة بعده.
          </p>
        </div>
        <div>
          <button class="btn btn--sm" id="reset" ${P("resetData")?"":"disabled"}>
            ${u("refresh",14)} إعادة التعيين
          </button>
        </div>
      </div>

      <div class="set">
        <div>
          <p class="set__k">تسجيل الخروج</p>
          <p class="set__d">إنهاء الجلسة على هذا الجهاز.</p>
        </div>
        <div><button class="btn btn--sm" id="out">${u("logout",14)} خروج</button></div>
      </div>
    </section>`,zt(e,a,s)}function Y(e,t,a){return`
    <label class="sw">
      <input type="checkbox" data-pref="${e}" ${k[e]?"checked":""}>
      <span class="sw__track"><i></i></span>
      <span class="sw__txt">
        <span class="sw__l">${n(t)}</span>
        <span class="sw__h">${n(a)}</span>
      </span>
    </label>`}function Ut(){const e=F();return`
    <section class="panel">
      <div class="panel__h">
        <h2 class="panel__t">الفريق</h2>
        <button class="btn btn--sm btn--solid" id="addUser">${u("plus",14)} إضافة عضو</button>
      </div>

      <div class="tbl" style="border:0">
        <table style="min-width:720px">
          <thead>
            <tr><th>العضو</th><th>الصلاحية</th><th>آخر دخول</th><th>الحالة</th><th style="width:100px"></th></tr>
          </thead>
          <tbody>
            ${l.users.map(t=>{const a=t.id===e.id;return`
              <tr data-user="${t.id}">
                <td class="cell-n">${n(t.name)}${a?' <span class="panel__s">(أنت)</span>':""}
                  <em dir="ltr" style="text-align:start">${n(t.email)}</em></td>
                <td class="nowrap">${n(ce(t.role).label)}</td>
                <td class="nowrap">${n(le(t.lastLogin))}</td>
                <td><span class="pill pill--${t.active?"ok":"mute"}">${t.active?"نشط":"موقوف"}</span></td>
                <td>
                  <div class="acts">
                    <button class="act u-ed" title="تعديل" aria-label="تعديل ${n(t.name)}">${u("edit",15)}</button>
                    ${a||t.role==="owner"?"":`<button class="act act--del u-del" title="إزالة" aria-label="إزالة ${n(t.name)}">${u("trash",15)}</button>`}
                  </div>
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
      <p class="tally">
        ${m(l.users.filter(t=>t.active).length)} عضواً نشطاً · الصلاحيات تُطبَّق في الواجهة فقط
        حتى ربط اللوحة بخادم.
      </p>
    </section>`}function zt(e,t,a){e.querySelectorAll("[data-pref]").forEach(s=>s.addEventListener("change",()=>{Q(s.dataset.pref,s.checked),p("حُفظ التفضيل.")})),Z(e,"segTheme","theme"),Z(e,"segNum","numerals"),Z(e,"segSide","sidebar"),e.querySelector("#editMe").addEventListener("click",()=>It(t)),e.querySelector("#editPw").addEventListener("click",()=>Bt(t)),e.querySelector("#out").addEventListener("click",Te),e.querySelector("#reset").addEventListener("click",Rt),a&&(e.querySelector("#addUser").addEventListener("click",Ht),e.querySelectorAll("[data-user]").forEach(s=>{var c;const r=l.users.find(o=>o.id===s.dataset.user);s.querySelector(".u-ed").addEventListener("click",()=>Pt(r)),(c=s.querySelector(".u-del"))==null||c.addEventListener("click",()=>Nt(r))}))}function Z(e,t,a){e.querySelector("#"+t).addEventListener("click",s=>{const r=s.target.closest("button");r&&Q(a,r.dataset.v)})}async function It(e){await g({title:"الملف الشخصي",body:h(i({name:"name",label:"الاسم",value:e.name,required:!0,half:!0}),i({name:"phone",label:"الجوال",value:e.phone||"",dir:"ltr",half:!0}))+i({name:"email",label:"البريد الإلكتروني",value:e.email,type:"email",dir:"ltr",hint:"هو نفسه بريد الدخول."}),wide:!0,onSubmit(t){if(!t.name.trim()||!t.email.trim())return p("الاسم والبريد مطلوبان.","err"),!1;if(l.users.some(a=>a.id!==e.id&&a.email.toLowerCase()===t.email.toLowerCase()))return p("هذا البريد مستخدم في حساب آخر.","err"),!1;q("users",e.id,t),Me({name:t.name,email:t.email}),$("user","تعديل ملف",t.name),p("حُفظ الملف الشخصي.")}})}async function Bt(e){await g({title:"تغيير كلمة المرور",subtitle:"ستحتاجها في الدخول القادم.",body:i({name:"current",label:"كلمة المرور الحالية",type:"password"})+h(i({name:"next",label:"الجديدة",type:"password",half:!0}),i({name:"again",label:"تأكيد الجديدة",type:"password",half:!0}))+'<p class="fld__h">ثمانية أحرف على الأقل. تُحفظ الآن في ملف يقرأه المتصفح — لا تستخدم كلمة مرور حقيقية قبل ربط خادم.</p>',submitLabel:"غيّر كلمة المرور",onSubmit(t){if(t.current!==e.password)return p("كلمة المرور الحالية غير صحيحة.","err"),!1;if(t.next.length<8)return p("الجديدة قصيرة — ثمانية أحرف على الأقل.","err"),!1;if(t.next!==t.again)return p("التأكيد لا يطابق الجديدة.","err"),!1;q("users",e.id,{password:t.next}),$("user","تغيير كلمة مرور",e.name),p("تغيّرت كلمة المرور.")}})}function Ue(e={}){return h(i({name:"name",label:"الاسم",value:e.name||"",required:!0,half:!0}),i({name:"phone",label:"الجوال",value:e.phone||"",dir:"ltr",half:!0}))+i({name:"email",label:"البريد الإلكتروني",value:e.email||"",type:"email",dir:"ltr",required:!0})+h(T({name:"role",label:"الصلاحية",value:e.role||"leasing",options:we.map(t=>({key:t.key,label:t.label})),hint:we.map(t=>`${t.label}: ${t.hint}`).join(" · "),half:!0}),T({name:"active",label:"الحالة",value:e.active===!1?"no":"yes",options:[{key:"yes",label:"نشط"},{key:"no",label:"موقوف"}],half:!0}))}async function Ht(){await g({title:"إضافة عضو",subtitle:"كلمة مرور مؤقتة تُنشأ تلقائياً ويغيّرها العضو بعد أول دخول.",body:Ue(),submitLabel:"أضف العضو",wide:!0,onSubmit(e){if(!e.name.trim()||!e.email.trim())return p("الاسم والبريد مطلوبان.","err"),!1;if(l.users.some(a=>a.email.toLowerCase()===e.email.toLowerCase()))return p("هذا البريد مسجّل بالفعل.","err"),!1;const t="rawaq-"+Math.random().toString(36).slice(2,8);re("users",{id:"u-"+Date.now().toString(36),...e,active:e.active==="yes",password:t,lastLogin:new Date().toISOString()}),$("user","عضو جديد",`${e.name} · ${ce(e.role).label}`),p(`أُضيف ${e.name}. كلمة المرور المؤقتة: ${t}`)}})}async function Pt(e){const t=F();await g({title:`تعديل ${e.name}`,body:Ue(e),wide:!0,onSubmit(a){if(!a.name.trim()||!a.email.trim())return p("الاسم والبريد مطلوبان.","err"),!1;if(e.id===t.id&&(a.role!=="owner"||a.active!=="yes"))return p("لا يمكنك خفض صلاحيتك أو إيقاف حسابك.","err"),!1;q("users",e.id,{...a,active:a.active==="yes"}),e.id===t.id&&Me({name:a.name,email:a.email,role:a.role}),$("user","تعديل عضو",a.name),p("حُفظت التعديلات.")}})}async function Nt(e){const t=l.leads.filter(s=>s.owner===e.id).length;await N({title:`إزالة ${e.name}؟`,body:t?`مسند إليه ${m(t)} تسجيلاً — ستبقى في القائمة بلا مسؤول حتى تُسنِدها لغيره.`:"سيفقد الوصول إلى اللوحة فوراً.",confirmLabel:"أزل العضو"})&&(de("users",e.id),$("user","إزالة عضو",e.name),p(`أُزيل ${e.name}.`))}async function Rt(){await N({title:"إعادة تعيين كل البيانات؟",body:"سيُمسح كل ما أُضيف أو عُدّل في هذا المتصفح وتُقرأ الملفات الأصلية من جديد. لا يمكن التراجع.",confirmLabel:"أعد التعيين"})&&(await Ge(),p("أُعيدت البيانات إلى ملفاتها الأصلية."))}const Ft=Object.freeze(Object.defineProperty({__proto__:null,render:Dt,subtitle:Ct},Symbol.toStringTag,{value:"Module"})),H={overview:{view:dt,icon:"overview",label:"نظرة عامة"},leads:{view:$t,icon:"leads",label:"المسجّلون",badge:()=>ze()},units:{view:xt,icon:"units",label:"الأنماط والوحدات"},content:{view:At,icon:"content",label:"محتوى الموقع"},settings:{view:Ft,icon:"settings",label:"الإعدادات",group:"الحساب"}},Le=document.getElementById("side"),ae=document.getElementById("top"),se=document.getElementById("view");Ve();const Gt=We();Gt&&Vt();async function Vt(){try{await Je()}catch(e){se.innerHTML=`
      <div class="panel">
        <h2 class="panel__t">تعذّر تحميل البيانات</h2>
        <p class="dlg__text" style="margin-top:10px">${n(e.message)}</p>
        <p class="dlg__text" style="margin-top:10px">
          ملفات البيانات تُقرأ من <code>public/data/</code> عبر الشبكة، فلا تعمل الصفحة
          عند فتحها مباشرة من القرص. شغّل <code>npm run dev</code> ثم افتح
          <code>/admin/index.html</code>.
        </p>
      </div>`;return}J(),window.addEventListener("hashchange",W),Ke(()=>{J(),W()}),document.addEventListener("prefs:change",e=>{if(e.detail.key==="theme"){pe(X());return}J(),W()}),W()}function ze(){return l.leads.filter(e=>e.status==="new").length}function X(){const e=location.hash.replace(/^#\/?/,"")||"overview";return H[e]?e:"overview"}function J(){const e=X(),t=k.sidebar==="closed";Le.classList.toggle("is-closed",t);const a=(c,o)=>{const b=o.badge?o.badge():0;return`
      <a class="nav-i${c===e?" is-on":""}" href="#/${c}"
         ${c===e?'aria-current="page"':""} title="${n(o.label)}">
        <span class="nav-i__ic">${u(o.icon)}</span>
        <span class="nav-i__t">${n(o.label)}</span>
        ${b?`<span class="nav-i__n">${b}</span>`:""}
      </a>`},s=Object.entries(H).filter(([,c])=>!c.group),r=Object.entries(H).filter(([,c])=>c.group);Le.innerHTML=`
    <div class="side__brand">
      <span class="side__mark">${Qe}</span>
      <div>
        <span class="side__name">رواق</span>
        <span class="side__sub">لوحة التحكم</span>
      </div>
    </div>

    <div class="side__nav">
      <div class="side__group">
        ${s.map(([c,o])=>a(c,o)).join("")}
      </div>
      <div class="side__group">
        <p class="side__gl">الحساب</p>
        ${r.map(([c,o])=>a(c,o)).join("")}
        <a class="nav-i" href="/" target="_blank" rel="noopener" title="عرض الموقع">
          <span class="nav-i__ic">${u("site")}</span>
          <span class="nav-i__t">عرض الموقع</span>
        </a>
      </div>
    </div>

    <button class="side__toggle" id="sideToggle" aria-label="طيّ القائمة">
      <span class="nav-i__ic">${u("chevrons")}</span>
      <span class="nav-i__t">${t?"":"إخفاء"}</span>
    </button>`,document.getElementById("sideToggle").addEventListener("click",()=>{Q("sidebar",k.sidebar==="closed"?"open":"closed"),J()})}function pe(e){const t=H[e],a=F(),s=ze();ae.innerHTML=`
    <div>
      <h1 class="top__t">${n(t.label)}</h1>
      <p class="top__s">${n(t.view.subtitle||"مشروع رواق · الخليج التجاري، دبي")}</p>
    </div>

    <div class="top__acts">
      <button class="icon-btn" id="bell" aria-label="التنبيهات">
        ${u("bell")}${s?'<span class="icon-btn__dot"></span>':""}
      </button>
      <button class="icon-btn" id="theme" aria-label="تبديل المظهر">
        ${u(k.theme==="dark"?"sun":"moon")}
      </button>
      <button class="who" id="who" aria-haspopup="menu" aria-expanded="false">
        <span class="who__av">${n(Oe(a.name))}</span>
        <span class="who__txt">
          <span class="who__n">${n(a.name)}</span>
          <span class="who__r">${n(Jt(a.role))}</span>
        </span>
      </button>
    </div>

    <div class="menu" id="whoMenu" role="menu" hidden>
      <div class="menu__head">
        <b>${n(a.name)}</b>
        <span dir="ltr">${n(a.email)}</span>
      </div>
      <a href="#/settings" role="menuitem">${u("user",16)} الملف الشخصي</a>
      <a href="#/settings" role="menuitem">${u("settings",16)} الإعدادات</a>
      <a href="/" target="_blank" rel="noopener" role="menuitem">${u("external",16)} فتح الموقع</a>
      <button class="is-danger" id="logout" role="menuitem">${u("logout",16)} تسجيل الخروج</button>
    </div>

    <div class="menu" id="bellMenu" role="menu" hidden>
      <div class="menu__head">
        <b>التنبيهات</b>
        <span>${s?`${s} تسجيل لم يُتواصل معه`:"لا جديد"}</span>
      </div>
      ${Wt()}
    </div>`,document.getElementById("theme").addEventListener("click",()=>{Q("theme",k.theme==="dark"?"light":"dark"),pe(X())}),xe("who","whoMenu"),xe("bell","bellMenu"),document.getElementById("logout").addEventListener("click",Te)}function Wt(){const e=l.activity.slice(0,5);return e.length?e.map(t=>`
      <a href="#/${t.type==="lead"||t.type==="status"?"leads":"overview"}" role="menuitem">
        <span>
          <span style="display:block">${n(t.title)} — ${n(t.desc)}</span>
          <span style="display:block;font-size:.72rem;opacity:.7">${n(ne(t.at))}</span>
        </span>
      </a>`).join(""):'<p class="dlg__text" style="padding:12px">لا شيء بعد.</p>'}function K(){ae.querySelectorAll(".menu").forEach(e=>e.hidden=!0),ae.querySelectorAll("[aria-haspopup], #bell").forEach(e=>e.setAttribute("aria-expanded","false"))}document.addEventListener("click",K);document.addEventListener("keydown",e=>{e.key==="Escape"&&K()});function xe(e,t){const a=document.getElementById(e),s=document.getElementById(t);a.addEventListener("click",r=>{r.stopPropagation();const c=s.hidden;K(),s.hidden=!c,a.setAttribute("aria-expanded",String(c))}),s.addEventListener("click",K)}function Jt(e){return{owner:"مالك الحساب",leasing:"مسؤول تأجير",viewer:"مطّلع"}[e]||e}let Ee=null;function W(){if(!Xe())return;const e=X();pe(e),se.innerHTML="",H[e].view.render(se),e!==Ee&&(Ee=e,window.scrollTo({top:0}))}
