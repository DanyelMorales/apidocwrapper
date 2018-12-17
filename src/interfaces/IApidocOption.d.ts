export interface IApidocOption {
    excludeFilters: string[];
    includeFilters: string[];
    src: string[];
    dest: string;
    template: string;
    config: string;
    apiprivate: boolean;
    verbose: boolean;
    debug: boolean;
    parse: boolean;
    colorize: boolean;
    filters: {
        [index: string]: string;
    };
    languages: {
        [index: string]: string;
    };
    parsers: {
        [index: string]: string;
    };
    workers: {
        [index: string]: string;
    };
    silent: boolean;
    simulate: boolean;
    markdown: boolean;
    lineEnding: string;
    encoding: string;
}
