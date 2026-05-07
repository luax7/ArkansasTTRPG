export function load({ params ,cookies}) {
	return {
		Spell:params.spell,
        Cookies:cookies.getAll(),
	};
}