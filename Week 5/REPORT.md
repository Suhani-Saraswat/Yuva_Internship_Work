# Week 5 Internship Task Report

## Developing a Single Page Application (SPA)

This project implements a simple Single Page Application using HTML, CSS and JavaScript. The application uses a shared HTML shell containing a header, navigation, main content container and footer. JavaScript dynamically renders page content based on the URL hash, allowing users to move between sections without a complete page reload.

Hash-based client-side routing was implemented through the `hashchange` event. The render function reads the current route and displays the matching content. A basic 404-style message is provided when a user enters an unsupported route. This improves error handling and avoids displaying a blank page.

The webpage uses CSS Grid, flexible widths and media queries to provide a responsive layout for desktop, tablet and mobile screens. The mobile navigation menu is controlled through JavaScript, and the `aria-expanded` attribute communicates its current state to assistive technologies. Visible focus styles also support keyboard users.

The main challenge was managing dynamic content while keeping the code organized. This was solved by separating the static application shell from the JavaScript rendering logic. The project strengthened my understanding of DOM manipulation, event listeners, client-side routing, responsive styling and single page application structure.

Technologies used include HTML5, CSS3, JavaScript, DOM manipulation, hash routing, responsive media queries and accessibility attributes.

## Conclusion

The completed project demonstrates how a single page application can update content smoothly without requiring full page refreshes. It provides a foundation for developing more advanced web applications with routing, reusable components and dynamic data.
