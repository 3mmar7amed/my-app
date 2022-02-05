import SetProduct from "../component/SetProducts";
import { render } from '@testing-library/react';

describe('test if the component is rendered ', () => {
    test('test setProduct component ', () => {
      const result = render(<SetProduct />);
      const product_form = result.container.querySelector('product_form')
      const price = result.container.querySelector('price')
      const name = result.container.querySelector('name')
      const SKU = result.container.querySelector('SKU')
      const productType = result.container.querySelector('productType')
      result.debug()


    });
  });