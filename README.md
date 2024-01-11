#BASE64 REACT APP FOR AWS LAMBDA EMAIL 

In this project leveraging AWS services, including Lambda, SES, Api Gateway, and React, the objective is to enable the streamlined sending of emails with PDF attachments. The process begins by establishing IAM policies and roles to grant the necessary permissions for SES triggering, followed by the creation of a Lambda function associated with an IAM role and configured to communicate with SES. SES is configured by creating an identity and verifying the target email address. Api Gateway is then set up to serve as the interface between the React app and the Lambda function, allowing for HTTP methods and a POST route to invoke the Lambda function. Deployment involves packaging and uploading the Lambda function code, and integration with the React app is achieved by implementing a button or form to trigger the POST request. The final outcome is a cohesive solution that enables the React app to seamlessly send emails with PDF attachments through the Lambda function.
#   E m a i l - P D F - A T T A C H M E N T  
 