import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import {  contactFormSchema } from '../contact-form'
import { images } from '../images'
import { latest } from '../latest-products'
import { trend } from '../trend'
import { categories } from '../categories'
import { blog } from '../blog'
import { pages } from '../pages'
import { order } from '../order'
import { shopList } from '../shopList'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [images,shopList,post,contactFormSchema,latest,trend,categories,blog,pages,order],
}
