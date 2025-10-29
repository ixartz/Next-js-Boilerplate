# 🧠 Product Requirements Document (PRD)
## Product Name: **PC Wrapper**

---

## 1. Product Overview

**PC Wrapper** is a full-stack SaaS platform built on top of the **Promptchan API**, enabling AI-powered **image**, **video**, and **chat** generation through a seamless user interface.

The app abstracts all complexity from the underlying Promptchan API — users never interact with Promptchan directly. Instead, PC Wrapper provides a secure, branded, and highly efficient layer that delivers AI generation as a product.

It functions as an **AI content generation and management system**, integrating authentication, credit-based billing, analytics, and media storage into one cohesive ecosystem.

---

## 2. Product Vision

PC Wrapper’s vision is to **make AI generation accessible, scalable, and market-ready**.
It empowers creators, developers, and businesses to produce visual and conversational AI content through a unified platform — without worrying about model access, scaling, or infrastructure.

---

## 3. Goals

- Build a **production-grade AI generation platform** leveraging Promptchan API securely.
- Offer a **credit-based economy** for usage tracking and monetization.
- Maintain **<200ms backend latency** and **99.9% uptime**.
- Deliver an elegant, **Next.js-powered frontend** for users to create, view, and manage generations.
- Implement a **modular backend** that supports new AI providers in the future.
- Provide detailed **analytics dashboards** and real-time insights.
- Keep **Promptchan keys and logic entirely backend-side**, invisible to users.

---

## 4. Target Users

| User Type | Description | Key Needs |
|------------|--------------|-----------|
| **Creators & Designers** | Generate AI images and videos easily | Simplicity, speed, quality |
| **Marketers** | Create AI visuals for ads or social content | Brand control, batch generation |
| **Developers / Agencies** | Integrate AI workflows into products | Secure API abstraction, credit control |
| **Enterprises** | Internal AI generation tools | Usage analytics, governance |
| **NSFW Content Creators** | Create and manage adult AI visuals privately | Security, unlimited creativity |

---

## 5. Core Product Features

### 5.1 AI Image Generation
- Input: prompt, style, emotion, resolution, quality tier (Ultra / Extreme / Max)
- Output: base64 image → uploaded to Cloudflare R2
- Metadata saved: prompt text, seed, size, quality, time, cost
- Credit deducted upon generation

### 5.2 AI Video Generation
- Asynchronous process using Promptchan `/video_v2` endpoints
- Backend submits job → stores `request_id` → background worker polls job status
- On completion: video uploaded to R2 and linked to user
- Retries failed jobs up to 3 times
- Status tracking (Queued → Processing → Completed / Failed)

### 5.3 AI Chat Companion
- Conversational AI agent powered by Promptchan `/chat`
- Context-aware, multi-turn responses
- Supports customizable personalities, tone, and NSFW filters
- Chat logs saved per session

### 5.4 Credit System
- **1 Credit = 1 Gem equivalent** (matches Promptchan pricing)
- **10 free credits** awarded on user signup
- Deduct credits for each generation (1 credit per image/chat, variable for videos)
- Automatic refund on generation failure
- Credit balance tracked in `user_credits` table
- Admin can manually adjust credits via API
- Payment Integration (Phase 3) for credit purchases

### 5.5 User Dashboard
- Generation history with thumbnails, timestamps, and credit costs
- Filters by type (Image / Video / Chat)
- “Re-run prompt” and “Clone settings” functionality
- Personalization: themes, saved prompt presets

### 5.6 Storage & CDN
- Cloudflare R2 as primary object storage
- Secure signed URLs for access (expires after 15 min)
- Optional public preview toggle
- Automatic cleanup for unused assets

### 5.7 Analytics & Insights
- Per-user usage tracking (credits, requests, time spent)
- Performance metrics (avg generation time, success rate)
- Top prompts, engagement heatmaps
- Export to CSV or API

---

## 6. Technical Architecture

### 6.1 System Overview

| Layer | Component | Description |
|--------|------------|-------------|
| **Frontend** | Next.js + TypeScript | React-based SPA with App Router |
| **Backend** | Node.js (Next.js Server Routes) | Handles business logic, credit control, and API integration |
| **Database** | PGlite (dev) + Neon PostgreSQL (prod) | Local dev with PGlite, production with Neon |
| **Queue System** | Manual polling (Phase 1) → BullMQ + Redis (Phase 2) | Async video job management |
| **Storage** | Cloudflare R2 | For image/video assets |
| **Auth** | Clerk | Secure user auth & session management |
| **API Client** | PromptchanClient.ts | Centralized Promptchan API wrapper |
| **File Service** | CloudflareR2Service.ts | Direct R2 integration |
| **Payments (Future)** | Figure Out PG | Credit top-ups & billing |
| **Monitoring** | Sentry + PostHog + Checkly | Errors, user behavior, uptime |
| **Security Layer** | Arcjet | WAF, rate limiting, and abuse protection |

---

## 7. Data Flow

1. User submits prompt from frontend.
2. Backend validates user authentication and credit balance.
3. Backend deducts credits and forwards request to Promptchan API.
4. Promptchan processes request and returns results.
5. Backend uploads result to Cloudflare R2 and stores metadata in database.
6. Frontend retrieves processed content via R2 URLs.
7. Credit usage and analytics data are updated in real-time.
8. For video generation: Job status is polled until completion.

---

## 8. Data Model

| Table | Key Fields | Purpose |
|--------|-------------|----------|
| **user_credits** | id, user_id, credits_balance, total_earned, total_spent, created_at, updated_at | Credit management and tracking |
| **generated_content** | id, user_id, content_type, prompt, style, pose, quality, image_url, metadata, credits_used, created_at | All generated content (images, videos, chats) |
| **video_generation_jobs** | id, user_id, request_id, status, progress, result_url, error_message, created_at, updated_at | Async video job tracking |

---

## 9. Security & Compliance

- All API keys (Promptchan, R2) stored server-side only.
- TLS 1.3 enforced for all data exchanges.
- Passwords encrypted via bcrypt (if non-Clerk fallback).
- Signed URLs for asset access.
- Data encryption at rest for R2 and Neon.
- Rate limiting & anti-abuse filters.
- GDPR-compliant data deletion endpoint.

---

## 10. Performance Goals

| Metric | Target |
|---------|---------|
| API Response (image) | < 200ms |
| API Response (video submit) | < 500ms |
| Queue processing latency | < 5s |
| CDN media load time | < 1s |
| Uptime | 99.9% |
| Scalability | 10,000 concurrent sessions |
| Frontend TTFB | < 1.5s |

---

## 11. Roadmap

| Phase | Deliverables | Status |
|--------|---------------|--------|
| **Phase 1 (MVP)** | Image & Video generation + Auth + PGlite/Neon DB + R2 storage + Chat + Credit system | ✅ COMPLETED |
| **Phase 2** | UI Components + User Dashboard + Analytics | 🔄 IN PROGRESS |
| **Phase 3** | Payments + Admin panel + Queue system (BullMQ + Redis) | 📋 PENDING |
| **Phase 4** | API access for resellers + Scaling + Docs + Beta launch | 📋 PENDING |
| **Phase 5** | Public launch + Marketing site + Continuous improvement | 📋 PENDING |

---

## 12. Risks & Mitigations

| Risk | Mitigation |
|-------|-------------|
| Promptchan downtime | Retry queue + failover provider plan |
| Credit fraud | Transaction logging + anomaly detection |
| R2 latency | Regional CDN edge caching |
| API rate limits | Queue and backoff strategy |
| Legal / NSFW policy | Strict ToS + content moderation toggle |
| User overload | Horizontal scaling on Vercel/Fly + Redis caching |

---

## 13. Success Metrics

- 95% of requests processed successfully
- <1% refund rate on failed jobs
- <2s median image gen turnaround
- <60s median video gen completion
- 10% user-to-paid conversion in 90 days
- 99.9% uptime for API and CDN
- 80+ NPS from beta testers
- <0.5% abuse or fraud rate

---

## 14. Future Enhancements

- White-label reseller API
- Multi-model support (plug in other AI APIs)
- User-submitted LoRA models (premium tier)
- AI workflow builder (chain image → video → chat)
- Auto watermarking and licensing
- Telegram & Discord bot integrations
- In-app prompt marketplace

---

## 15. Appendices

**Glossary**
- **Promptchan API:** Backend AI engine providing raw generation capabilities.
- **PC Wrapper:** SaaS layer that abstracts Promptchan for users, adding security, billing, and usability.
- **Gem / Credit:** Unit of consumption for AI requests.
- **Generation:** Any image, video, or chat session created by a user.

**References**
- Promptchan API OpenAPI spec
- Neon documentation
- Clerk SDK docs
- Cloudflare R2 guide
- BullMQ / Redis queue patterns

---

## 16. Current Implementation Status

### ✅ **Completed Components**

#### **Backend Infrastructure**
- ✅ **Database Schema** - PGlite (dev) + Neon (prod) with DrizzleORM
- ✅ **API Client** - PromptchanClient.ts with full API integration
- ✅ **File Storage** - CloudflareR2Service.ts for asset management
- ✅ **Environment Management** - T3 Env validation for type-safe config

#### **API Routes**
- ✅ **Image Generation** - `/api/generate/image` with credit management
- ✅ **Video Generation** - `/api/generate/video` with async processing
- ✅ **Video Status** - `/api/generate/video/status/[requestId]` for job tracking
- ✅ **AI Chat** - `/api/generate/chat` with character customization
- ✅ **Credit Management** - `/api/credits` for balance tracking

#### **Core Features**
- ✅ **Authentication** - Clerk integration for user management
- ✅ **Credit System** - 10 free credits on signup, usage tracking
- ✅ **Content Storage** - All generated content saved to R2
- ✅ **Error Handling** - Comprehensive logging and error responses

### 🔄 **In Progress**
- 🔄 **UI Components** - Frontend interfaces for generation
- 🔄 **User Dashboard** - Content gallery and management

### 📋 **Next Steps**
- 📋 **Payment Integration** - Credit purchase system
- 📋 **Queue System** - BullMQ + Redis for video processing
- 📋 **Analytics Dashboard** - Usage insights and metrics
- 📋 **Admin Panel** - User and system management

---
