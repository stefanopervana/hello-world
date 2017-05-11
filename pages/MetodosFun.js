import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='MetodosFun'>
 <div>
    <div>Los Metodos Funcionales</div>
     
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
                <h1 className="entry-title">Programación Funcional en JavaScript: Los métodos&nbsp;funcionales</h1>     <p className="entry-meta entry-meta-time">
                        <a href="https://elabismodenull.wordpress.com/2016/11/10/programacion-funcional-en-javascript-los-metodos-funcionales/"><span className="posted-on"><span className="screen-reader-text">Posted on </span><time className="entry-date published" datetime="noviembre 10"><i className="fa fa-clock-o"></i>noviembre 10</time></span></a> <span className="byline">by <span className="author vcard"><a className="url fn n" href="https://elabismodenull.wordpress.com/author/jdonsan/">jdonsan</a></span></span>       </p>
    </header>

    <div className="entry-content">
        <img src="/static/map-filter-reduce-in-emoji-1.png"  width="750" height="591"/>
        </div>
<blockquote><p>Creo que Swift explica los métodos funcionales mejor que yo. Si, el anterior código compilaría en Swift.</p></blockquote>
<p>Después de terminar con la primera fase introductoria de esta serie, nos adentramos en una nueva fase dedicada a explicar cómo va a ser el control de flujo en una aplicación de estilo funcional. Esta segunda serie va a constar de dos posts: uno dedicado a &nbsp;lo que conocemos como métodos funcionales y otro para explicar el término de recursividad.</p>
<p>En el actual post, nos centraremos en contestar a las siguientes preguntas:<strong> ¿Qué es un control de flujo? ¿Qué es el encadenamiento de&nbsp;métodos y funciones? y ¿Qué son las expresiones lambda?</strong></p>
<p>Por último, os enseñaré a usar tres métodos funcionales muy conocidos en JavaScript y en programación funcional como son <strong><em>map</em>, <em>reduce</em> y <em>filter</em></strong>.</p>
<p>Seguimos haciendo uso del libro ‘<a href="https://www.manning.com/books/functional-programming-in-javascript" target="_blank">Functional Programming in javaScript: How to improve yout JavaScript programs using functional techniques</a>‘. Espero que os guste. Adelante:</p>
<p><span id="more-3743"></span></p>
<h2>¿Qué entendemos por control de flujo en una aplicación?</h2>
<p>Nos referimos con control de flujo en una aplicación a <strong>los posibles caminos que se pueden llegar a tener para llegar a una solución determinada</strong>.</p>
<p>En programación imperativa estamos muy acostumbrados a indicar a nuestros programas <strong>un mapa exhaustivo de todos los caminos posible</strong> en los que puede desembocar un problema determinado.</p>
<p>Un ejemplo muy típico en programación imperativa podría ser el siguiente:</p>
<pre><code>{`var loop = optC();
while (loop) {
    var condition = optA();
    if (condition) {
       optB1();
    } else {
       optB2();
    }
    loop = optC();
}
optD();`}</code></pre>
<p>Como vemos, las iteraciones y las ramificaciones son importantes a la hora de entender el estilo imperativo.<strong> El estilo funcional apuesta por separar el control de flujo de una aplicación por medio de abstracciones que se comportan como cajas negras que lo único que hacen es traspasar estados de una operación a otra.</strong></p>
<p>Por lo tanto en un estilo funcional, nuestro mayor objetivo, será conseguir un código parecido al siguiente:</p>
<pre><code>{`optA().optB().optC().optD();`}</code></pre>
<p>Un estilo mucho más expresivo donde solo se indique que hacemos con una abstracción de alto nivel.</p>
<h2>¿Qué son los métodos encadenados?</h2>
<p>Los métodos encadenados son un patrón de diseño muy usado en lenguajes orientados a objetos que vienen muy bien a la hora de crear APIs estilo ‘fluent’.<strong> La idea es hacer operaciones sobre el estado de un objeto y que estos métodos devuelven el mismo objeto manipulado de tal forma que cuando hagamos uso de los métodos podamos encadenarlos unos de detrás de otros.</strong></p>
<p>Encontramos un caso representativo en el objeto String de JavaScript:</p>
<pre><code>{`'Hello World'.toSubString(0, 10).toLowerCase();`}</code></pre>
<p>El código es muy parecido a lo que queremos conseguir con el estilo funcional. Además, en este caso no tenemos los problemas imperativos con la mutabilidad de los estados ya que en JavaScript el tipo String es inmutable por lo que cuando realizamos un cambio en el string de origen, nosotros obtenemos una cadena totalmente nueva.</p>
<p>Esto no ocurrirá con todos los tipos u objetos por lo que, por ahora nos quedaremos más con la idea conceptual del patrón que con la propia implementación.</p>
<h2>¿Qué son las funciones encadenadas?</h2>
<p>Siguiendo con la comparación imperativa, nosotros sabemos que una de las formas de conseguir código y comportamiento reutilizable en orientación a objetos es por medio de la herencia. Yo tengo una clase tipo ‘Persona’ y puedo hacer que sus atributos y comportamiento sean heredados por una nueva estructura denominada ‘Cliente’.</p>
<p>Nos ocurre incluso para crear nuevas estructuras de datos. En el propio Java existen estructuras de datos que heredan de ‘List’ como ‘ArrayList’ o ‘LinkedList’ que tienen un comportamiento específico según la necesidad.</p>
<p>En el paradigma declarativo no se opta por la herencia de estructuras según necesidades comunes. <strong>En vez de ello se opta por aplicar funciones de orden superior a arrays para obtener el comportamiento deseado</strong>. El poder encadenar operaciones sobre diferentes elementos de esta manera nos ayuda en dos aspectos:</p>
<ul>
<li>Evitar los tradicionales mecanismos de bucle para iterar sobre elementos.</li>
<li>Poder inyectar comportamiento especializado para realizar la tarea que precisamos.</li>
</ul>
<p>Pongamos un ejemplo: Imaginemos que necesitamos multiplicar por 2 todos los elementos pares de un array. En estilo imperativo esto sería de esta forma;</p>
<pre><code>{`const array = [1, 2, 3, 4, 5, 6];
const arrayFinal = [array.length];

for (let i = 0; i &lt; array.length; i++) {
    <strong>arrayFinal[i] = (array[i] % 2 === 0) ? array[i] * 2 : array[i];</strong>
}

<span className="skimlinks-unlinked">console.log(arrayFinal</span>); // [1, 4, 3, 8, 5, 12]`}</code></pre>
<p>Imaginemos ahora que, de pronto, nos ha salido otra necesidad sobre los array en que tenemos que multiplique por 3 a todos los elementos impares. La función sería la siguiente:</p>
<pre><code>{`const array = [1, 2, 3, 4, 5, 6];
const arrayFinal = [array.length];

for (let i = 0; i &lt; array.length; i++) {
    <strong>arrayFinal[i] = (array[i] % 2 === 1) ? array[i] * 3 : array[i];</strong>
}

<span className="skimlinks-unlinked">console.log(arrayFinal</span>); // [4, 2, 6, 4, 8, 6]`}</code></pre>
<p>Como vemos, demasiado código repetido (He señalado en negrita las diferencias). Tenemos que refactorizarlo. Si lo hiciésemos con orientado a objetos podríamos crear un tipo base que recorriera el array y un método privado encargado de la especialización. Después con dos clases que heredasen de la base y sobreescribieran el método, lo tendríamos. Es el patrón <a href="https://es.wikipedia.org/wiki/Template_Method_(patr%C3%B3n_de_dise%C3%B1o)" target="_blank">Template Method</a>&nbsp;de calle.</p>
<p>En funcional vamos a hacer algo parecido. Como podemos pasar funciones como parámetros, vamos a abstraer a una función todo lo común:</p>
<pre><code>{`function loop(array, func) &nbsp;{
    const arrayFinal = [array.length];

    for (let i = 0; i &lt; array.length; i++) {
        arrayFinal[i] = func(array[i]);
    }

    return arrayFinal;
}`}</code></pre>
<p>Si ahora queremos realizar los dos casos de uso, lo haríamos así:</p>
<pre><code>{`const array = [1, 2, 3, 4, 5, 6];
const arrayFinal2 = loop(array, element =&gt; (element % 2 === 0) ? element * 2 : element);
const arrayFinal3 = loop(array, element =&gt; (element % 2 === 1) ? element * 3 : element);

<span className="skimlinks-unlinked">console.log(arrayFinal2</span>); // [1, 4, 3, 8, 5, 12]
<span className="skimlinks-unlinked">console.log(arrayFinal3</span>); // [3, 2, 9, 4, 15, 6]`}</code></pre>
<p>Incluso en este ejemplo, tenemos algo de código repetido. Podemos hacerlo mejor:</p>
<pre><code>{`const array = [1, 2, 3, 4, 5, 6];
const getExpression = function (rest, multiplier) {
    return (element =&gt; element % 2 === rest ? element * multiplier : element);
};
const arrayFinal2 = loop(array, getExpression(0, 2));
const arrayFinal3 = loop(array, getExpression(1, 3));

<span className="skimlinks-unlinked">console.log(arrayFinal2</span>); // [1, 4, 3, 8, 5, 12]
<span className="skimlinks-unlinked">console.log(arrayFinal3</span>); // [3, 2, 9, 4, 15, 6]`}</code></pre>
<p>Encadenar la ejecución de una función-parámetro nos va a permitir conseguir este funcionamiento. Lo veremos en los ejemplos de ‘map’, ‘reduce’ y ‘filter’.</p>
<h2>¿Qué son las expresiones lambda?</h2>
<p><strong>Son lo que también llamamos en JavaScript como ‘fat arrow’. Son funciones anónimas que siempre devuelven un valor. En JavaScript existen desde ES6</strong>.</p>
<p>Las expresiones <a href="https://es.wikipedia.org/wiki/C%C3%A1lculo_lambda" target="_blank">lambda </a>pueden contener más de una sentencia, pero yo recomiendo que se usen como expresiones simple de una única sentencia.<strong>El objetivo de las expresiones en sistemas funcionales es la de realizar una acción específica sobre unos parámetros dados, por lo que si necesitamos realizar varias acciones sería mejor usar una función normal</strong>.</p>
<p>Además de que tener varias sentencias es algo más típico del modelo imperativo. Evitemos las sentencias y promovamos el uso de expresiones.</p>
<p><strong>En JavaScript las expresiones lambda no son más que azúcar sintáctico</strong>. Simplifican la forma de escribir una función con menos elementos. Si antiguamente teníamos este elemento:</p>
<pre><code>{`const getFullName = function (obj) { return obj.fullname; }`}</code></pre>
<p>Ahora contamos con una sintaxis más sencilla:</p>
<pre><code>{`const getFullName = obj =&gt; obj.fullname;`}</code></pre>
<p>Que hace que nos centramos en la expresión y no tanto en escribir código.</p>
<h2>‘map’, ‘reduce’ y ‘filter’ en JavaScript</h2>
<p>Todo lo aprendido en este post, nos ayuda a entender estos tres métodos. <strong>Son tres métodos incluidos en ES5 para manipular arrays que se basan en el encadenamiento de métodos y funciones y en el uso de expresiones lambda</strong>.</p>
<p>Son funciones muy conocidas en el mundo funcional pues nos ayudan a obtener datos con las transformaciones que nosotros necesitemos. En JavaScript existen librerías que tienen implementados estos métodos funcionales antes que el propio JavaScript que son <a href="https://lodash.com/" target="_blank">Lodash</a>&nbsp;y <a href="http://underscorejs.org/" target="_blank">Underscore</a>.</p>
<p>Las cito porque pueda ser que en futuros post tengamos que echar mano de ellas porque JavaScript no cuente con alguna implementación interesante. Por si queréis ir mirando su funcionalidad, ahí las tenéis <img draggable="false" className="emoji"   height="18px" width ="18px" alt="😉" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f609.svg"></img></p>
<p>Expliquemos el funcionamiento de nuestros 3 nuevos amigos:</p>
<h3>Transformando datos con ‘map’</h3>
<p>Al igual que hice en el ejemplo anterior, en muchas ocasiones vamos a tener la necesidad de ir recorriendo un array de elementos e ir transformando sus datos por medio de una función.</p>
<p>La función ‘map’ recibe una expresión como parámetro que realiza la transformación en particular que necesitemos. El dibujo siguiente explica muy bien el funcionamiento interno de ‘map’:</p>
<p><img data-attachment-id="3987" data-permalink="https://elabismodenull.wordpress.com/2016/11/10/programacion-funcional-en-javascript-los-metodos-funcionales/mapping/" data-orig-file="https://elabismodenull.files.wordpress.com/2016/11/mapping.png?w=1000" data-orig-size="513,262" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="mapping" data-image-description="" data-medium-file="https://elabismodenull.files.wordpress.com/2016/11/mapping.png?w=1000?w=300" data-large-file="https://elabismodenull.files.wordpress.com/2016/11/mapping.png?w=1000?w=513" className=" size-full wp-image-3987 aligncenter" src="https://elabismodenull.files.wordpress.com/2016/11/mapping.png?w=1000" alt="mapping" srcset="https://elabismodenull.files.wordpress.com/2016/11/mapping.png 513w, https://elabismodenull.files.wordpress.com/2016/11/mapping.png?w=150 150w, https://elabismodenull.files.wordpress.com/2016/11/mapping.png?w=300 300w" sizes="(max-width: 513px) 100vw, 513px"></img></p>
<p><strong>Dado un array y una expresión de transformación devuelve un nuevo array con la transformación ejecutada</strong>. Un ejemplo sería el siguiente:</p>
<pre><code>{`[1, 2, 3, 4, 5, 6].map(x =&gt; x * 2); // [2, 4, 6, 8, 10, 12]`}</code></pre>
<p>Sin bucles, sin efectos colaterales, sin mutaciones… una maravilla funcional :).</p>
<h3>Reuniendo resultados con ‘reduce’</h3>
<p>‘reduce’ <strong>se usa como acumulador de resultados</strong>. ‘reduce’ espera una expresión que cuente con un parámetro acumulador y el elemento en el que se encuentra el iterador. Lo que devuelve ‘reduce’ es el valor acumulado. Se comporta ‘parecido’ un ‘groupBy’ de SQL.</p>
<p>Un ejemplo muy simple sería el de obtener el total de un array:</p>
<pre><code>{`[1, 2, 4, 5, 6].reduce((acumulado, elemento) =&gt; acumulado + elemento); // 18`}</code></pre>
<h3>Eliminando datos no deseados con ‘filter’</h3>
<p>‘filter’ espera una expresión que<strong> indique si el elemento en el que me encuentro es deseado o no</strong>. Nos viene muy bien para hacer búsquedas en un array. Se comporta parecido a un ‘where’ de SQL.</p>
<pre><code>{`[1, 2, 3, 4, 5, 6].filter(x =&gt; x % 2 === 0); // [2, 4, 6]`}</code></pre>
<h3>Pongamos todo junto</h3>
<p>Y la potencia que tiene esto es brutal a la hora de manipular arrays ya que <strong>cumple también con el patrón de método encadenado</strong>.</p>
<p>Imaginemos que quiero sumar solo los números pares de un array donde los números me vienen en tipo string. Podríamos hacerlo de esta manera:</p>
<pre><code>{`['1', '2', '3', '4', '5', '6']
    .map(parseFloat)
    .filter(x =&gt; x % 2 === 0)
    .reduce((x, y) =&gt; x + y); // 12`}</code></pre>
<p>Yo que venía de picotear en <a href="https://es.wikipedia.org/wiki/Language_Integrated_Query" target="_blank">LinQ</a>&nbsp;fue como que se me iluminara el mundo de nuevo (LinQ es una API pensada para similar SQL en C# con un enfoque muy&nbsp;funcional).</p>
<h2>Conclusión</h2>
<p>Como hemos visto, métodos como filter, map y reduce nos hacen la vida más fácil en nuestros desarrollos funcionales. <strong>El poder evitar los bucles en nuestro código, conseguirá que cometamos menos errores</strong>. Los métodos funcionales además son una buena forma de no echar de menos al ámbito de bloque que explicamos en <a href="https://elabismodenull.wordpress.com/2016/11/04/programacion-funcional-en-javascript-las-funciones/" target="_blank">el post anterior</a>.</p>
<p>En el próximo capítulo explicaremos otra forma distinta de controlar el flujo que tiene nuestra aplicación por medio de<strong> las técnicas recursivas</strong>.</p>
<p>Por el momento, es todo. Nos leemos <img draggable="false" className="emoji" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg" height="18px" width ="18px"></img></p>
<p>PD: Os dejo el mapa mental del post:</p>
<div className="entry-content">
        <img src="/static/los-mc3a9todos-funcionales.png"  width="750" height="750"/>
        </div>

<p>Veamos ahora <nav><Link href='/Recursi'><a>La programación Funcional en JavaScript: La recursividad</a></Link></nav></p>


</div>            
<div className='col-md-3'></div>

    
    </div>
    </div>
   
   
  </Layout>

)
	
	