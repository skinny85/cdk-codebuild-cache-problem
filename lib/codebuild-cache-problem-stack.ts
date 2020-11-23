import * as codebuild from '@aws-cdk/aws-codebuild';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class CodebuildCacheProblemStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new codebuild.Project(this, 'Project', {
      source: codebuild.Source.bitBucket({
        owner: 'awslabs',
        repo: 'aws-cdk',
      }),
      cache: codebuild.Cache.bucket(new s3.Bucket(this, 'Bucket'))
    });
  }
}
