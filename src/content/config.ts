import { defineCollection } from 'astro:content'
import { airtableLoader } from '@ascorbic/airtable-loader'

const wish_list = defineCollection({
    loader: airtableLoader({
        base: import.meta.env.BASE_WISH_LIST,
        table: "Wish List",
    }),
})

export const collections = { wish_list }
