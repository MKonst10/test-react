export default function Books({ books }) {
  return (
    <ul>
      {books.map((book) => {
        return <li key={books.id}>{book.name}</li>;
      })}
    </ul>
  );
}
