# Heuronics Website

A modern full-stack website for **Heuronics**, a company building **ROVs & AUVs for serious underwater work**.  
The project includes a marketing website and a fully functional **Request a Demo** flow with real backend persistence.

---

## 🚀 Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL with Row Level Security)
- **Hosting:** Vercel

---

## ✨ Features

- Responsive landing page and product sections
- Dedicated pages for Products, Industries, Technology, Resources, and About
- Request a Demo form with backend integration
- Secure data storage using Supabase
- Admin visibility through Supabase dashboard

---

## 🧠 Architecture

Browser
↓
Next.js Frontend
↓ fetch()
API Route (/api/demo)
↓
Supabase PostgreSQL Database

yaml
Copy code

- Frontend does not directly access the database
- All writes go through a secure API route
- Database access is controlled using Row Level Security (RLS)

---

## 🛠️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/heuronics-website.git
cd heuronics-website
2. Install dependencies
bash
Copy code
npm install
3. Environment variables
Create a .env.local file in the root directory:

env
Copy code
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
Values can be found in:
Supabase Dashboard → Project Settings → API

4. Run the project
bash
Copy code
npm run dev
Open: http://localhost:3000

🗄️ Database
Table: demo_requests

Stores demo request submissions including:

Contact details

Technical requirements

Timestamp of submission

🔐 Security Notes
Row Level Security (RLS) enabled on Supabase

Public access restricted to insert-only operations

No database credentials exposed on the frontend

☁️ Deployment
The application is deployed using Vercel.

Deployment steps:

Push code to GitHub

Import project into Vercel

Add environment variables

Deploy

📌 Future Improvements
Admin dashboard for managing demo requests

Email notifications on new submissions

Image and document storage using Supabase Storage

Authentication for internal access

👤 Author
Built by Krrish Sehgal










