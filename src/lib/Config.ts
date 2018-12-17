import { IApidocOption } from '../interfaces/IApidocOption';
import { IApidocWrapperConfig, IApidocOptionCollection } from '../interfaces/IApidocWrapperConfig';
import { TerminalLog } from './TerminalLog';

const path = require('path');

export class Config {

    constructor() {
    }

    /**
     * @returns default configuration to be consumed by Apidoc API.
     */
    private getDefaultCfg(): IApidocOption {
        return {
            excludeFilters: [],
            includeFilters: ['.*\\.(clj|cls|coffee|cpp|cs|dart|erl|exs?|go|groovy|ino?|java|js|jsx|kt|litcoffee|lua|p|php?|pl|pm|py|rb|scala|ts|vue)$'],
            src: ['./'],
            dest: "./doc/",
            template: path.join(__dirname, '../../node_modules/apidoc/template/'),
            config: './',
            apiprivate: false,
            verbose: false,
            debug: false,
            parse: true,
            colorize: true,
            filters: {},
            languages: {},
            parsers: {},
            workers: {},
            silent: false,
            simulate: false,
            markdown: true,
            lineEnding: "",
            encoding: 'utf8'
        };
    }

    /**
     * @returns a collection of indexed configuration ready to be parsed for
     * APIDOC API.
     */
    build(rootDir: string, cfg: IApidocWrapperConfig): IApidocOptionCollection {
        const apidocOptions: IApidocOptionCollection = {};
        for (const group of cfg.groups) {
            const apidocCfg: IApidocOption = this.getDefaultCfg();
            apidocCfg.config = cfg.global.configDir || apidocCfg.config
            apidocCfg.includeFilters = group.sourceDir || apidocCfg.includeFilters;
            apidocCfg.debug = cfg.debug || apidocCfg.debug;
            apidocCfg.lineEnding = cfg.lineEnding || apidocCfg.lineEnding;
            apidocCfg.src = this.buildSrcDir(rootDir, cfg.global.sourceDir, group.sourceDir);
            apidocCfg.dest = this.buildOutputDir(rootDir, cfg.global.outputDir, group.groupName);
            apidocOptions[group.groupName] = apidocCfg;
            TerminalLog.notice(`[${group.groupName}]:\n\t${apidocCfg.src.join("\n")}\n`, cfg.debugWrapper || false);
        }
        return apidocOptions;
    }

    /**
     * @param rootDir    project base path
     * @param outputDir  output directory
     * @param groupName  directory name for html files
     */
    private buildOutputDir(rootDir, outputDir, groupName) {
        const dir = path.join(rootDir, outputDir, groupName);
        return path.normalize(dir);
    }

    /**
     * Build src dir from where api doc documentation will be taken.
     * Each global source dir is joined to a root dir (project base).
     * 
     * @param rootDir  base path  to look for documentation files (project)
     * @param globalSourceDir path collection of base dir (code path)
     * @returns normalized path array for reading of files.
     */
    private buildSrcDir(rootDir: string, globalSourceDir: string[], sourceDir?: string[]): string[] {
        const paths: string[] = [];
        for (const globalSrc of globalSourceDir) {
            let dir = path.normalize(path.join(rootDir, globalSrc));
            if (!sourceDir) {
                paths.push(dir);
                continue;
            }
            for (const filterDir of sourceDir) {
                paths.push(path.join(dir, filterDir));
            }
        }
        return paths;
    }
}