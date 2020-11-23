import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CodebuildCacheProblem from '../lib/codebuild-cache-problem-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CodebuildCacheProblem.CodebuildCacheProblemStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
