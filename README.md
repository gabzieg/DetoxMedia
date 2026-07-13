# Social Media Blocker 🛑

**Social Media Blocker** é uma extensão simples para navegadores baseados em Chromium (como Google Chrome, Microsoft Edge, Brave, etc) desenvolvida para ajudar você a manter o foco bloqueando o acesso a redes sociais distrativas. 

*"Your time is non-negotiable. Back to the focus."*

## 🚀 Funcionalidades

- **Bloqueio de Sites:** Interrompe instantaneamente o acesso ao **WhatsApp Web**, **Instagram** e **Facebook**.
- **Painel de Controle:** Extensão possui um menu interativo (Focus Mode) que permite ativar/desativar bloqueios de cada site individualmente.
- **Estatísticas:** Mantém o controle de quantas vezes você tentou acessar um site bloqueado durante o dia (contador de bloqueios por site e total).

## 🛠️ Tecnologias Utilizadas

- **HTML5 e CSS3:** Para o menu de Popup da extensão.
- **JavaScript (Vanilla):** Lógica da extensão (Service Workers e Content Scripts).
- **Chrome Extension API:** Utiliza Manifest V3 (`manifest.json`) e a API de `storage` para salvar estatísticas locais do usuário.

## 📦 Como Instalar e Testar Localmente

Siga o passo a passo abaixo para testar a extensão diretamente no seu navegador:

1. Faça o clone ou o download deste repositório para o seu computador.
2. Abra o Google Chrome e acesse `chrome://extensions/` (ou `edge://extensions/` no Edge).
3. No canto superior direito, ative a opção **"Modo do desenvolvedor"** (Developer mode).
4. Clique no botão **"Carregar sem compactação"** (Load unpacked) no canto superior esquerdo.
5. Selecione a pasta onde você salvou este projeto.
6. Pronto! A extensão deve aparecer na sua barra do navegador, pronta para ser usada.

## 💻 Como Funciona o Código

- `manifest.json`: É o coração da extensão (Manifest V3), onde configuramos permissões e os scripts em execução.
- `bloqueio.js`: O Content Script que é injetado nas páginas das redes sociais para interceptar e travar a página caso você a acesse.
- `popup.html` / `popup.css` / `popup.js`: Formam o painel de controle interativo, exibindo estatísticas que são salvas via `chrome.storage`.

## 📜 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
