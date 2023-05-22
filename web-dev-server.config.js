/** @type {import('@web/dev-server').DevServerConfig} */
export default {
	open: true,
	watch: true,
	appIndex: 'index.html',
	nodeResolve: true,
	esbuildTarget: 'auto',
	port: 57385,
	middleware: [
		function (context, next) {
			if (!context.url.startsWith('/__') && !context.url.startsWith('/node_modules/')) {
				context.url = '/docs' + context.url;
				if (context.url.endsWith('/')) {
					context.url += 'index.html';
				}
			}
			return next();
		},
	],
};
