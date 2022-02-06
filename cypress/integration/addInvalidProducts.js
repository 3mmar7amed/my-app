
describe("add invalid DVD Product" , ()=> {
    it("raise a warning message saying (Please, provide the data of indicated type)" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('#InvalidSKU');
        cy.findByRole('textbox', { name: /Price/i }).type('Not Price');
        cy.findByRole('textbox', { name: /Name/i }).type('InvalidName$#');
        cy.findByLabelText('Type').type('DVD{enter}');
        cy.findByRole('textbox', { name: /Size/i }).type('InvalidInput');
        cy.findByRole('button', {name: /Save/i}).click()


        cy.findByLabelText('Type').type('DVD{enter}');
        cy.findByRole('textbox', { name: /Weight/i }).type('InvalidInput');
        cy.findByRole('button', {name: /Save/i}).click()


    })
})


describe("add invalid Book Products" , ()=> {
    it("raise a warning message saying (Please, provide the data of indicated type)" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('#InvalidSKU');
        cy.findByRole('textbox', { name: /Price/i }).type('Not Price');
        cy.findByRole('textbox', { name: /Name/i }).type('InvalidName$#');
        cy.findByLabelText('Type').type('Book{enter}');
        cy.findByRole('textbox', { name: /Weight/i }).type('InvalidInput');
        cy.findByRole('button', {name: /Save/i}).click()


    })
})


describe("add invalid Furniture Products" , ()=> {
    it("raise a warning message saying (Please, provide the data of indicated type)" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('#InvalidSKU');
        cy.findByRole('textbox', { name: /Price/i }).type('Not Price');
        cy.findByRole('textbox', { name: /Name/i }).type('InvalidName$#');
        cy.findByLabelText('Type').type('Furniture{enter}');
        cy.findByRole('textbox', { name: /Lenght/i }).type('InvalidInput');
        cy.findByRole('textbox', { name: /Width/i }).type('InvalidInput');
        cy.findByRole('textbox', { name: /Heihgt/i }).type('InvalidInput');

        cy.findByRole('button', {name: /Save/i}).click()


    })
})



describe("add a non-completed Products " , ()=> {
    it("raise a warning message saying (Please, submit required data) " , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/addproduct')
        cy.findByRole('textbox', { name: /SKU/i }).type('#InvalidSKU');
        cy.findByRole('textbox', { name: /Price/i }).type('Not Price');
        cy.findByLabelText('Type').type('Furniture{enter}');
        cy.findByRole('textbox', { name: /Lenght/i }).type('InvalidInput');
        cy.findByRole('textbox', { name: /Width/i }).type('InvalidInput');
        cy.findByRole('textbox', { name: /Heihgt/i }).type('InvalidInput');
        cy.findByRole('button', {name: /Save/i}).click()
    })
})