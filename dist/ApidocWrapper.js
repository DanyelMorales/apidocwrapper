"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./lib/Config");
const TerminalLog_1 = require("./lib/TerminalLog");
const _apidoc_package_ = "apidoc";
const apidoc = require(_apidoc_package_);
const _ = require("underscore");
class ApidocWrapper {
    constructor(cwd, options) {
        this.cwd = cwd;
        this.options = options;
        this.configBuilder = new Config_1.Config();
    }
    static build(cwd, options) {
        const me = new ApidocWrapper(cwd, options);
        return me;
    }
    document(indexes) {
        if (indexes && indexes.length > 0) {
            this.options.groups = _.filter(this.options.groups, (item) => indexes.indexOf(item.groupName) > -1);
        }
        const cfg = this.configBuilder.build(this.cwd, this.options);
        for (const index in cfg) {
            const option = cfg[index];
            if (apidoc.createDoc(option) === false) {
                TerminalLog_1.TerminalLog.err(`Error creating ${option.dest}`, this.options.debugWrapper);
                process.exit(1);
            }
            else {
                TerminalLog_1.TerminalLog.success(`[-] Success saving: ${option.dest}`, true);
            }
        }
    }
}
exports.ApidocWrapper = ApidocWrapper;
