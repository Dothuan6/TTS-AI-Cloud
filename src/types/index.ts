export interface PartnerInfo {
  id: string;
  name: string;
  role: string;
  platform: 'GCP' | 'AWS';
  url: string;
  displayUrl: string;
  badge: string;
  description: string;
  specialties: string[];
  certifications: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'ai_cloud' | 'enterprise';
  icon: string;
  keyFeatures: string[];
  technologies: string[];
  businessImpact: string;
  demoType: 'chatbot' | 'analytics' | 'rpa' | 'migration' | 'erp' | 'crm' | 'bpm' | 'hrm';
}

export interface WhyUsPillar {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
  proofPoint: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailedPoints: string[];
  deliverable: string;
  duration: string;
  sla: string;
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  phoneOrEmail: string;
  interests: string[];
  customInterest?: string;
  companySize?: string;
  projectBudget?: string;
  timeline?: string;
  notes?: string;
}

export interface LeadSubmissionResult {
  id: string;
  createdAt: string;
  data: LeadFormData;
  dispatchedTo: {
    crm: boolean;
    email: boolean;
    telegramBot: boolean;
    zaloWebhook: boolean;
  };
}
