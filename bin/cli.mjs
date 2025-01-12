#! /usr/bin/env node

import { execSync } from 'child_process'
import readline from 'readline'

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Failed to run command: ${command}`, error)
    return false
  }
  return true
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let repoName = process.argv[2]
const args = process.argv.slice(2)
const useVSCode = args.includes('--vs')
const useCursor = args.includes('--cursor')

const validateRepoName = (name) => {
  const validNameRegex = /^[a-z0-9-]+$/
  return validNameRegex.test(name)
}

const promptForValidRepoName = (callback) => {
  rl.question(
    'Please enter a name for your project (lowercase letters, numbers and hyphens only): ',
    (answer) => {
      if (validateRepoName(answer)) {
        repoName = answer
        callback()
      } else {
        console.error(
          'Invalid project name. Please use only lowercase letters, numbers and hyphens.'
        )
        promptForValidRepoName(callback)
      }
    }
  )
}

if (!repoName || repoName.startsWith('--')) {
  promptForValidRepoName(initializeProject)
} else if (!validateRepoName(repoName)) {
  console.error(
    'Invalid project name. Please use only lowercase letters, numbers and hyphens.'
  )
  promptForValidRepoName(initializeProject)
} else {
  initializeProject()
}

function initializeProject() {
  const gitCheckout = `git clone --depth 1 https://github.com/DarkidOP/Bunext.git ${repoName}`
  const removeGit = `cd ${repoName} && rm -rf .git`
  const initGit = `cd ${repoName} && git init && git add . && git commit -m "Initial commit"`
  const openVSCode = `cd ${repoName} && code .`
  const openCursor = `cd ${repoName} && cursor .`

  // Determine package manager based on how script was executed
  let packageManager = 'npm'
  if (process.env.npm_execpath?.includes('pnpm')) {
    packageManager = 'pnpm'
  } else if (process.env.npm_execpath?.includes('yarn')) {
    packageManager = 'yarn'
  } else if (process.argv[1].includes('bunx')) {
    packageManager = 'bun'
  }

  const installDeps = `cd ${repoName} && ${packageManager}${packageManager === 'npm' ? ' install --legacy-peer-deps' : ' install'}`

  console.log(`Creating project template in ./${repoName}`)
  const checkedOut = runCommand(gitCheckout)
  if (!checkedOut) {
    console.error(
      'Failed to clone template repository "https://github.com/DarkidOP/Bunext.git"'
    )
    process.exit(1)
  }

  console.log('Removing Git history...')
  const removedGit = runCommand(removeGit)
  if (!removedGit) {
    console.error('Failed to remove Git history')
    process.exit(1)
  }

  console.log('Installing dependencies...')
  const installedDeps = runCommand(installDeps)
  if (!installedDeps) {
    console.error('Failed to install dependencies')
    process.exit(1)
  }

  rl.question(
    'Would you like to initialize a new git repository? (y/n) ',
    (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        console.log('Initializing Git repository...')
        const initializedGit = runCommand(initGit)
        if (!initializedGit) {
          console.error('Failed to initialize Git repository')
          process.exit(1)
        }
        console.log('Git repository initialized successfully!')
      }

      if (useVSCode) {
        console.log('Opening in Visual Studio Code...')
        runCommand(openVSCode)
      } else if (useCursor) {
        console.log('Opening in Cursor...')
        runCommand(openCursor)
      }

      console.log('\nHappy coding! 🎉')
      rl.close()
    }
  )
}
