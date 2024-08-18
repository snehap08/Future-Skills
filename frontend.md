## React Assignment Questions and Answers

### Question 1: How can you implement shared functionality across a component tree?

**Answer:**

Shared functionality across a component tree can be implemented using approaches like Higher-Order Components for wrapping components with shared logic, custom hooks for reusable logic in functional components, and we can also use Context API for sharing state and logic across the tree without prop drilling. These methods promote code reusability and maintainability.

### Question 2: Why is the `useState` hook appropriate for handling state in a complex component?

**Answer:**

The `useState` hook is ideal for handling state in a complex component because it offers a simple way to manage multiple state variables independently. It optimizes re-renders by updating only the parts of the component that rely on the changed state. Additionally, `useState` integrates seamlessly with functional components, also it works well with `useEffect` and make the working with complex component easy while performing task like data fetching from backend.


3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
