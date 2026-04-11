output "bucket_id" {
  value = aws_s3_bucket.maneeshayasinth_portfolio_bucket.id
}

output "bucket_arn" {
  value = aws_s3_bucket.maneeshayasinth_portfolio_bucket.arn
}

output "bucket_domain_name" {
  value = aws_s3_bucket.maneeshayasinth_portfolio_bucket.bucket_regional_domain_name
}