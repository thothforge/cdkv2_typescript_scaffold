# Project Structure

CDKv2 TypeScript scaffold managed by ThothForge.

## Layout
- `bin/` - CDK app entry point
- `lib/stacks/` - Stack definitions (foundation, application, platform)
- `lib/constructs/` - Reusable CDK constructs
- `app/functions/` - Lambda function source code
- `project_configs/` - YAML-driven environment configuration
- `test/` - Jest tests
- `docs/catalog/` - Backstage catalog and documentation

## Conventions
- One stack per domain concern
- Constructs are reusable, stacks compose them
- Environment config externalized in YAML
- cdk-nag AwsSolutions pack enabled by default
- S3 buckets: encryption, SSL, public access blocked
