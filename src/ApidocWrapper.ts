import { IApidocOption } from './interfaces/IApidocOption';
import { IApidocWrapperConfig, IApidocOptionCollection } from './interfaces/IApidocWrapperConfig';
import { Config } from './lib/Config';
import { TerminalLog } from './lib/TerminalLog';

const _apidoc_package_ = "apidoc";
const apidoc = require(_apidoc_package_);
const _ = require("underscore");

export class ApidocWrapper {
    private configBuilder: Config;

    static build(cwd: string, options: IApidocWrapperConfig) {
        const me = new ApidocWrapper(cwd, options);
        return me;
    }

    constructor(private cwd: string, private options: IApidocWrapperConfig) {
        this.configBuilder = new Config();
    }

    public document(indexes?: String[]) {
        if (indexes && indexes.length > 0) {
            this.options.groups = _.filter(this.options.groups, (item) => indexes.indexOf(item.groupName) > -1);
        }
        const cfg: IApidocOptionCollection = this.configBuilder.build(this.cwd, this.options);
        for (const index in cfg) {
            const option: IApidocOption = cfg[index];
            if (apidoc.createDoc(option) === false) {
                TerminalLog.err(`Error creating ${option.dest}`, this.options.debugWrapper);
                process.exit(1);
            } else {
                TerminalLog.success(`[-] Success saving: ${option.dest}`, true);
            }
        }
    }
}