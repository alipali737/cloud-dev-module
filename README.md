# cloud-dev-module
A repo containing the source code of the summative assessment for year 3 cloud module

This project is designed to be deployed with AWS. The application uses a connection between this repo & AWS Amplify to host the front-end. Amazon API Gateway contains the GET, OPTIONS, and POST methods for `/pets` & `/walkers` endpoints.

The GET & POST methods use a proxy integration to link to AWS Lambda functions that contain the code in [lambda-functions](./lambda-functions/) which interact with a DynamoDB.
