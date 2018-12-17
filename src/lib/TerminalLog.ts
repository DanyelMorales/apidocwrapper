export const tcolors = {
    TP_ANSI_FG_RED: "\x1b[31m",
    TP_ANSI_FG_BLACK: "\x1b[30m",
    TP_ANSI_RESET: "\x1b[0m",
    TP_ANSI_BOLD_ON: "\x1b[1m",
    TP_ANSI_INVERSE_ON: "\x1b[7m",
    TP_ANSI_BOLD_OFF: "\x1b[22m",
    TP_ANSI_FG_GREEN: "\x1b[32m",
    TP_ANSI_FG_YELLOW: "\x1b[33m",
    TP_ANSI_FG_BLUE: "\x1b[34m",
    TP_ANSI_FG_MAGENTA: "\x1b[35m",
    TP_ANSI_FG_CYAN: "\x1b[36m",
    TP_ANSI_FG_WHITE: "\x1b[37m",
    TP_ANSI_BG_RED: "\x1b[41m",
    TP_ANSI_BG_GREEN: "\x1b[42m",
    TP_ANSI_BG_YELLOW: "\x1b[43m",
    TP_ANSI_BG_BLUE: "\x1b[44m",
    TP_ANSI_BG_MAGENTA: "\x1b[45m",
    TP_ANSI_BG_CYAN: "\x1b[46m",
    TP_ANSI_BG_WHITE: "\x1b[47m"
};

export namespace TerminalLog {
    export function log(color, msg, debug: boolean = false) {
        if (debug) {
            console.log(color, msg, tcolors.TP_ANSI_RESET);
        }
    };

    export function err(msg, debug: boolean = false) {
        log(tcolors.TP_ANSI_FG_RED, msg, debug);
    };

    export function warn(msg, debug: boolean = false) {
        log(tcolors.TP_ANSI_FG_YELLOW, msg, debug);
    };
    export function notice(msg, debug: boolean = false) {
        log(tcolors.TP_ANSI_FG_BLUE, msg, debug);
    };
    export function success(msg, debug: boolean = false) {
        log(tcolors.TP_ANSI_FG_CYAN, msg, debug);
    };
};