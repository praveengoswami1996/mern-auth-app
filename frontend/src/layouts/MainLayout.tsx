import Footer from "../components/Footer";
import Header from "../components/Header";

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
        <main>
            { children }  
        </main>
        <Footer />
    </>
  )
}

export default MainLayout