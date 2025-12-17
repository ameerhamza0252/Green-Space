export enum Page {
  HOME = 'HOME',
  DONATE = 'DONATE',
  VOLUNTEER = 'VOLUNTEER',
  ABOUT = 'ABOUT'
}

export interface DonationOption {
  amount: number;
  label: string;
  description: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
