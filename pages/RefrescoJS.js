import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='RefrescoJS'>
 <div>
    <div>Refresco JavaScript</div>
     
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
            <h1>Funciones</h1>
            <h2 id="h-tc">Tabla de contenidos</h2>
            <ol>
                <li><a href="#intro">Introducción</a></li>
                <li><a href="#sintaxis-funcion">Sintaxis general de una función</a></li>
                <li><a href="#argumentos">Funciones y argumentos</a></li>
                <li><a href="#ambito-variables">Variables y su ámbito</a></li>
                <li><a href="#return"><code className="interno">return</code></a></li>
            </ol>
            <h2 id="intro">Introducción</h2>
            <p>Una función no es más que un bloque de enunciados que componen un comportamiento que puede ser invocado las veces que sea necesario.</p>
            <h2 id="sintaxis-funcion">Sintaxis general de una función</h2>
            <p>Una función de JavaScript presenta este aspecto:</p>
            
            
            <pre><code>{`
            function nombre_de_la_función(){
        …enunciados a ejecutar…
    }
          `}</code></pre>
        
            <p>Para ejecutar la función posteriormente no hay más que invocar su nombre en cualquier momento y desde cualquier parte de un código, con una excepción: la función debe haber sido definida anteriormente. Así, por ejemplo, este código:</p>
            <pre><code>{`
    function dame_una_a(){
        alert("¡AAAAAAAAAAAAAAAAA!");
    }
            
    dame_una_a();
            `}</code></pre>
            <p>ejecutaría la alerta, pero éste:</p>
            <pre><code>{`
    dame_una_a();
                
    function dame_una_a(){
        alert("¡AAAAAAAAAAAAAAAAA!");
    }
    
            `}</code></pre>
            <p>generaría un error, porque en el momento en que se invoca la función ésta aún no ha sido registrada.</p>
            <p>Hay que poner especial atención a la hora de crear la funciones, para no repetir los nombres, principalmente porque esto no genera errores en JavaScript, y puede suponer quebraderos de cabeza cuando un <i>script</i> no funciona pero la consola de errores no muestra mensaje alguno.</p>
            <p>Si definimos dos funciones con el mismo nombre, como en este ejemplo:</p>
            <pre><code>{`
    function alerta(){
        alert("Ia Ia Shub-Niggurath");
    }
    
    
    function alerta(){
        alert("Klaatu barada nikto");
    }
    
    alerta();
            `}</code></pre>
            <p>sólo funciona la segunda, que ha sido la última definida.</p>
            <h2 id="argumentos">Funciones y argumentos </h2>
            <p>Podemos desear que una función ejecute unos enunciados en los que opere con una serie de valores que no hayamos definido dentro de la misma, sino que los reciba de otra función o enunciado. Esos valores son los <dfn>argumentos</dfn>, que se especifican entre los paréntesis que van tras el nombre de la función, y se separan por comas:</p>
            <pre><code>{`
    function nombre_de_la_función(argumento1,argumento1,…){
        …enunciados a ejecutar…
    }
    
            `}</code></pre>
            <p>Los argumentos se nombran como las variables:</p>
            <pre><code>{`
    function sumar(x,y){
        var total = x + y;
        alert(total);
    }
            `}</code></pre>
            <p>Si después se ejecuta unas líneas como las siguientes:</p>
            <pre><code>{`
    sumar(1,2);
    sumar(3,5);
    sumar(8,13);
            `}</code></pre>
            <p>en la función <code className="interno">sumar</code> <var>total</var> adquiere sucesivamente los valores de <code className="interno">3</code>, <code className="interno">8</code> y <code className="interno">21</code>, que es lo que mostrarían tres alertas.</p>
            <div class="nota-importante">
                <p>Aunque en los ejemplos emplee numerales, como argumentos se puede enviar cualquier variable. Sólo hay que recordar que si se trata de una cadena literal, debe ir entrecomillada:</p>
                <pre><code>
    <i>la_función</i>('<i>cadena</i>','<i>otra_cadena</i>');
                </code></pre>
            </div>
            <p>Por último, sobre los argumentos hay que recordar las respuestas a tres preguntas:</p>
            <ul>
                <li><em>¿Qué ocurre si se envía a una función menos argumentos que los que se han especificado?</em>: Los argumentos que no han recibido un valor adoptan el de <code className="interno">undefined</code>.</li>
                <li><em>¿Qué ocurre si se envía a una función más argumentos que los que se han especificado?</em>: Los argumentos que sobran son elegantemente ignorados.</li>
                <li><em>¿Cuántos argumentos se pueden especificar como máximo?</em>: 255.</li>
            </ul>
            <h2 id="ambito-variables">Variables y su ámbito</h2>
            <p>El <dfn>ámbito</dfn> sería algo así como el espacio en el que las variables existen y al que pueden acceder enunciados u otras funciones. Si se define una variable dentro de una función, esa variable sólo existe para esa función, y otras funciones no pueden acceder a su valor a menos que lo reciban como un argumento:</p>
            <pre><code>{`
    function concatenar_cadenas(){
        var a = "orda";
        var b = "lía";
        var c = a + b;
    }
    
    function mostrar_resultado(){
        alert(c);
    }
    
    concatenar_cadenas(); mostrar_resultado(); `}</code></pre> 
    <p>En este caso
    no obtenemos una alerta con «ordalía», sino un error, puesto que en la
    función <code className="interno">mostrar_resultado()</code> pedimos que se muestre el valor
    de una variable que no existe en su ámbito. Dicho de otra manera, las
    variables existen sólo para <code className="interno">concatenar_cadenas()</code>, y aunque
    adquieren los valores definidos en cuanto ejecutamos la función, ésta es
    una «barrera» que impide que se pueda acceder a aquellos desde fuera.</p>
    <p>Para que el código funionase, deberíamos definir las variables fuera de
    ambas funciones, para que su ámbito sea global:</p> 
    <pre><code>{` var a =
    ""; var b = ""; var c = "";
    
    function concatenar_cadenas(){
        a = "orda";
        b = "lía";
        c = a + b;
    }
    
    function mostrar_resultado(){
        alert(c);
    }
    }
    
    concatenar_cadenas();
    mostrar_resultado();
            `}</code></pre>
            <p>De esta forma, toda función puede acceder a las variables. <code className="interno">concatenar_cadenas()</code> modifica los valores iniciales, pero ahora estos se almacenan de manera global fuera de ella; así están disponibles para <code className="interno">mostrar_resultado()</code>.</p>
            <h2 id="return"><code>return</code></h2>
            <p>Hay otra opción con la que solucionar el problema anterior, y que además puede ser útil en otras ocasiones: <code className="interno">return</code> que permite devolver valores al origen de la invocación de una función. El esquema de funcionamiento es algo así:</p>
            <dl class="ilustracion">
            <dt><img src="/static/esquema_return.png" /></dt>
               
                <dd>Un ejemplo esquemático del funcionamiento de <code className="interno">return</code></dd>
            </dl>
            <p>Rehagamos el ejemplo anterior que no funcionaba por cuestiones de ámbito de las variables, pero enviando el resultado por medio de <code className="interno">return</code>:</p>
            <pre><code>{`
    function concatenar_cadenas(){
        var a = "orda";
        var b = "lía";
        var c = a + b;
        return c;
    }
    
    function mostrar_resultado(){
        alert(concatenar_cadenas());
    }
   
   
    mostrar_resultado(); `}</code></pre> <p>Ahora <code className="interno">mostrar_resultado</code>
    cuenta con el <code className="interno">alert</code> que tiene que mostrar el resultado de la
    concatenación. En la alerta invocamos la función
    <code className="interno">concatenar_cadenas</code>, que devuelve el valor de <var>c</var>;
    así, es como si en hubiéramos hecho una alerta de <var>c</var>
    directamente.</p> <p>En este ejemplo no hemos necesitado enviar argumentos
    porque se trata de un ejemplo muy sencillo, pero en los <nav><Link href='/Ejemplos'><a>ejemplos sobre
    funciones veremos esto con más detalle</a></Link></nav>.</p> 
    </div>
<div className='col-md-3'></div>

  
 
    
    </div>
    </div>
   
  </Layout>
)
