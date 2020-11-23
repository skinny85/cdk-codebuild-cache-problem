#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CodebuildCacheProblemStack } from '../lib/codebuild-cache-problem-stack';

const app = new cdk.App();
new CodebuildCacheProblemStack(app, 'CodebuildCacheProblemStack');
