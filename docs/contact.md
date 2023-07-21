# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :
``` json
{
    "data" : 
    {
        "id" : 1,
        "first_name" : "Yusuf",
        "last_name" : "Aryadilla",
        "email" : "yusufaryadilla29@gmail.com",
        "phone" : "089790890900"
    }
}
```

Request Body Success :
``` json
{
    "data" : 
    {
        "id" : 1,
        "first_name" : "Yusuf",
        "last_name" : "Aryadilla",
        "email" : "yusufaryadilla29@gmail.com",
        "phone" : "089790890900"
    }
}
```

Request Body Error :
``` json
{
    "error" : "Email is not valid format"
}

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body :
``` json 
{
    "id" : 1,
    "first_name" : "Yusuf",
    "last_name" : "Aryadilla",
    "email" : "yusufaryadilla29@gmail.com",
    "phone" : "089790890900"
}
```

Request Body Success :
``` json 
{
    "data" : 
    {
        "id" : 1,
        "first_name" : "Yusuf",
        "last_name" : "Aryadilla",
        "email" : "yusufaryadilla29@gmail.com",
        "phone" : "089790890900"
    }
}
``` 

Request Body Error :
``` json
{
    "error" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

Request Body Success :
``` json
{
    "data" : 
    {
        "id" : 1,
        "first_name" : "Yusuf",
        "last_name" : "Aryadilla",
        "email" : "yusufaryadilla29@gmail.com",
        "phone" : "089790890900"
    }
}
``` 

Request Body Error :
``` json
{
    "error" : "Contact is not found"
}

## Search Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Query params :
- name : search by first_name or last_name, using like // optional
- email : search by email, using like // optional
- phone : search by phone, using like // optional
- page : number of page, default 1
- size : size per page, default 10

Request Body Success :
``` json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Yusuf",
            "last_name" : "Aryadilla",
            "email" : "yusufaryadilla29@gmail.com",
            "phone" : "089790890900"
        },
        {
            "id" : 2,
            "first_name" : "Yusuf",
            "last_name" : "Arya",
            "email" : "yusufaryadilla29@gmail.com",
            "phone" : "089790890900"
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_record" : 30
    }
}
```

Request Body Error :
``` json
{
    "error" : "Username or Password Wrong"
}

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :
- Authorization : token

Request Body Success :
``` json
{
    "data" : "OK"
}
```

Request Body Error :
``` json
{
    "error" : "Contact is not found"
}