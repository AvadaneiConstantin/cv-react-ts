# 🏨 Hôven - Proiect Info & Arhitectură

## 📋 Overview Hoven AI

Hôven este o platformă modernă de descoperire hotelieră powered by AI, construită cu Next.js 15, Supabase și Gemini AI. Platforma oferă recomandări personalizate pentru hoteluri europene printr-o interfață conversațional inteligentă.

## AI-powered hotel discovery engine

## 🏗️ Arhitectura Tehnică

### **Stack Tehnologic Principal**

- **Frontend**: Next.js 15.5.14 (App Router)
- **Backend**: Supabase PostgreSQL + API Routes
- **AI**: Google Gemini 2.5 Flash via Vercel AI SDK
- **Styling**: TailwindCSS 3.4.17
- **Deployment**: Netlify cu @netlify/plugin-nextjs
- **Language**: TypeScript (strict mode)

### **Structura Proiectului**

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage - Server Component
│   ├── hotels/             # Hotel listing page
│   ├── ai-finder/          # AI chat interface
│   ├── api/chat/           # AI API endpoint
│   └── layout.tsx          # Root layout
├── components/            # Reusable UI components
│   ├── hotels/            # Hotel-specific components
│   ├── Navbar.tsx         # Navigation
│   └── Fullscreen.tsx     # Image viewer
├── lib/                  # Utilities & configurations
│   ├── supabase.ts       # Database operations
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
│   └── useDebounce.ts    # Debounce utility
├── types/               # TypeScript definitions
│   └── hotel.ts         # Hotel interface
└── public/             # Static assets
    ├── hotels/          # Hotel images (47 files)
    └── img/            # General images
```

---

## 🎯 Funcționalități Cheie

### **1. Hotel Discovery**

- **Advanced Filtering**: Preț, rating, stele, locație, facilități
- **Real-time Search**: Căutare instantanee cu URL sync
- **Grid Layout**: Responsive design cu priority loading
- **50+ Hotels**: Bază de date cu hoteluri europene verificate

### **2. AI-Powered Recommendations**

- **Natural Language**: Conversații în limbaj natural
- **Context-Aware**: Recomandări bazate pe preferințe
- **Streaming Responses**: Răspunsuri în timp real
- **Graceful Degradation**: Funcționare chiar și fără AI

### **3. Image Management**

- **Next.js Image Optimization**: Auto-resize, WebP, caching
- **Priority Loading**: Primele 3 imagini se încarcă instant
- **Fullscreen Viewer**: Modal cu zoom și navigare
- **Fallback System**: Imagini default pentru erori

---

## 🔧 Decizii de Design & Implementare

### **Server Components Strategy**

```typescript
// HotelCard.tsx - Server Component (fără JS bundle)
export function HotelCard({ hotel, priority }: Props) {
  // Zero client-side JavaScript pentru 50+ carduri
  return <article>...</article>;
}

// Doar FullscreenTrigger este "use client"
```

**Beneficii**:

- Zero JavaScript pentru listă de hoteluri
- SEO optimizat
- CLS (Cumulative Layout Shift) eliminat

### **Database Architecture**

```typescript
// Supabase PostgreSQL cu indexuri optimizate
export async function fetchHotels(filters: HotelFilters) {
  let q = supabase
    .from("hotels")
    .select("*", { count: "exact" })
    .order("rating", { ascending: false }); // Index pe rating
}
```

**Optimizări**:

- Index pe `rating` pentru sortare rapidă
- Server-side filtering
- Caching 5 minute pentru AI context

### **Error Handling & Resilience**

```typescript
// Graceful degradation în API route
try {
  hotelList = await fetchAllHotelsForAI();
} catch {
  // Continuă fără hotel context
}
```

**Strategie**:

- Fallback pentru API failures
- User-friendly error messages
- Rate limiting handling

---

## 🚀 Performance Optimizations

### **Next.js Image Optimization**

```typescript
<Image
  src={hotel.image_url}
  alt={hotel.name}
  width={400}
  height={300}
  priority={index < 3} // Primele 3 imagini
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

**Beneficii**:

- Auto WebP conversion
- Lazy loading automat
- Zero CLS
- Responsive images

### **Caching Strategy**

- **Static Assets**: Netlify edge caching
- **API Responses**: 5 minute cache pentru hotel data
- **Images**: Next.js image cache + CDN

### **Bundle Optimization**

```typescript
// Doar componentele interactive sunt "use client"
"use client"; // Doar în FullscreenTrigger, HotelFilters, AI chat
```

**Rezultat**: < 50KB JavaScript bundle

---

## 🔐 Security Considerations

### **Input Sanitization**

```typescript
// SafeMarkdown component pentru AI responses
export function SafeMarkdown({ content }: { content: string }) {
  // Sanitizează HTML-ul generat de AI
}
```

### **Environment Variables**

```bash
NEXT_PUBLIC_SUPABASE_URL=***
SUPABASE_SECRET_KEY=***
GOOGLE_GENERATIVE_AI_API_KEY=***
```

**Protecție**:

- Server-side keys nu sunt expuse
- Client-side doar public keys
- Environment-specific configs

---

## 📊 Rendering Strategy

### **Server-Side Rendering (SSR)**

- **Homepage**: Server Component cu featured hotels
- **Hotels Page**: Server Component cu filtered data
- **AI Finder**: Client Component pentru real-time chat

### **Static Site Generation (SSG)**

```typescript
// Potențial pentru pagini statice
export async function generateStaticParams() {
  // Generare pagini hoteluri statice
}
```

**Status**: Current implementare este SSR-based

### **Incremental Static Regeneration (ISR)**

```typescript
// Posibilă implementare
export const revalidate = 3600; // 1 hour
```

**Opportunity**: Pentru hotel pages individuale

---

## 🔄 Data Flow

### **Hotel Discovery Flow**

```
User Input → HotelFilters → URL Update →
fetchHotels() → Supabase Query →
HotelGrid → HotelCard (Server) →
Image Optimization → Display
```

### **AI Chat Flow**

```
User Message → useChat → POST /api/chat →
Gemini API + Hotel Context →
Stream Response → Real-time UI Update
```

### **Image Flow**

```
Hotel Image URL → Next.js Image →
Netlify Image Optimization →
CDN Cache → Browser Display
```

---

## 🎨 UI/UX Decisions

### **Glass Morphism Design**

```typescript
const glass = {
  backdropFilter: "blur(16px) saturate(1.8) brightness(0.55)",
  background: "rgba(255,255,255,0.08)",
};
```

**Rationale**: Readability pe orice background

### **Responsive Grid**

```typescript
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
```

**Breakpoints**: Mobile (2 col), Desktop (3 col)

### **Loading States**

- Skeleton loaders pentru imagini
- Streaming indicators pentru AI
- Graceful fallbacks

---

## 🚀 Deployment & DevOps

### **Netlify Configuration**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### **Environment Management**

- **Development**: `npm run dev --turbo`
- **Build**: `npm run build`
- **Production**: Netlify automatic deployment

### **Performance Monitoring**

- Next.js built-in analytics
- Netlify performance metrics
- Error tracking în API routes

---

## 🔮 Scalability Considerations

### **Database Scaling**

- Supabase auto-scaling
- Connection pooling
- Read replicas posibile

### **CDN & Caching**

- Netlify edge network
- Image optimization CDN
- API response caching

### **AI Rate Limits**

- Graceful degradation
- User-friendly error messages
- Fallback recommendations

---

## 📝 Code Quality & Standards

### **TypeScript Strict Mode**

```typescript
// Strict type checking
interface Hotel {
  id: string;
  name: string;
  // ... toate proprietățile definite
}
```

### **Component Architecture**

- Server Components by default
- Client components doar când e necesar
- Reusable utility functions

### **Error Boundaries**

```typescript
// app/error.tsx pentru erori globale
export default function Error({ error }: { error: Error }) {
  // User-friendly error display
}
```

---

## 🎯 Next Steps & Improvements

### **Potential Enhancements**

1. **Individual Hotel Pages**: SSG/ISR pentru SEO
2. **User Authentication**: Favorite hotels, saved searches
3. **Advanced AI**: Multi-turn conversations, context memory
4. **Mobile App**: React Native implementation
5. **Analytics**: User behavior tracking

### **Performance Opportunities**

1. **Service Workers**: Offline functionality
2. **WebP Generation**: Build-time optimization
3. **Database Indexing**: Advanced filtering performance
4. **Bundle Splitting**: Route-based code splitting

---

_Document generat la ${new Date().toLocaleDateString('ro-RO')} pentru prezentarea arhitecturii Hôven._
