# EatsPilot MVP Plan

## 🎯 Product Vision

EatsPilot is a personal delivery strategy engine that helps drivers decide whether an order is worth leaving home for.

Core idea:

> Only leave home for high-quality orders.

---

## 🧱 MVP Scope (What we will build)

- User registration with admin approval
- User authentication
- Admin user management
- Order CRUD
- Home Radius Strategy scoring engine
- Go / Maybe / Reject decision system
- User dashboard (core insights)
- Basic analytics
- AI weekly summary (OpenAI)

---

## 🚫 Out of Scope (for MVP)

- React Native app
- MCP server
- Telegram bot
- Real-time tracking
- Automated order ingestion (OCR / screenshots)
- Advanced maps / geo clustering

---

# 🧩 PHASE 0: Project Foundation

## Goal:

Set up monorepo, dev environment, and base architecture.

## Tasks:

- [ ] Initialize GitHub repo
- [ ] Setup pnpm workspace
- [ ] Create monorepo structure:
  - apps/web
  - apps/api
  - packages/shared
  - packages/scoring-engine
- [ ] Setup base TypeScript config
- [ ] Setup ESLint + Prettier
- [ ] Create README.md
- [ ] Create GitHub Project board
- [ ] Setup GitHub Wiki structure

---

# 🐳 PHASE 1: Database & Backend Foundation

## Goal:

Get backend + database running locally.

## Tasks:

- [ ] Create docker-compose for PostgreSQL
- [ ] Run PostgreSQL container
- [ ] Initialize NestJS app (apps/api)
- [ ] Install Prisma
- [ ] Setup Prisma schema
- [ ] Create initial models:
  - User
  - Order
- [ ] Run Prisma migration
- [ ] Connect NestJS to Prisma
- [ ] Create basic health check endpoint

---

# 🔐 PHASE 2: Auth + User System

## Goal:

Implement authentication and user lifecycle.

## Tasks:

- [ ] Create User model:
  - role (ADMIN / USER)
  - status (PENDING / ACTIVE / REJECTED / DISABLED)
- [ ] Implement password hashing (bcrypt)
- [ ] Implement JWT auth
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] GET /auth/me
- [ ] Prevent login if user status != ACTIVE
- [ ] Create seed script for Admin user
- [ ] Add role-based guard (Admin vs User)

---

# 🛡️ PHASE 3: Admin Backend API

## Goal

Build backend APIs for admin user management.

## Tasks

- [ ] GET /admin/users
- [ ] GET /admin/users/:id
- [ ] PATCH /admin/users/:id/approve
- [ ] PATCH /admin/users/:id/reject
- [ ] PATCH /admin/users/:id/disable
- [ ] Protect all admin routes with ADMIN role guard
- [ ] Prevent admin registration from public API

---

# 📧 PHASE 4: Email Notification

## Goal:

Notify user after admin approval.

## Tasks:

- [ ] Setup email service (SendGrid or SES)
- [ ] Create email module in NestJS
- [ ] Send email on:
  - user approved
  - user rejected (optional)
- [ ] Email template:
  - Approval success
- [ ] Test email delivery

---

# 📦 PHASE 5: Order System (Core Data)

## Goal:

Users can record delivery orders.

## Tasks:

- [ ] Create Order model:
  - distances
  - duration
  - earnings
  - tip
  - destination type
- [ ] POST /orders
- [ ] GET /orders
- [ ] GET /orders/:id
- [ ] PATCH /orders/:id
- [ ] DELETE /orders/:id
- [ ] Link orders to user
- [ ] Validate input data

---

# 🧠 PHASE 6: Scoring Engine (CORE FEATURE)

## Goal:

Implement Home Radius Strategy scoring.

## Tasks:

- [ ] Create package: packages/scoring-engine
- [ ] Implement:
  - calculateOrderScore()
  - getOrderDecision()
- [ ] Create shared types in packages/shared
- [ ] Integrate scoring engine into backend
- [ ] Save score + decision in Order
- [ ] Unit test scoring logic

---

# 🖥️ PHASE 7: Web Frontend MVP

## Goal

Build the complete MVP frontend experience in `apps/web`, including public auth pages, user dashboard, and admin dashboard.

This phase connects the backend MVP features into a usable product flow:

User registers → waits for approval → admin approves → user logs in → user creates orders → system shows score and decision.

---

## Scope

This phase includes:

- Public auth pages
- User-facing dashboard
- Admin dashboard
- Protected routes
- Role-based navigation
- Order management UI
- Basic analytics display
- Clean MVP styling

---

## Routes

### Public Routes

- [ ] `/login`
- [ ] `/register`
- [ ] `/pending-approval`
- [ ] `/unauthorized`

### User Routes

- [ ] `/user/dashboard`
- [ ] `/user/orders`
- [ ] `/user/orders/new`
- [ ] `/user/orders/:id`
- [ ] `/user/analytics`
- [ ] `/user/strategy`

### Admin Routes

- [ ] `/admin/users`
- [ ] `/admin/users/:id`
- [ ] `/admin/data-management`

---

## Tasks

### Frontend Project Setup

- [ ] Setup React + Vite in `apps/web`
- [ ] Setup React Router
- [ ] Setup API client
- [ ] Setup auth state management
- [ ] Setup protected route component
- [ ] Setup role-based route guard
- [ ] Setup basic layout system

---

### Auth UI

- [ ] Build Login page
- [ ] Build Register page
- [ ] Build Pending Approval page
- [ ] Build Unauthorized page
- [ ] After login, redirect by role:
  - ADMIN → `/admin/users`
  - USER → `/user/dashboard`
- [ ] Register only creates normal USER account
- [ ] Admin registration is not allowed

---

### User Dashboard UI

- [ ] Build user dashboard layout
- [ ] Show key summary cards:
  - total earnings
  - order count
  - average score
  - average payout
  - best time window
- [ ] Show recent orders
- [ ] Show latest GO / MAYBE / REJECT results
- [ ] Show simple strategy insight section

---

### Order UI

- [ ] Build Order List page
- [ ] Build Create Order form
- [ ] Build Order Detail page
- [ ] Build Edit Order flow
- [ ] Build Delete Order action
- [ ] Display score and decision:
  - GO
  - MAYBE
  - REJECT
- [ ] Display:
  - payout
  - miles
  - estimated time
  - tip
  - destination type
  - order type

---

### Admin Dashboard UI

- [ ] Build Admin Users page
- [ ] Display user table:
  - name
  - email
  - role
  - status
  - created date
- [ ] Add approve user button
- [ ] Add reject user button
- [ ] Add disable user button
- [ ] Add user detail page
- [ ] Show user order count and basic data
- [ ] Admin can manage users, but cannot register new admin users from UI

---

### Basic Styling

- [ ] Create clean MVP layout
- [ ] Add sidebar/navigation
- [ ] Add dashboard cards
- [ ] Add table styles
- [ ] Add form styles
- [ ] Add loading states
- [ ] Add error messages
- [ ] Add empty states

---

## Verification

This phase is complete when:

- A new user can register
- The user sees pending approval state
- Admin can log in
- Admin can approve the user
- Approved user can log in
- User can create an order
- User can see score and GO / MAYBE / REJECT decision
- User dashboard shows basic metrics
- Admin dashboard can manage users

---

# 📊 PHASE 8: Analytics

## Goal:

Provide simple insights.

## Tasks:

- [ ] GET /analytics/dashboard
- [ ] Compute:
  - avg earnings
  - avg score
  - best time window
- [ ] Show analytics on dashboard
- [ ] Add simple charts (optional)

---

# 🤖 PHASE 9: AI Weekly Summary

## Goal:

Add OpenAI-powered insights.

## Tasks:

- [ ] Create AI module in backend
- [ ] Aggregate weekly data
- [ ] Call OpenAI API
- [ ] Generate summary:
  - best time window
  - best restaurant
  - strategy suggestions
- [ ] POST /ai/weekly-summary
- [ ] Display summary in UI

---

# 🚀 PHASE 10: Deployment (MVP Launch)

## Goal:

Deploy working demo.

## Tasks:

- [ ] Setup environment variables
- [ ] Deploy backend (AWS / Render / App Runner)
- [ ] Deploy frontend (Vercel / Amplify)
- [ ] Connect to MongoDB Atlas / RDS (Postgres)
- [ ] Test production flow:
  - register → approve → login → create order → see score
- [ ] Fix production bugs

---

# 🧭 PHASE 11: Polish (Optional but Recommended)

## Tasks:

- [ ] Improve UI design
- [ ] Add loading states
- [ ] Add error handling
- [ ] Add empty states
- [ ] Improve dashboard layout
- [ ] Add basic logging

---

# 🧠 Future Phases (Not MVP)

## Phase 12: Telegram Bot

## Phase 13: MCP Server

## Phase 14: Screenshot OCR Entry

## Phase 15: Advanced Geo Analytics

## Phase 16: React Native App

---

## Future Phase: AI-Assisted Strategy Tuning

### Goal

Use AI weekly summaries and historical order data to improve each user's deterministic scoring profile over time.

The goal is not to let AI directly make real-time delivery decisions. Instead, AI works as a strategy coach that analyzes historical performance and recommends adjustments to the user's scoring weights, thresholds, and preferences.

This feature upgrade the project into **personalized courier strategy operating system**

### Why

Each courier has a unique decision scope:

- Some optimize for hourly rate
- Some optimize for low mileage
- Some avoid grocery orders
- Some only work during lunch or after work
- Some only want one short order per day
- Some prioritize lifestyle balance over maximum earnings

Therefore, the scoring engine should become personalized over time.

### Tasks

- [ ] Create UserStrategyProfile model
- [ ] Store scoring weights and thresholds per user
- [ ] Update quickDecision() to accept UserStrategyProfile
- [ ] Track decision results and accepted/rejected orders
- [ ] Add weekly strategy analysis
- [ ] Generate AI tuning suggestions
- [ ] Display suggested changes in user dashboard
- [ ] Allow user to accept or reject suggested tuning
- [ ] Save strategy version history
- [ ] Compare performance before and after tuning

### Example AI Suggestion

```json
{
  "field": "orderTypeWeights.grocery",
  "currentValue": -10,
  "suggestedValue": -15,
  "reason": "Your grocery orders took significantly longer than estimated this week, reducing your actual hourly rate."
}

# 🏁 MVP Definition of Done

- User can register
- Admin approves user
- User receives email
- User logs in
- User creates orders
- System calculates score
- User sees Go / Maybe / Reject
- Dashboard shows insights
- AI generates weekly summary
- App is deployed and accessible via URL
```

# Updated MVP Direction

## Key Product Decision

EatsPilot will prioritize:

1. Web App MVP
2. Backend scoring engine
3. Telegram Quick Decision Mode
4. AI Weekly Summary
5. Deployment
6. MCP Server later

---

# Telegram Quick Decision Mode

## Goal

Allow the user to quickly evaluate an order during the short Uber Eats popup decision window.

## User Input Format

```txt
orderType,payout,miles,estimatedMinutes
```
