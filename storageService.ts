import { BlobServiceClient } from "@azure/storage-blob";
import { env } from "process";

const connectionString = process.env.BLOB_CONNECTION_STRING;

export default BlobServiceClient.fromConnectionString(connectionString!);
