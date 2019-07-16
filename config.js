module.exports = {
  action:{
    name: 'action',
    type: 'list',
    message: 'Choose an action',
    choices: ['Grab IP', 'Geolocate', 'Whois'],
  },
  get_ip:{
    name: 'ip_input',
    type: 'input',
    message: "Victim's IP address:",
    validate: (value) => {
      let validateIP = require('validate-ip-node');
      if (value.length && validateIP(value)) {
        return true;
      } else {
        return "Please enter a valid IP address:";
      }
    }
  }
}
