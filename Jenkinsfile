pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and building app...'
                bat 'npm ci || npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo "No tests yet"'
                // Or: bat 'npm test'
            }
        }
        stage('Code Quality') {
            steps {
                echo 'Checking code quality with ESLint...'
                bat 'npx eslint . || exit /b 0'
            }
        }
        stage('Security') {
            steps {
                echo 'Running security audit...'
                bat 'npm audit --audit-level=low || exit /b 0'
            }
        }
    }
}
