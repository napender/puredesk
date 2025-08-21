// src/utils/prompts.js
const inquirer = require('inquirer');

const { validateProjectName } = require('./validation');

async function gatherProjectInfo(options) {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Project name:',
      when: !options.name,
      validate: validateProjectName
    },
    {
      type: 'list',
      name: 'type',
      message: 'Project type:',
      choices: [
        'react',
        'vue',
        'angular',
        'node-express',
        'node-cli',
        'python-flask',
        'python-django',
        'next.js',
        'custom'
      ],
      when: !options.type
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description:',
      when: !options.description
    },
    {
      type: 'confirm',
      name: 'useGit',
      message: 'Initialize Git repository?',
      default: true,
      when: options.git !== false
    },
    {
      type: 'confirm',
      name: 'deployToGitHub',
      message: 'Deploy to GitHub?',
      default: true,
      when: options.deploy !== false
    }
  ];

  const answers = await inquirer.prompt(questions);
  return { ...options, ...answers };
}

module.exports = {
    gatherProjectInfo
}
