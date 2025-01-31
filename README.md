# **Deployed Link**
[https://reeltor-mauve.vercel.app/](https://reeltor-mauve.vercel.app/)


# **Real Estate Dashboard**

This is a modern, responsive real estate dashboard web application built using **React**, **Vite**, **Tailwind CSS**, **Clerk for Authentication**, and **Framer Motion** for animations. The dashboard provides a variety of features such as viewing properties, tracking sales, managing portfolios, and switching between different sections like Dashboard, Properties, Stats, Cart, Calendar, and Settings.

---

## **Features**

- **Dashboard**: Overview of stats such as total properties, revenue, active listings, and new clients.
- **Properties**: List and search properties with pagination.
- **Portfolio**: Display a portfolio of owned properties.
- **NFTs**: Manage and display NFTs with their values.
- **Sales Overview**: Visualize monthly sales data with charts.
- **Settings**: Manage user settings, including dark mode toggle.
- **Calendar**: Manage events and bookings.
- **Authentication**: Use Clerk for secure sign-in/sign-up functionality.

---

## **Technologies Used**

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation, fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Clerk**: Authentication platform for handling user sign-in/sign-up.
- **Framer Motion**: Animation library for smooth transitions and animations.
- **Lucide React**: Library for vector icons like home, settings, etc.

---

## **Prerequisites**

Make sure you have the following software installed on your system:

- **Node.js** (>= 14.x)
- **npm** (or **yarn** as an alternative)

You can check the installed versions using:

```bash
node -v
npm -v
```

---

## **Setup Instructions**

Follow these steps to get the project up and running on your local machine:

### **Install Dependencies**

1. Clone the repository:

```bash
git clone https://github.com/your-username/real-estate-dashboard.git
cd real-estate-dashboard
```

2. Install dependencies using npm or yarn:

```bash
npm install
# OR
yarn install
```

### **Running the Development Server**

To start the development server, use the following command:

```bash
npm run dev
# OR
yarn dev
```

This will launch the development server and you can open your browser to:

```
http://localhost:3000
```

---

## **Environment Variables**

Make sure to set up any required environment variables in a `.env` file:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_cXVhbGl0eS1sb25naG9ybi00My5jbGVyay5hY2NvdW50cy5kZXYk
```


---

## **Authentication**

This app uses **Clerk** for authentication. Clerk provides easy-to-integrate authentication methods with secure sign-up and sign-in flows.

### **Authentication Steps**:

1. Sign up for Clerk at [Clerk.dev](https://clerk.dev/).
2. Create a new application and note your **Frontend API** and **API key**.
3. Add the Clerk keys to your `.env` file.
4. Clerk will handle the authentication flow in the application, including sign-in, sign-up, and user session management.

---

## **Dark Mode**

This app includes a dark mode feature that can be toggled from the sidebar. The dark mode is managed using the `isDarkMode` state, and the layout updates accordingly by applying the `dark` class to the root div. Tailwind CSS's `dark:` utility is used to style components for dark mode.

---
