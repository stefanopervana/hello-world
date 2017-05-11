import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='JSX2'>
 <div className='home'>
    <div>JSX 2</div>
     
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
    
    
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<p>Extraido de http://www.mmfilesi.com/blog/series/react-revisitado/</p>
<p><a href="http://www.mmfilesi.com/blog/series/react-revisitado/">Como vimos, </a>React es un framework orientado a componentes, los cuales se van estructurando unos dentro de otros hasta formar el árbol final de una aplicación.</p>
<p>El componente más sencillo que podemos definir en React es una función que devuelve un fragmento de JSX sin más.</p>
<p><span className="color: #800080;">componente-simple.jsx</span></p>

<pre><code>{`
/* Para definir un componente debemos "importar" React */
import React from 'react';
/* Los componentes comienzan por mayúscula y siguen en camelCase&nbsp;*/
const ComponenteSimple = () => {
return (
<h3>Soy un componente mondo lirondo</h3>
)
};
/* Exportamos por defecto el componente */
export default ComponenteSimple;
`}</code></pre>
<p>En nuestra aplicación demo tendremos al menos dos componentes de este tipo, uno para el header y otro para el footer, pero antes de prepararlos vamos a ordenar un poco mejor el scaffolding que prepara create-react.</p>
<p>En vez de ir soltando todos los componentes de forma desordenada en src, creamos ahí una carpeta denominada components, en la que a su vez&nbsp;&nbsp;haremos una carpeta por cada pantalla de la aplicación y una llamada commons donde echaremos los componentes comunes a varias pantallas, como el header y el footer. Además, en la raíz de components prepararemos un archivo denominado index.js que nos servirá de índice para exportar e importar los componentes de forma más cómoda y limpia. Es decir, hacemos algo así:</p>

<pre><code>{`src/
components/
commons/
footer.js
header.js
view-main/
view-main.js
index.js
App.js
index.js
`}</code></pre>
<p>Como es un componente simple, de mera presentación, para la cabecera escribimos una función sencilla. (Observa cómo se definen los comentarios intercalando una expresión con las llaves).</p>
<p><span className="color: #800080;">src/components/commons/header.js</span></p>
<pre><code>{`
import React from 'react';
const MainHeader = () => {
return (
<header className='main-header'>
/* Cabecera principal de la aplicación */}
<h3>Cabecera principal </h3>
</header>
);
};
export default MainHeader;
`}</code></pre>
<p>Para el footer hacemos algo parecido.</p>
<p><span className="color: #800080;">src/components/commons/footer.js</span></p>
<pre><code>{`
import React from 'react';
const MainFooter = () => {
return (
<footer className='main-footer'>
Footer principal
</footer>
);
};
export default MainFooter;
`}</code></pre>
<p>Para incluir estos dos componentes en otro habría que importarlos uno a uno desde este último. Como eso termina siendo algo pesado, en el raíz de components preparamos un archivo llamado index.js que permitirá luego importarlos todos de manera más cómoda. De momento, solo tendrá referenciados estos dos componentes, claro.</p>
<p><span className="color: #800080;">src/components/index.js</span></p>
<pre><code>{`
import MainHeader from './commons/main-header';
import MainFooter from './commons/main-footer';
export {
MainHeader,
MainFooter
}
`}</code></pre>
<p>Ahora vamos con el componente principal de la primera pantalla, la&nbsp;«home», que podemos llamar view-main (a mí me gusta empezar el nombre de los componentes raíz de cada pantalla con el término view-, pero cada cual que lo llame cómo quiera). Lo guardamos en un directorio que podemos llamar igual dentro de components. Este componente de momento solo tendrá el header y el footer comunes de la aplicación, por lo que también podemos escribirlo como una función sencilla.</p>
<p><span className="color: #800080;">src/components/view-main/view-main.js</span></p>
<pre><code>{`
import React from 'react';
/* Como tenemos un archivo index.js donde ya tenemos los componentes mapeados, podemos usar esta otra fórmula */
import { MainHeader, MainFooter } from '../../components';
const ViewMain = () => {
return (
<div className='view-main'>
<MainHeader />
&nbsp;<p>Aquí irá más contenido</p>
<MainFooter />
</div>
);
};
export default ViewMain;
`}</code></pre>
<p>Añadimos el componente ViewMain al listado que tenemos en index.js.</p>
<p><span className="color: #800080;">src/components/index.js</span></p>
<pre><code>{`
import MainHeader from './commons/main-header';
import MainFooter from './commons/main-footer';
import ViewMain from './view-main/view-main';
export {
MainHeader,
MainFooter,
ViewMain
}
`}</code></pre>
<p>Ahora en el componente App, que recordemos es el componente principal, borramos todo lo que viene por defecto con el create-react y dejamos una clase con un método llamado render que devuelve el componente ViewMain. Más adelante volveré sobre esta manera de definir los componentes.</p>
<p><span className="color: #800080;">src/App.js</span></p>
<pre><code>{`
import React, { Component } from 'react';
import { ViewMain } from './components';
class App extends Component {
render() {
return (
<ViewMain />
);
}
}</p>
export default App;
`}</code></pre>
<p>Ya tenemos casi todo el castillo de matrioskas montado. Solo falta quitar el «Hola Mundo» que teníamos en el index.js del root que preparamos en la entrada anterior y en su lugar poner el componente App.</p>
<p><span className="color: #800080;">src/index.js</span></p>
<pre><code>{`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
<h3>Hola Mundo</h3>,
document.getElementById('root')
);
ReactDOM.render(
<App />,
document.getElementById('root')
);
`}</code></pre>

<p>Por último vamos a añadir unas pocas reglas de estilo que nos permitan identificar mejor los componentes en pantalla. Borramos el archivo App.css y nos quedamos solo con index.css, donde podemos escribir algo así:</p>
<p><span className="color: #800080;">src/index.css</span></p>
<pre><code>{`
body {
margin: 2em;
font-family: sans-serif;
max-width: 1200px;
}
.main-header {
border: 1px solid blue;
padding: 0.2em;
}
.main-footer {
border: 1px solid red;
padding: 0.2em;
}
.view-main {
border: 1px solid green;
padding: 0.5em;
}
`}</code></pre>
<p>De esta manera, nos queda algo feo, pero didáctico ^^.</p>
<p><a href="http://www.mmfilesi.com/wp-content/uploads/2017/05/react-02-a.gif"><img src="/static/react-02-a.gif" alt="Volver"></img></a></p>
<p>Resumiendo de abajo arriba: tenemos dos componentes comunes, <strong>MainHeader</strong> y <strong>MainFooter</strong>, que hemos incluido en un componente para la primera pantalla aka vista principal, el cual se llama <strong>ViewMain</strong>. A su vez, desde el contenedor principal, <strong>App</strong>, hemos insertado este componente, y desde el index.js, mediante el método ReactDOM.render(), hemos engarzado App con un nodo del DOM normal que lleva por id root. En un esquema:</p>
<p><a href="http://www.mmfilesi.com/wp-content/uploads/2017/05/react-02-b.png"><img src="/static/react-02-b.png" alt="Volver"></img></a></p>
<p>&nbsp;</p>
<div className="panel-destacados dred">
<p>La aplicación demo tal y como está en este momento<a href="https://github.com/mmfilesi/domestic-economy/tree/02-componentes"> se puede encontrar completa en git</a></p>
</div>

<div className='col-md-3'></div>
  
    </div>
    </div>
  </Layout>
)


