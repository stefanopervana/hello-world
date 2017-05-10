import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ParentNode'>
 <div>
    <div>parentNode</div>
     
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
        <h1><code>parentNode</code>, <code>firstChild</code>, <code>lastChild</code>, <code>nextSibling</code> y <code>previousSibling</code></h1>
            <h2 id="h-tc">Tabla de contenidos</h2>
            <ol id="tc">
                <li><a href="#intro">Introducción</a></li>
                <li><a href="#pN"><code>parentNode</code></a></li>
                <li><a href="#fCh"><code>firstChild</code></a></li>
                <li><a href="#lCh"><code>lastChild</code></a></li>
                <li><a href="#nS"><code>nextSibling</code></a></li>
                <li><a href="#pS"><code>previousSibling</code></a></li>
            </ol>
            <h2 id="intro">Introducción</h2>
            <p>En la sección anterior hemos visto cómo seleccionar un elemento por medio de <a href="curso_4_3_a.php#gEBI"><code>getElementById</code></a>. Ahora vamos a ver cómo seleccionar otros nodos según algunas de las relaciones de parentesco establecidas alrededor de tal elemento.</p>
            <h2 id="pN"><code>parentNode</code></h2>
            <p>Por medio de <code>parentNode</code> podemos seleccionar el elemento padre de otro elemento. Por ejemplo, si tenemos el siguiente código:</p>
            <pre><code>{`
    &lt;div&gt;
        &lt;p id="introduccion"&gt;Párrafo introductorio.&lt;/p&gt;
    &lt;/div&gt;
            `}</code></pre>
            <p>la siguiente línea de <i>script</i>:</p>
            <pre><code>{`
    document.getElementById('introduccion').parentNode;
            `}</code></pre>
            <p>selecciona el elemento padre del elemento identificado como <code>introduccion</code>, en este caso el <code>div</code>.</p>
            <h2 id="fCh"><code>firstChild</code></h2>
            <p>Con <code>firstChild</code> lo que seleccionamos es el primer hijo de un elemento. Por desgracia, hay discrepancias entre los diversos navegadores sobre qué debe considerarse o no hijo de un nodo, por lo que esta propiedad en ocasiones complica demasiado un <i>script</i>.</p>
            <p>Supongamos el siguiente fragmento de código:</p>
            <pre><code>{`
    &lt;div id="contenido"&gt;
        &lt;p&gt;Un párrafo.&lt;/p&gt;
        &lt;p&gt;Otro párrafo.&lt;/p&gt;
    &lt;/div&gt;
            `}</code></pre>
            <p>Parece, al menos intuitivamente, que <code>document.getElementById('contenido').firstChild</code> debería seleccionarnos el primer párrafo. Sin embargo, sólo ocurre así en Internet Explorer. El problema es que navegadores como Opera o Firefox interpretan también como hijos de un elemento los posibles espacios en blanco y saltos de línea que el elemento pueda contener. Estos, por tanto considerarían que el salto de línea entre el cierre del <code>div</code> y la apertura del primer <code>p</code> es el primer hijo.</p>
            <p>Por ello, a menos que se quiera buscar alguna solución por medio de JavaScript, suelo aconsejar no emplear <code>firstChild</code> si se puede evitar, y limitarlo además a elementos cuyos contenidos sean en línea, que por lo general no contarán con saltos de línea en su interior. Por ejemplo, si el fragmento fuera el siguiente:</p>
            <pre><code>{`
    &lt;p&gt;&lt;strong&gt;Nota:&lt;/strong&gt; La autoconservación está destinada al fracaso.&lt;/p&gt;
            `}</code></pre>
            <p><code>firstChild</code> devolvería de forma consistente el elemento <code>strong</code> en todos los navegadores actuales.</p>
            <p class="nota-importante"><strong>Actualización del 8 de septiembre de 2007:</strong> He recogido una explicación más extensa sobre el problema y una posible solución en <a href="../articulos/2007/nodos_texto_vacios.php">«<code>childNodes</code> y el problema de los nodos de texto vacíos»</a>.</p>
            <h2 id="lCh"><code>lastChild</code></h2>
            <p>La propiedad <code>lastChild</code> funciona exactamente como <code>firstChild</code>, pero se refiere el último de los hijos de un elemento. Se aplican, por tanto, las mismas indicaciones anteriores.</p>
            <h2 id="nS"><code>nextSibling</code></h2>
            <p>Gracias a <code>nextSibling</code>, lo que podemos seleccionar es el siguiente hermano de un elemento.</p>
            <p>Se aplican las mismas limitaciones que para las dos propiedades anteriores.</p>
            <h2 id="pS"><code>previousSibling</code></h2>
            <p><code>previousSibling</code> funciona igual que <code>nextSibling</code>, pero selecciona el hermano anterior de un elemento.</p>
            <p>Igual para sus limitaciones.</p>
     <p>Veamos ahora <nav><Link href='/EjempPar'><a>unos cuantos ejemplos de estas propiedades</a></Link></nav></p>
    </div>

<div className='col-md-3'></div>

  
 
   
    </div>
    </div>
   
  </Layout>
)

            
    