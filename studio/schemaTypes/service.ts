import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Szolgáltatások',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Szolgáltatás neve',
            type: 'string',
            description: 'Pl.: Vízvezetékszerelés, Burkolás, Festés',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL útvonal (Slug)',
            type: 'slug',
            description: 'Ebből generálódik a weboldal címe (pl.: /szolgaltatasok/vizvezetekszereles)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Rövid leírás',
            type: 'text',
            description: 'Ez jelenik meg a főoldali kártyákon (1-2 mondat).',
            rows: 3,
        }),
        defineField({
            name: 'mainImage',
            title: 'Főkép',
            type: 'image',
            options: {
                hotspot: true, // Lehetővé teszi a kép vágását a felületen
            },
        }),
        defineField({
            name: 'body',
            title: 'Részletes tartalom',
            type: 'array',
            description: 'A szolgáltatás teljes, részletes leírása az aloldalra.',
            of: [{ type: 'block' }], // Ez a Sanity beépített "Rich Text" szerkesztője
        }),
    ],
})