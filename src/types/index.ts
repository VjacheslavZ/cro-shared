export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
}

export enum NativeLanguage {
  RU = 'RU',
  UK = 'UK',
  EN = 'EN',
}

export enum ExerciseType {
  JEDNINA_MNOZINA = 'JEDNINA_MNOZINA',
  FLASHCARDS = 'FLASHCARDS',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
}

export enum SessionStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ABANDONED = 'ABANDONED',
}

export enum SubscriptionStatus {
  TRIALING = 'TRIALING',
  ACTIVE = 'ACTIVE',
  PAST_DUE = 'PAST_DUE',
  CANCELED = 'CANCELED',
  EXPIRED = 'EXPIRED',
}

export enum Platform {
  STRIPE = 'STRIPE',
  APP_STORE = 'APP_STORE',
  GOOGLE_PLAY = 'GOOGLE_PLAY',
}

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  role: UserRole;
  nativeLanguage: NativeLanguage | null;
  xpTotal: number;
  currentStreak: number;
}
