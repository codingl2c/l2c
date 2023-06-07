resource "google_service_account" "main" {
  account_id   = "${var.cluster_name}-sa"
  display_name = "GKE Cluster ${var.cluster_name} Service Account"
}

resource "google_container_cluster" "main" {
  name               = "${var.cluster_name}"
  location           = var.gcp_zone
  initial_node_count = 1
  node_config {
    service_account = google_service_account.main.email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    #    "https://www.googleapis.com/auth/container"
    ]
  }
  timeouts {
    create = "30m"
    update = "40m"
  }
}

resource "time_sleep" "wait_30_seconds" {
  depends_on = [google_container_cluster.main]
  create_duration = "60s"
}

# module "gke_auth" {
#   depends_on           = [time_sleep.wait_30_seconds]
#   source               = "terraform-google-modules/kubernetes-engine/google//modules/auth"
#   project_id           = var.gcp_project
#   cluster_name         = var.cluster_name
#   location             = var.gcp_region
#   use_private_endpoint = false
# }