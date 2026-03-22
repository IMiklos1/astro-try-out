import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'
import { SECTION_BASE_FIELDS, SECTION_BASE_GROUPS } from './sectionBase'

export default defineType({
    name: 'contactFormSection',
    title: 'Contact Form',
    type: 'object',
    icon: EnvelopeIcon,
    groups: SECTION_BASE_GROUPS,
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'markdown',
            group: 'content',
        }),
        defineField({
            name: 'services',
            title: 'Services',
            description: 'The list of services to show in the dropdown.',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'content',
        }),
        defineField({
            name: 'submitLabel',
            title: 'Submit Button Label',
            type: 'string',
            initialValue: 'Ajánlatkérés küldése',
            group: 'content',
        }),
        ...SECTION_BASE_FIELDS,
    ],
    preview: {
        select: {
            heading: 'heading',
            body: 'body',
        },
        prepare(selection) {
            return {
                title: `${selection.heading || selection.body || ''}`,
                subtitle: 'Contact Form',
            }
        },
    },
})
