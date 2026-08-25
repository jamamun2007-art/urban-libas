import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';

function AppContent() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        const authed = sessionStorage.getItem('admin_auth') === 'true';
        if (authed) setShowAdminPanel(true);
        else setShowAdminLogin(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        const authed = sessionStorage.getItem('admin_auth') === 'true';
        if (authed) setShowAdminPanel(true);
        else setShowAdminLogin(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (showAdminPanel) {
    return <AdminPanel onClose={() => setShowAdminPanel(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Collection />
        <Features />
        <About />
      </main>
      <Footer />
      <FloatingContact />
      <CartSidebar onCheckout={() => setShowCheckout(true)} />
      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
      {showAdminLogin && (
        <AdminLogin
          onLogin={() => { setShowAdminLogin(false); setShowAdminPanel(true); }}
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ProductProvider>
  );
          }
