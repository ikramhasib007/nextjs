import Link from 'next/link';
import Router from 'next/router';

const Index = () => (
    <div>
        <Link href="/about">
            <button style={{border: "none"}}>Got to the about page</button>
        </Link>
        <br/>
        <Link scroll={false} href={{pathname: "about", query:{counter:"10"}}}><a>Disables scrolling</a></Link>

        Click <span onClick={() => Router.push('/about')}>here</span> to read more
        <h1>Hello Next.js</h1>
    </div>
)

export default Index;