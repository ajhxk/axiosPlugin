module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
    parser: 'babel-eslint',
		sourceType: 'module',
		'ecmaVersion': 9,
    "allowImportExportEverywhere": false
	},
	env: {
    browser: true,
    node: true
  },
	extends: [
    'standard', 'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here 0表示关闭规则
	'rules': {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "promise/param-names": 0,
    "comma-dangle": ["error", "always-multiline"],
    'vue/html-closing-bracket-spacing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/attributes-order': 0,
		'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
		'vue/html-self-closing': 0,
		'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/order-in-components': 0,
    'vue/this-in-template': 0,
    'vue/html-quotes': 0,
    'vue/no-multi-spaces': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-prop-types': 0,
    'global-require': 0,
    'import/first': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-multi-assign': 0,
    "consistent-return": 0,
    'no-mixed-operators': 0,
    'max-len': 0,
    'no-bitwise': 0,
    'prefer-arrow-callback': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-extra-boolean-cast': 0,
    'object-shorthand': 0,
    'no-loop-func': 0,
    'arrow-parens': 0,
    'no-continue': 0,
    'no-useless-escape': 0,
    'no-debugger': 0,
    "linebreak-style": [0 ,"error", "windows"],
    "no-alert": 0,
  }
};
