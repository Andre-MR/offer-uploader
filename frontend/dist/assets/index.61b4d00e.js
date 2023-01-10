const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};ve();const ee=document.getElementById("appContainer"),te=document.getElementById("loginArea"),r=document.getElementById("loginText"),L=document.getElementById("inputLoginPassword"),ye=document.getElementById("loginTrustedSwitch"),Le=document.getElementById("loginButton"),J=document.getElementById("modalDialog"),T=document.getElementById("modalOverlay"),P=document.getElementById("modalRemoveConfirmation"),A=document.getElementById("modalCloseBatchConfirmation"),Ce=document.getElementById("btnAddOffer"),Ee=document.getElementById("btnListOffers"),be=document.getElementById("btnCloseBatch"),xe=document.getElementById("btnListClosedBatches"),we=document.getElementById("btnLogout"),M=document.getElementById("listTitle"),E=document.getElementById("tableOffers"),k=document.getElementById("tableBatches"),Ie=document.getElementById("formOffer"),ie=document.getElementById("formWarning"),I=document.getElementById("formFieldTitle"),g=document.getElementById("formFieldStore"),u=document.getElementById("formFieldDescription"),V=document.getElementById("formFieldBadge"),a=document.getElementById("formFieldCode"),d=document.getElementById("formFieldType"),Y=document.getElementById("formFieldPriority"),_=document.getElementById("formFieldLocations"),Be=document.getElementById("formFieldVerifiedOn"),Se=document.getElementById("formFieldStartDate"),U=document.getElementById("formFieldValidTill"),W=document.getElementById("formFieldNotes"),C=document.getElementById("formFieldCategories"),h=document.getElementById("formFieldUrl"),G=document.getElementById("formFieldInputImage"),le=document.getElementById("btnCancelOffer"),Oe=document.getElementById("btnCancelOfferRemoving"),Q=document.getElementById("btnSaveOffer"),Fe=document.getElementById("btnConfirmOfferRemoving"),z=document.getElementById("btnCancelCloseBatch"),b=document.getElementById("btnConfirmCloseBatch"),x=document.getElementById("formFieldLabelImage"),F=document.getElementById("formHeaderTitle"),N=document.getElementById("btnFillAmazon"),D=document.getElementById("btnChangeDescription"),H=document.getElementById("loadingIcon"),S="http://localhost:3000",Te="https://ibb.co";let B,p,m,O={stores:null,categories:null},c,y=0;const re=`\u2714\uFE0F Selecione "comprar com recorr\xEAncia"
\u2714\uFE0F Confira o desconto na tela de pagamento

`;Ce.addEventListener("click",ze);G.addEventListener("change",Ue);Q.addEventListener("click",fe);Q.addEventListener("keypress",fe);le.addEventListener("click",K);le.addEventListener("keypress",ke);Ee.addEventListener("click",$);Oe.addEventListener("click",X);Fe.addEventListener("click",Ke);be.addEventListener("click",Ve);z.addEventListener("click",R);b.addEventListener("click",Re);xe.addEventListener("click",ge);d.addEventListener("change",Me);Le.addEventListener("click",de);L.addEventListener("keyup",de);we.addEventListener("click",q);N.addEventListener("click",We);h.addEventListener("keyup",pe);D.addEventListener("click",Ge);g.addEventListener("change",he);function qe(){m=localStorage.getItem("APIKEY"),m?$():f(!0)}async function ae(){if(!m){f(!0);return}fetch(`${S}/configs?apiKey=${m}`).then(function(e){return e.json()}).then(function(e){if(e.length>0&&e[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),L.value="",f(!0),!1;r.classList.remove("text-red-500"),f(!1),He(JSON.parse(e)),Ne()}).catch(function(e){r.innerHTML="Erro na solicita\xE7\xE3o.",r.classList.add("text-red-500"),console.log("Something went wrong!",e)})}function He(e){O.stores=e.stores,O.categories=e.categories,g.innerHTML="<option hidden>Loja</option>";for(const t of O.stores){const n=document.createElement("option");n.value=t.description,n.textContent=t.description,g.appendChild(n)}C.innerHTML=null;for(const t of O.categories){const n=document.createElement("option");n.value=t.description,n.textContent=t.description,C.appendChild(n)}}function Me(e){e.target.selectedIndex!=1?(a.value=null,a.disabled=!0,a.classList.add("bg-gray-300")):(a.disabled=!1,a.classList.remove("bg-gray-300"))}function Ne(){for(const e of C.options)e.addEventListener("mousedown",t=>{})}function de(e){(e&&e.key&&(e.key=="Enter"||e.keyCode==13)&&L.value||e.target.id=="loginButton")&&(m=L.value,ye.checked&&localStorage.setItem("APIKEY",`${m}`),$())}function q(){localStorage.removeItem("APIKEY"),window.location.reload()}function f(e){e?(te.classList.remove("hidden"),ee.classList.add("hidden"),L.focus()):(te.classList.add("hidden"),ee.classList.remove("hidden"))}function ce(){T.classList.remove("hidden"),J.classList.remove("hidden"),J.focus()}function ke(e){e&&e.key&&e.key!="Enter"&&e.keyCode!=13&&K()}function K(e){T.classList.add("hidden"),J.classList.add("hidden"),ue(),B=null,p=null,Ie.reset(),x.classList.remove("font-bold"),x.classList.remove("text-red-500"),x.classList.add("text-gray-500"),x.textContent="Image",X(),R(),he("clear")}function $e(){T.classList.remove("hidden"),P.classList.remove("hidden"),P.classList.add("flex")}function X(){T.classList.add("hidden"),P.classList.add("hidden"),P.classList.remove("flex")}function ze(){Y.value=0,d.selectedIndex=2,a.disabled=!0,a.classList.add("bg-gray-300"),F.classList.remove("text-orange-500"),F.classList.add("text-blue-500"),F.textContent="Nova oferta",ce()}function j(){ie.classList.remove("hidden")}function ue(){me(),ie.classList.add("hidden")}function Pe(){const e="border-red-500";I.value||I.classList.add(e),!g.selectedIndex>0&&g.classList.add(e),u.value||u.classList.add(e),!d.selectedIndex>0&&d.classList.add(e),(d.options[d.selectedIndex].value=="code"&&!a.value||d.options[d.selectedIndex].value!="code"&&a.value)&&a.classList.add(e),!C.selectedOptions.length>0&&C.classList.add(e),h.value||h.classList.add(e),B||G.classList.add(e)}function me(){const e="border-red-500";I.classList.remove(e),g.classList.remove(e),u.classList.remove(e),d.classList.remove(e),a.classList.remove(e),C.classList.remove(e),h.classList.remove(e),G.classList.remove(e)}function Ae(){return!I.value||!g.selectedIndex>0||!u.value||!d.selectedIndex>0||d.options[d.selectedIndex].value=="code"&&!a.value||d.options[d.selectedIndex].value!="code"&&a.value||!C.selectedOptions.length>0||!h.value||!B?(me(),Pe(),j(),!1):(ue(),!0)}function fe(e){if(e&&e.key&&(e.key=="Enter"||e.keyCode==13)){e.preventDefault(),Q.click();return}if(!Ae())return;let t={};t.id=p||null,t.title=I.value,t.description=u.value,t.badge=V.value?V.value:"Melhor Oferta",t.type=d.options[d.selectedIndex].value,t.code=a.value?a.value:null,t.store=g.options[g.selectedIndex].value,t.categories='"'+Array.from(C.selectedOptions).map(l=>l.value)+'"',t.locations=_.value?_.value:null,t.url=h.value,t.valid_till=U.value?U.value:null,t.priority=Y.value,t.notes=W.value?W.value:null,t.image_file=B;const n=new Headers;n.append("Content-Type","application/json");const i=JSON.stringify(t),o=p?"update":"add";let s={method:p?"PUT":"POST",headers:n,body:i,redirect:"follow"};fetch(`${S}/${o}?apiKey=${m}`,s).then(function(l){if(l.length>0&&l[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),L.value="",q(),f(!0),!1;K(),$()}).catch(function(l){console.log("Something went wrong!",l),j()})}function $(){if(!m){f(!0);return}w("Ofertas adicionadas ao lote atual",!1),fetch(`${S}/active?apiKey=${m}`).then(function(e){return e.json()}).then(function(e){if(e.length>0&&e[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),L.value="",f(!0),!1;r.classList.remove("text-red-500"),f(!1),E.classList.remove("hidden"),k.classList.add("hidden"),e.length>0?(w(`Ofertas adicionadas ao lote atual: ${e.length}`,!1),je(e),K()):_e(),(!O.stores||!O.categories)&&ae()}).catch(function(e){w("Erro na consulta, tente mais tarde.",!0),r.innerHTML="Erro na solicita\xE7\xE3o.",r.classList.add("text-red-500"),console.log("Something went wrong!",e)})}function ne(e){e.stopPropagation(),$e(),e.target.tagName=="svg"&&(p=e.target.parentElement.parentElement.querySelector('[title="id"]').textContent),e.target.tagName=="path"&&(p=e.target.parentElement.parentElement.parentElement.querySelector('[title="id"]').textContent)}function Ve(){E.querySelector("tbody").children.length>0&&E.querySelector("tbody").children[0].children[1]&&E.querySelector("tbody").children[0].children[1].title=="id"&&De()}function De(){T.classList.remove("hidden"),A.classList.remove("hidden"),A.classList.add("flex")}function R(){T.classList.add("hidden"),A.classList.add("hidden"),A.classList.remove("flex")}function Re(){const e=new Headers;e.append("Content-Type","application/json");const t="batch";let n={method:"POST",headers:e,redirect:"follow"};z.textContent="Fechar",b.disabled=!0,b.classList.add("hidden"),fetch(`${S}/${t}?apiKey=${m}`,n).then(function(i){if(i.length>0&&i[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),L.value="",q(),f(!0),!1;z.textContent="Cancelar",b.disabled=!1,b.classList.remove("hidden"),R(),ge(),ae()}).catch(function(i){console.log("Something went wrong!",i),w("Erro no Processamento, tente mais tarde.",!0),z.textContent="Cancelar",b.disabled=!1,b.classList.remove("hidden"),R(),j()})}function w(e,t){t?M.classList.add("text-red-500"):M.classList.remove("text-red-500"),M.textContent=e}function ge(){E.classList.add("hidden"),k.classList.remove("hidden"),M.textContent="\xDAltimos arquivos de lote fechados",fetch(`${S}/uploaded?apiKey=${m}`).then(function(e){return e.json()}).then(function(e){if(e.length>0&&e[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),loginField.value="",q(),f(!0),!1;e.length>0?(e=e.match(new RegExp('(?<=name\\":\\").*?(?=\\".\\"type\\")',"g")),e?(e.sort(),e.reverse(),Je(e)):se()):se()}).catch(function(e){w("Erro no Processamento, tente mais tarde.",!0),console.log("Something went wrong!",e)})}function Ke(){let e={};e.id=p;const t=new Headers;t.append("Content-Type","application/json");const n=JSON.stringify(e),i="delete";let o={method:"DELETE",headers:t,body:n,redirect:"follow"};fetch(`${S}/${i}?apiKey=${m}`,o).then(function(s){if(s.length>0&&s[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),L.value="",q(),f(!0),!1;X(),$()}).catch(function(s){console.log("Something went wrong!",s),j()})}function oe(e){e.stopPropagation(),F.classList.remove("text-blue-500"),F.classList.add("text-orange-500"),F.textContent="Editar oferta";let t;e.target.tagName=="svg"&&(t=e.target.parentElement.parentElement,p=e.target.parentElement.parentElement.querySelector('[title="id"]').textContent),e.target.tagName=="path"&&(t=e.target.parentElement.parentElement.parentElement,p=e.target.parentElement.parentElement.parentElement.querySelector('[title="id"]').textContent),I.value=t.querySelector('[title="title"]').textContent,g.value=t.querySelector('[title="store"]').textContent,u.value=t.querySelector('[title="description"]').textContent,V.value=t.querySelector('[title="badge"]').textContent,t.querySelector('[title="type"]').textContent=="C\xF3digo"?(d.selectedIndex=1,a.disabled=!1,a.classList.remove("bg-gray-300")):(d.selectedIndex=2,a.disabled=!0,a.classList.add("bg-gray-300")),a.value=t.querySelector('[title="code"]').textContent=="null"?"":t.querySelector('[title="code"]').textContent,Y.value=t.querySelector('[title="priority"]').textContent,_.value=t.querySelector('[title="locations"]').textContent=="null"?"":t.querySelector('[title="locations"]').textContent,Be.value=t.querySelector('[title="verified_on"]').textContent.substr(0,10),Se.value=t.querySelector('[title="start_date"]').textContent.substr(0,10),U.value=t.querySelector('[title="valid_till"]').textContent.substr(0,10),W.value=t.querySelector('[title="notes"]').textContent=="null"?"":t.querySelector('[title="notes"]').textContent,h.value=t.querySelector('[title="url"]').textContent;const n=t.querySelector('[title="categories"]').textContent.replace(/"/g,"").split(",");for(const o of C.options)for(const s of n)o.textContent==s&&(o.selected=!0);B=t.querySelector('[title="image_file"]').textContent;let i=B.match(new RegExp("(?<=data:).*(?=;)"))[0];x.textContent=`Arquivo "${i}" existente. Selecione outro se necess\xE1rio.`,x.classList.add("font-bold"),x.classList.add("text-red-500"),ce()}function je(e){let t=E.querySelector("tbody");t.innerHTML=null,e.forEach(function(n){const i=document.createElement("tr");i.className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100";let o=document.createElement("td");o.className="text-sm flex justify-center text-gray-900 font-light px-6 py-4 whitespace-nowrap",o.innerHTML='<svg class="cursor-pointer h-5 fill-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>',i.appendChild(o),o.querySelector("svg").addEventListener("click",oe),o.querySelector("path").addEventListener("click",oe),Object.keys(n).forEach(function(l){var v=document.createElement("td");if(l!="title"&&l!="badge"&&l!="type"&&l!="store"&&l!="categories"&&(v.hidden=!0),v.title=l,v.className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",l=="type"){let Z;Z=n[l]=="code"?"C\xF3digo":"Oferta",v.appendChild(document.createTextNode(Z))}else v.appendChild(document.createTextNode(n[l]));i.appendChild(v)});let s=document.createElement("td");s.className="text-sm flex justify-center text-gray-900 font-light px-6 py-4 whitespace-nowrap",s.innerHTML='<svg class="cursor-pointer h-5 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>',i.appendChild(s),s.querySelector("svg").addEventListener("click",ne),s.querySelector("path").addEventListener("click",ne),t.appendChild(i)}),E.appendChild(t)}async function Je(e){const t=k.querySelector("tbody");t.innerHTML=null;for(let n=0;n<e.length&&!(n>=100);n++){const i=document.createElement("tr");n==0?i.className="bg-green-300 border-b border-white font-bold transition duration-300 ease-in-out hover:bg-green-400":i.className="bg-green-100 border-b border-white transition duration-300 ease-in-out hover:bg-green-200";let o=document.createElement("td");n==0?o.className="text-center px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-800":o.className="text-center px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800";let s=document.createElement("a");if(s.href=`${Te}/offers/csv/${e[n]}`,s.textContent="CSV - "+e[n].substring(8,10)+"/"+e[n].substring(5,7)+"/"+e[n].substring(0,4)+" - "+e[n].substring(11,13)+":"+e[n].substring(14,16)+":"+e[n].substring(17,19),o.appendChild(s),i.appendChild(o),t.appendChild(i),n==0){const l=document.createElement("tr");l.className="bg-white border-b border-white";const v=document.createElement("td");v.className="py-2 whitespace-nowrap",l.appendChild(v),t.appendChild(l)}}k.appendChild(t)}function _e(){M.textContent="Ofertas adicionadas ao lote atual";let e=E.querySelector("tbody");e.innerHTML=null;const t=document.createElement("tr");t.className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100";let n=document.createElement("td");n.className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800",n.innerHTML="N\xE3o h\xE1 resultados para exibir",n.colSpan="6",t.appendChild(n),e.appendChild(t)}function se(){w("\xDAltimos arquivos de lote fechados",!1);let e=k.querySelector("tbody");e.innerHTML=null;const t=document.createElement("tr");t.className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100";let n=document.createElement("td");n.className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800",n.innerHTML="N\xE3o h\xE1 resultados para exibir",n.colSpan="6",t.appendChild(n),e.appendChild(t)}function Ue(e){let t=e.target.files[0],n=new FileReader;n.onloadend=()=>{B=n.result},n.readAsDataURL(t)}function pe(){return h.value.indexOf("/amzn.")>=0||h.value.indexOf("amazon.com")>=0?(N.classList.remove("hidden"),!0):(N.classList.contains("hidden")||N.classList.add("hidden"),!1)}function We(e){e.preventDefault(),pe()&&(H.classList.remove("hidden"),fetch(`${S}/amazonproduct?apiKey=${m}&url=${h.value}`).then(function(t){return t.json()}).then(function(t){if(t.length>0&&t[0]=="password")return r.innerHTML="Senha inv\xE1lida!",r.classList.add("text-red-500"),loginField.value="",q(),f(!0),!1;t.length>0&&(c=JSON.parse(t),Ye()),H.classList.contains("hidden")||H.classList.add("hidden")}).catch(function(t){w("Erro no Processamento, tente mais tarde.",!0),console.log("Something went wrong!",t),H.classList.contains("hidden")||H.classList.add("hidden")}))}async function Ye(){g.selectedIndex=1,y=0,c&&c.descriptions&&c.descriptions.length>1?(D.classList.remove("hidden"),u.classList.remove("pr-2"),u.classList.add("pr-10")):(D.classList.add("hidden"),u.classList.remove("pr-10"),u.classList.add("pr-2")),I.value=c.title.substring(0,50),V.value=Number.parseFloat(c.price.value).toLocaleString("pt-br",{style:"decimal",minimumIntegerDigits:1,minimumFractionDigits:2}),u.value=c.price.sns?re+c.descriptions[y].substring(0,8500):c.descriptions[y].substring(0,8500)}function Ge(e){e.preventDefault(),c&&c.descriptions&&c.descriptions.length>0&&(y>0?y=0:y=1,u.value=c.price.sns?re+c.descriptions[y].substring(0,8500):c.descriptions[y].substring(0,8500))}function he(e){(e.target&&e.target.options[e.target.selectedIndex].value!="Amazon"||e=="clear")&&(c=null,y=0,D.classList.add("hidden"),u.classList.remove("pr-10"),u.classList.add("pr-2"),N.classList.add("hidden"))}qe();