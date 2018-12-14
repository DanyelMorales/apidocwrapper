import { IApidocOption } from './interfaces/IApidocOption';
import { IApidocWrapperConfig } from './interfaces/IApidocWrapperConfig';

const _apidoc_package_ = "apidoc";

const apidoc = require(_apidoc_package_);
const path = require('path');

export class ApidocWrapper {
    constructor() { }

    public wrapp(options: IApidocWrapperConfig) {
        const cfg = this.buildCfg(options);
        if (apidoc.createDoc(cfg) === false) {
            process.exit(1);
        }
    }

    private get defaultCfg():IApidocOption{
        return  {
            excludeFilters: [],
            includeFilters: ['.*\\.(clj|cls|coffee|cpp|cs|dart|erl|exs?|go|groovy|ino?|java|js|jsx|kt|litcoffee|lua|p|php?|pl|pm|py|rb|scala|ts|vue)$'],
            src: ['./'],
            dest: "./doc/",
            template: path.join(__dirname, '../node_modules/'+_apidoc_package_+'/template/'),
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

    private buildCfg(cfg: IApidocWrapperConfig): IApidocOption   {
        const defaultCfg:IApidocOption = this.defaultCfg;
         defaultCfg.src;
         defaultCfg.dest;
         defaultCfg.debug;
         defaultCfg.lineEnding;
        return this.defaultCfg;
    }

    

}