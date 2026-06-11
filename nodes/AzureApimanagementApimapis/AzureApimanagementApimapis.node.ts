import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimapis implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Apimanagement Apimapis',
		name: 'N8nDevAzureApimanagementApimapis',
		icon: { light: 'file:./azure-apimanagement-apimapis.png', dark: 'file:./azure-apimanagement-apimapis.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Use REST APIs to manage Azure API Management entities and operations.',
		defaults: { name: 'Azure Apimanagement Apimapis' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureApimanagementApimapisApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
