# CRUD APP - Blog 
## Home page (GET method):
1) Define useState and useEffect in the component that we want to grab the data from database and make dynamic changes. 
    ```
    const [blogs,setBlogs] =useState([])
    const fetchBlogs = async()=>{
        const response = await axios.get("http://localhost:3000/blog")
        setBlogs(response.data.data)  
    }

    useEffect(()=>{
     fetchBlogs()   
    },[])
    ```

Here, we made:

* useState as blogs which will hold all the data from the database

* useEffect that gives us a fetchBlogs function which will run the logic to retrieve data from db

* axios - a popular library used to handle HTTP requests. (postman like api hitting)

* setBlogs(response.data.data), to dynamically update the value of blog variable by referencing the response from that get request. Response will return an object data which contains another object as data(this is defined in backend upon defining the route for get request) so we used, response.data.data to retrieve exact data present in database. It will return the same response as in the postman application. <br>


2) Use CORS in backend to let the frontend communicate and retrieve data from db using backend logic <br>
    ```
    const cors = require('cors')
    app.use(cors(
    {
        origin : ["http://localhost:5173"]
    }
    ))
    ```
<br>
Here, we made:

* Use the link of frontend which need to communicate to backend and access database. <br>
Note:- make sure that the link must match as in frontend url. <br>

3) Use props & props destruction method to pass data from backend and update it in frontend dynamically.
    ```
    {
        blogs.map(function(blog){
            return(
                <Card blog={blog}/>
            )
        })
    }
    ```
<br>
Here we:

* Used map function to run a loop for the array of objects which is stored as blogs. Using this map function, it will retrieve the individual blog details from the list of blogs present in the database (first obj to last, one after another) <br>

* Used Card component here by passing a argument `blog` whose value is retrieved in above step. Now, while calling the Card component, the value of blog is passed which is then grabbed by either in:
    ```
    original state as :
    'Function Card(props)'  ->  {props.blog.title} 
    or by destructing it as 
    'Function Card({blog})' -> {blog.title}
    For image file:
    <img src= {'backendURL' + blog.image} />
    ```


