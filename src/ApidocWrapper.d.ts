import { IApidocWrapperConfig } from './interfaces/IApidocWrapperConfig';
export declare class ApidocWrapper {
    private cwd;
    private options;
    private configBuilder;
    static build(cwd: string, options: IApidocWrapperConfig): ApidocWrapper;
    constructor(cwd: string, options: IApidocWrapperConfig);
    document(indexes?: String[]): void;
}
