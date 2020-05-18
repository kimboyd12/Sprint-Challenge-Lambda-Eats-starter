
describe("testing form inputs", () => {
    beforeEach(function () {
        cy.visit("http://localhost:3000/order");
    });

    it("input name", () => {
        cy.get('input[name="name"]')
        .type("Kim Boyd")
        .should("have.value", "Kim Boyd")
    })

    it("select toppings", () => {
        cy.get('input[type="checkbox"]').check()
        .should("be.checked");
    })

    it("submit order", () => {
        cy.get('form').submit()
    })
})