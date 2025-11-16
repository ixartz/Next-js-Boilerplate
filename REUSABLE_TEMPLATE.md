# Come Usare Questo Boilerplate come Template Riutilizzabile

Questa guida spiega come utilizzare questo boilerplate per creare rapidamente nuovi progetti UI/UX.

## Metodo 1: Template GitHub (Consigliato)

### Setup Iniziale (Una volta sola)

1. **Crea un template repository su GitHub:**
   - Vai nel tuo repository su GitHub
   - Clicca su **Settings**
   - Spunta **Template repository**

2. **Ora puoi usarlo per nuovi progetti:**
   - Vai su GitHub
   - Clicca **Use this template** → **Create a new repository**
   - Dai un nome al nuovo progetto
   - Clona e configura:

   ```bash
   git clone https://github.com/tuo-username/nuovo-progetto.git
   cd nuovo-progetto
   node setup.js
   npm install
   npm run dev
   ```

## Metodo 2: Clone Locale

### Per ogni nuovo progetto:

```bash
# 1. Clona il boilerplate
git clone https://github.com/your-username/Next-js-BoilerplateMatrix.git mio-nuovo-progetto
cd mio-nuovo-progetto

# 2. Rimuovi la storia git esistente
rm -rf .git

# 3. Inizializza un nuovo repository
git init
git branch -M main

# 4. Esegui lo script di configurazione
node setup.js

# 5. Installa le dipendenze
npm install

# 6. Primo commit
git add .
git commit -m "chore: initial setup from boilerplate"

# 7. Collega al tuo repository remoto
git remote add origin https://github.com/tuo-username/mio-nuovo-progetto.git
git push -u origin main

# 8. Avvia il progetto
npm run dev
```

## Metodo 3: Script Automatizzato

Crea uno script per automatizzare completamente il processo:

```bash
#!/bin/bash
# create-project.sh

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
  echo "Uso: ./create-project.sh nome-progetto"
  exit 1
fi

echo "📦 Creazione progetto: $PROJECT_NAME"

# Clone del template
git clone https://github.com/your-username/Next-js-BoilerplateMatrix.git "$PROJECT_NAME"
cd "$PROJECT_NAME"

# Rimuovi git history
rm -rf .git
git init
git branch -M main

# Setup automatico
echo "🔧 Configurazione progetto..."
node setup.js

# Installa dipendenze
echo "📥 Installazione dipendenze..."
npm install

echo "✅ Progetto $PROJECT_NAME creato con successo!"
echo "📝 Prossimi passi:"
echo "   cd $PROJECT_NAME"
echo "   npm run dev"
```

**Utilizzo:**
```bash
chmod +x create-project.sh
./create-project.sh mio-awesome-progetto
```

## Metodo 4: Yeoman Generator (Avanzato)

Per team più grandi, crea un Yeoman generator personalizzato:

```bash
# Installa Yeoman
npm install -g yo generator-generator

# Crea il tuo generator
yo generator
```

## Personalizzazione del Template

### File da Personalizzare per il Tuo Team

1. **setup.js**
   - Modifica i default in `defaultConfig`
   - Aggiungi domande specifiche per il tuo team
   - Personalizza i messaggi

2. **.env.local.template**
   - Aggiungi variabili d'ambiente comuni al tuo team
   - Rimuovi servizi che non usi

3. **src/components/ui/**
   - Aggiungi componenti comuni ai tuoi progetti
   - Crea un design system personalizzato

4. **src/utils/AppConfig.ts**
   - Imposta default per le tue esigenze
   - Aggiungi configurazioni custom

5. **tailwind.config.ts**
   - Personalizza con i colori del tuo brand
   - Aggiungi utilities custom

## Workflow Consigliato per Team

### Setup Team (Una volta)

1. **Fork o Clone questo repository**
2. **Personalizza il template:**
   - Brand colors in Tailwind
   - Componenti UI comuni
   - Script di setup con default del team
   - Configurazioni ESLint/Prettier specifiche
3. **Crea repository template su GitHub**
4. **Documenta il processo interno**

### Per Ogni Nuovo Progetto

```bash
# 1. Usa il template
# (GitHub: Use this template)

# 2. Clone
git clone <nuovo-repo>
cd <nuovo-repo>

# 3. Setup automatico
node setup.js

# 4. Sviluppa
npm install
npm run dev
```

## Best Practices

### Mantieni il Template Aggiornato

```bash
# Nel repository template
git remote add upstream https://github.com/ixartz/Next-js-Boilerplate.git
git fetch upstream
git merge upstream/main
# Risolvi conflitti e testa
git push origin main
```

### Versionamento del Template

Usa Git tags per versioni stabili:

```bash
git tag -a v1.0.0 -m "Template stabile v1.0.0"
git push origin v1.0.0
```

I nuovi progetti possono usare una versione specifica:

```bash
git clone -b v1.0.0 https://github.com/your-org/template.git
```

### Checklist Prima di Creare Template

- [ ] Rimuovi dati sensibili/specifici
- [ ] Testa il setup.js completamente
- [ ] Documenta tutte le personalizzazioni
- [ ] Aggiungi esempi di componenti
- [ ] Verifica che build funzioni
- [ ] Testa deployment
- [ ] Aggiorna README con istruzioni team-specific

## Struttura Consigliata per Repository Template

```
your-org/nextjs-template/
├── README.md                    # Istruzioni generali
├── SETUP.md                     # Setup dettagliato
├── QUICK_START.md              # Start rapido
├── REUSABLE_TEMPLATE.md        # Questa guida
├── setup.js                    # Script configurazione
├── .env.local.template         # Template env vars
├── project.config.template.json # Config progetto
├── src/
│   ├── components/
│   │   └── ui/                 # UI components riutilizzabili
│   ├── utils/
│   │   └── AppConfig.ts        # Config principale
│   └── ...
└── docs/                       # Documentazione team
    ├── components.md           # Guida componenti
    ├── conventions.md          # Convenzioni codice
    └── deployment.md           # Guida deployment
```

## Esempi d'Uso

### Caso 1: Landing Page Veloce

```bash
git clone template.git landing-prodotto-x
cd landing-prodotto-x
node setup.js
# Scegli: NO auth, NO database, SI i18n
npm install && npm run dev
```

### Caso 2: Dashboard Completa

```bash
git clone template.git dashboard-admin
cd dashboard-admin
node setup.js
# Scegli: SI auth, SI database, SI i18n, SI analytics
npm install && npm run dev
```

### Caso 3: Portfolio Personale

```bash
git clone template.git portfolio-giovanni
cd portfolio-giovanni
node setup.js
# Scegli: NO auth, NO database, NO i18n
npm install && npm run dev
```

## Troubleshooting

### "Template troppo complesso per il mio progetto"

Usa lo script setup.js e disabilita le funzionalità non necessarie.
Oppure crea versioni "light" e "full" del template.

### "Voglio aggiungere [libreria X] di default"

1. Installala nel template: `npm install [libreria]`
2. Configura in `src/libs/[Libreria].ts`
3. Aggiungi documentazione in SETUP.md
4. Commit e tag nuova versione

### "Come condivido con il team?"

- Opzione 1: Repository privato su GitHub
- Opzione 2: Package npm privato
- Opzione 3: GitLab/Bitbucket template
- Opzione 4: Monorepo con Nx/Turborepo

## Risorse Aggiuntive

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **DrizzleORM:** https://orm.drizzle.team/docs
- **Clerk Auth:** https://clerk.com/docs

## Contribuire al Template

Se lavori in team, considera:

1. **Pull Request per miglioramenti**
2. **Issues per bug/feature requests**
3. **Wiki per documentazione estesa**
4. **Discussions per Q&A**

---

**Hai creato un progetto con questo template?**
Condividi la tua esperienza e aiuta a migliorarlo!
