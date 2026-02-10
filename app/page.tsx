'use client'

import { Award, BarChart, Briefcase, Code, Mail, MapPin, Phone, Settings, Menu, X } from 'lucide-react';
import Image from 'next/image';
import ParticlesComponent from '../components/Particles';
import { useFormState, useFormStatus } from 'react-dom';
import { submitMessage } from './actions';
import { useEffect, useRef, useState } from 'react';

const initialState = {
  message: null,
  errors: null
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className="justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full transition-colors disabled:bg-gray-500"
    >
      {pending ? "Enviando..." : "Enviar Mensagem"}
    </button>
  );
}

export default function Home() {
  const [state, formAction] = useFormState(submitMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (state.message) {
      formRef.current?.reset();
    }
  }, [state]);


  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Particles - Client-side only */}
      <div className="fixed inset-0 z-0">
        {isClient && <ParticlesComponent id="tsparticles" />}
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <a href="#" className="flex items-center space-x-2 sm:space-x-4">
                  <Image
                    src="/logo-balanca.png"
                    alt="Logo da BalTech"
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <div className="flex items-center">
                    <h1 className="text-xl sm:text-2xl font-bold">
                      Bal<span className="text-blue-500">Tech</span>
                    </h1>
                  </div>
                </a>
              </div>
              {/* Desktop Nav */}
              <nav className="hidden md:block">
                <ul className="flex items-center space-x-4">
                  <li><a href="#servicos" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Serviços</a></li>
                  <li><a href="#sobre" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Sobre Nós</a></li>
                  <li><a href="#contato" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Contato</a></li>
                </ul>
              </nav>
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
                  <span className="sr-only">Open menu</span>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/80 backdrop-blur-md">
              <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <li><a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Serviços</a></li>
                <li><a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sobre Nós</a></li>
                <li><a href="#contato" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contato</a></li>
              </ul>
            </div>
          )}
        </header>

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative flex h-[calc(100vh-5rem)] items-center justify-center text-center">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-radial-gradient from-purple-600 to-transparent blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-radial-gradient from-teal-500 to-transparent blur-3xl opacity-30 animate-pulse-delay"></div>
              <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                  BalTech Solutions
                  </h2>
                  <p className="mt-4 text-xl sm:text-2xl text-gray-300">
                  Tecnologia alinhada à sua operação.
                  </p>
                  <div className="mt-10">
                  <a
                      href="#servicos"
                      className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-base md:text-lg"
                  >
                      Conheça Nossas Soluções
                  </a>
                  </div>
              </div>
          </section>

          <div className="space-y-16 md:space-y-24 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Services Section */}
            <section id="servicos" className="bg-slate-900/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-12 border border-slate-800">
              <div className="text-center">
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Nossas Soluções
                </h3>
                <p className="mt-4 text-lg text-gray-400">
                  Oferecemos uma gama de serviços para impulsionar o seu negócio.
                </p>
              </div>
              <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/60 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-slate-700">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-500 text-white mb-6">
                    <Code className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Desenvolvimento de Software</h4>
                  <p className="mt-4 text-gray-300">
                    Criamos soluções de software personalizadas e escaláveis para atender às necessidades específicas do seu negócio.
                  </p>
                </div>
                <div className="bg-slate-800/60 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-slate-700">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-500 text-white mb-6">
                    <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Consultoria em TI</h4>
                  <p className="mt-4 text-gray-300">
                    Nossos especialistas analisam sua infraestrutura de TI para otimizar processos e reduzir custos.
                  </p>
                </div>
                <div className="bg-slate-800/60 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-slate-700">
                  <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-500 text-white mb-6">
                    <Settings className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Integração de Sistemas</h4>
                  <p className="mt-4 text-gray-300">
                    Conectamos seus sistemas e aplicações para um fluxo de trabalho unificado e eficiente.
                  </p>
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <section id="sobre" className="bg-slate-900/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-12 border border-slate-800">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Sobre a BalTech
                  </h3>
                  <p className="mt-6 text-lg text-gray-400">
                    Somos uma equipe apaixonada por tecnologia e inovação. Nossa missão é fornecer soluções tecnológicas que se alinhem perfeitamente à operação dos nossos clientes, impulsionando o crescimento e a eficiência.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                      <div className="flex items-center justify-center lg:justify-start">
                          <Award className="h-8 w-8 text-blue-500" />
                          <p className="ml-3 text-lg font-medium text-white">Qualidade</p>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start">
                          <BarChart className="h-8 w-8 text-blue-500" />
                          <p className="ml-3 text-lg font-medium text-white">Inovação</p>
                      </div>
                  </div>
                </div>
                <div className="mt-12 lg:mt-0">
                  <img className="rounded-lg shadow-xl w-full h-auto" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nossa equipe" />
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contato" className="bg-slate-900/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-12 border border-slate-800">
              <div className="text-center">
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Entre em Contato
                </h3>
                <p className="mt-4 text-lg text-gray-400">
                  Pronto para transformar sua operação? Fale conosco.
                </p>
              </div>
              <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <form ref={formRef} action={formAction} className="grid grid-cols-1 gap-y-6">
                  <div>
                    <input type="text" name="fullName" placeholder="Nome completo" className="w-full shadow-sm py-3 px-4 rounded-md bg-slate-800/60 border border-slate-700 focus:ring-blue-500 focus:border-blue-500" />
                    {state.errors?.name && <p className="mt-2 text-sm text-red-500">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Email" className="w-full shadow-sm py-3 px-4 rounded-md bg-slate-800/60 border border-slate-700 focus:ring-blue-500 focus:border-blue-500" />
                    {state.errors?.email && <p className="mt-2 text-sm text-red-500">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <textarea name="message" rows={4} placeholder="Mensagem" className="w-full shadow-sm py-3 px-4 rounded-md bg-slate-800/60 border border-slate-700 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    {state.errors?.message && <p className="mt-2 text-sm text-red-500">{state.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                  {state.message && <p className="mt-4 text-center text-green-500">{state.message}</p>}
                </form>
                <div className="text-white space-y-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-gray-400">contato@baltech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Telefone</h4>
                      <p className="text-gray-400">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Endereço</h4>
                      <p className="text-gray-400">Av. Principal, 123, São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/70 backdrop-blur-sm mt-16 md:mt-24">
          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                  <div className="flex justify-center space-x-6 md:order-2">
                      <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                      <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808a6.78 6.78 0 01-.465 2.427 4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153 6.78 6.78 0 01-2.427.465c-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06a6.78 6.78 0 01-2.427-.465 4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772 6.78 6.78 0 01-.465-2.427c-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808a6.78 6.78 0 01.465-2.427 4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525a6.78 6.78 0 012.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.167a4.833 4.833 0 100 9.666 4.833 4.833 0 000-9.666zM12 15a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" /></svg></a>
                      <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                  </div>
                  <div className="mt-8 md:mt-0 md:order-1">
                      <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} BalTech Solutions. Todos os direitos reservados.</p>
                  </div>
              </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
