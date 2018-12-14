import { IApidocOption } from './../interfaces/IApidocOption';
import { IApidocWrapperConfig, IApidocSingeOption } from './../interfaces/IApidocWrapperConfig';

const path = require('path');

export class Config {

    constructor(private rootDir: string, private cfg: IApidocWrapperConfig) {
        if (rootDir == null) {
            throw "ROOT DIR IS MANDATORY";
        }
    }

    private defaultCfg(): IApidocOption {
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

    buildCfg(): IApidocOption[] {
        const baseDir = this.cfg.global.sourceDir;

        for (const group of this.cfg.groups) {
            const defaultCfg: IApidocOption = this.defaultCfg();

            defaultCfg.src;
            defaultCfg.dest;
            defaultCfg.debug;
            defaultCfg.lineEnding;
        }
        return [];
    }

    private buildRegex() {
        const baseDir = "";

        return "";
    }

    private buildOutputDir(option: IApidocSingeOption) {
        const dir = path.join(this.rootDir, this.cfg.global.outputDir, option.groupName);
        return path.normalize(dir);
    }


    private buildSrcDir(option: IApidocSingeOption) {
        const globalSrc = this.cfg.global.sourceDir || "";
        const optionSource = option.sourceDir || "";
        const baseDir = path.normalize(path.join(this.rootDir, globalSrc, optionSource));

        console.log("Current module dir: " + baseDir);
        if (!globalSrc && !optionSource) {
            console.warn("sourceDir and optionSource is not settled");
        } else if (!optionSource) {
            console.info("source dir for current option is not settled");
        } else if (!globalSrc) {
            console.warn("Global source is not settled");
        }
        return baseDir;
    }
}