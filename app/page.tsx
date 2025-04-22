import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navegação */}
      <header className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold flex items-center">
            ☕ Café Delícia
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#sobre" className="hover:text-blue-200 transition">
              Sobre
            </Link>
            <Link href="#menu" className="hover:text-blue-200 transition">
              Menu
            </Link>
            <Link href="#contato" className="hover:text-blue-200 transition">
              Contato
            </Link>
          </nav>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            <ShoppingBag className="mr-2 h-4 w-4" /> Fazer Pedido
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Desperte seus sentidos com nosso café</h1>
            <p className="text-xl mb-8 text-blue-100">
              Experimente o melhor café artesanal e doces caseiros da região, preparados com amor e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
                Ver Menu
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
                Fazer Reserva
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 overflow-hidden rounded-full border-4 border-white shadow-xl">
              <Image
                src="https://brewminate.com/wp-content/uploads/2017/05/Coffee53.jpg"
                alt="Café delicioso"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Bem-vindo ao <span className="font-semibold text-blue-600">Café Delícia</span>! Há mais de 10 anos,
              oferecemos os melhores cafés artesanais e doces caseiros para tornar seu dia mais especial. Nossa missão é
              proporcionar momentos de prazer e conforto através de produtos de alta qualidade e um ambiente acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center transform transition hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" x2="6" y1="2" y2="4"></line>
                  <line x1="10" x2="10" y1="2" y2="4"></line>
                  <line x1="14" x2="14" y1="2" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Café Premium</h3>
              <p className="text-gray-600">
                Selecionamos apenas os melhores grãos de café, torrados artesanalmente para garantir sabor e aroma
                incomparáveis.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center transform transition hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Doces Artesanais</h3>
              <p className="text-gray-600">
                Nossos doces são preparados diariamente com ingredientes frescos e receitas tradicionais que encantam
                paladares.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center transform transition hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M19 5h-7L8 19l-3-6H2"></path>
                  <path d="M22 5h-3l-4 8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ambiente Acolhedor</h3>
              <p className="text-gray-600">
                Criamos um espaço confortável e aconchegante para você desfrutar de momentos especiais sozinho ou com
                quem ama.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Informações e Contato */}
      <section id="contato" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Visite-nos</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Endereço</h3>
                      <p className="text-gray-600">
                        Rua das Flores, 123 - Centro
                        <br />
                        Rio Maria, PA - 01234-567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Horário de Funcionamento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 7h às 20h
                        <br />
                        Sábados e Domingos: 8h às 22h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Contato</h3>
                      <p className="text-gray-600">
                        (11) 9876-5432
                        <br />
                        contato@cafedelicia.com.br
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-4">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      <Instagram size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      <Facebook size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      <Twitter size={20} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensagem</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Receba Nossas Novidades</h2>
              <p className="text-blue-100">Inscreva-se para receber promoções exclusivas e novidades.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="px-4 py-2 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-100">Inscrever-se</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-extrabold text-white flex items-center">
                ☕ Café Delícia
              </Link>
              <p className="mt-2">Tornando seus dias mais deliciosos desde 2010.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#sobre" className="hover:text-white transition">
                Sobre
              </Link>
              <Link href="#menu" className="hover:text-white transition">
                Menu
              </Link>
              <Link href="#depoimentos" className="hover:text-white transition">
                Depoimentos
              </Link>
              <Link href="#contato" className="hover:text-white transition">
                Contato
              </Link>
              <Link href="#" className="hover:text-white transition">
                Política de Privacidade
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Café Delícia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Dados de exemplo
const menuItems = [
]

const testimonials = [
]

const galleryImages = [
]
