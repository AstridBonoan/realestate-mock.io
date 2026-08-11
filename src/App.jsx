import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Membership from './pages/Membership'
import MembershipApplication from './pages/MembershipApplication'
import Investments from './pages/Investments'
import Contact from './pages/Contact'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename === '/' ? undefined : basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="membership" element={<Membership />} />
          <Route path="membership/apply" element={<MembershipApplication />} />
          <Route path="investments" element={<Investments />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
