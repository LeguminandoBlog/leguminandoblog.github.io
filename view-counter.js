// view-counter.js - Contatore visualizzazioni globale
// Caricato su tutte le pagine del sito. Incrementa sempre il contatore.
// Se c'e' l'elemento #view-counter, aggiorna anche il display.
(function() {
    async function trackAndShow() {
        try {
            const resp = await fetch('https://abacus.jasoncameron.dev/hit/leguminando/home');
            const data = await resp.json();

            // Aggiorna display se presente sulla pagina
            const el = document.getElementById('view-counter');
            if (el) el.textContent = data.value.toLocaleString('it-IT');
        } catch (e) {
            // Silenzioso — il contatore non e' critico
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackAndShow);
    } else {
        trackAndShow();
    }
})();