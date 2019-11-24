var nodemailer = require('nodemailer');
var sys = require('systeminformation');
var readline = require('readline-sync');

// List of available system limits
var possible_limits = { CPU_temp: 120, MEM_free: 1024 };

// Initial welcome message
process.stdout.write('===SYSTEM EMAIL ALERT SYSTEM===\n');

// Write to console array of available limits
process.stdout.write('Available limits: ');
Object.keys(possible_limits).forEach(element => {
    process.stdout.write(element + '  ');
});
process.stdout.write('\n\n');

var done = false;
while (done == false) {
    // Select limit
    var limit = readline.question('Select a limit or enter DONE: ');

    if (Object.keys(possible_limits).indexOf(limit) > -1) {
        console.log(true);
    }
}

console.log('CPU limit is - ' + limit);