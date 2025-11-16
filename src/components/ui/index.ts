/**
 * UI Components Index
 *
 * Esporta tutti i componenti UI riutilizzabili
 * Importa i componenti da qui per mantenere un'architettura pulita
 *
 * Esempio:
 * import { Button, Card, Input } from '@/components/ui';
 */

// Re-export existing components
export { Hello } from '../Hello';
export { LocaleSwitcher } from '../LocaleSwitcher';
export { DemoBadge } from '../DemoBadge';
export { DemoBanner } from '../DemoBanner';
export { Sponsors } from '../Sponsors';

// Custom UI components
export { Button } from './Button';
export { Card, CardHeader, CardBody, CardFooter } from './Card';
export { Input } from './Input';

// Add more components as needed
// export { Modal } from './Modal';
// export { Dropdown } from './Dropdown';
// export { Tabs } from './Tabs';
// export { Badge } from './Badge';
