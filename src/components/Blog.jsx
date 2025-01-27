

const Blog = ({title,author}) => {
  return (
    <div className=" p-4 bg-white shadow-xs mb-4 rounded">
        <h2 className="font-bold text-gray-600 text-xl">{title}</h2>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia deleniti necessitatibus veniam consequatur commodi vero voluptatem distinctio nisi, labore consectetur quasi suscipit voluptas nam officiis molestias vel earum magni dolor natus asperiores. Quo, perferendis inventore similique corporis accusantium fuga blanditiis. Cum ea cumque odit, iusto blanditiis placeat similique voluptatum.</p>
           <p>Author: <span className="font-bold text-gray-600 "> {author}</span></p>
    </div>
  )
}

export default Blog