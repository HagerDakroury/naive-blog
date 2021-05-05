Welcome to the simplest ugliest blog on earth!

 A nodeJs microservice-based backend with a simple custom event-bus with a react client.
 
 
 ### Services
 **Posts:** For creating and deleting posts.
 
 **Comments:** For creating comments associated with a post.
 
 **Query:** For aggregating the posts and comments end points to a single end point the client can call.
 
 **Event-bus:** a simple event bus to emit events to the services.
 
 
 
 ### Structure 
 
 ```
app
├── client
│   └── src
│       ├── App.js
│       ├── postCreate.js
│       ├── postList.js
│       ├── commentCreate.js
│       ├── commentList.js
├── posts
│   └── index.js
├── comments
│   └── index.js
├── query
│   └── index.js
└──  event-bus
    └── index.js
```
