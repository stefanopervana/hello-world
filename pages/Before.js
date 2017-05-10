import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'

export default () => (
  <Layout title='Before'>
 <div>
    <div>Before We Start</div>
     
				<style jsx>{`

					.col-md-6 {
						border-radius: 4px;
						overflow: hidden;
						box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
						display: block;
						min-height: 70%;
						font-family: Verdana;
						max-width: 900px;
						background-color: #E8EDEE;
						margin: auto;
						margin-top: auto;
					    margin-right: auto;
					    margin-bottom: auto;
					    margin-left: auto;
					    white-space: pre-wrap;
					    border: none;
					    box-sizing: border-box;
					    color: #2D0D0D;
					    line-height: 1.1;
					    padding: 4.7em;

					}

					.home {
					    margin: 1.5em 0;
					    
    	 			}

					h1 {
						color: #867452;
						font-size: 60px;
					}

					.it {
						color: brown;
						font-size: 24px;
						font-style: italic;
						letter-spacing: 0.09em;
					}
					.p {
						color: #75AFAD;
						font-size: 24px;
						font-style: italic;
					}

				`}</style>
    
    <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
    <a className="edit-page-link" href="https://github.com/facebook/react/tree/master/docs/docs/hello-world.md" target="_blank">Edit on GitHub</a>
    <h1>
      Hello World
    </h1>
    

    
    <p className="it">La forma más sencilla de empezar con React es utilizar <a href="http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010">este código de ejemplo de Hello World en CodePen</a>. No es necesario instalar nada; sólo podes abrirlo en otra pestaña y seguir a lo largo a medida que avanzamos a través de ejemplos. Si preferís utilizar un entorno de desarrollo local, echá un vistazo a la <a href="/react/docs/installation.html">instalación de</a> página.</p>
    <p className="p">The easiest way to get started with React is to use <a href="http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010">this Hello World example code on CodePen</a>. You don't need to install anything; you can just open it in another tab and follow along as we go through examples. If you'd rather use a local development environment, check out the <a href="/react/docs/installation.html">Installation</a> page.</p>


<p className="it">El ejemplo React más pequeño es el siguiente:</p>
<p className="p">The smallest React example looks like this:</p>
<div className="highlight"><pre><span className="nx">ReactDOM</span><span className="p">.</span><span className="nx">render</span><span className="p">(</span>
  <span className="o">&lt;</span><span className="nx">h1</span><span className="o">&gt;</span><span className="nx">Hello</span><span className="p">,</span> <span className="nx">world</span><span className="o">!&lt;</span><span className="err">/h1&gt;,</span>
  <span className="nb">document</span><span className="p">.</span><span className="nx">getElementById</span><span className="p">(</span><span className="s1">'root'</span><span className="p">)</span>
<span className="p">);</span>
</pre></div>

<p className="it">Se hace un encabezado que dice "Hello World" en la página.</p>
<p className="p">It renders a header saying "Hello World" on the page.</p>


<p className="it">En las siguientes secciones poco a poco se dará a conocer el uso de React. Vamos a examinar los componentes básicos de las aplicaciones React: elementos y componentes. Una vez que los domines, podes crear aplicaciones complejas a partir de pequeñas piezas reutilizables.</p>
<p className="p">The next few sections will gradually introduce you to using React. We will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</p>
<h2><a className="anchor" name="a-note-on-javascript"></a>A Note on JavaScript</h2>

<p className="it">React es una biblioteca JavaScript, por lo que se supone que tenes un conocimiento básico del lenguaje JavaScript. Si no te sentis muy seguro, te recomiendo <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"> actualizar tus conocimientos de JavaScript</a> para que puedas seguir a lo largo del libro más fácilmente.</p>
<p className="p">React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language. If you don't feel very confident, we recommend <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">refreshing your JavaScript knowledge</a> so you can follow along more easily.</p>


<p className="it">También utilizamos alguna de la sintaxis ES6 en los ejemplos. Tratamos de usarla con moderación porque todavía es relativamente nueva, pero te animamos a familiarizarte con <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a> , <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">classes</a> , <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals">template literals</a>, así como declaraciones <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> y <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a>. Podes utilizar <a href="http://babeljs.io/repl/#?babili=false&amp;evaluate=true&amp;lineWrap=false&amp;presets=es2015%2Creact&amp;experimental=false&amp;loose=false&amp;spec=false&amp;code=const%20element%20%3D%20%3Ch1%3EHello%2C%20world!%3C%2Fh1%3E%3B%0Aconst%20container%20%3D%20document.getElementById('root')%3B%0AReactDOM.render(element%2C%20container)%3B%0A">Babel REPL</a> para comprobar el código que se compila a ES6.</p>
<p className="p">We also use some of the ES6 syntax in the examples. We try to use it sparingly because it's still relatively new, but we encourage you to get familiar with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">classes</a>, <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals">template literals</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a> statements. You can use <a href="http://babeljs.io/repl/#?babili=false&amp;evaluate=true&amp;lineWrap=false&amp;presets=es2015%2Creact&amp;experimental=false&amp;loose=false&amp;spec=false&amp;code=const%20element%20%3D%20%3Ch1%3EHello%2C%20world!%3C%2Fh1%3E%3B%0Aconst%20container%20%3D%20document.getElementById('root')%3B%0AReactDOM.render(element%2C%20container)%3B%0A">Babel REPL</a> to check what ES6 code compiles to.</p>
</div>
<div className='col-md-3'></div>

  
 
    </div>
    </div>
   
  </Layout>
)
