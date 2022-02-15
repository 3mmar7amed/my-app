import { cyan } from "material-ui/colors"


describe("add products" , ()=> {
    it("add Book product" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('SKUTest002');
        cy.findByRole('textbox', { name: /Price/i }).type('200');
        cy.findByRole('textbox', { name: /Name/i }).type('NameTest002');
        cy.findByLabelText('Type').type('Book{enter}');
        cy.findByRole('textbox', { name: /Weight/i }).type('200');
        cy.wait(5000)
        cy.findByRole('button', {name: /Save/i}).click()
        

    })
})

describe("add products" , ()=> {
    it("add DVD product" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('SKUTest001');
        cy.findByRole('textbox', { name: /Price/i }).type('100');
        cy.findByRole('textbox', { name: /Name/i }).type('NameTest001');
        cy.findByLabelText('Type').type('DVD{enter}');
        cy.findByRole('textbox', { name: /Size/i }).type('100');
        cy.wait(5000)
        cy.findByRole('button', {name: /Save/i}).click()

        

    })
})





describe("add products" , ()=> {
    it("add product" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('SKUTest003');
        cy.findByRole('textbox', { name: /Price/i }).type('300');
        cy.findByRole('textbox', { name: /Name/i }).type('NameTest003');
        cy.findByLabelText('Type').type('Furniture{enter}');
        cy.findByRole('textbox', { name: /Lenght/i }).type('300');
        cy.findByRole('textbox', { name: /Width/i }).type('300');
        cy.findByRole('textbox', { name: /Heihgt/i }).type('300');
        cy.wait(5000)
        cy.findByRole('button', {name: /Save/i}).click()
        cy.findByText("Cancel").click()


    })
})
