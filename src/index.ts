// NODE DEPENDENCIES
const fs = require('fs');
const path = require('path');
import { TerminalLog } from "./lib/TerminalLog";
import { ApidocWrapper } from "./ApidocWrapper";
import { IApidocWrapperConfig } from "./interfaces/IApidocWrapperConfig";

// resolving cwd directory
const configFile = "/apidoc.config.js";
const workingdir = process.cwd();
const configFilePath = path.join(process.cwd(), configFile);

if (!fs.existsSync(configFilePath)) {
    TerminalLog.err(`Not found ${configFile} in ${workingdir}`);
    process.exit(1);
}

const jsonConfig: IApidocWrapperConfig = require(configFilePath);
ApidocWrapper.build(workingdir, jsonConfig).document(["CryptoCurrency"]);