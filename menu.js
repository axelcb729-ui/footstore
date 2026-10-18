// Menu « trois traits » partagé par toutes les pages (nécessite products.js)
(function(){
  const css=`
  .bg{background:none;border:0;cursor:pointer;width:42px;height:42px;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;border-radius:8px;margin-right:6px}
  .bg:hover{background:#222}
  .bg i{display:block;width:22px;height:2.5px;background:#fff;border-radius:2px}
  .nav-left{display:flex;align-items:center}
  .mn-ov{position:fixed;inset:0;background:rgba(0,0,0,.55);opacity:0;pointer-events:none;transition:.25s;z-index:90}
  .mn-ov.open{opacity:1;pointer-events:auto}
  .mn{position:fixed;top:0;left:0;bottom:0;width:320px;max-width:86vw;background:#fff;color:#111;z-index:100;transform:translateX(-100%);transition:transform .28s;display:flex;flex-direction:column;box-shadow:4px 0 24px rgba(0,0,0,.25)}
  .mn.open{transform:none}
  .mn-h{background:#111;color:#fff;padding:0 16px;height:60px;display:flex;align-items:center;justify-content:space-between;flex:none}
  .mn-h b{font-size:1.2rem;letter-spacing:-.5px}.mn-h b span{color:#e8ff00}
  .mn-x{background:none;border:0;color:#fff;font-size:2rem;cursor:pointer;line-height:1}
  .mn-b{overflow-y:auto;padding:14px 18px 30px;flex:1}
  .mn-promo{background:#e8ff00;color:#111;border-radius:10px;padding:12px 14px;font-weight:800;margin-bottom:14px;text-align:center}
  .mn-promo small{display:block;font-weight:600;font-size:.75rem}
  .mn form{display:flex;gap:6px;margin-bottom:10px}
  .mn input{flex:1;padding:10px 12px;border:1px solid #ddd;border-radius:8px;font-size:.95rem;min-width:0}
  .mn form button{background:#111;color:#fff;border:0;border-radius:8px;padding:0 14px;cursor:pointer;font-weight:700}
  .mn h4{font-size:.72rem;text-transform:uppercase;letter-spacing:.7px;color:#888;margin:18px 0 6px}
  .mn a.l{display:flex;justify-content:space-between;align-items:center;padding:10px 6px;color:#111;text-decoration:none;font-size:.95rem;border-radius:8px}
  .mn a.l:hover{background:#f2f2f2}
  .mn a.l em{font-style:normal;color:#999;font-size:.8rem}
  .mn details summary{cursor:pointer;padding:10px 6px;font-size:.95rem;list-style:none;display:flex;justify-content:space-between;border-radius:8px}
  .mn details summary:hover{background:#f2f2f2}
  .mn details summary::after{content:"+";color:#888}
  .mn details[open] summary::after{content:"−"}
  .mn details summary::-webkit-details-marker{display:none}
  .mn details .sub{max-height:300px;overflow-y:auto;padding-left:10px}
  `;
  const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

  const nav=document.querySelector(".nav");if(!nav)return;
  const logo=nav.querySelector(".logo");
  const left=document.createElement("div");left.className="nav-left";
  const btn=document.createElement("button");btn.className="bg";btn.setAttribute("aria-label","Ouvrir le menu");btn.setAttribute("aria-expanded","false");
  btn.innerHTML="<i></i><i></i><i></i>";
  left.appendChild(btn);if(logo)left.appendChild(logo);nav.insertBefore(left,nav.firstChild);

  const count=f=>P.filter(f).length;
  const clubs=[...new Set(P.map(p=>p.club))].sort((a,b)=>a.localeCompare(b,"fr"));
  const q=encodeURIComponent;
  const link=(href,label,n)=>`<a class="l" href="${href}"><span>${label}</span>${n!=null?`<em>${n}</em>`:""}</a>`;
  const promo=(typeof PRIX_UNIQUE==="number"&&PRIX_UNIQUE!==null)?`<div class="mn-promo">Tous les maillots à ${PRIX_UNIQUE} €<small>Offre en cours</small></div>`:"";

  const ov=document.createElement("div");ov.className="mn-ov";
  const mn=document.createElement("nav");mn.className="mn";mn.setAttribute("aria-label","Menu principal");
  mn.innerHTML=`
    <div class="mn-h"><b>Fut<span>sy</span></b><button class="mn-x" aria-label="Fermer le menu">×</button></div>
    <div class="mn-b">
      ${promo}
      <form action="index.html"><input name="q" type="search" placeholder="Rechercher un maillot…" aria-label="Rechercher"><button>OK</button></form>
      ${link("index.html","Tous les maillots",P.length)}
      ${link("panier.html","Mon panier")}
      <h4>Catégories</h4>
      ${["Adulte","Femme","Junior","Bébé"].map(c=>link("index.html?cat="+q(c),c==="Junior"?"Junior (enfant)":c,count(p=>p.cat===c))).join("")}
      <h4>Types de maillots</h4>
      ${["Domicile","Extérieur","Third"].map(t=>link("index.html?type="+q(t),t,count(p=>p.type===t))).join("")}
      ${link("index.html?type="+q("Autre"),"Entraînement, gardien, spéciaux…",count(p=>p.type==="Autre"))}
      <h4>Clubs et sélections</h4>
      <details><summary>Voir les ${clubs.length} équipes</summary><div class="sub">
        ${clubs.map(c=>link("index.html?club="+q(c),c,count(p=>p.club===c))).join("")}
      </div></details>
    </div>`;
  document.body.appendChild(ov);document.body.appendChild(mn);

  const open=o=>{mn.classList.toggle("open",o);ov.classList.toggle("open",o);btn.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
  btn.onclick=()=>open(!mn.classList.contains("open"));
  ov.onclick=()=>open(false);
  mn.querySelector(".mn-x").onclick=()=>open(false);
  document.addEventListener("keydown",e=>{if(e.key==="Escape")open(false)});
})();
