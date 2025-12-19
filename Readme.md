# OrangeHRM E2E Automation - Playwright

[![Playwright Tests](https://github.com/ManuelTissone/orangehrm-e2e-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/ManuelTissone/orangehrm-e2e-playwright/actions)

Status: WIP (Work In Progress)

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
- Playwright Locators - Modern element selection
- Multi-Browser Testing - Chrome & Firefox
- GitHub Actions CI/CD - Automated test runs on push/PR
- HTML Reports - Screenshot and trace artifacts
- Environment Variables - Secure credential management

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
│   │   └── orangehrm.spec.ts       # Test cases
│   ├── pages/
│   │   ├── base.page.ts            # Base Page Object
│   │   ├── login.page.ts           # Login flows
│   │   ├── admin.page.ts           # Admin module
│   │   └── pim.page.ts             # PIM module
│   └── fixtures/
│       └── testData.ts             # Test data & credentials
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD workflow
├── playwright.config.ts            # Playwright configuration
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
# Run all tests
npm test

# Run with UI (see browser)
npx playwright test --headed

# Debug mode (step through tests)
npx playwright test --debug

# Run specific test file
npx playwright test tests/e2e/orangehrm.spec.ts

# Run specific test
npx playwright test -g "Successful login"
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

**Workflow Status:** [View Actions](https://github.com/ManuelTissone/orangehrm-e2e-playwright/actions)

## What's Implemented

### Test Coverage (1/10 tests)

- [x] Login - Successful authentication
- [ ] Logout - Session termination
- [ ] Admin - Edit company information
- [ ] PIM - Create employee
- [ ] PIM - Edit employee
- [ ] PIM - Delete employee
- [ ] Search employees
- [ ] Validate error messages
- [ ] Multi-browser compatibility
- [ ] Performance baseline

### Architecture

- [x] BasePage - Common methods (click, fillInput, navigate, etc.)
- [x] LoginPage - Login/logout flows
- [x] AdminPage - Organization management
- [x] PIMPage - Employee management
- [x] Test Data - Centralized fixtures
- [x] Environment Config - Secure credentials

## What's Coming

### Tests (9 remaining)

- [ ] Complete all 10 test cases
- [ ] Add negative test scenarios
- [ ] Cross-browser validation

### Features

- [ ] API testing (separate project: orangehrm-api-testing)
- [ ] Performance monitoring
- [ ] Visual regression testing
- [ ] Accessibility compliance (WCAG)

### Documentation

- [ ] Test case specifications
- [ ] Locator strategy guide
- [ ] Troubleshooting guide

## Learning Resources

- [Playwright Docs](https://playwright.dev/)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Contact & Support

- Author: Manuel Tissone
- GitHub: [@ManuelTissone](https://github.com/ManuelTissone)

---

Last Updated: December 2025
Status: WIP - Framework & 1 test case complete