import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='Eventos'>
 <div>
    <div>Eventos</div>
     
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
            <h1>Ejemplos de <code>parentNode</code> y demás</h1>
        <h2><code>parentNode</code></h2>
        <p>Vamos a seleccionar el padre de un elemento concreto de esta página, un párrafo con <code>id="parrafo"</code> —por aquello de no rompernos la cabeza buscando un nombre—, por medio de la función siguiente:</p>
        <pre><code>
    function seleccionar_padre() {
        var hijo = document.getElementById('parrafo');
        alert(hijo.parentNode);
    }
        </code></pre>
        <p>Primero lo que hago es seleccionar el elemento por medio de <a href="../curso_4_3_a.php#gEBI"><code>getElementById</code></a>, y guardar su referencia en la variable <var>hijo</var>, por si en cualquier otro momento necesito trabajar sobre el mismo elemento. Una vez hecho esto, simplemente pido la propiedad <code>parentNode</code> del elemento y muestro su valor a través de una alerta.</p>
        <div class="resultados">
            ELEMENTO PADRE (<code>div</code>)
            <p id="parrafo">ELEMENTO HIJO (<code>p</code>)</p>
        </div>
        <p class="boton indep"><button onclick="seleccionar_padre();">Seleccionar el padre del párrafo</button></p>
        <p>Los navegadores competentes devuelven <code>[object HTMLDivElement]</code>, identificando claramente el elemento. Otro navegador devuelve un lacónico <code>[object]</code>, pero se refiere al mismo elemento.</p>
        <h2><code>firstChild</code>, <code>lastChild</code>, <code>nextSibling</code> y <code>previousSibling</code> cuando no dan problemas…</h2>
        <p>Ahora vamos a trabajar sobre un código como éste:</p>
        <pre><code>
    &lt;p id="otro-parrafo"&gt;&lt;em&gt;Éste&lt;/em&gt; es un párrafo con un &lt;strong&gt;elemento destacado&lt;/strong&gt; en su interior.&lt;/p&gt;
        </code></pre>
        <p>y vamos a poner en práctica todo lo que hemos visto del <abbr title="«Document Object Model», Modelo de Objeto de Documento">DOM</abbr> hasta ahora.</p>
        <p>Primero, vamos a seleccionar el primero de los hijo, en este caso el elemento <code>em</code>. Para ello nos basta con esta línea:</p>
        <pre><code>
    document.getElementById('otro-parrafo').firstChild;
        </code></pre>
        <p>Si por el contrario queremos seleccionar el último de los hijos, empleamos:</p>
        <pre><code>
    document.getElementById('otro-parrafo').lastChild;
        </code></pre>
        <p>Ahora vamos a probar seleccionar hermanos de elementos. Primero, quiero seleccionar el hermano posterior del elemento <code>em</code>:</p>
        <pre><code>
    document.getElementById('otro-parrafo').getElementsByTagName('em')[0].nextSibling;
        </code></pre>
        <p class="nota-importante"><a href="../curso_4_3_a.php#gEBTN">Como dijimos en la sección anterior del curso</a>, aunque sé que no existe otro elemento <code>em</code> en todo el documento, tengo que especificar su índice (<code>[0]</code>) para referirme a él y no a la lista de nodos.</p>
        <p>Por el contrario, ahora voy a seleccionar el mismo nodo, pero haciendo referencia a él como el hermano anterior del elemento <code>strong</code>:</p>
        <pre><code>
    document.getElementById('otro-parrafo').getElementsByTagName('strong')[0].previousSibling;
        </code></pre>
        <p>Probemos.</p>
        <p id="otro-parrafo" class="resultados"><em>Éste</em> es un párrafo con un <strong>elemento destacado</strong> en su interior.</p>
        <p class="boton indep"><button onclick="seleccionar('firstChild');">Seleccionar el primer hijo del párrafo</button></p>
        <p class="boton"><button onclick="seleccionar('lastChild');">Seleccionar el último hijo del párrafo</button></p>
        <p class="boton"><button onclick="seleccionar('nextSibling');">Seleccionar el hermano posterior del elemento <code>em</code></button></p>
        <p class="boton"><button onclick="seleccionar('previousSibling');">Seleccionar el hermano anterior del elemento <code>strong</code></button></p>
        <p>La primera alerta nos devuelve <code>[object HTMLSpanElement]</code>, una forma genérica de referirse a un elemento en línea, como de hecho es <code>em</code>. Para los otros tres casos recibimos <code>[object Text]</code>, puesto que el último hijo del párrafo y el hermano que seleccionamos en los otros dos casos son nodos de texto.</p>
        <div class="nota-importante">
            <p>¿Y si lo que quiero es seleccionar el texto del elemento? Buena pregunta, sí señor. Para ello en los ejemplos anteriores hay dos casos diferentes:</p>
            <ul>
                <li>En el caso de los elementos de texto, se puede emplear otra propiedad del <abbr>DOM</abbr> que es <code>nodeValue</code>. Según la especificación, el valor de un nodo de texto es su propio texto. Así, por ejemplo, para <code>nextSibling</code> se obtendría el texto con una línea como esta:
                    <pre><code>
    document.getElementById('otro-parrafo').getElementsByTagName('em')[0].nextSibling.nodeValue;
                    </code></pre>
                    <p>Compruébelo:</p>
                    <p class="boton"><button onclick="obtener_valor('lastChild');">Seleccionar el texto del último hijo del párrafo</button></p>
                    <p class="boton"><button onclick="obtener_valor('nextSibling');">Seleccionar el texto del hermano posterior del elemento <code>em</code></button></p>
                    <p class="boton"><button onclick="obtener_valor('previousSibling');">Seleccionar el texto del hermano anterior del elemento <code>strong</code></button></p>
                </li>
                <li>Por contra, en el caso del elemento <code>em</code>, estrictamente no estamos pidiendo el valor del elemento, sino el texto que contiene, es decir, el valor del nodo de texto que es su hijo. Teniendo esto en cuenta, nuestro <i xml:lang="en">script</i> es una cosa así:
                    <pre><code>
    document.getElementById('otro-parrafo').firstChild.nodeValue;
                    </code></pre>
                    <p class="boton indep"><button onclick="texto_em();">Seleccionar el texto dentro de <code>em</code></button></p>
                </li>
            </ul>
        </div>
        <h2>…y cuando sí los dan</h2>
        <p>Acabamos de ver el caso para el que recomiendo limitar el uso de las propiedades relativas de parentesco: un elemento en línea del que necesitamos extraer información. Cuando en el código tenemos saltos de línea los resultados cambias dramáticamente.</p>
        <p>Supongamos este código:</p>
        <pre><code>
    &lt;div id="unDiv"&gt;
        &lt;p&gt;Un párrafo&lt;/p&gt;
        &lt;p&gt;Otro párrafo&lt;/p&gt;
    &lt;/div&gt;
        </code></pre>
        <p>Lo que voy a intentar hacer es cambiar la apariencia del primero de los párrafos:</p>
        <pre><code>
    function resaltar_elemento(){
        var elementoAResaltar = document.getElementById('unDiv').firstChild;
        elementoAResaltar.style.backgroundColor = '#FF3';
    }
        </code></pre>
        <p>A primera vista, no hay ningún problema: selecciono el primer hijo de <code>unDiv</code> y con un poco de <abbr title="«HyperText Markup Language», Lenguaje de Marcado de HiperTexto">HTML</abbr> <abbr>DOM</abbr> de Nivel 2 modifico su atributo <code>style</code>.</p>
        <p>Veámoslo:</p>
        <div id="unDiv" class="resultados">
            <p>Un párrafo</p>
            <p>Otro párrafo</p>
        </div>
        <p class="boton"><button onclick="resaltar_elemento();">Resaltar el primer párrafo</button></p>
        <p>Si el resultado se parece a lo que viene a continuación…</p>
        <div id="otroDiv" class="resultados">
            <p style="background:#FF3;">Un párrafo</p>
            <p>Otro párrafo</p>
        </div>
        <p>…me juego una comida a que está viendo esta página con Internet Explorer. En Firefox, Opera y Safari, no ocurrirá cambio alguno.</p>
        <p>¿Por qué ocurre esto? Bueno, porque estos navegadores consideran que el salto de línea entre elementos es un nodo de texto como pueda serlo un espacio en blanco o un tabulado. Y como desde el punto de vista del <abbr>DOM</abbr> cualquier nodo de texto es hijo de un elemento como pueda serlo un <code>p</code> o un <code>div</code>, estrictamente ese salto es el primer hijo de <code>unDiv</code>.</p>
        <p>Así, al ejecutar la función, el error que obtenemos es que <code>elementoAResaltar.style</code> no tiene propiedades, porque <a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.html#CSS-ElementCSSInlineStyle" hreflang="en">según la especificación de la interfaz <code>ElementCSSInlineStyle</code> (inglés)</a>, <code>style</code> sólo existe para elementos de <abbr>HTML</abbr>, no para nodos de texto.</p>
        <p>Por ello, sólo se puede recomendar prudencia a la hora de emplear <code>firstChild</code>, <code>lastChild</code>, <code>nextSibling</code> y <code>previousSibling</code>.</p>
            
            </div>

<div className='col-md-3'></div>

  
 
   
    </div>
    </div>
   
  </Layout>
)






        

        