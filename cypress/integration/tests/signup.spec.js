
describe('Verify sign up', function() {
    it('Signup', function () {
        cy.fixture('secret').then((secretData) => {
            //var i = 0;
            //for (i = 0; i < 2; i++) {
                cy.log("Go to Home page");
                cy.visit(secretData.ruusterHomePage);
                cy.get('.button').eq(2).click();
                //cy.get('.button').click({force: true});
                cy.wait(3000);
                cy.get('.button').eq(2).click({force: true});
                cy.wait(3000);
                cy.get('input[name="firstName"]').type(secretData.FirstName, {force: true});
                cy.get('input[name="lastName"]').type(secretData.LastName, {force: true});
                secretData.lastEmailNum = parseInt(secretData.lastEmailNum) + 1;
                console.log(secretData.lastEmailNum);
                //cy.writeFile('D:/__PROJECTS__/Ruuster/cypress/fixtures/secret.json', JSON.stringify(secretData));
                cy.writeFile('./cypress/fixtures/secret.json', JSON.stringify(secretData));
                let emailForCode = secretData.email.replace("@", "+" + secretData.lastEmailNum + "@");
                cy.get('input[name="email"]').type(emailForCode, {force: true});
                cy.get('input[name="password"]').type(secretData.pass, {force: true});
                cy.get('button[type="submit"]').click({force: true});
                cy.wait(6000);

            cy.get('input[name="phone-number"]').type(secretData.phoneNumber, {force: true});
            cy.get('button[type="submit"]').click({force: true});
            cy.wait(5000);
            cy.request('http://localhost:3000/get_code_from_twillo')
                .then((response) => {
                    console.log(response.body[0].body.substring(0, 6));
                    let code = response.body[0].body.substring(0, 6);
                    cy.log(code);
                    cy.wait(5000);
                    cy.get('input[id="secure-account-code"]').type(code, {force: true});
                    cy.get('.button').click({force: true});
                    cy.wait(3000);
                    cy.get('input[name="name"]').type("Ruuster Agency", {force: true});

                    cy.get('#agentOnboardingMLS').click().type('California Regional MLS{enter}');
                    cy.get('.agent-onboarding').click('right',{force: true});
                    cy.wait(1000);
                    
                    //cy.get('.agent-onboarding-row.highlighted-block a').click();

                   // cy.get('[id="react-select-agentOnboardingMLS-placeholder"]').click({force: true});
                   // cy.get('.css-135zfgk').click({force: true});
                        //cy.get('#css-135zfgk select__multi-value__label').select('MRED Midwest Real Estate Data').check();
                    //cy.get('#react-select-agentOnboardingMLS-placeholder').select('California Regional MLS');
                    //cy.get('.button').click({force: true});
                    cy.get('.onboarding--content-answer-select').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-select').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    //cy.get('.content-answers-zip__placeholder').click({force: true})
                    //     .type("900",{force: true});
                     //.invoke('val', 25)
                    //cy.get('#onboarding-zip-select').trigger('focus',{force: true});
                        //.type("900",{force: true});
                    cy.wait(6000);
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-vertical-select').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-vertical-select').eq(2).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-select-inner').eq(2).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-vertical-select-inner').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-select-inner').eq(0).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-select-inner').eq(0).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-vertical-select').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('.onboarding--content-answer-vertical-select').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.get('button[type="button"]').eq(1).click({force: true});
                    cy.wait(4000);
                    cy.get('.introjs-button').eq(2).click({force: true});
                    cy.get('.introjs-button').eq(2).click({force: true});
                    cy.get('.introjs-button').eq(0).click({force: true});
                    cy.get('.sidebar-item').eq(1).click({force:true});

                });
        });
    });
});


