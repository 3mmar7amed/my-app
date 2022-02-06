
describe("delete products" , ()=> {
    it("delete all products using MASS DELETE button" , ()=> {
        cy.visit('https://juniortest-amar-hamed.herokuapp.com/')
        cy.findAllByRole('checkbox').check()
        cy.findByText("MASS DELETE").click()
    })
})