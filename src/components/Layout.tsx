import Header from './common/Header'
import Footer from './common/Footer'
import GridPattern from './ui/grid-pattern'
import { cn } from '~/lib/utils'
import NavigationContextProvider from '~/providers/NavigationContextProvider'

const Layout = (props) => {
  return (
    <NavigationContextProvider>
      <div className={`flex flex-col min-h-screen ${props.className}`}>
        <Header />
        <GridPattern
          className={cn(
            '[mask-image:radial-gradient(400px_circle_at_center,blue,transparent)] md:[mask-image:radial-gradient(700px_circle_at_center,blue,transparent)]',
            'inset-x-0 inset-y-[-60%] h-[200%] skew-y-12',
          )}
        />
        <main className="flex-grow pt-16">{props.children}</main>
        <Footer />
      </div>
    </NavigationContextProvider>
  )
}

export default Layout
