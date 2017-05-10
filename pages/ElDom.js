import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ElDom'>
 <div>
    <div>El Dom</div>
     
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
<h1>El <abbr title="«Document Object Model», Modelo de Objeto de Documento">DOM</abbr></h1>
            <h2 id="h-tc">Tabla de contenidos</h2>
            <ol id="tc">
                <li><a href="#que">Qué es el <abbr>DOM</abbr></a></li>
                <li><a href="#nodos">Los nodos del árbol</a>
                    <ol>
                        <li><a href="#propiedades">Propiedades generales de los nodos</a></li>
                        <li><a href="#identificar">Identificar el tipo de nodo</a></li>
                        <li><a href="#valores">Valores y nombres de los nodos</a></li>
                    </ol>
                </li>
                <li><a href="#niveles">Niveles del <abbr>DOM</abbr></a></li>
            </ol>
            <h2 id="que">Qué es el <abbr>DOM</abbr></h2>
            <p>El <abbr>DOM</abbr> es una <abbr title="«Application Programming Interface», Interfaz de Programación de Aplicación">API</abbr> para <abbr title="«eXtensible Markup Language», Lenguaje de Marcado eXtensible">XML</abbr><sup class="nota"><a href="#nota01" id="texto01">1</a></sup>, lo que sin siglas quiere decir que es una capa de programación intermedia que representa un documento y que nos permite modificarlo. Por decirlo de otra manera, es una serie de funciones y procedimientos que nos permiten trabajar sobre un modelo abstracto de un documento, que sirve como medio de comunicación entre nuestro lenguaje de programación —en este caso JavaScript— y los contenidos del documento.</p>
            <p className="nota-importante">El <abbr>DOM</abbr> es una interfaz independiente de cualquier lenguaje de programación, pero aquí voy a centrarme en su uso por medio de JavaScript.</p>
            <p>Pongamos un ejemplo. Tenemos un documento como el siguiente:</p>
            <pre><code>{`
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Título de la página</title>
    </head>
    <body>
        <h1>Encabezado</h1>
        <p>Un párrafo</p>
        <p>Un párrafo con <a href="otra_pagina.htm">un vínculo</a></p>
        <ul>
            <li>Un elemento de lista</li>
            <li>Otro elemento de lista</li>
        </ul>
        <p>Otro párrafo</p>
    </body>
    </html>
            `}</code></pre>
            <p>y por medio de JavaScript queremos modificar la lista. ¿Cómo lo hacemos? Necesitamos que haya alguna manera de indicarle al agente de usuario —por ejemplo, nuestro navegador— que de todos los caracteres que componen ese documento nos interesa seleccionar los que componen el que es un elemento <code>ul</code>. Ahí es donde entra en juego el <abbr>DOM</abbr>, que permite que el navegador se represente el documento como un árbol jerárquico, algo así:</p>
            <dl class="ilustracion">
                <dt><img src="imagenes/arbol_DOM.png" alt="" width="800" height="350" id="imagen-01"></img></dt>
                <dd>El código anterior, representado gráficamente como un árbol jerárquico</dd>
            </dl>
            <p>Ahora sí, el navegador no interpreta simplemente el documento como una serie de caracteres, sino que «comprende» que existen una serie de elementos con sus propiedades, y que la relación entre todos ellos es una relación estructural. Así, por ejemplo, se puede pedir al navegador que devuelva una lista de los hijos del elemento <code>ul</code>.</p>
            <p class="nota-importante">Una ventaja de esta interfaz es que la manera de trabajar con ella es análoga a la forma de <a href="curso_3_3.php#selec-descen">emplear selectores de <abbr title="«Cascading Style Sheets», Hojas de Estilo en Cascada">CSS</abbr> basados en el árbol de parentesco</a> que ya vimos.</p>
            <p>El modelo resultante del documento original es un árbol, y una vez creado es este árbol lo que representa el navegador, y también lo que modificamos con nuestros <i>scripts</i>.</p>
            <h2 id="nodos">Los nodos del árbol</h2>
            <p>Como se ve, el <abbr>DOM</abbr> es un modelo jerárquico. En la representación que he ofrecido antes, todo aquello situado en el origen o el final de una rama del árbol es un nodo, y los nodos establecen entre sí relaciones de parentesco. Por ejemplo, el elemento <code>ul</code> es hijo de <code>body</code>, padre de dos <code>li</code>, hermano de <code>h1</code> y los tres <code>p</code>, descendiente de <code>html</code> y ascendente del texto de cualquiera de los <code>li</code>.</p>
            <p>Así, todo documento puede representarse como un conjunto de nodos relacionados entre sí. Además, existe un número limitado de tipos de nodos que son suficientes para representar cualquier documento, y que han sido definidos por el <abbr title="«World Wide Web Consortium», Consorcio de la Red Mundial">W3C</abbr>:</p>
            <table>
                <caption>Tipos de nodos en el <abbr>DOM</abbr>: descripción y posibilidad de tener hijos o no</caption>
                <tbody><tr>
                    <th scope="col">Nodo</th><th scope="col">Descripción</th><th scope="col">¿Hijos?</th>
                </tr>
                <tr>
                    <td><code>Document</code></td>
                    <td>Este nodo es único, y representa el documento en sí.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>DocumentType</code></td>
                    <td>Este nodo también es único, y representa la referencia a la <abbr title="«Document Type Definition», Definición de Tipo de Documento">DTD</abbr> del documento, es decir, la línea del <code>&lt;!DOCTYPE&gt;</code>.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>DocumentFragment</code></td>
                    <td>Representa un fragmento del modelo total del árbol del documento.</td>
                    <td>Sí</td>
                </tr>
                <tr>
                    <td><code>Element</code></td>
                    <td>Representa un elemento.</td>
                    <td>Sí<sup class="nota"><a href="#nota02" id="texto02">2</a></sup></td>
                </tr>
                <tr>
                    <td><code>Attr</code></td>
                    <td>Representa un atributo de un elemento, en combinación con su valor.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>Text</code></td>
                    <td>Representa un texto dentro de un elemento, o de una sección CData.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>CDataSection</code></td>
                    <td>Representa una sección <code>&lt;[!CDATA[]]&gt;</code>.</td>
                    <td>Sí<sup class="nota"><a href="#nota03" id="texto03">3</a></sup></td>
                </tr>
                <tr>
                    <td><code>Entity</code></td>
                    <td>Representa la definición de una entidad en la <abbr>DTD</abbr>.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>EntityReference</code></td>
                    <td>Representa una referencia de entidad.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>ProcessingInstruction</code></td>
                    <td>Representa una instrucción de proceso.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>Comment</code></td>
                    <td>Representa un comentario en el código <abbr>XML</abbr>.</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>Notation</code></td>
                    <td>Representa una notación definida en la <abbr>DTD</abbr>.</td>
                    <td>No</td>
                </tr>
            </tbody></table>
            <p>Así, cuando el agente de usuario mapea un documento, lo que hace es asignar a cada nodo una constante que lo identifica. Dependiendo del tipo de nodo, éste aceptará una serie de propiedades y métodos, y podrá tener hijos o no.</p>
            <h3 id="propiedades">Propiedades generales de los nodos</h3>
            <p>Independientemente del tipo de nodo, hay una serie de propiedades generales que comparten, y que recojo en la tabla siguiente:</p>
            <table>
                <caption>Propiedades generales de cualquier nodo</caption>
                <tbody><tr>
                    <th scope="col">Propiedad</th><th scope="col">Descripción</th><th scope="col">Devuelve</th>
                </tr>
                <tr>
                    <td><code>nodeName</code></td>
                    <td>El nombre del nodo, que se define dependiendo del tipo de nodo.</td>
                    <td>Una cadena literal</td>
                </tr>
                <tr>
                    <td><code>nodeValue</code></td>
                    <td>El valor del nodo, que se define dependiendo del tipo de nodo.</td>
                    <td>Una cadena literal</td>
                </tr>
                <tr>
                    <td><code>nodeType</code></td>
                    <td>Un número que representa el tipo de nodo del que se trata.</td>
                    <td>Un número del 1 al 12</td>
                </tr>
                <tr>
                    <td><code>ownerDocument</code></td>
                    <td>El documento al que pertenece el nodo.</td>
                    <td>El documento</td>
                </tr>
                <tr>
                    <td><code>firstChild</code></td>
                    <td>El primer hijo del nodo.</td>
                    <td>Un nodo</td>
                </tr>
                <tr>
                    <td><code>lastChild</code></td>
                    <td>El último hijo del nodo.</td>
                    <td>Un nodo</td>
                </tr>
                <tr>
                    <td><code>childNodes</code></td>
                    <td>Una lista de los hijos de un nodo.</td>
                    <td>Una matriz de nodos</td>
                </tr>
                <tr>
                    <td><code>previousSibling</code></td>
                    <td>El hermano anterior al nodo.</td>
                    <td>Un nodo, o <code>null</code> si el nodo es el primer hijo</td>
                </tr>
                <tr>
                    <td><code>nextSibling</code></td>
                    <td>El hermano siguiente al nodo.</td>
                    <td>Un nodo, o <code>null</code> si el nodo es el último hijo</td>
                </tr>
                <tr>
                    <td><code>hasChildNodes</code></td>
                    <td>Indica si el nodo tiene hijos o no.</td>
                    <td>Un booleano</td>
                </tr>
                <tr>
                    <td><code>attributes</code></td>
                    <td>Una lista con los atributos del nodo.</td>
                    <td>Una matriz con los atributos</td>
                </tr>
            </tbody></table>
            <p>La sintaxis para acceder a estas propiedades es la misma que vimos para los <a href="curso_4_2_f.php">objetos nativos de JavaScript</a>, por lo que no voy a detenerme a explicarla aquí. No obstante, vamos a emplear muchas de ellas en los ejemplos de las secciones siguientes.</p>
            <p>En cuanto a los métodos comunes, les dedico su propia sección: <a href="curso_4_3_d.php"><code>appendChild</code>, <code>insertBefore</code>, <code>replaceChild</code>, <code>removeChild</code> y <code>cloneNode</code></a>.</p>
            <h3 id="identificar">Identificar el tipo de nodo</h3>
            <p>En algún momento podemos necesitar identificar el tipo de un nodo, y para eso contamos con la propiedad <code>nodeType</code>, que devuelve un número. A continuación recojo el tipo de nodo que corresponde a cada número:</p>
            <table>
                <caption>Tipos de nodos identificados por el número devuelto por <code>nodeType</code></caption>
                <tbody><tr>
                    <th scope="col">Tipo de nodo</th><th scope="col">Constante<sup class="nota"><a href="#nota04" id="texto04">4</a></sup></th><th scope="col">Número</th>
                </tr>
                <tr>
                    <td><code>Element</code></td>
                    <td><code>Node.ELEMENT_NODE</code></td>
                    <td>1</td>
                </tr>
                <tr>
                    <td><code>Attr</code></td>
                    <td><code>Node.ATTRIBUTE_NODE</code></td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><code>Text</code></td>
                    <td><code>Node.TEXT_NODE</code></td>
                    <td>3</td>
                </tr>
                <tr>
                    <td><code>CDataSection</code></td>
                    <td><code>Node.CDATA_SECTION_NODE</code></td>
                    <td>4</td>
                </tr>
                <tr>
                    <td><code>EntityReference</code></td>
                    <td><code>Node.ENTITY_REFERENCE_NODE</code></td>
                    <td>5</td>
                </tr>
                <tr>
                    <td><code>Entity</code></td>
                    <td><code>Node.ENTITY_NODE</code></td>
                    <td>6</td>
                </tr>
                <tr>
                    <td><code>ProcessingInstruction</code></td>
                    <td><code>Node.PROCESSING_INSTRUCTION_NODE</code></td>
                    <td>7</td>
                </tr>
                <tr>
                    <td><code>Comment</code></td>
                    <td><code>Node.COMMENT_NODE</code></td>
                    <td>8</td>
                </tr>
                <tr>
                    <td><code>Document</code></td>
                    <td><code>Node.DOCUMENT_NODE</code></td>
                    <td>9</td>
                </tr>
                <tr>
                    <td><code>DocumentType</code></td>
                    <td><code>Node.DOCUMENT_TYPE_NODE</code></td>
                    <td>10</td>
                </tr>
                <tr>
                    <td><code>DocumentFragment</code></td>
                    <td><code>Node.DOCUMENT_FRAGMENT_NODE</code></td>
                    <td>11</td>
                </tr>
                <tr>
                    <td><code>Notation</code></td>
                    <td><code>Node.NOTATION_NODE</code></td>
                    <td>12</td>
                </tr>
            </tbody></table>
            <h3 id="valores">Valores y nombres de los nodos</h3>
            <p>Además, dos de las propiedades listadas anteriormente nos proporcionan datos sobre un nodo: <code>nodeName</code> y <code>nodeValue</code>. Sin embargo, a diferencia de <code>nodeType</code>, su valor no es una constante, sino que dependiendo del tipo de nodo el valor que devuelven difiere:</p>
            <table>
                <caption>Resultados de <code>nodeName</code> y <code>nodeValue</code> en relación con el tipo de nodo</caption>
                <tbody><tr>
                    <th scope="col">Tipo de nodo</th><th scope="col"><code>nodeName</code></th><th scope="col"><code>nodeValue</code></th>
                </tr>
                <tr>
                    <td><code>Element</code></td>
                    <td>El nombre del elemento, en mayúsculas</td>
                    <td><code>null</code></td>
                </tr>
                <tr>
                    <td><code>Attr</code></td>
                    <td>El nombre del atributo, en minúsculas</td>
                    <td>El valor del atributo como una cadena literal</td>
                </tr>
                <tr>
                    <td><code>Text</code></td>
                    <td><code>#text</code></td>
                    <td>El contenido del nodo como una cadena literal</td>
                </tr>
                <tr>
                    <td><code>CDataSection</code></td>
                    <td><code>#cdata-section</code></td>
                    <td>El contenido del nodo como una cadena literal</td>
                </tr>
                <tr>
                    <td><code>EntityReference</code></td>
                    <td>El nombre de la entidad de referencia</td>
                    <td><code>null</code></td>
                </tr>
                <tr>
                    <td><code>Entity</code></td>
                    <td>El nombre de la entidad</td>
                    <td><code>null</code></td>
                </tr>
                <tr>
                    <td><code>ProcessingInstruction</code></td>
                    <td>El nombre del destino de la instrucción</td>
                    <td>El contenido del nodo como una cadena literal</td>
                </tr>
                <tr>
                    <td><code>Comment</code></td>
                    <td><code>#comment</code></td>
                    <td>El texto del comentario como una cadena literal</td>
                </tr>
                <tr>
                    <td><code>Document</code></td>
                    <td><code>#document</code></td>
                    <td><code>null</code></td>
                </tr>
                <tr>
                    <td><code>DocumentType</code></td>
                    <td>El nombre del tipo de documento</td>
                    <td><code>null</code></td>
                </tr>
                <tr>
                    <td><code>DocumentFragment</code></td>
                    <td><code>#document-fragment</code></td>
                    <td><code>null</code></td>
                </tr>
                <tr>
                    <td><code>Notation</code></td>
                    <td>El nombre de la notación</td>
                    <td><code>null</code></td>
                </tr>
            </tbody></table>
            <p>Con esto, hemos dado el primer paso para conocer el <abbr>DOM</abbr>, aunque lo visto no es más que un ápice del nivel más bajo y básico de esta interfaz. No obstante, esta información es necesaria si se quiere trabajar con ella, y avanzar en el estudio de los siguientes niveles.</p>
            <h2 id="niveles">Niveles del <abbr>DOM</abbr></h2>
            <p class="nota-importante">Dejo fuera de esta sección tanto el <abbr>DOM</abbr> 0 como el <abbr title="«Dynamic HTML», HTML Dinámico">DHTML</abbr><sup class="nota"><a href="#nota05" id="texto05">5</a></sup>. Si alguien tiene curiosidad, remito a <a href="http://www.quirksmode.org/js/dom0.html" hreflang="en"><i>Level 0 <abbr>DOM</abbr></i> (inglés)</a> e <a href="http://www.quirksmode.org/js/dom.html" hreflang="en"><i>Intermediate <abbr>DOM</abbr>s</i> (inglés)</a> en <a href="http://www.quirksmode.org/" hreflang="en">quirksmode.org (inglés)</a>.</p>
            <p>A diferencia de otras recomendaciones como pueda ser la de <abbr title="«eXtensible HyperText Markup Language», Lenguaje de Marcado de HiperTexto eXtensible">XHTML</abbr> 1.0, el <abbr>DOM</abbr> no se recoge en un único documento, sino que consiste en tres niveles —a día de hoy—, y cada uno de ellos está a su vez compuesto por varias recomendaciones referidas a distintos aspectos de la interfaz:</p>
            <ul>
                <li><abbr>DOM</abbr> 1:
                    <ul>
                        <li><a href="http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html" hreflang="en"><abbr>DOM</abbr> Core (inglés)</a>: Define el conjunto mínimo de objetos e interfaces con los que manipular la estructura de un documento, ya se trate de un documento <abbr title="«HyperText Markup Language», Lenguaje de Marcado de HiperTexto">HTML</abbr> o <abbr title="«eXtensible Markup Language», Lenguaje de Marcado eXtensible">XML</abbr>, o cualquier lenguaje basado en éste.</li>
                        <li>
                            <p><a href="http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html.html" hreflang="en"><abbr>DOM</abbr> <abbr>HTML</abbr> (inglés)</a>: Define una serie objetos y métodos específicos de un documento <abbr>HTML</abbr>, y que por extensión también pueden aplicarse a un <abbr title="«eXtensible HyperText Markup Language», Lenguaje de Marcado de HiperTexto eXtensible">XHTML</abbr>. Es importante conocerlo bien porque en muchas ocasiones hay que emplearlo en un <i>script</i> como alternativa para Internet Explorer de métodos del <abbr>DOM</abbr> Core 1, como por ejemplo <code>getAtribute</code> y <code>setAttribute</code>.</p>
                            <p class="nota-importante">Sobre la inconsistencia del soporte de Explorer para estos dos métodos, ver <a href="../articulos/2007/set_y_getattribute_ie6.php">«Una nota sobre el soporte de getAttribute y setAttribute en Internet Explorer 6»</a>.</p>
                        </li>
                    </ul>
                </li>
                <li><abbr>DOM</abbr> 2:
                    <ul>
                        <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/" hreflang="en"><abbr>DOM</abbr> Core (inglés)</a>: Extiende las interfaces definidas en el <abbr>DOM</abbr> Core 1, por ejemplo añadiendo soporte para espacios de nombre, y permitiendo así poder manipular secciones del documento asociadas a uno de ellos.</li>
                        <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/" hreflang="en"><abbr>DOM</abbr> Views (inglés)</a>: Define lo que es una «vista» de un documento, es decir, el documento cuando es representado en un agente de usuario —por ejemplo cuando se le aplica una hoja de estilo en un navegador—, en contraposición a la «vista abstracta» del documento en sí. Sí, es casi metafísica.</li>
                        <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/" hreflang="en"><abbr>DOM</abbr> Events (inglés)</a>: Especifica qué es un evento, sus tipos, y qué son los procesos de <dfn>burbuja</dfn>, <dfn>captura</dfn> y <dfn>cancelación</dfn><sup class="nota"><a href="#nota06" id="texto06">6</a></sup>. Además, entre otras muchas cosas, define un método maravilloso: <a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget-addEventListener" hreflang="en"><code>addEventListener</code> (inglés)</a>.</li>
                        <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/" hreflang="en"><abbr>DOM</abbr> Style (inglés)</a>: Define una interfaz para poder extraer información y manipular la/s hojas/s de estilo de un documento.</li>
                        <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/" hreflang="en"><abbr>DOM</abbr> Traversal and Range (inglés)</a>: Define la interfaz avanzada y los métodos con los que desplazarse por el árbol del documento, y para seleccionar partes del mismo.</li>
                        <li><a href="http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/" hreflang="en"><abbr>DOM</abbr> <abbr>HTML</abbr> (inglés)</a>: Amplía el <abbr>DOM</abbr> <abbr>HTML</abbr> 1, e indica explícitamente que vuelve el anterior obsoleto.</li>
                    </ul>
                </li>
                <li><abbr>DOM</abbr> 3:
                    <ul>
                        <li><a href="http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/" hreflang="en"><abbr>DOM</abbr> Core (inglés)</a>: Amplía aún más el contenido de <abbr>DOM</abbr> Core 2.</li>
                        <li><a href="http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/" hreflang="en"><abbr>DOM</abbr> Load and Save (inglés)</a>: Define una interfaz con la que cargar documentos <abbr>XML</abbr> que puedan integrarse en el árbol de otro documento.</li>
                        <li><a href="http://www.w3.org/TR/2004/REC-DOM-Level-3-Val-20040127/" hreflang="en"><abbr>DOM</abbr> Validation (inglés)</a>: Define una interfaz que permite asegurar que la estructura de un documento modificado dinámicamente sigue siendo válida.</li>
                    </ul>
                </li>
            </ul>
            <p>Para el nivel 3 del <abbr>DOM</abbr> <a href="http://www.w3.org/DOM/DOMTR#DOMOthers" hreflang="en">hay muchos más documentos que tratan otros aspectos de esta interfaz (inglés)</a>, pero no tienen todavía la categoría de Recomendaciones.</p>
            <p>En las siguientes secciones sólo veremos una ínfima parte de lo que contiene la especificación del <abbr>DOM</abbr> Core 1.</p>
            <h2>Notas</h2>
            <ol id="notas">
                <li id="nota01">Existen otras <abbr>API</abbr> para <abbr>XML</abbr>, como <abbr title="«Simple API for XML», API Simple para XML">SAX</abbr>. <a href="#texto01" class="volver"><img src="/static/volver.png" alt="Volver"></img></a></li>
                <li id="nota02">Éste es el único tipo de nodo que puede tener como hijo uno del tipo <code>attr</code>. <a href="#texto02" class="volver"><img src="/static/volver.png" alt="Volver"></img></a></li>
                <li id="nota03">Sólo acepta como hijos nodos de tipo <code>Text</code>. <a href="#texto03" class="volver"><img src="/static/volver.png" alt="Volver"></img></a></li>
                <li id="nota04">El número devuelto por <code>nodeType</code> es una referencia; estrictamente, al mapear el árbol del documento es una constante la que se asigna a cada nodo para identificarlo. En realidad la mayor parte de las veces para trabajar basta con el número, pero saber algo más no hace daño nunca. <a href="#texto04" class="volver"><img src="/static/volver.png" alt="Volver"></img></a></li>
                <li id="nota05">A pesar de que pueda parecerlo, <abbr>DHTML</abbr> no es ninguna especificación de un lenguaje, sólo un nombre comercial para englobar las propiedades de los modelos de capas y los métodos con los que operar con ellas en las versiones 4 de Explorer y Netscape. Cosa del pasado, vamos. <a href="#texto05" class="volver"><img src="/static/volver.png" alt="Volver"></img></a></li>
                <li id="nota06">Veremos estos conceptos al tratar <a href="curso_4_3_e.php"><code>addEventListener</code></a>. <a href="#texto06" class="volver"><img src="/static/volver.png" alt="Volver"></img></a></li>
            </ol>
         
            
            </div>

<div className='col-md-3'></div>

  
 
   
    </div>
    </div>
   
  </Layout>
)






            