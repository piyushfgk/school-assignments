# School Assignments

A comprehensive collection of educational resources and practice sheets organized by class, subject, and topic with full navigation support.

## 🚀 Quick Start

1. **Start Here**: Open [index.html](index.html) in your browser
2. **Navigate**: Use the breadcrumb navigation to explore different levels
3. **Practice**: Access worksheets and complete assignments
4. **Print**: All worksheets are optimized for printing

## 📚 Navigation Structure

The website features a complete hierarchical navigation system:

```
School Assignments (Root)
├── Class 1
│   └── Mathematics
│       └── Sums
│           └── Two Digit Carry Mixed
│               └── Practice Sheet 01
```

### 🧭 Navigation Features

- **Breadcrumb Navigation**: See your current location at all times
- **Clickable Paths**: Click any part of the breadcrumb to navigate back
- **Back Buttons**: Quick navigation buttons on practice sheets
- **Print-Friendly**: Navigation elements hidden when printing

## 📖 Available Assignments

### Class 1 - Mathematics

#### Sums

| # | Topic | Description | Link |
|---|-------|-------------|------|
| 1 | Two Digit Carry (Re Grouping) and Non Carry Mixed | Mixed two-digit addition problems with both carry and non-carry scenarios. Includes 15 practice problems with space for answers. | [View Worksheets](class-1/maths/sums/two-digits-carry-mixed/) |

## 🎯 About This Repository

This repository contains educational assignments and practice materials for students. Each assignment is designed to be:

- **Print-friendly**: Optimized for printing on standard A4 paper
- **Student-focused**: Clear instructions and engaging content
- **Progressively structured**: Organized by difficulty and learning objectives
- **Fully Navigable**: Complete navigation system with breadcrumbs

## 📖 How to Use

1. **Start at the Root**: Open `index.html` in your browser
2. **Navigate by Level**: Click through Class → Subject → Topic → Worksheet
3. **Use Breadcrumbs**: Click any part of the breadcrumb path to go back
4. **Print Worksheets**: Use the print function - navigation elements are automatically hidden
5. **Back Navigation**: Use back buttons on practice sheets for quick return

## 🔗 Repository Structure

```
school-assignments/
├── index.html                           # Root navigation page
├── class-1/
│   ├── index.html                       # Class 1 navigation
│   └── maths/
│       ├── index.html                   # Mathematics navigation
│       └── sums/
│           ├── index.html               # Sums navigation
│           └── two-digits-carry-mixed/
│               ├── index.html           # Topic navigation
│               └── sheet_01.html        # Practice worksheet
└── README.md
```

## 📝 Adding New Assignments

When adding new assignments, please follow this structure:

1. **Create Directory Structure**: `class-{number}/subject/topic/`
2. **Add Index Pages**: Create `index.html` for each level
3. **Include Navigation**: Add breadcrumb navigation to all index pages
4. **Update Parent Pages**: Add links to new content in parent index pages
5. **Follow Styling**: Use consistent black and white theme
6. **Print Optimization**: Ensure worksheets are print-friendly

### Required Files for Each Level:
- `index.html` - Navigation page with breadcrumbs
- `sheet_XX.html` - Practice worksheets (if applicable)

## 🌟 Features

### Navigation
- **Hierarchical Structure**: Clear organization by class, subject, and topic
- **Breadcrumb Navigation**: Visual path showing current location
- **Back Buttons**: Quick navigation on practice sheets
- **Print-Friendly**: Navigation hidden during printing

### Design
- **Consistent Theme**: Black and white professional design
- **Responsive Layout**: Works on desktop and mobile devices
- **Full Width**: Utilizes full browser width for better content display
- **Clean Typography**: Easy-to-read fonts and spacing

### Educational Focus
- **Age-Appropriate Content**: Designed for specific grade levels
- **Clear Instructions**: Step-by-step guidance for students
- **Practice Space**: Adequate space for written answers
- **Engaging Content**: Motivational messages and clear formatting

## 🖨️ Printing

All worksheets are optimized for printing:
- **A4 Format**: Standard paper size compatibility
- **Clean Layout**: No navigation elements in print
- **Proper Margins**: Adequate spacing for binding
- **High Contrast**: Black text on white background

## 🔧 Technical Details

- **HTML5**: Modern semantic markup
- **CSS3**: Responsive design with print media queries
- **No Dependencies**: Pure HTML/CSS, no external libraries
- **Cross-Browser**: Compatible with all modern browsers

---

*Last updated: December 2024*
