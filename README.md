<div align="center">

<img src="https://i.ibb.co.com/nsBcVpMN/1.png" alt="Bistro Boss Banner" width="100%" style="border-radius:12px;" />

<br/><br/>

# ✨ Bistro Boss

### The Complete Restaurant Management Platform

**Reservations · Orders · Menu · Staff · Payments · Analytics — all in one place.**

<br/>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-22c55e?style=for-the-badge)](https://bistroboss-c5b6e.web.app/)
[![Server](https://img.shields.io/badge/🚀%20Live%20Server-API-6366f1?style=for-the-badge)](https://bistro-boss-server-phi-two.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

<br/>

[🌐 Live Demo](https://bistroboss-c5b6e.web.app/) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues) · [🤝 Contribute](#contributing)

</div>

---

## 🍽️ What is Bistro Boss?

**Bistro Boss** is a full-featured, production-ready restaurant management system built on the **MERN stack**. It empowers restaurant owners with a centralized platform to handle every operational aspect — from customer reservations to real-time order tracking, staff management, and detailed analytics — all wrapped in a beautiful, responsive UI.

Whether you run a cozy café or a multi-table fine dining establishment, Bistro Boss scales with your needs.

---

## 📸 Screenshots

<table>
  <tr>
    <td align="center" width="50%">
      <img src="https://i.ibb.co.com/nsBcVpMN/1.png" alt="Landing Page" width="100%" style="border-radius:8px;" />
      <br/><strong>🏠 Landing Page</strong>
    </td>
    <td align="center" width="50%">
      <img src="https://i.ibb.co.com/JWPnhkFW/2.png" alt="Menu & Ordering" width="100%" style="border-radius:8px;" />
      <br/><strong>🍕 Menu & Ordering</strong>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="https://i.ibb.co.com/WvZKnJb2/3.png" alt="Customer Dashboard" width="100%" style="border-radius:8px;" />
      <br/><strong>👤 Customer Dashboard</strong>
    </td>
    <td align="center" width="50%">
      <img src="https://i.ibb.co.com/5gm7VY6n/admin.png" alt="Admin Panel" width="100%" style="border-radius:8px;" />
      <br/><strong>⚙️ Admin Control Panel</strong>
    </td>
  </tr>
</table>

---

## ⚡ Features

### 🔐 Authentication & Access Control
- Secure JWT-based login and registration
- Password hashing with **Bcrypt.js**
- Role-based access for **Admin**, **Staff**, and **Customers**
- Protected routes per user role

### 📅 Reservation Management
- Real-time table reservation with time slots and customer details
- Instant updates for better front-of-house coordination
- Admin view of all bookings with status control

### 🧾 Order Management
- Full order lifecycle: **New → Preparing → Ready → Delivered**
- Real-time order status updates via **Socket.IO**
- Order history per customer with itemized details

### 🍔 Menu Management
- Dynamic add, edit, and remove menu items
- Rich image uploads via **Cloudinary**
- Category-based menu organization
- Live preview of menu changes

### 👨‍🍳 Staff Management
- Manage roles, shifts, and schedules
- Track staff performance metrics
- Role-based dashboard access

### 💳 Payments
- Secure online payments powered by **Stripe**
- Refund handling and invoice generation
- Full payment history per order

### 📧 Email Notifications
- Automated emails for reservations, order updates, payment receipts, and promotions via **Nodemailer**

### 📊 Analytics Dashboard
- Visual sales, order, and staff performance charts via **Chart.js / Recharts**
- Revenue tracking and trend analysis
- Exportable reports for decision-making

### 🌐 Multi-Language Support
- Localized UI with **react-i18next**
- Easily extensible for additional languages

### 📱 Mobile-First Design
- Fully responsive across all screen sizes
- Optimized for touch interactions and small viewports

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React + Vite | UI framework with fast HMR |
| Redux | Global state management |
| React Router | Client-side routing |
| TanStack Query | Server state & data fetching |
| Axios | HTTP requests |
| Tailwind CSS + DaisyUI | Styling & component library |
| Framer Motion | Animations & transitions |
| React Hook Form + Formik | Form handling & validation |
| Socket.IO Client | Real-time communication |
| React Toastify | Toast notifications |
| React Icons | Icon library |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server & REST API |
| MongoDB + Mongoose | Database & ODM |
| JWT | Authentication tokens |
| Bcrypt.js | Password hashing |
| Stripe | Payment processing |
| Socket.IO | Real-time order updates |
| Cloudinary + Multer | Image storage & file uploads |
| Nodemailer | Email notifications |
| Redis | Caching & performance |

### Hosting & DevOps
| Layer | Platform |
|---|---|
| Frontend | Vercel / Netlify / Firebase |
| Backend | Vercel / Heroku / AWS |
| Database | MongoDB Atlas |
| Media | Cloudinary |

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 16.x
MongoDB (local or Atlas cloud)
A modern web browser
```

### 1. Clone the Repository

```bash
# Clone client
git clone <client-repo-url>
cd client

# Clone server (separate repo)
git clone <server-repo-url>
cd server
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Start the server:

```bash
npm start
# Server runs at http://localhost:5000
```

### 3. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in `/client`:

```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
```

Start the dev server:

```bash
npm run dev
# Frontend runs at http://localhost:5173
```

---

## 📂 Project Structure

```
bistro-boss/
│
├── client/                         # React frontend (Vite)
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Route-level pages
│   │   │   ├── Home/               # Landing page sections
│   │   │   ├── Menu/               # Menu browsing & ordering
│   │   │   ├── Dashboard/          # Admin & user dashboards
│   │   │   └── Auth/               # Login & registration
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── store/                  # Redux store & slices
│   │   ├── utils/                  # Helper functions
│   │   └── locales/                # i18n translation files
│   └── ...
│
├── server/                         # Node.js + Express backend
│   ├── src/
│   │   ├── routes/                 # API route definitions
│   │   ├── controllers/            # Route handler logic
│   │   ├── models/                 # Mongoose schemas
│   │   ├── middleware/             # Auth, error, upload middleware
│   │   ├── services/               # Business logic layer
│   │   └── utils/                  # Email, token helpers
│   └── ...
│
└── README.md
```

---

## 🔌 API Overview

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |
| `GET` | `/api/menu` | Fetch all menu items |
| `POST` | `/api/orders` | Place a new order |
| `GET` | `/api/orders/:id` | Get order status |
| `POST` | `/api/reservations` | Book a table |
| `GET` | `/api/admin/dashboard` | Admin stats (protected) |
| `POST` | `/api/payments/checkout` | Initiate Stripe payment |

> Full API documentation available at `/api/docs` when running locally.

---

## 🤝 Contributing

Contributions are welcome from developers of all skill levels!

**Steps to contribute:**

```bash
# 1. Fork this repository
# 2. Create your feature branch
git checkout -b feature/your-amazing-feature

# 3. Commit your changes
git commit -m "feat: add your amazing feature"

# 4. Push to your branch
git push origin feature/your-amazing-feature

# 5. Open a Pull Request against main
```

**Areas to contribute:**
- 🌐 New language translations (`/locales`)
- 🐛 Bug fixes — check issues labeled `good first issue`
- 📱 Mobile UI improvements
- 📊 New analytics charts and reports
- 🧪 Unit and integration test coverage
- 📖 Documentation improvements

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a PR.

---

## 🗺️ Roadmap

- [x] JWT Authentication & role-based access
- [x] Menu management with Cloudinary
- [x] Real-time orders with Socket.IO
- [x] Stripe payment integration
- [x] Email notifications
- [x] Admin analytics dashboard
- [x] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Table QR code ordering
- [ ] Kitchen display system (KDS)
- [ ] Loyalty points & rewards
- [ ] WhatsApp order notifications
- [ ] POS integration

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
Free to use, modify, and distribute with attribution.

---

## 📬 Contact

Have questions or want to collaborate?

- 📧 **Email**: [darun15-14188@diu.edu.bd](mailto:darun15-14188@diu.edu.bd)
- 💼 **LinkedIn**: [linkedin.com/in/darunkaras](https://linkedin.com/in/darunkaras)
- 🐛 **Issues**: [GitHub Issues](../../issues)

---

<div align="center">

**Built with ❤️ for the restaurant industry**

⭐ **Star this repo** if Bistro Boss helped or inspired you!

*Bon appétit!* 🍽️

</div>
