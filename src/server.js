import express from "express";
import path from "path";
import compression from 'compression';

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import routes from "./app/routes";
import createStore from "./app/store";
import Layout from "./app/components/Layout";
import api from "./api/index";
import mustacheExpress from 'mustache-express';

const APP_URL = process.env.APP_URL ? process.env.APP_URL : 'localhost';
const APP_CONTEXT_PATH = process.env.APP_CONTEXT_PATH ? process.env.APP_CONTEXT_PATH : '';
const APP_PORT = process.env.APP_PORT ? process.env.APP_PORT : 9000;

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, "../dist"));
app.use(compression());

app.use(`${APP_CONTEXT_PATH}/static`,express.static(path.resolve(__dirname, "../dist")));
app.use(`${APP_CONTEXT_PATH}/static`,express.static(path.resolve(__dirname, "../public")));

app.use(`${APP_CONTEXT_PATH}/api`, api);

app.get('*', (req, res) => {
    const context = {};
    const store = createStore();

    const helmetContext = {};
    const dataRequirements =
        routes
            .filter(route => matchPath(req.url, route)) // filter matching paths
            .map(route => route.component) // map to components
            .filter(comp => comp.serverFetch) // check if components have data requirement
            .map(comp => store.dispatch(comp.serverFetch(req))); // dispatch data requirement

    Promise.all(dataRequirements).then(() => {
        const jsx = (
            <HelmetProvider context={helmetContext}>
              <Helmet>
                <title>Developer portal ApiCore</title>
              </Helmet>
              <ReduxProvider store={store}>
                <StaticRouter context={context} location={req.url}>
                    <Layout />
                </StaticRouter>
              </ReduxProvider>
            </HelmetProvider>
        );
        const reactDom = renderToString(jsx);
        const reduxState = store.getState();
        const { helmet } = helmetContext;
         res.render(`index.html`, {
          reduxState: JSON.stringify(reduxState),
          reactDom: reactDom, title: helmet.title.toString(),
          meta: helmet.meta.toString()
        })
    } );
} );

app.listen(APP_PORT, () => console.log(`Listen on ${APP_URL}:${APP_PORT}${APP_CONTEXT_PATH}`));
