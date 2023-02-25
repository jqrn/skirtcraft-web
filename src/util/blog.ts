export const getBlogPostSlug = (node: { id: string; slug: string }) =>
  `${node.slug}-${node.id}`;
