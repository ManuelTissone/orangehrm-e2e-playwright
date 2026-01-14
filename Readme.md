# OrangeHRM E2E Automation - Playwright

[![Playwright Tests](https://github.com/ManuelTissone/orangehrm-e2e-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/ManuelTissone/orangehrm-e2e-playwright/actions)

End-to-end testing automation framework for OrangeHRM using Playwright and TypeScript. Demonstrates modern QA automation best practices with Page Object Model architecture, multi-browser support, and CI/CD integration.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [CI/CD Pipeline](#cicd-pipeline)
- [What's Implemented](#whats-implemented)
- [What's Coming](#whats-coming)

## Overview

This project automates critical user flows in OrangeHRM, covering:

- Login/Logout - Authentication workflows
- Admin Module - Company information management
- PIM Module - Employee lifecycle management

### Key Features

- Page Object Model - Clean separation of concerns
- Playwright Locators - Modern element selection (getByRole, getByLabel, etc.)
- Multi-Browser Testing - Chrome & Firefox (Chromium + Firefox)
- GitHub Actions CI/CD - Automated test runs on push/PR with branch protection
- HTML Reports - Screenshot and trace artifacts on failure
- Environment Variables - Secure credential management via GitHub Secrets
- Test Independence - Each test has complete setup, no test dependencies
- Accessibility-First Locators - Using semantic HTML roles for robustness

## Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | E2E testing framework |
| TypeScript | Type-safe test code |
| Node.js | Runtime environment |
| GitHub Actions | CI/CD pipeline |
| dotenv | Environment configuration |

## Project Structure
```
orangehrm-e2e-playwright/
├── tests/
│   ├── e2e/
│   │   └── orangehrm.spec.ts       # Test cases (8/10 completed)
│   ├── pages/
│   │   ├── base.page.ts            # Base Page Object with common methods
│   │   ├── login.page.ts           # Login/logout flows
│   │   ├── admin.page.ts           # Admin module (Company Info)
│   │   └── pim.page.ts             # PIM module (Employee Management)
│   └── fixtures/
│       └── testData.ts             # Centralized test data & credentials
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD workflow
├── playwright.config.ts            # Playwright configuration (multi-browser)
├── package.json                    # Dependencies
├── .env                           # Environment variables (local)
└── README.md                      # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/ManuelTissone/orangehrm-e2e-playwright.git
cd orangehrm-e2e-playwright
```

2. Install dependencies

```bash
npm install
```

3. Install Playwright browsers

```bash
npx playwright install
```

4. Configure environment variables

Create a `.env` file:

```
BASE_URL=https://opensource-demo.orangehrmlive.com
USERNAME=Admin
PASSWORD=admin123
```

## Running Tests

### Local Execution

```bash
# Run all tests (Chrome + Firefox)
npm test

# Run with UI (see browser in action)
npx playwright test --headed

# Debug mode (step through tests)
npx playwright test --debug

# Run specific test file
npx playwright test tests/e2e/orangehrm.spec.ts

# Run specific test
npx playwright test -g "Successful login"

# Run in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
```

### View Test Reports

```bash
npx playwright show-report
```

## CI/CD Pipeline

Tests run automatically on:

- Push to `master` or `main`
- Pull Request to `master` or `main`

### Branch Protection Rules

- Require status checks to pass before merging
- Block force pushes
- Require branches to be up to date before merging

**Workflow Status:** [View Actions](https://github.com/ManuelTissone/orangehrm-e2e-playwright/actions)

### Multi-Browser Execution

All tests execute automatically in:
- Chromium (Chrome)
- Firefox

Tests run in parallel across both browsers in CI/CD for comprehensive coverage.

## What's Implemented

### Test Coverage (8/10 tests)

- [x] Successful login - Authentication with valid credentials
- [x] Logout - Session termination and redirect to login
- [x] Admin - Edit company information - Update organization details
- [x] PIM - Create employee - Add new employee with first/last name
- [x] PIM - Edit employee - Search and modify existing employee
- [x] PIM - Delete employee - Search and delete employee with confirmation
- [x] Search employees - Create employee and validate in search results
- [x] Validate error messages - Invalid login credentials error handling
- [x] Multi-browser compatibility - Automatic execution in Chrome + Firefox

### Architecture

- [x] BasePage - Common methods (click, fillInput, navigate, typeInput, waitForElement, getText)
- [x] LoginPage - Login/logout flows with userDropdown handling
- [x] AdminPage - Organization management with toggle and multi-level navigation
- [x] PIMPage - Employee CRUD operations (Create, Read, Update, Delete)
- [x] Test Data - Centralized fixtures with admin user, invalid user, and employee data
- [x] Environment Config - Secure credentials via .env and GitHub Secrets
- [x] Accessibility Locators - getByRole, getByLabel, getByPlaceholder for semantic HTML
- [x] Test Independence - Each test includes complete setup, no cross-test dependencies
- [x] GitHub Actions - Automated CI/CD with branch protection and multi-browser validation

## Learning Resources

- [Playwright Docs](https://playwright.dev/)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)
- [Playwright Locators](https://playwright.dev/docs/locators)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Contact & Support

- Author: Manuel Tissone
- GitHub: [@ManuelTissone](https://github.com/ManuelTissone)
- LinkedIn: [Manuel Tissone](https://linkedin.com/in/manueltissone)

---

Last Updated: January 2026
Status: WIP - 8/10 tests complete, multi-browser validation active
