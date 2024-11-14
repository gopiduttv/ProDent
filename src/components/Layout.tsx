import Header from './common/Header'
import Footer from './common/Footer'


const Layout = (props) => {
  return (
    <div className={`flex flex-col min-h-screen ${props.className}`}>
        <Header />
        <main className="flex-grow pt-16">
          {props.children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout
