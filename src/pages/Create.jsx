import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null); 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form submission logic, e.g., uploading data to an API
    console.log({ title, content, author, image });

    setTitle('');
    setContent('');
    setAuthor('');
    setImage(null);
  };

  return (
    <main className="bg-gray-100 flex items-center min-h-screen flex-col">
      <div className="mt-20">
        <h2 className="text-center font-bold text-2xl underline text-slate-800">
          Add a blog
        </h2>
        <form onSubmit={handleSubmit} className="shadow-xl p-10 bg-white rounded mt-10">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              id="title"
            />
          </div>

          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              className="h-20 w-full bg-gray-100 shadow-xs p-2 mb-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your content here..."
              id="content"
            />
          </div>

          <div>
            <label htmlFor="image">Image:</label>
            <input
              className="bg-gray-100 p-2 shadow-xs mb-2"
              type="file"
              id="image"
              onChange={handleImageChange} // Update image state
            />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <select 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              className="ms-2 bg-gray-100 p-2 shadow-xs" 
              id="author"
            >
              <option value="">Select Author</option>
              <option value="Gbenga">Gbenga</option>
              <option value="Alex">Alex</option>
              <option value="Ehis">Ehis</option>
            </select>
          </div>

          <button
            className="w-full py-1 text-center rounded bg-blue-500 hover:bg-blue-300 mt-4 text-white"
            type="submit"
          >
            Add blog
          </button>
        </form>
      </div>
    </main>
  );
};

export default Create;
