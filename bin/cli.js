#!/usr/bin/env node
const { program } = require('commander');
const createCommand = require('../src/commands/create');

program
  .name('ai-project-creator')
  .description('AI-powered project creator')
  .version('1.0.0');

program
  .command('create')
  .description('Create a new project with AI assistance')
  .option('-n, --name <name>', 'Project name')
  .option('-t, --type <type>', 'Project type (react, node, python, etc.)')
  .option('-d, --description <desc>', 'Project description')
  .option('--no-git', 'Skip git initialization')
  .option('--no-deploy', 'Skip GitHub deployment')
  .action(createCommand);

program.parse();
