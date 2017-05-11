import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='Recursi'>
 <div>
    <div>Recursi</div>
     
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

<div class="entry-content">
 <div className="entry-content">
        <img src="/static/10728808896_120654cb09_b.jpg" width="750" height="591"/>
        </div>
<blockquote><p>Una rama arrancada de un árbol no deja de ser un nuevo árbol, un nuevo ser idéntico pero de menor tamaño con sus hojas como última alternativa posible.</p></blockquote>
<p>Seguimos hablando sobre el control de flujo en programación funcional con JavaScript. Si en el anterior post hablamos de cómo intentar hacer un menor uso de estructuras iterativas manuales para realizar ciertas acciones, en esta ocasión vamos a hablar de una técnica muy recurrente en programación funcional y que para muchos lenguajes de programación funcionales puros es la única forma de iterar: hablamos de la <strong>recursividad</strong>.</p>
<p>Una técnica que nos permitirá <strong>pensar en la solución de problemas complejos de una forma diferente</strong>. Veremos también en que nos puede ayudar a día de hoy la recursividad y cómo puede ser aplicada. Empecemos:</p>
<p><span id="more-4049"></span></p>
<h2>¿Qué es la recursividad?</h2>
<p>La recursividad es la técnica que utilizamos en programación para solucionar problema complejos que pueden dividirse en partes más pequeñas e idénticas al problema total pero de menor magnitud. La composición de todas las soluciones hijas dan el resultado de la solución padre.</p>
<p>La recursividad es bastante peculiar porque suele funcionar autoejecutando funciones con un ámbito menos al problema padre. Es por eso que en toda solución recursiva contamos con 2 elementos:</p>
<ul>
<li><strong>Un caso base</strong>: es el caso al que toda función recursiva tiene que acabar llegando para dar por resuelto el caso más simple del problema que queremos resolver. Si no definimos un caso base dentro de nuestra solución recursiva llamaremos a nuestra función infinitas veces hasta que acabemos con todos los recursos del sistema.</li>
<li><strong>Un caso recursivo</strong>: Que suele ser una función que es capaz de autoinvocarse. La clave de esta autoinvocación es que los elementos que le pasemos tendrán que ser menores que los del problema padre ya que si no nunca podríamos llegar al caso base.</li>
</ul>
<h2>Iteración y recursión en JavaScript</h2>
<p>La recursividad <strong>es una técnica muy usada en programación funcional porque nos evita el uso de iteraciones</strong>. Muchos lenguajes de programación funcional no cuentan ni con sintaxis para realizar bucles. Simplemente pueden recorrer arrays por medio de recursividad.</p>
<p>Para ver la diferencia entre ambos modelos, vamos a presentar un problema muy simple que pueda resolverse con ambas técnicas: la idea es realizar un algoritmo que sea capaz de sumar todos los número enteros de un array.</p>
<p>La solución iterativa es muy sencilla y muy tonta:</p>
<pre><code>{`const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let acc = 0;
for (let i = 0; i &lt; nums.length; i++) {
    acc += nums[i];
}
acc; // 45`}</code></pre>
<p>Este ejemplo ya lo podíamos simplificar usando a nuestro nuevo amigo ‘reduce’:</p>
<pre><code>{`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, index) =&gt; acc + index, 0); // 45`}</code></pre>
<p>Y la solución recursiva sería de la siguiente manera:</p>
<pre><code>{`1. function sum(nums) {
2.    if (nums.length === 0) {
3.        return 0;
4.    } else {
5.        const [first, ...rest] = nums;
6.        return first + sum(rest);
7.    }
8. }

sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // 45`}</code></pre>
<p>Estudiemos un poco el código:</p>
<ul>
<li>En la <strong>línea número 2 estamos definiendo el caso base</strong> de nuestro problema. Queremos que cuando el array sea vacío, la función devuelve un cero.</li>
<li><strong>La línea 6 se encarga de mostrar el caso recursivo</strong>. Lo que hacemos es volver a invocar la propia función ‘sum’ con una peculiaridad, hemos sacado el primer elemento del array.</li>
<li>Esto lo hemos hecho con una nueva funcionalidad que tenemos en JavaScript (gracias a ES6) llamada ‘<a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment" target="_blank">asignación por desestructuración</a>‘. La línea 5 nos permite ver de qué forma tan fácil podemos extraer el primer elemento y el resto. Pura magia.</li>
<li>En la línea 6 estamos haciendo el return de la función sumando el valor.</li>
</ul>
<p>Para que veamos mejor como se ejecuta, si hiciesemos una ejecución línea podríamos observar algo parecido a esto:</p>
<pre><code>{`1 + sum([2, 3, 4, 5, 6, 7, 8, 9])
1 + 2 + sum([3, 4, 5, 6, 7, 8, 9])
1 + 2 + 3 + sum([4, 5, 6, 7, 8, 9])
1 + 2 + 3 + 4 + sum([5, 6, 7, 8, 9])
1 + 2 + 3 + 4 + 5 + sum([6, 7, 8, 9])
1 + 2 + 3 + 4 + 5 + 6 + sum([7, 8, 9])
1 + 2 + 3 + 4 + 5 + 6 + 7 + sum([8, 9])
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + sum([9])
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + sum([])
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
1 + 2 + 3 + 4 + 5 + 6 + 7 + 17
1 + 2 + 3 + 4 + 5 + 6 + 24
1 + 2 + 3 + 4 + 5 + 30
1 + 2 + 3 + 4 + 35
1 + 2 + 3 + 39
1 + 2 + 42
1 + 44
45`}</code></pre>
<p>Como podéis imaginar,<strong> la recursividad es una técnica que consume un mayor número de recursos del computador</strong>. Es por eso que mucha gente llega a criticarlo. Sin embargo, estudiaremos en el futuro técnicas que nos ayuden a optimizar este tipo de algoritmos.</p>
<h2>¿Para qué nos es útil la recursividad?</h2>
<p>La recursividad es una técnica que se lleva muy bien con estructuras de datos que partan de un nodo raíz y del que vayan colgando diferentes nodos hijos. <strong>Las estructuras de datos en forma de árbol son idóneos para recorrer y hacer tomas de decisión por medio de recursividad.</strong></p>
<p>Existen algoritmos específicos como son el <a href="https://es.wikipedia.org/wiki/Vuelta_atr%C3%A1s">backtracking</a>&nbsp;o la <a href="https://es.wikipedia.org/wiki/Poda_alfa-beta" target="_blank">búsqueda con poda</a> que se basan en la recursividad.</p>
<p>En nuestro mundo, siendo por lo general frontenders los que usamos JavaScript, encontramos una estructura en forma de árbol muy conocida: El DOM. No es de extrañar por tanto que la programación funcional, JavaScript y el DOM se puedan llevar tan bien con la recursividad.</p>
<p>La recursividad es un buen método para criptografía. Trabajar con árboles que van generando claves dinámicas es una buena forma de practicar la recursividad.</p>
<h2>Conclusión</h2>
<p>Quizá no empecemos a usar la recursividad para solucionar todos los problemas del mundo. Pero si es una técnica a tener en cuenta ya que nos ayuda a dividir problemas complejos en casos más simples.</p>
<p>Como veremos en el futuro, librerías como <strong>ReactJS se basan en aplicar el paradigma funcional a la capa de interfaz</strong> y cómo vimos, no están muy desencaminados en su acercamiento viendo lo bien que se lleva la recursividad con el recorrido de árboles como lo son los nodos del DOM de nuestra aplicación.</p>
<p><strong>La recursividad siempre atrae críticas y escepticismo por la cantidad de recursos que necesitas para llegar a una solución</strong> que podría obtenerse por medios menos costosos, pero no os preocupeis porque intentaremos remediarlo por medio de técnicas de optimización en el futuro.</p>
<p>Por ahora, será mejor que nos quedemos con el concepto. Os animo a que practiquéis la recursividad por vosotros solos ya que es un concepto que se aprende fácil de forma teórica, pero que cuesta asimilar cuando queremos ponerlo en práctica en un problema real.</p>
<p>Esto es todo amigos. Nos leemos <img draggable="false" class="emoji" height="18px" weith="18px" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg"></img></p>
</div>
            
<div className='col-md-3'></div>

    </div>
    </div>
    </div>
   
  </Layout>

)

