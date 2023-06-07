terraform {
  required_version = ">= 0.13"
  required_providers {
    kubectl = {
      source  = "gavinbunney/kubectl"
      version = ">= 1.7.0"
    }
    google = {
      source  = "hashicorp/google"
      version = ">= 4.67.0"
    }
  }
  backend "gcs" {
    bucket = "terraform-backend-deep-voyage-384219"
    prefix = "argocd-terraform"
  }
}