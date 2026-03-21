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

export interface Category {
  id: string;
  nameHr: string;
  nameRu: string;
  nameUk: string;
  nameEn: string;
  sortOrder: number;
  isActive: boolean;
}

export interface WordSet {
  id: string;
  categoryId: string;
  nameHr: string;
  nameRu: string;
  nameUk: string;
  nameEn: string;
  sortOrder: number;
  isActive: boolean;
  wordCount?: number;
}

export interface Word {
  id: string;
  wordSetId: string;
  baseForm: string;
  pluralForm?: string | null;
  translationRu: string;
  translationUk: string;
  translationEn: string;
  sentenceHr?: string | null;
  sentenceBlankAnswer?: string | null;
  wrongOptions?: string[] | null;
  sortOrder: number;
  exerciseConfigs: WordExerciseConfig[];
}

export interface WordExerciseConfig {
  id: string;
  wordId: string;
  exerciseType: ExerciseType;
}

export interface CreateSessionRequest {
  wordSetId: string;
  exerciseType: ExerciseType;
}

export interface SessionWord {
  wordId: string;
  baseForm: string;
  pluralForm?: string | null;
  translationRu: string;
  translationUk: string;
  translationEn: string;
}

export interface SessionResponse {
  id: string;
  exerciseType: ExerciseType;
  wordSetId: string;
  status: SessionStatus;
  words: SessionWord[];
  totalQuestions: number;
}

export interface FinishSessionRequest {
  answers: {
    wordId: string;
    givenAnswer: string;
    isCorrect: boolean;
  }[];
}

export interface FinishSessionResponse {
  sessionId: string;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  newXpTotal: number;
  currentStreak: number;
  longestStreak: number;
}

export interface GamificationStats {
  xpTotal: number;
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate?: string | null;
}
