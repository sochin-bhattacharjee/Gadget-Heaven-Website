# Gadget Heaven - E-commerce Web App

Welcome to **Gadget Heaven**! This is a React-based e-commerce web app that allows users to browse gadgets, add them to their cart, and make purchases. 

## Live Website Link
[Live Website: Gadget Heaven](https://gadget-heaven-sb.surge.sh/)

## Requirements Document
[Requirement Document Link](https://acrobat.adobe.com/id/urn:aaid:sc:ap:394234a6-dc02-4643-9490-ac8620410ee8)

## React Fundamental Concepts Used in the Project
This project utilizes several React fundamental concepts to provide a smooth and dynamic user experience. The key concepts include:

- **Components**: Components are the building blocks of the UI. Each part of the app (product card, cart, wishlist) is created as a reusable component.
- **State and Props**: The app uses state to manage data and props to pass data between components.
- **useState Hook**: Used for managing state within functional components.
- **useEffect Hook**: Used to perform side effects like fetching data and updating the component when state changes.
- **Conditional Rendering**: Used to render different UI elements based on the current state of the app (e.g., cart items, empty cart message, etc.).
- **React Router**: Used for routing between pages (Product details, Cart, Wishlist, etc.).
- **Event Handling**: Handling user interactions such as adding products to the cart or wishlist, sorting products, and deleting items from the cart.
  
## Data Management
For handling and managing the data, we use:

- **Local Storage**: The app utilizes the browser's local storage to save cart and wishlist items. When a user adds an item to the cart or wishlist, it is saved in local storage so that it persists even when the page is reloaded.
- **React Context API (Optional)**: If you need global state management across the app, the Context API can be used. However, this project mainly relies on local storage for state persistence.

## Features of the Website
Here are 5 features of the **Gadget Heaven** website:

1. **Product Catalog**: Users can browse a wide range of gadgets with details like price, description, and specifications.
2. **Add to Cart/Wishlist**: Users can add products to their cart or wishlist, which are saved in the local storage.
3. **Sort by Price**: The products in the cart can be sorted by price in descending order with a simple click.
4. **Delete Items from Cart**: Users can remove products from their cart, and the cart state will update accordingly.
5. **Modal Confirmation for Purchase**: When a user clicks on the "Purchase" button, a modal appears asking for confirmation before clearing the cart and finalizing the purchase.

## Installation & Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/gadget-heaven.git
    ```

2. Navigate to the project directory:

    ```bash
    cd gadget-heaven
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm start
    ```

    This will start the app in development mode. Open your browser and go to `http://localhost:3000` to view the app.

## Technologies Used

- React.js
- React Router for page routing
- TailwindCSS for styling
- Local Storage for cart and wishlist persistence

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
