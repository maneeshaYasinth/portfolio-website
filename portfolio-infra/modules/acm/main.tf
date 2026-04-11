terraform {
  required_providers {
    aws = {
      source                = "hashicorp/aws"
      version               = "~> 6.0"
      configuration_aliases = [aws.virginia]
    }
  }
}


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

resource "aws_acm_certificate_validation" "cert" {
  provider        = aws.virginia
  certificate_arn = aws_acm_certificate.cert.arn

  validation_record_fqdns = [for record in aws_acm_certificate.cert.domain_validation_options : record.resource_record_name]
}