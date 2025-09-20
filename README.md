# ContentIQ - AI-Powered Competitor Analysis Dashboard

A powerful competitor intelligence platform powered by DeepSeek AI, designed to provide strategic insights and actionable recommendations for outcompeting your rivals.

## 🎯 Overview

ContentIQ is a specialized competitor analysis dashboard that leverages advanced AI technology to deliver comprehensive competitive intelligence. Built with DeepSeek R1 Distill Llama 70B, it provides deep strategic insights, SWOT analysis, and actionable recommendations to help you gain competitive advantage.

## ✨ Key Features

### 🔍 **Comprehensive Competitor Analysis**
- **SWOT Analysis**: Detailed Strengths, Weaknesses, Opportunities, and Threats
- **Strategic Recommendations**: Prioritized action items with impact ratings
- **Competitive Metrics**: Market share, brand strength, innovation scores
- **Focus Areas**: Marketing, Product, Pricing, Branding, or Comprehensive analysis

### 🤖 **AI-Powered Intelligence**
- **DeepSeek R1 Distill Llama 70B**: Advanced AI model for strategic analysis
- **Smart Insights**: Context-aware recommendations based on industry knowledge
- **Real-time Analysis**: Instant competitor intelligence and strategic planning

### 📊 **Interactive Dashboard**
- **Visual SWOT Grid**: Color-coded analysis sections
- **Metric Cards**: Key performance indicators at a glance
- **Strategy Cards**: Priority-based strategic recommendations
- **Export Capabilities**: Download analysis reports and data

### 🎨 **Modern Interface**
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Clean UI**: Focused, distraction-free interface
- **Intuitive Workflow**: Simple form-based competitor analysis
- **Real-time Feedback**: Instant notifications and status updates

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- OpenRouter API account with credits
- Internet connection

### Installation
1. **Download the files**:
   ```
   AI-Powered Content Dashboard/
   ├── AI powered.html    # Main dashboard
   ├── config.js         # Configuration file
   └── README.md         # Documentation
   ```

2. **Configure your API key**:
   - Open `config.js`
   - Replace `API_KEY` with your OpenRouter API key
   - Save the file

3. **Open the dashboard**:
   - Open `AI powered.html` in your browser
   - The dashboard will automatically test your API connection

## ⚙️ Configuration

### API Setup
1. **Get OpenRouter API Key**:
   - Visit [OpenRouter.ai](https://openrouter.ai)
   - Sign up and get your API key
   - Add credits to your account

2. **Update Configuration**:
   ```javascript
   const CONFIG = {
       API_KEY: 'your-openrouter-api-key-here',
       DEFAULT_MODEL: 'deepseek/deepseek-r1-distill-llama-70b',
       MAX_TOKENS: 2000,
       TEMPERATURE: 0.3
   };
   ```

### Configuration Options
- **API_KEY**: Your OpenRouter API key
- **DEFAULT_MODEL**: AI model (DeepSeek R1 Distill Llama 70B)
- **MAX_TOKENS**: Maximum response length (2000)
- **TEMPERATURE**: AI creativity level (0.3 for focused analysis)
- **DEBUG_MODE**: Enable detailed logging (true/false)

## 📖 How to Use

### 1. **Basic Competitor Analysis**
1. Open the dashboard
2. Enter competitor company name
3. Enter your company name
4. Select analysis focus (Marketing, Product, Pricing, Branding, or Comprehensive)
5. Optionally add competitor website URL
6. Add any additional context
7. Click "Analyze Competitor"

### 2. **Understanding Results**
- **Overview**: High-level competitive assessment
- **SWOT Analysis**: Four-quadrant strategic analysis
- **Metrics**: Key performance indicators and ratings
- **Strategies**: Prioritized action recommendations
- **Action Items**: Specific next steps

### 3. **Interactive Features**
- **Export Analysis**: Download results as text file
- **Generate Report**: Create comprehensive reports
- **Schedule Follow-up**: Set reminders for future analysis
- **Compare Another**: Quick switch to analyze different competitors

## 🎯 Analysis Focus Areas

### **Comprehensive Analysis**
- Complete competitive overview
- Full SWOT analysis
- Strategic recommendations
- Key performance metrics

### **Marketing Focus**
- Marketing strategies and campaigns
- Brand positioning and messaging
- Digital presence analysis
- Target audience insights

### **Product Focus**
- Product portfolio comparison
- Feature analysis and differentiation
- Innovation and R&D assessment
- User experience evaluation

### **Pricing Focus**
- Pricing strategies and models
- Value proposition analysis
- Cost structure comparison
- Competitive pricing advantages

### **Branding Focus**
- Brand identity and positioning
- Market perception analysis
- Brand differentiation strategies
- Brand awareness and recognition

## 🔧 Troubleshooting

### Common Issues

#### **API Connection Failed**
- Check your API key in `config.js`
- Verify you have sufficient OpenRouter credits
- Test API connection using the "Test API Connection" button

#### **Analysis Failed**
- Check browser console (F12) for error details
- Verify your API key is valid and has credits
- Try reducing the max tokens in settings

#### **JSON Parse Errors**
- The AI may return non-JSON responses
- Check console logs for raw response details
- The system will automatically try to extract JSON

### Debug Mode
Enable debug mode in `config.js`:
```javascript
DEBUG_MODE: true
```
This will show detailed console logs for troubleshooting.

## 📁 File Structure

```
AI-Powered Content Dashboard/
├── AI powered.html          # Main dashboard application
├── config.js               # Configuration and API settings
└── README.md              # This documentation
```

## 🛠️ Technical Details

### **Technology Stack**
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI Integration**: OpenRouter API
- **AI Model**: DeepSeek R1 Distill Llama 70B
- **Charts**: Chart.js for data visualization
- **Styling**: Custom CSS with modern design principles

### **Browser Support**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### **Performance**
- Lightweight client-side application
- No server requirements
- Fast AI-powered analysis
- Responsive design for all devices

## 📈 Use Cases

### **Business Strategy**
- Competitive intelligence gathering
- Market positioning analysis
- Strategic planning and decision making
- SWOT analysis for business planning

### **Marketing Teams**
- Competitor marketing analysis
- Brand positioning research
- Campaign strategy development
- Market opportunity identification

### **Product Teams**
- Product competitive analysis
- Feature gap identification
- Innovation opportunity spotting
- Product roadmap planning

### **Executive Teams**
- Strategic decision support
- Market intelligence reports
- Competitive threat assessment
- Business opportunity analysis

## 🔒 Privacy & Security

- **Local Processing**: All analysis runs in your browser
- **API Key Security**: Stored locally, never shared
- **No Data Storage**: No competitor data is stored on servers
- **Secure API**: Uses OpenRouter's secure API endpoints

## 📞 Support

### **Getting Help**
1. Check the browser console (F12) for error messages
2. Verify your API key and credits
3. Enable debug mode for detailed logging
4. Review the configuration settings

### **Common Solutions**
- **API Issues**: Check OpenRouter account and credits
- **Analysis Failures**: Verify API key and model availability
- **UI Problems**: Clear browser cache and refresh

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Acknowledgments

- **DeepSeek AI**: For providing the powerful R1 Distill Llama 70B model
- **OpenRouter**: For seamless AI model access
- **Chart.js**: For beautiful data visualizations

---

**ContentIQ AI Dashboard © 2025. Powered by DeepSeek AI MODEL technology.**