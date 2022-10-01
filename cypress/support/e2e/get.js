describe('Petstore API Inventory Testing', () => {
    it('get store inventory - GET', () => {
        cy.request('/store/inventory').as('getInventory');
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})