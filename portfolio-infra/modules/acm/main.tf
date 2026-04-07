resource "aws_acm_certificate" "cert" {
  provider = aws.virginia
  domain_name = var.domain_name
  validation_method = var.acm_validation_method

  subject_alternative_names = [
    "www.${var.domain_name}"
  ]

  lifecycle {
    create_before_destroy = true
  }
}