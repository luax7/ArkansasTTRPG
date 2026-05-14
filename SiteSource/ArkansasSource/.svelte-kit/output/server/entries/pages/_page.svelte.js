import "../../chunks/environment.js";
import "../../chunks/dev.js";
import "../../chunks/client.js";
import "../../chunks/navigation.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>`);
	});
}
//#endregion
export { _page as default };
