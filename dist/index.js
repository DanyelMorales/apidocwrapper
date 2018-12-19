"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NODE DEPENDENCIES
const fs = require('fs');
const TerminalLog_1 = require("./lib/TerminalLog");
const ApidocWrapper_1 = require("./ApidocWrapper");
function wrappApidoDocumentation(cmdOptions) {
    // resolving cwd directory
    if (!fs.existsSync(cmdOptions.configFilePath)) {
        TerminalLog_1.TerminalLog.err(`Not found ${cmdOptions.configFile} in ${cmdOptions.workingdir}`, true);
        process.exit(1);
    }
    if (cmdOptions.avoidInitialBuilding === true) {
        return;
    }
    const jsonConfig = require(cmdOptions.configFilePath);
    ApidocWrapper_1.ApidocWrapper.build(cmdOptions.workingdir, jsonConfig).document(cmdOptions.groupsToDocument);
}
exports.wrappApidoDocumentation = wrappApidoDocumentation;
