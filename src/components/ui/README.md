# Componenti UI Riutilizzabili

Questa cartella contiene componenti UI pronti all'uso per i tuoi progetti.

## Utilizzo

```typescript
// Import singolo
import { Button } from '@/components/ui';

// Import multiplo
import { Button, Card, Input } from '@/components/ui';
```

## Componenti Disponibili

### Button

Pulsante interattivo con diverse varianti e stati.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `fullWidth`: boolean
- Tutti gli attributi HTML button standard

**Esempi:**

```tsx
// Basic
<Button>Clicca qui</Button>

// Con variante
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secondario</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Con dimensioni
<Button size="sm">Piccolo</Button>
<Button size="md">Medio</Button>
<Button size="lg">Grande</Button>

// Con loading
<Button isLoading>Caricamento...</Button>

// Full width
<Button fullWidth>Tutta la larghezza</Button>

// Disabilitato
<Button disabled>Disabilitato</Button>

// Combinazioni
<Button
  variant="danger"
  size="lg"
  onClick={() => alert('Cliccato!')}
>
  Elimina Account
</Button>
```

---

### Card

Container versatile per raggruppare contenuto.

**Componenti:**
- `Card`: Container principale
- `Card.Header`: Header della card
- `Card.Body`: Corpo principale
- `Card.Footer`: Footer della card

**Props Card:**
- `variant`: 'default' | 'bordered' | 'elevated'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- Tutti gli attributi HTML div standard

**Esempi:**

```tsx
// Basic
<Card>
  <h3>Titolo</h3>
  <p>Contenuto</p>
</Card>

// Con varianti
<Card variant="default">Default</Card>
<Card variant="bordered">Con bordo</Card>
<Card variant="elevated">Elevata</Card>

// Con padding
<Card padding="none">Nessun padding</Card>
<Card padding="sm">Padding piccolo</Card>
<Card padding="lg">Padding grande</Card>

// Struttura completa
<Card variant="elevated" padding="lg">
  <Card.Header>
    <h2 className="text-2xl font-bold">Titolo Card</h2>
    <p className="text-gray-500">Sottotitolo</p>
  </Card.Header>

  <Card.Body>
    <p>Questo è il contenuto principale della card.</p>
    <p>Può contenere qualsiasi elemento React.</p>
  </Card.Body>

  <Card.Footer>
    <div className="flex gap-2">
      <Button variant="primary">Conferma</Button>
      <Button variant="ghost">Annulla</Button>
    </div>
  </Card.Footer>
</Card>

// Card prodotto esempio
<Card variant="bordered">
  <img src="/product.jpg" alt="Prodotto" className="w-full" />
  <Card.Body>
    <h3 className="text-xl font-semibold">Nome Prodotto</h3>
    <p className="text-gray-600">€99.99</p>
  </Card.Body>
  <Card.Footer>
    <Button fullWidth>Aggiungi al carrello</Button>
  </Card.Footer>
</Card>
```

---

### Input

Campo di input con label, errori e helper text.

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- Tutti gli attributi HTML input standard

**Esempi:**

```tsx
// Basic
<Input placeholder="Scrivi qui..." />

// Con label
<Input
  label="Email"
  type="email"
  placeholder="tua@email.com"
/>

// Con errore
<Input
  label="Password"
  type="password"
  error="Password troppo corta"
/>

// Con helper text
<Input
  label="Username"
  helperText="Minimo 3 caratteri, solo lettere e numeri"
/>

// Con icone
<Input
  label="Cerca"
  placeholder="Cerca..."
  leftIcon={<SearchIcon />}
/>

<Input
  label="Password"
  type="password"
  rightIcon={<EyeIcon />}
/>

// Form completo esempio
function LoginForm() {
  const [errors, setErrors] = useState({});

  return (
    <form>
      <Input
        label="Email"
        type="email"
        name="email"
        error={errors.email}
        placeholder="tua@email.com"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        error={errors.password}
        helperText="Minimo 8 caratteri"
      />

      <Button type="submit" fullWidth>
        Accedi
      </Button>
    </form>
  );
}
```

---

### LocaleSwitcher

Componente per cambiare lingua (già incluso nel boilerplate).

**Esempio:**

```tsx
import { LocaleSwitcher } from '@/components/ui';

<LocaleSwitcher />
```

---

## Aggiungere Nuovi Componenti

### 1. Crea il file del componente

```typescript
// src/components/ui/NuovoComponente.tsx
import type { HTMLAttributes, ReactNode } from 'react';

interface NuovoComponenteProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'special';
  children: ReactNode;
}

export function NuovoComponente({
  variant = 'default',
  children,
  className = '',
  ...props
}: NuovoComponenteProps) {
  return (
    <div className={`nuovo-componente ${className}`} {...props}>
      {children}
    </div>
  );
}
```

### 2. Esporta nel file index

```typescript
// src/components/ui/index.ts
export { NuovoComponente } from './NuovoComponente';
```

### 3. Usa il componente

```tsx
import { NuovoComponente } from '@/components/ui';

<NuovoComponente variant="special">
  Contenuto
</NuovoComponente>
```

---

## Best Practices

### 1. Type Safety

Sempre usa TypeScript per i componenti:

```typescript
// ✅ Buono
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

// ❌ Evita
function Button({ variant, ...props }: any) { }
```

### 2. Composizione

Preferisci composizione rispetto a props complesse:

```tsx
// ✅ Buono
<Card>
  <Card.Header>Titolo</Card.Header>
  <Card.Body>Contenuto</Card.Body>
</Card>

// ❌ Evita
<Card
  header="Titolo"
  body="Contenuto"
  hasHeader
  hasFooter
/>
```

### 3. Accessibilità

Usa attributi ARIA appropriati:

```tsx
<button
  aria-label="Chiudi"
  aria-disabled={isLoading}
>
  <CloseIcon />
</button>
```

### 4. Tailwind Classes

Usa Tailwind in modo consistente:

```tsx
// ✅ Buono
const baseStyles = 'px-4 py-2 rounded-lg';
const variantStyles = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-gray-600 text-white',
};

// ❌ Evita CSS inline
<button style={{ padding: '8px 16px', borderRadius: '8px' }}>
```

### 5. Naming

Usa nomi descrittivi e consistenti:

```tsx
// ✅ Buono
<Button variant="primary" size="lg" />

// ❌ Evita abbreviazioni oscure
<Btn var="p" sz="l" />
```

---

## Storybook

Ogni componente dovrebbe avere una story:

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Caricamento...',
  },
};
```

Avvia Storybook:
```bash
npm run storybook
```

---

## Testing

Esempio di test per componenti:

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByText('Caricamento...')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

---

## Prossimi Componenti da Aggiungere

Considera di aggiungere:

- [ ] **Modal** - Dialog modale
- [ ] **Dropdown** - Menu a tendina
- [ ] **Tabs** - Navigazione a tab
- [ ] **Badge** - Etichette colorate
- [ ] **Avatar** - Immagini profilo circolari
- [ ] **Toast/Notification** - Notifiche temporanee
- [ ] **Tooltip** - Suggerimenti al passaggio del mouse
- [ ] **Select** - Select personalizzato
- [ ] **Checkbox** - Checkbox stilizzato
- [ ] **Radio** - Radio button stilizzato
- [ ] **Switch/Toggle** - Interruttore on/off
- [ ] **Skeleton** - Loading placeholders
- [ ] **Spinner** - Loading spinner
- [ ] **Progress** - Barra di progresso
- [ ] **Alert** - Messaggi di avviso

---

## Risorse

- [Tailwind CSS Components](https://tailwindui.com/components)
- [Headless UI](https://headlessui.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Contribuisci!** Hai creato un componente utile? Aggiungilo alla collezione!
