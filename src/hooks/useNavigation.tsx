import { useLocation } from 'react-router-dom';

const useNavigation = () => {
    const location = useLocation();

    // Verifica se está na página de detalhe de projeto
    const isProjetoDetail = location.pathname.includes("/projeto");

    // Se for página de detalhe de projeto, retorna o link para HOME (com redirecionamento) e os outros com smooth
    const navLinks = isProjetoDetail
        ? [
            { name: "HOME", path: "/", smooth: true }, // Redireciona diretamente para a página inicial
            { name: "CONTATO", path: "#contato", smooth: true } // CONTATO ainda usa smooth scroll
        ]
        : [
            { name: "HOME", path: "#home", smooth: true },
            { name: "SOBRE", path: "#sobre", smooth: true },
            { name: "PROJETOS", path: "#projetos", smooth: true },
            { name: "CONTATO", path: "#contato", smooth: true }
        ];

    return { navLinks, isProjetoDetail };
};

export default useNavigation;
