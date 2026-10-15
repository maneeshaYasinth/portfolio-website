import sector3 from "../assets/sector3.webp";
import rezpitch from "../assets/rezpitch.webp";
import snip from "../assets/3tier-prjct.webp";
import portfolioInfra from "../assets/portfolio-infra.svg";

export const projects = [
  {
    id: 1,
    title: "snip.",
    description:
      "Built a production-style containerized URL shortener on AWS, architected as a 3-tier application with ECS Fargate, ALB, CloudFront, and DynamoDB. Provisioned all infrastructure with Terraform modules and automated deployments via GitHub Actions CI/CD pipeline.",
    image: snip,
    infra: [
      ["IaC", "Terraform modules"],
      ["CI/CD", "GitHub Actions"],
      ["Runtime", "ECS Fargate · ALB"],
      ["Data", "DynamoDB"],
    ],
    tech: ["Node.js", "Docker", "AWS", "Terraform", "GitHub Actions"],
    github: "https://github.com/maneeshaYasinth/snip-infra",
  },
  {
    id: 2,
    title: "This Portfolio",
    description:
      "Static hosting for this site on AWS, defined in modular Terraform: a private S3 bucket served through CloudFront with Origin Access Control, HTTPS-only via an ACM certificate. A GitHub Actions pipeline builds the React app, syncs it to S3, and invalidates the CloudFront cache.",
    image: portfolioInfra,
    infra: [
      ["IaC", "Terraform (S3, CloudFront, ACM modules)"],
      ["CI/CD", "GitHub Actions"],
      ["Edge", "CloudFront · OAC · TLS 1.2+"],
    ],
    tech: ["AWS", "Terraform", "GitHub Actions", "CloudFront", "React"],
    github: "https://github.com/maneeshaYasinth/portfolio-website",
  },
  {
    id: 3,
    title: "sector3-F1 Analytics",
    description:
      "Designed and deployed a distributed AWS-based analytics platform sustaining 10K+ events/sec with event-driven processing and optimized high-density data rendering.",
    image: sector3,
    tech: ["AWS", "Node.js", "react", "Docker"],
    github: "https://github.com/maneeshaYasinth/sector-3",
    live: "https://www.sector3.online/",
  },
  {
    id: 4,
    title: "rezpitch.com",
    description:
      "Collaborated in a team to develop a Spring Boot-based hotel booking platform with role-based authentication, real-time availability management, and secure RESTful APIs, deployed on cloud infrastructure.",
    image: rezpitch,
    tech: ["react", "Spring Boot", "Docker", "mongodb"],
    live: "https://www.rezpitch.com/",
  },
];
