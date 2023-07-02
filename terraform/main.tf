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

# resource "time_sleep" "wait_30_seconds" {
#   depends_on = [google_container_cluster.main]
#   create_duration = "60s"
# }

# resource "helm_release" "nginx_ingress" {
#   name       = "nginx-ingress-controller"
#   repository = "https://charts.bitnami.com/bitnami"
#   chart      = "nginx-ingress-controller"

#   set {
#     name  = "service.type"
#     value = "ClusterIP"
#   }
# }

# resource "helm_release" "argocd" {
#   name = "argocd"
#   chart = "argoproj/argo-cd"
#   repository = "docker.io/argoproj/argocd"
#   version = "v1.14.0"
#   namespace = "argocd"

#   # values = {
#   #   server.image.repository = "docker.io/argoproj/argocd"
#   #   server.image.tag = "latest"
#   # }
# }

# resource "kubernetes_pod" "nginx-example" {
#   metadata {
#     name = "nginx-example"

#     labels = {
#       maintained_by = "terraform"
#       app           = "nginx-example"
#     }
#   }

#   spec {
#     container {
#       image = "nginx:1.24.0"
#       name  = "nginx-example"
#     }
#   }
# }

resource "kubernetes_namespace" "argocd" {
  metadata {
    name = "argocd"
  }
}

resource "kubernetes_secret" "argocd-secret" {
  metadata {
    name = "argocd-secret"
    namespace = "argocd"
  }

  data = {
    admin_password = "${var.argocd_secret}"
  }
}

resource "kubernetes_deployment" "argocd" {
  metadata {
    name = "argocd-server"
    namespace = "argocd"
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "argocd-server"
      }
    }
    template {
      metadata {
        labels = {
          app = "argocd-server"
        }
      }
      spec {
        container {
          name = "argocd-server"
          image = "docker.io/argoproj/argocd:latest"
          args = ["server"]
          # ports {
          #   containerPort = 8080
          # }
          # volumeMounts {
          #   mountPath = "/app/config"
          #   name = "argocd-secret"
          # }
        }
        # volumes {
        #   secret {
        #     secretName = "argocd-secret"
        #     name = "argocd-secret"
        #   }
        # }
      }
    }
  }
}