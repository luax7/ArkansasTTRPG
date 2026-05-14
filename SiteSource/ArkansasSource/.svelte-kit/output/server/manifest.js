export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".env","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CfkG8_nl.js",app:"_app/immutable/entry/app.BbfdQKM5.js",imports:["_app/immutable/entry/start.CfkG8_nl.js","_app/immutable/chunks/Bwnq65jH.js","_app/immutable/chunks/4xoapRcf.js","_app/immutable/entry/app.BbfdQKM5.js","_app/immutable/chunks/4xoapRcf.js","_app/immutable/chunks/CHncfsjL.js","_app/immutable/chunks/D1hYfEew.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/spells",
				pattern: /^\/spells\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/spells/[spell]",
				pattern: /^\/spells\/([^/]+?)\/?$/,
				params: [{"name":"spell","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
