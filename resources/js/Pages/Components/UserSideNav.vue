<script setup>







// const nativeSidebarToggle = () => {
//     // alert('yes')
//     console.log('y4s')
//     // document.getElementById("sideBar").classList.toggle("active");
// }

const classname = document.querySelectorAll('.nav-link')

classname.forEach((e) => {
  e.addEventListener('click', () => {
    console.log('yedfadafs')
  })
})


</script>


<template>
    <div>
        <nav class="sidebar sidebar-offcanvas" id="sideBar">
            <ul class="nav" id="navUl" >
              <li class="nav-item nav-profile border-bottom">
                <a href="#" class="nav-link flex-column">
                  <div class="nav-profile-image">
                    <img src="../../assets/images/faces/face1.jpg" alt="profile" />
                    <!--change to offline or busy as needed-->
                  </div>
                  <div class="nav-profile-text d-flex ms-0 mb-3 flex-column">
                    <span class="fw-semibold mb-1 mt-2 text-center"
                      >{{ $page.props.auth.user.name }}</span
                    >
                    <span class="text-secondary icon-sm text-center">{{ $page.props.auth.user.email }}</span>
                  </div>
                </a>
              </li>
              <li class="nav-item pt-3">
                <Link class="nav-link d-block" :href="route('home')">
                  <img
                    class="sidebar-brand-logo"
                    src="../../assets/images/logo.png"
                    alt=""
                    style="width: 150px"
                  />
                  <img
                    class="sidebar-brand-logomini"
                    src="../../assets/images/logo.png"
                    alt=""
                    style="width: 150px"
                  />
                  <!-- <div class="small fw-light pt-1">Responsive Dashboard</div> -->
                </Link>
                <!-- <form class="d-flex align-items-center" action="#">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <i class="input-group-text border-0 mdi mdi-magnify"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="Search"
                    />
                  </div>
                </form> -->
              </li>
              <li class="pt-2 pb-1">
                <span class="nav-item-head"></span>
              </li>
              <li class="nav-item active">
                <Link class="nav-link"  :href="route('user.dashboard')">
                  <i class="mdi mdi-compass-outline menu-icon"></i>
                  <span class="menu-title">Dashboard</span>
                </Link>
              </li>

              <li class="nav-item ">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#ui-basic"
                  aria-expanded="false"
                  aria-controls="ui-basic"
                >
                  <i class="mdi mdi-cart menu-icon"></i>
                  <span class="menu-title">Purchase</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                        <Link class="nav-link"  :href="route('user.airtime')">Airtime</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link"  :href="route('user.data')">Data</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link"  :href="route('user.cable')">Cable</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link"  :href="route('user.power')">Electricity</Link>
                      </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <Link class="nav-link"  :href="route('home')">
                  <i class="mdi mdi-wallet menu-icon"></i>
                  <span class="menu-title">Fund wallet</span>
                </Link>
              </li>


              <li class="nav-item ">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="#transactions"
                  aria-expanded="false"
                  aria-controls="transactions"
                >
                  <i class="mdi mdi-view-list menu-icon"></i>
                  <span class="menu-title">Transactions</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="transactions">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="pages/ui-features/buttons.html"
                        >All</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="pages/ui-features/dropdowns.html"
                        >Wallet</a
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item ">
                <Link class="nav-link" :href="route('user.profile')">
                  <i class="mdi mdi-account menu-icon"></i>
                  <span class="menu-title">Profile</span>
                </Link>
              </li>


              <li class="nav-item ">
                <Link class="nav-link" method="post" :href="route('logout')">
                  <i class="mdi mdi-logout menu-icon"></i>
                  <span class="menu-title">Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
    </div>
</template>
