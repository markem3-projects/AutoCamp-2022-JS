pipeline {
    agent any

    tools {nodejs "NodeJS"}
    
    stages {
    

    
        stage("build") {
        
            steps {
                echo 'building'
                sh "npm install"
                sh 'npm install wdio-chromedriver-service'
            }
        
        }
        
        stage("test") {
        
            steps {
                echo 'testing'
                sh "npx wdio --spec ./test/specs/BosiackaWiktoria/test.e2e.js"
            }
        
        }
        
        stage("deploy") {
        
            steps {
                echo 'deploying'
            }
        
        }
    }
}