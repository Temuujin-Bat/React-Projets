/* eslint-disable react-refresh/only-export-components */
import { Filters, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch(url, {
      params,
    });
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
    </>
  );
}
