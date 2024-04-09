// for (let i = 0; i < 10; i++) {
//     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((response) => {
//         let valMail = response.data;
//         console.log(valMail);

//         let printResult = document.createElement('div');
//         console.log(printResult);

//         })
// }


const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')



