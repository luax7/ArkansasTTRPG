import "../../../chunks/environment.js";
import { I as attr, L as escape_html, n as derived, r as ensure_array_like } from "../../../chunks/dev.js";
import "../../../chunks/navigation.js";
import yaml from "js-yaml";
import "marked";
//#region src/components/spell.svelte
function Spell($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { info } = $$props;
		let width = 0;
		$$renderer.push(`<button class="SpellContainer svelte-1bvoktu"><h1 class="MainInfo svelte-1bvoktu"><spam class="SpammedName svelte-1bvoktu">${escape_html(info.Name)}</spam>, level ${escape_html(info.level)}</h1> `);
		if (width > 355) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="shortdesc svelte-1bvoktu">${escape_html(info.Description.slice(0, 60) + "...")}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="flexend svelte-1bvoktu"><p class="svelte-1bvoktu">Custo: <span class="bold svelte-1bvoktu">${escape_html(info.custo)}</span></p> <p class="svelte-1bvoktu">Components: <span class="bold svelte-1bvoktu">${escape_html(info.components)}</span></p></div></button>`);
	});
}
//#endregion
//#region src/routes/spells/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		class SpellProperties {
			"custo";
			"Tipo";
			"duração";
			"alcance";
			"alvo";
			"dificuldade";
			"açao";
			"componentes";
			"materiais";
			"nivel";
		}
		class SpellClass {
			constructor(desc, props, Name, Url, Level) {
				this.Description = desc;
				this.Props = props;
				this.Name = Name;
				this.Url = Url;
			}
			Props = new SpellProperties();
			Description = "";
			Name;
			Url;
			Update() {
				return new Promise((resolve, reject) => {
					GetSpell(this.Url).then((newValue) => {
						this.Description = newValue.Description;
						this.Name = newValue.Name;
						this.Props = newValue.Props;
						this.Save();
						resolve(true);
					}).catch((err) => {
						reject(err);
					});
				});
			}
			Save() {
				const index = DownloadedSpells.findIndex((Query, index) => {
					return Query.Name == this.Name;
				});
				if (index == -1) DownloadedSpells.push(this);
				else DownloadedSpells[index] = this;
				sessionStorage.setItem("DownloadedSpells", JSON.stringify(DownloadedSpells));
			}
		}
		let DownloadedSpells = [];
		let FilteredSpells = derived(() => DownloadedSpells.filter((spell) => Filters.every((fn) => fn(spell))));
		let TextField = "";
		let Filters = [(spell) => {
			if (TextField != "") {
				const normalizedName = spell.Name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				const normalizedTextField = TextField.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				return normalizedName.includes(normalizedTextField);
			}
			return true;
		}, (spell) => {
			return true;
		}];
		async function GetSpell(url) {
			return new Promise(async (resolve, reject) => {
				(await fetch(url)).text().then((SpellRaw) => {
					const Blocks = SpellRaw.split("---").slice(1);
					const Properties = yaml.load(Blocks.at(0)?.toLowerCase());
					const Desc = Blocks.at(1);
					const Name = url.split("/").slice(-1).join("").slice(0, -3).split("%20").join(" ");
					resolve(new SpellClass((Desc?.startsWith("##") ? Desc.slice(13) : Desc) || "", Properties, Name, url, url.split("/").slice(-2, -1).join("").split("%20")[1]));
				}).catch((err) => {
					console.log(err);
				});
			});
		}
		$$renderer.push(`<div class="MainContainer svelte-b9ede0"><!--[-->`);
		const each_array = ensure_array_like(FilteredSpells().values());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let Spells = each_array[$$index];
			Spell($$renderer, { info: Spells });
		}
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="BottomBar svelte-b9ede0"><ul class="QueryButtons svelte-b9ede0"><li id="FilterButton" class="svelte-b9ede0"><button class="svelte-b9ede0">filter</button></li> <li id="SearchInput" class="svelte-b9ede0"><input${attr("value", TextField)} type="text" class="svelte-b9ede0"/></li></ul> <ul class="selectedButton svelte-b9ede0"><li><button>Selected</button></li></ul></div>`);
	});
}
//#endregion
export { _page as default };
