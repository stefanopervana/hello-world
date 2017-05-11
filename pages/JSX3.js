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
<p><a href="http://www.mmfilesi.com/blog/series/react-revisitado/">Seguimos con este taller sobre react 15.</a> En esta entrada veremos qué son los estados y algunas maneras de trastear con JSX.</p>
<p>Los componentes que hemos realizado en las entradas anteriores&nbsp;eran muy sencillos y podíamos definirlos con una función que retornase un fragmento de JSX; pero ahora vamos a ver otros más complejos, capaces de manejar lógica de negocio, con los que podemos tratar datos además de mostrar cosas por pantalla.</p>
<p>Este tipo de componentes se construyen con<a href="http://www.mmfilesi.com/blog/harmony-4-clases/"> las nuevas clases de ecmaScript 6,</a> que extienden, heredan, la clase <strong>Component</strong> de React.&nbsp;El fragmento JSX que luego se traduce en html se retorna en un método denominado <strong>render()</strong> y en el constructor, como veremos, se define una propiedad especial denominada <strong>state</strong>&nbsp;donde iremos persistiendo los datos internos del componente.</p>
<pre><code>{`
/* Importamos también Component */
import React, { Component } from 'react';
/* La clase del componente extiende Component */
class NombreComponente extends Component {
constructor(props) {
/* con esta fórmula enlazamos las propiedades del componente 
padre (Component)&nbsp;*/
super(props);
/* aquí definiremos cosas, como el "estado" del componente&nbsp;*/
this.state = {awesome: 'Fatoumata Diawara';
}
foo() {
/* un método que hace cosas.&nbsp;*/
}
/* En el método render devolvemos el JSX del componente */
render() {
return (
<div>
La "plantilla" del componente
</div>
);
}
}
/* Por defecto exportamos la clase */
export default NombreComponente;
`}</code></pre>
<p>De momento, además del contenedor principal App.js, solo necesitamos un componente de este tipo en nuestra aplicación, el que sirve de contenedor principal para la home, que llamamos ViewMain. Lo refactorizamos para convertir la función en una clase.</p>
<p><span className="color: #800080;">src/components/view-main/view-main.js</span></p>
<pre><code>{`
<x>import React from 'react';</x>
import React, { Component } from 'react';</x>
import { MainHeader, MainFooter } from '../../components';</x>
<x>const ViewMain = () => {</x>
<x>return (</x>
<x><div className='view-main'></x>
<x><MainHeader /></x>
<x><p>Aquí irá más contenido</x>
<x><MainFooter /></x>
<x></div></x>
<x>);</x>
<x>};</x>
class ViewMain extends Component {
render() {
return (
<div className='view-main'>
<MainHeader />
<p>Aquí irá más contenido</p>
<MainFooter />
</div>
);
}
}
export default ViewMain;
`}</code></pre>
<p>El conjunto de datos internos del componente se conocen como&nbsp;«state», estado, que equivaldría al modelo de un patrón clásico. Este estado se define al principio en el constructor, en el que debemos invocar las propiedades de Component mediante super(). Como estamos haciendo una aplicación para controlar la economía doméstica, en nuestro caso, vamos a definir aquí los ingresos y los gastos. Algo así de momento:</p>
<pre><code>{`
class ViewMain extends Component {
constructor(props) {
super(props);
/* en state definimos dos arrays, uno para los ingresos (inputs) y otro 
para las salidas (oputputs) */
this.state= {
inputs: [
{'id': '00', 'description': 'nómina', 'quantity': 100}
],
outputs: [
{'id': '00', 'description': 'libro formidable', 'quantity': 2},
{'id': '01', 'description': 'calcetines', 'quantity': 3},
{'id': '02', 'description': 'comida gato', 'quantity': 2}
]
};
}
render()...
`}</code></pre>
<p>Ahora ya solo nos falta pintar los gastos y los ingresos, lo cual haré de la forma más sencilla posible, un listado, para no liarnos ahora con css, que no toca. Y con esto nos vamos a adentrar por uno de los terrenos más feos de React, al menos desde mi punto de vista. A diferencia de angular, vue o cualquier sistema de plantillas como handlebars, las maquetas de JSX son farragosas y la ausencia de helpers sintéticos obliga a construcciones verbosas en javaScript. Esto queda más claro en código. Vamos a ver primero cómo se prepara una estructura iterativa (el equivalente al ng-repeat) y luego una condicional (un ng-if), que son los dos fundamentos de cualquier template dinámica. Pero antes vamos a recordar tres métodos muy útiles para trabajar con arrays.</p>
<h4>Tres funciones declarativas</h4>
<p>Como ya sabemos, uno de los fundamentos de React es la programación declarativa, que se diferencia de la imperativa por indicar <em>qué</em> debe hacerse en lugar de&nbsp;<em>cómo</em> debe hacerse algo. Por ejemplo, si quisiéramos ocultar todos los párrafos con la clase foo de una página, si seguimos un estilo imperativo haríamos algo así:</p>
<pre><code>{`
// 1. Seleccionamos los párrafos
let nodes = document.querySelectorAll('p');
// 2. Calculamos la longitud de la selección
let len = nodes.length;
// 3. Si no hay nada seleccionado, detenemos la operación
if ( !len ) {
return;
}
// 4. Recorremos la selección</span>
while ( len-- ) {
// 5. En cada vuelta cambiamos la propiedad display del nodo que toque a none
nodes[len].style.display='none';
}
`}</code></pre>
<p>Es decir, hemos ido desglosando una a una las instrucciones que deben ejecutarse en cada momento. En cambio, con jQuery podríamos conseguir lo mismo de forma declarativa con algo así:</p>
<pre><code>{`
$('p').hide();
`}</code></pre>
<p>De esta manera no nos preocupamos por cómo se seleccionan los párrafos ni por cómo se ocultan; &nbsp;sencillamente indicamos que queremos ocultar los párrafos y de forma transparente jQuery se encarga del trabajo sucio. Menos código, menos trabajo, menos posibilidad de que crezcan bugs como setas... la idea está chula.</p>
<p>En javaScript vanilla hay tres métodos muy recurrentes&nbsp;para trabajar con JSX y arrays de forma declarativa:</p>
<p><strong>filter(),</strong>&nbsp;sirve para obtener un array resultado de haber filtrado otro con algún requerimiento.</p>
<pre><code>{`
let miArray = [2, 4, 6, 8, 10];
miArray = miArray.filter( (element)=> {
return element > 4;
});
// [6, 8, 10]</span>
`}</code></pre>
<p><strong>map(),</strong> con el que se obtiene una copia modificada en la que se ha cambiado cada elemento uno a uno.</p>
<pre><code>{`
let miArray = [2, 4, 6];
let miArrayMapeado = [];
miArrayMapeado = miArray.map( (element)=> {
return element * 2;
});
// [4, 8, 12]
`}</code></pre>
<p><strong>reduce(),</strong> con el que podemos obtener el valor resultante de aplicar determinada operación a una iteración de los valores de un array.</p>
<pre><code>{`
let miArray = [2, 4, 6];
miArray = miArray.reduce( (valorAnterior, valorActual, index, array)=> {
return valorAnterior + valorActual;
});
// 12
`}</code></pre>
<p>Recordado esto, volvamos a nuestra aplicación.</p>
<h4>Iteraciones en JSX</h4>
<p>Nos habíamos quedado en cómo podíamos&nbsp;listar cada uno de los gastos e ingresos que tenemos definidos en el state del componente y ahora ya sabemos que la manera más elegante, declarativa, de hacerlo es con el método map, que nos devolverá un array en el que hemos podido wrapear cada ítem con los falsos tags de JSX. Algo así para los ingresos:</p>
<pre><code>{`
...
<h5>Ingresos</h5>
<ul>
{ this.state.inputs.map((item) =>
<li key={item.id}> {item.description}: {item.quantity}</li>
) }
</ul>
...
`}</code></pre>
<p>Y lo mismo para los gastos:</p>
<pre><code>{`
<h5>Gastos</h5>
<ul>
{ this.state.outputs.map((item) =>
<li key={item.id}> {item.description}: {item.quantity}</li>
) }
</ul>
`}</code></pre>
<div className="panel-destacados dred"><p></p>
<p>Importante: para que React no se vuelva tarumba, en las iteraciones hay que definir un atributo en el nodo principal del tag iterado llamado <strong>key</strong>, el cual debe tener un valor distinto en cada ítem.</p>

<h4>setState()</h4>
<p>Ahora que tenemos listados los gastos e ingresos, también podemos añadir los subtotales de forma muy sencilla con el método reduce. Si lo hiciéramos directamente en la plantilla, podríamos hacer algo así para las salidas y las entradas (le pasamos 0 como segundo parámetro a reduce para inicializar el subtotal).</p>
<pre><code>{`
<p>
Subtotal gastos:
{ this.state.outputs.reduce( (subtotal, next) => {
return subtotal + next.quantity
}, 0) }
</p>
`}</code></pre>
<p>O, dado que con las arrow function tenemos una versión más compacta de escribir la función cuando lo único que hace es retornar algo, podríamos escribir esto:</p>
<pre><code>{`
this.state.outputs.reduce( (subtotal, next) => subtotal + 
next.quantity, 0)
`}</code></pre>
<p>Sin embargo, si seguimos por este camino terminaríamos incurriendo en uno de los peores&nbsp;desaguisados de la programación, repetir el código, pues este cálculo va a ser recurrente, así que vamos a cambiar de estrategia. En vez de realizar esta operación cuando renderizamos el componente, vamos a hacerla cuando se construye y para eso tenemos varios métodos muy útiles que forman lo que se conoce como <strong>«ciclo de vida. </strong>Estos métodos que en argot se llaman <em>hooks</em>, ganchos, se invocan de manera automática en determinados momentos del proceso que va desde que comienza a formarse un componente hasta que se destruye, es decir, hasta que se elimina de la pantalla.</p>
<p>En unas dos entradas hablaré en detalle de este ciclo de vida, pero de momento solo nos interesa un método,&nbsp;<strong>componentWillMount(),</strong> que se dispara&nbsp;antes de&nbsp;que se renderice el&nbsp;componente, es decir, justo antes del método render(). Entonces, la idea es añadir dos propiedades más en el state, subtotalInputs y subtotalOutputs, que incializaremos en 0. Luego, cuando se dispare el método componentWillMount() vamos a setear ambos valores con el resultado que devuelva un método que nos calcule totales mediante el método reduce. Y lo más importante de todo esto es que para cambiar el valor de estas propiedades del state vamos a utilizar un método de React llamado <strong>setState()<span className="text-decoration: underline;">,</span></strong><span className="text-decoration: underline;"> por el cual hay que pasar cualquier modificación del estado.</span> En código, que queda todo más claro:</p>
<pre><code>{`
constructor(props) {
super(props);
/* en state definimos dos arrays, uno para los ingresos (inputs) y otro 
para las salidas (oputputs) */
this.state = {
inputs: [
{'id': '00', 'description': 'nómina', 'quantity': 100}
],
outputs: [
{'id': '00', 'description': 'libro formidable', 'quantity': 2},
{'id': '01', 'description': 'calcetines', 'quantity': 3},
{'id': '02', 'description': 'comida gato', 'quantity': 2}
],
subtotalInputs: 0,
subtotalOutputs: 0
};
}
componentWillMount() {
/* Separo las estas variables para que se entienda mejor el proceso,
 pero podríamos haber definido el valor directamente en setState */
let subtotalInp = this.getSubtotal(this.state.inputs);
let subtotalOut = this.getSubtotal(this.state.outputs);
this.setState({subtotalInputs: subtotalInp});
this.setState({subtotalOutputs: subtotalOut});
}
getSubtotal(arrayItems) {
return arrayItems.reduce( (subtotal, next) => subtotal + next.quantity, 0);
}
...
`}</code></pre>
<p>Bueno, no sé si esto está quedando claro. En cualquier caso, lo único realmente importante de todo esto es que comprendamos que para modificar un valor del estado debemos pasar por el método setState(), en el cual definimos la propiedad a cambiar y su nuevo valor. De lo contrario, React no se entera de la modificación y no la reflejaría en pantalla, entre otros desastres que supondría salir del contexto del framework.</p>
<h4>Condicionales en JSX</h4>
<p>Para terminar esta entrada nos queda ver cómo podemos manejar condicionales con JSX, el equivalente a los ng-if de angular, y para eso vamos a añadir otra pieza más a nuestro componente: un mensaje que nos avise si nuestros gastos son mayores que nuestros ingresos.</p>
<p>Como decía, en React carecemos de helpers, así que no queda otra que preparar esto con javaScript. La buena noticia es que podemos usar cualquier fórmula de js que permita armar una estructura condicional. Por ejemplo, podríamos preparar un if / else normal dentro de una función autoejecutable de devuelva un mensaje ok o ko según nos hayamos fundido o no los dineros (o sacarla a otro método de la clase).</p>
<pre><code>{`
...
<p>
{ (() => {
if ( this.state.subtotalOutputs>this.state.subtotalInputs ) {
return Cuidado, vamos mal.
} else {
return Todo correcto.
}
})()}
</p>
...
`}</code></pre>
<p>Pero también podemos formular otra declaración más elegante si recordamos que en una declaración condicional no se pasa a lo segundo si no se cumple lo primero. Es decir, igual que podemos hacer esto:</p>
<pre><code>{`
let foo = bar || 5;
`}</code></pre>
<p>donde foo es 5 si bar es nulo, en JSX podemos hacer cosas así:</p>
<pre><code>{`
<p>
{( this.state.subtotalOutputs > this.state.subtotalInputs ) &&
<spna className='warning'> Cuidado, vamos mal.</span> }
{( this.state.subtotalOutputs < this.state.subtotalInputs ) &&
<spna className='info'> Todo correcto.</span> }
</p>
`}</code></pre>
<p>O, por ver otra posibilidad, un condicional ternario, que es más elegante:</p>
<pre><code>{`
<p>
{
( this.state.subtotalOutputs > this.state.subtotalInputs ) ?
<span className='warning'>Cuidado, vamos mal.</span> :
<span className='info'>Todo correcto.</span>
}
</p>
`}</code></pre>
<p>Bueno, pues después de todo este trabajo de refactorización, nuestro componente principal debería haber quedado más o menos así.</p>
<p><a href="http://www.mmfilesi.com/wp-content/uploads/2017/05/react-03-aplicacion.png"><img src="/static/react-03-aplicacion.png" alt="Volver"></img></a></p>
<p>En la próxima veremos cómo se comunican los componentes entre sí mediante las propiedades.</p>
<div className="panel-destacados dred"><p></p>
<p>La aplicación demo tal y como está en este momento <a href="https://github.com/mmfilesi/domestic-economy/tree/03-componentes-estado">se puede encontrar completa en git</a>, incluido <a href="https://github.com/mmfilesi/domestic-economy/blob/03-componentes-estado/src/components/view-main/view-main.js">el componente ViewMain que hemos refactorizado</a>.</p>

          
</div>

<div className='col-md-3'></div>
  
    </div>
    </div>
    </div>
  </Layout>
)





