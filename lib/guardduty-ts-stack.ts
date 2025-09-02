import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as guardduty from 'aws-cdk-lib/aws-guardduty';

export class GuarddutyTsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // 创建 GuardDuty 探测器（仅使用 features）
    const detector = new guardduty.CfnDetector(this, 'GuardDutyDetector', {
      enable: true,
      findingPublishingFrequency: 'FIFTEEN_MINUTES',
      features: [
        {
          name: 'EBS_MALWARE_PROTECTION',
          status: 'ENABLED'
        },
        {
          name: 'RDS_LOGIN_EVENTS',
          status: 'ENABLED'
        },
        {
          name: 'LAMBDA_NETWORK_LOGS',
          status: 'ENABLED'
        },
        {
          name: 'EKS_AUDIT_LOGS',
          status: 'ENABLED'
        },
        {
          name: 'S3_DATA_EVENTS',
          status: 'ENABLED'
        },
        {
          name: 'EKS_RUNTIME_MONITORING',
          status: 'ENABLED'
        }
      ]
    });
  }
}
