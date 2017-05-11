import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='JSX1'>
 <div>
    <div>JSX 1</div>
     
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

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                        h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    p, li, ol, ul{
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>
    
    <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<p>Extraido de http://www.mmfilesi.com/blog/series/react-revisitado/</p>
<p>Hace unos dos años comencé un taller sobre React que dejé&nbsp;a medias&nbsp;y como ando estos días trabajando con esta herramienta había pensado en retomarlo. Sin embargo, desde entonces ha evolucionado bastante, sobre todo para adaptarse a ecmaScript 6, por lo que casi mejor empezaré desde cero.</p>
<p>React es un framework&nbsp;de Facebook que propone una nueva manera de entender el trabajo con javaScript: se abandonan los principios de la programación orientada a objetos y el patrón MVC tradicional para fundamentarse en otros paradigmas, como la programación reactiva y la funcional. Es complicado de resumir en unas pocas líneas qué significa esto, pero vendría a decir que la parte de la vista, separada en pequeñas piezas, se suscribe a un flujo general de datos y reacciona de forma automática cuando cambian.</p>
<p>Para entender este galimatías podemos establecer una analogía con un restaurante. Si estuviera orientado a objetos, tendríamos un objeto cocinero, otro camarero y un tercero comensal. Este último, el cliente, la vista, le pide al camarero un plato y este, que actúa de controlador, marcha hasta la cocina donde el modelo, el cocinero, se lo proporciona. Luego habría que definir una a una las instrucciones para que la vista se lo zampe:</p>
<ol>
<li>Coge el tenedor</li>
<li>Corta un trozo</li>
<li>Llévatelo a la boca...</li>
</ol>
<p>En lugar de eso, el planteamiento de React y otras herramientas similares es que el cliente está directamente conectado a la cocina y se «suscribe» a los platos que van saliendo por la puerta. Cuando aparece el suyo, pasa de forma transparente, sin necesidad de estar escribiendo cómo, del estado "pendiente de comer" al estado "estoy comiendo" y de ahí al "ya he comido".</p>
<p>Por poner otro ejemplo, para mostrar u ocultar un modal, en lugar de estar manipulando nosotros directamente el DOM añdiendo y quitando displays y opacities por javaScript, sencillamente definimos un estado showModal que puede tener dos valores: hide y show. Luego la vista se suscribe, se engancha, observa ese estado y se muestra de una forma u otra según vaya cambiando su&nbsp;valor.</p>
<p>Es un poco lío, pero cuando se baja al código queda más claro así que de momento dejamos aquí la teoría.</p>
<div className="panel-destacados dred"><p></p>
<p>Para profundizar en la programación funcional aplicada a javaScript, algunas lecturas interesantes son:</p>
<ul>
<li>La serie <a href="https://elabismodenull.wordpress.com/category/programacion-funcional/"><em>programación funcional</em>&nbsp;escrita por jdonsan </a>en El abismo de null. Una delicia.</li>
<li>Atencio, Luis . <em>Functional Programming in JavaScript.</em> Manning Publications, 2016.</li>
<li>Mantyla, Dan. <em>Functional Programming in JavaScript.</em> Packt Publishing, 2015.</li>
</ul>
<p></p></div>
<h4>Preparativos</h4>
<p>En las próximas entradas iré tratando los conceptos básicos de react -desde los componentes más sencillos hasta su integración con redux- con el desarrollo de una aplicación para llevar las cuentas domésticas, los gastos y los ingresos. No es muy original, pero espero que sirva para mostrar cómo se trabaja con esta herramienta.</p>
<p>La aplicación estará realizada en la <strong>versión 15.5.0&nbsp;</strong>con ecmaScript 2015, por lo que conviene estar familiarizado con las novedades de esta versión de javaScript, sobre todo con las clases, las arrow functions, los módulos y la destructuración.</p>
<p>Las últimas entradas estarán dedicadas a webpack, pero de momento vamos a utilizar una herramienta muy cómoda e intuitiva,&nbsp;<a href="https://github.com/facebookincubator/create-react-app">create-react-app,</a> que permite levantar un entorno react en un periquete.&nbsp;Así que lo primero es crear un directorio, nos vamos ahí y escribimos yarn init para preparar el package.json (o npm si nos gusta más). Luego instalamos el instalador de react.</p>
<pre><code>{`
yarn add create-react-app --save
`}</code></pre>
<p>Una vez todo descargado, creamos el scaffilding de la aplicación, que yo he llamado domesticEconomy, pero que cada cual llame como quiera.</p>
<pre><code>{`
create-react-app&nbsp;domesticEconomy
`}</code></pre>
<p>Cuando se terminan de instalar los dos millones de dependencias que necesita todo el tinglado, nos vamos por consola al directorio que ha generado create-react y&nbsp;levantamos un servidor que se relanza con los cambios escribiendo&nbsp;<strong>yarn start. </strong>Cuando tengamos todo listo para producción, <strong>yarn build.</strong></p>
<pre><code>{`
cd&nbsp;domesticEconomy
yarn start
`}</code></pre>
<h4>Hola mundo</h4>
<p>El scaffolding que genera create-react es muy sencillo. En dist estará la aplicación final, en src los archivos en los que estaremos trabajando y en public todo aquello que está al margen de React, como el index.html. De momento, lo más interesante de este último archivo es un nodo con el id root, a partir del cual se engarzará el árbol de nuestros componentes react con el DOM normal de la página. Por aquello de ser un poco más semánticos, vamos a cambiar ese div por un section.</p>
<p><span className="color: #800080;">public/index.html</span></p>
<pre><code>{`
<div id="root"></div>
<section ></section>
`}</code></pre>
<p>Vamos ahora con el archivo index.js que se encuentra en el directorio src, donde está el punto de entrada de nuestra aplicación,&nbsp;el equivalente al &lt;body&gt; de una página web, a partir del cual se irán distribuyendo componentes dentro de componentes siguiendo una estructura arbórea. Y este punto de entrada es el método <strong>render</strong> del <a href="https://facebook.github.io/react/docs/react-dom.html">paquete <strong>ReactDom</strong>,</a> el cual admite dos parámetros: <a href="https://facebook.github.io/react/docs/introducing-jsx.html">un fragmento de JSX</a> y un selector del nodo del DOM en el que debe enganchar la aplicación react.</p>
<pre><code>{`
ReactDOM.render(
<App />,
document.getElementById('root')
);
`}</code></pre>

<p>JSX es la manera peculiar con que se trabaja el html con React. Son como los tags de html, pero con alguna salvedad. Para empezar a conocerlo, algunas ideas a vuelapluma:</p>
<p>Al igual que ocurre en XML, los elementos deben ir por pares de apertura y cierre, y si uno no lo necesita (como ocurre con los &lt;br&gt; de html) hay que cerrar el tag al final:</p>
<pre><code>{`
	<myComponent /></p>
`}</code></pre>
<p>Como veremos cuando hablemos del método render, hay que englobarlos los tags de un componente en un solo tag (o nodo) raíz. Por ejemplo, esto cascaría:</p>
<pre><code>{`
<p><h3>Foo</h3></p>
<p>Lore Ipsum</p>`}</code></pre>

<p>Esto funcionaría:</p>
<pre><code>{`
<div>
<h3>Foo</h3>
<p>Lore Ipsum</p>
</div>
`}</code></pre>
<p>Los tags JSX admiten los mismos atributos que sus parientes hachetemelescos, salvo dos que se llaman de forma diferente por ser palabras reservadas de javaScript: <strong>className</strong> en lugar de class y&nbsp;<strong>htmlFor</strong> en lugar de for en los labels.</p>
<pre><code>{`
<p id="Foo" className="awesome">...
`}</code></pre>
<p>Por último, destacar que, aunque nos parezca html, <span className="text-decoration: underline;">jsx es javaScript,</span> por lo que en medio de la «plantilla» podemos&nbsp;incluir código js ejecutable, como las expresiones de Angular. Para eso, hay que indicarlo entre llaves ({}). Por ejemplo, este componente:</p>

<pre><code>{`
const ComponenteSimple = () => {
return (
<h3>Soy un componente mondo lirondo {2+2} </h3>
)
}`}</code></pre>

<p>Se renderizaría así:</p>

<pre><code>{`
Soy un componente mondo lirondo 4
`}</code></pre>

<p>Por lo tanto, para preparar un «hola mundo», lo único que debemos hacer es modificar el JSX que le estamos pasando como primer argumento al método render de ReactDOM...</p>
<pre><code>{`
ReactDOM.render(
<App />,
document.getElementById('root')
);`}</code></pre>
<p>Y poner el célebre saludo:</p>
<pre><code>{`
ReactDOM.render(
<h3>Hola Mundo</h3>,
document.getElementById('root')
);`}</code></pre>
<p>Bueno, pues por hoy lo dejo aquí.</p>
<p>&nbsp;</p>

</div>

<div className='col-md-3'></div>
  
    </div>
    </div>
   
  </Layout>
)






            


                  