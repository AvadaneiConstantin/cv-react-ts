# CV6 React - Complete Project Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Component Structure](#component-structure)
4. [Data Flow](#data-flow)
5. [State Management](#state-management)
6. [Responsive Design](#responsive-design)
7. [File-by-File Breakdown](#file-by-file-breakdown)

## 🎯 Project Overview

CV6 React is a professional portfolio application featuring:
- **Dual-mode interface**: CV view and Projects gallery
- **Responsive design**: Optimized for desktop, tablet, and mobile
- **Interactive elements**: Hover effects, animations, and real-time updates
- **Modern tech stack**: React 18, TypeScript, Tailwind CSS, Zustand

## 🏗️ Architecture

### Core Principles
- **Component-driven architecture**: Modular, reusable components
- **Feature-based organization**: Logical grouping by functionality
- **Type safety**: Full TypeScript implementation
- **Mobile-first design**: Responsive breakpoints and adaptive layouts

### Directory Structure
```
src/
├── components/          # Shared UI components
├── features/           # Feature-specific components
├── hooks/             # Custom React hooks
├── store/             # State management
└── App.tsx           # Application entry point
```

## 🧩 Component Structure

### Layout Components

#### `Shell.tsx`
**Purpose**: Main layout wrapper with responsive design
**Dependencies**: `useUIStore`
**Key Features**:
- Responsive layout switching (mobile/desktop)
- Background gradient with radial effects
- Header/footer decorative lines (desktop only)
- Conditional rendering based on screen size

### Mobile Components

#### `MobileTabNavigation.tsx`
**Purpose**: Bottom navigation for mobile devices
**Dependencies**: `useUIStore`
**Key Features**:
- Fixed bottom navigation bar
- Two tabs: PROFILE and PROJECTS
- Visual indicators for active tab
- Handles project details cleanup when switching tabs

#### `MobileProjectsView.tsx`
**Purpose**: Full-screen projects list for mobile
**Dependencies**: `PROJECTS_DATA`, `ProjectCard`, `useUIStore`
**Key Features**:
- Header with back button and project count
- Scrollable list of project cards
- Mobile-optimized layout and spacing

### CV Feature Components

#### `CVView.tsx`
**Purpose**: Main CV content orchestrator
**Dependencies**: All CV components
**Key Features**:
- Orchestrates all CV components in sequential layout
- Provides consistent spacing and typography
- Central container for CV content display

#### `CVHeader.tsx`
**Purpose**: Profile header with contact information
**Dependencies**: `useIsMobile`, `useState`
**Key Features**:
- Profile picture and personal information
- Interactive contact list with copy functionality
- Responsive design optimized for mobile
- Hover states and transitions

#### `Skills.tsx`
**Purpose**: Technical skills with progress bars and categories
**Dependencies**: `cvData`, Lucide icons
**Key Features**:
- Technical skills with progress bars
- Soft skills with icon-based cards
- Responsive grid layout
- Visual skill categorization with color coding

#### `Experience.tsx`
**Purpose**: Professional experience timeline
**Dependencies**: `cvData`, Lucide icons
**Key Features**:
- Timeline format for professional experience
- Expandable cards for detailed information
- External links to company websites
- Responsive design

#### `Education.tsx`
**Purpose**: Academic background and languages
**Dependencies**: `cvData`, Lucide icons
**Key Features**:
- Academic qualifications display
- Language proficiency levels
- Timeline format for educational background
- Visual language skill indicators

#### `ContactInfo.tsx`
**Purpose**: Contact information with copy functionality
**Dependencies**: `cvData`, `useState`
**Key Features**:
- Interactive contact cards
- Copy-to-clipboard functionality
- External links for social profiles
- Visual feedback for copied items

### Projects Feature Components

#### `ProjectCard.tsx`
**Purpose**: Reusable project card for desktop and mobile
**Dependencies**: `useUIStore`, `ProjectData`
**Key Features**:
- Displays project information in card format
- Handles project selection for detailed view
- Opens external project sites
- Responsive design with different behaviors per variant

#### `ProjectDock.tsx`
**Purpose**: Desktop project sidebar
**Dependencies**: `PROJECTS_DATA`, `ProjectCard`
**Key Features**:
- Scrollable list of projects
- Desktop-only visibility
- Fixed positioning on left side

#### `ProjectDetails.tsx`
**Purpose**: Project details modal
**Dependencies**: `useUIStore`, `framer-motion`
**Key Features**:
- Modal overlay for detailed project view
- Smooth animations and transitions
- Close functionality
- Mobile and desktop optimization

### Project Inspector Components

#### `ProjectInspector.tsx`
**Purpose**: Main wrapper for right panel
**Dependencies**: `useUIStore`, inspector components
**Key Features**:
- Decides what content to display based on hover/selection state
- Shows SystemStatus, ProjectPreview, or ProjectStatus
- Responsive design (hidden on mobile)
- Fixed width layout

#### `ProjectPreview.tsx`
**Purpose**: Shows project preview on hover
**Dependencies**: `framer-motion`, `ProjectData`
**Key Features**:
- Displays essential project information on hover
- Shows title, tech stack, and preview image
- Clean, minimal design
- Smooth animations

#### `ProjectStatus.tsx`
**Purpose**: Full telemetry display for selected project
**Dependencies**: `framer-motion`, `ProjectData`
**Key Features**:
- Comprehensive project telemetry when selected
- Project quote with styled design
- Core challenge description
- Animated waveform visualization

#### `SystemStatus.tsx`
**Purpose**: Default state with system metrics
**Dependencies**: `framer-motion`
**Key Features**:
- Shows system ready state when no project selected
- Career experience and architecture statistics
- Motivational quote
- Clean minimal design

## 🔄 Data Flow

### CV Data Flow
```
cvData (data.ts) → CV Components → UI Display
     ↓
CV Types (types.ts) → Type Safety
```

### Projects Data Flow
```
PROJECTS_DATA (data.ts) → Project Components → UI Display
     ↓
Project Types (types.ts) → Type Safety
```

### State Management Flow
```
User Interaction → useUIStore → Component Updates → UI Changes
```

### Responsive Design Flow
```
Screen Size → useMediaQuery → isMobile → Layout Adaptation
```

## 🗄️ State Management

### Zustand Store (`useUIStore.ts`)

**Global State Properties**:
- `isMobile`: Boolean for mobile detection
- `selectedProject`: Currently selected project
- `hoveredProject`: Currently hovered project
- `showMobileProjects`: Mobile projects view state
- `isProjectDetailsOpen`: Project details modal state

**Actions**:
- `setSelectedProject`: Update selected project
- `setHoveredProject`: Update hovered project
- `setShowMobileProjects`: Toggle mobile projects view
- `setIsProjectDetailsOpen`: Toggle project details modal

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `max-width: 1023px`
- **Desktop**: `min-width: 1024px`
- **Tablet**: `768px` to `1023px`

### Responsive Behavior

#### Desktop Layout
```
┌─────────────────────────────────────────────────┐
│                Header Lines                    │
├─────────┬─────────────────────┬─────────────────┤
│         │                     │                 │
│ Project │    Main Content     │   Inspector     │
│   Dock  │    (CV/Projects)   │                 │
│         │                     │                 │
└─────────┴─────────────────────┴─────────────────┘
│                Footer Lines                    │
└─────────────────────────────────────────────────┘
```

#### Mobile Layout
```
┌─────────────────────────────────────────────────┐
│                                                 │
│              Main Content                        │
│           (CV/Projects)                          │
│                                                 │
│                                                 │
├─────────────────────────────────────────────────┤
│              Tab Navigation                      │
│    [PROFILE]        [PROJECTS]                  │
└─────────────────────────────────────────────────┘
```

## 📁 File-by-File Breakdown

### Core Application Files

#### `App.tsx`
**Purpose**: Main application component and routing logic
**Dependencies**: All major components
**Key Features**:
- Renders main layout with Shell
- Handles mobile/desktop content switching
- Integrates mobile navigation
- Manages project details modal

#### `main.tsx`
**Purpose**: Application entry point
**Dependencies**: React, ReactDOM, App
**Key Features**:
- Renders App component
- Sets up React Strict Mode

### Hooks

#### `useMediaQuery.ts`
**Purpose**: Responsive design hooks
**Dependencies**: None
**Key Features**:
- `useMediaQuery`: Generic media query hook
- `useIsMobile`: Mobile detection (max-width: 1023px)
- `useIsTablet`: Tablet detection (768px - 1023px)
- `useIsDesktop`: Desktop detection (min-width: 1024px)

#### `useDebounce.ts`
**Purpose**: Debounce utility hook
**Dependencies**: None
**Key Features**:
- Debounces function calls
- Configurable delay
- Cleanup on unmount

### Data Files

#### `features/cv/data.ts`
**Purpose**: Centralized CV data source
**Dependencies**: CV types
**Key Features**:
- Profile information
- Skills data (technical and soft)
- Experience timeline
- Education background
- Language proficiency

#### `features/projects/data.ts`
**Purpose**: Projects data source
**Dependencies**: Project types
**Key Features**:
- Complete project information
- Project metadata and descriptions
- Tech stack information
- Preview images and links

### Type Definitions

#### `features/cv/types.ts`
**Purpose**: TypeScript definitions for CV data
**Dependencies**: None
**Key Features**:
- `ProfileData`: Profile information interface
- `SkillItem`: Individual skill interface
- `ExperienceItem`: Experience entry interface
- `EducationItem`: Education entry interface
- `CVData`: Main CV data interface

#### `features/projects/types.ts`
**Purpose**: TypeScript definitions for project data
**Dependencies**: None
**Key Features**:
- `ProjectData`: Project information interface
- Project metadata types
- Tech stack definitions

## 🎨 Design System

### Color Palette
- **Primary**: Slate (dark theme)
- **Accent**: Cyan (interactive elements)
- **Secondary**: Indigo (secondary accents)
- **Background**: Slate-950 (darkest)
- **Text**: Slate-400 (primary text)

### Typography
- **Headings**: System fonts, bold weights
- **Body**: System fonts, normal weights
- **Code**: Monospace fonts
- **Sizes**: Responsive scaling with Tailwind

### Spacing
- **Base**: Tailwind CSS utility classes
- **Scale**: 4px base unit
- **Responsive**: Mobile-first approach

### Animations
- **Library**: Framer Motion
- **Types**: Fade, slide, scale transitions
- **Duration**: 200-300ms for smooth interactions
- **Easing**: Ease-out for natural feel

## 🔧 Development Guidelines

### Component Standards
- Use functional components with hooks
- Implement TypeScript interfaces
- Follow consistent naming conventions
- Add standardized comments
- Implement responsive design

### Code Organization
- Feature-based folder structure
- Separate data, types, and components
- Centralized state management
- Reusable utility hooks

### Performance Considerations
- Lazy load heavy components
- Optimize images and assets
- Use React.memo where appropriate
- Implement proper cleanup

## 🚀 Build and Deployment

### Development
```bash
npm run dev      # Start development server
npm run lint     # Run ESLint
npm run type-check # TypeScript checking
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

### Environment Variables
- `VITE_` prefix for environment variables
- No external API dependencies
- Static asset optimization

## 📊 Performance Metrics

### Bundle Size
- Optimized with Vite
- Code splitting by routes
- Tree shaking for unused code

### Runtime Performance
- React 18 concurrent features
- Optimized re-renders
- Efficient state management

### Mobile Performance
- Touch-optimized interactions
- Reduced animations on mobile
- Optimized images and assets

---

*This documentation provides a comprehensive overview of the CV6 React project structure, architecture, and implementation details. For specific component implementations, refer to the individual component files and their inline documentation.*
