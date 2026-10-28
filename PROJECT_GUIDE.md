# Feeding India - React UI Project Guide & Rubric Evaluation Walkthrough

This document provides a complete guide to understanding, running, and demonstrating the **Feeding India** React application. It covers all 5 criteria from the **Final Evaluation Rubric (20/20 Marks)** in detail.

---

## 🚀 How to Run the Project

### 1. Start the Backend Server (Express + MongoDB)
Open a terminal in the project root:
```bash
cd backend
npm start
```
The backend will connect to MongoDB Atlas and run on **`http://localhost:5000`**.  
Admin page is accessible at **`http://localhost:5000/admin.html`**.

### 2. Start the Frontend Application (React + Vite)
Open a second terminal in the project root:
```bash
cd frontend
npm run dev
```
Vite will compile and launch the application at **`http://localhost:5173`**.

---

## 📋 Rubric Mapping & Implementation Evidence (20/20 Marks)

### Criterion 1: Component Design & Rendering (4 / 4 Marks)
> **Rubric requirement:** Well-structured reusable components; effective use of props; correct conditional rendering.

| Concept | File Location | Explanation / Implementation |
| :--- | :--- | :--- |
| **Component Creation** | `src/components/`, `src/pages/` | All pages and UI elements are modular, functional React components using clean, modern JSX syntax. |
| **Component Reuse** | `StatCard.jsx` | Reused 4 times on `Home.jsx` to render key impact figures (children served, live meals counter, partner centers, cities). |
| **Component Reuse** | `ProgramCard.jsx` | Reused on `Home.jsx` for both the *Daily Feeding Program* and *The Anganwadi Program*. |
| **Component Reuse** | `TechCard.jsx` | Reused across `DailyFeeding.jsx`, `Anganwadi.jsx`, and `AboutUs.jsx` for feature grids and philosophy cards. |
| **Component Reuse** | `FaqItem.jsx` | Reused on `Donate.jsx` for interactive FAQ accordions. |
| **Props Passing & Destructuring** | All components | Props are destructured with clean default values, e.g.: `function StatCard({ icon, number, label, isHighlight = false, isLive = false, style = {} })`. |
| **Conditional Rendering** | `Donate.jsx` | `{paymentComplete ? <SuccessPanel /> : <DonateForm />}` renders either the form or receipt based on payment status. |
| **Conditional Rendering** | `Donate.jsx` | `{requireTaxCert && <PANInput />}` conditionally displays PAN input when 80G tax deduction is selected. |
| **Conditional Rendering** | `PartnerWithUs.jsx` | `{formData.partnerType !== 'individual' && <OrgNameInput />}` hides company name for individual volunteers. |
| **Conditional Rendering** | `Header.jsx` | `{mobileMenuOpen && <Overlay />}` only renders mobile backdrop when menu drawer is open. |
| **Conditional Rendering** | `Donate.jsx` | `{isProcessing && <PaymentOverlay />}` renders animated secure loader during async server transaction. |

---

### Criterion 2: UI Styling & Responsiveness (4 / 4 Marks)
> **Rubric requirement:** Attractive and consistent UI; effective styling; dynamic styles and responsive layouts implemented appropriately.

| Concept | File Location | Explanation / Implementation |
| :--- | :--- | :--- |
| **Consistent CSS** | `css/styles.css` | Comprehensive CSS variables (`--color-brand-red`, `--radius-lg`, `--shadow-md`, `--font-lexend`), typography, and container resets. |
| **Inline Styling** | Multiple files | Explicitly demonstrated where suitable, such as animation delays `style={{ animationDelay: '0.1s' }}`, dynamic minimum heights `style={{ minHeight: 'calc(100vh - 400px)' }}`, and layout adjustments. |
| **Dynamic Styling** | `Header.jsx` | Sticky scroll shadow added dynamically: `className={\`main-header \${isScrolled ? 'scrolled' : ''}\`}`. |
| **Dynamic Styling** | `Donate.jsx` | Amount buttons highlighted dynamically: `className={\`preset-btn \${selectedPreset === val ? 'selected' : ''}\`}`. |
| **Dynamic Styling** | Forms | Input fields toggle error borders: `className={\`form-input \${errors.email ? 'error' : ''}\`}`. |
| **Responsive Layout** | `Header.jsx`, `styles.css` | Desktop navigation transforms into a mobile slide-out drawer on screens `< 768px` with hamburger menu button. |
| **Responsive Grids** | `Home.jsx`, `Donate.jsx` | CSS Grid adapts from multi-column desktop displays (`form-grid`, `stats-grid`) to single-column on mobile. |

---

### Criterion 3: Hooks & State Management (4 / 4 Marks)
> **Rubric requirement:** Correct use of hooks; effective state management and event handling; UI updates dynamically as expected.

| Concept | File Location | Explanation / Implementation |
| :--- | :--- | :--- |
| **useState (Controlled Form)** | `Donate.jsx`, `PartnerWithUs.jsx` | Manages form fields (`name`, `email`, `phone`, `pan`, `amount`, `message`), validation errors, and submission status. |
| **useState (UI State)** | `Header.jsx` | Tracks `mobileMenuOpen` (boolean) and `activeDropdown` ('work' \| 'partner' \| null). |
| **useState (Accordion)** | `Donate.jsx` | Tracks `openFaqIndex` to toggle interactive collapsible questions. |
| **useState (Live Counter)** | `Home.jsx` | Holds real-time meal counter: `const [mealsCount, setMealsCount] = useState(280000000)`. |
| **useEffect (Interval Timer)** | `Home.jsx` | Sets up an interval that increments mealsCount every 2 seconds. Demonstrates proper cleanup with `clearInterval(timer)`. |
| **useEffect (Scroll Listener)** | `Header.jsx` | Listens to `window.addEventListener('scroll', ...)` with cleanup function in return block to prevent memory leaks. |
| **useEffect (Scroll To Top)** | `ScrollToTop.jsx` | Listens to `[pathname]` from `useLocation()` and resets viewport scroll to `(0, 0)` upon navigation. |
| **Event Handling** | Forms & Buttons | `onChange` for inputs, `onClick` for preset buttons/accordions, `onSubmit` for form processing. |
| **Dynamic UI Calculation** | `Donate.jsx` | Real-time calculation: `calculateMeals(amount)` immediately updates the impact summary (`${Math.floor(amount / 10)} meals funded`) as the user types. |

---

### Criterion 4: Routing & Forms (4 / 4 Marks)
> **Rubric requirement:** Routes and navigation work correctly; forms use controlled components with effective validation and submission handling.

| Concept | File Location | Explanation / Implementation |
| :--- | :--- | :--- |
| **React Router Setup** | `App.jsx` | Configured with `<BrowserRouter>`, `<Routes>`, and `<Route>` components. Handles direct URL navigation cleanly with HTML5 history. |
| **Navigation Links** | `Header.jsx`, `Footer.jsx` | Uses `<NavLink>` for active page indicators and `<Link>` for instantaneous client-side navigation. |
| **404 Catch-All** | `App.jsx`, `NotFound.jsx` | `<Route path="*" element={<NotFound />} />` catches all unknown or invalid URLs (e.g. `/sadfasf`) and displays a dedicated 404 page. |
| **Controlled Components** | `Donate.jsx`, `PartnerWithUs.jsx` | Form values are strictly driven by React state (`value={formData.field}`) and updated via `onChange={handleChange}`. |
| **Form Inputs Covered** | Pages | Text, Email, Telephone, Number, Custom amount, Checkbox, Textarea, Select/Radio buttons. |
| **Client-Side Validation** | `Donate.jsx` | Validates non-empty name, regex email format (`/\S+@\S+\.\S+/`), 10-digit mobile (`/^[0-9]{10}$/`), Indian PAN format (`/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/`), and minimum amount (₹100). |
| **Submission Handling** | `Donate.jsx`, `PartnerWithUs.jsx` | `e.preventDefault()`, checks validation, triggers loading state, calls backend API via `fetch()`, handles errors, and displays confirmation receipt with Transaction ID. |

---

### Criterion 5: Individual Understanding & Project Demonstration (4 / 4 Marks)
> **Rubric requirement:** Explains components and implementation confidently; solves problems independently and demonstrates significant individual contribution.

---

## 🎓 Viva & Code Demonstration Q&A (Prepare for Evaluation)

### Q1: What is JSX and why do we use it in React?
> **Answer:** JSX stands for JavaScript XML. It allows us to write HTML-like structure directly inside JavaScript code. Vite and React transform JSX into `React.createElement()` calls behind the scenes. It makes code intuitive, readable, and enables combining UI structure with dynamic logic.

### Q2: What is the difference between a Controlled Component and an Uncontrolled Component?
> **Answer:** In an **Uncontrolled Component**, form data is handled by the DOM itself (using refs). In a **Controlled Component** (which we used in `Donate.jsx` and `PartnerWithUs.jsx`), the input value is bound to React state via `value={formData.name}` and updated through an `onChange` handler. This gives us full control over validation, formatting, and real-time UI updates.

### Q3: Why is `useEffect` cleanup important?
> **Answer:** In `Home.jsx` (for the live timer) and `Header.jsx` (for the window scroll listener), we return a cleanup function:
> ```jsx
> useEffect(() => {
>   const timer = setInterval(() => { ... }, 2000);
>   return () => clearInterval(timer); // Cleanup function!
> }, []);
> ```
> If we did not clean this up, the interval or event listener would keep running in memory even after the component unmounts, leading to memory leaks and unexpected behavior.

### Q4: How does dynamic styling work in your project?
> **Answer:** Dynamic styling is achieved by evaluating state or props to apply conditional classes or inline style objects:
> - `className={\`preset-btn \${selectedPreset === val ? 'selected' : ''}\`}` highlights the chosen donation amount.
> - `className={\`form-input \${errors.email ? 'error' : ''}\`}` displays a red border when validation fails.
> - `className={\`main-header \${isScrolled ? 'scrolled' : ''}\`}` adds a drop shadow when the page is scrolled past 20px.

### Q5: How does client-side validation work before communicating with the backend?
> **Answer:** When the user clicks "Proceed to Pay", `handleSubmit` invokes `validate()`. We check regular expressions for email and 10-digit phone number, ensure PAN is valid if 80G tax exemption is requested, and ensure minimum donation is ₹100. If any rule fails, we populate the `errors` state object and conditionally display `<span className="form-error">`. Only when `Object.keys(newErrors).length === 0` do we send the HTTP `POST` request to Express.

### Q6: How does the frontend connect to the backend?
> **Answer:** In `Donate.jsx` and `PartnerWithUs.jsx`, we use the native `fetch` API:
> ```jsx
> const res = await fetch('http://localhost:5000/api/donate', {
>   method: 'POST',
>   headers: { 'Content-Type': 'application/json' },
>   body: JSON.stringify(payload),
> });
> const data = await res.json();
> ```
> The Express backend handles the request, validates the payload, generates a unique transaction ID (`FI-XXXXXX`), and stores the donation record into MongoDB Atlas.

---

## 📁 Project Directory Structure
```
feeding-india/
├── backend/
│   ├── models/
│   │   ├── Donation.js       # Mongoose Schema for Donations
│   │   └── Partner.js        # Mongoose Schema for Partnership Requests
│   ├── routes/
│   │   ├── donateRoutes.js   # POST /api/donate
│   │   ├── partnerRoutes.js  # POST /api/partner
│   │   └── adminRoutes.js    # GET/PATCH/DELETE /api/admin
│   ├── server.js             # Express application & MongoDB connection
│   └── .env                  # MongoDB Atlas URI & Port
│
└── frontend/
    ├── css/
    │   └── styles.css        # Global design system & responsive styling
    ├── public/
    │   └── favicon.svg       # Brand icon
    ├── src/
    │   ├── components/
    │   │   ├── Logo.jsx         # Reusable SVG Logo
    │   │   ├── Header.jsx       # Sticky navbar with mobile drawer & dropdowns
    │   │   ├── Footer.jsx       # Global footer with social links & year
    │   │   ├── StatCard.jsx     # Reusable statistics card
    │   │   ├── ProgramCard.jsx  # Reusable initiative card
    │   │   ├── TechCard.jsx     # Reusable feature/pillar card
    │   │   ├── FaqItem.jsx      # Reusable interactive accordion
    │   │   └── ScrollToTop.jsx  # Scroll restoration on route change
    │   ├── pages/
    │   │   ├── Home.jsx         # Homepage with live counter & hero
    │   │   ├── DailyFeeding.jsx # Daily Feeding Program details
    │   │   ├── Anganwadi.jsx    # Anganwadi Program & 3 pillars
    │   │   ├── AboutUs.jsx      # Our story, philosophies, & audit logs
    │   │   ├── PartnerWithUs.jsx# Controlled partnership inquiry form
    │   │   ├── Donate.jsx       # Controlled donation form & impact calculator
    │   │   └── NotFound.jsx     # 404 Page with quick navigation links
    │   ├── App.jsx              # BrowserRouter and Route hierarchy
    │   └── main.jsx             # React 18 createRoot entry point
    ├── index.html               # HTML5 template
    ├── vite.config.js           # Vite React bundler configuration
    └── package.json             # React, React Router, Vite dependencies
```

