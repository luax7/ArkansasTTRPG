import "../../../../chunks/environment.js";
import { L as escape_html, n as derived, o as html } from "../../../../chunks/dev.js";
import "../../../../chunks/navigation.js";
import "js-yaml";
import { marked } from "marked";
//#region src/routes/spells/[spell]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let info = void 0;
		let IsInList = derived(() => GetSpellList().includes(info?.Name || ""));
		let MarkedDescription = derived(() => marked(info?.Description || ""));
		function GetSpellList() {
			const stored = localStorage.getItem("spellList");
			if (!stored) return [];
			try {
				return JSON.parse(stored);
			} catch {
				return [];
			}
		}
		if (info != void 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="Selector svelte-1ui7io1"><button class="svelte-1ui7io1"><p class="svelte-1ui7io1">close</p></button> <button class="svelte-1ui7io1"><p class="svelte-1ui7io1">${escape_html(IsInList() ? "remove from list" : "add to list")}</p></button></div> <div class="MainContainer svelte-1ui7io1"><div class="Header svelte-1ui7io1"><h1 class="name svelte-1ui7io1">${escape_html(info?.Name || "Loading")}</h1> <div class="BasicInfo svelte-1ui7io1"><p class="headertext basicinfo svelte-1ui7io1"><span class="svelte-1ui7io1">Feitiço de ${escape_html(info?.Props.Tipo)} de nivel ${escape_html(info?.Props.nivel)}</span></p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Custo</span> ${escape_html(info?.Props.custo)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Duraçao</span> ${escape_html(info?.Props.duração)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Alcance</span> ${escape_html(info?.Props.alcance)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Alvo</span> ${escape_html(info?.Props.alvo)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Dificuldade</span> ${escape_html(info?.Props.dificuldade)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Cracteristicas</span> ${escape_html(info?.Props.caracteristicas)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Açao</span> ${escape_html(info?.Props.açao)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Componentes</span> ${escape_html(info?.Props.componentes)}</p> <p class="headertext svelte-1ui7io1"><span class="svelte-1ui7io1">Materiais</span> ${escape_html(info?.Props.materiais)}</p></div></div> <div class="separator svelte-1ui7io1"></div> <p class="Description svelte-1ui7io1">${html(MarkedDescription())}</p></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (info == void 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h1 class="loading svelte-1ui7io1">Loading</h1>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
