#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GuarddutyTsStack } from '../lib/guardduty-ts-stack';

const app = new cdk.App();

new GuarddutyTsStack(app, 'GuarddutyTsStack', {
  env: {
    region: 'ap-northeast-2'  // 👈 设置为首尔区域
    
  }
});
