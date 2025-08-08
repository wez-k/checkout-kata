# CDL Checkout System Kata

A modern, responsive checkout system built with **TypeScript**, **React**, and **Tailwind CSS** that handles dynamic pricing schemes including special bulk pricing rules.

## 🎯 Kata Requirements

### ✅ Core Features

- **Dynamic Pricing Rules**: Support for individual and special bulk pricing
  - Item A: 50p each, 3 for £1.30
  - Item B: 30p each, 2 for 45p
  - Item C: 20p each
  - Item D: 15p each
- **Real-time Calculations**: Instant running total updates
- **Flexible Input Order**: Items can be scanned in any order
- **SKU System**: Uses letters A, B, C, D as Stock Keeping Units
- **Simple UI**: Clean, intuitive interface for item input and total display

### ✅ Technical Requirements

- **JavaScript/TypeScript**: Full TypeScript implementation
- **React**: Modern React 19 with hooks
- **AWS-First Design**: Modular architecture ready for serverless deployment
- **Simple Solution**: No databases or servers, minimal boilerplate
- **Public Repository**: Ready for GitHub deployment

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Architecture

**Clean Architecture** with clear separation of concerns:

- **Components**: React UI components
- **Services**: Business logic (`CheckoutService`)
- **Hooks**: State management (`useCheckout`)
- **Types**: TypeScript interfaces
- **Data**: Pricing rules configuration

## 🎨 Features

- **Responsive Design**: Mobile-first with Tailwind CSS
- **Real-time Totals**: Running and final totals update instantly
- **Quick Scan**: Buttons for common items (A, B, C, D)
- **Keyboard Support**: Enter key to scan items
- **Modern UI**: Beautiful gradient design with animations

## 📊 Example Usage

1. **Scan Item A**: Enter "A" and click "Scan Item" or use quick scan button
2. **Add Multiple Items**: Scan A, B, A, A (any order)
3. **View Special Pricing**: Item A will show 3 for £1.30 applied
4. **Running Total**: Updates after each scan
5. **Final Total**: Shows total with all special pricing applied

## 🔧 Key Decisions

### Technology Choices

- **React 19 + TypeScript**: Type safety and modern development experience
- **Tailwind CSS**: Rapid development and consistent design
- **Vite**: Fast development and optimized builds

### Architecture Decisions

- **Service Layer**: Encapsulated business logic for testability
- **Custom Hooks**: Reusable state management
- **Component Composition**: Small, focused components
- **Type Safety**: Full TypeScript coverage

## 🚀 AWS Considerations

- **Serverless Ready**: Components can be deployed as Lambda functions
- **Static Hosting**: Can be deployed on S3 + CloudFront
- **Scalable**: Modular architecture allows independent scaling
- **Cost Optimized**: No server dependencies

## 📝 Time Estimate

**~8-10 hours total development time**

## 🔮 Future Enhancements

If I had more time, I would add:

- Comprehensive testing suite
- Error handling and validation
- Data persistence
- Enhanced accessibility
- Backend integration
- Advanced pricing features

## 📄 Documentation

For detailed technical documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md)

---
