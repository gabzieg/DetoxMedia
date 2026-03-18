// bloqueio.js

function aplicarBloqueio() {
    // Verifica se a nossa tela já está lá. Se estiver, ele para aqui e não pisca.
    if (document.getElementById('tela-foco')) return;

    // Se não estiver, ele apaga o WhatsApp e cria a nossa tela gigante.
    document.body.innerHTML = `
        <div id="tela-foco">
            <h1>VOLTE<br>AO CÓDIGO.</h1>
        </div>
    `;
    
    document.body.style.overflow = "hidden";
    window.stop();
}

aplicarBloqueio();
setInterval(aplicarBloqueio, 100);