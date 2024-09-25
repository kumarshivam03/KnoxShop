# E-Commerce Website

KnoxShop is a full-stack e-commerce website project built using **Node.js** for the backend and **React** for the frontend. The project allows users to browse products, add to cart, and complete purchases using Braintree for payment processing.

## Table of Contents

- [Backend](#backend)
- [Frontend](#frontend)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [License](#license)

## Backend

### Features

- REST API built using **Express.js**.
- **MongoDB** is used as the database.
- **JWT Authentication** for user login and registration.
- **Braintree Payment Gateway** integration.
- Form handling with **express-formidable**.
- Secure password storage with **bcrypt**.

### Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Braintree Payment Gateway
- Nodemon for development

### Installation

1. Clone the repository and navigate to the backend folder:

   ```bash
   git clone https://github.com/yourusername/ecommerce.git
   cd ecommerce/backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:

   ```bash
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   BRAINTREE_MERCHANT_ID=your-braintree-merchant-id
   BRAINTREE_PUBLIC_KEY=your-braintree-public-key
   BRAINTREE_PRIVATE_KEY=your-braintree-private-key
   ```

4. Start the server:
   ```bash
   npm run server
   ```

### Scripts

- `npm start`: Starts the backend using Node.
- `npm run server`: Starts the backend with Nodemon for auto-reloading.
- `npm run client`: Starts the React frontend from within the backend directory.
- `npm run dev`: Runs both the backend and frontend concurrently in development mode.

---

## Frontend

### Features

- **React.js** for building the user interface.
- **React Router** for navigation.
- **Ant Design** and **React Icons** for the UI components and icons.
- **Axios** for making API calls.
- **Braintree Drop-in** for integrating the payment gateway.

### Technologies Used

- React.js
- Ant Design for UI components
- React Router
- Axios for API calls
- Braintree for payments
- React Toastify for notifications

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd ecommerce/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm run start
   ```

### Scripts

- `npm start`: Starts the frontend development server.
- `npm run build`: Builds the app for production.
- `npm run test`: Launches the test runner.
- `npm run eject`: Ejects the configuration for customization.

---

## Installation

To run the project locally, follow the steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ecommerce.git
    cd ecommerce
    ```

2.  Install both backend and frontend dependencies:

    - For backend:
      ```bash
      cd backend
      npm install
      ```
    - For frontend:
      ```bash
      cd ../frontend
      npm install
      ```

3.  Set up environment variables in the backend `.env` file as explained in the backend section.

4.  Run the backend and frontend separately:
    ```bash
    cd backend
    npm run server
    ```
        ```bash
    cd frontend
    npm run start
    ```
    This will start both the backend server and the React frontend.
    ```

---

## License

This project is licensed under the ISC License.
