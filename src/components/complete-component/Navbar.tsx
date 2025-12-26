import { useState } from 'react';
import Btn from '../short-components/Btn';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center p-4 gap-4 h-16 justify-between bg-white rounded-xl shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl ms-4 font-medium italic">Allbirds</h1>
        </div>

        {/* Menu Principal - Desktop */}
        <div className="hidden lg:flex justify-between flex-1 max-w-6xl mx-8">
          <div className="flex items-center space-x-8">
            <a href="#" className="italic text-lg font-serif hover:text-gray-600 transition-colors">Men</a>
            <a href="#" className="italic text-lg font-serif hover:text-gray-600 transition-colors">Women</a>
            <a href="#" className="italic text-lg font-serif hover:text-gray-600 transition-colors">Sale</a>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex gap-6">
              <a href="#" className="text-lg hover:text-gray-600 transition-colors">Our Stories</a>
              <a href="#" className="text-lg hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="text-lg hover:text-gray-600 transition-colors">ReRun</a>
            </div>
            
            <div className="flex gap-4 ml-4">
              <Btn icon={{iconTitle:'Pesquisar', solidIcon:'bx bx-search'}}/>
              <Btn icon={{iconTitle:'Usuario', solidIcon:'bx bx-user'}} />
              <Btn icon={{iconTitle:'FAQ', solidIcon:'bx bx-question-mark'}} />
              <Btn icon={{iconTitle:'Carrinho', solidIcon:'bx bx-cart'}} />
            </div>
          </div>
        </div>

        {/* Ícones do lado direito (mobile/tablet) */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="flex gap-2">
            <Btn icon={{iconTitle:'Carrinho', solidIcon:'bx bx-cart'}} />
            <Btn icon={{iconTitle:'Usuario', solidIcon:'bx bx-user'}} />
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div 
        className={`fixed inset-x-0 top-24 z-40 bg-white rounded-xl mx-4 shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Categorias */}
          <div className="space-y-4 border-b pb-6">
            <h2 className="font-serif text-gray-500 text-sm uppercase tracking-wider">Shop</h2>
            <a href="#" className="block text-xl italic font-serif hover:text-gray-600 transition-colors">Men</a>
            <a href="#" className="block text-xl italic font-serif hover:text-gray-600 transition-colors">Women</a>
            <a href="#" className="block text-xl italic font-serif hover:text-gray-600 transition-colors text-red-600">Sale</a>
          </div>
          
          {/* Links */}
          <div className="space-y-4 border-b pb-6">
            <h2 className="font-serif text-gray-500 text-sm uppercase tracking-wider">Discover</h2>
            <a href="#" className="block text-lg hover:text-gray-600 transition-colors">Our Stories</a>
            <a href="#" className="block text-lg hover:text-gray-600 transition-colors">About</a>
            <a href="#" className="block text-lg hover:text-gray-600 transition-colors">ReRun</a>
          </div>
          
          {/* Ícones Adicionais */}
          <div className="flex justify-around pt-4">
            <Btn icon={{iconTitle:'Pesquisar', solidIcon:'bx bx-search'}}/>
            <Btn icon={{iconTitle:'FAQ', solidIcon:'bx bx-question-mark'}} />
            <Btn icon={{iconTitle:'Contato', solidIcon:'bx bx-phone'}} />
          </div>
        </div>
      </div>

      
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}