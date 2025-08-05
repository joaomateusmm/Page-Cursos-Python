import { useState } from "react";
import PropTypes from "prop-types";
import {
  UserRoundPen,
  Menu,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  X,
  BookUser,
  GraduationCap,
  Newspaper,
  Clapperboard,
} from "lucide-react";

// CORREÇÃO: Importando as imagens diretamente.
// Este é o método mais garantido para o build de produção.
// Certifique-se que a pasta 'assets' está dentro da pasta 'src'.
import bannerImageSrc from "./assets/banner.png";
import mediaImageSrc from "./assets/aula1.jpg";
import mediaImage2Src from "./assets/aula2.jpg";
import mediaImage3Src from "./assets/aula3.jpg";
import mediaImage4Src from "./assets/aula4.jpg";
import mediaImage5Src from "./assets/aula1md2.jpg";
import mediaImage6Src from "./assets/aula1md3.jpg";
import ebookimgSrc from "./assets/ebook.png";

const contactInfo = {
  email: "abraaohenrique.10@gmail.com",
  phone: "+5585998195457",
  phoneDisplay: "(+55) 85 9.9819-5457",
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

// CORREÇÃO: Usando as variáveis importadas
const coursesModule1 = [
  {
    id: 1,
    title: "Aula 1 - Módulo 1",
    imageUrl: mediaImageSrc,
    href: "https://youtu.be/eruUWJtOEvw",
  },
  {
    id: 2,
    title: "Aula 2 - Módulo 1",
    imageUrl: mediaImage2Src,
    href: "https://youtu.be/mmFYIa4wHG8",
  },
  {
    id: 3,
    title: "Aula 3 - Módulo 1",
    imageUrl: mediaImage3Src,
    href: "https://youtu.be/RndalthqMGw",
  },
  {
    id: 4,
    title: "Aula 4 - Módulo 1",
    imageUrl: mediaImage4Src,
    href: "https://youtu.be/RLvXCvkeN8o",
  },
];

const coursesModule2 = [
  { id: 5, title: "Aula 1 - Módulo 2", imageUrl: mediaImage5Src, href: "#" },
  { id: 6, title: "Aula 2 - Módulo 2", imageUrl: mediaImage5Src, href: "#" },
  { id: 7, title: "Aula 3 - Módulo 2", imageUrl: mediaImage5Src, href: "#" },
  { id: 8, title: "Aula 4 - Módulo 2", imageUrl: mediaImage5Src, href: "#" },
];

const coursesModule3 = [
  { id: 9, title: "Aula 1 - Módulo 3", imageUrl: mediaImage6Src, href: "#" },
  { id: 10, title: "Aula 2 - Módulo 3", imageUrl: mediaImage6Src, href: "#" },
  { id: 11, title: "Aula 3 - Módulo 3", imageUrl: mediaImage6Src, href: "#" },
  { id: 12, title: "Aula 4 - Módulo 3", imageUrl: mediaImage6Src, href: "#" },
];

const ebook = [
  {
    id: 9,
    title: "Ebook Exclusivo",
    imageUrl: ebookimgSrc,
    href: "https://drive.google.com/file/d/1xs2id2nJzTQvWO5oDvpLXmLGunRDHy0z/view",
  },
];

// --- COMPONENTE DA BARRA LATERAL ---
const Sidebar = ({ isOpen, onClose }) => {
  const navLinks = [
    {
      name: "Sobre",
      icon: BookUser,
      href: "https://sites.google.com/view/profabraaohenrique/sobre",
    },
    {
      name: "Curriculo Lattes",
      icon: GraduationCap,
      href: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8579694Z5",
    },
    {
      name: "Publicações",
      icon: Newspaper,
      href: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8579694Z5",
    },
    { name: "Cursos", icon: Clapperboard, href: "#", current: true },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#141414] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#242424]">
          <h2 className="text-xl font-bold">Navegação</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#242424] transition-colors"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-4 p-3 rounded-lg text-lg transition-colors ${
                      link.current
                        ? "bg-blue-600 font-semibold"
                        : "hover:bg-[#242424]"
                    }`}
                  >
                    <Icon size={22} />
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#181818] min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className="flex justify-between items-center px-4 md:px-8 bg-[#181818]/80 h-[70px] text-white sticky top-0 z-30 backdrop-blur-md border-b border-[#141414]">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-full hover:bg-[#242424] transition-colors"
          aria-label="Abrir menu"
        >
          <Menu />
        </button>
        <div
          id="user-menu"
          className="flex bg-[#242424] p-2 rounded-full gap-3 items-center"
        >
          <div className="bg-[#4b4b4b] rounded-full p-2">
            <UserRoundPen size={20} />
          </div>
          <button className="pr-2">
            <ChevronDown />
          </button>
        </div>
      </header>

      {/* CORREÇÃO: Usando a variável importada no src da imagem */}
      <div className="w-full h-[230px] md:h-[550px] flex items-center justify-center mb-6 shadow-sm">
        <a href="https://sites.google.com/view/profabraaohenrique/p%C3%A1gina-inicial">
          <img
            src={bannerImageSrc}
            alt="Banner do Curso"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      <main className="pb-12">
        <div className="pl-6 md:px-8 ">
          <h1 className="text-white text-2xl font-bold mb-1">Módulo 1</h1>
          <p className="text-[#d4d4d4] text-sm">Conceitos Básicos.</p>
          <div className="flex overflow-x-auto gap-6 py-4 filtro">
            {coursesModule1.map((course) => (
              <div key={course.id} className="flex-shrink-0">
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
                >
                  <img
                    className="w-[250px] h-auto object-cover md:w-[400px]"
                    src={course.imageUrl}
                    alt={course.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-6 md:px-8 mt-12 ">
          <h1 className="text-white text-2xl font-bold mb-1">Módulo 2</h1>
          <p className="text-[#d4d4d4] text-sm">Aplicações em Python.</p>
          <div className="flex overflow-x-auto gap-6 py-4 filtro">
            {coursesModule2.map((course) => (
              <div key={course.id} className="flex-shrink-0">
                <a
                  href={course.href}
                  className="block rounded-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
                >
                  <img
                    className="w-[250px] h-auto object-cover md:w-[400px]"
                    src={course.imageUrl}
                    alt={course.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-6 pr md:px-8 mt-12">
          <h1 className="text-white text-2xl font-bold mb-1">Módulo 3</h1>
          <p className="text-[#d4d4d4] text-sm">
            Construindo um Sistema em Python.
          </p>
          <div className="flex overflow-x-auto gap-6 py-4 filtro">
            {coursesModule3.map((course) => (
              <div key={course.id} className="flex-shrink-0">
                <a
                  href={course.href}
                  className="block rounded-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
                >
                  <img
                    className="w-[250px] h-auto object-cover md:w-[400px]"
                    src={course.imageUrl}
                    alt={course.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-6 md:px-8 mt-12">
          <h1 className="text-white text-2xl font-bold mb-1">
            Ebook Exclusivo
          </h1>
          <p className="text-[#d4d4d4] text-sm">
            E-book Exclusivo Imersão Python.
          </p>
          <div className="flex overflow-x-auto gap-6 py-4 filtro">
            {ebook.map((course) => (
              <div key={course.id} className="flex-shrink-0">
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
                >
                  <img
                    className="w-[250px] h-auto object-cover md:w-[400px]"
                    src={course.imageUrl}
                    alt={course.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[#141414] text-gray-300 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg text-white">
                Precisa de ajuda?
              </h3>
              <p className="max-w-sm mt-2 text-gray-400">
                Para solicitações, dúvidas ou propostas, entre em contato
                através dos canais abaixo.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex flex-col items-center md:items-end gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                >
                  <Mail size={20} />
                  <span>{contactInfo.email}</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                >
                  <Phone size={20} />
                  <span>{contactInfo.phoneDisplay}</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={`Link para o ${social.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0c0c0c] rounded-full text-white hover:bg-[#1f1f1f] hover:scale-110 transition-all duration-200"
                    >
                      <SocialIcon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-slate-700 mt-10 pt-6">
            <p>
              &copy; {new Date().getFullYear()} Imersão em Python. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
