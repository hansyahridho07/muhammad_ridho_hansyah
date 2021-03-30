## **RESTful endpoints**

---

- **POST /users**

  _Request Headers_

  ```
  no needed
  ```

  _Request Body_

  ```js
  userName: user1;
  accountNumber: 12345;
  emailAddress: user1@mail.com;
  identityNumber: 67890
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    {
      access_token;
    }
    ```
    **_Error_**
  - **(400) - Bad Request**
    ```js
    {
      message: "Data canot be empty";
    }
    ```
    **OR**
  - **(500) - Internal server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```

---

- **GET /users**

  _Request Headers_

  ```
  access_token
  ```

  _Request Body_

  ```
  no needed
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    [
      {
        _id: 6127384932,
        userName: user1,
        accountNumber: 12345,
        emailAddress: user1@mail.com,
        identityNumber: 67890
      },
      {
        _id: 6127344931,
        userName: user2,
        accountNumber: 23456,
        emailAddress: user2@mail.com,
        identityNumber: 78901
      }
    ]
    ```
    **_Error_**
  - **(401) - Unauthorized**

    ```js
    {
      message: "Invalid token";
    }
    ```

    **OR**

  - **(500) - Invalid server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```

---

- **GET /users/id/:id**

  _Request Headers_

  ```
  access_token
  ```

  _Request Body_

  ```
  no needed
  ```

  _Request params_

  ```js
  req.params.id;
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    {
      _id: 6127384932,
      userName: user1,
      accountNumber: 12345,
      emailAddress: user1@mail.com,
      identityNumber: 67890
    }
    ```
    **_Error_**
  - **(401) - Unauthorized**

    ```js
    {
      message: "Invalid token";
    }
    ```

    **OR**

  - **(404) - Data Not Found**

    ```js
    {
      message: "Data not found";
    }
    ```

    **OR**

  - **(500) - Invalid server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```

---

- **GET /users/accountNumber/:account**

  _Request Headers_

  ```
  access_token
  ```

  _Request Body_

  ```
  no needed
  ```

  _Request params_

  ```js
  req.params.account;
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    {
      _id: 6127384932,
      userName: user1,
      accountNumber: 12345,
      emailAddress: user1@mail.com,
      identityNumber: 67890
    }
    ```
    **_Error_**
  - **(401) - Unauthorized**

    ```js
    {
      message: "Invalid token";
    }
    ```

    **OR**

  - **(404) - Data Not Found**

    ```js
    {
      message: "Data not found";
    }
    ```

    **OR**

  - **(500) - Invalid server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```

---

- **GET /users/identityNumber/:identity**

  _Request Headers_

  ```
  access_token
  ```

  _Request Body_

  ```
  no needed
  ```

  _Request params_

  ```js
  req.params.identity;
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    {
      _id: 6127384932,
      userName: user1,
      accountNumber: 12345,
      emailAddress: user1@mail.com,
      identityNumber: 67890
    }
    ```
    **_Error_**
  - **(401) - Unauthorized**

    ```js
    {
      message: "Invalid token";
    }
    ```

    **OR**

  - **(404) - Data Not Found**

    ```js
    {
      message: "Data not found";
    }
    ```

    **OR**

  - **(500) - Invalid server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```

---

- **PUT /users/:id**

  _Request Headers_

  ```
  access_token
  ```

  _Request Body_

  ```js
  userName: user1;
  accountNumber: 12345;
  emailAddress: user1@mail.com;
  identityNumber: 67890
  ```

  _Request params_

  ```js
  req.params.id;
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    {
      message: "Success edit";
    }
    ```
    **_Error_**
  - **(401) - Unauthorized**

    ```js
    {
      message: "Invalid token";
    }
    ```

    **OR**

  - **(401) - Unauthorized**
    ```js
    {
      message: "You not authorize";
    }
    ```
    **OR**
  - **(404) - Data Not Found**
    ```js
    {
      message: "Data not found";
    }
    ```
    **OR**
  - **(500) - Invalid server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```

---

- **DELETE /users/:id**

  _Request Headers_

  ```
  access_token
  ```

  _Request Body_

  ```
  no needed
  ```

  _Request params_

  ```js
  req.params.id;
  ```

  _Response_

  **_Success_**

  - **(200) - OK**
    ```js
    {
      message: "Success delete";
    }
    ```
    **_Error_**
  - **(401) - Unauthorized**

    ```js
    {
      message: "Invalid token";
    }
    ```

    **OR**

  - **(401) - Unauthorized**
    ```js
    {
      message: "You not authorize";
    }
    ```
    **OR**
  - **(404) - Data Not Found**
    ```js
    {
      message: "Data not found";
    }
    ```
    **OR**
  - **(500) - Invalid server error**
    ```js
    {
      message: "Invalid server error";
    }
    ```
