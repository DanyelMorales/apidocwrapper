// NODE DEPENDENCIES
const fs = require('fs');
import { TerminalLog } from "./lib/TerminalLog";
import { ApidocWrapper } from "./ApidocWrapper";
import { IApidocWrapperConfig } from "./interfaces/IApidocWrapperConfig";

export interface WrapperCMDOptions {
    groupsToDocument: string[],
    watch?: boolean,
    triggerInitialBuilding?: boolean,
    workingdir: string,
    configFilePath: string,
    configFile: string
}

export function wrappApidoDocumentation(cmdOptions: WrapperCMDOptions) {
    // resolving cwd directory
    if (!fs.existsSync(cmdOptions.configFilePath)) {
        TerminalLog.err(`Not found ${cmdOptions.configFile} in ${cmdOptions.workingdir}`);
        process.exit(1);
    }

    if (cmdOptions.triggerInitialBuilding === true) {
        return;
    }
    
    const jsonConfig: IApidocWrapperConfig = require(cmdOptions.configFilePath);
    ApidocWrapper.build(cmdOptions.workingdir, jsonConfig).document(cmdOptions.groupsToDocument);
}