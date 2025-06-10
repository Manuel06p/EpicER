# 🍽️ EpicER

**EpicER** is a full-stack Kotlin web application designed to manage and share recipes in a structured, scalable, and user-friendly way. The platform allows users to create, view, and organize recipes—each enriched with ingredients, steps, sections, and images. It is built entirely with Kotlin using modern technologies like **Ktor**, **Exposed**, and **KVision**, with a strong emphasis on type safety, modularity, and maintainability.

---

## ✨ Features

- 🔐 **Authentication & Authorization**
  - JWT-based login system
  - Role-based access (admin, maintainer, user)
- 🧑‍🍳 **Recipe Management**
  - Create and edit recipes with portions, sections, and steps
  - Add ingredients to both the recipe and individual steps
  - Upload and associate images to recipes and steps
- 🧾 **Ingredients and Units System**
  - Reusable ingredients and measurement units
  - Unit conversion support with reference units
- 🧠 **Reactive Frontend**
  - Built with KVision for a reactive, component-based UI
  - Supports live updates without reloading the page
- 🌐 **RESTful API Backend**
  - Built with Ktor and Exposed (SQL DSL)
  - Secure, robust, and modular architecture
- 📦 **Shared DTOs**
  - Data consistency between frontend and backend using shared Kotlin Multiplatform DTOs

---

## ⚙️ Technologies Used

| Layer     | Technology                                               |
|-----------|----------------------------------------------------------|
| Frontend  | [KVision](https://github.com/rjaros/kvision)            |
| Backend   | [Ktor](https://ktor.io/) + [Exposed](https://github.com/JetBrains/Exposed) |
| Database  | MariaDB                                                  |
| Auth      | JWT (via Ktor plugin)                                    |
| Language  | Kotlin (Multiplatform support for shared code)           |

---

## 🚀 Getting Started

> **Note:** These instructions assume you are using IntelliJ IDEA and have MariaDB running.

### Backend

```bash
cd backend
./gradlew run
```

### Frontend
```bash
cd frontend
./gradlew kobwebRun
```

### Database
- The application uses MariaDB.
- Database tables are created automatically in Ktor.
- A default admin user is auto-generated if none is present.

---

## 📁 Project Structure
```bash
EpicER/
│
├── backend/              → Ktor + Exposed + Authentication
├── frontend/             → KVision components, forms, views
├── common/               → Shared DTOs across backend/frontend
```

---

## 📸 Screenshots
![all_recipes_page](https://github.com/user-attachments/assets/ee967957-c1b0-4b1d-9e94-b48b5ab5faf3)

![ingredients_in_recipe_page](https://github.com/user-attachments/assets/41335b22-b0b3-487b-9b35-fd386d78a9ce)

![steps_in_recipe_page](https://github.com/user-attachments/assets/6fff7f98-758a-45a2-9fcf-9fb2fdd0e8d2)

![ingredients_page](https://github.com/user-attachments/assets/660deffe-4618-46c1-9a0e-b67520637203)

![units_page](https://github.com/user-attachments/assets/1fa2a3ee-1c64-4a18-a1df-5faf776d48cb)

![edit_ingredients_in_recipe_page](https://github.com/user-attachments/assets/b7342c61-9b91-4b14-afdd-8f06a524017a)

---

## 🤔 Why Kotlin Everywhere?
Using Kotlin across frontend and backend:

- Ensures type safety
- Minimizes bugs thanks to shared data models
- Improves productivity with a unified tech stack
