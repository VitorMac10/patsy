const { Readable } = require('stream');
const SILENCE_FRAME = Buffer.from([0xF8, 0xFF, 0xFE]);

module.exports = class SilenceFrame extends Readable {
    _read() {
        this.push(SILENCE_FRAME);
    }
}