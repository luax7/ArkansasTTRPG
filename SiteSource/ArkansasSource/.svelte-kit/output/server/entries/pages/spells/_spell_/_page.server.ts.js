//#region src/routes/spells/[spell]/+page.server.ts
function load({ params, cookies }) {
	return {
		Spell: params.spell,
		Cookies: cookies.getAll()
	};
}
//#endregion
export { load };
