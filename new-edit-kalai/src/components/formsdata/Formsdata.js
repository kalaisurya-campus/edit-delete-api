import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Formsdata(props) {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const history = useHistory();
    const emails = (e) => {
        SetEmail(e.target.value);
    };
    const passwords = (e) => {
        SetPassword(e.target.value);
    };
    useEffect(() => {
        if (localStorage.getItem("auth")) history.push("/");
    }, []);
    const handlesubmits = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email === "kalai@gmail.com" && password === "123") {
            history.push("/");
        }
        localStorage.setItem("auth", true);
        SetEmail("");
        SetPassword("");
    };
    const names = typeof "welcome";
    return (
        <div className="container">
            {/* <form onSubmit={handlesubmits}>
                <input
                    type="email"
                    onChange={emails}
                    name="email"
                    value={email}
                    placeholder="Enter the Email Address"
                />
                <input
                    type="password"
                    onChange={passwords}
                    name="password"
                    value={password}
                    placeholder="Enter the Password"
                />
                <button>login</button>
            </form> */}
            <h1>{names}</h1>
            <form onSubmit={handlesubmits}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={emails}
                        name="email"
                        value={email}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        onChange={passwords}
                        name="password"
                        value={password}
                    />
                </div>
                <div class="mb-3 form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Formsdata;





// import React, { Component } from "react";
// import { NavLink, withRouter } from "react-router-dom";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import axios from "axios";

// import { CustomerData } from "../../assets/CustomerData";
// import "./style/ListCustomers.scss";

// let url;
// class ListCustomers extends Component {
//     constructor(props) {
//         super(props);
//         url = this.props.match.url;
//         this.state = {
//             page: 1,
//             lock: false,
//             customers: {},
//         };
//         this.cust = new CustomerData();
//         this.getCleanerList = this.getCleanerList.bind(this);
//         this.scrollLoader = this.scrollLoader.bind(this);
//         this.custRedirect = this.custRedirect.bind(this);
//     }

//     componentDidMount() {
//         this.getCleanerList();
//         this.scrollLoader();
//     }

//     scrollLoader() {
//         let scroller = document.getElementsByClassName(
//             "p-datatable-scrollable-body"
//         )[0];
//         let scrollerBody = document.getElementsByClassName(
//             "p-datatable-scrollable-body-table"
//         )[0];
//         scroller.addEventListener("scroll", () => {
//             if (
//                 scroller.scrollTop >
//                 (scrollerBody.clientHeight - scroller.clientHeight) * 0.85
//             ) {
//                 if (!this.state.lock && this.state.customers.next) {
//                     this.setState({ lock: true }, () => {
//                         this.setState({ page: this.state.page + 1 }, () => {
//                             this.getCleanerList();
//                         });
//                     });
//                 }
//             }
//         });
//     }

//     getCleanerList() {
//         axios
//             .get(`/admin/manage_customer?page_no=${this.state.page}`)
//             .then((res) => {
//                 console.log(res.data.Data);
//                 if (Object.keys(this.state.customers).length != 0) {
//                     let list = this.state.customers.results;
//                     list.push(...res.data.Data.results);
//                     res.data.Data.results = list;
//                     // console.log(res.data.Data);
//                     this.setState({ customers: res.data.Data });
//                 } else {
//                     this.setState({ customers: res.data.Data });
//                 }
//                 this.setState({ lock: false });
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     custRedirect(rowData) {
//         this.props.history.push(`${url}/${rowData.data.username}`);
//     }
//     render() {
//         return (
//             <div className="list-customers">
//                 <h2>Customer List</h2>
//                 <div className="list-customers-body">
//                     <DataTable
//                         value={this.state.customers.results}
//                         scrollable
//                         scrollHeight="100%"
//                         onRowClick={this.custRedirect}
//                     >
//                         <Column
//                             field="name"
//                             header="Name"
//                             body={this.cust.nameTemplate}
//                         ></Column>
//                         <Column
//                             field="mobile_no"
//                             header="Mobile_No"
//                             body={this.cust.phoneTemplate}
//                         ></Column>
//                         <Column
//                             field="email"
//                             header="Email"
//                             body={this.cust.emailTemplate}
//                         ></Column>
//                         <Column
//                             field="leave"
//                             header="Car Type"
//                             body={this.cust.carTypeTemplate}
//                         ></Column>
//                         <Column
//                             field="orders"
//                             header="No. of Orders"
//                             body={this.cust.appointmentTemplate}
//                         ></Column>
//                     </DataTable>
//                 </div>
//             </div>
//         );
//     }
// }

// export default withRouter(ListCustomers);
