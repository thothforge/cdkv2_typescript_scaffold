# #{project_name}# — CDKv2 TypeScript Infrastructure

> Enterprise-grade AWS CDK scaffold with cdk-nag compliance, multi-environment support, and AI-assisted development via ThothForge.

## Architecture

```
bin/                          CDK app entry point
lib/
├── stacks/
│   ├── foundation/           Core resources (S3, KMS, IAM baselines)
│   ├── platform/             Shared infra (VPC, ECS, API Gateway)
│   └── application/          Workload resources (Lambda, DynamoDB)
└── constructs/               Reusable L2/L3 constructs
app/functions/                Lambda function source code
project_configs/              YAML-driven environment configuration
test/                         CDK assertions + cdk-nag + snapshots
docs/catalog/                 Backstage TechDocs
```

## Quick Start

```bash
# Install dependencies
npm install

# Synthesize CloudFormation (dev environment)
npx cdk synth --context env=dev

# Run tests (includes cdk-nag compliance)
npm test

# Deploy to dev
npx cdk deploy --all --context env=dev
```

## Environment Configuration

Edit `project_configs/environment_options.yaml` to configure accounts and regions:

```yaml
environments:
  dev:
    account: "111111111111"
    region: "us-east-1"
  prd:
    account: "333333333333"
    region: "us-east-1"
```

## Security & Compliance

- **cdk-nag**: AwsSolutions checks run on every `cdk synth`
- **Encryption**: All storage resources encrypted at rest (S3, EBS, RDS)
- **SSL/TLS**: Enforced on all data-in-transit paths
- **Public access**: Blocked by default on all S3 buckets
- **Tagging**: Mandatory tags (Project, Environment, Owner, ManagedBy)

## Development

```bash
# Lint
npm run lint

# Format
npm run format

# Watch mode (auto-compile)
npm run watch

# Run specific test
npx jest test/cdk-nag.test.ts
```

## CI/CD Pipeline

GitHub Actions pipeline (`.github/workflows/deploy.yml`):
1. **Lint & Test** — ESLint, Prettier, Jest
2. **Synth** — CDK synth per environment (matrix)
3. **Security Scan** — Checkov on synthesized CloudFormation
4. **Deploy** — CDK deploy to dev (on main push, with OIDC role)

## AI-Assisted Development

This scaffold includes a pre-configured THOTH agent (`.kiro/agents/thoth.json`) with:
- AWS IaC MCP server for CDK best practices
- AWS Knowledge MCP for documentation
- ThothCTL MCP for governance and scanning
- Git MCP for version control

```bash
kiro-cli chat --agent thoth
```

## Stack Layers

| Layer | Purpose | Status |
|-------|---------|--------|
| Foundation | Core resources (S3, KMS, IAM) | ✅ Implemented |
| Platform | Shared infra (VPC, ECS, ALB) | 📋 Placeholder |
| Application | Workload resources (Lambda, DDB) | 📋 Placeholder |

## License

Apache-2.0
