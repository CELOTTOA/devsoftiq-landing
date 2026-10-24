# devsoftiq.cloud

Landing statica in italiano, senza build e senza dipendenze da installare.

Apri `index.html` nel browser. Per un'anteprima HTTP, dalla cartella del progetto:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Poi apri `http://localhost:8080`.

## File

- `index.html`: contenuti, metadati e dati strutturati.
- `assets/site.css`: layout responsive e temi scuro/chiaro.
- `assets/site.js`: filtro per settore, tema, animazioni di ingresso e menu mobile.
- `assets/logos/`: loghi originali dei prodotti.
- `privacy.html`, `cookie.html`, `note-legali.html`, `termini.html`: informazioni legali della vetrina.
- `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`: configurazione della pubblicazione statica.
- `CONFIGURAZIONE-DNS.md`: record GitHub Pages e istruzioni Aruba.
- `_archive/index-original.html`: copia integrale dell'HTML precedente. Per ripristinare la versione originale, copiala al posto di `index.html`.
- `_shots/after-*.png`: immagini della revisione.
- `_review/AGGIORNAMENTO.md`: verifica della versione aziendale corrente.
- `_review/VERIFICA.md`: controlli della prima revisione.

## Contenuti

Il catalogo comprende 13 schede. La sezione Studi presenta LaborOS - PortalWeb, LaborOS Control Hub e GenomeOS. IndexOS Azienda è presentato separatamente da IndexOS, con il logo fornito. Ogni scheda distingue la descrizione breve dai dettagli tecnici. I contenuti tecnici precedenti restano consultabili nelle sezioni espandibili.

I prezzi, gli stati dei prodotti e i numeri tecnici provengono dalla landing originale; non sono stati verificati sui servizi esterni. Il testo sul controllo dei dati distingue i prodotti locali dai flussi connessi.

Il tema scuro rimane quello iniziale; la scelta manuale viene ricordata nel browser. Il sito funziona anche senza JavaScript: tutte le schede e i dettagli sono disponibili e i controlli che richiedono script vengono nascosti.

La sezione `#partner`, raggiungibile da navigazione, hero e footer, presenta i percorsi da valutare con agenzie, integratori e distributori: distribuzione commerciale, integrazioni e progetti pilota. Le FAQ distinguono i prezzi delle licenze finali dagli accordi commerciali e descrivono un eventuale approfondimento dei sorgenti in forma riservata. Le richieste di collaborazione e demo aprono il client email con oggetto e traccia del messaggio; il sito non invia messaggi né raccoglie dati tramite form.

La tipografia usa i font di sistema, così la pagina si apre correttamente anche offline. Nessun font, script o foglio di stile viene caricato da CDN.

Repo: https://github.com/CELOTTOA/devsoftiq-landing

Il sito viene pubblicato con GitHub Pages dal branch `main`, cartella radice. Il dominio previsto è `https://devsoftiq.cloud`; i puntamenti DNS e il certificato HTTPS sono gestiti secondo `CONFIGURAZIONE-DNS.md`.

Le cartelle `_archive`, `_shots` e `_review` restano locali e non sono incluse nel repository pubblico.

## SEO

La home usa titolo e descrizione dedicati ai software per professionisti e imprese, URL canonico HTTPS, metadati Open Graph e Twitter con anteprima locale 1200×630, favicon quadrate e dati strutturati JSON-LD `Organization`, `WebSite`, `CollectionPage` e `ItemList`. Il catalogo strutturato riprende i nomi, le descrizioni e gli anchor delle 13 schede visibili; va aggiornato insieme alle schede quando cambiano i prodotti. Non contiene recensioni o offerte commerciali aggiunte per ottenere risultati avanzati.

`sitemap.xml` contiene gli URL canonici della vetrina e della sezione Archteathos ed è indicata in `robots.txt`. Aggiornare `lastmod` solo per le pagine effettivamente modificate. Le pagine legali rimandano alla home con `/`, evitando collegamenti alla variante `/index.html`.

GitHub Pages ha **Enforce HTTPS** attivo; il dominio canonico è `https://devsoftiq.cloud/`.

`assets/og-devsoftiq.png` è l'anteprima di condivisione. `assets/logos/indexos-azienda.webp` è la variante ottimizzata per i loghi di 38–40 pixel; il PNG originale resta disponibile. Il meta tag di verifica Google è conservato nella home.

Per il monitoraggio, inviare `https://devsoftiq.cloud/sitemap.xml` nella proprietà verificata di Google Search Console e usare Controllo URL sulla home. La configurazione del codice non equivale all'avvenuta indicizzazione.

Riferimenti: [nome del sito](https://developers.google.com/search/docs/appearance/site-names), [dati dell'organizzazione](https://developers.google.com/search/docs/appearance/structured-data/organization), [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Archteathos

La landing del prodotto è autonoma su `https://archteathos.it/`, pubblicata dal repository dedicato `CELOTTOA/archteathos-landing`. Contatti e pagine legali usano `info@archteathos.it`, con la stessa P. IVA IT01374730933. La scheda del catalogo, il footer e i dati strutturati collegano il dominio dedicato.

I vecchi indirizzi sotto `/archteathos/` reindirizzano alle corrispondenti pagine di `archteathos.it`. Gli asset storici rimasti in questa cartella non sono utilizzati dalla Pages indipendente.
