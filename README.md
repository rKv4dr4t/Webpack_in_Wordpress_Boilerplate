# Webpack in Wordpress - Boilerplate

This is a sample project that provide a simple installation of Webpack in a Wordpress theme, adding also some useful tools like Babel, Modernizr, js-xss, normalize.css, Autoprefixer, Prettier and a Sass boilerplate.


## Setup 

- install Node.js, if you are using cPanel, follow this [guide](https://www.a2hosting.com/kb/cpanel/cpanel-software/create-application-with-nodejs-selector) in order to create a Node app
- copy the repository into a WordPress theme
- build a custom Modernizr file [here](https://modernizr.com/download?setclasses) and replace `/js/modernizr-custom.js`
- open SSH connection
- `cd` in the theme folder, if you are using cPanel enter to the virtual environment (follow the previous guide)
- open `functions.php` and add:
```
/* Enqueue script del bundle di webpack */ 
function webpack_enqueue_scripts() {
	wp_enqueue_script( 'my-script', get_template_directory_uri() . '/dist/main.js', array(), true );
}
add_action( 'wp_enqueue_scripts', 'webpack_enqueue_scripts' );
```
- in the terminal (you can also use `npm run dev` or `npm run watch`:
```
npm install
npm run build
```
- don't forget to follow *To do* section


## To do
- remember to sanitize input client through js-xss (follow the example in `/js/index.js`)
- remember to add conditionals for Modernizr (follow the example in `/js/index.js`)
- remember to lint through Prettier after deploying: `npx prettier --write .`


## Features

- [Babel](https://github.com/babel/babel) 
- [Modernizr](https://github.com/Modernizr/Modernizr)
- [js-xss](https://github.com/leizongmin/js-xss)
- [Sass boilerplate](https://github.com/KittyGiraudel/sass-boilerplate)
- [normalize.css](https://github.com/necolas/normalize.css)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Prettier](https://github.com/prettier/prettier)


## Extra

If you prefer export the CSS separately from the main build, you can install [MiniCSSExtractPlugin](https://www.npmjs.com/package/mini-css-extract-plugin). In this way you will not have errors if you put url in CSS (for example using background url). 
- remember to link the CSS correctly in HTML (it will no longer be included in the bundle)

In `webpack.config.js`:
- remove the section of `test: /\.s[ac]ss$/i,`
- add in the first line of the file: `const MiniCssExtractPlugin = require("mini-css-extract-plugin");`
- add in the first line of `module.exports` the line: `plugins: [new MiniCssExtractPlugin()],`
- inside `module` and inside `rules` add:
```
{
test: /\.css$/,
use: [{
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '',
  }
},
  'css-loader'
],
},
```
