# Multi-Theme Switcher App

This project is a React-based web application developed using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It is built as part of a frontend assessment and demonstrates a theme switcher with three distinct themes. Each theme significantly alters the layout, font, color scheme, and overall user experience.

## Live Deployment

Deployed on Vercel: [View Live App](https://lucky-virani-react-assessment-hipst.vercel.app/)

No login is required to use the app.

## Folder Structure

├── node_modules/
├── public/
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── ProductGrid.tsx
│ │ └── Sidebar.tsx
│ ├── context/
│ │ └── ThemeContext.tsx
│ ├── pages/
│ │ ├── About.tsx
│ │ ├── Contact.tsx
│ │ └── Home.tsx
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ ├── main.tsx
│ └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html


---

## Features

- Three distinct themes:
  - **Theme 1 (Default)**: Light, minimalist layout with sans-serif font
  - **Theme 2**: Dark theme with sidebar and serif font
  - **Theme 3**: Colorful card-based layout with playful font (e.g., Pacifico)
- Theme switching via dropdown in the header
- Theme state managed using React Context API
- Theme persisted in localStorage across reloads
- Responsive design for both mobile and desktop
- Product data fetched from [Fake Store API](https://fakestoreapi.com/products)
- Smooth animations during theme transitions
- Multi-page routing (Home, About, Contact) via React Router
- Type-safe codebase using TypeScript
- No external UI libraries like Material UI or Ant Design used

---

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API
- FakeStore API
- Vercel (for deployment)

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/iluckyvirani/Assignment_Junior_Full_Stack_Developer.git

## Install dependencies

npm install

## Start development server

npm run dev


