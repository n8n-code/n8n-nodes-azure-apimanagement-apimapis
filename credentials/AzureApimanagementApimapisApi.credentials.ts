import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimapisApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimapisApi';

        displayName = 'Azure Apimanagement Apimapis API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimapis/azure-apimanagement-apimapis.png', dark: 'file:../nodes/AzureApimanagementApimapis/azure-apimanagement-apimapis.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimapis API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
