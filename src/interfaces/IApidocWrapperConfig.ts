import { IApidocOption } from './IApidocOption';
export interface IApidocWrapperConfig {
    global: IWrapperGlobalConfig,
    groups: IWrapperSingleOption[],
    debug?: boolean,
    debugWrapper?: boolean,
    lineEnding?: string
}

export interface IWrapperSingleOption {
    sourceDir?: string[],
    groupName: string,
    regex: string[]
}

export interface IWrapperGlobalConfig {
    configDir: string,
    outputDir: string
    sourceDir: string[]
}

export interface IApidocOptionCollection {
    [index: string]: IApidocOption
}