variable "bucket_name" {
  type = string
}

variable "domain_name" {
  type = string
}

variable "acm_validation_method" {
  type = string
  default = "DNS"
}

variable "aws_region" {
  type = string
}