import AWS, { S3 } from 'aws-sdk';
import { fileDelete, fileRead } from './fileHelper';
const s3 = new AWS.S3({
    accessKeyId: process.env.S3KEY,
    secretAccessKey: process.env.S3SECRET,
    region: process.env.S3REGION,
});

export class S3Aws {
    static async uploadFile(fileName: string): Promise<S3.ManagedUpload.SendData | boolean >{
        const fileContent = fileRead(fileName);

        const params:  S3.PutObjectRequest = {
            Bucket: process.env.S3BUCKET!,
            Key: `file-${Date.now()}.png`,
            Body: fileContent
        };
        try {
            const res = await s3.upload(params).promise();
            fileDelete(fileName)
            return res;
        } catch(err) {
            return false;
        }
    }

    static async getUpload(filename: string) {
        const params: S3.GetObjectRequest = {
            Bucket: process.env.S3BUCKET!,
            Key: filename,
        }
        return s3.getObject(params).createReadStream();
    }
}