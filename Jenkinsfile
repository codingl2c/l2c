pipeline {
	agent any
    environment {
        buildVersion = "${currentBuild.startTimeInMillis}"
        wordDir = "$pwd"
    }
    stages {
        stage('Build') {
            agent any
            steps {
              sh 'docker build -t bendevet/quicky-landing:$buildVersion .'
            }
        }
        stage('Deploy to Artifactory'){
            agent any
             steps{
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push docker.io/bendevet/quicky-landing:$buildVersion'
                }
            }
        }
        stage('Deploy') {
            agent any
            steps {
                sh 'helm repo add cloudyte-app https://cloudytes.jfrog.io/artifactory/api/helm/helm --username myUsername --password myPassword' 
                withCredentials([file(credentialsId: 'kubeConfig', variable: 'KUBECRED')]) {
                    sh 'KUBECONFIG=$KUBECRED helm upgrade --install -f ${PWD}/deploy/values.yaml --set image.tag=":"$buildVersion quicky-landing cloudyte-app/cloudyteReact'
                }
            }
        }
  }
}