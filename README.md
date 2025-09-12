# GigPlanner

A full-stack application for planning and discovering gigs, featuring a Next.js frontend and Python backend.

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at http://localhost:3000

### Backend (Python FastAPI) - TBD
```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
The backend will be available at http://localhost:8000

## Features
- **Frontend**: 
  - Gig search and discovery
  - Artist search functionality
  - Modern UI with dark/light mode
  - Built with Next.js, TypeScript, and Tailwind CSS

- **Backend** (Planned):
  - RESTful API with FastAPI
  - Ticketmaster API integration

## Development
Run both applications simultaneously for full-stack development:

1. **Terminal 1** (Frontend): `cd frontend && npm run dev`
2. **Terminal 2** (Backend): `cd backend && uvicorn app.main:app --reload`
