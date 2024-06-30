<script setup>
    import UserSideNav from '../Pages/Components/UserSideNav.vue'
    // window.onload = () => alert('yessss') //document.getElementById('minimize_bar').click()
</script>









<template>
  <div>
    <div class="container-scroller">

      <!-- partial:partials/_sidebar.html -->
      <UserSideNav />
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_navbar.html -->
        <nav
          class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
        >
          <div class="navbar-menu-wrapper d-flex align-items-stretch">
            <button id="minimize_bar"
              class="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle=""
            >
              <span class="mdi mdi-chevron-double-left"></span>
            </button>
            <div
              class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
            >
              <a class="navbar-brand brand-logo-mini" href="index.html"
                ><img src="../assets/images/logo-mini.svg" alt="logo"
              /></a>
            </div>
            <ul class="navbar-nav">

              <li class="nav-item dropdown ms-3">
                <a
                  class="nav-link"
                  id="notificationDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i class="mdi mdi-bell-outline"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-left navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <h6 class="px-3 py-3 fw-semibold mb-0">Notifications</h6>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-success">
                        <i class="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div
                      class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                    >
                      <h6 class="preview-subject fw-normal mb-0">
                        New order recieved
                      </h6>
                      <p class="text-gray ellipsis mb-0">45 sec ago</p>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-warning">
                        <i class="mdi mdi-image-filter-vintage"></i>
                      </div>
                    </div>
                    <div
                      class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                    >
                      <h6 class="preview-subject fw-normal mb-0">
                        Server limit reached
                      </h6>
                      <p class="text-gray ellipsis mb-0">55 sec ago</p>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-info">
                        <i class="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div
                      class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                    >
                      <h6 class="preview-subject fw-normal mb-0">
                        Kevin karvelle
                      </h6>
                      <p class="text-gray ellipsis mb-0">11:09 PM</p>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <h6 class="p-3 font-13 mb-0 text-primary text-center">
                    View all notifications
                  </h6>
                </div>
              </li>
            </ul>

            <button
              class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span class="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper pb-0">
            <div class="page-header flex-wrap">
              <div class="header-left">
                <!-- <button class="btn btn-primary mb-2 mb-md-0 me-2">
                  Create new document
                </button>
                <button class="btn btn-outline-primary bg-white mb-2 mb-md-0">
                  Import documents
                </button> -->
              </div>
              <div class="header-right d-flex flex-wrap mt-2 mt-sm-0">
                <!-- <div class="d-flex align-items-center">
                  <a href="#">
                    <p class="m-0 pe-3">Dashboard</p>
                  </a>
                  <a class="ps-3 me-4" href="#">
                    <p class="m-0">{{ $page.props.auth.user.name }}</p>
                  </a>
                </div> -->
                <button
                  type="button"
                  class="btn btn-primary mt-2 mt-sm-0 btn-icon-text"
                >
                  <i class="mdi mdi-plus-circle"></i> Fund Wallet
                </button>
              </div>
            </div>
            <!-- first row starts here -->
           <slot />
            <!-- doughnut chart row starts -->
            <!--  -->
            <!-- last row starts here -->

          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div
              class="d-sm-flex justify-content-center justify-content-sm-between"
            >
              <span
                class="text-muted text-center text-sm-left d-block d-sm-inline-block"
                >Copyright © 2024
                Topceda. All rights reserved.</span
              >
              <!-- <span
                class="float-none float-sm-end d-block mt-1 mt-sm-0 text-center"
                >Hand-crafted & made with
                <i class="mdi mdi-heart text-danger"></i
              ></span> -->
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>

      <!-- page-body-wrapper ends -->
    </div>


  </div>
</template>
