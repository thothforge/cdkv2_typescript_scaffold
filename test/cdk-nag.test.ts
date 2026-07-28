import * as cdk from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks } from 'cdk-nag';
import { FoundationStack } from '../lib/stacks/foundation/foundation-stack.js';

describe('cdk-nag AwsSolutions compliance', () => {
  let stack: cdk.Stack;

  beforeAll(() => {
    const app = new cdk.App();
    stack = new FoundationStack(app, 'TestNag', {
      projectName: 'Test',
      environment: 'dev',
    });
    cdk.Aspects.of(stack).add(new AwsSolutionsChecks({ verbose: true }));
  });

  test('No cdk-nag errors', () => {
    const errors = Annotations.fromStack(stack).findError('*', Match.stringLikeRegexp('AwsSolutions-.*'));
    expect(errors).toHaveLength(0);
  });

  test('No cdk-nag warnings (informational only)', () => {
    const warnings = Annotations.fromStack(stack).findWarning('*', Match.stringLikeRegexp('AwsSolutions-.*'));
    // Warnings are acceptable but should be reviewed
    if (warnings.length > 0) {
      console.log(`cdk-nag warnings (${warnings.length}):`, warnings.map(w => w.entry.data));
    }
  });
});
