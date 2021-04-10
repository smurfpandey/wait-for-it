const cp = require('child_process');
const path = require('path');

exports.isItUp = (host, port, timeout) => {
    const command = `./wait-for-it.sh -h ${host} -p ${port} -t ${timeout}`;

    try {
        const result = cp.execSync(command, {
            cwd: path.resolve(__dirname),
            encoding: 'utf-8'
        });
        return {
            status: 0,
            message: result.stdout
        };
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        };
    }
    
}