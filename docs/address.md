# Address API Spec

## Create Address API Spec

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :
``` json 
{ 
    "stret" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "kode pos"
}
```

Request Body Success :
``` json 
{
    "data" : {
        { 
            "id" : 1,
            "stret" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country" : "Negara apa",
            "postal_code" : "kode pos"
        }
    }
}
```

Request Body Error :
``` json 
{ 
    "error" : "Country is required"
}
```

## Update Address API Spec

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :
``` json 
{ 
    "stret" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "kode pos"
}
```

Request Body Success :
``` json 
{
    "data" : {
        { 
            "id" : 1,
            "stret" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country" : "Negara apa",
            "postal_code" : "kode pos"
        }
    }
}
```

Request Body Error :
``` json 
{ 
    "error" : "Country is required"
}
```

## Get Address API Spec

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body Success :
``` json 
{
    "data" : {
        { 
            "id" : 1,
            "stret" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country" : "Negara apa",
            "postal_code" : "kode pos"
        }
    }
}
```

Request Body Error :
``` json 
{ 
    "error" : "Contact is not found"
}
```

## List Address API Spec

Endpoint : GET /api/contacts/:address

Headers :
- Authorization : token

Request Body Success :
Request Body Success :
``` json 
{
    "data" : {
        { 
            "id" : 1,
            "stret" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country" : "Negara apa",
            "postal_code" : "kode pos"
        },
        { 
            "id" : 2,
            "stret" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country" : "Negara apa",
            "postal_code" : "kode pos"
        }
    }
}
```

Request Body Error :
``` json 
{ 
    "error" : "Address is not found"
}
```
## Remove Address API Spec

Endpoint : Delete /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token 

Request Body Success :
```json
{
    "data" : "OK"
}
```

Request Body Error :
``` json 
{ 
    "error" : "Address is not found"
}
```