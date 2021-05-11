it("shows title", () => {
  cy.visit("/");
  cy.contains("R.I.Pillows");
})
