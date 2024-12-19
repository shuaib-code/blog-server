const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blogging Platform Server Showcase</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Roboto Slab', serif;
    }
  </style>
</head>
<body class="bg-gray-100 text-gray-800">

  <!-- Main Container -->
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">

      <!-- Header -->
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-600">Blogging Platform Server</h1>
        <p class="mt-2 text-lg text-gray-600">Explore the Backend API and User Roles</p>
      </header>

      <!-- Features Overview -->
      <section class="space-y-8">
        
        <!-- Server Overview Section -->
        <div class="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 class="text-2xl font-semibold text-blue-500">Server Features</h2>
          <ul class="list-disc pl-6">
            <li><strong>User Authentication:</strong> Secure login and registration with JWT token generation.</li>
            <li><strong>Role-Based Access:</strong> Admin and User roles with different permissions.</li>
            <li><strong>CRUD Operations:</strong> Users can create, update, and delete their own blogs.</li>
            <li><strong>Public API:</strong> Fetch blogs with search, sort, and filter functionalities.</li>
            <li><strong>Admin Control:</strong> Admin can manage users and delete any blog.</li>
          </ul>
        </div>

        <!-- User Roles Section -->
        <div class="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 class="text-2xl font-semibold text-blue-500">User Roles</h2>
          <p><strong>Admin:</strong> Has full control over users and blogs. Can block users, delete any blog, but cannot edit blog content.</p>
          <p><strong>User:</strong> Can create, edit, and delete their own blogs. Cannot perform admin actions.</p>
        </div>

        <!-- API Showcase Section -->
        <div class="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 class="text-2xl font-semibold text-blue-500">API Showcase</h2>
          <p class="text-lg text-gray-600">Below are the API routes for user and blog management, showcasing the full functionality of the backend.</p>

          <!-- Authentication API -->
          <div class="mt-6">
            <h3 class="text-xl font-semibold text-blue-400">1. Authentication</h3>
            <div class="bg-white p-4 rounded-md shadow-sm mt-2">
              <p><strong>1.1 Register User</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">POST /api/auth/register</pre>
              <p><strong>Request Body:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}</pre>
              <p><strong>Response:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "success": true,
  "message": "User registered successfully",
  "statusCode": 201,
  "data": {
    "_id": "string",
    "name": "string",
    "email": "string"
  }
}</pre>
            </div>

            <div class="bg-white p-4 rounded-md shadow-sm mt-6">
              <p><strong>1.2 Login User</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">POST /api/auth/login</pre>
              <p><strong>Request Body:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "email": "john@example.com",
  "password": "securepassword"
}</pre>
              <p><strong>Response:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "success": true,
  "message": "Login successful",
  "statusCode": 200,
  "data": {
    "token": "string"
  }
}</pre>
            </div>
          </div>

          <!-- Blog Management API -->
          <div class="mt-6">
            <h3 class="text-xl font-semibold text-blue-400">2. Blog Management</h3>
            <div class="bg-white p-4 rounded-md shadow-sm mt-2">
              <p><strong>2.1 Create Blog</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">POST /api/blogs</pre>
              <p><strong>Request Header:</strong> Authorization: Bearer <token></p>
              <p><strong>Request Body:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}</pre>
              <p><strong>Response:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "success": true,
  "message": "Blog created successfully",
  "statusCode": 201,
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": { "details" }
  }
}</pre>
            </div>

            <div class="bg-white p-4 rounded-md shadow-sm mt-6">
              <p><strong>2.2 Update Blog</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">PATCH /api/blogs/:id</pre>
              <p><strong>Request Header:</strong> Authorization: Bearer <token></p>
              <p><strong>Request Body:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "title": "Updated Blog Title",
  "content": "Updated content."
}</pre>
              <p><strong>Response:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "success": true,
  "message": "Blog updated successfully",
  "statusCode": 200,
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": { "details" }
  }
}</pre>
            </div>
          </div>

          <!-- Admin Actions API -->
          <div class="mt-6">
            <h3 class="text-xl font-semibold text-blue-400">3. Admin Actions</h3>
            <div class="bg-white p-4 rounded-md shadow-sm mt-2">
              <p><strong>3.1 Block User</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">PATCH /api/admin/users/:userId/block</pre>
              <p><strong>Request Header:</strong> Authorization: Bearer <admin_token></p>
              <p><strong>Response:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "success": true,
  "message": "User blocked successfully",
  "statusCode": 200
}</pre>
            </div>

            <div class="bg-white p-4 rounded-md shadow-sm mt-6">
              <p><strong>3.2 Delete Blog</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">DELETE /api/admin/blogs/:id</pre>
              <p><strong>Request Header:</strong> Authorization: Bearer <admin_token></p>
              <p><strong>Response:</strong></p>
              <pre class="bg-gray-100 p-4 rounded-md">{
  "success": true,
  "message": "Blog deleted successfully",
  "statusCode": 200
}</pre>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>

</body>
</html>


`;

export default homePage;
