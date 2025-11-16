# Quick Start - 5 Minuti

Configurazione rapida per iniziare subito a sviluppare.

## Setup Rapido (5 minuti)

```bash
# 1. Setup automatico
node setup.js

# 2. Configura variabili d'ambiente
mv .env.local.template .env.local
# Modifica .env.local con le tue chiavi

# 3. Installa dipendenze
npm install

# 4. Avvia il progetto
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Configurazione Minima

### Solo se NON usi lo script automatico:

**1. AppConfig.ts**
```typescript
// src/utils/AppConfig.ts
export const AppConfig = {
  name: 'Il Tuo Progetto',  // ← CAMBIA
  locales: ['en', 'it'],
  defaultLocale: 'it',      // ← CAMBIA
};
```

**2. .env.local**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...  # Da clerk.com
CLERK_SECRET_KEY=sk_test_...                   # Da clerk.com
DATABASE_URL=postgresql://...                   # Lascia default per locale
```

**3. package.json**
```json
{
  "name": "tuo-progetto",
  "author": "Tuo Nome <email@example.com>"
}
```

## Componenti UI - Utilizzo Immediato

```tsx
import { Button, Card, Input } from '@/components/ui';

// Button
<Button variant="primary">Clicca</Button>
<Button variant="danger" isLoading>Caricamento...</Button>

// Card
<Card variant="elevated">
  <Card.Header><h2>Titolo</h2></Card.Header>
  <Card.Body>Contenuto</Card.Body>
  <Card.Footer><Button>Azione</Button></Card.Footer>
</Card>

// Input
<Input
  label="Email"
  type="email"
  error="Email non valida"
  helperText="Inserisci la tua email"
/>
```

## Comandi Essenziali

```bash
npm run dev              # Sviluppo
npm run build-local      # Build locale
npm run test             # Test
npm run lint             # Linting
npm run db:studio        # Database UI
```

## Link Utili

- **Setup Completo:** [SETUP.md](SETUP.md)
- **Documentazione:** [README.md](README.md)
- **Clerk:** https://clerk.com
- **Database:** https://www.prisma.io/?via=nextjsboilerplate

## Struttura Progetto

```
src/
├── app/                 # Routes Next.js
│   └── [locale]/       # Route multi-lingua
├── components/
│   ├── ui/             # ← COMPONENTI RIUTILIZZABILI
│   └── ...             # Altri componenti
├── utils/
│   └── AppConfig.ts    # ← CONFIGURAZIONE PRINCIPALE
├── locales/            # Traduzioni (en.json, it.json)
└── styles/             # Stili globali
```

## Supporto

Problemi? Vedi [SETUP.md](SETUP.md) per la guida completa.
