# CV6 React - Professional Portfolio & CV Application

A modern, responsive portfolio application built with React, TypeScript, and Vite. Features a sleek dark theme, mobile-first design, and interactive project showcase with real-time preview functionality.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark color scheme with cyan accents
- **Interactive Project Gallery**: Hover previews and detailed project views
- **Real-time Inspector**: Dynamic project information panel
- **Mobile Navigation**: Tab-based navigation for mobile devices
- **Contact Information**: Interactive contact cards with copy functionality
- **Smooth Animations**: Framer Motion powered transitions
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Shell.tsx              # Main layout wrapper
│   └── mobile/
│       ├── MobileTabNavigation.tsx # Mobile bottom navigation
│       └── MobileProjectsView.tsx  # Mobile projects list
├── features/
│   ├── cv/
│   │   ├── components/
│   │   │   ├── CVHeader.tsx       # Profile header with contact info
│   │   │   ├── Skills.tsx         # Technical & soft skills display
│   │   │   ├── Experience.tsx     # Professional experience timeline
│   │   │   ├── Education.tsx      # Academic background
│   │   │   └── ContactInfo.tsx    # Contact information cards
│   │   ├── CVView.tsx             # Main CV orchestrator
│   │   ├── data.ts                # CV data source
│   │   └── types.ts               # TypeScript definitions
│   └── projects/
│       ├── ProjectCard.tsx        # Reusable project card
│       ├── ProjectDock.tsx        # Desktop project sidebar
│       ├── ProjectDetails.tsx     # Project details modal
│       ├── data.ts                # Projects data source
│       ├── types.ts               # TypeScript definitions
│       └── projectInspector/
│           ├── ProjectInspector.tsx # Right panel wrapper
│           ├── ProjectPreview.tsx   # Hover preview component
│           ├── ProjectStatus.tsx    # Selected project telemetry
│           └── SystemStatus.tsx     # Default system status
├── hooks/
│   ├── useMediaQuery.ts           # Responsive design hooks
│   └── useDebounce.ts            # Debounce utility hook
├── store/
│   └── useUIStore.ts              # Global state management
└── App.tsx                        # Main application component
```

## 🎯 Core Components

### CV Components

- **CVHeader**: Profile information with interactive contact details
- **Skills**: Technical skills with progress bars and soft skills grid
- **Experience**: Professional experience timeline with expandable cards
- **Education**: Academic background and language proficiency
- **ContactInfo**: Interactive contact cards with copy functionality

### Project Components

- **ProjectCard**: Reusable project card for desktop and mobile
- **ProjectInspector**: Dynamic right panel showing project information
- **ProjectPreview**: Quick project preview on hover
- **ProjectStatus**: Detailed project telemetry when selected
- **SystemStatus**: Default system metrics display

### Mobile Components

- **MobileTabNavigation**: Bottom navigation for mobile devices
- **MobileProjectsView**: Full-screen mobile projects list

## 🔄 Data Flow

1. **CV Data**: Centralized in `src/features/cv/data.ts`
2. **Project Data**: Centralized in `src/features/projects/data.ts`
3. **Global State**: Managed through Zustand in `src/store/useUIStore.ts`
4. **Responsive Design**: Handled by `useMediaQuery` hook
5. **Component Communication**: Through shared state and props

## 🎨 Design System

- **Colors**: Slate dark theme with cyan accents
- **Typography**: System fonts with monospace for code
- **Spacing**: Tailwind CSS utility classes
- **Animations**: Framer Motion for smooth transitions
- **Breakpoints**: Mobile (max-width: 1023px), Desktop (min-width: 1024px)

## 📱 Responsive Behavior

- **Desktop**: Full layout with project dock and inspector panel
- **Mobile**: Tab navigation with full-screen views
- **Tablet**: Adaptive layout based on screen size

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cv6-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📖 Documentation

For detailed information about project structure, component architecture, and data flow, see [CVFilesInfo.md](./CVFilesInfo.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
