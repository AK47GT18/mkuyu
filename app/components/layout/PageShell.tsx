import Navbar from './Navbar'
import Footer from './Footer'

interface PageShellProps {
  children: React.ReactNode
  transparentNav?: boolean
}

export default function PageShell({ children, transparentNav = true }: PageShellProps) {
  return (
    <>
      <Navbar transparent={transparentNav} />
      {children}
      <Footer />
    </>
  )
}
