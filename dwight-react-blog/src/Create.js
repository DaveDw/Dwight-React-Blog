import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("David Dwight")
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog) 
        }).then(() => {
            console.log('added blog');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Blog Body:</label>
                <textarea
                    required 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="David Dwight"></option>
                    <option value="Chandra Dwight"></option>
                    <option value="Anthony Dwight"></option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding Blog...</button>}
                
                <h2>{title}</h2>
                <p>{body}</p>
                <h6>{author}</h6>
            </form>
        </div>
    );
}
 
export default Create;