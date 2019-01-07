import { NgxLoggerLevel } from "ngx-logger";

export const LogConfig = {
    production: false,
    logging: {
      //serverLoggingUrl: 'https://devdactic.free.beeceptor.com/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }
  };