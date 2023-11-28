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

  /*it('TC-01: Verify that graph shows after selecting Department, Report Type, Employment Status and clicking on submit button', function () {
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
  it('TC-07: Verify that user navigate to the soft skill page  after clicking on the Soft skill Review button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
    cy.xpath("//a[normalize-space()='Skill Review']").click()
    cy.get('.oe_menu_text').contains('Soft Skill Review').click()
    cy.get('.breadcrumb>.active').contains('Soft Skill Review') 
    
  })
  it('TC-08: Verify that user navigates to the Employee profile details page after clicking on the name of the Employee', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.xpath("//div[@class='o_kanban_record_headings']").click()
    cy.xpath("//div[normalize-space()='Contact Information']").contains('Contact Information')
    
  })
  it('TC-09: Verify that Search button is working properly when searching by an employee name on the employee page', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.get('.fa.fa-sm.fa-remove.o_facet_remove').click()
    cy.get('.o_searchview_input').type('Hasib')
    cy.get('.o_searchview_input').type('{enter}')
    cy.xpath("//div[@class='o_kanban_view o_hr_employee_kanban o_kanban_ungrouped']").contains('Md. Hasib Al Zadid')
  })
  it('TC-10: Verify that filter is working properly when searching by a specific filter option on the employee page', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.get('.o_searchview_more.fa.fa-search-plus').click()
    cy.get('.fa.fa-sm.fa-remove.o_facet_remove').click()
    cy.xpath("//button[normalize-space()='Filters']").click()
    cy.xpath("//a[normalize-space()='Absent Today']").click()
    cy.get('.o_kanban_view.o_hr_employee_kanban.o_kanban_ungrouped').should('exist')
    cy.get('.breadcrumb>.active').click()
  })
  it('TC-11: Verify that Group by filter is working properly when searching by a specific group by option on the employee page', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.get('.fa.fa-sm.fa-remove.o_facet_remove').click()
    cy.xpath("//span[@class='fa fa-bars']").click()
    cy.xpath("//a[normalize-space()='Job Role']").click()
    cy.wait(10000)
    cy.get('.breadcrumb>.active').click()
    cy.get('.o_content').contains('CEO')
  })*/
  it('TC-12: Verify that Favorites filter is working properly when selecting an option from the Favorites tab on the employee page', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.get('.fa.fa-sm.fa-remove.o_facet_remove').click()
    cy.xpath("//span[@title='Advanced Search...']").click()
    cy.xpath("//button[normalize-space()='Favorites']").click()
    cy.xpath("//a[normalize-space()='Job Rank']").click()
    cy.wait(10000)
    cy.get('.breadcrumb>.active').click()
    cy.get('.o_content').contains('4A')
  })
  it('TC-13: Verify that user navigates to the Employee profile details page after clicking on the name of the Employee and verify the PrintCv button', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.xpath("//div[@class='o_kanban_record_headings']").click()
    cy.xpath("//div[normalize-space()='Contact Information']").contains('Contact Information')
    cy.get('.btn.btn-sm.btn-default.oe_highlight').contains('Print CV').click()
    cy.xpath("//span[normalize-space()='Cancel']").click()
    
  })
  it('TC-14: Verify that user navigates to the Employee profile details page after clicking on the name of the Employee and verify the DetailInfo button navigate to the detail page of the employee', function () {
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.reload()
    cy.xpath("//a[@class='oe_menu_leaf']//span[@class='oe_menu_text'][normalize-space()='Employees']").click()
    cy.xpath("//div[@class='o_kanban_record_headings']").click()
    cy.xpath("//div[normalize-space()='Contact Information']").contains('Contact Information')
    cy.get('.btn.btn-sm.btn-default.oe_highlight').contains('Details Info.').click()
    cy.xpath("//td[normalize-space()='Md. Hasibuzzaman']").click()
    cy.get('.tab-content.nav.nav-tabs').contains('Contact Information')
    cy.xpath("//div[@class='o_statusbar_buttons']//button[@class='btn btn-sm btn-default'][normalize-space()='Cancel']").click()
    
  })
  

})