Next js | Tailwind | TypeScript assingment

This project is built with Next.js, Tailwind CSS, and TypeScript, following the atomic structure for component organization. The atomic structure helps to split the code into modular and reusable components, making the project more maintainable and scalable.

Installation

To install the project, follow these steps:

Ensure you have Node.js installed on your system.
Clone this repository to your local machine.
Open a terminal and navigate to the project directory.
Run the following command to install the dependencies:
bash

yarn install
# or
npm install
Getting Started

To start the project, use the following command:

bash

yarn dev
# or
npm run dev
This will start the development server, and you can access the application by navigating to http://localhost:3000 in your web browser.

Technologies Used

Next.js - A React framework for server-side rendering, static site generation, and more.
Tailwind CSS - A utility-first CSS framework for rapid UI development.
TypeScript - A typed superset of JavaScript that improves code robustness and maintainability.
Project Structure

The project follows the atomic design pattern for organizing components. The atomic design structure categorizes components based on their complexity and promotes code reusability. The structure typically consists of the following layers:

Atoms: Contains the smallest and simplest components, such as buttons, input fields, etc.
Molecules: Combinations of atoms that form more complex UI elements, such as a search bar.
Organisms: Groups of molecules and atoms that form complete sections or blocks of UI, such as a header or footer.
Templates: Layout structures that compose various organisms to create a page's overall design.
Pages: Actual pages of the application that use templates and organisms to render the content.

|-- components
    |-- atoms
        |-- IconPlus.tsx
        |-- pills.tsx
        |-- text.tsx
    |-- molecules
        |-- addProducts.tsx
    |-- organisms
        |-- cardInfo.tsx
        |-- layout.tsx
        |-- tabSection.tsx
    |-- pages
        |-- index.tsx
|-- styles
    |-- global.css
|-- ...
|-- next.config.js
|-- package.json
|-- ...

Feel free to explore the components directory to understand how the atomic structure has been implemented.

Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please create a pull request or open an issue on this repository.

License

This project is licensed under the MIT License.