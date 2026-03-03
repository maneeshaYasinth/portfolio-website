provider "aws" {
  region = "ap-south-1" # main region for deployment
}

provider "aws" {
  alias  = "virginia"
  region = "us-east-1" #region for ACM certificate
}