# AgroNet-client - Farmer’s Growth & Connection Platform

AgroNet-client is a modern web application that connects farmers, traders, and consumers in one digital space. Unlike traditional e-commerce platforms, it works as a social agro network, allowing users to interact, collaborate, and grow together.

## Live Site

- Client Site: https://agronet-client.netlify.app/
- Server Site:https://agronet-server.vercel.app/

## Features

- **Post and Browse Crops:** Users can post what they are growing or selling and browse others’ crop posts.
- **Interest Requests:** Non-owners can send interest requests for crops, and owners can manage received requests.
- **Authentication:** Register/Login with email/password or Google account.
- **CRUD Operations:** Users can create, edit, and delete their crop posts.
- **Private Routes & Profile:** Secure pages like Add Crop, My Posts, My Interests, and Profile persist on reload.
- **Responsive UI:** Works smoothly on desktop, tablet, and mobile devices.
- **Interactive Home Page:** Hero slider, latest crop posts, “How it works” section, news/blogs, and extra sections.
- **Real-time Updates:** Actions like accepting interests, editing posts, and search filters update instantly on UI.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **Hosting:** Netlify (client) & Vercel (server)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
