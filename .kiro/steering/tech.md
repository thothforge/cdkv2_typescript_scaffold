# Technology Stack

- **IaC**: AWS CDK v2 (TypeScript)
- **Language**: TypeScript 5.9 (ES2022 target, CommonJS modules)
- **Testing**: Jest 30 with ts-jest
- **Security**: cdk-nag 3.x with AwsSolutions checks
- **Linting**: ESLint 9 + Prettier 3
- **Config**: YAML-based environment configuration
- **CI/CD**: GitHub Actions (lint → synth → security scan → deploy)
