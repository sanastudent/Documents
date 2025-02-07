

import { Rule } from '@sanity/types';

export const contactFormSchema = {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(100),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(5).max(150),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule: Rule) => Rule.optional().min(10).max(1000),
    },
  ],
};
