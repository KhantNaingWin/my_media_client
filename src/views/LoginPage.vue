<template>
    <div>
      <div class=" d-flex justify-content-center">
        <button @click="homePage()" class="btn btn-sm mx-4" >Home</button>
        <button  @click="loginPage()" class="btn btn-sm bg-dark" v-if="!tokenStatus">Login</button>
        <button  @click="logout()" class="btn btn-sm bg-dark" v-else-if="tokenStatus">Logout</button>
      </div>
          <div class="container col-5 shadow-sm my-5 p-3">
            <div class="alert alert-danger" role="alert" v-if="!loginStatus">
              Your email or password are wrong!Try Again.
            </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" v-model="userData.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" v-model="userData.password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="button" class="btn btn-primary btn-sm" @click="accountLogin() ">Login</button>
              
          </div>
    </div>
</template>

<script src="../js/login.js"></script>