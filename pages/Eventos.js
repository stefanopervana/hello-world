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
            <h1>Eventos</h1>
            <p>Los eventos son acciones que ocurren sobre un documento, bien por parte del usuario —como por ejemplo que haga clic sobre un elemento— o bien por parte del navegador —por ejemplo cargar el documento—. La lista de eventos es la siguiente:</p>
            <table>
                <caption>Lista de eventos</caption>
                <tbody><tr>
                    <th scope="col">Evento</th>
                    <th scope="col">Descripción</th>
                </tr>
                <tr>
                    <td><code>blur</code></td>
                    <td>El elemento pierde el foco.</td>
                </tr>
                <tr>
                    <td><code>change</code></td>
                    <td>El contenido del elemento cambia.</td>
                </tr>
                <tr>
                    <td><code>click</code></td>
                    <td>El usuario hace clic sobre el elemento.</td>
                </tr>
                <tr>
                    <td><code>dblclick</code></td>
                    <td>El usuario hace doble clic sobre el elemento.</td>
                </tr>
                <tr>
                    <td><code>focus</code></td>
                    <td>El elemento gana el foco.</td>
                </tr>
                <tr>
                    <td><code>keydown</code></td>
                    <td>El usuario presiona una tecla.</td>
                </tr>
                <tr>
                    <td><code>keypress</code></td>
                    <td>El usuario presiona una tecla y la mantiene pulsada.</td>
                </tr>
                <tr>
                    <td><code>keyup</code></td>
                    <td>El usuario libera la tecla.</td>
                </tr>
                <tr>
                    <td><code>load</code></td>
                    <td>El documento termina su carga.</td>
                </tr>
                <tr>
                    <td><code>mousedown</code></td>
                    <td>El usuario presiona el botón del ratón en un elemento.</td>
                </tr>
                <tr>
                    <td><code>mousemove</code></td>
                    <td>El usuario mueve el puntero del ratón sobre un elemento.</td>
                </tr>
                <tr>
                    <td><code>mouseout</code></td>
                    <td>El usuario mueve el puntero fuera de un elemento.</td>
                </tr>
                <tr>
                    <td><code>mouseover</code></td>
                    <td>El usuario mantiene el puntero sobre un elemento.</td>
                </tr>
                <tr>
                    <td><code>mouseup</code></td>
                    <td>El usuario libera el botón pulsado del ratón sobre un elemento.</td>
                </tr>
                <tr>
                    <td><code>reset</code></td>
                    <td>El usuario presiona el botón de restablecer de un formulario.</td>
                </tr>
                <tr>
                    <td><code>select</code></td>
                    <td>El usuario selecciona el texto de un elemento.</td>
                </tr>
                <tr>
                    <td><code>submit</code></td>
                    <td>El usuario presiona el botón de envío de un formulario.</td>
                </tr>
                <tr>
                    <td><code>unload</code></td>
                    <td>El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página, bien porque el documento se recarga.</td>
                </tr>
            </tbody></table>
            <p>Y las puntualizaciones obligadas son:</p>
            <ul>
                <li>Por definición no todos los elementos de un documento aceptan todos los eventos. Para saber cuáles elementos aceptan qué eventos, se puede consultar la <a href="curso_2_3.php">lista de elementos que ya vimos anteriormente</a>.</li>
                <li>Al programar, siempre que se pueda se debe detectar eventos independientes del dispositivo, por ejemplo <code>click</code> en lugar de <code>mousedown</code>, para ofrecer la funcionalidad a los usuarios con alguna discapacidad que les impida emplear un ratón, tal y como indica el <a href="http://www.w3.org/TR/WCAG10/#tech-device-independent-events">punto 9.3 de las pautas de accesibilidad del <abbr title="«World Wide Web Consortium», Consorcio de la Red Mundial">W3C</abbr> (inglés)</a> y como <a href="http://www.w3.org/TR/WCAG10-HTML-TECHS/#directly-accessible-scripts" hreflang="en">se explica en el documento de técnicas de <abbr title="«HyperText Markup Language», Lenguaje de Marcado de HiperTexto">HTML</abbr> (inglés)</a>.</li>
                <li>Estos son los eventos, los <dfn>manejadores de eventos</dfn> son los que se escriben con el prefijo <i>on</i> y se emplean como atributos de los elementos. Sin embargo, no se deberían emplear en el código de un documento para mantener la separación del contenido y los comportamientos. Veremos cómo detectar los eventos sin necesidad de modificar el marcado cuando veamos <a><code>addEventListener</code></a>.</li>
            </ul>
            <p>Y, por último, aquí está el <a href="js/ejemplos_eventos.php" id="v-ejemplos-eventos">ejemplo de eventos en funcionamiento</a>.</p>
            
            </div>

<div className='col-md-3'></div>

  
 
   
    </div>
    </div>
   
  </Layout>
)




