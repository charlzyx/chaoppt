# Code Settings.json

```jsonc
{
  // formatter
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "always",
    "source.fixAll": "always",
    "source.eslint.fixAll": "always"
  },
  // common
  "editor.fontFamily": "'Console'",
  "terminal.integrated.gpuAcceleration": "off",
  "terminal.integrated.fontSize": 14,
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.renderWhitespace": "trailing",
  "editor.accessibilitySupport": "off",
  "editor.wordWrap": "bounded",
  "editor.wrappingIndent": "deepIndent",
  "editor.wrappingStrategy": "advanced",
  "files.autoGuessEncoding": true,
  "workbench.settings.useSplitJSON": true,
  "workbench.activityBar.location": "top",
  "workbench.colorTheme": "One Dark Pro Darker",
  "workbench.iconTheme": "vscode-icons",
  "window.dialogStyle": "custom",
  "telemetry.telemetryLevel": "off",
  "oneDarkPro.bold": true,
  "explorer.fileNesting.patterns": {
    "*.ts": "${capture}.js",
    "*.js": "${capture}.js.map, ${capture}.min.js, ${capture}.d.ts",
    "*.jsx": "${capture}.js",
    "*.tsx": "${capture}.ts",
    "package.json": ".browserslist*, .circleci*, .commitlint*, .cz-config.js, .czrc, .dlint.json, .dprint.json, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .simple-git-hooks*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .versionrc*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, Procfile, apollo.config.*, appveyor*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, dangerfile*, dlint.json, dprint.json, eslint*, firebase.json, grunt*, gulp*, jenkins*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, npm-shrinkwrap.json, nx.*, package-lock.json, package.nls*.json, phpcs.xml, pm2.*, pnpm*, prettier*, pullapprove*, pyrightconfig.json, release-tasks.sh, release.config.*, renovate*, rollup.config.*, rspack*, simple-git-hooks*, stylelint*, tslint*, tsup.config.*, turbo*, typedoc*, unlighthouse*, vercel*, vetur.config.*, webpack*, workspace.json, xo.config.*, yarn*, bun.lockb, bunfig.toml, biome.json",
    "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "rsbuild.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .envrc, .htmlnanorc*, .lighthouserc.*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, contentlayer.config.*, cssnano.config.*, cypress.*, env.d.ts, formkit.config.*, formulate.config.*, histoire.config.*, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, lighthouserc.*, playwright.config.*, postcss.config.*, puppeteer.config.*, rspack.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, uno.config.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
    "*.sqlite": "${capture}.${extname}-*",
    "*.db": "${capture}.${extname}-*",
    "*.sqlite3": "${capture}.${extname}-*"
  },
  "explorer.fileNesting.expand": true,
  "explorer.fileNesting.enabled": true,
  // auto
  "workbench.colorCustomizations": {
    "terminal.background": "#00000000"
  },
  "workbench.settings.applyToAllProfiles": ["workbench.colorCustomizations"],
  "settingsSync.ignoredExtensions": ["jasonhzq.vscode-pont"],
  "vim.enableNeovim": true,
  "vim.useSystemClipboard": true,
  "vim.vimrc.enable": true,
  "vim.leader": "<space>",
  "vim.useCtrlKeys": false,
  "extensions.experimental.affinity": {
    "vscodevim.vim": 1
  },
  "window.zoomLevel": 1.3,
  "oxc_language_server.enable": true,
  "oxc_language_server.trace.server": "verbose",
  "oxc_language_server.run": "onSave",
  "editor.dragAndDrop": false,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "zig.path": "zig",
  "zig.zls.path": "zls",
  "zig.initialSetupDone": true,
  "cmake.pinnedCommands": [
    "workbench.action.tasks.configureTaskRunner",
    "workbench.action.tasks.runTask"
  ],
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.hint.configWebviewMarkdown": false,
  "workbench.startupEditor": "none",
  "terminal.integrated.fontFamily": "monospace",
  "terminal.integrated.defaultProfile.linux": "zsh (2)",
  "terminal.external.linuxExec": "/bin/zsh"
}
```
