import { cyan } from "material-ui/colors"

describe("add products" , ()=> {
    it("add product" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('SKUTest001');
        cy.findByRole('textbox', { name: /Price/i }).type('100');
        cy.findByRole('textbox', { name: /Name/i }).type('NameTest001');
        cy.findByLabelText('Type').type('DVD{enter}');
        cy.findByRole('textbox', { name: /Size/i }).type('100');
        cy.findByRole('button', {name: /Save/i}).click()
        cy.findByText("Cancel").click()

    })
})


describe("add products" , ()=> {
    it("add product" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('SKUTest001');
        cy.findByRole('textbox', { name: /Price/i }).type('100');
        cy.findByRole('textbox', { name: /Name/i }).type('NameTest001');
        cy.findByLabelText('Type').type('DVD{enter}');
        cy.findByRole('textbox', { name: /Size/i }).type('100');
        cy.findByRole('button', {name: /Save/i}).click()
        cy.findByText("Cancel").click()

    })
})
