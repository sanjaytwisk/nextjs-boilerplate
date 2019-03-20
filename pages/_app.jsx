import React from 'react'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from 'store/store'
import { Provider } from 'react-redux'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
export default withRedux(initStore)(
  class CustomApp extends App {
    static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
      return { pageProps }
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)
