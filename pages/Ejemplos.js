import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='Ejemplos'>
 <div>
    <div>Ejemplos</div>
     
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
        <h1>Ejemplos de funciones</h1>
        <h2>Un ejemplo de una función sencilla a la que se envía un argumento, y de paso un ejemplo de <code>switch</code></h2>
        <p>Vamos a crear una función que realice cuatro operaciones aritméticas con los valores que introduzca un usuario. Se podría crear una función para cada operación, pero para simplificar el código es mejor crear una sola que obtenga los valores de los campos de formulario con los valores con los que operar, y que luego realice la operación elegida. ¿Y cómo sabe la función qué operación realizar? Eso es justo lo que pasamos como argumento.</p>
        <p>La función sería ésta:</p>
        <pre><code>{`
    function operar(x){
        var valor_01 = eval(document.getElementById('campo_01').value);
        var valor_02 = eval(document.getElementById('campo_02').value);
        switch(x){
            case('sumar'):
                var resultado = valor_01 + valor_02;
                break;
            case('restar'):
                var resultado = valor_01 - valor_02;
                break;
            case('multiplicar'):
                var resultado = valor_01 * valor_02;
                break;
            case('dividir'):
                var resultado = valor_01 / valor_02;
                break;
        }
        document.getElementById('total').value = 'El resultado de '+x+' '+valor_01+' y '+valor_02+' es '+resultado+'.';
    }
            </code></pre>
            <p>Y el código para los botones, éste:</p>
            <pre><code>
    &lt;button onclick="operar('sumar');"&gt;+&lt;/button&gt;
    &lt;button onclick="operar('restar');"&gt;–&lt;/button&gt;
    &lt;button onclick="operar('multiplicar');"&gt;x&lt;/button&gt;
    &lt;button onclick="operar('dividir');"&gt;/&lt;/button&gt;
        `}</code></pre>
    <p>Cualquiera de los botones lanza la función. Ésta primero recoge los valores de los campos —veremos <a><code>getElementById</code> más adelante</a>, al igual que lo que es <code>eval()</code> al tratar <a>el objeto <i>Global</i></a>—, que es algo que tiene que hacer para cualquier caso. Después el <code>switch</code> busca la coincidencia del argumento enviado con los casos, y en cuanto ésta se da la comprobación se rompe —<code>break</code>—. Por último, a la caja de resultados se le asigna el valor final.</p>
        <p class="resultados"><textarea cols="30" rows="2" id="total" name="total"></textarea></p>
        <p class="boton"><label for="campo_01">Introduzca un número: </label><input id="campo_01" name="campo_01" size="3"></input> <label for="campo_02">Introduzca otro número: </label><input id="campo_02" name="campo_02" size="3"></input> <button onclick="operar('sumar');">+</button><button onclick="operar('restar');">–</button><button onclick="operar('multiplicar');">x</button><button onclick="operar('dividir');">/</button></p>
        <h2>Un ejemplo de función al que se envían dos argumentos, y que devuelve un valor por medio de <code>return</code></h2>
        <p>Ahora vamos a crear una tabla con un vínculo en cada celda. Cuando el usuario haga clic en el vínculo, se lanzará un mensaje de alerta que indicará la columna y la fila correspondientes.</p>
        <p>La función es la siguiente:</p>
        <pre><code>{`
            function coordenadas(x,y){
        var mensaje = 'La celda está situada en la columna '+x+' y en la fila '+y;
        return mensaje;
    }
        `}</code></pre>
        <p>Y cada vínculo contiene el <code>alert</code> que invoca la función, y dos valores a enviar como parámetros, la columna y la fila. Por ejemplo, el de la primer celda es:</p>
        <pre><code>{`
    <a href="#" onclick="alert(coordenadas(1,1));
    return false;>Celda</a>
        `}</code></pre>
        <p>Al hacer clic se lanza la alerta, que ejecuta la función <code>coordenadas</code>. La función recibe el número de columna y de fila, y devuelve el texto a mostrar. El <code>alert</code> lo recibe, y en ese momento la invocación de la función se sustituye por el mensaje, que es lo que muestra el cuadro de diálogo del navegador.</p>
        <table id="ejemplo_return">
            <caption>Al hacer clic sobre las celdas, se mandan los dos parámetros y la función devuelve una alerta</caption>
            <tbody><tr><th></th><th>Columna 01</th><th>Columna 02</th><th>Columna 03</th></tr>
            <tr><th>Línea 01</th><td><a href="#" onclick="alert(coordenadas(1,1));return false;">Celda</a></td><td><a href="#" onclick="alert(coordenadas(2,1));return false;">Celda</a></td><td><a href="#" onclick="alert(coordenadas(3,1));return false;">Celda</a></td></tr>
            <tr><th>Línea 02</th><td><a href="#" onclick="alert(coordenadas(1,2));return false;">Celda</a></td><td><a href="#" onclick="alert(coordenadas(2,2));return false;">Celda</a></td><td><a href="#" onclick="alert(coordenadas(3,2));return false;">Celda</a></td></tr>
            <tr><th>Línea 03</th><td><a href="#" onclick="alert(coordenadas(1,3));return false;">Celda</a></td><td><a href="#" onclick="alert(coordenadas(2,3));return false;">Celda</a></td><td><a href="#" onclick="alert(coordenadas(3,3));return false;">Celda</a></td></tr>
        </tbody></table>
        <p class="nota-importante">En los vínculos incluyo un <code>return false;</code> para devolver al navegador. Con ello se evita el funcionamiento por defecto para los vínculos, que sería seguir el <code>href="#"</code>, y que en este caso enviaría al principio del documento.</p>
        <p id="volver"><a href="../curso_4_2_e.php#v-ejemplos-funciones">Volver al curso</a></p>
     </div>
<div className='col-md-3'></div>

  
 
   
    </div>
    </div>
   
  </Layout>
)
