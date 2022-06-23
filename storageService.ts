import { BlobServiceClient } from "@azure/storage-blob";

const connectionString = process.env.BLOB_CONNECTION_STRING;

export default BlobServiceClient.fromConnectionString(connectionString!);
