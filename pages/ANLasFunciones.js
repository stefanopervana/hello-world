import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ANLasFunciones'>
 <div>
    <div>Abismo Null</div>
     
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
<p>https://elabismodenull.wordpress.com/2016/11/16/programacion-funcional-en-javascript-la-recursividad/</p>

<header className="entry-header">
					<span className="entry-meta entry-meta-categories"><a href="https://elabismodenull.wordpress.com/category/javascript/" rel="category tag">JavaScript</a>, <a href="https://elabismodenull.wordpress.com/category/programacion-funcional/" rel="category tag">Programación Funcional</a></span>
				<h1 className="entry-title">Programación funcional en JavaScript: Las&nbsp;funciones</h1>		<p className="entry-meta entry-meta-time">
						<a href="https://elabismodenull.wordpress.com/2016/11/04/programacion-funcional-en-javascript-las-funciones/"><span className="posted-on"><span className="screen-reader-text">Posted on </span><time className="entry-date published" datetime="noviembre 4"><i className="fa fa-clock-o"></i>noviembre 4</time></span></a> <span className="byline">by <span className="author vcard"><a className="url fn n" href="https://elabismodenull.wordpress.com/author/jdonsan/">jdonsan</a></span></span>		</p>
	</header>

	<div className="entry-content">
<img src="/static/22400318_3008cc30d1_b.jpg"  width="750" height="750"/>
<blockquote><p>Encontramos unas cajas en el desván del señor Klein.</p>
<p>Para nuestra sorpresa, las&nbsp;cajas&nbsp;eran capaces de transformar unos objetos en otros. Si en una caja insertaba arena de la playa, al instante obtenía una piedra dura y rojiza.&nbsp;Si insertaba en otra caja esta piedra, obtenía una pipeta de oro. Si mezclaba las dos cajas podía convertir mi tierra en oro.</p>
<p>¡Eran mágicas!</p></blockquote>
<p>Al igual que en el cuento anterior, las funciones tienen algo de mágico dentro de todo sistema. Si como hemos dicho, para seguir un estilo funcional, necesitamos crear funciones puras y sin efectos colaterales, podemos asegurarnos que dado un objeto, podamos transformarlo siempre en el mismo objeto&nbsp;diferente sin saber cómo se ha hecho.</p>
<p>Después de haber hecho&nbsp;un repaso sobre <a href="https://elabismodenull.wordpress.com/2016/10/12/la-programacion-funcional-en-javascript/" target="_blank">qué es la programación funcional</a> y <a href="https://elabismodenull.wordpress.com/2016/10/18/programacion-funcional-en-javascript-los-objetos/">cómo podemos aprovecharnos de ciertas funcionalidades de la orientación a objetos</a>, hoy terminamos la introducción de esta serie hablando sobre el eje central de este paradigma: Las funciones.</p>
<p>En este post hablaremos de cómo se comportan las funciones en JavaScript y que funcionalidades especiales nos proporciona el lenguaje para que podamos sacarle un mayor provecho en el estilo funcional.</p>
<blockquote><p>Nota: Recordaros que esta serie de post sobre programación funcional en JavaScript no habría sido posible sin la ayuda que me&nbsp;está aportando&nbsp;<a href="https://www.manning.com/books/functional-programming-in-javascript" target="_blank">este grandísimo libro</a>. Os lo recomiendo encarecidamente como recurso&nbsp;de cabecera.</p></blockquote>
<p><span id="more-3474"></span></p>
<h1>Las funciones en JavaScript</h1>
<p>Las funciones son la unidad de trabajo mínima en JavaScript. Todo gira alrededor de ellas y es complicado llegar a hacer algo si no es implementando e invocando funciones.</p>
<p>Una función se invoca en JavaScript cuando escribimos el nombre&nbsp;de una función seguido de (). <strong>De esta manera una función internamente puede devolver un valor (en este caso se denomina expresión) o devolver undefined &nbsp;(y en este caso se denomina sentencia). </strong></p>
<p>Debido a nuestra labor funcional, siempre vamos a intentar usarlas para que devuelvan un valor al igual que hacen las funciones en el mundo matemático. Las sentencias son más comunes en estilos imperativos.</p>
<p>Las funciones en JavaScript se definen como entidades de orden superior y como ciudadanos de primera clase (first-class citizen en inglés). Son dos conceptos que suelen ir de la mano y que explicaremos a continuación:</p>
<h2>Ciudadanos de primera clase</h2>
<p>Cuando nos referimos que un elemento de un lenguaje de programación cumple con esta máxima, queremos decir que<strong> es un elemento que soporta todas las operaciones generalmente disponibles para otras entidades importantes como puedan ser los objetos</strong>.</p>
<p>Como bien sabemos, nosotros podemos definir funciones en JavaScript de esta manera:</p>
<pre><code>{`function add(a, b) {
    return a + b;
}`}</code></pre>
<p>Pero también podemos asignar una función a una variable:</p>
<pre><code>{`var add = function(a, b) {
    return a + b;
}
var add = (a, b) =&gt; a + b;`}</code></pre>
<p>O podemos asignar una función a un método de un objeto:</p>
<pre><code>{`var calc = {
    add: f(a, b) =&gt; a + b
};`}</code></pre>
<p>También tenemos una práctica menos común de definir una función que es por medio de su constructor. Sin embargo, es una prueba de la naturaleza de primera clase de las funciones en JavaScript:</p>
<pre>var add = new Function('a', 'b', 'return a + b');</pre>
<p><strong>En JavaScript, toda función es una instancia del tipo ‘Function’</strong>.</p>
<h2>Entidades de orden superior</h2>
<p>Por otro lado, se dice que un elemento es de orden superior <strong>cuando ese elemento puede ser pasado como parámetro de otra función o devuelta por medio de un ‘return’</strong>.</p>
<p>Si anteriormente decíamos que la definición de una función en JavaScript podía guardarse en una variable, tiene sentido pensar que podría cumplir con esta característica.</p>
<p>Si seguimos con el ejemplo anterior, podemos ver que en JavaScript se puede realizar este ejemplo perfectamente:</p>
<pre><code>{`function applyOperation(a, b, opt) &nbsp;{
    return opt(a, b);
}

applyOperation(2, 3, add);`}</code></pre>
<p>Y este otro también:</p>
<pre><code>{`function add (a) {
    return function (b) {
        return a + b;
    }
}
add(2)(3);`}</code></pre>
<h1>Formas de invocar una función</h1>
<p>Parece algo trivial la forma en que una función puede invocarse, sin embargo, es importante conocer todas sus formas para explicar una de las funcionalidades que más polémicas genera el lenguaje: La naturaleza de ‘this’.</p>
<p>A diferencia de cómo nos pasa en otros lenguajes de programación, en JavaScript ‘this’ no siempre apunta al elementos que nosotros nos esperamos, no es algo intuitivo en JavaScript. ‘this’ apunta a un elemento diferente dependiendo el contexto en el que una función se invoque.</p>
<p>En JavaScript contamos con estas 3 formas de invocar una función. Veamos donde apunta ‘this’ en cada una de ella:</p>
<ul>
<li><strong>Como una función global</strong>:</li>
</ul>
<pre><code>{`function&nbsp;setInit() {
    <span className="skimlinks-unlinked">this.init</span> = 'Hello World';
}
setInit();`}</code></pre>
<p>En este caso ‘this’ señala al objeto global o a undefined si hemos indicado el ‘strict mode’.</p>
<ul>
<li><strong>Como un método de un objeto</strong>:</li>
</ul>
<pre><code>{`const obj = {
    prop: 'Hello World',
    getProp: function () {
        return <span className="skimlinks-unlinked">this.prop</span>;
    }
}
obj.getProp();`}</code></pre>
<p>En este caso ‘this’ está apuntando al propio objeto. Sin embargo este comportamiento cambia si hacemos lo siguiente:</p>
<pre><code>{`const getProp = obj.getProp;
getProp();`}</code></pre>
<p>En este caso hay que tener cuidado porque la función se encuentra ejecutando en otro contexto que no es el del objeto y si el del contexto global por lo que el resultado varía.</p>
<p>Un buen truco para saber dónde apunta ‘this’ es ejecutar esa función. El this siempre apunta al elemento a la izquierda del punto que se antepone a la función ejecutada. Si vemos los casos anteriores:</p>
<pre><code>{`obj.getProp(); // apunta a obj porque está a la izquierda del punto
window.getProp(); // apunta a window (objeto global) porque está a la izquierda del punto`}</code></pre>
<ul>
<li><strong>Como un constructor anteponiendo un ‘new’ a la llamada:</strong></li>
</ul>
<pre><code>{`function Obj() &nbsp;{
    <span className="skimlinks-unlinked">this.prop</span> = 'Hello World';
}
const obj = new Obj();`}</code></pre>
<p>En este caso apunta a obj porque la palabra reservada ‘new’ se encarga de hacer referencia del ‘this’ a dicho objeto.</p>
<p>Como vemos, 3 formas diferentes que alteran el comportamiento de ‘this’. Usar el estilo funcional en JavaScript es una buena idea porque es un estilo que va a intentar huir de contar con estados que no hayan sido definidos por los parámetros o estados internos de una función, es decir intentando huir del ‘this’, intentando no tener efectos secundarios por estados externos a una función.</p>
<p>Si huimos de ‘this’, evitaremos un gran números de errores que se comenten en JavaScript.</p>
<h1>Los ámbitos</h1>
<p>Otro problema con el que contamos en JavaScript es el comportamiento ‘extraño’ que tienen los ámbitos en JavaScript. Un ámbito en un lenguaje de programación determina en qué partes del programa una entidad (objeto, variable, función) puede ser usada.</p>
<p>En JavaScript contamos con dos ámbito hasta ES5:</p>
<ul>
<li><strong>El ámbito global</strong>: yo puedo definir variables fuera de mis funciones que estas variables se encuentran disponibles internamente. Como el siguiente caso:</li>
</ul>
<pre><code>{`const x = 5;
function printX() {
    <span className="skimlinks-unlinked">console.log(x</span>);
}
printX(); // pinta 5</pre>
<p className="padding-left:30px;">Esto nos supone serios problemas a la hora de programar. Poder acceder y manipular variables de ámbitos superiores provoca que tengamos muchos efectos secundarios. Puede llegar a ser difícil de comprobar como cambia el estado de nuestra aplicación si usamos este tipo de técnica.</p>
<p className="padding-left:30px;">Además, dentro de una aplicación conviven muchos tipos de scripts que si hacen uso de variables globales puede que se pisen las unas con las otras.</p>
<p className="padding-left:30px;">Lo más habitual es prescindir del ámbito global todo lo que podamos.</p>
<ul>
<li>El ámbito función: dentro de una función podemos declarar variables que estas no pueden ser accedidas desde fuera de su ámbito. Por ejemplo:</li>
</ul>
<pre style="padding-left:30px;">function foo() {
    const x = 5;
}
<span className="skimlinks-unlinked">console.log(x</span>); // undefined.`}</code></pre>
<p className="padding-left:30px;">El ámbito se mantiene interno a la función. Esto, como veremos, nos ayudará a guardar ciertos estados de nuestra aplicación seguros.</p>
<p>Y con un tercero desde ES6:</p>
<ul>
<li>El ámbito de bloque: desde ES6 podemos declarar variables que solo son disponibles dentro de un if, while, for&nbsp;o switch. Esto podemos conseguirlo gracias a la palabra reservada ‘let’.</li>
</ul>
<p className="padding-left:30px;">Es muy recomendable que en la medida de lo posible intentemos declarar las variables que queramos mantener privadas dentro de un bloque con ‘let’. Si no es asi y seguimos usando la palabra reservada ‘var’ seguiremos teniendo un fallo garrafal que nos ha costado muchos disgustos. Imaginemos el siguiente código:</p>
<pre><code>{`var arr = [1, 2, 3, 4];
function processArr() {
    function multipleBy10(val) {
        i = 10;
        return val * i;
    }

    for (var i = 0; i &lt; arr.length; i++) {
         arr[i] = multipleBy10(arr[i]);
    }

    return arr;
}
processArr(); // [10, 2, 3, 4];`}</code></pre>
<p className="padding-left:30px;">El probleme en este algoritmo viene a un proceso que se llama ‘hoisting’. JavaScript cuando evalua una función, lo primero que hace es buscar todas las variables y funciones y rescribirlo. Ese var i = 0 que observamos en el for se transforma en esta forma:</p>
<pre><code>{`var arr = [1, 2, 3, 4];
function processArr() {
    <strong>var i;</strong>

    function multipleBy10(val) {
        i = 10;
        return val * i;
    }

    for (<strong>i = 0</strong>; i &lt; arr.length; i++) {
         arr[i] = multipleBy10(arr[i]);
    }

    return arr;
}
processArr(); // [10, 2, 3, 4];`}</code></pre>
<p className="padding-left:30px;">Por culpa de esto el i = 10 que encontramos en ‘multipleBy10’ es la que se encuentra definida en el ámbito de la función. Con let no hubiera ocurrido esto, el resultado hubiese sido [10, 20, 30, 40] <strong>porque en ese caso i si era una variable de bloque y el i = 10 sería una variable definida en el ámbito global al no tener la palabra ‘var’ delante.&nbsp;</strong></p>
<p>Poder jugar con los ámbitos es algo importante en el estilo funcional en JavaScript. Al no contar con sintaxis específica para proteger elementos, jugar con los ámbitos nos va a permitir aislar estados a nuestro gusto o necesidad.</p>
<p>Son muy importantes para entender los closures que explicaremos a continuación.</p>
<h1>Los closures</h1>
<p>Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure ‘recuerda’ el entorno en el que se ha creado.</p>
<p>Hay un ejemplo que me gusta mucho para explicar este comportamiento y es la de implementar un contador:</p>
<pre><code>{`function getCounter(init = 0) {
    var counter = init;

    return function () {
        return ++counter;
    }
}

const incCounter = getCounter();
incCounter(); // 1
incCounter(); // 2`}</code></pre>
<p>Está muy chulo, porque la función que devuelve ‘getCounter’ y que guardamos en ‘incCounter’ está recordando el estado interno de su padre. Esto es lo que se llama closure.</p>
<p>Y esto nos es muy útil porque nos sirve para conseguir 3 importantes aspectos a la hora de programar:</p>
<ul>
<li><strong>Emular las variables privadas</strong>: hacer esto nos va ayudar a modularizar nuestras aplicaciones, pudiendo esconder o mostrar aquello que necesitemos. Una forma de un módulo sería la siguiente:</li>
</ul>
<pre><code>{`const module = (function () {
    return {
        foo,
        boo
    };
    
    function foo() {
        return _foo();
    }

    function boo() {
        return _boo();
    }

    function _foo() {
        return 'foo';
    }

    function _boo() {
        return 'boo';
    }
})();

<span className="skimlinks-unlinked">module.foo</span>() // 'foo'
<span className="skimlinks-unlinked">module._foo</span>() // error
<span className="skimlinks-unlinked">module.boo</span>() // 'boo'
<span className="skimlinks-unlinked">module._boo</span>() // error`}</code></pre>
<ul>
<li><strong>Emular ámbito de bloque</strong>: Aunque con ‘let’ es un problema mitigado, lo closures nos podían ayudar a mantener un ámbito de bloque. Creando funciones que se comporten como los iteradores for o while por ejemplo, podemos hacer que se eviten ese tipo de fallos. Veremos este tipo de soluciones en próximos posts.</li>
<li><strong>Hacer llamadas asíncronas</strong>: el <a href="http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/">patrón callback</a>&nbsp;se basa mucho en esta técnica para ejecutar funciones y pasar valores internos. Es algo bueno de que las funciones se comporten como elementos de primer orden y ciudadanos de primera clase.</li>
</ul>
<h1>Conclusión</h1>
<p>Como podemos comprobar, las funciones en JavaScript nos ofrecen unas posibilidades increíbles. Esto ha de ser bueno ya que muchos lenguajes de programación están intentando dar esta flexibilidad a su implementación de las funciones.</p>
<p>Una vez hemos creado un contexto y hemos explorado diferentes conceptos introductorios de JavaScript necesarios para el resto de serie, empezaremos a hablar en próximos post en cómo orientar nuestros desarrollos para que sean más funcionales.</p>
<p>Nos leemos <img draggable="false" className="emoji" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg" height="18px" weidth="18px"></img></p>
<p>PD: Como está siendo habitual en esta serie, os dejo el mapa mental de los conceptos clave del post:</p>
<p><img data-attachment-id="3514" data-permalink="https://elabismodenull.wordpress.com/2016/11/04/programacion-funcional-en-javascript-las-funciones/las-funciones-en-javascript/" data-orig-file="https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=1000" data-orig-size="1540,556" data-comments-opened="1"  height="265px" weidth="265px" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="las-funciones-en-javascript" data-image-description="" data-medium-file="https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=1000?w=300" data-large-file="https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=1000?w=1000" className="alignnone size-full wp-image-3514" src="https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=1000" alt="las-funciones-en-javascript" srcset="https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=1000 1000w, https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=150 150w, https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=300 300w, https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=768 768w, https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png?w=1024 1024w, https://elabismodenull.files.wordpress.com/2016/10/las-funciones-en-javascript.png 1540w" sizes="(max-width: 1000px) 100vw, 1000px"></img></p>
<p>Imagen de portada | <a href="https://www.flickr.com/photos/sidereal/22400318/in/photolist-2YNQo-dJTJKM-GofTzp-GfJtAA-pG3zrd-ia9Ssa-dKccFB-aPCmtv-99YsXh-8HSGfB-owPEof-5RLJQG-oFBrqp-bPehCn-k2WhL3-d9DkRA-9zMHuS-E7uuFW-qgcb5p-bCYisx-8GS4xz-97yuhq-DkH2zh-rpSNNq-oLWJsc-feCJAV-aj5aNp-86H3v3-dPHahh-hevRZG-nb72mJ-aMqFp6-k815QT-bNMrUV-qZg9tt-d9X6Z4-81vyMr-bh3yu4-bNMs7r-o8aNAm-4E3QC2-3LJieG-9kZzv3-p5ZHEA-93Lia9-fmE8Uj-oQi4RM-4WhWmv-dsdvMY-bvwb7z" target="_blank">flickr</a></p>

<p>Veamos ahora <nav><Link href='/MetodosFun'><a>Los Metodos Funcionales</a></Link></nav></p>

</div>            
<div className='col-md-3'></div>

    
    </div>
    </div>
    </div>
   
  </Layout>

)