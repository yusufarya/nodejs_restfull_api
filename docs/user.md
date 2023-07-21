# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

``` json
{
    "username" : "yad",
    "passrowd" : "rahasia",
    "name" : "Yusuf Aryadilla"
}
```

Request Body Success :
``` json
{
    "data" : {
        "username" : "yad",
        "name" : "Yusuf Aryadilla"
    }
}
```

Request Body Error :
``` json
{
    "error" : "Error"
}
```
## Login User API

Endpoint : POST /api/login

Request Body :

``` json
{
    "data" : {
        "username" : "yad",
        "passrowd" : "rahasia"
    }
}
```

Request Body Success :
``` json
{
    "data" : {
        <!-- session -->
        "token" : "unique-token"
    }
}
```

Request Body Error :
``` json
{
    "error" : "Username or Password Wrong"
}

## Update User ApI

Endpoint : PACTH /api/users/current

Headers :
Authorization : token

Request Body :

``` json
{
    "name" : "Yusuf Aryadilla Lagi", // optional
    "passrowd" : "newpassword" // optional
}
```

Request Body Success :
``` json
{
    "data" : {
        "username" : "yad",
        "name" : "Yusuf aryadilla"
    }
}
```

Request Body Error :
``` json
{
    "error" : "Name length max 100"
}

## Get User API

Endpoint : GET /api/users/current

Headers :
Authorization : token

Request Body Success :

``` json
{
    "username" : "yad",
    "name" : "Yusuf Aryadilla Lagi"
}
```

Request Body Error :
``` json
{
    "error" : "Unauthorized"
}

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
Authorization : token

Request Body Success :

``` json
{
    "data" : "OK"
}
```

Request Body Error :

``` json
{
    "error" : "Unauthorized"
}
```