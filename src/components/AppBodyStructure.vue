<template>
  <div>
    <div class="container text-center">
        <div class="row">
            <!-- <div class="col-xl-12"><button class="btn btn-primary">Header</button></div> -->
            <NavBar/>
        </div><br>

        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <SideBar/>
                    <!-- <button class="btn btn-outline-secondary">Center</button> -->
                </div>
                <div class="col-sm-5">
                    <AppContent/>
                </div>
                <div class="col-sm-4">
                    <RightNav/>
                </div>
            </div>
        </div>
    <br>
        <div class="row">
            <FooterComponent/>
        </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
import FooterComponent from './FooterComponent'
import AppContent from './AppContent'
import RightNav from './RightNav'

export default {
  name: "AppBodyStructure",
  components:{
      SideBar, NavBar, FooterComponent, AppContent, RightNav
  }
};
</script>

<style>
.btn{
    width:100%;
}
</style>

