// Configuration file for AI-Powered Content Dashboard
// Update these values as needed

const CONFIG = {
    // OpenRouter API Configuration
    API_KEY: 'YOUR_OPENROUTER_API_KEY_HERE', // Replace with your actual API key
    
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
