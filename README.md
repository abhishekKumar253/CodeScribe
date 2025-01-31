<h1 align="center">✨ CodeScribe - SaaS Code Editor - Next.js 15 ✨</h1>

Welcome to **CodeScribe**, a **SaaS Code Editor** that is cloud-based and real-time, built with Next.js 15! CodeScribe provides a modern and intuitive platform for developers to write, share, and collaborate on code seamlessly. With features designed to enhance the coding experience, it ensures smooth collaboration and offers a customizable interface.

## 🚀 Highlights

### **Tech Stack:**  
- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS  
- **Backend:** Convex (serverless database & functions)  
- **Authentication:** Clerk  
- **Payments:** Lemon Squeezy (for subscription-based plans)  
- **State Management:** Zustand  
- **Webhooks & Integrations:** Clerk Webhooks, Lemon Squeezy Webhooks  
- **Deployment:** Vercel  
- **Code Editor Features:** Monaco Editor (VSCode-like experience)  

### **Core Features:**
- **🖥️ Online IDE:**  
  - Supports multiple programming languages (10 languages to start with).  
- **🎨 Customizable Themes:**  
  - Offers 5 VSCode-like themes to personalize the editor.  
- **⚡ Smart Output Handling:**  
  - Displays clear **Success** and **Error** messages for better output visualization.  
- **💲 Flexible Pricing Plans:**  
  - Free and Pro plans available based on user needs.  
- **📂 Code Sharing System:**  
  - Share and collaborate on code snippets with the community.  
- **🔎 Advanced Search & Filters:**  
  - Powerful search functionality with filtering options.  
- **👤 Profile Page:**  
  - Users can view and manage their saved code snippets and execution history.  
- **📊 Statistics Dashboard:**  
  - Provides insights into usage patterns and project statistics.  
- **🔠 Font Size Controls:**  
  - Adjust font size for better readability.  
- **🔗 Webhook Integration Support:**  
  - Enables webhook integration for extending functionalities.  

## 🔧 Setup `.env` File

Make sure to configure your environment variables by creating an `.env` file in the root directory with the following values:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
CONVEX_DEPLOYMENT=your_convex_deployment_id_here
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret_here
LEMON_SQUEEZY_WEBHOOK_SECRET=your_lemon_squeezy_webhook_secret_here
