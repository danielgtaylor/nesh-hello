/*
An example plugin for Nesh, the enhanced shell for Node.js
*/

exports.postStart = function (context) {
    var repl = context.repl;

    repl.context.hello = function (name) {
        if (!name) {
            name = 'world';
        }

        return 'Hello, ' + name + '!';
    };
};
