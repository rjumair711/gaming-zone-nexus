import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Zones from './components/Zones';
import Booking from './components/Booking';
import Tournaments from './components/Tournaments';
import Membership from './components/Membership';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <Zones />
      <Booking />
      <Tournaments />
      <Membership />
      <Footer />
    </div>
  );
}
