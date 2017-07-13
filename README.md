
# Automated script

## An automatic sms creation script in dhis2/ app version 1.0.0

The application will be run using a webdriverio server version 4.8.0

Follow the instructions below to set the server up and running

Install the lastest selenium server in your working directory

` curl -O http://selenium-release.storage.googleapis.com/3.4/selenium-server-standalone-3.4.0.jar`

Get the latest version of geckodriver and unpack it in your project directory

Linux 64 bit users

`curl -L https://github.com/mozilla/geckodriver/releases/download/v0.17.0/geckodriver-v0.17.0-linux64.tar.gz | tar xz`

OSX

`curl -L https://github.com/mozilla/geckodriver/releases/download/v0.17.0/geckodriver-v0.17.0-macos.tar.gz | tar xz`

Start the server by executing the below command

`java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.4.0.jar`

keep the server running and install webdriverio

`npm install webdriverio`

you need to set the below variables to run the application in the `env.js file`

```
  accessTokenKeyName=<dppi username>
  accessTokenKeyPass=<dppi password>
  baseUrl= <instance base url> 
  smsCommandUrl=<the sms url>
```

It's advisable to check the `package.json` file for the project dependencies 
