"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NODE DEPENDENCIES
const fs = require('fs');
const path = require('path');
const TerminalLog_1 = require("./lib/TerminalLog");
const ApidocWrapper_1 = require("./ApidocWrapper");
// resolving cwd directory
const configFile = "/apidoc.config.js";
const workingdir = process.cwd();
const configFilePath = path.join(process.cwd(), configFile);
if (!fs.existsSync(configFilePath)) {
    TerminalLog_1.TerminalLog.err(`Not found ${configFile} in ${workingdir}`);
    process.exit(1);
}
const jsonConfig = require(configFilePath);
ApidocWrapper_1.ApidocWrapper.build(workingdir, jsonConfig).document(["CryptoCurrency"]);
