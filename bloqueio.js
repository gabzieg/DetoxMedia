// bloqueio.js

let intervaloBloqueio = null;

function verificarESeparar() {
    chrome.storage.local.get({
        blockWhatsapp: true,
        blockInstagram: true,
        blockFacebook: true
    }, (result) => {
        const hostname = window.location.hostname;
        
        let deveBloquear = false;
        let siteBloqueado = '';
        
        if (hostname.includes('whatsapp.com') && result.blockWhatsapp) {
            deveBloquear = true;
            siteBloqueado = 'Whatsapp';
        } else if (hostname.includes('instagram.com') && result.blockInstagram) {
            deveBloquear = true;
            siteBloqueado = 'Instagram';
        } else if (hostname.includes('facebook.com') && result.blockFacebook) {
            deveBloquear = true;
            siteBloqueado = 'Facebook';
        }

        if (deveBloquear) {
            aplicarBloqueio(siteBloqueado);
            if (!intervaloBloqueio) {
                intervaloBloqueio = setInterval(() => aplicarBloqueio(siteBloqueado), 100);
            }
        } else {
            removerBloqueio();
        }
    });
}

function registrarBloqueio(site) {
    if (window !== window.top) return;

    chrome.storage.local.get({
        totalBlocks: 0,
        dailyBlocksDate: '',
        dailyBlocksWhatsapp: 0,
        dailyBlocksInstagram: 0,
        dailyBlocksFacebook: 0
    }, (data) => {
        const today = new Date().toISOString().split('T')[0];
        let updates = {};

        if (data.dailyBlocksDate !== today) {
            updates.dailyBlocksDate = today;
            updates.dailyBlocksWhatsapp = 0;
            updates.dailyBlocksInstagram = 0;
            updates.dailyBlocksFacebook = 0;
            data.dailyBlocksWhatsapp = 0;
            data.dailyBlocksInstagram = 0;
            data.dailyBlocksFacebook = 0;
        }

        updates.totalBlocks = data.totalBlocks + 1;
        const dailyKey = 'dailyBlocks' + site;
        updates[dailyKey] = data[dailyKey] + 1;

        chrome.storage.local.set(updates);
    });
}

function aplicarBloqueio(site) {
    if (document.getElementById('tela-foco')) return;

    registrarBloqueio(site);

    window.stop();
    document.documentElement.innerHTML = `
        <head>
            <title>Blocked</title>
        </head>
        <body style="overflow: hidden; margin: 0; padding: 0;">
            <div id="tela-foco">
                <h1>BACK TO<br>THE FOCUS.</h1>
            </div>
        </body>
    `;
}

function removerBloqueio() {
    if (intervaloBloqueio) {
        clearInterval(intervaloBloqueio);
        intervaloBloqueio = null;
    }
    if (document.getElementById('tela-foco')) {
        window.location.reload();
    }
}

verificarESeparar();

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local') {
        verificarESeparar();
    }
});