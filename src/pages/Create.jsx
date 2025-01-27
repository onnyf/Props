const Create = () => {
  return (
    <main className="bg-gray-100 flex items-center min-h-screen flex-col">
      <div className="mt-20">
      <h2 className="text-center font-bold text-2xl underline text-slate-800">Add a blog</h2>
      <form action="" className="shadow-xl p-10 bg-white rounded mt-10">
        <div>
          <label htmlFor="">Title:</label>
          <input className='rounded shadow-xs p-2 bg-gray-100 w-full mb-2' type="text" placeholder="Title" />
        </div>


        <div>
            <label htmlFor="">Content</label>
            <textarea className=" h-20 w-full bg-gray-100 shadow-xs p-2 mb-2" name="" id=""></textarea>
        </div>

        <div>
         {/* <label htmlFor="">Image</label> */}
         <input className="bg-gray-100 p-2 shadow-xs mb-2" type="file" />

        </div>

        <div>
            <label htmlFor="">Author:</label>
            <select className=" ms-2 bg-gray-100 p-2 shadow-xs" name="" id="">
                <option value="">Gbenga</option>
                <option value="">Alex</option>
                <option value="">Ehis</option>
            </select>
        </div>
        <button className="w-full py-1 text-center rounded bg-blue-500 hover:bg-blue-300 mt-4 text-white" type="submit">Add blog</button>
      </form>
      </div>
    </main>
  );
};

export default Create;
