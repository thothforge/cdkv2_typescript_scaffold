#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsSolutionsChecks } from 'cdk-nag';
import { FoundationStack } from '../lib/stacks/foundation/foundation-stack.js';
import { loadConfig } from '../project_configs/config-loader.js';

const app = new cdk.App();
const config = loadConfig();

const environment = app.node.tryGetContext('env') || process.env.ENV || 'dev';
const envConfig = config.environments[environment];

if (!envConfig) {
  throw new Error(`Unknown environment: ${environment}. Available: ${Object.keys(config.environments).join(', ')}`);
}

const stackProps: cdk.StackProps = {
  env: { account: envConfig.account, region: envConfig.region },
  tags: { ...config.tags, Environment: environment },
};

new FoundationStack(app, `${config.project_name}-Foundation-${environment}`, {
  ...stackProps,
  projectName: config.project_name,
  environment,
});

cdk.Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
