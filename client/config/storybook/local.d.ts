declare module 'progress-bar-webpack-plugin' {
  import webpack from 'webpack';

  export interface Options {
    format?: string,
    width?: number,
    complete?: string,
    incomplete?: string,
    renderThrottle?: number,
    clear?: boolean,
    callback?(): void,
    stream?: WritableStream,
    summary?: boolean,
    summaryContent?: string,
    customSummary?(buildTime: string): void,
  }

  export default class ProgressBarPlugin extends webpack.Plugin {
    constructor(options?: Options);
  }
}
