import axios from "axios";

export const smsSent = async (templateInfo: any) => {
    const { url, ...config } = templateInfo; 
    try {
        const response = await axios.post(url, {
            phoneNo: config.phoneNo, 
            templateName: config.templateName,
            orderId: config.orderId, 
            awbNo: config.awbNo,
        }, {
            headers: {
                'Content-Type': 'application/json', 
                ...config.headers 
            }
        });
        return response.data;  
    } catch (error) {
        console.error(`Error sending SMS: ${error.message}`);
        throw new Error(`Failed to send SMS: ${error.message}`);
    }
};
