import { FormData } from './form-data'

export const MockData: FormData[] = [
  {
    question: 'What is your company size? Size of your IT team (if any)',
    controlType: 'text',
    valueType: 'text',
    category: 'Admin',
    validators: {
      required: true
    }
  },
  {
    question: 'Do you maintain a series of documents / diagrams capturing your architecture?',
    controlType: 'radio',
    category: 'Admin',
    options: [{
      name: 'Yes',
      value: 'Yes'
    }, {
      name: 'No',
      value: 'No'
      }],
    validators: {
      required: true
    }
  }
]
