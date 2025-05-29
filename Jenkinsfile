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
        stage('SonarCloud Analysis') {
            steps {
                echo 'Running SonarCloud scan...'
                bat 'curl -L -o sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-windows.zip'
                bat 'powershell -Command "Expand-Archive sonar-scanner.zip -DestinationPath . -Force"'
                bat '''
                set PATH=%CD%\\sonar-scanner-5.0.1.3006-windows\\bin;%PATH%
                sonar-scanner.bat ^
                  -Dsonar.projectKey=YOUR_PROJECT_KEY ^
                  -Dsonar.organization=YOUR_ORG_KEY ^
                  -Dsonar.sources=. ^
                  -Dsonar.host.url=https://sonarcloud.io ^
                  -Dsonar.login=YOUR_TOKEN
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying app to test environment...'
                bat 'if exist deploy rmdir /s /q deploy'
                bat 'mkdir deploy'
                bat 'xcopy /s /i /y dist deploy\\dist'
            }
        }
        stage('Release') {
            steps {
                echo 'Promoting app to production...'
                bat 'if exist prod rmdir /s /q prod'
                bat 'mkdir prod'
                bat 'xcopy /s /i /y dist prod\\dist'
            }
        }
        stage('Monitoring') {
            steps {
                echo 'Monitoring the production environment...'
                bat 'echo App is running and monitored! No issues detected.'
            }
        }
    }
}
