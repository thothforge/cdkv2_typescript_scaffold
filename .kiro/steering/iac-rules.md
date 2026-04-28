# IaC Rules

## CDK Best Practices
- Use L2/L3 constructs over L1 (Cfn*) when available
- Enable encryption at rest for all storage resources
- Enforce SSL/TLS for data in transit
- Block public access on S3 buckets by default
- Use RemovalPolicy.RETAIN for production stateful resources
- Tag all resources: Project, Environment, Owner, ManagedBy
- Run cdk-nag AwsSolutions checks on every synth

## Naming
- Stack IDs: `{ProjectName}-{Domain}-{Environment}`
- Construct IDs: PascalCase
- Config files: kebab-case YAML
