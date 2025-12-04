# 🎉 BOGO (Buy One Get One) Offer Widget

> 🛍️ A beautiful, interactive pricing widget for BOGO offers with dynamic price calculation and product customization!

![BOGO Widget Preview](https://github.com/user-attachments/assets/fe8578c9-bf42-488d-a38c-7312ad10ffd4)

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Code Explanation](#-code-explanation)
- [Customization Guide](#-customization-guide)
- [Browser Compatibility](#-browser-compatibility)
- [Author](#-author)
- [License](#-license)

## 🎯 About the Project

This is a **BOGO (Buy One Get One)** pricing widget that provides an elegant and interactive way for customers to select product quantities with special discount offers. The widget features real-time price updates, product customization options (size and color), and a responsive design that works seamlessly across all devices.

Perfect for e-commerce websites looking to boost sales with attractive bundle offers! 💰

## ✨ Features

- 🎨 **Beautiful UI Design** - Clean, modern interface with pink accent colors
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🔄 **Real-time Price Updates** - Total price updates instantly when selecting different options
- 🏷️ **Dynamic Discount Tags** - Shows percentage discounts for each option (10%, 20%, 30% off)
- ⭐ **Popular Option Highlighting** - "MOST POPULAR" badge on the best-value option
- 🎨 **Product Customization** - Select size (S, M, L, XL) and color for multiple units
- ✅ **Interactive Radio Buttons** - Custom-styled radio buttons with smooth transitions
- 🚚 **Free Delivery Banner** - Prominently displays free shipping offer
- 💳 **Add to Cart Button** - Eye-catching CTA button ready for integration
- 🎭 **Smooth Hover Effects** - Visual feedback on interactive elements

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox layout
- **JavaScript (ES6)** - Vanilla JS for interactive functionality
- **No Dependencies** - Pure HTML/CSS/JS, no frameworks required! 🚀

## 📁 Project Structure

```
Bogo/
│
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # All styling and layout
├── ⚡ script.js           # Interactive functionality
└── 📖 README.md           # Project documentation (you are here!)
```

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser! No installation required. ✨

### Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jyoti-prakash-rout/Bogo.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd Bogo
   ```

3. **Open in browser**
   - Simply double-click `index.html`, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (if http-server is installed)
     npx http-server
     ```
   - Then open `http://localhost:8000` in your browser

4. **That's it!** 🎉 Start exploring the widget!

## 🎬 How It Works

### User Experience Flow

1. 👀 **View Options** - Users see three pricing tiers:
   - 1 Unit - Standard price with 10% off
   - 2 Units - Most popular with 20% off (pre-selected)
   - 3 Units - Best value with 30% off

2. ✅ **Select Quantity** - Click on any option to select it (radio button automatically checks)

3. 🎨 **Customize Products** - For the 2-unit option:
   - Choose size for each unit (S, M, L, XL)
   - Choose color for each unit (Black, White, Red, Blue)

4. 💰 **See Total Price** - Total price updates automatically based on selection

5. 🛒 **Add to Cart** - Click the "Add to Cart" button to proceed (ready for integration)

## 💻 Code Explanation

### HTML Structure (`index.html`)

The HTML is organized into clear sections:

```html
<div class="widget">
  <!-- Header Section -->
  <div class="header">...</div>
  
  <!-- Options Section (3 pricing tiers) -->
  <div class="options">...</div>
  
  <!-- Footer Section (Summary + CTA) -->
  <div class="footer">...</div>
</div>
```

**Key Features:**
- ✅ Uses semantic HTML5 elements
- 📊 Data attributes (`data-units`, `data-price`) for easy price management
- ♿ Accessible form elements with proper labels
- 🎯 Clear structure for easy maintenance

### CSS Styling (`style.css`)

The CSS is well-organized with clear sections:

1. **Reset Styles** - Removes default browser styling
2. **Main Widget** - Container with max-width for responsiveness
3. **Header** - Title with decorative lines on both sides
4. **Options List** - Flexbox layout for pricing tiers
5. **Popular Option** - Special styling with badge and highlight
6. **Custom Radio Buttons** - Styled radio inputs with CSS
7. **Size & Color Selectors** - Dropdown styling
8. **Footer** - Summary and CTA button

**Design Highlights:**
- 🎨 Pink color scheme (`#ff6b81`) for vibrant, friendly look
- 📦 Flexbox for responsive layouts
- 🎭 Hover effects for better UX
- 🔘 Custom radio button styling (hidden native inputs)
- 📱 Mobile-friendly with proper spacing

### JavaScript Functionality (`script.js`)

The JavaScript handles all interactive features:

```javascript
// Three main functions:

1. updateTotalPrice()
   - Gets selected option's price from data attribute
   - Updates the total price display

2. highlightSelected()
   - Adds visual feedback to selected option
   - Removes highlight from unselected options

3. Event Listeners
   - Click events on options
   - Change events on radio buttons
   - Handles keyboard navigation
```

**Smart Features:**
- ✅ Ignores clicks on dropdown menus (prevents unwanted selection changes)
- 🔄 Updates UI immediately on any interaction
- ⌨️ Works with keyboard navigation
- 🎯 Runs initialization code on page load

## 🎨 Customization Guide

### Change Colors

In `style.css`, update the primary color:

```css
/* Find and replace #ff6b81 with your color */
h1 {
  color: #ff6b81;  /* Change this */
}

.pink {
  background: #ff6b81;  /* And this */
}
```

### Modify Prices

In `index.html`, update the `data-price` attributes:

```html
<div class="option" data-units="1" data-price="15.00">
  <!-- Change data-price to your desired price -->
</div>
```

### Add More Size/Color Options

In `index.html`, add more `<option>` elements:

```html
<select class="size">
  <option>S</option>
  <option>M</option>
  <option>L</option>
  <option>XL</option>
  <option>XXL</option>  <!-- Add new options here -->
</select>
```

### Change Discount Percentages

Update the badge text in `index.html`:

```html
<span class="tag pink">20% Off</span>  <!-- Change the text -->
```

## 🌐 Browser Compatibility

This widget works on all modern browsers:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

**Note:** Uses standard HTML/CSS/JS features, no experimental APIs! 🎉

## 👨‍💻 Author

**Jyoti Prakash Rout**

Built with 💖 by Jyoti

- GitHub: [@Jyoti-prakash-rout](https://github.com/Jyoti-prakash-rout)

## 📄 License

This project is open source and available for anyone to use, modify, and distribute. Feel free to use it in your own projects! 🎁

---

## 💡 Tips for Integration

If you're integrating this into your e-commerce site:

1. **Backend Integration**
   - Connect the "Add to Cart" button to your cart API
   - Send the selected units, sizes, colors, and price to your backend

2. **Product Data**
   - Make prices dynamic by fetching from your database
   - Update product images if needed

3. **Validation**
   - Add validation to ensure colors are selected for all units
   - Show error messages for incomplete selections

4. **Analytics**
   - Track which option is most popular
   - Monitor conversion rates for different price points

---

### 🌟 If you find this project helpful, please give it a star! ⭐

**Happy Coding!** 🚀💻✨
