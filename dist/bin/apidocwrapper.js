#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./../");
const cmd = require('commander');
const path = require('path');
const configFile = "apidoc.config.js";
const workingdir = process.cwd();
const argv = cmd
    .version('0.0.1')
    .option('-g, --groups [groups]', 'List of group names to be processed separated by comma, by default all groups are documented', list, [])
    .option('-w, --watch [watch]', 'Trigger documentation process and keep Watching for changes on files', false)
    .option('-x, --xavoid [xavoid]', 'Do not trigger documentation process, (for pipe processing only)', false)
    .option('-c, --config [config]', 'Override wrapper config file, default name is ' + configFile, configFile)
    .option('-d, --workingdir [workingdir]', ' Project directory from where documentation will be generated and config file is loaded', workingdir)
    .parse(process.argv);
function list(val) {
    return val.split(',');
}
const options = {
    groupsToDocument: argv.groups,
    watch: argv.watch,
    avoidInitialBuilding: argv.xavoid,
    workingdir: argv.workingdir,
    configFilePath: path.join(argv.workingdir, argv.config),
    configFile: argv.config
};
__1.wrappApidoDocumentation(options);
