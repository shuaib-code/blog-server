const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Documentation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap');
        body {
            font-family: 'Roboto Slab', serif;
        }
        .logo span {
            font-size: 3rem;
            font-weight: 700;
            font-family: 'Roboto Slab', serif;
        }
    </style>
</head>
<body class="bg-gradient-to-b from-[#003566] via-[#001d3d] to-[#000814] text-gray-800">

    <!-- Navbar -->
    <nav class="bg-gradient-to-r from-[#001d3d] to-[#003566] text-white py-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center px-6">
            <h1 class="text-xl font-bold">
                <div class="logo flex gap-2">
                    <span style="color:rgb(4, 69, 130);">B</span>
                    <span style="color: rgb(245, 248, 255);">l</span>
                    <span style="color: #FFC300;">o</span>
                    <span style="color: #FFD60A;">g</span>
                </div>
                <div style="color: rgb(175, 178, 185);" class="mt-1">API Docs</div>
            </h1>
            <ul class="flex gap-6">
                <li><a href="#auth" class="hover:text-[#FFC300]">Authentication</a></li>
                <li><a href="#blogs" class="hover:text-[#FFC300]">Blogs</a></li>
                <li><a href="#admin" class="hover:text-[#FFC300]">Admin</a></li>
                <li><a href="#contact" class="hover:text-[#FFC300]">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-[#FFC300] to-[#FFD60A] py-20 text-center shadow-lg">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-[#001d3d] mb-4">Welcome to the API Documentation</h2>
            <p class="text-lg text-gray-700">Explore and integrate our powerful APIs seamlessly.</p>
        </div>
    </header>

    <!-- Sections -->
    <main class="container mx-auto px-6 py-10 space-y-10">
        <!-- Authentication Section -->
        <section id="auth" class="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-semibold text-[#003566] mb-4">Authentication API</h3>
            <p class="text-gray-600 mb-4">Manage user authentication securely.</p>
            <ul class="space-y-4">
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">POST /api/auth/register</strong>
                    <p class="text-gray-600">Register a new user with the platform.</p>
                </li>
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">POST /api/auth/login</strong>
                    <p class="text-gray-600">Login a user and retrieve a token.</p>
                </li>
            </ul>
        </section>

        <!-- Blogs Section -->
        <section id="blogs" class="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-semibold text-[#003566] mb-4">Blog Management API</h3>
            <p class="text-gray-600 mb-4">Manage blogs with these endpoints.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">POST /api/blogs</strong>
                    <p class="text-gray-600">Create a new blog post.</p>
                </li>
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">PATCH /api/blogs/:id</strong>
                    <p class="text-gray-600">Update an existing blog post.</p>
                </li>
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">DELETE /api/blogs/:id</strong>
                    <p class="text-gray-600">Delete a blog post.</p>
                </li>
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">GET /api/blogs</strong>
                    <p class="text-gray-600">Retrieve all blog posts.</p>
                </li>
            </ul>
        </section>

        <!-- Admin Section -->
        <section id="admin" class="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-semibold text-[#003566] mb-4">Admin Actions API</h3>
            <p class="text-gray-600 mb-4">Perform administrative tasks with these APIs.</p>
            <ul class="space-y-4">
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">PATCH /api/admin/users/:userId/block</strong>
                    <p class="text-gray-600">Block a user account.</p>
                </li>
                <li class="p-4 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-sm hover:shadow-md">
                    <strong class="text-[#001d3d]">DELETE /api/admin/blogs/:id</strong>
                    <p class="text-gray-600">Delete any blog post.</p>
                </li>
            </ul>
        </section>
    </main>

    <!-- Contact Section -->
    <section id="contact" class="bg-gradient-to-r from-[#001d3d] to-[#003566] text-white py-10 text-center">
        <h3 class="text-3xl font-semibold mb-4">Contact Us</h3>
        <p class="text-lg mb-6">Need help? Reach out to our support team.</p>
        <a href="mailto:support@example.com" class="text-[#FFC300] hover:text-[#FFD60A] text-lg">support@example.com</a>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-[#003566] to-[#001d3d] text-white py-6 text-center">
        <p class="text-sm">&copy; 2024 API Docs. All rights reserved.</p>
        <div class="mt-4 flex justify-center gap-6">
            <a href="#" class="hover:text-[#FFD60A]">Facebook</a>
            <a href="#" class="hover:text-[#FFD60A]">Twitter</a>
            <a href="#" class="hover:text-[#FFD60A]">LinkedIn</a>
        </div>
    </footer>
</body>
</html>

`;

export default homePage;
