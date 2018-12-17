export declare const tcolors: {
    TP_ANSI_FG_RED: string;
    TP_ANSI_FG_BLACK: string;
    TP_ANSI_RESET: string;
    TP_ANSI_BOLD_ON: string;
    TP_ANSI_INVERSE_ON: string;
    TP_ANSI_BOLD_OFF: string;
    TP_ANSI_FG_GREEN: string;
    TP_ANSI_FG_YELLOW: string;
    TP_ANSI_FG_BLUE: string;
    TP_ANSI_FG_MAGENTA: string;
    TP_ANSI_FG_CYAN: string;
    TP_ANSI_FG_WHITE: string;
    TP_ANSI_BG_RED: string;
    TP_ANSI_BG_GREEN: string;
    TP_ANSI_BG_YELLOW: string;
    TP_ANSI_BG_BLUE: string;
    TP_ANSI_BG_MAGENTA: string;
    TP_ANSI_BG_CYAN: string;
    TP_ANSI_BG_WHITE: string;
};
export declare namespace TerminalLog {
    function log(color: any, msg: any, debug?: boolean): void;
    function err(msg: any, debug?: boolean): void;
    function warn(msg: any, debug?: boolean): void;
    function notice(msg: any, debug?: boolean): void;
    function success(msg: any, debug?: boolean): void;
}
