document.addEventListener('DOMContentLoaded', () => {
    const checkWhatsapp = document.getElementById('block-whatsapp');
    const checkInstagram = document.getElementById('block-instagram');
    const checkFacebook = document.getElementById('block-facebook');
    
    const countWhatsapp = document.getElementById('count-whatsapp');
    const countInstagram = document.getElementById('count-instagram');
    const countFacebook = document.getElementById('count-facebook');
    const totalBlocksEl = document.getElementById('total-blocks');

    // Carregar configurações salvas
    chrome.storage.local.get({
        blockWhatsapp: true,
        blockInstagram: true,
        blockFacebook: true,
        totalBlocks: 0,
        dailyBlocksDate: '',
        dailyBlocksWhatsapp: 0,
        dailyBlocksInstagram: 0,
        dailyBlocksFacebook: 0
    }, (result) => {
        checkWhatsapp.checked = result.blockWhatsapp;
        checkInstagram.checked = result.blockInstagram;
        checkFacebook.checked = result.blockFacebook;

        const today = new Date().toISOString().split('T')[0];
        if (result.dailyBlocksDate === today) {
            countWhatsapp.textContent = `${result.dailyBlocksWhatsapp} today`;
            countInstagram.textContent = `${result.dailyBlocksInstagram} today`;
            countFacebook.textContent = `${result.dailyBlocksFacebook} today`;
        } else {
            countWhatsapp.textContent = `0 today`;
            countInstagram.textContent = `0 today`;
            countFacebook.textContent = `0 today`;
        }
        totalBlocksEl.textContent = result.totalBlocks;
    });

    // Salvar configurações ao alterar
    checkWhatsapp.addEventListener('change', () => {
        chrome.storage.local.set({ blockWhatsapp: checkWhatsapp.checked });
    });

    checkInstagram.addEventListener('change', () => {
        chrome.storage.local.set({ blockInstagram: checkInstagram.checked });
    });

    checkFacebook.addEventListener('change', () => {
        chrome.storage.local.set({ blockFacebook: checkFacebook.checked });
    });
});
