import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DemoIndex from './demo_page/Demo';
import HomeOne from './HomeOne';
import About from './pages/About';
import Categories from './category/Categories';
import CategoryDetailsLeftSidebar from './category/CategoryDetailsLeftSidebar';
import CategoryDetailsRightSidebar from './category/CategoryDetailsRightSidebar';
import Projects from './project/Projects';
import ProjectDetail from './project/ProjectDetail';
import BlogLeftSidebar from './blog/BlogLeftSidebar';
import BlogRightSidebar from './blog/BlogRightSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';
import BlogDetailsRightSidebar from './blog/BlogDetailsRightSidebar';
import Contact from './pages/Contact';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={DemoIndex}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-three`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/categories`} component={Categories}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/category-details-left-sidebar`} component={CategoryDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/category-details-right-sidebar`} component={CategoryDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details`} component={ProjectDetail}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} component={BlogLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-right-sidebar`} component={BlogRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`} component={BlogDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`} component={BlogDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                    <Route component={NoMAtch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();