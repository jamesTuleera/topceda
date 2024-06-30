<script setup>
import Button from "../Components/Button.vue";
import Ctat from "../Components/Date.vue";
import moment from "moment";

const trans = [
  {
    reference: "TP-" + Math.floor(Math.random() * 45766879905),
    amount: "N" + Math.floor(Math.random() * 200),
    desc: "Airtime",
    status: "Pending",
    date: Date(),
  },
  {
    reference: "TP-" + Math.floor(Math.random() * 45766879905),
    amount: "N" + Math.floor(Math.random() * 905),
    desc: "Data",
    status: "Successful",
    date: Date(),
  },
  {
    reference: "TP-" + Math.floor(Math.random() * 45766879905),
    amount: "N" + Math.floor(Math.random() * 705),
    desc: "Cable purchase",
    status: "Failed",
    date: Date(),
  },
  {
    reference: "TP-" + Math.floor(Math.random() * 45766879905),
    amount: "N" + Math.floor(Math.random() * 90),
    desc: "Power purchase",
    status: "Successful",
    date: Date(),
  },
];

// console.log
</script>

<template>
  <div>
    <div class="row">
        <div class="col-12  mb-4">
            <h2>Hello! {{$page.props.auth.user.name }} Welcome Back</h2>
        </div>

      <div class="col-xl-6 grid-margin">
        <div class="card stretch-card mb-3">
          <div class="card-body d-flex flex-wrap justify-content-between">
            <div>
              <h4 class="fw-semibold mb-1 text-black">Balance</h4>
              <h6 class="text-muted">{{ moment(Date()) }}</h6>
            </div>
            <h2 class="text-success fw-bold">N2,890.00</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-12">
        <Link :href="route('user.airtime')" class="btn btn-lg m-3 btn-primary">
            <i class="mdi mdi-wallet menu-icon"></i> Fund wallet
        </Link>
        <Link :href="route('user.airtime')" class="btn btn-lg m-3 btn-warning">
          <i class="fa fa-phone"></i> Airtime
        </Link>
        <Link :href="route('user.data')" class="btn btn-lg m-3 btn-dark">
            <i class="mdi mdi-access-point menu-icon"></i> Data
        </Link>
        <Link :href="route('user.cable')" class="btn btn-lg m-3 btn-danger">
            <i class="fa fa-television"></i> Cable
        </Link>
        <Link :href="route('user.power')" class="btn btn-lg m-3 btn-info">
            <i class="fa fa-bolt"></i>  Electricity
        </Link>
        <!-- <Link  :href="route('user.airtime')" class="btn btn-lg m-3 btn-dark">
                Airtime
            </Link>
            <Link  :href="route('user.airtime')" class="btn btn-lg m-3 btn-secondary">
                Airtime
            </Link> -->
      </div>
    </div>

    <!-- /////////////////////////////////// -->

    <div class="row">
      <div class="col-xl-12 grid-margin">
        <div class="card stretch-card mb-3">
          <div class="card-body">
            <h4 class="fw-semibold mb-1 text-black">Recent Transactions</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Amount.</th>
                    <th>Desc</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tran in trans" :key="tran.reference">
                    <td>
                      {{ tran.reference }}
                    </td>
                    <td>{{ tran.amount }}</td>
                    <td>{{ tran.desc }}</td>
                    <td>
                      <label
                        v-if="tran.status == 'Successful'"
                        class="badge badge-success"
                        >{{ tran.status }}</label
                      >
                      <label
                        v-if="tran.status == 'Pending'"
                        class="badge badge-warning"
                        >{{ tran.status }}</label
                      >
                      <label
                        v-if="tran.status == 'Failed'"
                        class="badge badge-danger"
                        >{{ tran.status }}</label
                      >
                    </td>
                    <td>
                      {{
                        moment($page.props.auth.user.created_at).format(
                          "DD-MM-YYYY"
                        )
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
