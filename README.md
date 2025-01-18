<h1 align="center">✨ SaaS Code Editor - Next.js 15 ✨</h1>

Welcome to **SaaS Code Editor**, a cloud-based, modern code editor built with **Next.js 15**! This project allows developers to write, share, and collaborate on code in real-time with a seamless and customizable experience.

## 🚀 Highlights

- **Tech Stack:** 
  - Built with **Next.js 15**, **Convex**, **Clerk**, and **TypeScript** for a powerful, modern web app.
- **Online IDE:** 
  - Supports multiple programming languages (10 languages to start with).
- **Customizable Themes:** 
  - Offers 5 VSCode-like themes to personalize the code editor environment.
- **Smart Output Handling:** 
  - Features clear **Success** and **Error** states for better output visualization.
- **Flexible Pricing Plans:** 
  - Free and Pro plans available, allowing users to choose based on their needs.
- **Code Sharing System:** 
  - A community-driven system for sharing and collaborating on code snippets.
- **Advanced Search & Filters:** 
  - Includes powerful search functionality with advanced filtering options.
- **Personal Profile:** 
  - Tracks execution history and allows users to manage their projects efficiently.
- **Statistics Dashboard:** 
  - Provides insights into usage patterns and project statistics.
- **Font Size Controls:** 
  - Allows users to customize their font size for better readability.
- **Webhook Integration Support:** 
  - Enables webhook integration for extending functionalities.
- **Professional Deployment Walkthrough:** 
  - Easy-to-follow deployment instructions to launch the app.

## 🔧 Setup .env File

Make sure to configure your environment variables by creating an `.env` file in the root directory with the following values:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
CONVEX_DEPLOYMENT=your_convex_deployment_id_here
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret_here
LEMON_SQUEEZY_WEBHOOK_SECRET=your_lemon_squeezy_webhook_secret_here


### Run the app

```shell
npm run dev
```