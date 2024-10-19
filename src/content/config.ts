import { defineCollection } from 'astro:content'
import { airtableLoader } from '@ascorbic/airtable-loader'

const categories = defineCollection({
    loader: airtableLoader({
        base: import.meta.env.BASE_WISH_LIST,
        table: "Category",
    })
})

const wish_list = defineCollection({
    loader: airtableLoader({
        base: import.meta.env.BASE_WISH_LIST,
        table: "Wish List",
    }),
})

export const collections = { categories, wish_list }
