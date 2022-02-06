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
        screen.debug()
      fireEvent.change(screen.getByTestId('select'), {
        target: { value: "DVD" },
        });
        userEvent.type(screen.getByLabelText(/Size/i) , '200')

        expect(screen.getByText("Please, provide size"))  
        userEvent.click(screen.getByText('Save'))

    });
  });



  describe('test in setProduct component ', () => {
    test('test write Book product ',  () => {
      const { result }  = render(<SetProduct />);

      userEvent.type(screen.getByLabelText(/Price/i) , '200')
      userEvent.type(screen.getByLabelText(/SKU/i) , 'SKUTest002')
      userEvent.type(screen.getByLabelText(/Name/i) , 'nameTest002')
      fireEvent.change(screen.getByTestId('select'), {
        target: { value: "Book" },
        });
        
        userEvent.type(screen.getByLabelText(/Weight/i) , '200')
        expect(screen.getByText("Please, provide weight")) 
        userEvent.click(screen.getByText('Save'))

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
        userEvent.type(screen.getByLabelText(/Heihgt/i) , '200')
        userEvent.type(screen.getByLabelText(/Lenght/i) , '200')
        userEvent.type(screen.getByLabelText(/Width/i) , '200')

      expect(screen.getByText("Please, provide dimensions")) 
      userEvent.click(screen.getByText('Save'))
          
    });

  });
