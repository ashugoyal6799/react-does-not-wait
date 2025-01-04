## Current Functionalities

- three pages Home, About and Contact
- dynamic routes using `useParams`
- added nested routing using `Outlet` similiar to basic routing

## Challenge met, Solution set

### Problem:

On the Home Page, both the Header and Footer components are visible. However, on the About and Contact pages, they do not appear.
A basic approach to solve this issue would be to include the Header and Footer components in each individual page. However, this is inefficient and impractical for a larger project with multiple pages.

### Solution:

To solve this, I used the `Outlet` component provided by react-router. The Outlet acts as a placeholder, dynamically rendering the child components (such as Body, About, or Contact) specified in the appRouter configuration. This allows the Header and Footer components to remain static and visible across all pages, while the main content changes based on the route.

Here’s how it works:
The App component serves as the parent layout, containing the fixed Header and Footer components and an Outlet in between.
The appRouter defines child routes, each mapping a path (e.g., /about, /contact) to a specific component.
When the route changes, Outlet renders the corresponding child component, ensuring the Header and Footer remain visible.
This approach keeps the layout consistent and eliminates redundancy when managing shared components across multiple pages.

Then I extended this approach to do nested routing in about page
