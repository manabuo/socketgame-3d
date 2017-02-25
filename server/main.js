global.THREE = require('./libs/three.module');
global.AMMO = require('ammo-node');
global.Physics = require('./Server/Physics');
global.Server = require('./Server/Server');
global.IOCore = require('./Server/IOCore');

if (!String.prototype.format) {
    String.prototype.format = function() {
        let args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

global.Server.init();
global.IOCore.init();
global.Physics.init();