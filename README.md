## BASE64 REACT APP FOR AWS LAMBDA EMAIL

### Overview
This project integrates several AWS services including Lambda, SES, and API Gateway with a React frontend to facilitate the sending of emails with PDF attachments. The system architecture is designed to ensure secure and scalable email dispatching directly from a React application.

### Prerequisites
- AWS Account
- Node.js and npm installed
- Basic knowledge of React, AWS Lambda, AWS SES, and AWS API Gateway

### Architecture
1. **IAM Policies and Roles**: Set up necessary permissions for AWS SES to trigger emails.
2. **AWS Lambda**: Create and configure a Lambda function to handle email sending logic.
3. **AWS SES**: Configure Simple Email Service to manage email sending.
4. **API Gateway**: Establish an API Gateway to act as a bridge between the React app and the Lambda function.

### Step-by-Step Setup

#### Step 1: Configuring IAM
- Create an IAM role with policies that allow Lambda to invoke SES services.

#### Step 2: Setting Up AWS Lambda
- Develop a Lambda function in Node.js that uses SES to send emails.
- Attach the previously created IAM role to this Lambda function.

#### Step 3: Configuring AWS SES
- Verify an email address or domain to send emails from.
- Set up the email receiving settings.

#### Step 4: Integrating with API Gateway
- Create a new API using AWS API Gateway.
- Set up a POST method that triggers the Lambda function.

#### Step 5: Deploying the Lambda Function
- Package your Lambda function code.
- Deploy it to the AWS Lambda service.

#### Step 6: React Application Integration
- Create a React application or use an existing one.
- Implement a form or button that makes a POST request to the API Gateway URL, triggering the Lambda function to send an email.

### Conclusion
By following these steps, you will have a fully functional system capable of sending emails with PDF attachments from a React application using AWS Lambda and SES.

### Troubleshooting
- Ensure that all AWS services are in the same region.
- Check IAM permissions if the Lambda function fails to trigger SES.
- Verify that the API Gateway is correctly linked to the Lambda function and that the POST method is set up correctly.


