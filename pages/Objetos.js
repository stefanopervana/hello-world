import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='Objetos'>
 <div>
    <div>Objetos</div>
     
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
<h1>Objetos nativos e incorporados</h1>
            <h2 id="h-tc">Tabla de contenidos</h2>
            <ol id="tc">
                <li><a href="#intro">Introducción</a></li>
                <li><a href="#obj-array"><i>Array</i></a></li>
                <li><a href="#obj-date"><i>Date</i></a></li>
                <li><a href="#obj-string"><i>String</i></a></li>
                <li><a href="#obj-global"><i>Global</i></a></li>
                <li><a href="#obj-math"><i>Math</i></a></li>
            </ol>
            <h2 id="intro">Introducción</h2>
            <p>Un objeto es una colección de <dfn>propiedades</dfn> —una serie de valores— y de <dfn>métodos</dfn> —una serie de funciones—. Para acceder a una propiedad o un método de un objeto hay que concatenar ésta con el nombre del objeto por medio de un punto (<code>.</code>):</p>
            <pre><code>
    <i>Objeto</i>.<i>propiedad</i>;
    <i>Objeto</i>.<i>metodo</i>(<i>argumentos_si_se_necesitan</i>);
            </code></pre>
            <p>Con unos ejemplos concretos resultará más claro.</p>
            <p>Primero, voy a emplear directamente un objeto. Supongamos que necesito el valor de π. Como sé que existe un objeto que consiste en una serie de valores y operaciones matemáticas llamado <i>Math</i>, pido la propiedad <code>PI</code>:</p>
            <pre><code>
    var numero_pi = Math<strong>.PI</strong>;
            </code></pre>
            <p>Desde este momento <var>numero_pi</var> tienen un valor de 3.141592653589793.</p>
            <p>Ahora supongamos que quiero obtener en un <i>script</i> el año actual. Empleo para ello un objeto, <i>Date</i>, que almacena propiedades y métodos relativos a la fecha y hora del sistema. Así que creo una instancia del objeto y uso un método que me devuelve el año:</p>
            <pre><code>
    var fecha = new Date;
    alert(fecha<strong>.getFullYear()</strong>);
            </code></pre>
            <p>La alerta mostrará el año actual.</p>
            <p id="clasificacion-objetos">Según <abbr title="«European Computer Manufacturers Association», Asociación Europea de Fabricantes de Ordenadores">ECMA</abbr>-262 los objetos se clasifican en:</p>
            <ul>
                <li><strong>Nativos:</strong> Son objetos proporcionados por una implementación de este estándar que son independientes del entorno. Eso quiere decir que cualquier lenguaje basado en ECMAScript y conforme a él debe implementarlos. Son:
                    <ul>
                        <li><i>Array</i></li>
                        <li><i>Boolean</i></li>
                        <li><i>Date</i></li>
                        <li><i>Error</i></li>
                        <li><i>EvalError</i></li>
                        <li><i>Function</i></li>
                        <li><i>Number</i></li>
                        <li><i>Object</i></li>
                        <li><i>RangeError</i></li>
                        <li><i>ReferenceError</i></li>
                        <li><i>RegExp</i></li>
                        <li><i>String</i></li>
                        <li><i>SyntaxError</i></li>
                        <li><i>TypeError</i></li>
                        <li><i>URIError</i></li>
                    </ul>
                    Cada vez que se quiere emplear uno de ellos hay que crear una instancia del objeto por medio de la palabra clave <code>new</code>, como he mostrado en el ejemplo de la fecha.</li>
                    <li><strong>Incorporados (en inglés <i>built-in</i>):</strong> Son, como los anteriores, objetos que tiene que proporcionar una implementación de <abbr>ECMA</abbr>-262 y que también son independientes del entorno, pero que deben estar presentes al iniciarse la ejecución de un programa de ECMAScript. Por ello, como en el ejemplo que he puesto del número π, no hace falta crear una instancia para acceder a ellos. Son:
                        <ul>
                            <li><i>Global</i></li>
                            <li><i>Math</i></li>
                        </ul>
                    </li>
                    <li><strong>Anfitriones:</strong> Es todo objeto definido por una implementación concreta de ECMAScript, y que sí depende del entorno, por ejemplo objetos específicos definidos en ActionScript o en JavaScript. De estos últimos veremos algunos cuando trataemos <a href="curso_4_4.php">el <abbr title="«Browser Object Model», Modelo de Objeto de Navegador">BOM</abbr></a>.</li>
            </ul>
            <p>Tratar todo estos objetos en detalle sería una labor que excede el objetivo de este curso —y posiblemente de mis capacidades—, así que voy a tratar sólo unos pocos objetos que considero que son los más comúnmente empleados. En realidad, lo que me interesa no es tanto los objetos concretos, como explicar el cómo emplear cualquiera de ellos.</p>
            <h2 id="obj-array"><i>Array</i></h2>
            <p>En la sección dedicada a las variables <a href="curso_4_2_a.php#matrices">ya vimos lo que era una matriz</a>, pero como también indiqué allí, verla como un tipo de variable no es más que una forma intuitiva de comprenderla. En realidad una matriz es una instancia del objeto <i>Array</i>, y por ello en los ejemplos de las secciones anteriores la declarábamos por medio de la palabra clave <code>new</code>.</p>
            <p>Como todos los objetos, <i>Array</i> tiene una serie de propiedades y de métodos. Voy a recoger aquí los más importantes.</p>
            <p>De las propiedades, el que casi en un 90% de las ocasiones se va a emplear en exclusiva es <code>length</code>. Esta propiedad contiene el número de valores almacenados en la matriz:</p>
            <pre><code>
    var matriz = new Array();
        matriz[0] = 'El primer elemento';
        matriz[1] = 'El segundo elemento';
        matriz[2] = 'El tercer elemento';
        
    alert(matriz.length);
            </code></pre>
            <p>La alerta de este ejemplo nos mostraría el valor 3.</p>
            <p>Hay que tener en cuenta que la longitud de una matriz es independiente de la cantidad de valores almacenados, sino que depende de aquel que tenga un índice mayor. Por ejemplo, si declaramos una matriz especificando inicialmente el número de ítems:</p>
            <pre><code>
    var matriz = new Array(100);
            </code></pre>
            <p>o asignamos un valor de esta manera:</p>
            <pre><code>
    var matriz = new Array();
        matriz[99] = 'El nonagésimo noveno elemento';
            </code></pre>
            <p>La misma alerta de antes nos diría que la longitud de la matriz es 100 en ambos casos.</p>
            <p>Dicho esto, recojo ahora los métodos más comunes de <i>Array</i>:</p>
            <table>
                <caption>Métodos del objeto Array</caption>
                <tbody><tr>
                    <th scope="col">Método</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">¿Modifica la matriz?</th>
                </tr>
                <tr>
                    <td><code>pop</code></td>
                    <td>Devuelve el último elemento de la matriz, y lo elimina de la misma.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>push</code></td>
                    <td>Añade un elemento al final de la matriz, y devuelve la nueva longitud.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>reverse</code></td>
                    <td>Invierte el orden de los elementos de la matriz.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>shift</code></td>
                    <td>Devuelve el primer elemento de la matriz, y lo elimina de la misma.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>sort</code></td>
                    <td>Ordena los elementos de una matriz.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>splice</code></td>
                    <td>Añade o elimina elementos de una matriz.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>unshift</code></td>
                    <td>Añade un elemento al principio de la matriz y devuelve la nueva longitud.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>concat</code></td>
                    <td>Devuelve una matriz con todos los elementos de las matrices y/o valores concatenados.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>join</code></td>
                    <td>Une todos los elementos de una matriz en una única cadena literal.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>slice</code></td>
                    <td>Extrae una sección de una matriz y la devuelve como una nueva matriz.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>toString</code></td>
                    <td>Devuelve una cadena que representa a la matriz y a sus elementos.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>indexOf</code></td>
                    <td>Devuelve el primer índice del elemento que concuerda con el valor a comparar, o -1 si no existe.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>lastIndexOf</code></td>
                    <td>Devuelve el último índice del elemento que concuerda con el valor a comparar, o -1 si no existe.</td>
                    <td>No</td>
                </tr>
            </tbody></table>
            <p>Como se ve en la tabla, algunos de los métodos modifican la matriz, mientras que otros sólo representan la matriz de una forma determinada u ofrecen información sobre ella.</p>
            <p>Describo todos estos con más detalle en la página de muestra de <a href="js/ejemplos_metodos_array.php" id="v-ejs-metodos-array">los métodos de <i>Array</i> en funcinamiento</a>.</p>
            <h2 id="obj-date"><i>Date</i></h2>
            <p>El objeto <i>Date</i> contiene información sobre la fecha y la hora del sistema.</p>
            <p>Sus métodos son:</p>
            <table>
                <caption>Métodos del objeto Date</caption>
                <tbody><tr>
                    <th scope="col">Método</th>
                    <th scope="col">Descripción</th>
                </tr>
                <tr>
                    <td><code>parse</code></td>
                    <td>Convierte  una cadena que representauna fecha en el número de milisegundos transcurridos desde las 12 en punto de la noche del 1 de enero de 1970.</td>
                </tr>
                <tr>
                    <td><code>getDate</code></td>
                    <td>Devuelve el día del mes de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getDay</code></td>
                    <td>Devuelve el día de la semana de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getFullYear</code></td>
                    <td>Devuelve el año de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getHours</code></td>
                    <td>Devuelve la hora de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getMilliseconds</code></td>
                    <td>Devuelve el milisegundo de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getMinutes</code></td>
                    <td>Devuelve el minuto de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getMonth</code></td>
                    <td>Devuelve el mes de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getTime</code></td>
                    <td>Devuelve el número de milisegundos transcurridos desde las 12 en punto de la noche del 1 de enero de 1970.</td>
                </tr>
                <tr>
                    <td><code>getSeconds</code></td>
                    <td>Devuelve el segundo de acuerdo con la hora local.</td>
                </tr>
                <tr>
                    <td><code>getTimezoneOffset</code></td>
                    <td>Devuelve los minutos de diferencia entre la hora local y el <abbr title="Tiempo Universal Coordinado">UTC</abbr><sup class="nota"><a href="#nota01" id="texto01">1</a></sup>.</td>
                </tr>
                <tr>
                    <td><code>getUTCDate</code></td>
                    <td>Devuelve el día del mes de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCDay</code></td>
                    <td>Devuelve el día de la semana de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCFullYear</code></td>
                    <td>Devuelve el año de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCHours</code></td>
                    <td>Devuelve la hora de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCMilliseconds</code></td>
                    <td>Devuelve el milisegundo de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCMinutes</code></td>
                    <td>Devuelve el minuto de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCMonth</code></td>
                    <td>Devuelve el mes de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>getUTCSeconds</code></td>
                    <td>Devuelve el segundo de acuerdo con la hora universal.</td>
                </tr>
                <tr>
                    <td><code>toString</code></td>
                    <td>Convierte la fecha en una cadena literal que la representa.</td>
                </tr>
                <tr>
                    <td><code>toDateString</code></td>
                    <td>Convierte una fecha en una cadena legible para seres humanos.</td>
                </tr>
                <tr>
                    <td><code>toUTCString</code></td>
                    <td>Convierte una fecha en una cadena acorde con la convención <abbr>UTC</abbr> de Internet.</td>
                </tr>
                <tr>
                    <td><code>toLocaleString</code></td>
                    <td>Convierte una fecha en una cadena acorde con la convención de la hora local.</td>
                </tr>
                <tr>
                    <td><code>toLocaleDateString</code></td>
                    <td>Como el anterior, pero sólo para la porción de día/mes/año.</td>
                </tr>
                <tr>
                    <td><code>toLocaleTimeString</code></td>
                    <td>Como el anterior, pero sólo para la porción de hora/minuto/segundo.</td>
                </tr>
                <tr>
                    <td><code>valueOf</code></td>
                    <td>Devuelve el número de milisegundos transcurridos desde las 12 en punto de la noche del 1 de enero de 1970.</td>
                </tr>
            </tbody></table>
            <p>Para cada método que comienza con <code>get</code>– hay un equivalente con <code>set</code>–, que sirve para establecer los valores de la fecha en lugar de para obtenerlos. Personalmente nunca les he encontrado aplicación, así que los menciono, pero no los incluyo en <a href="js/ejemplos_metodos_date.php" id="v-ejs-metodos-date" title="Ejemplo de los métodos del objeto Date">el ejemplo</a>.</p>
            <h2 id="obj-string"><i>String</i></h2>
            <p>Como vimos al tratar las <a href="curso_4_2_a.php">variables</a>, se puede declarar cualquier tipo de escalar por medio de la palabra clave <code>var</code>. No obstante, existe un objeto con sus propiedades y métodos para cada tipo de variable. Así, existen los objetos <i>Boolean</i>, <i>Number</i> y <i>String</i>. Ahora vamos a tratar este último.</p>
            <p>Como en el caso de <i>Array</i>, la propiedad más importante de <i>String</i> es <code>length</code>, que es el número de caracteres de una cadena:</p>
            <pre><code>
    var cadena_literal = "I have become comfortably brilliant";
    var longitud = cadena_literal.length; 
        // Ahora la variable longitud es igual a 35
        // (los espacios en blanco también son caracteres)
            </code></pre>
            <p>Sus métodos destacados son:</p>
            <table>
                <caption>Métodos del objeto String</caption>
                <tbody><tr>
                    <th scope="col">Método</th>
                    <th scope="col">Descripción</th>
                </tr>
                <tr>
                    <td><code>charAt</code></td>
                    <td>Devuelve el caracter en determinado índice de la cadena.</td>
                </tr>
                <tr>
                    <td><code>charCodeAt</code></td>
                    <td>Devuelve el valor Unicode del caracter en determinado índice de la cadena.</td>
                </tr>
                
                <tr>
                    <td><code>fromCharCode</code></td>
                    <td>El inverso del anterior, convierte una cadena  de valores Unicode en una literal. </td>
                </tr>
                <tr>
                    <td><code>concat</code></td>
                    <td>Combina el texto de dos cadenas para crear una nueva.</td>
                </tr>
                <tr>
                    <td><code>indexOf</code></td>
                    <td>Devuelve el índice de la primera coincidencia de un caracter dentro de una cadena, o -1 si no existe.</td>
                </tr>
                <tr>
                    <td><code>lastIndexOf</code></td>
                    <td>Devuelve el índice de la última coincidencia de un caracter dentro de una cadena, o -1 si no existe.</td>
                </tr>
                <tr>
                    <td><code>match</code></td>
                    <td>Busca las coincidencias de una expresión en una cadena literal. Devuelve las coincidencias, si se producen.</td>
                </tr>
                <tr>
                    <td><code>replace</code></td>
                    <td>Sustituye una expresión por una cadena dentro de otra cadena.</td>
                </tr>
                <tr>
                    <td><code>search</code></td>
                    <td>Igual que <code>match</code>, pero devuelve los índices de las coincidencias, o -1 si no se da ninguna.</td>
                </tr>
                <tr>
                    <td><code>slice</code></td>
                    <td>Extrae una sección de una cadena. Devuelve la subcadena.</td>
                </tr>
                <tr>
                    <td><code>split</code></td>
                    <td>Devuelve una matriz poblada con subcadenas de una cadena.</td>
                </tr>
                <tr>
                    <td><code>substr</code></td>
                    <td>Devuelve los caracteres solicitados a partir de un índice.</td>
                </tr>
                <tr>
                    <td><code>substr</code></td>
                    <td>Devuelve los caracteres dentro de los índices especificados.</td>
                </tr>
                <tr>
                    <td><code>toLowerCase</code></td>
                    <td>Devuelve la cadena en minúsculas.</td>
                </tr>
                <tr>
                    <td><code>toUpperCase</code></td>
                    <td>Devuelve la cadena en mayúsculas.</td>
                </tr>
            </tbody></table>
            <p>En <a href="js/ejemplos_metodos_string.php" id="v-ejs-metodos-string">los ejemplos de estos métodos</a> empleo <code>match</code>, <code>replace</code> y <code>search</code> para buscar una cadena simple y explicar con ello su funcionamiento, pero cuando resultan más útiles es cuando se emplean no con una cadena simple, sino con una <dfn>expresión regular</dfn>, que es un patrón que describe de forma abstracta una cadena literal. No vamos a tratar de las expresiones regulares en esta introducción a JavaScript, pero intentaré explicarlas en algún momento, en alguna otra parte.</p>
            <p class="nota-importante"><strong>Actualización del 13 de enero de 2008:</strong> Por fin <a href="../articulos/2008/exp_regulares_1.php" title="Artículo: «Expresiones regulares (1)»">he escrito algo sobre el tema</a>.</p>
            <h2 id="obj-global"><i>Global</i></h2>
            <p><i>Global</i> es un objeto especial porque, como tal, no existe. Si, por ejemplo, lanzamos esta alerta:</p>
            <pre><code>
    alert(Math);
            </code></pre>
            <p>recibimos <code>[object Math]</code>, pero con</p>
            <pre><code>
    alert(Global);
            </code></pre>
            <p>obtenemos un error que nos indica que <code>Global</code> no ha sido definido.</p>
            <p>¿A qué se debe este misterio? Pues a que según <abbr>ECMA</abbr>-262 no puede existir ninguna función independiente de un objeto, y existen métodos —que como sabemos son funciones— que en realidad no pertenecen a ningún objeto concreto, y que vamos a ver inmediatamente. Para «cobijar» estos métodos se define el objeto abstracto <i>Global</i>.</p>
            <p>Más aún, si probamos <code>alert(Array);</code>, <code>alert(Date);</code>, <code>alert(String);</code>, o cualquier otro objeto nativo, las alertas se parecen a estas:</p>
            <pre><code>{`
    function Array(){
        [native code]
    }
    
    function Date(){
        [native code]
    }
    
    function String(){
        [native code]
    }
            `}</code></pre>
            <p>Esto quiere decir que los objetos nativos son interpretados como funciones, es decir, métodos. ¿Y si son métodos, a que objeto pertenecen? A <i>Global</i>.</p>
            <p>No obstante, no hay que alarmarse con la revelación, dado que sólo nos interesan unos poco métodos de este objeto:</p>
            <table>
                <caption>Métodos del objeto Global</caption>
                <tbody><tr>
                    <th scope="col">Métodos</th>
                    <th scope="col">Descripción</th>
                </tr>
                <tr>
                    <td><code>decodeURI</code></td>
                    <td>Decodifica un <abbr title="«Uniform Resource Identifiers», Identificadores Uniformes de Recurso">URI</abbr> y lo convierte en una cadena literal.</td>
                </tr>
                <tr>
                    <td><code>decodeURIComponent</code></td>
                    <td>Igual que <code>decodeURI</code>, pero para una porción de <abbr>URI</abbr>.</td>
                </tr>
                <tr>
                    <td><code>encodeURI</code></td>
                    <td>Codifica una cadena literal convirtiéndola en un <abbr>URI</abbr>.</td>
                </tr>
                <tr>
                    <td><code>encodeURIComponent</code></td>
                    <td>Igual que <code>encodeURI</code>, pero para una porción de <abbr>URI</abbr>.</td>
                </tr>
                <tr>
                    <td><code>eval</code></td>
                    <td>Trata la cadena no como un literal, sino como una expresión de JavaScript.</td>
                </tr>
                <tr>
                    <td><code>parseFloat</code></td>
                    <td>Convierte una cadena literal en un número con parte decimal.</td>
                </tr>
                <tr>
                    <td><code>parseInt</code></td>
                    <td>Convierte una cadena literal en un número entero.</td>
                </tr>
            </tbody></table>
            <p>Aquí dejo <a href="js/ejemplos_metodos_global.php" id="v-ejs-metodos-global">los ejemplos de los métodos del objeto <i>Global</i></a>.</p>
            <h2 id="obj-math"><i>Math</i></h2>
            <p>Por último vamos a ver el objeto <i>Math</i> que, como ya he dicho antes,  es un objeto incorporado, por lo que no es necesario declarar una nueva instancia del objeto para invocar sus propiedades o métodos. Basta con <code>var constante_Euler =  Math.E;</code> para obtener la constante de Euler, en lugar de:</p>
            <pre><code>
    var objeto_matematico = new Math();
    var constante_Euler = objeto_matematico.E;
            </code></pre>
            <p>En el caso de este objeto, las propiedades son valores empleados constantemente en matemáticas:</p>
            <table>
                <caption>Propiedades del objeto Math</caption>
                <tbody><tr>
                    <th scope="col">Propiedad</th>
                    <th scope="col">Descripción</th>
                </tr>
                <tr>
                    <td><code>E</code></td>
                    <td>Devuelve la constante de Euler.</td>
                </tr>
                <tr>
                    <td><code>LN2</code></td>
                    <td>Devuelve el logaritmo natural de 2.</td>
                </tr>
    
                <tr>
                    <td><code>LN10</code></td>
                    <td>Devuelve el logaritmo natural de 10.</td>
                </tr>
                <tr>
                    <td><code>LOG2E</code></td>
                    <td>Devuelve el logaritmo de la constante de Euler en base 2.</td>
                </tr>
                <tr>
                    <td><code>LOG10E</code></td>
                    <td>Devuelve el logaritmo de la constante de Euler en base 10.</td>
                </tr>
                <tr>
                    <td><code>PI</code></td>
                    <td>Devuelve el valor de π.</td>
                </tr>
                <tr>
                    <td><code>SQRT1_2</code></td>
                    <td>Devuelve la raíz cuadrada de 1/2.</td>
                </tr>
                <tr>
                    <td><code>SQRT2</code></td>
                    <td>Devuelve la raíz cuadrada de 2.</td>
                </tr>
            </tbody></table>
            <p>En cuanto a sus métodos, aquí están:</p>
            <table>
                <caption>Métodos del objeto Math</caption>
                <tbody><tr>
                    <th scope="col">Método</th>
                    <th scope="col">Descripción</th>
                </tr>
                <tr>
                    <td><code>abs</code></td>
                    <td>Devuelve el valor absoluto de un número.</td>
                </tr>
                <tr>
                    <td><code>acos</code></td>
                    <td>Devuelve el arcocoseno de un valor (en radianes).</td>
                </tr>
                <tr>
                    <td><code>asin</code></td>
                    <td>Devuelve el arcoseno de un valor (en radianes).</td>
                </tr>
                <tr>
                    <td><code>atan</code></td>
                    <td>Devuelve la arcotangente de un valor (en radianes).</td>
                </tr>
                <tr>
                    <td><code>ceil</code></td>
                    <td>Devuelve el entero más pequeño mayor o igual que el valor.</td>
                </tr>
                <tr>
                    <td><code>cos</code></td>
                    <td>Devuelve el coseno de un valor (en radianes).</td>
                </tr>
                <tr>
                    <td><code>exp</code></td>
                    <td>Devuelve el valor de la constante de Euler elevada al valor proporcionado.</td>
                </tr>
                <tr>
                    <td><code>floor</code></td>
                    <td>Devuelve el entero más grande menor o igual que el valor.</td>
                </tr>
                <tr>
                    <td><code>log</code></td>
                    <td>Devuelve el logaritmo natural del valor.</td>
                </tr>
                <tr>
                    <td><code>max</code></td>
                    <td>Devuelve el mayor de dos valores.</td>
                </tr>
                <tr>
                    <td><code>min</code></td>
                    <td>Devuelve el menor de dos valores.</td>
                </tr>
                <tr>
                    <td><code>pow</code></td>
                    <td>Eleva una base a una potencia.</td>
                </tr>
                <tr>
                    <td><code>random</code></td>
                    <td>Devuelve un valor pseudoaleatorio entre 0 y 1.</td>
                </tr>
                <tr>
                    <td><code>round</code></td>
                    <td>Devuelve un valor redondeado al entero más cercano.</td>
                </tr>
                <tr>
                    <td><code>sin</code></td>
                    <td>Devuelve el seno de un valor (en radianes).</td>
                </tr>
                <tr>
                    <td><code>sqrt</code></td>
                    <td>Devuelve la raíz cuadrada de un valor.</td>
                </tr>
                <tr>
                    <td><code>tan</code></td>
                    <td>Devuelve la tangente de un valor (en radianes).</td>
                </tr>
            </tbody></table>
            <p>Y <a href="js/ejemplos_metodos_math.php" id="v-ejs-metodos-math">con los ejemplos para el objeto <i>Math</i></a> llegamos al final de esta sección. Como he dicho en la <a href="curso_4_2.php">introducción</a>, faltaría hablar de los objetos que puede crear el propio programador, pero sobre ello remito a dos obras, <a href="../recursos/bibliografia.php#professional-js-web-devs"><i>Professional JavaScript for Web Developers</i></a> de Nicholas C. Zakas y <a href="../recursos/bibliografia.php#avanced-dom-scripting"><i>AvancED <abbr title="«Document Object Model», Modelo de Objeto de Documento">DOM</abbr> Scripting</i></a> de Jeffrey Sambells y Aaron Gustafson.</p>
            <h2>Notas</h2>
            <ol id="notas">
                <li id="nota01">Como nota curiosa, ésta es la <i>hora zulú</i> de la que siempre se habla en las películas bélicas.</li>
            </ol>
            </div>
<div className='col-md-3'></div>

  
 
    
    </div>
    </div>
   
  </Layout>
)

            
        