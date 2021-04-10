const cp = require('child_process');
const path = require('path');

exports.isItUp = (host, port, timeout) => {
    const command = './wait-for-it.sh';
    const cmdArgs = ['-h', host, '-p', port, '-t', timeout];

    try {
        const result = cp.spawnSync(command, cmdArgs, {
            cwd: path.resolve(__dirname),
            encoding: 'utf-8'
        });
        return {
            status: 0,
            message: result.stderr.toString()
        };
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        };
    }
    
}