import Document, { Head, Main, NextScript } from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify()

    return {
      spriteContent,
      ...initialProps,
    }
  }

  render() {
    return (
      <html>
        <Head>{/* your head if needed */}</Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
