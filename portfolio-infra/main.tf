provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

module "s3" {
  source = "./modules/s3"
  bucket_name = var.bucket_name
}

module "acm" {
  source = "./modules/acm"

  domain_name           = var.domain_name
  acm_validation_method = var.acm_validation_method

  providers = {
    aws.virginia = aws.virginia
  }
}

module "cloudfront" {
  source = "./modules/cloudfront"
  domain_name = var.domain_name
  certificate_arn = module.acm.certificate_arn
  bucket_domain_name = module.s3.bucket_domain_name
  bucket_id = module.s3.bucket_id
  bucket_arn = module.s3.bucket_arn
}