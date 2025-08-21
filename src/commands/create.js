// src/commands/create.js
const inquirer = require('inquirer');
const AIService = require('../services/aiService');
const FileService = require('../services/fileService');
const GitService = require('../services/gitService');
const GitHubService = require('../services/githubService');
const { gatherProjectInfo } = require('../utils/prompts');

async function createCommand(options) {
  try {
    // 1. Gather project information
    const projectInfo = await gatherProjectInfo(options);
    
    // 2. Generate project with AI
    const aiService = new AIService(process.env.OPENAI_API_KEY);
    const projectStructure = await aiService.generateProjectStructure(
      projectInfo.description, 
      projectInfo.type
    );
    
    // 3. Create project files
    const fileService = new FileService();
    await fileService.createProjectStructure(projectInfo.name, projectStructure);
    
    // 4. Initialize git
    if (projectInfo.useGit) {
      const gitService = new GitService();
      await gitService.initRepository(projectInfo.name);
      await gitService.createInitialCommit(projectInfo.name);
    }
    
    // 5. Deploy to GitHub
    if (projectInfo.deployToGitHub) {
      const githubService = new GitHubService(process.env.GITHUB_TOKEN);
      await githubService.createRepository(
        projectInfo.name, 
        projectInfo.description
      );
      await githubService.pushToGitHub(projectInfo.name, projectInfo.name);
    }
    
    console.log(`✅ Project "${projectInfo.name}" created successfully!`);
    
  } catch (error) {
    console.error('❌ Error creating project:', error.message);
    process.exit(1);
  }
}

module.exports = createCommand;