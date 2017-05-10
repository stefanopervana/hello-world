import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/Tutorial'><a>Tutorial: Intro To React</a></Link> |
        <Link href='/Before'><a>Before We Start</a></Link> |
        <Link href='/Overview'><a>Overview</a></Link> |
        <Link href='/RefrescoJS'><a>RefrescoJS</a></Link> |
        <Link href='/Ejemplos'><a>Ejemplos</a></Link> |
        <Link href='/Objetos'><a>Objetos</a></Link> |
        <Link href='/Eventos'><a>Eventos</a></Link> |
        <Link href='/ElDom'><a>El Dom</a></Link> |
        <Link href='/GetEle'><a>GetElement</a></Link> |
        <Link href='/Parent'><a>ParentNode</a></Link> |
        <Link href='/EjempPar'><a>EjemplosParent</a></Link> |
      </nav>
    </header>

    { children }

    <footer>
      Mi libro
    </footer>
  </div>
)
