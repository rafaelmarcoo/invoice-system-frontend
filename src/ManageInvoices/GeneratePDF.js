import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logoUrl from './Logo.png';

const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontSize: 12,
      fontFamily: 'Helvetica',
      lineHeight: 1.5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
      paddingBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#0077cc',
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 30,
      fontSize: 30,
    },
    companyDetails: {
      flex: 1,
      color: '#0077cc'
    },
    invoiceDetails: {
      flex: 1,
      textAlign: 'right',
    },
    section: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    clientInfo: {
      flex: 1,
    },
    paymentInfo: {
      flex: 1,
      textAlign: 'right',
    },
    boldText: {
      fontWeight: 'bold',
    },
    table: {
      display: 'table',
      width: '100%',
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#0077cc',
      borderStyle: 'solid',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#0077cc',
    },
    tableCol: {
      flexGrow: 1,
      textAlign: 'center',
      padding: 5,
    },
    tableHeader: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
      color: '#0077cc'
    },
    totalRow: {
      fontWeight: 'bold',
      textAlign: 'right',
    },
    footer: {
      marginTop: 40,
      borderTopWidth: 1,
      borderTopColor: '#0077cc',
      paddingTop: 10,
      textAlign: 'center',
      fontSize: 10,
      color: '#888',
    },
    logo: {
      width: 100,
      heigth: 100,
      marginBottom: 20,
      alignSelf: 'center',
    },
});

export const GeneratePDF = ({ company, client, invoice }) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Image style={styles.logo} src={logoUrl} />
          <View style={styles.title}>
            <Text>TAX SUMMARY</Text>
          </View>
          <View style={styles.header}>
            <View style={styles.companyDetails}>
              <Text>{company.name}</Text>
              <Text>{company.address}</Text>
              <Text>{company.city}, {company.zip}</Text>
              <Text>{company.phone}</Text>
              <Text>{company.email}</Text>
            </View>
            <View style={styles.invoiceDetails}>
              <Text>Invoice: {invoice.name}-{invoice.id}</Text>
              <Text>Date Sent: {invoice.dateSent}</Text>
              <Text>Date Due: {invoice.dateDue}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.clientInfo}>
              <Text style={styles.boldText}>Invoice To:</Text>
              <Text>{client.name}</Text>
              <Text>{client.address}</Text>
              <Text>{client.city}, {client.zip}</Text>
              <Text>{client.phone}</Text>
              <Text>{client.email}</Text>
            </View>
            <View style={styles.paymentInfo}>
              <Text>Payment Information</Text>
              <Text>Payment Method: Direct Credit</Text>
              <Text>Bank: Westpac Bank</Text>
              <Text>Account Name: HexWeb Ltd.</Text>
              <Text>Account Number: 03 0162 0184682 000</Text>
              <Text>Reference: {invoice.name}-{invoice.id}</Text>
            </View>
          </View>

          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCol}>Description</Text>
              <Text style={styles.tableCol}>Quantity</Text>
              <Text style={styles.tableCol}>Price</Text>
              <Text style={styles.tableCol}>Total</Text>
            </View>
            {invoice.items.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCol}>{item.description}</Text>
                  <Text style={styles.tableCol}>{item.quantity}</Text>
                  <Text style={styles.tableCol}>${item.price.toFixed(2)}</Text>
                  <Text style={styles.tableCol}>${(item.quantity * item.price).toFixed(2)}</Text>
              </View>
            ))}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, { flexGrow: 3, textAlign: 'right' }]}>Sub-Total:</Text>
              <Text style={styles.tableCol}>${(invoice.amount - invoice.gst).toFixed(2)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, { flexGrow: 3, textAlign: 'right' }]}>GST 15%:</Text>
              <Text style={styles.tableCol}>${invoice.gst.toFixed(2)}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, { flexGrow: 3, textAlign: 'right' }]}>Grand Total:</Text>
              <Text style={styles.tableCol}>${invoice.amount.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text>Thank you for your business!</Text>
          </View>
              
        </Page>
      </Document>
    );
};