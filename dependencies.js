const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const validateIP = require('validate-ip-node');
const request = require('request');
const whois = require('whois');
const ping = require('ping');
const traceroute = require('nodejs-traceroute');