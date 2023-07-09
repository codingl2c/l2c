output "region" {
  value       = var.gcp_region
  description = "GCloud Region"
}

output "zone" {
  value       = var.gcp_zone
  description = "GCloud Zone"
}

output "project_id" {
  value       = var.gcp_project
  description = "GCloud Project ID"
}

output "kubernetes_cluster_name" {
  value       = google_container_cluster.main.name
  description = "GKE Cluster Name"
}

output "kubernetes_cluster_host" {
  value       = google_container_cluster.main.endpoint
  description = "GKE Cluster Host"
}