import { defineField, defineType } from 'sanity'
import { PinIcon } from '@sanity/icons'
import { SECTION_BASE_FIELDS, SECTION_BASE_GROUPS } from './sectionBase'

export default defineType({
    name: 'serviceAreaSection',
    title: 'Service Area',
    type: 'object',
    icon: PinIcon,
    groups: SECTION_BASE_GROUPS,
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Hol vállalunk munkát?',
            group: 'content',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'markdown',
            group: 'content',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            description: 'Heading above the city list.',
            type: 'string',
            initialValue: 'Szolgáltatási területünk',
            group: 'content',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'Paragraph above the city list.',
            type: 'text',
            rows: 3,
            group: 'content',
        }),
        defineField({
            name: 'cities',
            title: 'Cities',
            description: 'List of cities/areas served.',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'content',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA text',
            description: 'Text shown below the city list (e.g. "Nem találja a települését?")',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone number',
            description: 'Displayed phone number (e.g. +36 70 429 4581)',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'phoneLink',
            title: 'Phone link',
            description: 'tel: link value (e.g. +36704294581)',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'mapEmbedUrl',
            title: 'Google Maps embed URL',
            description: 'The full src URL from a Google Maps embed iframe.',
            type: 'url',
            validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['https'] }),
            group: 'content',
        }),
        defineField({
            name: 'mapTitle',
            title: 'Map title',
            description: 'Accessible title for the map iframe.',
            type: 'string',
            group: 'content',
        }),
        ...SECTION_BASE_FIELDS,
    ],
    preview: {
        select: {
            heading: 'heading',
        },
        prepare(selection) {
            return {
                title: `${selection.heading || ''}`,
                subtitle: 'Service Area',
            }
        },
    },
})
