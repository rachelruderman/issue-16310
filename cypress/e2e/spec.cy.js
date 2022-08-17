describe('Okta', function () {
  beforeEach(function () {
    cy.task('db:seed')
    cy.loginByOktaApi(
      Cypress.env('auth_username'),
      Cypress.env('auth_password')
    )
  })

  it('shows onboarding', function () {
    cy.contains('Get Started').should('be.visible')
  })
})