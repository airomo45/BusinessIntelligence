React Native iOS project that does the following:
1. Shows a list of companies
2. Tapping on a company shows each company’s name, address and last 6 months of revenue on a chart

This project implements the iOS charts liabrary to create native module that the can be used in the JS to display the data on the chart.


Setup:

After cloning the repo you need to run the following in your project folder to install the node_modules:

```
yarn
```
or

```
npm install
```

After installing node_modules, you need to run the following in the iOS directory to install Pods:

```
cd ios/ && pod install

```
After installing the required podfiles you can run the following command on your project folder to run iOS simulator: 

```
yarn ios

```
