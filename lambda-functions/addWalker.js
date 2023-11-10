import crypto from 'crypto';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const walkerId = toUrlString(crypto.randomBytes(16));
    console.log('Recieved event (', walkerId, '): ', event);

    const requestBody = JSON.parse(event.body);

    await ddbDocClient.send(
        new PutCommand({
        TableName: 'walkers',
        Item: {
            walker_id: walkerId,
            walker_name: requestBody.WalkerName,
            walker_number: requestBody.WalkerNumber,
            walker_email: requestBody.WalkerEmail,
            walker_street: requestBody.WalkerStreet,
            walker_city: requestBody.WalkerCity,
            walker_county: requestBody.WalkerCounty,
            walker_postcode: requestBody.WalkerPostcode,
        },
    }));

    const response = {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({
            WalkerId: walkerId,
        }),
    };
    return response;
};

function toUrlString(buffer) {
    return buffer.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}