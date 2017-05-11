import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='AbismoNull'>
 <div>
    <div>Abismo Null</div>
     
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
<p><img src="/static/4693609597_43929640fe_b.jpg" height="500px" weight="500px"></img></p>

<blockquote><p>Los objetos y su herencia son como una matrioska&nbsp;infinita.</p></blockquote>
<p>Continuamos con la serie dedicada a programación funcional en JavaScript. Nos encontramos en unos primeros capítulos introductorios donde vamos a sentar las bases y aprendiendo poco a poco lo necesario.</p>
<p>Si el otro día hablábamos sobre el <a href="https://elabismodenull.wordpress.com/2016/10/12/la-programacion-funcional-en-javascript/" target="_blank">porqué usar programación funcional</a> puede ser una buena opción como estilo de programación y forma de pensar, hoy <strong>nos vamos a centrar en el porqué elegir JavaScript como lenguaje para programar funcionalmente es una buena opción</strong>.</p>
<p>Veremos también una <strong>comparación entre programación funcional y programación orientada objetos.</strong> Terminaremos el post explicando ciertas peculiaridades a la hora de <strong>usar los&nbsp;objetos JavaScript en un modelo como el funcional</strong> y <strong>explicaremos ciertos trucos para que nos puedan ser&nbsp;útiles</strong>.</p>
<p>¿Os interesa? ¿Continuais conmigo? Adelante:</p>
<p><span id="more-2954"></span></p>
<h2>¿Por qué JavaScript?</h2>
<p>Dentro de los pros y los grandes contras que puede llegar a tener un lenguaje como JavaScript hay que reconocerle una serie de logros importantes que la comunidad ha valorado siempre en su justa medida.</p>
<p><strong>JavaScript se está convirtiendo en un lenguaje omnipresente</strong>. Actualmente puedes desarrollar aplicaciones de toda índole usando JavaScript como lenguaje de programación: tanto aplicaciones de escritorio, como móviles, puedes desarrollar en Web, en su parte front y back, hasta puedes realizar trabajos de big data y machine learning con JavaScript.</p>
<p>Otra característica a tener en cuenta es su naturaleza híbrida. <strong>JavaScript es un lenguaje tan voluble o dinámico que podemos seguir varios estilos de programación tan distintos como lo son la programación funcional o la programación orientada a objetos</strong>. Este componente híbrido lo hace muy interesante porque podemos obtener ventajas de ambos estilos y crear un modelo de programación muy flexible.</p>
<p>Además, la comunidad que hay detrás del lenguaje es enorme. <strong>El lenguaje se encuentra en constante evolución y mejora</strong>. Actualmente nos encontramos en la versión 6 de su especificación. Esta versión nos ha traído una gran cantidad de mejoras que favorecen el uso de JavaScript como un lenguaje funcional. A lo largo de los post nos iremos haciendo eco de todas ellas.</p>
<p>Cómo véis es una opción a tener en cuenta. Esto <strong>no significa que JavaScript sea la única opción y puede que el&nbsp;lenguaje no sea tan bueno como lo puedan ser Scala, Haskell o F# para programación funcional,</strong> sin embargo sus características lo hacen una opción viable y cómoda para el programador.</p>
<h2>Programación funcional vs Programación Orientada a Objetos</h2>
<p>Como hemos dicho, JavaScript se nos presenta como un <strong>módelo híbrido que cuenta con&nbsp;elementos de la programación funcional y con elementos de la programación orientada a objetos</strong>.</p>
<p>Por tanto, sería bueno que comparásemos cuáles son las diferencias que presenta cada modelo y cual es el punto intermedio que nos gustaría usar en JavaScript para conseguir desarrollar funcionalmente.</p>
<p><strong>La programación orientada objetos pende del árbol de los lenguajes imperativos</strong>. La idea de la orientación a objetos es la de compactar un grupo de datos comunes que tengan un sentido lógico y que consigan abstraer una pequeña parte de nuestro dominio de negocio.</p>
<p>Un objeto cuenta con atributos y con métodos encargados de poder manipular estos valores. Por lo tanto,<strong> dentro de un objeto debe existir un gran acoplamiento entre los datos y los métodos que contiene internamente</strong>.</p>
<p><strong>La unidad de composición,</strong> de este estilo de programación por tanto, es<strong> el objeto</strong>. La composición se realiza por medio de herencia. Yo puedo en un modelo orientado a objetos hacer que un objeto hijo&nbsp;herede el comportamiento y los atributos de un objeto padre. De esta manera reutilizamos código.</p>
<p>La orientación a objetos favorece la mutación del estado de una aplicación, por tanto para conseguir una integridad de los datos, existen mecanismos de protección.<strong> La forma habitual de control de flujo son los bucles y los condicionales.</strong></p>
<p>La forma habitual de programar en orientación a objetos es la siguiente:</p>
<pre><code>{`
    class Person {
    constructor(name, lastname) {
        <span className="skimlinks-unlinked">this._name</span> = name;
        this._lastname = lastname;
    }

    getFullName() {
        return 'S{<span className="skimlinks-unlinked">this._name</span>} S{this._lastname}';
    }
}
const person = new Person('John', 'Doe');
person.getFullName(); // John Doe`}</code></pre>
<p>Esto es una clase de JavaScript con ES6. las palabras reservadas class y constructor son azúcar sintáctico. El concepto de clases en JavaScript no existe. En JavaScript se sigue un modelo de objetos prototípicos. Es un concepto mucho más dinámico que el concepto de clase que solo puede ser creado en tiempo de escritura. En JavaScript un objeto puede cambiar su forma y su composición en tiempo de ejecución gracias a este concepto de prototipos.</p>
<p>Sin embargo ya vemos muchas de las cosas que indicábamos en su descripción. Las funciones y atributos se encuentran muy acoplados. En un módelo funcional, la función ‘toString’, si es extraída de su objeto, puede provocar efectos secundarios ya que hace referencia a variables que no se han pasado por parámetros.</p>
<p>Además,<strong> el uso de ‘this’ en JavaScript es bastante peculiar ya que this puede apuntar a un dato diferente dependiendo de en qué contexto se esté ejecutando la función</strong>. Por lo tanto, trabajar con objetos en JavaScript es harto conflictivo.</p>
<p>El modelo funcional ya fue descrito en el anterior post, pero si podríamos hacer un resumen comparativo de lo que le define:</p>
<ul>
<li>La unidad de composición es la <strong>función</strong>.</li>
<li>Se usa un estilo de <strong>programación declarativo</strong>.</li>
<li><strong>No hay acoplamiento</strong> entre los datos y las funciones puras.</li>
<li>Trata los estado de un programa como <strong>valores inmutables</strong>.</li>
<li>El control de flujo se realiza por medio de <strong>funciones y recursividad</strong>.</li>
</ul>
<p>En programación funcional, el anterior ejemplo sería reescrito de la siguiente manera:</p>
<pre><code>{`function getFullName(person) {
    return 'S{<span className="skimlinks-unlinked">person._name</span>} S{person._lastname}';
};`}</code></pre>
<p>El objeto ahora no contiene comportamiento, la función se ha extraido, evitando el acoplamiento y los únicos valores con los que se trabaja son los que entran como parámetros de la función.</p>
<p>La función que se obtiene <strong>es bastante polimórfica porque acepta cualquier objeto de tipos Person, sus derivados o cualquier objeto que contenga los atributos ‘name’ y ‘lastname’</strong>.</p>
<p>Sin embargo, como vemos, compactar los valores dentro de entidades que tengan sentido lógico es una buena forma también de trabajar en programación funcional. Nos dan una mayor consistencia en cuanto a tipos y nos da mayor valor semántico.</p>
<p>Por cierto, – y como apunte personal – la función anterior podría quedar incluso más sencilla creando una expresión con una ‘lambda function’ de ES6:</p>
<pre>var getFullName = person =&gt; [<span className="skimlinks-unlinked">person.name</span>, person.lastname].join(' ');</pre>
<p>Lo que nos queda por ver, es como JavaScript nos permite lidiar con ambas funcionalidades (uso de objetos con funciones puras) sin que el modelo funcional se resista.</p>
<h2>Gestionar el estado con objetos JavaScript</h2>
<p>Con el estado de un programa, nos solemos referir a la imagen global que tenemos de todos los datos almacenados en los objetos de una aplicación en un instante de tiempo determinado.</p>
<p>Desafortunadamente, JavaScript suele ser muy criticado por el dinamismo que pueden presentar los objetos en tiempo de ejecución.<strong> Yo, en JavaScript, puedo crear, eliminar y modificar cualquier atributo de un objeto en tiempo de ejecución, sin que el programa dispare ninguna advertencia o error</strong>. Es uno de esas armas de doble filo con la que cuenta el lenguaje.</p>
<p>Además, los objetos en JavaScript no tienen un mecanismo de protección de&nbsp;sus&nbsp;datos. No podemos crear atributos privados. Cualquiera que manipule nuestro objeto, puede modificar el estado completo del mismo.</p>
<p>Por lo tanto, nos vemos inmersos en un pequeño problema. <strong>El estilo funcional defiende la premisa de mantener el estado de una aplicación lo más inmutable posible. Si los objetos JavaScript no presentan unas garantías sobre la integridad de los datos, nos puede ser difícil mantener este sistema funcional.</strong></p>
<p>La comunidad, con programadores más inteligentes que yo, ya ha pensado en ello y actualmente ya existen una serie de patrones que nos pueden ayudar a evitar que nuestros objetos presenten problemas de mutabilidad. Para este post os voy a exponer&nbsp;estos 3:</p>
<ul>
<li>Tratar a los objetos como valores</li>
<li>Deep-Freezing de miembros mutables</li>
<li>Navegar y modificar un object graph con lenses</li>
</ul>
<p>Vamos allá:</p>
<h3>Tratar los objetos como valores</h3>
<p>Como llevamos avisando, tenemos un problema a la hora de trabajar con objetos en JavaScript y es que el lenguaje como tal no nos lo pone facil para que estos sean inmutables.</p>
<p>Actualmente, ES6 cuenta con una nueva forma de trabajar con variables constantes gracias a la palabra reservada ‘const’. Pero, como <a href="https://elabismodenull.wordpress.com/2016/01/18/es6-const-y-la-inmutabilidad/">ya os explicaba en este otro post</a>,<strong>&nbsp;las propiedades de un objeto siguen sin ser inmutables aunque declaremos el objeto como ‘const’.</strong> Tiene su lógica ya que lo que hacemos inmutable es la referencia en memoria del objeto y no los valores del mismo. Por lo tanto, deberemos buscarnos una mejor forma de conseguir esta inmutabilidad de las propiedades.</p>
<p>Una buena estrategia que suele usar los lenguajes orientados a objetos es encapsular las propiedades de un objeto. Si nosotros como desarrolladores podemos indicar si una propiedad puede ser sobreescrita o no, podríamos decir que tenemos objetos inmutables.</p>
<p>Otro problema que surge con JavaScript es que tampoco existe la encapsulación de manera sintáctica en el lenguaje – JavaScript siempre ayudándonos – <strong>Todas las propiedades de un objeto en JavaScript son siempre públicas</strong>. Sin embargo, existen técnicas para poder fingir la encapsulación. <strong>Una buena aproximación es por medio del patrón Objeto Valor que se puede implementar en JavaScript</strong>. Estudiemos el siguiente código:</p>
<pre><code>{`function createPerson(name, lastname) {
    let _name = name;
    let _lastname = lastname;

    return {
        name: function () {
            return _name;
        },
        lastname: function () {
            return _lastname;
        },
        toString: function () {
            return 'S{_name} S{_lastname}';
        }
    };
}`}</code></pre>
<p>Ahora sí. Con esta función hemos conseguido crear un objeto que solo permite acceso de lectura a las propiedades y no de escritura. <strong>Tanto&nbsp;JavaScript como en muchos de los lenguajes funcionales, existe una funcionalidad propia de las funciones muy interesante denominada ‘closure’</strong>.</p>
<p>Aunque profundizaremos en el concepto en el próximo post, quedémonos, ahora mismo, con que <strong>el objeto con funciones que devuelve la función ‘createPerson’ tiene acceso a las variables internas de la función padre. El estado interno de la función padre (‘createPerson’) permanecerá</strong>.</p>
<p>Sí, si vienes de entornos imperativos es un concepto bastante raro porque cuando tu declaras una variable en un método, cuando este método o función ha terminado de ejecutarse, todas las variables de su contexto son eliminadas y no se mantiene el estado de las mismas. <strong>En funcional, gracias a los ‘closures’, no. Y es algo que hace a las funciones muy potente.</strong></p>
<p>Sin embargo, aunque hemos hecho progresos, <strong>el objeto que devuelve ‘createPerson’ todavía puede sufrir modificaciones (se pueden eliminar o modificar miembros y métodos) con lo que no aseguramos una inmutabilidad pura de los objetos</strong>. Necesitamos otras técnicas para esto.</p>
<h3>Deep-Freezing de miembros&nbsp;mutables</h3>
<p>En JavaScript no existe sintaxis especial para convertir un objeto en inmutable, sin embargo existe una funcionalidad muy útil que permite cambiar ciertas metapropiedades de los atributos de un objeto. Una de las metapropiedades indica si una propiedad dentro de un objeto es de escritura. Si ponemos esta metapropiedad a false, conseguiremos un objeto inmutable.</p>
<p>Para conseguir esto usamos el método Object.freeze():</p>
<pre><code>{`const person = Object.freeze({ 
    name: 'John',
    lastname: 'Doe'
});

<span className="skimlinks-unlinked">person.name</span> = 'Joan'; // Obtenemos un fallo.


`}</code></pre>
<p>Este método funciona correctamente con propiedades heredadas de objetos padre. Sin embargo, <strong>JavaScript nos la vuelve a jugar ya que ‘Object.freeze’, no funciona con las propiedades de un objeto interno</strong>. Esto ocurre en el siguiente ejemplo:</p>
<pre><code>{`const person = Object.freeze({ 
    name: 'John',
    lastname: 'Doe',
    address: {
        street: 'Hans Boulevar',
        number: '2'
    }
});

person.address.street = 'Alabama'; // En este caso si cambia la variable.</pre>
<p>Bueno, esto tiene solución.<strong> El lenguaje no nos ofrece nada sintácticamente para conseguir que todos los objetos que existan dentro de los objetos se conviertan en inmutables, pero la siguiente función puede hacerlo, recorriendo el objeto de manera recursiva</strong>:</p>
<pre>var isObject = (val) =&gt; val &amp;&amp; typeof val === 'object';

function deepFreeze(obj) {
    if (isObject(obj) &amp;&amp; !Object.isFrozen(obj)) {
        <span className="skimlinks-unlinked">Object.keys(obj).forEach(name</span> =&gt; deepFreeze(obj[name]));
        Object.freeze(obj);
    }
    return obj;
}`}</code></pre>
<p>La función anterior es bastante fácil de seguir: lo que hace es comprobar si el parámetro pasado es un objeto y si aún no ha sido ‘congelado’ con el método ‘Object.isFrozen’. Si cumple la condición, se crea un array con cada uno de los atributos y se recorre para recursivamente comprobar cada una.</p>
<p>El caso base se da cuando no existen más propiedades de tipo objeto. El resultado final es un objeto totalmente inmutable.</p>
<h3>Navegar y modificar un ‘object graph’ con ‘lenses’</h3>
<p>En orientación a objetos estamos muy acostumbrados a que el estado interno de un objeto cambie constantemente. En programación funcional esto no es una opción y sería recomendable no mutar estados. Como esto no es posible, la mejor solución sería crear una copia del objeto nueva que contenga el nuevo valor de la propiedad que deseamos cambiar.</p>
<p>Por ejemplo imaginemos que queremos cambiar el ‘lastname’ del objeto. Una buena opción sería esta:</p>
<pre><code>{`set lastname(newLastName) {
 return new Person(<span className="skimlinks-unlinked">this._name</span>, newLastName);
}`}</code></pre>
<p>De esta manera evitamos el cambio de estado, creando un objeto nuevo que tiene el comportamiento deseado. Tenemos muy controlado el cambio y se parece al ‘seteo’ de orientación a objetos.</p>
<p>El problema viene cuando nuestro objeto tiene una cantidad de propiedad y objetos internos mayor. La cantidad de código de infraestructura que tenemos que meter es bastante para lo que necesitamos hacer. Perdemos el foco de lo que debería ser importante, desarrollar lógica de negocio de nuestro dominio, no deberíamos hacer demasiado código para nuestros inventos.</p>
<p>Bueno, vemos que el copy-on-write no es muy práctico, pero nos ayuda a explicar lo que hace una librería como <a href="http://ramdajs.com/" target="_blank">RambdaJS</a>. Esta librería nos ayuda a incluir este mecanismo de write-on-copy en nuestras aplicaciones sin tener que ensuciar nuestros objetos. De esta manera podríamos tener un set y get más típicos de la programación orientada a objetos pero basándose en los principios funcionales.</p>
<p>Por ejemplo para hacer un ‘set’ y ‘get’ de un objeto ‘person’, lo haríamos así:</p>
<pre><code>{`const person = {
   name: 'John',
   lastname: 'Doe'
};
const lastnameLens= R.lenseProp('lastname');
R.view(lastnameLens, person); // get
R.set(lasntnameLens, 'Dorne', person); // set
`}</code></pre>
<h2>Conclusión</h2>
<p>JavaScript nos proporciona un módelo híbrido en el que podemos unir lo mejor de la programación funcional y lo mejor de la programación orientada a objetos. <strong>La línea imaginaria que nos marca donde usamos un estilo y donde usamos el otro, será una decisión que nosotros, como programadores, tendremos que tomar</strong>.</p>
<p><strong>Los objetos, en modelos funcionales, pueden ayudar a&nbsp;abstraer y almacenar, de una forma compacta, el estado de una aplicación</strong>. Tenemos que tener cuidado con los problemas que nos pueda ocasionar JavaScript y su diseño de los objetos. Si queremos seguir pensando de una forma funcional,<strong>&nbsp;intentaremos seguir, en la medida de lo posible,&nbsp;las técnicas que hemos explicado</strong>. Si es así, no debería existir mayor problema.</p>
<p>En el próximo post, hablaremos sobre las peculiaridades que podemos encontrarnos sobre las funciones en JavaScript, y como estas se convierten en el actor principal a tener en cuenta para llevar a cabo nuestro propósito funcional.</p>
<p>Nos leemos <img draggable="false" className="emoji" alt="🙂" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg" height="18px" weight="18px" ></img></p>
<p>Aquí os dejo el mapa conceptual del post:</p>

<p><img src="/static/javascript.png" height="320px" weight="320px"></img></p>
<p>Imagen de portada | <a href="https://c6.staticflickr.com/2/1303/4693609597_43929640fe_b.jpg" target="_blank">flickr</a></p>
<p>Veamos ahora <nav><Link href='/ANLasFunciones'><a>Las Funciones</a></Link></nav></p>
</div>            
<div className='col-md-3'></div>
 
    
    </div>
    </div>
   
  </Layout>

)
		