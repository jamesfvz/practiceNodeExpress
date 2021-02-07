# practiceNodeExpress

Is a project to practice about NodeJs and Express.

step 1: should be to install express,etc.

step 2:
<strong>To delete and create the data base with mongoDb execute : "npm run initdb" </strong>

step3: to execute the api: "npm run dev"

The requests from url are:

- localhost:3000/ (Get method) to list all products in ejs format
- localhost:3000/api/ads (Get method) to list all products in Json format
- localhost:3000/api/ads/601e8b4058980109745d0c2a (Get method) show a product by id
- localhost:3000/api/ads/ (Post method) to insert a new product
- localhost:3000/api/ads/601f2766a6e8a2148f45b1dd (Put method) to modify a product (by id)
- localhost:3000/api/ads/601f24dba6e8a2148f45b1db (Delete method) to delete a product (by id)
- localhost:3000/?start=1&limit=3&sort=name&tag=lifestyle is a example of request with filters.
- localhost:3000/api/tags to show all tags with distinct
