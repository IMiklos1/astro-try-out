import { client } from '@utils/sanity-client';

const SERVICE_IMAGE = `{
  "_id": mainImage.asset->_id,
  "src": mainImage.asset->url,
  "dimensions": mainImage.asset->metadata.dimensions,
  "alt": mainImage.alt
}`;

const SERVICE_QUERY_OBJ = `{
  _id,
  _type,
  title,
  slug,
  shortDescription,
  "mainImage": ${SERVICE_IMAGE},
  body
}`;

export async function fetchAllServices() {
    return await client.fetch(`*[_type == "service"] | order(title asc) ${SERVICE_QUERY_OBJ}`);
}

export async function getServiceBySlug(slug) {
    return await client.fetch(`*[_type == "service" && slug.current == $slug][0] ${SERVICE_QUERY_OBJ}`, { slug });
}
