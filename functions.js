function grab_ip() {
  console.log(chalk.green.bold("Check out these sites\n"));
  console.log(`iplogger.org: ${chalk.underline("https://iplogger.org/")}`);
  console.log(`Grabify: ${chalk.underline("https://grabify.link/")}`);
  console.log(`CyberHub logger: ${chalk.underline("https://cyber-hub.net/iplogger.php")}`);
}

function geolocate_ip(inpt) {
  let ip_input = inpt;
  ipinfo(ip_input, (err, body) => {
    console.log(chalk.underline.bold(`\nInfo about ${body.ip}`));
    console.log("Country:", chalk.blue(body.country));
    console.log("Region:", chalk.blue(body.region));
    console.log("City:", chalk.blue(body.city));
    console.log("ORG:", chalk.yellow(body.org));
    console.log("Hostname:", chalk.yellow(body.hostname));
    console.log("Lat-Long:", chalk.green(body.loc));
    console.log("Google Maps location:", chalk.underline.white(`https://www.google.com/maps/search/?api=1&query=${body.loc}`));
  });
}

function whois_ip(inpt) {
  let ip_input = inpt;
    whois.lookup(ip_input, (err, data) => {
      console.log(chalk.underline.bold(`\nWhois info for ${ip_input}`));
      console.log(chalk.yellow(data));
    });
}
