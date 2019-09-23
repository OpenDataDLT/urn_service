# URN Service

## ENV VARIABLE

```sh
const PORT = process.env.PORT || 5000;
const ODPID_SERVICE = process.env.ODPID_SERVICE || "http://localhost:3000";
const EXPLORE_SERVICE = process.env.EXPLORE_SERCICE || "http://localhost:8080";
const URN_PROTOCOL = process.env.URN_PROTOCOL || "did" ;
const URN_TYPE = process.env.URN_TYPE || "odpid" ;
```
***EXPLORE_SERVICE is hyperledger explorer UI endpoint***

***Create URN:***

***[POST]***

***/***

***Request body***

```sh
{
	"dataset_name": "test",
	"dataset_type": "dsada"
}
```

***output*** 

```sh
{
    "transactionHash": "1eafa1d0f507742c231d07fe28b5790fb774d317b148e9e7df82320239e36c12",
    "uuid": "804518ef-277e-4f76-91a9-860143c21a2a",
    "Address": "0xdc4168e7245d962988723ab97b20eb87bd6a8890",
    "urn": "did:odpid:804518ef-277e-4f76-91a9-860143c21a2a"
}
```


***RESOLVE URN:*** 

***[GET]***

***/:urn***

***output***

```sh
{
    "parsed": {
        "protocol": "did",
        "type": "odpid",
        "resource": "804518ef-277e-4f76-91a9-860143c21a2a"
    },
    "formatted": "did:odpid:804518ef-277e-4f76-91a9-860143c21a2a",
    "validationErrors": null,
    "match": true,
    "url": "http://localhost:8080",
    "href": "http://localhost:8080/804518ef-277e-4f76-91a9-860143c21a2a"
}
```

***har preet singh***