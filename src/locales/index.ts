import { en } from './en';
import { fr } from './fr';
import type { Locale, Translation } from './types';

export const translations: Record<Locale, Translation> = { fr, en };
export type { Locale, Translation };
