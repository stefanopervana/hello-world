import Layout from '../components/layout'

const  pit = {  fontStyle: "italic",  fontSize: 25,  color: "#7A7A55" }  const
p = {  fontSize: 25,  color: "#5D5D70" }

 
const center =  {  maxWidth: 740,  paddingLeft: 20,  paddingRight: 20,  width:
800,  margin:  150,  marginTop:  150,  marginRight:  300,  marginBottom:  150,
marginLeft: 300,  position: "relative" }
    

export default () =>  (  <Layout  title='cosmic'>  <div style={center}><h1>How
to Build a Next.js React Universal App</h1>

<blockquote>Cosmic JS,   an  API-first  a   href="https://cosmicjs.com"  data-
<href="https://cosmicjs.com" rel="nofollow  noopener"  target="_blank">Content
<Management Platform  for  building  content-powered  apps./a>/blockquote> img
<src="/static/suuni.jpeg" />


<p      style={pit}><a      href="https://github.com/zeit/next.js/"      data-
href="https://github.com/zeit/next.js/"         rel="nofollow        noopener"
target="_blank">Next.js</a> es una sorprendente nueva adición al ecosistema de
código abierto React.  Se trata de “un framework minimalista para aplicaciones
universales React dictada por el servidor” que hace al proceso de construcción
de este tipo de aplicaciones mucho más rápido y más fácil. Hace poco  hice una
demostración de una nueva aplicación en la <a href="https://cosmicjs.com/apps"
data-href="https://cosmicjs.com/apps"  class="markup--anchor markup--p-anchor"
rel="nofollow  noopener"  target="_blank">Cosmic   JS  Apps  page</a>  que  se
construye utilizando  el  framework  Next.js.  He  construido  unas  pocas  <a
href="https://github.com/tonyspiro/react-universal-blog"                 data-
href="https://github.com/tonyspiro/react-universal-blog" class="markup--anchor
markup--p-anchor"  rel="nofollow  noopener"  target="_blank">React   Universal
apps</a> a partir de cero antes  y  me  encontré tomando la ruta Next.js  para
acelerar  un poco  las  cosas.  Y  la adición de la  capacidad  de gestión  de
contenidos de Cosmic JS a la estructura Next.js era muy intuitiva.</p>

<p style={p}>Next.js  is  an amazing new  addition to  the  React  open-source
<ecosystem. It  is  “a minimalistic framework  for  universal  server-rendered
<React applications”  that  makes  the process  of  building  these  types  of
<applications much  faster  and easier. Recently I  demoed  a new app on the a
<href="https://cosmicjs.com/apps" data-href="https://cosmicjs.com/apps"
<class="markup--anchor markup--p-anchor"        rel="nofollow        noopener"
<target="_blank">Cosmic JS  Apps  page/a>  that  is  built  using the  Next.js
<framework. I’ve  built  a  few   a  href="https://github.com/tonyspiro/react-
<universal-blog" data-href="https://github.com/tonyspiro/react-universal-blog"
<class="markup--anchor markup--p-anchor"        rel="nofollow        noopener"
<target="_blank">React Universal  apps/a>  from scratch  before  and  I  found
<taking the  Next.js route  to  speed things  along  quite  a bit.  And adding
<content management  capability from Cosmic  JS to  the Next.js  structure was
<very intuitive./p> p style={pit}>En este tutorial voy a mostrar cómo construí
<la aplicación Next.js y el contenido integrado impulsado por Cosmic JS.  Esta
<aplicación completa  está  disponible en la a href="https://cosmicjs.com/apps
</nextjs-website" data-href="https://cosmicjs.com/apps/nextjs-website"
<class="markup--anchor markup--p-anchor"        rel="nofollow        noopener"
<target="_blank">Cosmic JS  Apps  page/a>  para  descargar,  cortá, instalá  e
<implementala en vivo./p>

<p style={p}>In this tutorial I’m going to show you  how  I built  the Next.js
application and  integrated  content  powered by Cosmic  JS. This  full app is
available    on   <a   href="https://cosmicjs.com/apps/nextjs-website"   data-
href="https://cosmicjs.com/apps/nextjs-website" class="markup--anchor markup--
p-anchor" rel="nofollow noopener" target="_blank">the  Cosmic JS Apps page</a>
for you to download, hack, install and deploy live.</p>

<h3>Let’s get started by creating our app and installing next:</h3> <pre>mkdir
next.js-website<br></br> cd next.js-website<br></br> yarn add next</pre>

<h3>Creating Pages/h3>

<p style={pit}>Vamos a  empezar por la  creación de nuestra  aplicación  y  la
<instalación de al lado:/p>

<p style={p}>Now lets create a  new folder to  hold our  pages.</p> <pre>mkdir
pages</pre>  <p  style={pit}>Con  Next.js,  cualquier  página  que añadimos  a
nuestra carpeta  de páginas  estará disponible  en su correspondiente URL. Así
index.js  estará  disponible  en<code>  /</code>  y  <code>about.js</code>  se
encuentra en <code>/about</code> y así  sucesivamente.  Primero vamos a  crear
nuestro    archivo    <code>index.js</code>.    Agregá    lo    siguiente    a
<code>index.js</code>:</p>

<p style={p}>With  Next.js, any page  that we add to  our pages folder will be
available  at  its  corresponding  url.  So  index.js  will  be  available  at
<code>/</code>  and about.js  will be found  at <code>/about </code>and so on.
Let’s first  create our  <code>index.js</code>  file.  Add  the  following  to
<code>index.js</code>:</p>  <pre>import  React  from  'react'<br></br>  export
default  class   Home   extends  React.Component  &#123;<br></br>  render   ()
&#123;<br></br>  return      &lt;div&gt;Hello       World&lt;/div&gt;<br></br>
&#125;<br></br>  &#125;</pre>  <p style={pit}>Ahora  vamos  a  correr  nuestro
servidor Next para ver nuestra página:</p>

<p  style={p}>Now  let’s   start   our  next  server  to  see   our  page:</p>
<pre>next</pre>  <p style={pit}>Andá a  <a href="http://localhost:3000"  data-
href="http://localhost:3000"      class="markup--anchor      markup--p-anchor"
target="_blank">http://localhost:3000</a>  para   ver  nuestro  ejemplo  Hello
World.  A  continuación vamos  a  añadir  otra  página  para  mostrar  nuestro
contenido   de   la  página   <code>about</code>.  En   un   archivo  titulado
<code>about.js</code> añadí:</p>

<p style={p}>http://localhost:3000 to see our Hello World example.  Next let’s
add another page to show our <code>about</code> page content. In a file titled
<code>about.js</code>  add:</p> <pre>import React from 'react'<br></br> export
default   class  Home  extends   React.Component  &#123;<br></br>  render   ()
&#123;<br></br>  return        &lt;div&gt;About        me&lt;/div&gt;<br></br>
&#125;<br></br>  }</pre>  <p style={pit}>A continuación,  ejecutá next.  Ahora
andá        a        <a        href="http://localhost:3000/about"        data-
href="http://localhost:3000/about"   class="markup--anchor   markup--p-anchor"
target="_blank">http://localhost:3000/about</a> para ver esta página.</p>

<p     style={p}>Then     run     next     again.     Now     go     to     <a
href="http://localhost:3000/about"     data-href="http://localhost:3000/about"
class="markup--anchor                                        markup--p-anchor"
target="_blank">http://localhost:3000/about</a>  to  see  this  page.</p>   <p
style={pit}>Podríamos  codificar  el contenido para  todas  nuestras  páginas,
pero para nuestros propósitos, vamos a  conectar el Cosmic  JS API  por lo que
podemos   dejar que nuestro equipo de  añadir  y editar  contenido mediante el
Cosmic JS CMS  API.  Por cada página  que queremos ser  capaz de  tirar de esa
página específica de la API  de  JS cósmica  y servir  el  contenido a nuestra
aplicación Next.js.</p>

<p style={p}>We could hard code the content for all of our pages,  but for our
purposes, let’s hook up the Cosmic  JS API so we can let our team add and edit
content using the Cosmic  JS CMS API. For each page we want to be able to pull
that specific page from the Cosmic JS API and serve the content to our Next.js
application.</p>  <h3>Adding Cosmic  JS-Powered Content</h3> <p style={pit}>En
primer lugar instalá el módulo Cosmic JS NPM:</p>

<p style={p}>First  install  the   Cosmic   JS  NPM  module:/p>  pre>yarn  add
<cosmicjs/pre> p  style={pit}>A continuación, creá una nueva  carpeta titulada
<modelos y añadí lo siguiente en un archivo titulado cosmic.js:/p>

<p style={p}>Then create a new folder titled models and add the following to a
file  titled  cosmic.js:</p>   <pre>const  config  =  &#123;<br></br>  bucket:
&#123;<br></br>  slug: 'nextjs-website' / / add your bucket slug here<br></br>
&#125;<br></br>  &#125;<br></br> import Cosmic from 'cosmicjs'<br></br> export
default  &#123;<br></br>  getPage(slug)   &#123;<br></br>  const  data  =  new
Promise(resolve  =&gt;  &#123;<br></br>  Cosmic.getObject(config, &#123;  slug
&#125;,     (err,    res)     =&gt;     &#123;<br></br>  resolve(res)<br></br>
&#125;)<br></br>  &#125;)<br></br>  return      data<br></br>  &#125;<br></br>
&#125;</pre> <p  style={pit}>Así que el propósito  de esta pieza de  código es
tomar cualquier cosa  que slug  suministra a la función <code>“getPage”</code>
y renderizar el Objet Cosmic JS.</p>

<p style={p}>So the purpose of this piece of code is to take whatever  slug is
supplied  to the  <code>“getPage”</code>  function  and render the  Cosmic  JS
Object.</p> <h3>Dynamic Pages</h3> <p style={pit}>Vamos a crear una estructura
de  página básica  para todas  nuestras  páginas.  Creá una  carpeta  titulada
<code>“templates”</code> y añadí el  siguiente archivo  titulados <code>basic-
page.js</code>:</p>  <p style={p}>Let’s create a basic  page structure for all
of our  pages.  Create  a folder  titled <code>“templates”</code> and  add the
following file   titled <code>basic-page.js</code>:</p> <pre>import React from
'react'<br></br>  export  default   class  BasicPage  extends  React.Component
&#123;<br></br>  render()         &#123;<br></br>  const        page         =
this.props.page<br></br>  return              (<br></br>  &lt;div&gt;<br></br>
&lt;main&gt;<br></br>  &lt;h1&gt;&#123;page.title&#125;&lt;/h1&gt;<br></br>
&lt;div                            dangerouslySetInnerHTML=&#123;&#123;__html:
page.content&#125;&#125;/&gt;<br></br>  &lt;/main&gt;<br></br>
&lt;/div&gt;<br></br>  )<br></br>  &#125;<br></br>  &#125;</pre>

<p style={pit}>A    continuación    vamos    a    editar    nuestro    fichero
<code>index.js/code> para incluir lo siguiente:/p>

<p  style={p}>Next  let’s edit our  <code>index.js</code> file to include  the
following:</p> <pre>import React from  'react'<br></br> import  BasicPage from
'../templates/basic-page'<br></br>          import         Cosmic         from
'../models/cosmic'<br></br> export default  class Home extends React.Component
&#123;<br></br>  static async getInitialProps () &#123;<br></br>  return await
Cosmic.getPage('home')<br></br>  &#125;<br></br>  render   ()  &#123;<br></br>
const     page     =     this.props.object<br></br>  return      &lt;BasicPage
page=&#123;page&#125;/&gt;<br></br>  &#125;<br></br>  &#125;</pre>          <p
style={pit}>Ahora hemos creado una plantilla  de página básica que renderizará
el   título   de  la  página   y   el   contenido.   Y   en   nuestro  archivo
<code>index.js</code>,       antes       de       renderizar,  la      función
<code>getInitialProps</code> buscará  el contenido de la página Cosmic JS API.
Ahora, para nuestra página <code>about</code>,  todo lo que  necesitamos hacer
es cambiar la slug. <code>about.js</code> ahora se ve así:</p>

<p style={p}>Now we  have created a basic page  template  that will render the
page  title  and  content.  And in our  index.js file,  before rendering,  the
<code>getInitialProps</code>  function  will  fetch the page  content from the
Cosmic JS API.  Now for our  about page, all we need to do is change the slug.
<code>about.js</code>  now   looks  like  this:</p>  <pre>import   React  from
'react'<br></br>  import  BasicPage   from  '../templates/basic-page'<br></br>
import  Cosmic  from  '../models/cosmic'<br></br>  export  default class  Home
extends  React.Component   &#123;<br></br>  static  async  getInitialProps  ()
&#123;<br></br>  return         await         Cosmic.getPage('about')<br></br>
&#125;<br></br>  render      ()       &#123;<br></br>  const      page       =
this.props.object<br></br>  return                               &lt;BasicPage
page=&#123;page&#125;/&gt;<br></br>  &#125;<br></br>  &#125;</pre>          <p
style={pit}>Ahora ejecutá la aplicación:</p>

<p style={p}>Now  run the application:/p> pre>next/pre> p style={pit}>Navegá a
</ and /about y observá  que  el contenido Cosmic JS viene  a través  no  sólo
<cuando ve la fuente  (lado del servidor),  pero  también  se renderiza en  el
<cliente como una aplicación universal React./p>

<p  style={p}>Navigate to / and /about  and notice  that the Cosmic JS content
comes through not only when you view source (server side) but it also  renders
on the client as a React Universal Application.</p> <h3>In  Conclusion</h3> <p
style={pit}>Así que cuando se crea una  aplicación  universal React utilizando
el  framework  Next.js había un montón de cosas que no tenía que hacer:  yo no
tenía para establecer  react-router. Yo no  tengo que configurar Flux o  Redux
para administrar el estado.  Yo no tengo que hacer ningún Node.js del lado del
servidor de codificación.  No he  tenido que  hacer un  montón (o  cualquier!)
Webpack configuración para  hot-loader y el paquete  de  enrutamiento. Así que
sí,  me  ahorró  un  montón  de tiempo en  la configuración  de  la plancha de
caldera  y  de  configuración utilizando  el framework Next.js para lograr mis
necesidades  universales  React.  Realmente  es   una   pieza  notable  de  la
tecnología y tengo muchas ganas de ver   hacia dónde se  dirigirá al lado (sin
doble sentido).</p>

<p style={p}>So  when creating a React universal application using the Next.js
framework there was a  lot of stuff I didn’t have  to do: I didn’t have to set
up react-router. I  didn’t have  to set  up  Flux or Redux to manage  state. I
didn’t have to do  any server-side node.js coding. I didn’t  have to  do a lot
(or any!) webpack configuration for hot-reloading and  bundle routing. So yea,
I  saved a  TON  of  time  on boilerplate setup  and config  using the Next.js
framework  to accomplish my universal React  needs. It really  is a remarkable
piece of tech and I’m looking forward  to see  where it  will go next  (no pun
intended).</p>  <p  style={pit}>Espero que disfrutes este  tutorial.  Si usted
tiene alguna pregunta acerca  de la  configuración  de su aplicación universal
Next.js   con   motor  Cosmic  JS  llegar   a  nuestro   a   nosotros  en   <a
href="https://cosmicjs.com/community"                                    data-
href="https://cosmicjs.com/community"  class="markup--anchor markup--p-anchor"
rel="nofollow  noopener"  target="_blank">nuestra  comunidad  Slack</a>  o  <a
href="https://twitter.com/cosmic_js" data-href="https://twitter.com/cosmic_js"
class="markup--anchor      markup--p-anchor"      rel="nofollow      noopener"
target="_blank">en Twitter</a> .</p>

<p style={p}>I hope you enjoyed this tutorial. If you have any questions about
setting up your Cosmic JS-powered  Next.js Universal App reach our to us in <a
href="https://cosmicjs.com/community"                                    data-
href="https://cosmicjs.com/community" class="markup--anchor  markup--p-anchor"
rel="nofollow   noopener"   target="_blank">our   Slack  community</a>  or  <a
href="https://twitter.com/cosmic_js" data-href="https://twitter.com/cosmic_js"
class="markup--anchor      markup--p-anchor"      rel="nofollow      noopener"
target="_blank">on Twitter</a>.</p>

</div>  </Layout> )


