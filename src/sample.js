import React, { Component } from 'react';
class Sampleform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            city: "",
            age: "",
            gender: "",
            select: "",
            array: [],
            option: [{
                label: "Select",
                value: "select"
            }
                , {
                label: "Married",
                value: "married"
            }, {
                label: "Unmarried",
                value: "unmarried"
            }
            ]
        }
    }
    // var object = { fName: this.state.fName, lName: this.state.lName };
    submit = () => {
        const formObj = {
            userName: this.state.name,
            userCity: this.state.city,
            userAge: this.state.age,
            userGender: this.state.gender,
            userSelect: this.state.select,
        };
        var arr = [...this.state.array];
        arr.push(formObj);
        console.log(arr);
        // this.setState({ ...this.state, array: arr, fName: "", lName: "" });
        this.setState({ ...this.state, array: arr, userName: "", userCity: "", age: "", gender: "", select: "" });
        console.log(formObj);
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <input type="text" value={this.state.name} className="form-control col-4 mt-3" placeholder="Name" onChange={(event) =>
                        this.setState({ ...this.state, name: event.target.value })}></input>
                </div>
                <div className="row">
                    <input type="text" value={this.state.city} class="form-control col-4 mt-3" placeholder="City" onChange={(event) =>
                        this.setState({ ...this.state, city: event.target.value })} ></input>
                </div>
                <div className="row">
                    <input type="number" className="form-control col-4 mt-3" placeholder="Age" onChange={(event) =>
                        this.setState({ ...this.state, age: event.target.value })} />
                </div>

                <div className="row">
                    <select value={this.state.select} onChange={(event) =>
                        this.setState({ ...this.state, select: event.target.value })} className="form-control col-4 mt-3">
                        {this.state.option.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <label className="mt-3">Gender</label>
                <input type="radio" className="ml-2" value="male" checked={this.state.gender == 'male'} onChange={(event) => this.setState({ ...this.state, gender: event.target.value })} />
                <label >Male</label>
                <input type="radio" className="ml-2" value="female" checked={this.state.gender == 'female'} onChange={(event) => this.setState({ ...this.state, gender: event.target.value })} />
                <label >Female</label>
                <div>
                    <button onClick={this.submit} type="button" class="btn btn-outline-primary mt-3">Submit</button>
                </div>

                {this.state.array.map((variablename, index) => {
                    {/* <h1>{variablename.userName}</h1> */ }
                    return (<div className="container">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Age</th>
                                    <th>marriage status</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{variablename.userName}</td>
                                    <td>{variablename.userCity}</td>
                                    <td>{variablename.userAge}</td>
                                    <td>{variablename.userGender}</td>
                                    <td>{variablename.userSelect}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                })}
                <br></br>
                <div className="container">

                </div>
            </div>
        );
    }
}
export default Sampleform;


{/* {this.state.array.map((variable,index) => {
    return(<div>
        </div>)
})} */}













