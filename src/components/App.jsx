import "./App.css";
import Product from "./Product";
import Books from "./Books";
import { Alert } from "./Alert";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <div>
      <>
        <Alert variant="info" outlined>
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error">
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
      </>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <h1>Books of the week</h1>
      <Books books={favouriteBooks} />
    </div>
  );
}
