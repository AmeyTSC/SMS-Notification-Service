//import SparkPost from 'sparkpost';
import { Injectable } from '@nestjs/common';
import * as SparkPost from 'sparkpost';

@Injectable()
export class emailsparkpost {
    private sparky: SparkPost;
    constructor() {
        const apiKey = "69ee2c20322612adb0929e537c86b97a8037b23a"; 
        if (!apiKey) {
            throw new Error("SPARKPOST_API_KEY environment variable is not set.");
        }
        this.sparky = new SparkPost(apiKey);
    }
    
    async emailsparkpost(config: any) {
        try{
            const response = await this.sparky.transmissions.send(config);
            return response;
        } catch(err) {
            console.error("Error sending email:", err);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Failed to send mail",
                }),
            };
        }
    };
    
}
