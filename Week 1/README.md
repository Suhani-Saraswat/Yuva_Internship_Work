# Week 1 Internship Task Report
## Transforming Wireframes into Static Web Pages

### 1. Project Overview

For the Week 1 internship task, I created a responsive static webpage using HTML5 and CSS3. Since no separate application wireframe or website data was supplied, I used the supplied task-screen concept as the visual reference and implemented a clean two-column interface containing the task information and a work-submission form.

### 2. Design Decisions

The page uses a two-column layout on larger screens. The left section presents the task objective, expected deliverables, key steps, and evaluation criteria. The right section contains the submission form, including file upload, GitHub URL, report description, and submit button. An orange accent was selected for interactive elements because it provides strong visual emphasis while maintaining the professional appearance of the reference.

Semantic HTML elements such as `main`, `section`, `article`, `header`, `aside`, `form`, `label`, `ul`, and `ol` were used to create a meaningful document structure. Form labels are connected to their corresponding controls to improve usability and accessibility.

### 3. Layout and Responsiveness

CSS Grid is used for the main two-column structure. The layout automatically changes to a single-column arrangement below 900px, making the content easier to read on tablets and smaller screens. A second media query below 560px reduces spacing and font sizes and changes the file-selection area into a vertical layout.

Flexible widths, relative spacing, `min-height`, and responsive typography were used instead of fixed page dimensions wherever possible. This allows the page to adapt to different viewport sizes without horizontal scrolling.

### 4. Challenges and Solutions

The main challenge was implementing the visual hierarchy without an exact standalone website wireframe. I solved this by treating the supplied task interface as the reference and maintaining its major visual relationships: left/right content separation, rounded form controls, orange call-to-action elements, muted helper text, and a highlighted information notice.

Another challenge was keeping the form usable on mobile screens. The solution was to stack the columns, make controls full width where necessary, and convert the file-selection row into a vertical layout.

### 5. Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Media Queries
- Basic JavaScript for displaying the selected file name

### 6. Conclusion

The completed implementation provides a clean, semantic, responsive static webpage and demonstrates the fundamental skills required for the first-week internship task. The project can be extended later with backend submission functionality, validation, authentication, and database integration if those features are required.
