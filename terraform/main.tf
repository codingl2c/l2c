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
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
  timeouts {
    create = "10m"
    update = "20m"
  }
}

resource "kubernetes_namespace" "argocd" {
  metadata {
    name = "argocd"
  }
}

# resource "helm_release" "nginx" {
#   name       = "nginx"
#   repository = "https://charts.bitnami.com/bitnami"
#   chart      = "nginx"

#   set {
#     name  = "replicaCount"
#     value = 1
#   }
# }

resource "helm_release" "argocd" {
  name       = "argocd"
  repository = "https://charts.bitnami.com/bitnami"
  chart      = "argo-cd"
  namespace = "argocd"
  depends_on = [ kubernetes_namespace.argocd ]
  set {
    name  = "server.service.type"
    value = "LoadBalancer"
  }
}

# resource "kubernetes_pod" "l2c-staging" {
#   metadata {
#     name = "l2c-frontend"

#     labels = {
#       maintained_by = "terraform"
#       app           = "l2c-frontend"
#     }
#   }

#   spec {
#     container {
#       image = "olanigan8/l2c-frontend:v1.1"
#       name  = "l2c-frontend"
#     }
#   }
# }

# resource "kubernetes_manifest" "argocd-app" {
#   manifest = {
#   "apiVersion" = "argoproj.io/v1alpha1"
#   "kind" = "Application"
#   "metadata" = {
#     "name" = "l2c"
#     "namespace" = "argocd"
#   }
#   "spec" = {
#     "destination" = {
#       "name" = ""
#       "namespace" = "default"
#       "server" = "https://kubernetes.default.svc"
#     }
#     "project" = "default"
#     "source" = {
#       "path" = "manifests"
#       "repoURL" = "https://github.com/codingl2c/l2c"
#       "targetRevision" = "HEAD"
#     }
#     "sources" = []
#   }
# }
# }