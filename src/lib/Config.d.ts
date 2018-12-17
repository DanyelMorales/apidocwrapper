import { IApidocWrapperConfig, IApidocOptionCollection } from '../interfaces/IApidocWrapperConfig';
export declare class Config {
    constructor();
    /**
     * @returns default configuration to be consumed by Apidoc API.
     */
    private getDefaultCfg;
    /**
     * @returns a collection of indexed configuration ready to be parsed for
     * APIDOC API.
     */
    build(rootDir: string, cfg: IApidocWrapperConfig): IApidocOptionCollection;
    /**
     * @param rootDir    project base path
     * @param outputDir  output directory
     * @param groupName  directory name for html files
     */
    private buildOutputDir;
    /**
     * Build src dir from where api doc documentation will be taken.
     * Each global source dir is joined to a root dir (project base).
     *
     * @param rootDir  base path  to look for documentation files (project)
     * @param globalSourceDir path collection of base dir (code path)
     * @returns normalized path array for reading of files.
     */
    private buildSrcDir;
}
