import * as server from '../entries/pages/spells/_spell_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spells/_spell_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/spells/[spell]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Dk043BPA.js","_app/immutable/chunks/4xoapRcf.js","_app/immutable/chunks/Bwnq65jH.js","_app/immutable/chunks/DR-kgRkl.js","_app/immutable/chunks/Dz-4vjf3.js","_app/immutable/chunks/D1hYfEew.js"];
export const stylesheets = ["_app/immutable/assets/4.Y1Aq7XIp.css"];
export const fonts = [];
