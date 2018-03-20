const shell = require('shelljs');

shell.cd('crawlio/front-end');
shell.exec('yarn');
shell.cd('../search');
shell.exec('yarn');
shell.cd('../..');
shell.exec('docker-compose up --build');