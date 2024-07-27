import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "sonner";

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
        <main>
            <Toaster 
              position="bottom-right"
              richColors
            />
            { children }  
        </main>
        <Footer />
    </>
  )
}

export default MainLayout