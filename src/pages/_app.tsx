import '@/styles/globals.css'

import Header from '@/components/organism/Header'

import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
      <Header />
      <div className='layout mt-16 md:mt-24'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
