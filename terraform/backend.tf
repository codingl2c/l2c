terraform {
  required_version = ">= 0.13"
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.3"
    }
    helm = {
      source  = "hashicorp/helm"
      version = ">= 2.1.0"
    }
    google = {
      source  = "hashicorp/google"
      version = ">= 4.67.0"
    }
  }
  backend "gcs" {
    bucket = "terraform-l2c"
    prefix = "argocd-terraform"
  }
}