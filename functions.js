function grab_ip() {
  console.log(chalk.green.bold("Check out these sites\n"));
  console.log(`iplogger.org: ${chalk.underline("https://iplogger.org/")}`);
  console.log(`Grabify: ${chalk.underline("https://grabify.link/")}`);
  console.log(`CyberHub logger: ${chalk.underline("https://cyber-hub.net/iplogger.php")}`);
}

function geolocate_ip(inpt) {
  let ip_input = inpt;
  request(`http://ip-api.com/json/${ip_input}`, {json: true}, (err, res, body) => {
    console.log(chalk.underline.bold(`\nInfo about ${body.query}`));
    console.log("Country:", chalk.blue(body.country));
    console.log("Country code:", chalk.blue(body.countryCode));
    console.log("Region:", chalk.blue(body.region));
    console.log("Region name:", chalk.blue(body.regionName));
    console.log("City:", chalk.blue(body.city));
    console.log("Zip:", chalk.yellow(body.zip));
    console.log("Latitude:", chalk.green(body.lat));
    console.log("Longtitude:", chalk.green(body.lon));
    console.log("Timezone:", chalk.green(body.timezone));
    console.log("Organization:", chalk.yellow(body.org));
    console.log("AS:", chalk.yellow(body.as));
    console.log("ISP:", chalk.yellow(body.isp));
    console.log("Google Maps location:", chalk.underline.white(`https://www.google.com/maps/search/?api=1&query=${body.lat},${body.lon}`));
  });
}

function ping_ip(inpt) {
  let ip_input = inpt;
    ping.sys.probe(ip_input, (isAlive) => {
        console.log(isAlive ? `Host ${chalk.blue(ip_input)} reachable, ${chalk.green('0%')} packet loss` : `Host ${chalk.blue(ip_input)} unreachable, ${chalk.red('100%')} packet loss`);
    });
}

function traceroute_ip(inpt) {
  let ip_input = inpt;
  try {
    const tracer = new traceroute();
    tracer.on('destination', (ip_input) => {
      console.log(`${chalk.underline('\nDestination:')} ${chalk.blue(ip_input)}`);
    }).on('hop', (hop) => {
      console.log(`hop: ${chalk.yellow(hop.hop)} | rtt1: ${chalk.green(hop.rtt1)} | rtt2: ${chalk.green(hop.rtt2)} | rtt3: ${chalk.green(hop.rtt3)} | ip: ${chalk.blue(hop.ip)}`);
    }).on('close', (code) => {
      console.log(`close: code ${code}`);
    });
    tracer.trace(ip_input);
  } catch (ex) {
      console.log(ex);
  }
}

function whois_ip(inpt) {
  let ip_input = inpt;
    whois.lookup(ip_input, (err, data) => {
      console.log(chalk.underline.bold(`\nWhois info for ${ip_input}`));
      console.log(chalk.yellow(`\n${data}`));
    });
}
