[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/levysoft/gingillopedia/blob/main/LICENSE)
[![GitHub branches](https://badgen.net/github/branches/levysoft/gingillopedia)](https://github.com/levysoft/gingillopedia/)

# Gingillopedia
Da un Digitaliano per i Digitaliani, il gingillo per eccellenza: il database di tutti i gingilli mai pubblicati dalla Redazione Distribuita di Digitalia.

V1.0  - Initial release
V2.0 - Update with Bootstrap 5 e PWA

# Gingillopedia - Versione 2.0

Gingillopedia è una web app progressiva (PWA) sviluppata per il podcast [Digitalia](https://www.digitalia.fm), che permette agli utenti di consultare in modo semplice e veloce tutti i "gingilli" (gadget, app, software, ecc.) menzionati negli episodi del podcast. Questa nuova versione introduce numerose migliorie in termini di design, funzionalità e performance, offrendo un'esperienza utente ancora più fluida e moderna.

## Novità nella versione 2.0

### Design e Responsività
- **Aggiornamento a HTML5 e Bootstrap 5**: Migliorata la struttura HTML utilizzando il moderno framework Bootstrap 5, garantendo un design più responsivo e attuale.
- **Semplificazione del caricamento delle risorse**: Utilizzo di CDN per Bootstrap e jQuery, migliorando la velocità di caricamento.
- **Ottimizzazione del CSS**: Il CSS è stato incorporato direttamente nel file HTML, semplificando la distribuzione della web app.
- **Miglioramento del design generale**: La pagina ora presenta un aspetto più pulito e moderno.
- **Classe `.table-responsive` di Bootstrap**: Migliorata la responsività della tabella.

### Funzionalità e Miglioramenti della Tabella
- **Semplificazione della struttura della tabella**: Colonne meno essenziali sono state rimosse per una migliore leggibilità su dispositivi mobili.
- **Campi nascosti ricercabili**: Utilizzo di una classe CSS (`.hidden-column`) per mantenere dati nascosti visibili per la ricerca, migliorando l'esperienza del filtraggio senza compromettere la pulizia del layout.
- **Indicatore di caricamento CSV**: Aggiunto un loader per migliorare l'usabilità durante il caricamento di file CSV più grandi.
- **Debounce per il filtro**: Implementata una funzione di debounce per ridurre il numero di operazioni di filtraggio durante la digitazione.
- **Gestione migliorata degli errori**: Messaggio di errore chiaro in caso di problemi durante il caricamento del CSV.
- **Feedback utente migliorato**: Messaggio che informa l'utente quando il filtro non trova risultati.

### Sicurezza e Accessibilità
- **Miglioramento della sicurezza**: Utilizzo di `rel="noopener noreferrer"` per tutti i link con `target="_blank"` per prevenire possibili exploit.
- **Accessibilità**: Aggiunto un testo alternativo (alt) più descrittivo per le immagini del logo, migliorando l'accessibilità per gli utenti di screen reader.

### Caricamento dei Dati e Performance
- **Utilizzo di `fetch` per caricare il CSV**: Sostituisce l'uso di jQuery con la Fetch API per migliorare il caricamento asincrono dei dati.
- **Strategia di caching intelligente**: Implementazione di un Service Worker con una strategia "network-first" che permette l'accesso offline e garantisce che i dati più recenti siano sempre disponibili online.

### Progressive Web App (PWA)
- **Conversione in PWA**: La web app è ora riconosciuta come una PWA, consentendo agli utenti di aggiungerla alla schermata home e di utilizzarla come un'app nativa.
- **Manifest JSON e meta tag per iOS**: Definizione delle proprietà della web app e ottimizzazione per la visualizzazione su dispositivi iOS.
- **Service Worker avanzato**: Implementato per garantire il caching dei dati offline, migliorare i tempi di caricamento e aggiornare automaticamente i dati.

### Altri Miglioramenti
- **Input type="search"**: Migliorata l'esperienza utente con la funzionalità di ricerca nativa dei browser.
- **Logo responsive**: Utilizzo delle classi di Bootstrap per mostrare o nascondere il logo in base alla larghezza dello schermo.
- **Colore dei link**: Utilizzo del colore di base `#337ab7` per mantenere una coerenza con la versione precedente.

## Installazione e Utilizzo

Gingillopedia può essere utilizzata direttamente dal browser come web app o installata come PWA seguendo le istruzioni del proprio browser. Per installare la web app, basta visitare il sito su un browser compatibile (come Chrome o Safari) e selezionare "Aggiungi alla schermata home".

## Contributi e Licenza

Gingillopedia è un progetto open-source. Sentiti libero di contribuire con miglioramenti o di segnalare eventuali problemi. Il progetto è distribuito sotto la licenza MIT. Per maggiori dettagli, consulta il file `LICENSE`.
