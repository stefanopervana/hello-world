import Layout from '../components/layout'
import Link1 from 'next/link'
import Head1 from 'next/head'
import _JSXStyle from 'styled-jsx/style'


       
export default ({ children, title = 'This is the default title' }) => (
  <Layout title='Tutorial'>
<div>
    <Head1>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head1>
   
    <div>Tutorial: Intro To React</div>
    <div>
				<style jsx>{`

					.home {
						padding: 56px 420px;
						min-height: 100%;
						width: 100%;
					}

					h1 {
						color: red;
						font-size: 60px;
					}

					.it {
						color: brown;
						font-size: 24px;
						font-style: italic;
					}
					.p {
						color: #75AFAD;
						font-size: 24px;
						font-style: italic;
					}

				`}</style>
    <div>
  <div className='home'>


    <h1>
      Installation
    </h1>
     
<p className='it'>React es flexible y se puede utilizar en una variedad de proyectos. Se pueden crear nuevas aplicaciones con él, pero también se puede introducir gradualmente en una base de código existente sin hacer una reescritura.</p>


<p className='p'>React is flexible and can be used in a variety of projects. You can create new apps with it, but you can also gradually introduce it into an existing codebase without doing a rewrite.</p>
<h2><a className="anchor" name="trying-out-react"></a>Trying Out React</h2>
<p className='it'>Si no estas más que interesado en jugar con React, podes utilizar CodePen. Inténtalo de nuevo desde <a href="http://codepen.io/gaearon/pen/rrpgNB?editors=0010"> este código de ejemplo Hola Mundo</a> . No es necesario instalar nada; sólo podes modificar el código y ver si funciona.</p>


<p className='p'>If you're just interested in playing around with React, you can use CodePen. Try starting from <a href="http://codepen.io/gaearon/pen/rrpgNB?editors=0010">this Hello World example code</a>. You don't need to install anything; you can just modify the code and see if it works.</p>

<p className="it">Si preferis utilizar tu propio editor de texto, también podes <a href="/react/downloads/single-file-example.html" download="hello.html">descargar este archivo HTML</a>, editarlo, y abrirlo desde el sistema de archivos local en tu navegador. Se hace un transformación del código de tiempo de ejecución lenta, por lo que no lo uso en la producción.</p>


<p className='p'>If you prefer to use your own text editor, you can also <a href="/react/downloads/single-file-example.html" download="hello.html">download this HTML file</a>, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so don't use it in production.</p>
<h2><a className="anchor" name="creating-a-single-page-application"></a>Creating a Single Page Application</h2>
<p className="it"><a href="http://github.com/facebookincubator/create-react-app">Crear React App</a> es la mejor manera de empezar a construir una nueva aplicación React de una sola página. Se configura el entorno de desarrollo para que pueda utilizar las últimas características de JavaScript, proporciona una agradable experiencia al desarrollador, y optimiza tu aplicación para la producción.</p>


<p className='p'><a href="http://github.com/facebookincubator/create-react-app">Create React App</a> is the best way to start building a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.</p>
<div className="highlight"><pre>npm install -g create-react-app
create-react-app hello-world
<span className="nb">cd </span>hello-world
npm start
</pre></div>
<p className="it">Crear React App no maneja la lógica backend o bases de datos; sólo crea una tubería de acumulación de interfaz, por lo que se puede utilizar con cualquier sistema backend que se desee. Utiliza <a href="https://webpack.js.org/">webpack</a> , <a href="http://babeljs.io/">Babel</a> y <a href="http://eslint.org/">ESLint</a> bajo el capó, pero los configura para vos.</p>


<p className='p'>Create React App doesn't handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses <a href="https://webpack.js.org/">webpack</a>, <a href="http://babeljs.io/">Babel</a> and <a href="http://eslint.org/">ESLint</a> under the hood, but configures them for you.</p>
<h2><a className="anchor" name="adding-react-to-an-existing-application"></a>Adding React to an Existing Application</h2>
<p className="it">No es necesario volver a escribir tu aplicación para empezar a utilizar React.</p>


<p className='p'>You don't need to rewrite your app to start using React.</p>

<p className="it">Se recomienda agregar React a una pequeña parte de tu aplicación, como un widget individual, por lo que podemos ver si funciona bien para tu caso.</p>


<p className='p'>We recommend adding React to a small part of your application, such as an individual widget, so you can see if it works well for your use case.</p>

<p className="it">Mientras React <a href="/react/docs/react-without-es6.html">se puede utilizar</a> sin una tubería de acumulación, se recomienda configurarlo para que pueda ser más productivo. Una tubería de construcción típicamente moderna consiste en:</p>


<p className='p'>While React <a href="/react/docs/react-without-es6.html">can be used</a> without a build pipeline, we recommend setting it up so you can be more productive. A modern build pipeline typically consists of:</p>

<ul>
<li className="it">Un <strong>gestor de paquetes</strong>, tal como <a href="https://yarnpkg.com/">Yarn</a> o <a href="https://www.npmjs.com/">npm</a>. Se te permite tomar ventaja de un vasto ecosistema de paquetes de terceros, y fácil de instalar o actualizar.</li>
<li>A <strong>package manager</strong>, such as <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a>. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.</li>
<li className="it">Un <strong>bundler</strong>, como <a href="https://webpack.js.org/">webpack</a> o <a href="http://browserify.org/">Browserify</a>. Se te permite escribir código modular y agrupar juntos en pequeños paquetes para optimizar el tiempo de carga.</li>
<li>A <strong>bundler</strong>, such as <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a>. It lets you write modular code and bundle it together into small packages to optimize load time.</li>
<li className="it">Un <strong>compilador</strong> tal como <a href="http://babeljs.io/">Babel</a> . Te permite escribir código JavaScript moderno que todavía funciona en los navegadores antiguos.</li>
<li>A <strong>compiler</strong> such as <a href="http://babeljs.io/">Babel</a>. It lets you write modern JavaScript code that still works in older browsers.</li>
</ul>
<h3><a className="anchor" name="installing-react"></a>Installing React</h3>
<p className="it">Recomendamos el uso <a href="https://yarnpkg.com/">de Yarn</a> o <a href="https://www.npmjs.com/">npm</a> para la gestión de las dependencias de front-end. Si usted es nuevo para empaquetar los administradores, la <a href="https://yarnpkg.com/en/docs/getting-started">documentación de Yarn</a> es un buen lugar para empezar.</p>

<p className='p'>We recommend using <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a> for managing front-end dependencies. If you're new to package managers, the <a href="https://yarnpkg.com/en/docs/getting-started">Yarn documentation</a> is a good place to get started.</p>

<p className="it">Para instalar React con Yarn, ejecutá:</p>


<p className='p'>To install React with Yarn, run:</p>
<div className="highlight"><pre>yarn init
yarn add react react-dom
</pre></div>
<p className="it">Para instalar React con npm, ejecutá:</p>


<p className='p'>To install React with npm, run:</p>
<div className="highlight"><pre>npm init
npm install --save react react-dom
</pre></div>
<p className="it">Tanto Yarn o npm se descargan desde el <a href="http://npmjs.com/">registro del npm</a> .</p>


<p className='p'>Both Yarn and npm download packages from the <a href="http://npmjs.com/">npm registry</a>.</p>
<h3><a className="anchor" name="enabling-es6-and-jsx"></a>Enabling ES6 and JSX</h3>
<p className="it">Recomendamos el uso de React con <a href="http://babeljs.io/">Babel</a> que te permite utilizar ES6 y JSX en el código JavaScript. ES6 es un conjunto de modernas características de JavaScript que hacen que el desarrollo más fácil, y JSX es una extensión del lenguaje JavaScript que funciona muy bien con React.</p>


<p className='p'>We recommend using React with <a href="http://babeljs.io/">Babel</a> to let you use ES6 and JSX in your JavaScript code. ES6 is a set of modern JavaScript features that make development easier, and JSX is an extension to the JavaScript language that works nicely with React.</p>

<p className="it">Las <a href="https://babeljs.io/docs/setup/">instrucciones de configuración Babel</a> explican cómo configurar Babel en diversos entornos de compilación. Asegúrese de instalar <a href="http://babeljs.io/docs/plugins/preset-react/#basic-setup-with-the-cli-"><code>babel-preset-react</code></a> y <a href="http://babeljs.io/docs/plugins/preset-es2015/#basic-setup-with-the-cli-"><code>babel-preset-es2015</code></a> y les habilita en su <a href="http://babeljs.io/docs/usage/babelrc/"><code>.babelrc</code> configuración</a> , y ya está bueno para andar.</p>


<p className='p'>The <a href="https://babeljs.io/docs/setup/">Babel setup instructions</a> explain how to configure Babel in many different build environments. Make sure you install <a href="http://babeljs.io/docs/plugins/preset-react/#basic-setup-with-the-cli-"><code>babel-preset-react</code></a> and <a href="http://babeljs.io/docs/plugins/preset-es2015/#basic-setup-with-the-cli-"><code>babel-preset-es2015</code></a> and enable them in your <a href="http://babeljs.io/docs/usage/babelrc/"><code>.babelrc</code> configuration</a>, and you're good to go.</p>
<h3><a className="anchor" name="hello-world-with-es6-and-jsx"></a>Hello World with ES6 and JSX</h3>
<p className="it">Se recomienda utilizar una bundler como <a href="https://webpack.js.org/">webpack</a> o <a href="http://browserify.org/">Browserify</a> para que puedas escribir código modular y agruparlos juntos en pequeños paquetes para optimizar el tiempo de carga.</p>


<p className='p'>We recommend using a bundler like <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a> so you can write modular code and bundle it together into small packages to optimize load time.</p>

<p className="it">El más pequeño ejemplo de React es el siguiente:</p>


<p className='p'>The smallest React example looks like this:</p>
<div className="highlight"><pre><span className="kr">import</span> <span className="nx">React</span> <span className="nx">from</span> <span className="s1">'react'</span><span className="p">;</span>
<span className="kr">import</span> <span className="nx">ReactDOM</span> <span className="nx">from</span> <span className="s1">'react-dom'</span><span className="p">;</span>

<span className="nx">ReactDOM</span><span className="p">.</span><span className="nx">render</span><span className="p">(</span>
  <span className="o">&lt;</span><span className="nx">h1</span><span className="o">&gt;</span><span className="nx">Hello</span><span className="p">,</span> <span className="nx">world</span><span className="o">!&lt;</span><span className="err">/h1&gt;,</span>
  <span className="nb">document</span><span className="p">.</span><span className="nx">getElementById</span><span className="p">(</span><span className="s1">'root'</span><span className="p">)</span>
<span className="p">);</span>
</pre></div>
<p className="it">Este código hace un elemento DOM con el id de <code>root</code> por lo que es necesario incluir <code>&lt;div id="root"&gt;&lt;/div&gt;</code> en algún lugar de tu archivo HTML.</p>


<p className='p'>This code renders into a DOM element with the id of <code>root</code> so you need <code>&lt;div id="root"&gt;&lt;/div&gt;</code> somewhere in your HTML file.</p>

<p className="it">Del mismo modo, se puede renderizar un componente React dentro de un elemento DOM en algún lugar dentro de tu aplicación existente escrito con cualquier otra biblioteca de JavaScript UI.</p>


<p className='p'>Similarly, you can render a React component inside a DOM element somewhere inside your existing app written with any other JavaScript UI library.</p>
<h3><a className="anchor" name="development-and-production-versions"></a>Development and Production Versions</h3>
<p className="it">De forma predeterminada, React incluye muchas advertencias útiles. Estas advertencias son muy útiles en el desarrollo. Sin embargo, hacen a React más grande y más lento por lo que debes asegurarte de utilizar la versión de producción al implementar la aplicación.</p>


<p className='p'>By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.</p>
<h4><a className="anchor" name="create-react-app"></a>Create React App</h4>
<p className="it">Si utiliza <a href="https://github.com/facebookincubator/create-react-app">Crear React App</a> , <code>npm run build</code> creará una construcción optimizada de tu aplicación en la carpeta <code>build</code>.</p>


<p className='p'>If you use <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>, <code>npm run build</code> will create an optimized build of your app in the <code>build</code> folder.</p>
<h4><a className="anchor" name="webpack"></a>Webpack</h4>
<p className="it">Incluir tanto <code>DefinePlugin</code>y <code>UglifyJsPlugin</code>en tu producción de configuración Webpack como se describe en <a href="https://webpack.js.org/guides/production-build/">esta guía</a> .</p>


<p className='p'>Include both <code>DefinePlugin</code> and <code>UglifyJsPlugin</code> into your production Webpack configuration as described in <a href="https://webpack.js.org/guides/production-build/">this guide</a>.</p>
<h4><a className="anchor" name="browserify"></a>Browserify</h4>
<p className="it">Ejecutar Browserify con <code>NODE_ENV</code>el medio ambiente conjunto de variables a <code>production</code>y uso <a href="https://github.com/mishoo/UglifyJS">UglifyJS</a> como la última etapa de construcción para que el desarrollo de sólo código se quitó.</p>


<p className='p'>Run Browserify with <code>NODE_ENV</code> environment variable set to <code>production</code> and use <a href="https://github.com/mishoo/UglifyJS">UglifyJS</a> as the last build step so that development-only code gets stripped out.</p>
<h4><a className="anchor" name="rollup"></a>Rollup</h4>
<p className="it">El uso <a href="https://github.com/rollup/rollup-plugin-replace">acumulativo-plugin-reemplazar</a> Plugin junto con <a href="https://github.com/rollup/rollup-plugin-commonjs">el paquete acumulativo-plugin-CommonJS</a> (en ese orden) para eliminar el desarrollo de sólo código. <a href="https://gist.github.com/Rich-Harris/cb14f4bc0670c47d00d191565be36bf0">Ver este gist</a> para un ejemplo de la configuración completa.</p>


<p className='p'>Use <a href="https://github.com/rollup/rollup-plugin-replace">rollup-plugin-replace</a> plugin together with <a href="https://github.com/rollup/rollup-plugin-commonjs">rollup-plugin-commonjs</a> (in that order) to remove development-only code. <a href="https://gist.github.com/Rich-Harris/cb14f4bc0670c47d00d191565be36bf0">See this gist</a> for a complete setup example.</p>
<h3><a className="anchor" name="using-a-cdn"></a>Using a CDN</h3>
<p className="it">Si no desea utilizar la npm para gestionar paquetes de cliente, los <code>react</code>y <code>react-dom</code>la npm paquetes también proporcionan distribuciones de un único archivo de <code>dist</code>carpetas, que están alojados en un CDN:</p>


<p className='p'>If you don't want to use npm to manage client packages, the <code>react</code> and <code>react-dom</code> npm packages also provide single-file distributions in <code>dist</code> folders, which are hosted on a CDN:</p>
<div className="highlight"><pre><span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://unpkg.com/react@15/dist/react.js"</span><span className="nt">&gt;&lt;/script&gt;</span>
<span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://unpkg.com/react-dom@15/dist/react-dom.js"</span><span className="nt">&gt;&lt;/script&gt;</span>
</pre></div>
<p className="it">Las versiones anteriores sólo están hechos para el desarrollo, y no son adecuados para la producción. Minified y versiones optimizadas de producción React están disponibles en:</p>


<p className='p'>The versions above are only meant for development, and are not suitable for production. Minified and optimized production versions of React are available at:</p>
<div className="highlight"><pre><span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://unpkg.com/react@15/dist/react.min.js"</span><span className="nt">&gt;&lt;/script&gt;</span>
<span className="nt">&lt;script </span><span className="na">src=</span><span className="s">"https://unpkg.com/react-dom@15/dist/react-dom.min.js"</span><span className="nt">&gt;&lt;/script&gt;</span>
</pre></div>
<p className="it">Para cargar una versión específica de <code>react</code>y <code>react-dom</code>, reemplace <code>15</code>con el número de versión.</p>


<p className='p'>To load a specific version of <code>react</code> and <code>react-dom</code>, replace <code>15</code> with the version number.</p>

<p className="it">Si utiliza Bower, React está disponible a través del <code>react</code>paquete.</p>


<p className='p'>If you use Bower, React is available via the <code>react</code> package.</p>


  </div>
  
  </div>
  
  </div>
  </div>
  </Layout>  
)

