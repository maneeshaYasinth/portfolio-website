resource "aws_s3_bucket" "maneeshayasinth_portfolio_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "maneeshayasinth_portfolio" {
  bucket = aws_s3_bucket.maneeshayasinth_portfolio_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
