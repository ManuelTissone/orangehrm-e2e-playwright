import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { AdminPage } from "../pages/admin.page";
import { PimPage } from "../pages/pim.page";
import { testUsers } from "../fixtures/testData";

test("Successful login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await loginPage.logout();
  await expect(page.getByRole("textbox", { name: "Username" })).toBeVisible();
});

test("Admin - Edit company information", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await adminPage.navigate(
    "/web/index.php/admin/viewOrganizationGeneralInformation"
  );
  await adminPage.clickEdit();
  await adminPage.editCompanyInfo(
    testUsers.organization.organizationName,
    testUsers.organization.organizationEmail
  );
  await adminPage.saveChanges();
  await expect(page.getByText("Successfully Updated")).toBeVisible();
});

test("PIM - Create employee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await pimPage.navigateToPIM();
  await pimPage.clickAdd();
  await pimPage.fillEmployeeInfo(
    testUsers.employee.employeeName,
    testUsers.employee.employeeLastName
  );
  await pimPage.saveEmployee();
  await expect(page.getByText("Successfully saved")).toBeVisible();
});

test("PIM - Edit employee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await pimPage.navigateToPIM();
  await pimPage.searchEmployee(testUsers.employee.employeeName);
  await pimPage.clickEditEmployee();
  await pimPage.fillEmployeeInfo(
    testUsers.employeeEdit.employeeName,
    testUsers.employeeEdit.employeeLastName
  );
  await pimPage.saveEdit();
  await expect(page.getByText("Successfully saved")).toBeVisible();
  await page.reload();
});
test("PIM - Delete employee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  //Crear empleado (setup)
  await pimPage.navigateToPIM();
  await pimPage.clickAdd();
  await pimPage.fillEmployeeInfo("ToDelete", "Employee");
  await pimPage.saveEmployee();
  await expect(page.getByText("Successfully saved")).toBeVisible();
  await pimPage.navigateToPIM();
  await pimPage.searchEmployee("ToDelete");
  await pimPage.deleteEmployee();
  await pimPage.confirmDelete();
  await expect(page.getByText("Successfully Deleted")).toBeVisible();
});
test("Validate login error messages", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step("Should open login page", async () => {
    await loginPage.navigate("/web/index.php/auth/login");
  });
  await test.step("Login with invalid user", async () => {
    await loginPage.login(
      testUsers.invalidUser.username,
      testUsers.invalidUser.password
    );
  });
  await test.step("Validate error message", async () => {
    await expect(page.getByText("Invalid credentials")).toBeVisible();
  });
});
test("Search employees", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  await loginPage.navigate("/web/index.php/auth/login");
  await loginPage.login(testUsers.admin.username, testUsers.admin.password);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await pimPage.navigateToPIM();
  await pimPage.clickAdd();
  await pimPage.fillEmployeeInfo(
    testUsers.employee.employeeName,
    testUsers.employee.employeeLastName
  );
  await pimPage.saveEmployee();
  await expect(page.getByText("Successfully saved")).toBeVisible();
  await pimPage.navigateToPIM();
  await page.waitForTimeout(2000);
  await pimPage.searchEmployee(testUsers.employee.employeeName);
  await expect(
    page.getByRole("row", { name: new RegExp(testUsers.employee.employeeName) })
  ).toBeVisible();
});
