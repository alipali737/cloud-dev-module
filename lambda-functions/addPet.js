import crypto from 'crypto';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const petId = toUrlString(crypto.randomBytes(16));
    console.log('Recieved event (', petId, '): ', event);

    const requestBody = JSON.parse(event.body);

    await ddbDocClient.send(
        new PutCommand({
        TableName: 'pets',
        Item: {
            pet_id: petId,
            dog_name: requestBody.DogName,
            dog_gender: requestBody.DogGender,
            dog_breed: requestBody.DogBreed,
            dog_birthday: requestBody.DogBirthday,
            owner_name: requestBody.OwnerName,
            owner_number: requestBody.OwnerNumber,
            owner_email: requestBody.OwnerEmail,
            owner_street: requestBody.OwnerStreet,
            owner_city: requestBody.OwnerCity,
            owner_county: requestBody.OwnerCounty,
            owner_postcode: requestBody.OwnerPostcode,
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
            PetId: petId,
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