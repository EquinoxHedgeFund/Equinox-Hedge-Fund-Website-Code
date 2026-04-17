import axios from 'axios'

const strapi = axios.create({
  baseURL: '/strapi/api',
})

// Strapi v4 wraps responses in { data: [{ id, attributes: {...} }], meta }
function flattenItem(item) {
  if (!item) return null
  const { id, attributes } = item
  return { id, ...attributes }
}

export function unwrapCollection(response) {
  const items = response.data?.data || []
  return items.map(flattenItem)
}

export function unwrapSingle(response) {
  const item = response.data?.data
  return flattenItem(item)
}

export default strapi
