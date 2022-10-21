import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '@/App';
import HtmlWritable from './htmlWritable';


let didError = false;

export function render(url: string, req: Request, res: Response, template: string) {
  const writable = new HtmlWritable();

  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
    {
      onShellReady() {
        // The content above all Suspense boundaries is ready.
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(writable);
      },
      onShellError(error) {
        // Something errored before we could complete the shell so we emit an alternative shell.
        res.statusCode = 500;
        res.send('<!doctype html><p>Loading...</p><script src="clientrender.js"></script>');
      },
      onAllReady() {
        // If you don't want streaming, use this instead of onShellReady.
        // This will fire after the entire page content is ready.
        // You can use this for crawlers or static generation.

        // res.statusCode = didError ? 500 : 200;
        // res.setHeader('Content-type', 'text/html');
        // stream.pipe(res);
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    },
  );

  writable.on('finish', () => {
    const html = writable.getHtml();
    const renderedTemplate = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    res.end(renderedTemplate);
  });

  return stream;
}
