pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'No build..'
      }
    }
    stage('Test') {
      steps {
        echo 'No test..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
        s3Upload(file:'index.html', bucket:'jenkinsdevopsfronteoi', path:'index.html', acl: 'public-read')
      }
    }
  } //comiit
}
