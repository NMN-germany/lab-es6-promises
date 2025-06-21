// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
// ...
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  // ... Your code here
    // ...
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`

      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`

        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`

          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          
            getInstruction("mashedPotatoes", 5, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`
            });  
          });    
       });     
      });             
    });
});  


// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here

  const step0 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    
  const step1 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

  const step2 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

  const step3 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

  const step4 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

  const step5 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

  const step6 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`

  const step7 = await obtainInstruction("broccoli", 7)
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`

  const step8 = await obtainInstruction("broccoli", 8)
    document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`
}
 makeBroccoli();


// Bonus 2 - Promise all
// ...
//const promises = [
  //obtainInstruction("brussels")
//