import { Writable } from 'stream';

class HtmlWritable extends Writable {
  chunks: any = [];
  html = '';

  getHtml() {
    return this.html;
  }

  _write(chunk: any, _encoding: BufferEncoding, callback: Function) {
    this.chunks.push(chunk);
    callback();
  }

  _final(callback: Function) {
    this.html = Buffer.concat(this.chunks).toString();
    callback();
  }
}

export default HtmlWritable;
