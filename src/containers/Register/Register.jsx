import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import BCR83 from "@/assets/img/Group 83.png";
import LogoBCR from "@/assets/img/logo2.svg";
import Close from "@/assets/img/close.svg";
import UseRegister from "./hooks/useRegister";
import NoAuth from "../../components/noauth";
import Image from "next/image";
import Link from "next/link";

function Register() {
  const { loading, formValues, setFormValues, handleSubmit, formErrors } =
    UseRegister();

  return (
    <NoAuth>
      <div>
        <Row>
          <section className="col-lg-6">
            <Container
              style={{ minHeight: "100vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Form
                style={{
                  width: "50%",
                }}
                onSubmit={handleSubmit}
              >
                <div className="mb-3 d-flex justify-content-between">
                  <Image src={LogoBCR} alt=""></Image>
                  <Image className="d-lg-none d-sm-flex" src={Close} alt="" />
                </div>
                <h1 className="mb-3">Sign Up</h1>
                <div className="mb-3">
                  <Form.Label htmlFor="text">Name</Form.Label>
                  <Form.Control
                    name="name"
                    data-testid="Name"
                    placeholder="your name"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        name: e.target.value,
                      });
                    }}
                    value={formValues.name ?? ""}
                  />
                  <p className="text-danger">{formErrors.name}</p>
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    name="email"
                    data-testid="Email"
                    placeholder="contoh: john@gmail.com"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        email: e.target.value,
                      });
                    }}
                    value={formValues.email ?? ""}
                  />
                  <p className="text-danger">{formErrors.email}</p>
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    data-testid="Password"
                    placeholder="password 6+"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        password: e.target.value,
                      });
                    }}
                    value={formValues.password ?? ""}
                  />
                  {formErrors.password ? (
                    <p className="text-danger">{formErrors.password}</p>
                  ) : (
                    <p>Password minimal 6 karakter !!</p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="d-block w-100 mb-3 mt-3"
                  data-testid="button"
                  disabled={loading}
                >
                  {loading ? "please wait...." : "Sign Up"}
                </Button>
                <div>
                  <p>
                    Alread have an account?
                    <Link href="/login"> Sign in here</Link>
                  </p>
                </div>
              </Form>
            </Container>
          </section>
          <section className="col-lg-6 d-lg-flex d-sm-none">
            <figure>
              <Image className="w-100" src={BCR83} alt="BCR83" />
            </figure>
          </section>
        </Row>
      </div>
    </NoAuth>
  );
}

export default Register;
