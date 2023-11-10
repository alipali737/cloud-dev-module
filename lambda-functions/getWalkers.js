import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
    const command = new ScanCommand({
        TableName: "walkers",
        ProjectionExpression: "walker_name, walker_city",
    });

    const response = await ddbDocClient.send(command);
    const httpResponse = {
        statusCode: response.$metadata['httpStatusCode'],
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            items: response.Items,
        }),
    }
    return httpResponse;
};