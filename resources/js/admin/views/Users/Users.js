import React, { Component , Fragment} from 'react';
import { Link } from 'react-router-dom';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    Table
} from 'reactstrap';

import ReactDatatable from '@ashvin27/react-datatable';
import swal from 'sweetalert'

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {modal: false, date: new Date(), usersData: null, user: {}, editMode: false, formErrors: {}};
        this.columns = [
            {
                key: "name",
                text: "Name",
                className: "name",
                align: "left",
                sortable: true,
            },
            {
                key: "email",
                text: "Email",
                className: "address",
                align: "left",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => {
                    return (
                        <Fragment>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => this.editRecord(record)}
                                style={{marginRight: '5px'}}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => this.deleteRecord(record)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            button: {
                excel: true,
                print: true
            }
        }

        this.lastFilter={};
        this.loadData = this.loadData.bind(this)
        this.toggle = this.toggle.bind(this);
        this.createRecord= this.createRecord.bind(this);
        this.saveRecord= this.saveRecord.bind(this);
        this.updateRecord= this.updateRecord.bind(this);
        this.editRecord= this.editRecord.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.hasError= this.hasError.bind(this);
    }

    componentDidMount() {
        this.loadData({page_number: 1})
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }


    loadData(data) {
        var self = this;
        data.page = data.page_number;
        this.lastFilter = data;
        axios.get('admin/api/users',{params: data}).then(function(response) {
            self.setState({usersData: response.data.users})
        });
    }

    createRecord() {
        this.setState({user: {}, modal: true,editMode: false, formErrors: {}})
    }

    saveRecord() {
        var self = this;
        let param = this.state.user;
        // param._
        axios.post('admin/api/users', param)
            .then(response => {
                console.log(response);
                this.setState({user: {}, modal: false,editMode: false, formErrors: {}})
                self.loadData(self.lastFilter);
                swal("One Record Save!", "", "success");
            })
            .catch(error => {
                if(error.response.status == 422) {
                    this.setState({formErrors: error.response.data.errors})
                }
            });
    }

    editRecord(user) {
        this.setState({user: {...user}, modal: true,editMode: true, formErrors: {}})
    }

    updateRecord() {
        var self = this;
        let param = this.state.user;
        // param._
        axios.put('admin/api/users/' + param.id, param)
            .then(response => {
                this.setState({user: {}, modal: false,editMode: false, formErrors: {}})
                self.loadData(self.lastFilter);
                swal("One Record Updated!", "", "success");
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange(event) {
        let user = this.state.user;
            user[event.target.name] = event.target.value;
        this.setState({user: user});
    }

    hasError(column) {
        return this.state.formErrors[column] ? true : false
    }


  render() {
      const {user} = this.state;
      return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                  <Button className="float-right btn btn-success" onClick={this.createRecord}>Add</Button>
              </CardHeader>
              <CardBody>
                  <ReactDatatable
                      config={this.config}
                      records={this.state.usersData ? this.state.usersData.data : []}
                      columns={this.columns}
                      dynamic={true}
                      total_record={this.state.usersData ? this.state.usersData.total : 0}
                      onChange={this.loadData}
                  />
              </CardBody>
            </Card>
          </Col>
        </Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-primary ' + this.props.className}>
              <ModalHeader toggle={this.toggle}>{ this.state.editMode ? 'Edit User' : 'Add User'}</ModalHeader>
              <ModalBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                          <Col md="3">
                              <Label htmlFor="text-input">Name</Label>
                          </Col>
                          <Col xs="12" md="9">
                              <Input type="text" id="text-input" name="name" placeholder="Enter Name"
                                     value={user.name} invalid={this.hasError('name')} onChange={this.handleChange} />
                              <FormFeedback>{this.state.formErrors.name}</FormFeedback>
                          </Col>
                      </FormGroup>
                      <FormGroup row>
                          <Col md="3">
                              <Label htmlFor="text-input">Email</Label>
                          </Col>
                          <Col xs="12" md="9">
                              <Input type="text" id="text-input" name="email" placeholder="Enter Email"
                                     value={user.email} invalid={this.hasError('email')} onChange={this.handleChange} />
                              <FormFeedback>{this.state.formErrors.email}</FormFeedback>
                          </Col>
                      </FormGroup>
                      {
                          this.state.editMode ? null : (
                              <FormGroup row>
                                  <Col md="3">
                                      <Label htmlFor="password">Password</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                      <Input type="text" id="password" name="password" placeholder="Enter Password"
                                             value={user.password} invalid={this.hasError('password')} onChange={this.handleChange} />
                                      <FormFeedback>{this.state.formErrors.password}</FormFeedback>
                                  </Col>
                              </FormGroup>
                          )
                      }
                      <input type="hidden" name="id" value={user.id} readOnly/>
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  <Button color="primary" onClick={this.state.editMode ? this.updateRecord : this.saveRecord }>{this.state.editMode ? 'Update' : 'Add'}</Button>{' '}
              </ModalFooter>
          </Modal>
      </div>
    )
  }
}

export default Users;
