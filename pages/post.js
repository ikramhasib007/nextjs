import {withRouter} from 'next/router';
import Layout from '../components/MyLayout';
import {Fragment} from 'react';

const Content = withRouter((props) => (
    <Fragment>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog content page.</p>
    </Fragment>
))

const Page = () => (
    <Layout>
        <Content/>
    </Layout>
)

export default Page;