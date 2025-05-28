pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and building app...'
                // Use npm ci for clean install, fall back to npm install if needed
                sh 'npm ci || npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // If you don't have tests yet, this will just echo. Replace with your test command!
                sh 'echo "No tests yet"'
                // Example: sh 'npm test'
            }
        }
        stage('Code Quality') {
            steps {
                echo 'Checking code quality with ESLint...'
                // If ESLint is set up in your project, this will check all files.
                // To add ESLint: npm install eslint --save-dev
                sh 'npx eslint . || true'
            }
        }
        stage('Security') {
            steps {
                echo 'Running security audit...'
                // Checks for known vulnerabilities in dependencies
                sh 'npm audit --audit-level=low || true'
            }
        }
    }
}
