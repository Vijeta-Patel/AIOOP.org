# AIOOP - All India Organization of Pensioners

## Overview

AIOOP.org is the official, production-hosted website of the All India Organization of Pensioners (AIOOP), a government-affiliated organization working in the interest of retired government employees and pensioners.

The platform serves as a structured and reliable source of information, providing access to organizational activities, administrative support services, official notices, and welfare initiatives. It is designed to ensure clarity, accessibility, and transparency for pensioners seeking assistance and updates related to their entitlements and services.

## Purpose

The website functions as a centralized information portal for the All India Organization of Pensioners, enabling members to:

- Access organizational announcements, policy updates, and notices
- Learn about available facilities and member benefits
- Review scheduled activities and programs
- Obtain contact information and administrative details
- Access organizational information and governance structure

## Site Structure

The platform consists of the following primary sections:

**Home** - Main landing page providing an overview of the organization and quick access to key information

**Notices** - Repository of official announcements, policy updates, and time-sensitive information

**Activities** - Schedule and details of organized programs, events, and member initiatives

**Facilities** - Information regarding available services, resources, and member benefits

**Committee** - Details of organizational leadership, committee structure, and administrative contacts

**Gallery** - Collection of event photographs and organizational documentation

**Contact** - Contact information, office locations, and inquiry submission channels

## Accessibility Features for Elderly Users

AIOOP.org is designed with the needs of elderly pensioners in mind, offering accessibility tools prominently placed in the navigation bar for easy discovery and use:

**Language Toggle** - A language selector button is positioned in the top navigation bar, allowing users to seamlessly switch between Hindi and English. The selection is intuitive and persists across all pages during the user session, ensuring content remains in the preferred language without requiring repeated adjustments.

**Font Size Adjustment** - An adjustable font size feature is readily available in the navigation bar, enabling users to increase or decrease text size according to their visual requirements. This functionality:
- Increases readability for users with visual impairments
- Applies consistently across all website sections
- Maintains layout integrity at all font sizes

**Consistent Navigation Placement** - Both the language toggle and font size controls are visually positioned in the top navigation bar, ensuring they remain visible and accessible from every page. This placement eliminates the need for users to search for these options and makes the website more approachable for elderly users.

**Responsive and Mobile-Friendly** - All accessibility features work seamlessly across desktop and mobile devices, accommodating users who may access the website from various devices.

These accessibility tools ensure that the website serves pensioners of varying technical proficiency and physical capabilities, making information and services genuinely available to all members of the organization.

## Technical Implementation

The website is built using the following technologies:

- **Frontend Framework**: React 19 with TypeScript for application development
- **Build Tool**: Vite 5 for optimized development and production builds
- **Styling**: Tailwind CSS for responsive user interface design
- **UI Components**: Shadcn/ui component library for consistent interface elements
- **Language Support**: Bilingual interface supporting Hindi and English
- **Responsive Design**: Fully functional across desktop and mobile devices
- **Code Quality**: TypeScript implementation with ESLint-enforced standards

## Local Development

To set up and run the development environment:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```



## Project Structure

```
src/
├── pages/              - Page components (Home, Activities, Notices, etc.)
├── components/         - Reusable UI components
│   └── ui/            - Component library
├── i18n/              - Language and translation configuration
├── hooks/             - Custom React hooks
└── lib/               - Utility functions
```

## Version Information

- Node.js: v16 or higher
- Package Manager: npm or yarn
- Production Status: Live and operational