# Greek and Roman Mythology

API containing JSON data about humans, places, and God(desse)s that appear in the works of Virgil, searchable by id, name, and work they appear in. Built using MongoDB, Mongoose, Express, and Body-Parser. 

- URL  
  /list (Displays the full list of entities)  
  /list/:id (Allows search by specific id)  
   /list/name/:name (Allows search by name)  
   /list/work/:work (Allows search by work)

- Method  
  `Get`

- URL Params  
  Required:

```
id = string
name = string
work = string
```
