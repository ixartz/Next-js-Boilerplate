# Guida al Setup Rapido - Next.js Boilerplate

Questa guida ti aiuterà a configurare velocemente questo boilerplate per i tuoi progetti UI/UX.

## Indice

- [Setup Automatico (Consigliato)](#setup-automatico-consigliato)
- [Setup Manuale](#setup-manuale)
- [Configurazione Servizi Esterni](#configurazione-servizi-esterni)
- [Componenti UI Riutilizzabili](#componenti-ui-riutilizzabili)
- [Personalizzazione](#personalizzazione)
- [Deploy](#deploy)

---

## Setup Automatico (Consigliato)

Il modo più veloce per configurare il boilerplate è utilizzare lo script automatico:

```bash
# 1. Esegui lo script di setup
node setup.js

# 2. Lo script ti guiderà attraverso la configurazione
#    - Nome progetto
#    - Autore
#    - Funzionalità da includere (auth, database, i18n, etc.)

# 3. Rinomina il file template
mv .env.local.template .env.local

# 4. Installa le dipendenze
npm install

# 5. Avvia il server di sviluppo
npm run dev
```

Lo script configurerà automaticamente:
- ✅ Nome del progetto in tutti i file
- ✅ Lingue supportate
- ✅ File di configurazione
- ✅ package.json
- ✅ README.md personalizzato

---

## Setup Manuale

Se preferisci configurare manualmente il progetto:

### 1. Configurazione Base

```bash
# Clona o copia il progetto
git clone https://github.com/your-repo/Next-js-BoilerplateMatrix.git my-new-project
cd my-new-project

# Installa le dipendenze
npm install
```

### 2. Configura il Nome del Progetto

Modifica `src/utils/AppConfig.ts`:

```typescript
export const AppConfig = {
  name: 'Il Tuo Progetto',  // ← Cambia qui
  locales: ['en', 'it'],     // ← Aggiungi/rimuovi lingue
  defaultLocale: 'it',       // ← Lingua di default
  localePrefix,
};
```

### 3. Configura package.json

```json
{
  "name": "il-tuo-progetto",
  "description": "Descrizione del tuo progetto",
  "author": "Il Tuo Nome <tua@email.com>"
}
```

### 4. Configura le Variabili d'Ambiente

```bash
# Copia il template
cp .env.local.template .env.local

# Modifica .env.local con le tue chiavi API
```

**Variabili minime richieste:**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://...
```

---

## Configurazione Servizi Esterni

### Autenticazione (Clerk)

1. Vai su [Clerk.com](https://clerk.com) e crea un account
2. Crea una nuova applicazione
3. Copia le chiavi da **Dashboard → API Keys**
4. Aggiungi a `.env.local`:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

**Per disabilitare l'autenticazione:**
- Rimuovi le route in `src/app/[locale]/(auth)`
- Rimuovi i componenti relativi a Clerk
- Rimuovi `@clerk/nextjs` dalle dipendenze

### Database (DrizzleORM + PostgreSQL)

**Sviluppo Locale (PGlite - già incluso):**
```bash
npm run dev  # Il database locale si avvia automaticamente
```

**Produzione (Prisma Postgres o altro):**
1. Vai su [Prisma.io](https://www.prisma.io/?via=nextjsboilerplate)
2. Crea un database PostgreSQL
3. Copia la connection string
4. Aggiungi a `.env.local`:
   ```env
   DATABASE_URL=postgresql://user:password@host:5432/database
   ```

**Per disabilitare il database:**
- Rimuovi `drizzle-orm` dalle dipendenze
- Rimuovi `src/models/Schema.ts`
- Rimuovi i riferimenti al database nel codice

### Internazionalizzazione (i18n)

**Aggiungere una nuova lingua:**

1. Crea il file in `src/locales/`:
   ```bash
   cp src/locales/en.json src/locales/es.json
   ```

2. Traduci i messaggi in `es.json`

3. Aggiungi la lingua in `src/utils/AppConfig.ts`:
   ```typescript
   export const AppConfig = {
     locales: ['en', 'it', 'es'],  // ← Aggiungi qui
     defaultLocale: 'it',
   };
   ```

4. Aggiungi la localizzazione Clerk (opzionale):
   ```typescript
   import { esES } from '@clerk/localizations';

   const supportedLocales = {
     en: enUS,
     it: itIT,
     es: esES,  // ← Aggiungi qui
   };
   ```

**Per disabilitare i18n:**
- Questo richiederebbe modifiche significative
- Consigliato: lascia almeno una lingua

### Error Monitoring (Sentry) - Opzionale

1. Vai su [Sentry.io](https://sentry.io)
2. Crea un progetto Next.js
3. Aggiungi a `.env.local`:
   ```env
   NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
   SENTRY_ORGANIZATION=your-org
   SENTRY_PROJECT=your-project
   ```

**Sviluppo locale:** Sentry Spotlight è già configurato su `http://localhost:8969`

### Analytics (PostHog) - Opzionale

1. Vai su [PostHog.com](https://posthog.com)
2. Crea un progetto
3. Aggiungi a `.env.local`:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=phc_...
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

---

## Componenti UI Riutilizzabili

Il boilerplate include componenti UI pronti all'uso in `src/components/ui/`:

### Utilizzo dei Componenti

```typescript
// Import centralizzato
import { Button, Card, Input } from '@/components/ui';

// Esempio: Button
<Button variant="primary" size="md">
  Clicca qui
</Button>

<Button variant="danger" isLoading>
  Salvataggio...
</Button>

// Esempio: Card
<Card variant="elevated" padding="lg">
  <Card.Header>
    <h2>Titolo Card</h2>
  </Card.Header>
  <Card.Body>
    <p>Contenuto della card</p>
  </Card.Body>
  <Card.Footer>
    <Button>Azione</Button>
  </Card.Footer>
</Card>

// Esempio: Input
<Input
  label="Email"
  type="email"
  placeholder="tua@email.com"
  error={errors.email}
  helperText="Inserisci una email valida"
/>
```

### Componenti Disponibili

| Componente | Descrizione | Varianti |
|------------|-------------|----------|
| `Button` | Pulsante interattivo | primary, secondary, outline, ghost, danger |
| `Card` | Container per contenuto | default, bordered, elevated |
| `Input` | Campo di input | Con label, errori, icone |
| `LocaleSwitcher` | Cambio lingua | - |
| `Hello` | Componente demo | - |

### Aggiungere Nuovi Componenti

1. Crea il componente in `src/components/ui/NomeComponente.tsx`
2. Esportalo in `src/components/ui/index.ts`
3. Utilizza TypeScript per props type-safe
4. Segui il pattern degli altri componenti

**Esempio template:**

```typescript
// src/components/ui/Badge.tsx
import type { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  children: ReactNode;
}

export function Badge({ variant = 'default', children, className = '', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-200 text-green-800',
    warning: 'bg-yellow-200 text-yellow-800',
    danger: 'bg-red-200 text-red-800',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
```

---

## Personalizzazione

### Tema e Stili

**Colori Tailwind:**
Modifica `tailwind.config.ts` per personalizzare il tema:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... altri toni
          900: '#1e3a8a',
        },
      },
    },
  },
};
```

**Stili Globali:**
Modifica `src/styles/global.css` per stili personalizzati:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-custom {
    @apply px-4 py-2 bg-primary-600 text-white rounded-lg;
  }
}
```

### Template Base

Modifica `src/templates/BaseTemplate.tsx` per cambiare:
- Layout generale
- Header/Footer
- Navigazione
- Struttura pagine

### Metadata SEO

Modifica `src/utils/AppConfig.ts` e i metadata nelle pagine:

```typescript
// In ogni page.tsx
export const metadata: Metadata = {
  title: 'Titolo Pagina',
  description: 'Descrizione per SEO',
};
```

---

## Deploy

### Vercel (Consigliato)

1. Push del codice su GitHub
2. Vai su [Vercel.com](https://vercel.com)
3. Importa il repository
4. Configura le variabili d'ambiente
5. Deploy automatico!

**Variabili d'ambiente richieste su Vercel:**
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `DATABASE_URL`

### Altri Provider

- **Netlify:** Funziona out of the box
- **Docker:** Usa `Dockerfile` se necessario
- **Sevalla:** Segue la guida nel README principale

---

## Checklist Pre-Deploy

- [ ] Configurate tutte le variabili d'ambiente in `.env.local`
- [ ] Testato in locale con `npm run dev`
- [ ] Build locale funzionante con `npm run build-local`
- [ ] Database configurato (locale o produzione)
- [ ] Autenticazione testata
- [ ] Traduzioni complete per tutte le lingue
- [ ] Metadata SEO aggiornati
- [ ] Favicon personalizzato (`public/favicon.ico`)
- [ ] Variabili d'ambiente configurate sul provider di hosting
- [ ] Test E2E passati con `npm run test:e2e`

---

## Comandi Utili

```bash
# Sviluppo
npm run dev              # Avvia server di sviluppo + database locale

# Build
npm run build-local      # Build con database in memoria
npm run build            # Build per produzione
npm start                # Avvia build di produzione

# Test
npm run test             # Unit tests
npm run test:e2e         # E2E tests
npm run lint             # Linting
npm run check:types      # Type checking

# Database
npm run db:generate      # Genera migration
npm run db:migrate       # Applica migrations
npm run db:studio        # Apri Drizzle Studio

# Storybook
npm run storybook        # Avvia Storybook
npm run storybook:test   # Test componenti

# Qualità del codice
npm run check:deps       # Controlla dipendenze non usate
npm run check:i18n       # Controlla traduzioni mancanti
```

---

## Risoluzione Problemi

### Port già in uso

```bash
# Cambia porta in package.json o usa:
PORT=3001 npm run dev
```

### Errori di autenticazione

- Verifica che le chiavi Clerk siano corrette
- Controlla che non ci siano spazi nelle variabili d'ambiente
- Verifica che il dominio sia autorizzato in Clerk Dashboard

### Database non funziona

- Verifica che `DATABASE_URL` sia corretto
- Assicurati che le migrazioni siano applicate: `npm run db:migrate`
- Per sviluppo locale, usa PGlite (nessuna configurazione necessaria)

### Build fallisce

```bash
# Pulisci e riprova
npm run clean
npm install
npm run build-local
```

---

## Supporto

- **Documentazione:** Vedi [README.md](README.md)
- **Issues:** Apri una issue su GitHub
- **Discussioni:** Usa le GitHub Discussions

---

## Prossimi Passi

1. **Personalizza il design:** Modifica i colori e il tema
2. **Aggiungi pagine:** Crea nuove route in `src/app/[locale]`
3. **Sviluppa componenti:** Aggiungi componenti UI in `src/components/ui`
4. **Configura CI/CD:** Usa GitHub Actions per test automatici
5. **Monitora:** Configura Sentry e analytics
6. **Ottimizza:** Usa Lighthouse per migliorare le performance

Buon sviluppo! 🚀
