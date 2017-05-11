import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ProFun'>
 <div>
    <div>ProFun</div>
     
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
<p><img src="/static/5482493912_317210223b_b.jpg" height="500px" weight="500px"></img></p>

<header className="entry-header">
					<span className="entry-meta entry-meta-categories"><a href="https://elabismodenull.wordpress.com/category/javascript/" rel="category tag">JavaScript</a>, <a href="https://elabismodenull.wordpress.com/category/programacion-funcional/" rel="category tag">Programación Funcional</a></span>
				<h1 className="entry-title">La Programación Funcional en&nbsp;JavaScript</h1>		<p className="entry-meta entry-meta-time">
						<a href="https://elabismodenull.wordpress.com/2016/10/12/la-programacion-funcional-en-javascript/"><span className="posted-on"><span className="screen-reader-text">Posted on </span><time className="entry-date published" datetime="octubre 12"><i className="fa fa-clock-o"></i>octubre 12</time></span></a> <span className="byline">by <span className="author vcard"><a className="url fn n" href="https://elabismodenull.wordpress.com/author/jdonsan/">jdonsan</a></span></span>		</p>
	</header>

	<div className="entry-content">
<p><img src="/static/javascript.png" height="320px" weight="320px"></img></p>
<blockquote><p>Cada eslabón, una función. Cada cadena, una aplicación.</p></blockquote>
<p>Hoy empiezo, en el blog, una nueva serie de posts orientados a <strong>mostrar todo aquello que estoy aprendiendo, durante estos últimos meses, sobre programación funcional en JavaScript.</strong></p>
<p>La serie va estar compuesta por un total de <strong>8 posts. </strong>Estos posts explicarán todos aquellos conceptos que se nos suelen resistir&nbsp;cuando intentamos encarar un nuevo desarrollo bajo el prisma de la programación funcional.</p>
<p>Para realizar esta serie, me voy a apoyar en <a href="https://www.manning.com/books/functional-programming-in-javascript" target="_blank">este</a>&nbsp;libro. El libro es uno de los referentes habituales en programación funcional, con una curva de aprendizaje ideal para perfiles noveles e intermedios en esta técnica de programación.</p>
<p>El capítulo de hoy nos servirá como&nbsp;introducción de la serie, como la base que nos guíe hacia&nbsp;nuestro objetivo. Nos ayudará en el futuro a entender todos los&nbsp;términos y técnicas necesarios en&nbsp;programación funcional.</p>
<p>Espero que la idea os guste y que lo disfruteis tanto como yo. Empecemos:</p>
<p><span id="more-2658"></span></p>
<h2>¿Qué es la Programación Funcional?</h2>
<p>A la hora de encarar nuestros desarrollos podemos seguir técnicas y acercamientos muy diferentes entre sí. Estas diferencias suelen denominarse paradigmas y suponen una forma de pensamiento y de diseño lógico específica para cada una de ellas.</p>
<p>Nuestra forma habitual de programar, esa que llevamos años perfeccionando desde que empezamos en este mundillo, suele ser por medio enlazar sentencia una detrás de otra, sabiendo que se van a ir ejecutando de una forma secuencial de arriba a abajo. Este estilo de programación es lo que conocemos como programación imperativa.</p>
<p>Sin embargo, no es la única forma de desarrollar aplicaciones y otros estilos&nbsp;de programar llevan ya años poniéndose en uso, la programación funcional es uno de ellos. <strong>La programación funcional es aquel estilo de desarrollo software que hace mayor énfasis en el uso de funciones. El objetivo de la programación funcional (a partir de ahora PF) es la de abstraernos del control de flujo y de las operaciones de una aplicación por medio de funciones para conseguir que evitemos todos los efectos secundarios&nbsp;provocados por el uso de estados globales y mutables.</strong></p>
<p>La PF es una forma de programar que nos ayuda en aspectos muy importantes para los programadores como son <strong>la posibilidad de&nbsp;escribir código de una forma más expresiva</strong>. El código expresivo ayuda a que podamos entender mejor lo que se está intentando desarrollar. Cuanto más expresivo es nuestro código, es decir, cuanto más se parezca nuestro código al lenguaje natural, mejor para su legibilidad.</p>
<p>La PF&nbsp;también&nbsp;<strong>nos ayuda a crear aplicaciones más limpias, modulables y testeables</strong>. Quizá en otros paradigmas también, pero como veremos a lo largo de la serie con ejemplos y comparaciones con otros paradigmas, la PF lo realiza de una forma elegante y robusta.</p>
<p>Nos ayuda, como decíamos anteriormente, a <strong>cometer menos errores</strong>. Su propia naturaleza hace que sea más complicado realizar ciertas acciones para que nos equivoquemos.</p>
<p>Incluso la PF&nbsp;<strong>es un buen mecanismo para protegernos del propio JavaScript</strong>. Muchos de los problemas que presenta este lenguaje de programación vienen provocados por dos factores: un mal diseño de ciertas funcionalidades y un mal uso&nbsp;del lenguaje.</p>
<p>JavaScript es un lenguaje muy voluble que permite trabajar con estilos muy diversos. Sin embargo, <strong>programar de forma funcional en JavaScript, hará&nbsp;que saquemos mayor partido del lenguaje y que aprovechemos mejor muchas de sus posibilidades</strong>.</p>
<p>Como veis, con los conocimientos que tenemos de PF, nos da para hacer una definición de lo que es bastante vaga y difusa. Para definir&nbsp;mejor&nbsp;lo que es la PF,antes necesitamos entender estos cuatro aspectos fundamentales:</p>
<ul>
<li>Programación declarativa</li>
<li>Funciones puras</li>
<li>Transparencia referencial</li>
<li>Inmutabilidad.</li>
</ul>
<p>Entremos un poco en detalle en cada uno de estos términos:</p>
<h2>Programación declarativa</h2>
<p>La PF se encuentra dentro del conjunto de los lenguajes de programación declarativos. Si anteriormente explicábamos que la programación imperativa se caracterizaba por indicar al ordenador <strong>cómo</strong> debía hacer las cosas, la programación declarativa se basa en indicar al ordenador <strong>qué</strong> debe hacer.</p>
<p>Para explicar esto, es mejor que lo veamos con un ejemplo. Vamos a obtener el cuadrado de todos los elementos de un array numérico. Primero escribamos la solución típica al estilo imperativo:</p>
<pre><code>{`var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i &lt; array.length; i++) {
&nbsp; &nbsp; array[i] = <span className="skimlinks-unlinked">Math.pow(array</span>[i], 2);
}
array; // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`}</code></pre>
<p>Creamos un array, lo recorremos y vamos asignando el nuevo valor en el índice correspondiente. Como vemos, estamos en todo momento indicando cómo se tienen que hacer las cosas. Sin embargo, si ese código lo convertimos al estilo declarativo, optariamos por una opción parecida a esta:</p>
<pre><code>{`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num =&gt; <span className="skimlinks-unlinked">Math.pow(num</span>, 2));
// [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`}</code></pre>
<p>En esta ocasión hemos cedido la gestión del bucle a otra parte del sistema (la función map se encarga de ello). <strong>La programación declarativa&nbsp;se centra en el uso de expresiones para describir la lógica de un programa sin tener que especificar el flujo o los cambios de estados que se producen, eso se delega en una función</strong>. De esta forma obtenemos un código de primer nivel encargado de ir expresando qué necesita hacer.</p>
<p>Un ejemplo de programación declarativa es SQL. SQL es un lenguaje encargado de describir sentencias que indican que colecciones&nbsp;quiero obtener de una base de datos. En ninguno momento nosotros podemos saber cual es el mecanismo por el cual los datos son obtenidos. Conseguimos abstraernos por medio de cajas negras. <strong>La programación declarativa y por tanto la funcional es una experta en el trabajo con cajas negras.</strong></p>
<p>La mejor forma de conseguir cajas negras perfectas en por medio del uso de funciones puras.</p>
<h2>Funciones puras</h2>
<p>La PF se basa en la premisa de <strong>poder construir programas inmutables por medio de pequeños bloques lógicos</strong>. Estos pequeños bloques de lógica&nbsp;lo que llamamos funciones.</p>
<p>Dentro de lo posible, tenemos que intentar conseguir desarrollar funciones lo más puras posibles. Una función pura se caracteriza por las siguientes cualidades:</p>
<ol>
<li>Una función pura <strong>solo depende de los parámetros de entrada proporcionados</strong> y no de ningún estado externo a la función que podría cambiar durante la evaluación o entre llamadas.</li>
<li>Una función pura <strong>no inflige cambios más allá de su ámbito</strong>. Por lo tanto, no tiene que modificar estados globales, ni estados que han pasado por referencia.</li>
</ol>
<p>Veamos un ejemplo de una función. Pensemos si esta función se denominaría pura o impura dentro de la PF:</p>
<pre><code>{`var likes = 0;
function addLike() {
    return ++likes;
}`}</code></pre>
<p>Si seguimos la definición de función pura, sabemos al instante que esta función no cumple con lo explicado. <strong>La función addLike está modificando estados que no se encuentran en su ámbito y hace uso de una variable externa</strong>.</p>
<p>Con JavaScript tenemos que tener mucho cuidado con este tipo de aspecto pues es bastante normal el hacer uso de variables de ámbitos padre de una función, por lo que hay que corregir este comportamiento para que consigamos funciones puras.</p>
<p><strong>Las funciones puras nos ayudan a cometer menos errores y a cerciorarnos en todo momento como es el estado antes y después de ejecutar una función pura</strong>. Evitar este tipo de uso, hará que nuestro código sea más robusto y sea más fácil de testear. Para corregir la función anterior, lo que haríamos sería lo siguiente:</p>
<pre><code>{`function addLike(likes) {
&nbsp; &nbsp; return ++likes;
}
addLike(addLike(0)); // 2`}</code></pre>
<p>La función ahora no puede sufrir efectos secundarios porque tiene su estado bajo control, no depende de ningún estado externo.</p>
<p>Para que en el futuro podamos reconocer que puede provocar un efecto secundario en nuestro código, hay que tener en cuenta estas situaciones:</p>
<ul>
<li>Cuando cambiamos una variable, propiedad o dato estructurado global.</li>
<li>Cuando cambiamos un valor original del argumento de una función.</li>
<li>Cuando procesamos datos de entrada del usuario.</li>
<li>Cuando lanzamos excepciones.</li>
<li>Cuando mostramos datos por pantalla.</li>
<li>Cuando consultamos el DOM del HTML, las cookie o una base de datos.</li>
</ul>
<p>Muchos de estos efectos secundarios no podremos evitarlos ya que necesitamos realizar estas acciones si queremos acceder aplicaciones reales. Sin embargo, la PF nos va a ayudar a como delimitar estas partes y como tenerlas localizadas para que produzcan en menor daño posible.</p>
<h2>Transparencia referencial</h2>
<p>Otra de las características de las funciones puras es lo que llamamos transparencia referencial. Este término es la manera formal de explicar todo lo que dijimos en el apartado anterior.</p>
<p><strong>Una función es referencialmente transparente si de manera consistente devuelve los mismos resultados con los mismos datos de entrada.</strong> Por lo tanto, seguimos con lo mismo, si tu función depende de estados externos, es complicado que dada unos valores de entrada, siempre devuelva los mismos resultados de salida ya que en el camino de la caja negra, todas esas dependencias pueden cambiar el comportamiento de la función.</p>
<h2>Inmutabilidad</h2>
<p>El mayor número de bugs en una aplicación está producido por un mal control de los estados de una aplicación. Que un estado pueda cambiar puede hacer que no obtengamos lo esperado. Por lo tanto controlar los cambios de estados siempre tienen que ser de alto grado de preocupación en nuestra aplicación.</p>
<p>La aplicación perfecta sería aquella en la cual no existirían estados y si existiesen que los tengamos lo más controlados posibles. Si pudiésemos hacer que no cambiarán a lo largo de la aplicación mejor que mejor.</p>
<p>Lógicamente nuestras aplicaciones intentan abstraer problemas de la vida real donde existen datos que cambian y donde estos estados tenemos que mostrarselos a los usuarios. Por lo que lo único que podemos hacer es reducir el número de estados a los indispensables e intentar que los estados sean inmutables.</p>
<p><strong>Los estados inmutables ayudan a las funciones puras a devolver los valores esperados. Son grandes aliados de la transparencia referencial.</strong> Dado unos datos de entrada, yo te devuelvo unos resultados de salida diferentes.</p>
<p>En JavaScript tenemos problemas con esto. Los tipos simples como String, Number o Boolean son tipos inmutables. Cuando se modifica un estado se genera una nueva referencia del dato en memoria. Sin embargo, los Array y los Objetos son mutables. La referencia a su memoria siempre es la misma, si modificamos un atributo o un elemento el puntero continua.</p>
<p><strong>Esto puede provocarnos efectos secundarios ya que si a una función que creemos pura, le pasamos un objeto o array como parámetro, puede que internamente estemos modificando valores internos y que el estado de nuestra aplicación cambie</strong>, provocando que se rompa la transparencia referencial.</p>
<p>Iremos aprendiendo técnicas para evitar manipular estas estructuras de dato lo menos posible y mostraremos librerías que nos ayuden a hacer a los Arrays y Objetos inmutables.</p>
<h2>Entonces ¿Qué es en realidad la Programación Funcional?</h2>
<p>Después de adentrarnos un poco más en sus aspectos más básicos ya nos encontramos en condiciones de formular una definición mejor:</p>
<blockquote><p>La Programación Funcional se refiere a la&nbsp;evaluación declarativa de funciones puras para crear programas inmutables y así evitar efectos secundarios que son observados externamente.</p></blockquote>
<p>Casi nada.</p>
<h2>Los beneficios de la Programación Funcional</h2>
<p>Como veis, tendremos que cambiar nuestra forma de abstraer si queremos hacer uso de la PF. Hacer uso de la PF nos va a beneficiar porque nos va a aportar una serie de técnicas nuevas que nos ayudan a resolver problemas que en JavaScript hemos tenido siempre.</p>
<p>Por ejemplo y para acabar, centrémonos para este post en estas dos&nbsp;técnicas que se desprenden del conocimiento de la PF:</p>
<h2>La PF alienta a la descomposición de tareas complejas</h2>
<p>O el divide y vencerás que siempre nos inculcan. Si la unidad de trabajo es la función y estamos hablando que una función pura tiene que hacer uso del menor número de estados posibles y de ser así que sean inmutables, es de entender que la PF<strong> va a favorecer mucho a que descomponemos nuestro código en funciones que hagan acciones lo más concretas posibles</strong>.</p>
<p>En la PF se da una dicotomía curiosa:<strong> Pensar de manera funcional es un juego entre la descomposición y la composición. Descomponemos nuestro código en unidades de trabajo mínimas y componemos nuestros programas para que hagan lo que necesitamos a partir de estas funciones.&nbsp;</strong></p>
<p>La composición de funciones es clave y tenemos que beneficiarnos de ella para hacer que nuestros aplicativos están formados como piezas de un puzzle que se interconectan entre si para crear un flujo.</p>
<p>Entender la composición es clave para aprender como implementar la modularidad y la reutilización en programas funcionales. Todo lo que aprendamos durante estos posts irá muy dirigido a aprender buenas técnicas de descomposición y composición.</p>
<h2>La PF nos permite procesar datos como un flujo en cadena</h2>
<p>Las técnicas de Fluent Chain o Fluent API son ya muy conocidas en la comunidad con soluciones como LinQ en .Net o como en jQuery y Gulp en JavaScript.</p>
<p>Para conseguir este efecto en cadena, la idea es hacer que funciones de primer orden compartan un objeto común que permita encadenar este flujo de datos. Esta posibilidad nos muestra un código muy expresivo y declarativo ya que solo tenemos que preocuparnos de ir ejecutando transformaciones sobre nuestros datos. Nuestros datos se encuentran en un Stream donde se ejecutan transformaciones.</p>
<p>Pongamos un ejemplo en código imperativo y presentemos luego su forma funcional:</p>
<pre><code>{`let enrollment = [
    { enrrolled: 2, grade: 100 },
    { enrrolled: 2, grade: 80 },
    { enrrolled: 1, grade: 89 },
];

var totalGrades = 0;
var totalStudentsFound = 0;
for (let i = 0; i &lt; enrollment.length; i++) {
    let student = enrollment[i];
    if (student !== null) {
        if (student.enrolled &gt; 1) {
             totalGrades += <span className="skimlinks-unlinked">student.grade</span>;
             totalStudentsFound++;
        }
    }
}
var average = totalGrades  / totalStudentsFound; // 90`}</code></pre>
<p>Y la forma funcional:</p>
<pre><code>{`_.chain(enrollment)
    .filter(student =&gt; student.enrolled &gt; 1)
    .pluck('grade')
    .average()
    .value(); // 90`}</code></pre>
<p>Como véis el código funcional es mucho más entendible y expresivo. <strong>No nos preocupamos por cómo se hacen las transformaciones sino que nos preocupamos sobre que&nbsp;acciones queremos realizar.</strong></p>
<p>Es parecido a lo que buscamos con las promesas en JavaScript. Escribir llamadas asíncronas de una forma funcional y encadenada.</p>
<h2>Conclusión</h2>
<p>La Programación Funcional no va a ser mejor ni peor que otras técnica o estilos. Simplemente va a ser otra herramienta que nos pueda ayudar en nuestro camino. No es necesario que a partir de ahora dejemos de lado todo lo aprendido y empecemos como locos a crear todo de manera funcional. <strong>Muchas veces muchos paradigmas pueden convivir y lo que es bueno de manera funcional, no lo tiene que ser en otro caso</strong>. Por lo tanto, como siempre, cuidado y responsabilidad.</p>
<p>Nos espera un viaje trepidante en el blog. Como veis todavía no hemos hablado de temas específicos sobre JavaScript, pero habrá tiempo para explayarnos. <strong>Por ahora es importante que tengamos esta base para el resto de la serie</strong>.</p>
<h2>Para terminar…</h2>
<p>…os dejo el mapa conceptual que he realizado para prepararme el post. Quizá os pueda servir a alguno de vosotros:</p>
1000w, https://elabismodenull.files.wordpress.com/2016/10/la-programacic3b3n-funcional.png?w=150 150w, https://elabismodenull.files.wordpress.com/2016/10/la-programacic3b3n-funcional.png?w=300 300w, https://elabismodenull.files.wordpress.com/2016/10/la-programacic3b3n-funcional.png?w=768 768w, https://elabismodenull.files.wordpress.com/2016/10/la-programacic3b3n-funcional.png?w=1024 1024w, https://elabismodenull.files.wordpress.com/2016/10/la-programacic3b3n-funcional.png 1799w" sizes="(max-width: 1000px) 100vw, 1000px"></p>
<p>Si queréis aprender a realizar vuestros propios&nbsp;mapas conceptuales, <a href="https://twitter.com/rlbisbe?lang=es">Roberto Luis Bisbé</a> nos enseña en este <a href="http://rlbisbe.net/2016/08/19/organizando-conceptos-con-mapas-mentales/" target="_blank">posts</a>.</p>
<p>Nos leemos <img draggable="false" className="emoji" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg"></p>
<p>Imagen de portada | <a href="https://www.flickr.com/photos/33279673@N03/5482493912/in/photolist-9mtdr7-bjwW2K-6UqhFs-nGQ6NS-6Quz7x-7Vaid8-e7Y7bk-o6241i-dhDEHz-jsXser-nw6v7T-XjpkT-rBSuE7-2F2CU8-e3RrX8-qRMQyL-3i9KmV-bm4t2r-4Gm8uK-qUxzvF-dXT614-qeZrX1-nVJ2z4-fhxuuQ-5miqCK-qWys1-da2eeM-dHstF-P2sQ9-YmWF1-4vEWny-pVEF1C-qTMqKX-4M1RJT-kPesaE-25BYRZ-8eNQdX-eUhqJf-qxvk5z-5kJpXK-oXt5dv-4SYBmj-eTakum-nVxAs2-qzV375-pzUcFC-qrEonG-9WqEdU-8jxDjT-dMq34A" target="_blank">flickr</a></p>
			

</div>            
<div className='col-md-3'></div>
 
    
    </div>
    </div>
   
  </Layout>

)

<article id="post-2658" className="post-2658 post type-post status-publish format-standard hentry category-javascript category-programacion-funcional tag-javascript tag-programacion-funcional">
	
	