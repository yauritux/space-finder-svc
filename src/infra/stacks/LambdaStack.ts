import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

interface LambdaStackProps extends StackProps {
    spacesTable: ITable;
}

export class LambdaStack extends Stack {

    public readonly appLambdaIntegration: LambdaIntegration;

    constructor(scope: Construct, id: string, props: LambdaStackProps) {
        super(scope, id, props);

        const appLambda = new NodejsFunction(this, 'HelloLambda', {
            runtime: Runtime.NODEJS_20_X,
            handler: 'handler',
            entry: join(__dirname, '../../services/app.ts'),
            environment: {
                TABLE_NAME: props.spacesTable.tableName
            }
        });

        appLambda.addToRolePolicy(new PolicyStatement({
            effect: Effect.ALLOW,
            actions: [
                's3:ListAllMyBuckets',
                's3:ListBucket'
            ],
            resources: ["*"]
        }));

        this.appLambdaIntegration = new LambdaIntegration(appLambda);
    }
}