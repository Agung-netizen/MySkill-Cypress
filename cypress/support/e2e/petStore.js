describe('Petstore API Inventory Testing', () => {
    it('Create a user', () => {
        let body = {
            "id": 0,
            "username": Cypress.env('username'),
            "firstName": "as",
            "lastName": "123",
            "email": "123",
            "password": Cypress.env('password'),
            "phone": "1231413",
            "userStatus": 0
          }
        console.log(body)
        cy.request('POST', '/user', body).as('createUser');
        // adds new Todo item by defining Todo name
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200);
        });
    });

    const loginUser = {
        method : 'GET',
        url : '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('Login registered user', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.eq(200);
        });
    }

    )
})