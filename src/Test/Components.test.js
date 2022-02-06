import SetProduct from "../component/SetProducts";
import { render , fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {screen} from '@testing-library/dom'

describe('test in setProduct component ', () => {
    test('test write DVD product ', () => {
      const result = render(<SetProduct />);

      userEvent.type(screen.getByLabelText(/Price/i) , '100')
      userEvent.type(screen.getByLabelText(/SKU/i) , 'SKUTest001')
      userEvent.type(screen.getByLabelText(/Name/i) , 'nameTest001')

      fireEvent.change(screen.getByTestId('select'), {
        target: { value: "DVD" },
        });
        expect(screen.getByText("Please, provide size"))  

      fireEvent.change(screen.getByTestId('select'), {
        target: { value: "Book" },
        });
          expect(screen.getByText("Please, provide weight")) 

    });
  });



  describe('test in setProduct component ', () => {
    test('test write Book product ', () => {
      const result = render(<SetProduct />);

      userEvent.type(screen.getByLabelText(/Price/i) , '200')
      userEvent.type(screen.getByLabelText(/SKU/i) , 'SKUTest002')
      userEvent.type(screen.getByLabelText(/Name/i) , 'nameTest002')

      fireEvent.change(screen.getByTestId('select'), {
        target: { value: "Book" },
        });
          expect(screen.getByText("Please, provide weight")) 

    });
  });


  
  describe('test in setProduct component ', () => {
    test('test write Furniture product ', () => {
      const result = render(<SetProduct />);

      userEvent.type(screen.getByLabelText(/Price/i) , '200')
      userEvent.type(screen.getByLabelText(/SKU/i) , 'SKUTest003')
      userEvent.type(screen.getByLabelText(/Name/i) , 'nameTest003')

      fireEvent.change(screen.getByTestId('select'), {
        target: { value: "Furniture" },
        });
          expect(screen.getByText("Please, provide dimensions")) 

    });
  });