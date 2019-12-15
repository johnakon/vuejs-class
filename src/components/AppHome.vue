<template>
    <div class="text-center">
        <h1>Welcome home</h1>
                <!-- <p>to be continued</p> -->
        <div v-if="display" id="Partners" class="container">
          <h1>Project partners</h1>
          <!-- test -->
          <p v-if="passed">Congz You have passed</p>
          <p v-else-if="probation">asap, what happened</p>
          <p v-else>sorry</p>

          <ul class="container">
            <!-- instead of manually having this -->
             <!-- <li>Refactory</li> 
             <li>Laboremus</li> 
             <li>Fontes</li> 
             <li>Clarke International university</li>  -->

             <!-- <li v-for="partner in partners">{{partner}}</li> -->

             <li v-for="partner in partners" v-bind:key="partner">{{partner}}</li>

          </ul>
          <div class="col-sm-2">
            <button class="btn btn-success" v-on:click="addPartner">Add Partners</button>
          </div>
        </div>

        <hr/>

    </div>
</template>
<script>
export default {
  name: "AppHome",
  // data:{
  //   partners : {
  //     name : " ", location : " ", id : ""
  //   }
  // }

  data:() => {
       return{ 
         display: true,
         partners:["Refactory", "Laboremus", "Fontes", "Clarke International university"],
         passed: false,
        //  passed: false
        probation: true
       }
   },

   //methods

   // methods(){}
   methods :  {
          addPartner : () => {
            alert("You added a partner")
     }
   }


}
</script>


<style>
#Partners{
  text-align:left
}
</style>