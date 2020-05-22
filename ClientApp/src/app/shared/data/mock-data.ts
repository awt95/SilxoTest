import { FormData } from './../interface/form-data'

export const MockData: FormData[] = [
  {
    id: 1,
    question: 'What is your company size? Size of your IT team (if any)',
    controlType: 'text',
    valueType: 'text',
    category: 'Admin',
    validators: {
      required: true
    }
  },
  {
    id: 2,
    question: 'Do you maintain a series of documents / diagrams capturing your architecture?',
    controlType: 'radio',
    category: 'Admin',
    options: [{
      name: 'Yes',
      value: 'yes'
    }, {
      name: 'No',
      value: 'no'
      }],
    validators: {
      required: true
    }
  }
]
