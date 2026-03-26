import sector3 from "../assets/sector3.webp";
import rezpitch from "../assets/rezpitch.webp";
import snip from "../assets/3tier-prjct.webp";

export const projects = [
  {
    id: 1,
    title: "sector3-F1 Analytics",
    description:
      "Designed and deployed a distributed AWS-based analytics platform sustaining 10K+ events/sec with event-driven processing and optimized high-density data rendering.",
    image: sector3,
    tech: ["AWS", "Node.js", "react", "Docker"],
    github: "https://github.com/maneeshaYasinth/sector-3",
    live: "https://www.sector3.online/",
  },
  {
    id: 2,
    title: "rezpitch.com",
    description:
      "Collaborated in a team to develop a Spring Boot-based hotel booking platform with role-based authentication, real-time availability management, and secure RESTful APIs, deployed on cloud infrastructure.",
    image: rezpitch,
    tech: ["react", "Spring Boot", "Docker", "mongodb"],
    // github: "#",
    live: "https://www.rezpitch.com/",
  },
{
  id: 3,
  title: "snip.",
  description:
    "Built a production-style containerized URL shortener on AWS, architected as a 3-tier application with ECS Fargate, ALB, CloudFront, and DynamoDB. Provisioned all infrastructure with Terraform modules and automated deployments via GitHub Actions CI/CD pipeline.",
  image: snip,
  tech: ["Node.js", "Docker", "AWS", "Terraform", "GitHub Actions"],
  github: "https://github.com/maneeshaYasinth/snip-infra",
  // live: "" — spin up when demoing
},
];