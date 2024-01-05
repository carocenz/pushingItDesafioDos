describe("Desafio 2", () => {
  let data;

  before(() => {
    cy.fixture("desafioDos").then((datosDesafioDos) => {
      //datosFixture es un barco
      data = datosDesafioDos;
    });
  });

  beforeEach(() => {
    cy.visit("");
    cy.xpath("//span[text()='Iniciá sesión']").dblclick();
    cy.xpath("//input[@id='user']").type(data.env.user);
    cy.xpath("//input[@id='pass']").type(data.env.password);
    cy.xpath("//button[starts-with(@type,'subm')]").click();
    cy.xpath("//a[text()='To Do List']").click();
    cy.wait(2000);
    cy.xpath("//button[@data-cy='removeAll']").click(); //elimina tareas existentes
    cy.wait(2000);
  });

  it("Test 1", () => {
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea1);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea2);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea3);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea4);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea5);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
  });

  it("Test 2", () => {
    cy.xpath("//button[@data-cy='all']").should("exist");
    cy.xpath("//button[@data-cy='completed']").should("exist");
    cy.xpath("//button[@data-cy='active']").should("exist");
    cy.xpath("//button[@data-cy='removeAll']").should("exist");
  });

  it.only("Test 3", () => {
    data.tareas.tarea6 = "Hacer el Desafio 2.";
    data.tareas.tarea7 = "Hacer la Actividad 4.";
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea6);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea7);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.wait(2000);
    cy.xpath("//p[contains(text(), '" + data.tareas.tarea6 + "')]").click();
    cy.wait(2000);
    cy.xpath("//p[contains(text(), '" + data.tareas.tarea7 + "')]").click();
    cy.wait(4000);
    cy.xpath(
      "//p[contains(text(), '" +
        data.tareas.tarea7 +
        "')]/following-sibling::button[contains(text(), 'Delete')]"
    ).click();
  });

  it("Test 4", () => {
    data.tareas.tarea8 = "Ordenar patio.";
    data.tareas.tarea9 = "Jugar con los gatos.";
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea8);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.xpath("//input[@type='text' and @id='task']")
      .wait(2000)
      .type(data.tareas.tarea9);
    cy.xpath("//div[@role='group']//ancestor::button[text()='Send']").click();
    cy.wait(2000);
    cy.xpath(
      "//p[contains(text(), '" +
        data.tareas.tarea8 +
        "')]/following-sibling::button[contains(text(), 'Delete')]"
    ).click();
  });
});
