# README

Clairvoyant is a full stack clone of Medium, a popular blog host with a mix of amateur and professional journalism. It allows users to post articles and read other users' articles. Users can comment, post, like, bookmark, and share as well. Articles and comments have full CRUD functionality, and users can search articles and filter by topic.

## Clairvoyant Stack:
* Backend: Ruby on Rails
  * Used for models, controllers, routes
  * Pases data to frontend via JBuilder/JSON
* Database: PostgreSQL
  * Connected to backend via a rails framework
* Image Hosting: AWS
  * Article images [and user icons] are stored on S3
* Frontend: Javascript + React/Redux
  * Written in Javascript
  * Uses React to render components and Redux for state management
* [APIs: ChatGPT]

## Installation
1. Clone the repository: git clone https://github.com/3anni/clairvoyant.git
2. Install the dependencies
  * From the root directory, run `bundle install`
  * From the frontend directory, run `npm install`
3. Seed and configure the database with rails commands using `seeds.rb` file
  * You'll need to have PostgreSQL installed and running
4. Run the application
  * From the root directory, run `rails server`
  * From the frontend, run `npm start`
  * In development mode, the frontend is served up on port 3000 and the backend on 5000
  * In production mode, the app is served on port 500

Production build: from the root folder, run `NPM run build`

## Selected Features and Development
Incorporating Rich Text Editing
- Incredible how easy the libraries made it, thanks to the creators of both.
- With Interweave Markup, you can limit which HTML elements are rendered
-- This makes it easy to switch how you format/render rich text in different places in your application
-- For instance, you can only show paragraphs, bolding. and italics in a summary feed with many [items] and show all formatting (bullets, blocks, etc.) in the view page for an individual [item]

### Custom Hooks
#### useStateChange
Wraps useState with an event handler for capturing text input.
```
const useStateChange = (initialValue) => {
  // Initialize useState
  const [value, setValue] = useState(initialValue);
  // Create changeHandler for input form
  const handleValue = e => {
    setValue(e.target?.value);
  }

  return [value, setValue, handleValue];
}

export default useStateChange;
```
Example Use:
```

```


```
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useSubmit = ({createAction, onSuccess}) => {
  const dispatch = useDispatch();
  let [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    setErrors([]);
    return dispatch(createAction())
      .catch(async res => {
          let data;
          try { data = await res.clone().json(); }
          catch { data = await res.text(); }

          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
      })
      .then(onSuccess)
  }

  return [errors, handleSubmit];
}

export default useSubmit;

```

### Reusable Components


### Rich Text Editing
The app combines React Quill and Interweave libraries to enable rich text editing.

### Animation


One day i'll think of how to do the animation at the bottom of this page:
https://medium.com/about

### Performance
I timed my react app using [ ]
In order to improve the app's efficiency and reduce the number of AWS pulls, I typically passed objectIds into components related to the object and place a useSelector in the object (prevents comments from all re-rendering when one is edited.) I noticed it was slow going to my backend (comments took a few moments to appear), so I instead added a commentValidation function on my front end that tested all the input the backend tested, then dispatched the comment to the store, and then sent it to the backend. if calling update, it would save the old comment. Then, based on the result from the backend (status: :ok or not), the comment would either (a) remain in store or (b) revert to its previous form.
Also, I edited my article store to nest both articles and article, such that it would not reload the articles every time it returned to the index page from the show page (cause these articles would.
In order to improve the app's efficiency and reduce the number of AWS pulls, I typically passed objectIds into components related to the object and place a useSelector in the object (prevents comments from all re-rendering when one is edited.) I noticed it was slow going to my backend (comments took a few moments to appear), so I instead added a commentValidation function on my front end that tested all the input the backend tested, then dispatched the comment to the store, and then sent it to the backend. if calling update, it would save the old comment. Then, based on the result from the backend (status: :ok or not), the comment would either (a) remain in store or (b) revert to its previous form.be being used in many places.


### CSS
I kept trying to refactor/abstract my CSS in the same way I would refactor/abstract React components, but I found this to be a difficult errand / not as efficient. I experimented with a few different approaches to className [attribute?]s, but I found the best option was to do the following:
1) Give everything a simple parent class such as: "btn"/"button", "text-input", "user-tile" and store as much shared styling as possible here
2) optionally, give elements additional shared tags, for instance className="btn edit"/"btn modal"/"btn close"/"btn delete" and additional identifiers
3) Meanwhile, give components/subcomponents very short names describing exacly what they do.
```
 return (
    <div className='comment-index-item'>
      <div className='author'>
        <div className='left'>
          <div className='image'>
            <FaUserCircle className="user-icon"
              size="30px"
              style={styleOptions}
            />
            <div className='name-and-date'>
              <div className='name'>
                {comment.authorName}
              </div>
              <div className='date'>
                {comment.date}
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          {isAuthor && (
          <Tooltip>
            <Button className="btn edit"
                    label="Edit this response"
                    onClick={handleEdit}/>
            <Button className="btn delete"
                    label="Delete"
                    onClick={handleDelete}/>
          </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
```
This way, you can share functionality like
```
.btn {
 cursor: pointer;
}

.btn:hover {
 box-shadow: 0 0 2px #bbb;
}

.btn.modal {
 border: 2px solid #444;
 border-radius: 2px;
}

.btn.edit {
 boder: 2px solid #8AF;
 margin: 5px;
}
```
easily grab big elements
```
.comment-index-item {

}

```
along with specific ones
```
.comment-index-item .author .name {
 font: var(-ff-sohne);
 font-weight: 200;
}

```
For storing CSS files, keep variables in index.css. Have a file for each component with default behavior where it's initially used (strip out unreused parts of CSS later if component is used elsewhere).
I am in process of updating my application throughout to follow this convention but would love to know if there's a better way.







This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
