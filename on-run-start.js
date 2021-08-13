const ConsoleColors = require('./console-colors.js');

module.exports = function OnRunStart() {

    var consoleColors = new ConsoleColors();

    function clearScreen() {
        'use strict';
        process.stdout.write('\x1Bc');
    }

    function breakLine() {
        console.log('\033[2J');
    }

    function setCursor() {
        console.log("\u001b[2J\u001b[0;0H");
    }

    function msg(msg) {
        console.log(consoleColors.getColor());
        var line = '\t--------------------------------------';
        console.log('');
        console.log(line);
        console.log('\t\t' + msg);
        console.log(line);
        console.log('');
        console.log('');
        console.log(consoleColors.colors().Reset);
    }

    function prepareNewTest() {
        clearScreen();
        breakLine();
        setCursor();
    }

    prepareNewTest();
    msg('tests running ' + new Date().toLocaleTimeString());

}