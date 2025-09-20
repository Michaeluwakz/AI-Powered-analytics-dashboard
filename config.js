// Configuration file for AI-Powered Content Dashboard
// Update these values as needed

const CONFIG = {
    // OpenRouter API Configuration
    API_KEY: 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 // Replace with your actual API key
    
    // Default Model Settings
    DEFAULT_MODEL: 'deepseek/deepseek-r1-distill-llama-70b',
    FALLBACK_MODELS: [], // No fallback models - use DeepSeek only
    
    // API Settings
    MAX_TOKENS: 2000,
    TEMPERATURE: 0.3,
    
    // API Endpoints
    OPENROUTER_API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    
    // CORS Proxy for URL fetching
    CORS_PROXY: 'https://api.allorigins.win/raw?url=',
    
    // App Settings
    APP_NAME: 'ContentIQ',
    VERSION: '1.0.0',
    
    // Debug Settings
    DEBUG_MODE: true,
    ENABLE_CONSOLE_LOGS: true
};

// Export for use in HTML
window.CONFIG = CONFIG;
