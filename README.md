# PagePilot E-commerce Demo

A modern e-commerce demo built with Next.js, featuring a product grid, shopping cart functionality, and checkout process.

## Features

- **Product Grid**: Browse products with images, names, prices, and stock status
- **Mini Cart**: Side drawer with item count badge, quantity controls, and instant total updates
- **Shopping Cart**: Add/remove items, update quantities, persistent storage via localStorage
- **Checkout Process**: Simple checkout flow with order summary
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Toast Notifications**: User feedback for cart actions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context with useReducer
- **Persistence**: localStorage for cart data
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone or download the project
2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/
│   ├── checkout/page.tsx    # Checkout page
│   ├── layout.tsx           # Root layout with cart provider
│   └── page.tsx             # Home page with product grid
├── components/
│   ├── header.tsx           # Header with cart button
│   ├── mini-cart.tsx        # Cart drawer component
│   └── product-card.tsx     # Individual product card
├── lib/
│   ├── cart-context.tsx     # Cart state management
│   └── products.ts          # Product data
└── README.md
\`\`\`

## Product Data

The demo includes 6 sample products across different categories:
- Apparel (Starter Tee, Hoodie Pro)
- Home (Mug)
- Accessories (Sticker Pack, Cap)
- Stationery (Notebook)

Each product includes stock management and out-of-stock handling.

## Cart Features

- **Persistent Storage**: Cart data survives browser refresh
- **Quantity Controls**: Increase/decrease with stock limits
- **Real-time Updates**: Instant total calculations
- **Empty State**: Helpful messaging when cart is empty
- **Remove Items**: Individual item removal with confirmation

## Customization

To modify the product catalog, edit `lib/products.ts`. The cart system automatically handles new products without additional configuration.

## Demo Limitations

- No real payment processing (checkout is simulated)
- No user authentication
- No backend API (all data is local)
- No product search or filtering

This is a demonstration project showcasing modern React patterns and e-commerce UX best practices.
