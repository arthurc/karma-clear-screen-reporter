const OnRunStart = require('./on-run-start.js');

function ClearScreenReporter() {
    this.onRunStart = OnRunStart;
}

module.exports = {
    'reporter:clear-screen': ['type', ClearScreenReporter]
};
