const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'database', type: String },
    { name: 'jwtSecret', type: String },
    { name: 'qiniuAccessKey', type: String },
    { name: 'qiniuSecretKey', type: String },
    { name: 'qiniuBucket', type: String },
    { name: 'qiniuUrlPrefix', type: String },
    { name: 'allowOrigin', type: String, multiple: true },
    { name: 'server', type: String },
    { name: 'publicPath', type: String },
    { name: 'subDirectory', type: String },
];
module.exports = commandLineArgs(optionDefinitions);
