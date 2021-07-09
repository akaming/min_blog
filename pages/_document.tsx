import Document from "next/document";
import React from "react";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const materialSheets = new ServerStyleSheets();
    const styledComponentsSheets = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            styledComponentsSheets.collectStyles(
              materialSheets.collect(<App {...props} />)
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      const styleTags = styledComponentsSheets.getStyleElement();
      const materialStyleTags = materialSheets.getStyleElement();
      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          styleTags,
          materialStyleTags,
        ],
      };
    } finally {
      // sheet.seal();
    }
  }
}
