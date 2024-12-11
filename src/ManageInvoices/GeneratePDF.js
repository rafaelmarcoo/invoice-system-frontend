import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        fontFamily: 'Helvetica',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      section: {
        marginBottom: 10,
      },
      table: {
        display: 'table',
        width: '100%',
        marginTop: 10,
      },
      tableRow: {
        flexDirection: 'row',
      },
      tableCol: {
        flexGrow: 1,
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
      },
      tableHeader: {
        fontWeight: 'bold',
      },
      totalRow: {
        fontWeight: 'bold',
        textAlign: 'right',
      },
});

export const GeneratePDF = ({ company, client, invoice }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Text>{company.name}</Text>
                        <Text>{company.address}</Text>
                        <Text>{company.city}, {company.zip}</Text>
                        <Text>{company.phone}</Text>
                        <Text>{company.email}</Text>
                    </View>
                    <View>
                        <Text>Invoice: {invoice.name}-{invoice.id}</Text>
                        <Text>Date Sent: {invoice.dateSent}</Text>
                        <Text>Date Due: {invoice.dateDue}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={{ fontWeight: 'bold' }}>Invoice To:</Text>
                    <Text>{client.name}</Text>
                    <Text>{client.address}</Text>
                    <Text>{client.city}, {client.zip}</Text>
                    <Text>{client.phone}</Text>
                    <Text>{client.email}</Text>
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
                          <Text style={styles.tableCol}>{item.price}</Text>
                          <Text style={styles.tableCol}>{item.quantity * item.price}</Text>
                      </View>
                    ))}
                    <View style={styles.tableRow}>
                      <Text style={[styles.tableCol, styles.totalRow]} colSpan={3}>Total:</Text>
                      <Text style={[styles.tableCol, styles.totalRow]}>{invoice.amount}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};