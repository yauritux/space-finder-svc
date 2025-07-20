# AWS Serverless Refresh Project

This project serves as a refreshment on AWS Serverless and AWS-CDK for handling infrastructure as code (IaC). The primary goal is to demonstrate a basic serverless architecture using AWS services, such as API Gateway, Lambda, and DynamoDB, while leveraging AWS-CDK for infrastructure management.

## Project Overview
The project consists of three main stacks:
- DataStack: Defines a DynamoDB table for storing data.
- LambdaStack: Creates a Node.js Lambda function that interacts with the DynamoDB table.
- ApiStack: Sets up an API Gateway REST API that invokes the Lambda function.

## Infrastructure as Code (IaC)
This project uses AWS-CDK to manage the infrastructure as code. The CDK code is written in TypeScript and is located in the 
`src/infra` directory. The `cdk.json` file specifies the app entry point, which is `src/infra/Launcher.ts`.

## Key Features

- Serverless Architecture: Demonstrates a basic serverless architecture using AWS services.
- Infrastructure as Code (IaC): Uses AWS-CDK to manage infrastructure as code.
- DynamoDB: Creates a DynamoDB table for storing data.
- Lambda Function: Defines a Node.js Lambda function that interacts with the DynamoDB table.
- API Gateway: Sets up an API Gateway REST API that invokes the Lambda function.

## Getting Started
To get started with this project, make sure you have the following prerequisites:
- AWS CLI installed and configured
- AWS-CDK installed
- Node.js and TypeScript installed
- Clone the repository: git clone git@github.com:yauritux/space-finder-svc.git
- Install dependencies: `npm install`
- Bootstrap the CDK: `cdk bootstrap`
- Deploy the stacks: `cdk deploy`

## Contributing

This project is open to contributions. If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License.
Feel free to modify this draft to fit your specific needs. Good luck with your project!