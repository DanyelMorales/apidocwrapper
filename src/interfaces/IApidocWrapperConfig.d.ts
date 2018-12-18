import { IApidocOption } from './IApidocOption';
export interface IApidocWrapperConfig {
    global: IWrapperGlobalConfig;
    groups: IWrapperSingleOption[];
    debugWrapper?: boolean;
    vendor?: {
        debug?: boolean;
        lineEnding?: string;
        filters?: {
            [index: string]: string;
        } | null;
        languages?: {
            [index: string]: string;
        } | null;
        parsers?: {
            [index: string]: string;
        } | null;
        workers?: {
            [index: string]: string;
        } | null;
    };
}
export interface IWrapperSingleOption {
    sourceDir?: string[];
    groupName: string;
    regex: string[];
}
export interface IWrapperGlobalConfig {
    configDir: string;
    outputDir: string;
    sourceDir: string[];
}
export interface IApidocOptionCollection {
    [index: string]: IApidocOption;
}
