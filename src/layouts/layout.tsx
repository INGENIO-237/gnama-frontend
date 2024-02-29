import Hero from "@/components/landing/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type Props = {
  children: React.ReactNode;
  showHero: boolean;
};

function Layout({ children, showHero = false }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
