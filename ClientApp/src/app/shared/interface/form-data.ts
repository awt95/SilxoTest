export interface FormData {
  id: number;
  question: string;
  controlType: string;
  valueType?: string;
  category: string;
  options?: Array<{
    name: string;
    value: string;
  }>;
  validators?: {
    required?: boolean;
  }
}
