import React, { useEffect, useState } from "react";
import Succes from "@/assets/img/success.svg";
import Image from "next/image";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { FaDownload } from "react-icons/fa6";
import auth from "@/utils/auth";
import axios from "axios";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const Ticket = (props) => {
  const [datapembayaran, setdata] = useState();
  const token = auth.getToken();
  const GetData = async () => {
    try {
      const config = {
        headers: {
          access_token: token,
        },
      };
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/order/${props.dataMobil.id}`,
        config
      );
      setdata(response.data);
      console.log(response.data);
    } catch {
      console.log("err");
    }
  };

  const InvoiceNumber = (min = 0, max = 500000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, "0");
  };
  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Slip Pembayaran</Text>
          <Text>{datapembayaran.User.email}</Text>
          <Text>{datapembayaran.Car.name}</Text>
          <Text>{datapembayaran.total_price}</Text>
        </View>
      </Page>
    </Document>
  );
  useEffect(() => {
    GetData();
  }, []);

  return datapembayaran && datapembayaran.data !== null ? (
    <section className="e-ticket">
      <div className="container">
        <div className="ticket">
          <Image src={Succes} alt="Succes" />
          <h3>Pembayaran Berhasil</h3>
          <h5>Tunjukkan invoice ini ke petugas BCR di titik temu.</h5>
          <div className="print-ticket">
            <div className="invoice-head">
              <div className="invoice-desc">
                <h4>Invoice</h4>
                <p>{InvoiceNumber()}</p>
              </div>

              <div className="col-3 text-end">
                <button className="button-download">
                  <FaDownload
                    className="icon-download fw-bold"
                    size="18px"
                    type="bold"
                  />
                  <PDFDownloadLink
                    document={<MyDoc />}
                    fileName={"Slip Pembayaran"}
                  >
                    {({ loading }) =>
                      loading ? "Loading document..." : "Unduh"
                    }
                  </PDFDownloadLink>
                </button>
              </div>
            </div>
            <div className="view-pdf">
              <PDFViewer style={{ width: "100%" }}>
                <MyDoc />
              </PDFViewer>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Ticket;
