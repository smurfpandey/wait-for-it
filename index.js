const core = require('@actions/core');

const { isItUp } = require('./lib/wait-for-it');

try {
    const host = core.getInput('host');
    const port = parseInt(core.getInput('port'), 10);
    const timeout = parseInt(core.getInput('timeout'), 10);

    const result = isItUp(host, port, timeout);

    if(result.message.indexOf('timeout occurred after waiting') > -1) {
        core.setFailed(result.message);
    }
} catch (error) {
  core.setFailed(error.message);
}
