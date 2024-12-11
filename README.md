# NKAP - Expense Tracking Solution

NKAP is a user-friendly expense tracking application that allows individuals to track their income, expenses, and overall financial health. Built with simplicity and clarity in mind, NKAP provides a modern interface for managing and controlling your finances.

## Features

- **Track Income & Expenses**: Easily add and track both income and expense transactions.
- **View Balance**: View your current balance with a real-time update of income and expense data.
- **Historical Data**: Access a history of your transactions for better financial insight.
- **Minimalist Design**: A modern and clean UI for a pleasant user experience.
- **Clerk Authentication**: Secure login and user management using Clerk for authentication.

## Technologies

- **Frontend**: Next.js (React)
- **Backend**: Prisma, Node.js, PostgreSQL
- **Authentication**: Clerk (for user authentication)
- **Styling**: Custom CSS for a modern minimalist look
- **Database**: PostgreSQL hosted on Neon.tech

## Getting Started

To run NKAP locally, follow these instructions:

### Prerequisites

- [Node.js](https://nodejs.org/) - Make sure to install Node.js (version >= 14.x).
- [PostgreSQL](https://www.postgresql.org/) - Ensure you have a PostgreSQL database set up.
- [Clerk](https://clerk.dev/) - Create a Clerk account and obtain the API keys.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nkap.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nkap
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root of the project and add the following:

    ```env
    DATABASE_URL="your-database-url-here"
    NEXT_PUBLIC_CLERK_FRONTEND_API="your-clerk-frontend-api"
    CLERK_API_KEY="your-clerk-api-key"
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

6. Open the app in your browser by navigating to:

    ```bash
    http://localhost:3000
    ```

### Database Setup

NKAP uses a PostgreSQL database. To set up the database schema, run:

```bash
npx prisma migrate dev --name init
