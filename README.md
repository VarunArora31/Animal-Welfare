# Animal Welfare Web Application

A full-stack web application built to help with animal welfare, connecting users with NGOs, veterinary services, and emergency assistance.

## 🚀 Features

- **User Authentication**: Secure signup/login with role-based access (User, NGO Volunteer, Admin)
- **Donation System**: Integrated payment gateway for donations
- **NGO Finder**: Geolocation-based NGO discovery
- **Veterinary Help**: Find nearby veterinary hospitals and doctors
- **AI Emergency Assistant**: OpenAI-powered chat assistant for emergency situations
- **Responsive Design**: Modern UI with dark mode support

## 🛠️ Tech Stack

### Frontend
- **React.js** with **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Query** for data fetching
- **Vite** for build tooling

### Backend & Database
- **Supabase** for:
  - Database (PostgreSQL)
  - Authentication
  - Real-time subscriptions
  - Storage

### External APIs
- **Google Maps API** for location services
- **OpenAI API** for AI emergency assistant
- **Stripe/Razorpay** for payment processing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Google Maps API key
- OpenAI API key
- Stripe/Razorpay account

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Animal-Welfare.git
cd Animal-Welfare
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual API keys and configuration
```

4. Start the development server:
```bash
npm run dev
```

## 🗂️ Project Structure

```
Animal-Welfare/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── types/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── .env.example
└── README.md
```

## 🌐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Maps API
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# OpenAI API (for AI Emergency Assistant)
VITE_OPENAI_API_KEY=your_openai_api_key

# Payment Gateway (Stripe/Razorpay)
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect your GitHub repository
2. Add environment variables
3. Deploy

### Backend (Supabase)
1. Create a new Supabase project
2. Run the migration files
3. Configure RLS policies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@animalwelfare.com or create an issue in the GitHub repository.
