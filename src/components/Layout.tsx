import Header from './common/Header'
import Footer from './common/Footer'
import NavigationContextProvider from '~/providers/NavigationContextProvider'

const Layout = (props) => {
  return (
    <NavigationContextProvider>
      <div className={`flex flex-col min-h-screen ${props.className}`}>
        <Header data={props?.data} />
        <main>{props.children}</main>
        <Footer data={props?.data} />
      </div>
    </NavigationContextProvider>
  )
}

export default Layout
