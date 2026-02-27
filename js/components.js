// js/components.js

// 1. Dados do Catálogo
const catalogVelas = [
    {
        title: "Bandejinha com gatinho",
        desc: "Mini bandeja com gatinho na borda. Ideal para velas, joias ou decoração temática.",
        img: "../assets/photos/gato-branco.jpg",
        delay: 0
    },
    {
        title: "Cumbucas (Grande/Média)",
        desc: "Perfeitas para velas, joias ou objetos decorativos. Versáteis e funcionais.",
        img: "../assets/photos/branco.jpg",
        delay: 100
    },
    {
        title: "Gato & Shih-tzu",
        desc: "Esculturas minimalistas inspiradas nos pets. Servem como suporte de vela ou decoração.",
        img: "../assets/photos/cachorro.jpg",
        delay: 200
    },
    
];

const catalogDecor = [
    {
        title: "Incensário Pata de Gato",
        desc: "Incensário delicado com textura de patinha. Perfeito para quem ama pets e autocuidado.",
        img: "../assets/photos/pe.jpg",
        delay: 300
    },
];

// 2. Dados de Informações Logísticas
const infoCards = [
    {
        title: "Prazos", icon: "far fa-clock",
        content: `<ul class="text-sm text-gray-600 space-y-2">
            <li><strong>Catálogo:</strong> 5-10 dias (mais rápido)</li>
            <li><strong>Sob Encomenda:</strong> 5-10 dias</li>
            <li><strong>Personalizadas:</strong> 10-15 dias úteis</li>
        </ul>`
    },
    {
        title: "Entregas", icon: "fas fa-truck",
        content: `<ul class="text-sm text-gray-600 space-y-2">
            <li><strong>Santa Cruz do Sul:</strong> Entrega local</li>
            <li><strong>Retirada:</strong> No ateliê (agendada)</li>
            <li><strong>Outras cidades:</strong> Correios / Transportadora</li>
        </ul>`
    },
    {
        title: "Pagamento", icon: "fas fa-wallet",
        content: `<ul class="text-sm text-gray-600 space-y-2">
            <li>Pix</li><li>Dinheiro</li><li>Cartão (pelo catálogo)</li>
        </ul>`
    },
    {
        title: "Cancelamento", icon: "fas fa-ban",
        content: `<p class="text-sm text-gray-600">Pode cancelar antes do início da produção.<br>Após começar, há uma <strong>taxa de 15%</strong>.</p>`
    }
];

// Funções de Renderização (Componentes)
function renderCatalogCard(item) {
    return `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay="${item.delay}">
            <div class="h-48 bg-gray-100 rounded-xl mb-4 overflow-hidden">
                 <img src="${item.img}" class="w-full h-full object-cover hover:scale-105 transition-transform" alt="${item.title}">
            </div>
            <h4 class="font-serif text-xl mb-2 text-pure-black">${item.title}</h4>
            <p class="text-sm text-gray-600">${item.desc}</p>
        </div>
    `;
}

function renderInfoCard(item) {
    return `
        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brown-main">
            <h4 class="font-serif text-xl mb-4 flex items-center gap-2"><i class="${item.icon} text-brown-main"></i> ${item.title}</h4>
            ${item.content}
        </div>
    `;
}

// Injetando no HTML quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza Velas
    const velasContainer = document.getElementById('catalog-velas');
    if(velasContainer) velasContainer.innerHTML = catalogVelas.map(renderCatalogCard).join('');

    // Renderiza Decor (Adicionando o card customizado no final manualmente)
    const decorContainer = document.getElementById('catalog-decor');
    const customCardHtml = `
        <div class="bg-brown-main/10 p-6 rounded-2xl border border-brown-main/20 flex flex-col justify-center items-center text-center" data-aos="zoom-in" data-aos-delay="200">
            <h4 class="font-serif text-2xl mb-4 text-brown-main">Peça Personalizada</h4>
            <p class="text-sm text-gray-700 mb-6">Quer algo único? Envie referências, fotos e cores desejadas.</p>
            <a href="https://wa.me/5551996214639" target="_blank" class="px-6 py-3 bg-white text-brown-main border border-brown-main rounded-full font-bold text-sm hover:bg-brown-main hover:text-white transition-all">
                <i class="fab fa-whatsapp"></i> Personalizar
            </a>
        </div>
    `;
    if(decorContainer) decorContainer.innerHTML = catalogDecor.map(renderCatalogCard).join('') + customCardHtml;

    // Renderiza Infos Logísticas
    const infoContainer = document.getElementById('info-grid');
    if(infoContainer) infoContainer.innerHTML = infoCards.map(renderInfoCard).join('');
});