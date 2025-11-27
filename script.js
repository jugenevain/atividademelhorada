
document.addEventListener('DOMContentLoaded', () => {
   
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');

    // --- 1) Contagem de Caracteres ---

    // Função para atualizar o contador
    const updateCharCount = () => {
        // A propriedade 'length' de uma string retorna o número de caracteres.
        const count = textInput.value.length;
        charCount.textContent = count;
    };

    // EVENTO UTILIZADO: 'input'
    // Este evento é o mais indicado, pois dispara em todas as alterações
    // de conteúdo (digitar, apagar, colar), garantindo a contagem em tempo real.
    textInput.addEventListener('input', updateCharCount);
    
    // Inicializa o contador
    updateCharCount(); 

    // --- 2) Interação com o Mouse ---
    
    // EVENTO UTILIZADO: 'mouseenter'
    // Dispara quando o ponteiro do mouse entra na área do <textarea>.
    // Cumpre o requisito de mudar o fundo para amarelo.
    textInput.addEventListener('mouseenter', () => {
        textInput.classList.add('highlight-mouse-enter');
    });

    // EVENTO UTILIZADO: 'mouseleave'
    // Dispara quando o ponteiro do mouse sai da área do <textarea>.
    // Cumpre o requisito de voltar o fundo para branco (removendo a classe).
    textInput.addEventListener('mouseleave', () => {
        textInput.classList.remove('highlight-mouse-enter');
    });
});