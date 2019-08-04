// // // console.log("1");
// // // console.log("2");

// // // setTimeout(() => {
// // //   console.log("fire callback function");
// // // }, 2000);

// // // console.log("3");
// // // console.log("4");

// // // const getTodos = resource => {
// // //   return new Promise((resolve, reject) => {
// // //     const request = new XMLHttpRequest();

// // //     request.addEventListener("readystatechange", () => {
// // //       if (request.readyState === 4 && request.status === 200) {
// // //         const data = JSON.parse(request.responseText);
// // //         resolve(data);
// // //       } else if (request.readyState === 4) {
// // //         reject("error getting resource");
// // //       }
// // //     });

// // //     request.open("GET", resource);
// // //     request.send();
// // //   });
// // // };

// // // getTodos("todos/luigi.json")
// // //   .then(data => {
// // //     console.log("promise 1 resolved:", data);
// // //     return getTodos("todos/shaun.json");
// // //   })
// // //   .then(data => {
// // //     console.log("promise 2 resolved", data);
// // //     return getTodos("todos/mario.json");
// // //   })
// // //   .then(data => {
// // //     console.log("promise 3 resolved", data);
// // //   })
// // //   .catch(err => {
// // //     console.log("promise rejected:", err);
// // //   });

// // // async & await

// // const getTodos = async () => {
// //   const response = await fetch("todos/luigis.json");

// //   if (response.status !== 200) {
// //     throw new Error("cannot fetch the data");
// //   }

// //   const data = await response.json();
// //   return data;
// // };

// // getTodos()
// //   .then(data => console.log("resolved:", data))
// //   .catch(err => console.log("rejected:", err));

// const loadCustomer = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "customer.json", true);

//   xhr.onload = function() {
//     if (this.status === 200) {
//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;

//       document.getElementById("customer").innerHTML = output;
//     }
//   };

//   xhr.send();
// };

// document.querySelector(".btn-1").addEventListener("click", loadCustomer);

// // Customers

// const loadCustomers = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "customers.json", true);

//   xhr.onload = function() {
//     if (this.status === 200) {
//       const customers = JSON.parse(this.responseText);

//       let output = "";

//       customers.forEach(customer => {
//         output += `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;
//       });

//       document.getElementById("customers").innerHTML = output;
//     }
//   };

//   xhr.send();
// };

// document.querySelector(".btn-2").addEventListener("click", loadCustomers);

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();

  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      if (response.type === "success") {
        response.value.forEach(joke => {
          output += `<li class='list-group-item'>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
}
