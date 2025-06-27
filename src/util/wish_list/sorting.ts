import type { CollectionEntry } from 'astro:content'

export const order = (a: CollectionEntry<'wish_list'>, b: CollectionEntry<'wish_list'>) => {
  // -1 => a < b
  //  0 => a = b
  // +1 => a > b

  if (a.data.price !== undefined && b.data.price !== undefined) {
    return a.data.price - b.data.price
  } else if (a.data.price !== undefined) {
    return -1
  } else if (b.data.price !== undefined) {
    return +1
  }

  if ((a.data.name ?? '') < (b.data.name ?? '')) {
    return -1
  } else if ((a.data.name ?? '') > (b.data.name ?? '')) {
    return +1
  }

  return 0
}