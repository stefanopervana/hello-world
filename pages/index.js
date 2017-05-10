import Layout from '../components/layout'
import Link1 from 'next/link'
import Head1 from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <Layout>
<div>
    <Head1>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head1>
    <header>
      <nav>
        <Link1 href='/'><a>Tutorial: Intro To React</a></Link1> |
        <Link1 href='/about'><a>Before We Start</a></Link1> |
        <Link1 href='/contact'><a>Overview</a></Link1>
      </nav>
    </header>

    { children }

    <footer>
      Mi libro
    </footer>
  </div>
    </Layout>
)