### AVIATION FREQUENCY PROPAGATION SIMULATOR
Most aircraft have transponders that emit signals on frequencies 1090 MHz or 868 MHz. These transponders are used to send highly accurate positional information to ground controllers and to other aircraft. Our customer has developed receivers for these signals that they install all around the world, on buildings or telecommunication antennas.
 
In order to see if there are any blind spots when they deploy their antennas, the customer would like to have a web-based tool that can simulate the coverage of their receivers
 
### LIVE LINKS
#### Deployed app: https://propagation-simulator.herokuapp.com/
#### Documentation: https://propagation-simulator.herokuapp.com/documentation/#/
#### Video Demonstration: https://drive.google.com/file/d/125bWMTNGKL9206aE6Zt92QICuLxKYr8y/view?usp=sharing
#### Figma Design: https://www.figma.com/file/s3jb5tVGsbNcSqD2YkqNa1/GGV
 
### BUILT WITH
### Frontend
1. JavaScript
2. HTML
3. CSS
 
### Backend
1. NodeJS
2. Express
3. MongoDB
4. Swagger for documentation
 
### GETTING STARTED
### Prerequisites
1. npm
```
npm install npm@latest -g
```
### Installation
1. Clone the repository
```
git clone https://github.com/Delyc/Propagation-Simulator
```
2. Install NPM package
 ```
 npm install
 ```
 3. Create .env file and enter your database and port
 
 ```
 touch .env
 MONGOURL=your mongoDB connection link
 PORT=port_number
 ```
 ### USAGE
 1. Start the server
 ```
 npm start
 ```
 N:B. As normal HTML we open them with live server whereas here you do as follows:
open browser
```
localhost:5000
```
5000 is your backend port. Replace it with your own port
 
 
 ![image](https://user-images.githubusercontent.com/90575886/170884092-911d6e4c-275c-4523-b225-611049cc34e1.png)
 
 ### AUTHOR
 Delyce Twizeyimana
