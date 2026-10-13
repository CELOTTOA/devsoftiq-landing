# devsoftiq.cloud su GitHub Pages, posta su Aruba

Dominio confermato: `devsoftiq.cloud`.

Destinazione GitHub: account `CELOTTOA`, repo `devsoftiq-landing`.

## GitHub Pages

Nella repo: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.

Dominio personalizzato: `devsoftiq.cloud`. Il file `CNAME` è già presente alla radice.

Attivare **Enforce HTTPS** quando GitHub avrà verificato il DNS e reso disponibile il certificato.

La pagina progetto, prima del collegamento del dominio, è `https://celottoa.github.io/devsoftiq-landing/`. Dopo aver configurato il dominio personalizzato, GitHub può reindirizzarla al dominio.

## Aruba: puntamenti web

Aprire **admin.aruba.it → dominio devsoftiq.cloud → Dominio → Gestione DNS e Name Server**.

Lasciare i name server Aruba. Prima di modificare i puntamenti, esportare o annotare la zona esistente. Sostituire soltanto i vecchi record web del dominio principale e di `www`, evitando record A/CNAME incompatibili per lo stesso host.

| Tipo | Host | Valore | TTL suggerito |
| --- | --- | --- | --- |
| A | vuoto, dominio principale | 185.199.108.153 | 3600 |
| A | vuoto, dominio principale | 185.199.109.153 | 3600 |
| A | vuoto, dominio principale | 185.199.110.153 | 3600 |
| A | vuoto, dominio principale | 185.199.111.153 | 3600 |
| CNAME | www | celottoa.github.io | 3600 |

Nel pannello Aruba il campo Host vuoto indica il dominio principale. In altri editor DNS lo stesso host viene rappresentato da `@`.

Non usare `devsoftiq-landing` nel valore del CNAME: il valore è soltanto `celottoa.github.io`, senza `https://` e senza percorsi.

### IPv6, facoltativo

Se si mantiene un puntamento IPv6 per il dominio principale, deve essere coerente con GitHub Pages. Usare i quattro record seguenti al posto di eventuali vecchi AAAA del sito:

| Tipo | Host | Valore |
| --- | --- | --- |
| AAAA | dominio principale | 2606:50c0:8000::153 |
| AAAA | dominio principale | 2606:50c0:8001::153 |
| AAAA | dominio principale | 2606:50c0:8002::153 |
| AAAA | dominio principale | 2606:50c0:8003::153 |

Se non si desidera pubblicare un record IPv6, non lasciare un vecchio AAAA che punti al sito precedente.

## Conservare la posta Aruba

Mantenere i record MX e le impostazioni **Record MX Aruba**. Conservare anche i record SPF, DKIM, DMARC e gli host della posta, inclusi eventuali `mail`, `mx`, `imap`, `pop3`, `smtp`, `webmail`, `autodiscover` e `autoconfig`.

I puntamenti GitHub riguardano la vetrina web; non vanno applicati ai server di posta. GitHub Pages non fornisce caselle email.

## Verifica finale

- Attendere la propagazione del DNS; GitHub indica che può richiedere fino a 24 ore.
- In Settings → Pages verificare il risultato del controllo DNS.
- Abilitare HTTPS appena disponibile e verificare sia `https://devsoftiq.cloud` sia `https://www.devsoftiq.cloud`.
- Verificare che `info@devsoftiq.cloud` riceva e invii normalmente.

## Fonti ufficiali

- [GitHub: dominio personalizzato e record DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Aruba: accesso al pannello DNS](https://guide.aruba.it/hosting-e-domini/gestione-dns/caratteristiche-e-accesso/accedere-pannello)
- [Aruba: gestione record A](https://guide.aruba.it/hosting-e-domini/gestione-dns/gestione-name-server-e-record/gestire-record-a)
- [Aruba: gestione record CNAME](https://guide.aruba.it/hosting-e-domini/gestione-dns/gestione-name-server-e-record/gestire-record-cname)
- [Aruba: conservare la gestione della posta sui propri server](https://guide.aruba.it/hosting-e-domini/gestione-dns/gestione-name-server-e-record/gestire-record-posta-mx)
