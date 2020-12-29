function breakLine() {
    console.log('\033[2J');
}

function setCursor() {
    console.log("\u001b[2J\u001b[0;0H");
}

function msg(msg) {
    var line = '\t--------------------------------------';
    console.log('');
    console.log(line);
    console.log('\t\t' + msg);
    console.log(line);
    console.log('');
    console.log('');
}

function ClearScreenReporter() {
    this.onRunStart = function () {
        breakLine();
        setCursor();
        msg('tests running ' + new Date().toLocaleTimeString());
    };
}

module.exports = {
    'reporter:clear-screen': ['type', ClearScreenReporter]
};
