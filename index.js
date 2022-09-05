// Add your code here

const data = document.createElement("p")

function submitData(name, email)
{

    const formData = {
        name: name,
        email: email,
      };



const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
   
    // body of the function 
    return fetch("http://localhost:3000/users",configurationObject)
    .then( response => response.json())
    .then((object)  => {
        console.log(object)
        data.textContent = object.id;
        document.body.appendChild(data);
    })
    .catch( (error) => {
      console.log(error)
        alert("Error!!")
        data.textContent = error.message;
        document.body.appendChild(data);

    }
   )
}

submitData("Steve","steve@steve.com")






