export interface IApidocWrapperConfig {
    global: IApidocGlobalConfig,
    groups: IApidocSingeOption[]
}

export interface IApidocSingeOption {
    sourceDir:string[],
    groupName:string,
    regex:string[]
}

export interface IApidocGlobalConfig{
    configDir: string,
    outputDir: string
    sourceDir: string[]
}