# JS-Testing-Capgemini
Github with tests of My Thai Star website (https://mts-devonfw-core.cloud.okteto.net/)

## Enabling tested website locally
#### additional step 
If you want, you can turn on WSL (Windows Subsystem for Linux) in your Windows console and turn on [Docker](https://www.docker.com/get-started/)
```
wsl
sudo dockerd
```
In other cmd again run WSL, get into location where you have [the website](https://github.com/devonfw/my-thai-star) downloaded, and turn it on locally
```
wsl
cd website_files
sudo docker compose up
```
Now you should have the website working locally at http://localhost:8081/restaurant


## Tests cases
You can find test cases in **test-cases** folder


## Implementation of tests in WebdriverIO
In the repository you can find sample tests created in WebdriverIO
You can find them tests in the folder **test** (tests in mocha) and **cucumber** (tests in cucumber)

### Enabling tests 
#### mocha
if you would like to enable the test, just download the repository and in the **Windows console** type 
(make sure, that you are in main folder, where the "wdio.conf.js" file exists)

```
npm run wdio
```
if you would like to **change the test** try the command:
```
npm run wdio --spec ./test/specs/specific_test.js
```
#### cucumber
if you would like to enable the test, just download the repository and in the **Windows console** type 
(make sure, that you are in **cucumber** folder, where the "wdio.conf.js" file exists)
```
npm run wdio
```
if you would like to **change the test** try the command:
```
npm run wdio --spec ./test/specs/specific_test.js
```

### WebdriverIO Installation
If you would like to go through the installations yourself, you can do so by going to the website [WebdriverIO](https://webdriver.io/docs/gettingstarted#run-test)

### WebdriverIO course
You can also find an interesting course on WebdriverIO on the Internet at the link [wdIO course](https://testautomationu.applitools.com/webdriverio-tutorial/)


## Jenkins on Docker
this was written for WebdriverIO mocha, but for WebdriverIO Cucumber shouldn't be a lot of changes

### the first time
[setup info for docker](https://www.jenkins.io/doc/book/installing/docker/)

### every other times
```
wsl 

sudo dockerd
```
you should have Jenkins running at http://localhost:8080/ or other port chosen by you


## Selenium Grid with Docker
https://github.com/SeleniumHQ/docker-selenium/tree/selenium-3

### setup
```
wsl
docker network create grid
docker run -d -p 4444:4444 --net grid --name selenium-hub selenium/hub:3.141.59-20210929
docker run -d --net grid -e HUB_HOST=selenium-hub -v /dev/shm:/dev/shm selenium/node-chrome:3.141.59-20210929
docker run -d --net grid -e HUB_HOST=selenium-hub -v /dev/shm:/dev/shm selenium/node-firefox:3.141.59-20210929
```
Additionally, you might use longer version which creates "browsers" with more instances (you can run more tests in one time):
```
docker run -d --net grid -e HUB_HOST=selenium-hub -e NODE_MAX_INSTANCES=3 -e NODE_MAX_SESSION=3 -v /dev/shm:/dev/shm selenium/node-chrome:3.141.59-20210929
```
Make sure, that in **wdio.conf.js** file are those neccessary lines:
```
hostname: 'localhost',
port: 4444,
path: '/wd/hub',
protocol: 'http',
```

### errors
If tests are still **executed in local browser**:
remove "wdio-chromedriver-service" dependency from package.json file
and then in terminal run command:
```
npm i
```

If yoy get "**docker: Error response from daemon: Conflict**. The container name "/selenium-hub" is already in use by container "LONG_NUMBER". You have to remove (or rename) that container to be able to reuse that name.", the command below, where you have to replace "LONG_NUMBER" by the ID you got in your error message:
```
docker rm "LONG_NUMBER"
```

Sometimes you need to **check the containers** (remember IDs of those with "selenium" in theirs name):
```
docker rm "LONG_NUMBER"
```
And run the command below, where the ID is the id which you got from previous command
```
sudo docker start ID ID
```

You might need to **delete** unnecessary **containars**
```
docker ps -a
```
Now you have list of containers; you need to find IDs for node-chrome, node-firefox, reverse-proxy, note their IDs and delete most of them (leave just the newests one). After that you need to start appropriate containers
```
sudo docker rm ID_CONTAINER
sudo docker start mts_java
sudo docker start mts_angular
sudo docker start mts_reverse_proxy
sudo docker network connect grid mts_java
sudo docker network connect grid mts_angular
sudo docker network connect grid mts_reverse_proxy
```

### running 
You should be able to see panel with your tests at http://localhost:4444/grid/console
 
To run the tests you need to check the **IP** adress for **mts_reverse_proxy** using command
```
sudo docker network inspect grid
```
Now you need to copy that address to page.js (replace "localhost:8081" to your IP address) and just run your test (in Windows console)
```
npm run wdio [OR] npm run wdio --spec ./test/specs/specific_test.js
```
Now you are able to see if the test is running by getting http://localhost:4444/grid/console and observing icon of browser - when it's gray that means that the test is in progress

### running with preview
it should be easy, but in my case is not
maybe someone else will be more lucky 
https://www.swtestacademy.com/docker-selenium-tutorial/ "How to See the Running Tests Visually in Docker Containers"