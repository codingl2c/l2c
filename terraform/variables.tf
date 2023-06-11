# Variables for GCP infrastructure module

variable "gcp_account_json" {
  type        = string
  description = "File path and name of service account access token file."
}

variable "gcp_project" {
  type        = string
  description = "GCP project in which the L2C app will be deployed."
}

variable "gcp_region" {
  type        = string
  description = "GCP region used for all resources."
  default     = "us-east4"
}

variable "gcp_zone" {
  type        = string
  description = "GCP zone used for all resources."
  default     = "us-east4-a"
}

variable "cluster_name" {
  type        = string
  description = "Name of the GKE cluster."
  default     = "l2c-staging"
}

variable "prefix" {
  type        = string
  description = "Prefix added to names of all resources"
  default     = "l2c"
}

variable "machine_type" {
  type        = string
  description = "Machine type used for all compute instances"
  default     = "n1-standard-2"
}

variable "argocd_admin_password" {
  type        = string
  description = "Password for the ArgoCD admin user"
  default     = "admin"
}
