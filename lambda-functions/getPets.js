import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
    const command = new ScanCommand({
        TableName: "pets",
        ProjectionExpression: "dog_name, dog_gender, dog_breed, owner_name, owner_city",
    });

    const response = await ddbDocClient.send(command);
    console.log(response.Items);
    return response;
};