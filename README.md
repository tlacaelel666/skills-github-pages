# Unified Spiral-Time Framework

This project is a React-based application that provides an interactive visualization of the Unified Spiral-Time Framework.

## Development

To run this project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Deployment

### Vercel

This project is configured for seamless deployment to Vercel. Simply connect your Git repository to Vercel, and it will automatically build and deploy the application.

### IONOS

To deploy this application to IONOS, follow these steps:

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This command will create a `dist` directory containing the optimized, static files for your application.

2.  **Upload to IONOS:**
    - Connect to your IONOS webspace using an FTP/SFTP client (such as FileZilla).
    - Navigate to the root directory of your website (usually `www` or `htdocs`).
    - Upload all the files and directories from the local `dist` folder to this directory.
