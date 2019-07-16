const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const ipinfo = require('ipinfo');
const validateIP = require('validate-ip-node');
const whois = require('whois');

const config = require('./config.js');

const args = process.argv.slice(2);

eval(fs.readFileSync('./functions.js')+'');

require('dns').resolve('www.google.com', (err) => {
  if (err != null) {
    clear();
    console.log(chalk.red.bold("No internet connection, connect to a network and try again"));
    return process.exit(1);
  }
});

if (!args[0]) {

} else if (!validateIP(args[1])) {
  return console.log(chalk.red.bold("Invalid IP address"));
} else if (args[0] == "-g") {
  clear();
  console.log(chalk.yellow(figlet.textSync("IP-Tracker", {horizontalLayout: 'full'})));
  geolocate_ip(args[1]);
  return;
} else if (args[0] == "-w") {
  clear();
  console.log(chalk.yellow(figlet.textSync("IP-Tracker", {horizontalLayout: 'full'})));
  whois_ip(args[1]);
  return;
}

clear();
console.log(chalk.yellow(figlet.textSync("IP-Tracker", {horizontalLayout: 'full'})));
console.log(chalk.white.bold("A robust cli for getting real-time location and other info about IP's\n"));
console.log(`version: ${chalk.yellow("1.0.0")}`);
console.log(`author: ${chalk.magenta("L34ND3V")}`);
console.log(`github: ${chalk.underline.white("https://github.com/TasosY2K/ip-tracker-cli")}`);
console.log(`usage: ${chalk.yellow("node app.js <-g || -w> <ip adress>\n")}`);


inquirer.prompt(config.action).then(output => {
    if (output.action === "Grab IP") {
      clear();
      console.log(chalk.yellow(figlet.textSync("IP-Tracker", {horizontalLayout: 'full'})));
      grab_ip();
    } else if (output.action === "Geolocate") {
      clear();
      console.log(chalk.yellow(figlet.textSync("IP-Tracker", {horizontalLayout: 'full'})));
      inquirer.prompt(config.get_ip).then(output => {
        geolocate_ip(output.ip_input);
      });
    } else if (output.action === "Whois") {
      clear();
      console.log(chalk.yellow(figlet.textSync("IP-Tracker", {horizontalLayout: 'full'})));
      inquirer.prompt(config.get_ip).then(output => {
        whois_ip(output.ip_input);
      });
    }
});
