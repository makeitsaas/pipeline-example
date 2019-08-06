import * as program from 'commander';

program
    .version('0.1.0')
    .option('--mode [mode]', 'Environment type (prod, test, local)')
    .option('--test', 'What your do for testing')
    .option('--ansible', 'Prepare ansible playbook')
    .option('--playbook [playbookName]', 'Specify ansible playbook name')
    .option('-X, --execute', 'Combined with --ansible, executes the freshly created playbook')
    .option('-i, --interactive', 'Creates a sequence from order')
    .option('--order [orderId]', 'Creates a sequence from order')
    .option('--sequence [sequenceId]', 'Runs a sequence')
    .option('--environment [environmentId]', 'Environment Id')
    .option('--service [serviceId]', 'Service Id')
    .option('--drop', 'Associated with environment id, will drop deployment')
    .parse(process.argv);

console.log('do something');
