# Blog Project

---

## Overview

This project is a backend system for a blogging platform where users can create, update, and delete blogs. The system features secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

---

## Features

### User Roles

- **Admin**:
  - Can block users and delete any blog.
  - Cannot create or update blogs.
- **User**:
  - Can register, log in, and manage their own blogs.
  - Cannot perform admin-specific actions.

### Authentication & Authorization

- **Authentication**: Secure JWT-based authentication.
- **Authorization**: Role-based access control (Admin and User roles).

### Blog Management

- Create, update, and delete blogs (User-specific).
- Public API for viewing blogs with advanced query options:
  - Search by title or content.
  - Sort by fields like `createdAt` or `title`.
  - Filter by author or published status.

---

## Technologies

- **Language**: TypeScript
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Token (JWT)

---

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-server.git
   cd blog-server
   ```

````

2. Install dependencies:
```bash
npm install
````

3. Set up environment variables:

- Create a `.env` file at the root of the project.
- Add the following variables:

```bash
NODE_ENV=development
PORT=5000
DATABASE_URL=<your-mongodb-uri>
JWT_SECRET=<jwt-secret>
BCRYPT_SALT=11
JWT_EXPIRATION=24h
```

4. Start the server:

```bash
npm run start:dev
```

# Models and API Endpoints for Blog Project

---

## Models

### User Model

- **Fields**:
  - `name`: Full name of the user.
  - `email`: Email for authentication.
  - `password`: Securely hashed password.
  - `role`: Either `"admin"` or `"user"`. Default is `"user"`.
  - `isBlocked`: Boolean flag to block a user. Default is `false`.
  - **Timestamps**: Automatically tracks `createdAt` and `updatedAt`.

### Blog Model

- **Fields**:
  - `title`: Title of the blog.
  - `content`: Content of the blog.
  - `author`: Reference to the `User` model.
  - `isPublished`: Boolean flag to indicate publishing status. Default is `true`.
  - **Timestamps**: Automatically tracks `createdAt` and `updatedAt`.

---

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in and generate a JWT token.

### Blog Management

- `POST /api/blogs`: Create a blog (User only).
- `PATCH /api/blogs/:id`: Update a blog (Owner only).
- `DELETE /api/blogs/:id`: Delete a blog (Owner only).
- `GET /api/blogs`: Fetch all blogs (Public API).

### Admin Actions

- `PATCH /api/admin/users/:userId/block`: Block a user.
- `DELETE /api/admin/blogs/:id`: Delete any blog.

---

## Query Parameters for Public API

- `search`: Filter blogs by title or content.
- `sortBy`: Sort by fields (e.g., `createdAt`, `title`).
- `sortOrder`: Sort direction (`asc` or `desc`).
- `filter`: Filter by author or other fields.

---

## Error Handling

### Structured Error Responses

- Consistent format for error messages.
- Includes details, status codes, and stack traces.

### Common Error Types

- Validation errors (e.g., invalid data inputs).
- Authentication and authorization errors.
- Resource not found (e.g., non-existent blog or user).
- Internal server errors.

# Directory Structure

```plaintext
/blog-platform
├── /src
│   ├── /app
│   │   ├── /models
│   │   ├── /controllers
│   │   ├── /middlewares
│   │   ├── /services
│   │   └── /routes
│   ├── /config
│   ├── /utils
│   └── server.ts
├── /tests
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

# Future Enhancements

- Add unit and integration tests.
- Implement rate limiting and request throttling for security.
- Add email notifications for blocked users.

---

**Created by [Mohammad Shuaib]**
