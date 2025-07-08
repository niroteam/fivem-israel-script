const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./server/main.js'],
    bundle: true,
    minify: true,
    platform: 'node',
    target: ['node22'],
    outfile: './server/mainBuild.js',
}).catch(() => process.exit(1));
