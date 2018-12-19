export interface WrapperCMDOptions {
    groupsToDocument: string[];
    watch?: boolean;
    avoidInitialBuilding?: boolean;
    workingdir: string;
    configFilePath: string;
    configFile: string;
}
export declare function wrappApidoDocumentation(cmdOptions: WrapperCMDOptions): void;
