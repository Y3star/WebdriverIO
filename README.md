***WebdriverIO + Docker***

***Setup and commands***

***Download git repository and use install node modules.***
```console
git clone {repository URL}
```
***Go to folder with your repository.***
```console
cd {repositoryName}
```
***Open folder with your project and use command.***
```console
npm install
```
***Running tests in headless mode with the Chrome browser.***
```console
npm run run:chrome:headless
```
***Generate allure report.***
```console
npm run allure:generate
```
***To view allure in local virtual server.***
```console
npm run allure:serve
```
***
***How look like allure report view report.***
![](https://i.imgur.com/tQaGyMC.png)
***
***Also, you can run tests in headless mode with the Firefox browser.***
```console
npm run run:firefox:headless
```
***If you want to run the tests in Linux with Docker before, using the command below, [install docker](https://docs.docker.com/desktop/) and [docker-compose](https://docs.docker.com/compose/install/), also open Docker Desktop***
```console
npm run docker-compose up -d
```