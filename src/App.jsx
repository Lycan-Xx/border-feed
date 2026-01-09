import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { ToastProvider } from './contexts/ToastContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CategoryPage from './pages/CategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

/**
 * Application root component that configures global providers, layout, and route mappings.
 *
 * The component wraps the app with a toast notification provider and cart provider,
 * renders a shared Layout, and defines routes for home, shop, category, product details,
 * checkout, success, about, and contact pages.
 *
 * @returns {JSX.Element} A React element tree for the application root with providers, layout, and routes.
 */
function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ToastProvider>
  )
}

export default App