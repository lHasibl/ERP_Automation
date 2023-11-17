///<reference types="Cypress" />
import 'cypress-xpath'
describe('Employee Module Validation', function () {
  function login() {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
  }
  
  let data;
  before(function () {
    // root-level hook
    // runs once before all tests
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.fixture('example').then(function (fdata) {
      data = fdata
      login();
    })
  })

  it('TC-01: Verify that graph shows after selecting Department, Report Type, Employment Status and clicking on submit button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
    cy.get('[name="department_id"]').click()
    cy.get('ul>li.ui-menu-item').contains('CEO / Admin').click()
    cy.get('.o_input.o_field_widget.o_required_modifier').select('Rank Wise Headcount')
    cy.get('.btn.btn-sm.oe_highlight').click()
    cy.get('img[name="dashboard_pie_image"]').should('exist')

  })
  it('TC-02: Verify that graph shows ENT-4 member pie graph after selecting Department as CEO / ED / ENT-4, Report Type as Rank wise head count, Employment Status as Regular and clicking on submit button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.get('[name="department_id"]').click()
    //cy.xpath("//a[normalize-space()='Search More...']").click()
    cy.get('ul>li.o_m2o_dropdown_option.ui-menu-item').contains('Search More...').click()
    cy.get('.o_searchview_input').type('ENT-4')
    cy.get('.o_searchview_input').each(($el, index, $list) => {
      if($el.text()==='ENT-4'){
        cy.wrap($el).click()
      }
    })
    cy.get('td.o_data_cell.o_readonly_modifier').contains('CEO / ED / ENT-4').click()
    cy.get('.o_input.o_field_widget.o_required_modifier').select('Rank Wise Headcount')
    cy.get('.btn.btn-sm.oe_highlight').click()
    cy.get('img[name="dashboard_pie_image"]').should('exist')

  })
  it('TC-03: Verify that graph shows CEO / ED / AI member pie graph after selecting Department as CEO / ED / AI, Report Type as Rank wise head count, Employment Status as Regular and clicking on submit button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
    cy.get('[name="department_id"]').click()
    cy.get('ul>li.ui-menu-item').contains('CEO / ED / AI').click()
    cy.get('.o_input.o_field_widget.o_required_modifier').select('Rank Wise Headcount')
    cy.get('.btn.btn-sm.oe_highlight').click()
    cy.get('img[name="dashboard_pie_image"]').should('exist')

  })
  it('TC-04: Verify that user navigate to the Department chart page after clicking on the Department chart button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
    cy.xpath("//span[normalize-space()='Department Chart']").click()
    cy.xpath("//div[contains(text(),'BJIT Limited')]").contains('BJIT Limited')
  })
  it('TC-05: Verify that user navigate to the Employee profile page after clicking on the Employee profile button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
    
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.xpath("//strong[@modifiers='{}']//span[contains(text(),'Md. Hasibuzzaman')]").contains('Md. Hasibuzzaman')
    
  })
  it('TC-06: Verify that user navigate to the Technical skill page  after clicking on the Technical skill Review button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
    cy.xpath("//a[normalize-space()='Skill Review']").click()
    cy.get('.oe_menu_text').contains('Technical Skill Review').click()
    cy.get('.breadcrumb>.active').contains('Technical Skill Review')
    
    
  })
 
  

})