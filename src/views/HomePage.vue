<template>
  <div class=" d-flex justify-content-center">
    <!-- <button @click="homePage()" class="btn btn-sm mx-4" >Home</button> -->
    <button  @click="loginPage()" class="btn btn-sm bg-dark" v-if="!tokenStatus">Login</button>
    <button  @click="logout()" class="btn btn-sm bg-dark" v-else-if="tokenStatus">Logout</button>
  </div>
    <div>
<!-- Whats New Start -->
<section class="whats-news-area pt-50 pb-20">
    <div class="container">
        <div class="row">
          <div class="alert alert-danger text-center" role="alert" v-if="!tokenStatus">
            You don't have permission for that data!
          </div>
            <div  v-else-if="tokenStatus">
              <div class="col-lg-12">
                <div class="row d-flex justify-content-between">
                    <div class="col-lg-3 col-md-3">
                        <div class="section-tittle mb-30">
                            <h3>Whats New</h3>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9">
                        <div class="properties__button">
                            <!--Nav Button  -->
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true"
                                    @click.prevent="searchCategory('') ">All</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="details.htmlnav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  v-for=" (category,index) in categoryList " :key="index"
                  @click.prevent="searchCategory(category.title) "
                  > {{ category.title }} </a
                >
              </div>
            </nav>
            <!--End Nav Button  -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class=" col-3 d-flex  my-3">
            <input type="text" name="" id="search" class="form-control" placeholder="search" v-model="searchKey" @keyup.enter="search() " >
            <i class="fa-solid fa-magnifying-glass mt-1 ms-1" id="search" style=" font-size: 30px" @click="search() "></i>
           </div>
          <!-- Nav Card -->
          <div class="tab-content" id="nav-tabContent">
            <!-- card one -->
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="whats-news-caption">
                <div class="row">
                    <div v-if="postList.length == 0" class="d-flex align-items-center rounded" style="height: 50vh;
                    background-color: #23232310">
                      <h2 class="text-danger mx-auto">There is no data!</h2>
                    </div>
                  
                  <div v-else-if="postList.length != 0" class="col-lg-6 col-md-6" v-for=" (post,index) in postList " :key="index">
                    <div class="single-what-news mb-100" @click="NewsDetails(post.post_id) ">
                      <div class="what-img">
                        <img
                          :src="post.image"
                          alt=""
                        />
                      </div>
                      <div class="what-cap">
                        <span class="color1">News</span>
                        <h4>
                          <a href="details.html"
                            > {{ post.title }} </a
                          >
                        </h4>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <!-- End Nav Card -->
        </div>
      </div>
    </div>
            </div>
 </div>
 </div>  
</section>
<!-- Whats New End -->

<!--Start pagination -->
<!-- <div class="pagination-area pb-45 text-center">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="single-wrap d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-start">
                            <li class="page-item">
                                <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
              ></a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="details.html">01</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="details.html">02</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="details.html">03</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
              ></a>
                                    </li>
                                    </ul>
                            </nav>
                            </div>
                        </div>
                    </div>
                </div>
</div> -->
<!-- End pagination  -->
    </div>
</template>

<script src="../js/home.js"></script>

