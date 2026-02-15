import { defineCollection } from 'astro:content'
import { airtableLoader } from '@ascorbic/airtable-loader'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/blog",
    }),
    schema: z.object({
        title: z.string(),
        slug: z.string().optional(),
        publish_date: z.date(),
        update_date: z.date().optional(),
    }),
})

const wish_list = defineCollection({
    loader: airtableLoader({
        base: import.meta.env.BASE_WISH_LIST,
        table: "Wish List",
    }),
})

export const collections = {
    blog,
    wish_list,
}
