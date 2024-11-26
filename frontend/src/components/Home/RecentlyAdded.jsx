import React, { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
import pic1 from "../../assests/pic1.png";
import axios from "axios";
const RecentlyAdded = () => {
  const [Books, setBooks] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-recent-books"
      );
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {Books && (
        <div className="bg-zinc-900 px-12 py-8">
          <h1 className="text-yellow-100 text-3xl">Recently Added Books</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 mt-8">
            {Books.map((items, i) => (
              <BookCard
                bookid={items._id}
                image={items.url}
                title={items.title}
                author={items.author}
                price={items.price}
                key={i}
              />
            ))}
          </div>
          <div className='flex justify-center my-8'>
    <h4 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 shadow-md'>
      To Explore More, Kindly SignUp/Login Above
    </h4>
  </div>
      <div className='my-4'>
        <img src={pic1}alt="Description of the image" className="mx-auto" />

      </div>
        </div>
      )}
    </>
  );
};

export default RecentlyAdded;
