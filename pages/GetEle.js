import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='GetEle'>
 <div>
    <div>geteElement</div>
     
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
<h1><code>getElementById</code> y <code>getElementsByTagName</code></h1>
            <h2 id="h-tc">Tabla de contenidos</h2>
            <ol id="tc">
                <li><a href="#gEBI"><code>getElementById</code></a></li>
                <li><a href="#gEBTN"><code>getElementsByTagName</code></a></li>
            </ol>
            <h2 id="gEBI"><code>getElementById</code></h2>
            <p>El método <code>getElementById</code> permite, como su nombre indica, seleccionar un elemento del documento por medio del valor del atributo <code>id</code> que se le haya asignado. Su sintaxis es la siguiente:</p>
            <pre><code>
    document.getElementById('<i>id_del_elemento</i>');
            </code></pre>
            <p>Por medio de esta línea podríamos elegir cualquier elemento cuyo identificador conozcamos para manipularlo posteriormente. Por ejemplo, por medio de <code>document.getElementById('contenido')</code> seleccionaríamos el elemento con <code>id="contenido"</code>.</p>
            <p>Como todo método, <code>getElementById</code> tiene que ser un método de un objeto; para éste y para todos los métodos que vamos a ver en esta sección sobre el <abbr>DOM</abbr>, el objeto del que dependen es <code>document</code>.</p>
            <p className="nota-importante">Existe también el método <code>getElementsByName</code>, que seleccionaría todos los elementos basándose en el atributo <code>name</code>. En <abbr title="«eXtensible HyperText Markup Language», Lenguaje de Marcado de HiperTexto eXtensible">XHTML</abbr> no es muy útil puesto que para la mayor parte de los elementos el uso de <code>name</code> como identificador ha sido depreciado en favor de <code>id</code>, pero es bueno saber que forma parte del arsenal a nuestra disposición a la hora de trabajar con elementos que pueden compartir <code>name</code> pero no, obviamente, <code>id</code>, como son los radiobotones y las casillas de un formulario. Para más información sobre ello, ver las notas del <a href="curso_2_3_g.php#input">elemento <code>input</code></a>.</p>
            <p className="nota-importante">Igual que existe <code>getElementById</code> uno podría esperar que existiera un método <code>getElementsByClassName</code> en la especificación del <abbr>DOM</abbr> <abbr title="«HyperText Markup Language», Lenguaje de Marcado de HiperTexto">HTML</abbr> 2, pero no es así. No obstante, <a href="http://www.robertnyman.com/2005/11/07/the-ultimate-getelementsbyclassname/" hreflang="en">Robert Nyman ha escrito una función con ese mismo fin (inglés)</a>.</p>
            <h2 id="gEBTN"><code>getElementsByTagName</code></h2>
            <p>Por medio de este método lo que se selecciona es una lista de nodos cuyo elemento es el especificado como parámetro; a cada uno de los nodos se le asigna un índice, de acuerdo al orden en el que aparecen en el marcado del documento. Su sintaxis:</p>
            <pre><code>
    document.getElementsByTagName('<i>elemento</i>');
    document.getElementsByTagName('<i>elemento</i>')[<i>índice_del_elemento</i>];
            </code></pre>
            <p>Con la primera línea de código obtenemos todos los elementos de un tipo, mientras que con la segunda elegimos una de ellos en concreto. Por ejemplo</p>
            <pre><code>{`
    document.getElementsByTagName('p');
            `}</code></pre>
            <p>nos devuelve una lista con todos los párrafos del documento, mientras que</p>
            <pre><code>
    document.getElementsByTagName('p')[3];
            </code></pre>
            <p>nos devuelve el cuarto<sup class="nota"><a href="#nota01" id="texto01">1</a></sup> párrafo.</p>
            <p>Algo que hay que recordar es que para seleccionar un elemento en concreto por medio de este método es necesario indicar el índice, incluso cuando sólo existe un elemento de su tipo. Por ejemplo, todos sabemos que un documento sólo puede tener un <code>body</code>, pero no podemos seleccionarlo por medio de <code>document.getElementsByTagName('body')</code>, puesto que esto devuelve una lista de nodos —aunque sólo contenga un único nodo—; la forma correcta de seleccionarlo sería <code>document.getElementsByTagName('body')[0]</code>.</p>
            <p>Por último, indicar que se pueden combinar los métodos vistos para seleccionar una lista de elementos dentro de un elemento concreto:</p>
            <pre><code>
    document.getElementById('contenido_adicional').getElementsByTagName('li');
    document.getElementsByTagName('div')[1].getElementsByTagName('li');
            </code></pre>
            <p>La primera línea nos devolvería una lista con ítems de lista del documento, pero restringida a aquellos descendientes dentro del elemento con <code>id="contenido_adicional"</code>. La segunda nos devolvería la lista de los <code>li</code> descendientes del segundo <code>div</code> del documento.</p>
            <p class="nota-importante">No voy a ofrecer aquí ejemplos concretos de empleo de los dos métodos, porque los voy a emplear constantemente en los ejemplos de las secciones siguientes.</p>
            <h2>Notas</h2>
            <ol id="notas">
                <li id="nota01">Como al trabajar con <a>matrices</a>, los índices de una lista de nodos parten de 0. <a><img src="./static/volver.png" alt="Volver"></img></a></li>
            </ol>
         
            
            </div>

<div className='col-md-3'></div>

  
 
   
    </div>
    </div>
   
  </Layout>
)





            
           
 

            