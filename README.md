# Testing website: Paynplay-casinos.com

## Under Test: Basic Functionality

## Testing with Playwright
```yarn install```

Inside that directory, you can run several commands:

 ``` yarn playwright test```
    Runs the end-to-end tests.

  ```yarn playwright test --project=chromium```
    Runs the tests only on Desktop Chrome.

  ```yarn playwright test example```
    Runs the tests in a specific file.

  ```yarn playwright test --debug```
    Runs the tests in debug mode.

  ```yarn playwright codegen```
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    ```yarn playwright test```

## Reporting with Playwright
Playwright creates HTML Test Reports.
    Run report code:
    ```yarn playwright show-report```