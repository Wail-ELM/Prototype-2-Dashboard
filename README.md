# Prototype-2-Dashboard
## **Project Overview**

This project is a student dashboard developed using **React** and **styled-components**. The main goal is to provide a modern, user-friendly interface for managing and viewing student information. Key features include filtering, pagination, CSV/PDF export, and data visualization using **Chart.js**.

## **Features**

- **Student List with Pagination and Filtering**: View students with options to filter by year and paginate for better navigation.
- **Export Data**:
  - **CSV**: Export student data as a CSV file.
  - **PDF**: Export student data in a structured PDF format.
- **Charts and Data Visualization**: 
  - Display course average grades in bar and radar charts.
- **Theme Switcher**: Light and dark themes are supported for better accessibility.

## **Technologies and Libraries**

- **React**: For building reusable UI components.
- **Styled-components**: For dynamic and modular styling based on themes.
- **Chart.js**: For creating data visualizations.
- **json2csv**: To export data to CSV format.
- **jsPDF**: To generate and export data as a PDF.
- **React-Router**: For multi-page navigation within the dashboard.

## **Installation and Setup**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd student-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## **Component Structure**

- **App.js**: Main component that handles routing and theme switching.
- **StudentsPage.js**: Shows a list of students with options for filtering, exporting, and viewing details.
- **TeachersPage.js, HomePage.js, CoursesPage.js**: Additional pages to provide comprehensive information and navigation.
- **StudentPerformanceChart**: A reusable component to render student performance data in radar and bar charts.

## **How to Use**

1. **Filter Students**: Select a year to filter the student list by the selected grade.
2. **View Performance**: Click on a student’s “View Performance” button to open a modal with performance details in a radar chart.
3. **Export Data**:
   - Click **"Export to CSV"** to download the visible student data as a CSV file.
   - Click **"Export to PDF"** to download the student data as a PDF file.
4. **Toggle Theme**: Use the "Toggle Theme" button to switch between light and dark themes.

## **Known Issues**

- **Performance with Large Datasets**: For larger datasets, the application might experience a slower response time. Pagination is applied to mitigate this, but further optimization may be needed for significantly larger data sets.
- **Chart.js Configuration**: Issues with chart scale registration were encountered and resolved by ensuring all necessary scales are imported.

## **Future Enhancements**

- **Advanced Filtering**: Add options to filter students by course performance or other criteria.
- **Testing and Validation**: Integrate testing frameworks to ensure component reliability and application stability.

## **Resources**

- **[React Documentation](https://reactjs.org/docs/getting-started.html)**: For foundational understanding of components and hooks.
- **[Styled-components Documentation](https://styled-components.com/docs)**: Guidance on dynamic styling and theme implementation.
- **[Chart.js Documentation](https://www.chartjs.org/docs/latest/)**: Instructions on creating charts and data visualizations.
- **[Stack Overflow](https://stackoverflow.com/)**: Helpful for troubleshooting specific issues related to jsPDF and CSV export.
- **[jsPDF Documentation](https://github.com/parallax/jsPDF)**: Reference for generating structured PDF documents.
- **ChatGPT (OpenAI)**: Additional guidance and troubleshooting assistance for project implementation.

