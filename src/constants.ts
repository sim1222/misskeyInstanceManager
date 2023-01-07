const constants = {
	// API
	notionApiKey: process.env.NOTION_API_KEY || '',
	notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
	misskeyApiKey: process.env.MISSKEY_API_KEY || '',
	// URL
	targetInstanceUrl: process.env.TARGET_INSTANCE_URL || '',
};

export default constants;
