import { test, expect } from "@playwright/test";
import path from "path";
const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("test@test.com");
  await page.locator("[name=password]").fill("test1234");

  await page.getByRole("button", { name: "SIGN IN" }).click();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

test("should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${UI_URL}add-hotel`);

  await page.locator('[name="Hotel Name"]').fill("TestHotel");
  await page.locator('[name="City"]').fill("TestCity");
  await page.locator('[name="Country"]').fill("TestCountry");
  await page.locator('[name="Description"]').fill("TestDescription");
  await page.locator('[name="Price Per Night"]').fill("1000");
  await page.selectOption('select[name="Star Rating"]', "3");
  await page.getByText("Budget").click();
  await page.getByLabel("Free WiFi").check();
  await page.locator('[name="Adults"]').fill("10");
  await page.locator('[name="Children"]').fill("1");
  await page.setInputFiles('[name="Images"]', [
    path.join(__dirname, "files", "1.jpg"),
    path.join(__dirname, "files", "2.jpg"),
  ]);

  await page.getByRole("button", { name: "Save Hotel" }).click();
  await expect(page.getByText("Hotel Saved")).toBeVisible();
});
